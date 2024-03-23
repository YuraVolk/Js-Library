import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { ContextLinkedItems, ExposedContextFunctions, LinkedReactItem } from "../../interfaces/hooks/useLinkedItem";
import { MenuCarouselConfiguration, MenuCarouselInternalItem } from "shared/component/menuCarousel";
import { assertNonUndefined, assertNonUndefinedDevOnly } from "shared/utils/utils";
import { WithChildren } from "../../utils/utils";
import { CarouselDirection } from "shared/interfaces/carousel";
import carouselControlsStyles from "../../interfaces/generic/CarouselControls.module.css";
import styles from "./MenuCarousel.module.css";
import { GenericReactComponentProps } from "react/src/interfaces/generic/classNameFallthrough";

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
	yPos = 112,
	yRadius = 128,
	farScale = 0.9,
	speed = 0.11,
	...props
}: WithChildren<Partial<MenuCarouselConfiguration>> & GenericReactComponentProps) => {
	const rotation = useRef(Math.PI / 2);
	const destRotation = useRef(Math.PI / 2);
	const frameTimer = useRef<number | undefined>();
	const xRadius = useRef(props.xRadius);
	const yRadiusRef = useRef(yRadius);
	const xPos = useRef(props.xPos);
	const yPosRef = useRef(yPos);

	const carousel = useRef<HTMLUListElement | null>(null);
	const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
	const items = useRef<Item[]>([]);

	const rotateItem = useCallback(
		(itemIndex: number, rotation: number) => {
			const item = items.current[itemIndex];
			const sin = Math.sin(rotation);
			const scale = farScale + (1 - farScale) * (sin + 1) * 0.5;
			assertNonUndefinedDevOnly(xPos.current);
			assertNonUndefinedDevOnly(xRadius.current);
			item.moveTo(
				xPos.current + scale * (Math.cos(rotation) * xRadius.current - item.fullWidth / 2),
				yPosRef.current + scale * sin * yRadiusRef.current + yPosRef.current / 2.3,
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
		xPos.current ??= carousel.current.offsetWidth * 0.5;
		yPosRef.current = carousel.current.offsetHeight * 0.1;
		xRadius.current ??= carousel.current.offsetWidth / 2.3;
		yRadiusRef.current = carousel.current.offsetHeight / 6;
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
		xRadius.current = undefined;
		xPos.current = undefined;
		setupCarousel();
	}, [setupCarousel]);

	const goBack = useCallback(() => {
		go(CarouselDirection.BACKWARDS);
	}, [go]);

	const goForward = useCallback(() => {
		go(CarouselDirection.FORWARDS);
	}, [go]);

	useEffect(() => {
		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, [onResize]);

	return (
		<ContextLinkedItems ref={linkedItemsContext} innerChildren={props.children} onAllElementsLoaded={setupCarousel}>
			<ul ref={carousel} className={`${styles["carousel"]} ${props.className ?? ""}`}>
				{props.children}
				<li className={`${styles["carousel-controls"]} ${carouselControlsStyles["carousel-controls"]}`}>
					<button className={carouselControlsStyles["carousel-controls__previous-button"]} onClick={goBack}></button>
					<button className={carouselControlsStyles["carousel-controls__next-button"]} onClick={goForward}></button>
				</li>
			</ul>
		</ContextLinkedItems>
	);
};
