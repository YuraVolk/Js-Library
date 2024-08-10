import React, { useCallback, useMemo, useRef, useState } from "react";
import { ContextLinkedItems, ExposedContextFunctions, LinkedReactItem } from "../../interfaces/hooks/useLinkedItem";
import { MenuCarouselConfiguration, MenuCarouselInternalItem } from "shared/component/menuCarousel";
import { assertNonUndefined, assertNonUndefinedDevOnly } from "shared/utils/utils";
import { WithChildren } from "../../utils/utils";
import { CarouselDirection } from "shared/interfaces/carousel";
import carouselControlsStyles from "../../interfaces/generic/CarouselControls.module.css";
import styles from "./MenuCarousel.module.css";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";
import { useResizeListener } from "../../interfaces/hooks/useResizeListener";
import { useAutoplay } from "../../interfaces/hooks/useAutoplay";
import { getCurrentItemCallback } from "../../utils/carousel";

interface MenuItemProperties {
	elementData: Record<string, LinkedReactItem>;
	elementKey: string;
	setElementData: React.Dispatch<React.SetStateAction<Record<string, LinkedReactItem>>>;
}

class Item extends MenuCarouselInternalItem {
	constructor(private configuration: MenuItemProperties) {
		const element = configuration.elementData[configuration.elementKey].element.current;
		assertNonUndefined(element);
		super(element);
	}

	initStyles() {
		this.configuration.setElementData((elements) => ({
			...elements,
			[this.configuration.elementKey]: {
				...elements[this.configuration.elementKey],
				styles: {
					position: "absolute"
				}
			}
		}));
		return this;
	}

	setMovingStyle(x: number, y: number, scale: number) {
		this.configuration.setElementData((elements) => ({
			...elements,
			[this.configuration.elementKey]: {
				...elements[this.configuration.elementKey],
				styles: {
					position: "absolute",
					width: String(this.width) + "px",
					left: String(x) + "px",
					top: String(y) + "px",
					zIndex: String((scale * 100) | 0)
				}
			}
		}));
	}
}

export const MenuCarousel = ({
	xPos: xPosProp,
	xRadius: xRadiusProp,
	yPos: yPosProp = 112,
	yRadius: yRadiusProp = 128,
	farScale = 0.9,
	speed = 0.11,
	showArrows = true,
	showToggles = false,
	allowSwitchingOrientation = false,
	autoplay,
	isVertical: isVerticalProp = false,
	children,
	className
}: WithChildren<Partial<MenuCarouselConfiguration>> & GenericReactComponentProps) => {
	const rotation = useRef(Math.PI / 2);
	const destRotation = useRef(Math.PI / 2);
	const frameTimer = useRef<number | undefined>();
	const xRadiusRef = useRef(xRadiusProp);
	const yRadiusRef = useRef<number | undefined>(yRadiusProp);
	const xPosRef = useRef(xPosProp);
	const yPosRef = useRef(yPosProp);
	const isVertical = useRef(isVerticalProp);
	const [currentItem, setCurrentItem] = useState(0);

	const getPositions = () => {
		return {
			xPos: xPosRef,
			yPos: yPosRef,
			xRadius: isVertical.current ? yRadiusRef : xRadiusRef,
			yRadius: isVertical.current ? xRadiusRef : yRadiusRef
		};
	};

	const carousel = useRef<HTMLUListElement | null>(null);
	const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
	const items = useRef<Item[]>([]);

	const rotateItem = useCallback(
		(itemIndex: number, rotation: number) => {
			const item = items.current[itemIndex];
			const sin = Math.sin(rotation);
			const scale = farScale + (1 - farScale) * (sin + 1) * 0.5;
			assertNonUndefinedDevOnly(xPosRef.current);
			assertNonUndefinedDevOnly(xRadiusRef.current);
			item.moveTo(
				xPosRef.current + scale * (Math.cos(rotation) * xRadiusRef.current - item.fullWidth / 2),
				yPosRef.current + scale * sin * (yRadiusRef.current ?? 1) + yPosRef.current / 2.3,
				scale
			);
		},
		[farScale]
	);

	const { scheduleNextFrame, carouselRender } = useMemo(() => {
		const carouselRender = () => {
			const count = items.current.length;
			const spacing = (2 * Math.PI) / count;
			let radians = rotation.current;
			for (let i = 0; i < count; i++) {
				rotateItem(i, radians);
				radians += spacing;
			}
		};

		const playFrame = () => {
			const change = destRotation.current - rotation.current;
			if (Math.abs(change) <= 0) {
				rotation.current = destRotation.current;
				window.clearTimeout(frameTimer.current);
				frameTimer.current = undefined;
			} else {
				rotation.current += change * speed;
				scheduleNextFrame();
			}

			carouselRender();
		};

		const scheduleNextFrame = () => {
			frameTimer.current = window.setTimeout(() => {
				playFrame();
			}, 32);
		};

		return { carouselRender, scheduleNextFrame };
	}, [rotateItem, speed]);

	const go = useCallback(
		(count: number) => {
			destRotation.current += ((2 * Math.PI) / items.current.length) * count;
			if (frameTimer.current === undefined) scheduleNextFrame();
		},
		[scheduleNextFrame]
	);

	const setupCarousel = useCallback(() => {
		if (!carousel.current) return;

		const { xPos, yPos, xRadius, yRadius } = getPositions();
		xPos.current ??= carousel.current.offsetWidth * 0.5;
		yPos.current = carousel.current.offsetHeight * 0.1;
		xRadius.current ??= carousel.current.offsetWidth / 2.3;
		yRadius.current = carousel.current.offsetHeight / 6;
		items.current = [];

		assertNonUndefined(linkedItemsContext.current);
		const elementData = linkedItemsContext.current.getState();
		for (const [elementKey, image] of Object.entries(elementData)) {
			assertNonUndefined(image.element.current);
			const styles = Object.fromEntries([...Object.entries(image.element.current.style)].filter(([k]) => isNaN(Number(k))));
			image.element.current.removeAttribute("style");
			items.current.push(new Item({ elementData, elementKey, setElementData: linkedItemsContext.current.updateState }).initStyles());
			Object.assign(image.element.current.style, styles);
		}

		carouselRender();
	}, [carouselRender]);

	const onResize = useCallback(() => {
		const { xRadius, xPos } = getPositions();
		xRadius.current = undefined;
		xPos.current = undefined;
		setupCarousel();
	}, [setupCarousel]);

	const nextSlide = useCallback(() => {
		go(CarouselDirection.BACKWARDS);
		setCurrentItem((activeSlide) => activeSlide - 1);
	}, [go]);

	const previousSlide = useCallback(() => {
		go(CarouselDirection.FORWARDS);
		setCurrentItem((activeSlide) => activeSlide + 1);
	}, [go]);

	const switchOrientation = useCallback(() => {
		isVertical.current = !isVertical.current;
		onResize();
	}, [onResize]);

	useResizeListener(onResize);
	const { abortTimeout } = useAutoplay({ autoplay, nextSlide, previousSlide });

	const { realCurrentItem, childrenLength, getCurrentItem } = getCurrentItemCallback({ children, currentItem });
	return (
		<ContextLinkedItems ref={linkedItemsContext} innerChildren={children} onAllElementsLoaded={setupCarousel}>
			<ul ref={carousel} className={`${styles["carousel"]} ${className ?? ""}`}>
				{children}
				{(allowSwitchingOrientation || showArrows) && (
					<li className={`${styles["carousel-controls"]} ${carouselControlsStyles["carousel-controls"]}`}>
						{showArrows && (
							<button
								className={carouselControlsStyles["carousel-controls__previous-button"]}
								onClick={() => {
									abortTimeout();
									nextSlide();
								}}
							></button>
						)}
						{allowSwitchingOrientation && (
							<button
								className={carouselControlsStyles["carousel-controls__perspective-button"]}
								onClick={() => {
									abortTimeout();
									switchOrientation();
								}}
							>
								Switch
							</button>
						)}
						{showArrows && (
							<button
								className={carouselControlsStyles["carousel-controls__next-button"]}
								onClick={() => {
									abortTimeout();
									previousSlide();
								}}
							></button>
						)}
					</li>
				)}
				{showToggles && (
					<li className={`${styles["carousel-toggles"]} ${carouselControlsStyles["carousel-controls__toggles"]}`}>
						{Array.from({ length: childrenLength }, (_, i) => (
							<div
								key={i}
								className={`${carouselControlsStyles["carousel-controls__toggle"]} ${i === realCurrentItem ? carouselControlsStyles["carousel-controls__toggle--active"] : ""}`}
								onClick={() => {
									abortTimeout();
									const difference = (getCurrentItem(i) % childrenLength) - (currentItem % childrenLength);
									go(difference);
									setCurrentItem((currentItem) => currentItem + difference);
								}}
							></div>
						))}
					</li>
				)}
			</ul>
		</ContextLinkedItems>
	);
};
