import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { ContextLinkedItems, ExposedContextFunctions } from "../../../src/interfaces/hooks/useLinkedItem";
import styles from "./BackfaceCarousel.module.css";
import carouselControlsStyles from "../../interfaces/generic/CarouselControls.module.css";
import { useResizeListener } from "../../interfaces/hooks/useResizeListener";
import { useInterval } from "../../interfaces/hooks/useInterval";
import { WithChildren } from "../../utils/utils";
import { CarouselConfiguration } from "shared/interfaces/carousel";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";
import { useAutoplay } from "../../interfaces/hooks/useAutoplay";
import { getCurrentItemCallback } from "../../utils/carousel";

export const BackfaceCarousel = ({
	isVertical = false,
	allowSwitchingOrientation = true,
	showArrows = true,
	showToggles = false,
	autoplay,
	children,
	...props
}: WithChildren<CarouselConfiguration> & GenericReactComponentProps) => {
	const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
	const [isHorizontal, setHorizontal] = useState(!isVertical);
	const [carouselStyles, setCarouselStyles] = useState<CSSProperties>({});
	const [currentItem, setCurrentItem] = useState(0);

	const rotateCarousel = useCallback(
		(newCurrentImage: number) => {
			const elements = linkedItemsContext.current?.getState();
			if (!elements) return;

			const items = Object.values(elements);
			const length = items.length,
				theta = (2 * Math.PI) / length;
			setCarouselStyles((carouselStyles) => ({
				...carouselStyles,
				transform: `rotate${isHorizontal ? "Y" : "X"}(${String(newCurrentImage * -theta)}rad)`
			}));
			setCurrentItem(newCurrentImage);
		},
		[isHorizontal]
	);

	const setup = useCallback(() => {
		const elements = linkedItemsContext.current?.getState();
		if (!elements) return;

		const items = Object.values(elements);
		const firstItem = items[0].element.current;
		if (!firstItem) return;

		const length = items.length,
			theta = (2 * Math.PI) / length,
			size = parseFloat(getComputedStyle(firstItem)[isHorizontal ? "width" : "height"]);
		const apothem = size / (2 * Math.tan(Math.PI / length));
		setCarouselStyles((carouselStyles) => ({
			...carouselStyles,
			transformOrigin: `50% 50% ${String(-apothem)}px`
		}));

		for (let i = 0; i < length; i++) {
			items[i].styles = {};
			items[i].styles.padding = "0";
			if (i === 0) continue;
			items[i].styles.transformOrigin = `50% 50% ${String(-apothem)}px`;
			items[i].styles.transform = `rotate${isHorizontal ? "Y" : "X"}(${String(i * theta)}rad)`;
		}

		linkedItemsContext.current?.updateState(
			Object.keys(elements).reduce(
				(obj, key, i) => ({
					...obj,
					[key]: items[i]
				}),
				{}
			)
		);
		rotateCarousel(currentItem);
	}, [currentItem, isHorizontal, rotateCarousel]);

	const { abortInterval } = useInterval(
		useCallback(() => {
			setup();
		}, [setup]),
		250
	);

	const nextSlide = useCallback(() => {
		abortInterval();
		rotateCarousel(currentItem + 1);
	}, [abortInterval, currentItem, rotateCarousel]);

	const previousSlide = useCallback(() => {
		abortInterval();
		rotateCarousel(currentItem - 1);
	}, [abortInterval, currentItem, rotateCarousel]);

	const switchPerspective = useCallback(() => {
		abortInterval();
		setHorizontal((isHorizontal) => !isHorizontal);
	}, [abortInterval]);

	useEffect(() => {
		if (linkedItemsContext.current?.wasSetupPerformed()) setup();
	}, [isHorizontal, setup]);

	const { abortTimeout } = useAutoplay({ autoplay, nextSlide, previousSlide });
	useResizeListener(setup);

	const { realCurrentItem, childrenLength, getCurrentItem } = getCurrentItemCallback({ children, currentItem });
	return (
		<ContextLinkedItems ref={linkedItemsContext} onAllElementsLoaded={setup} innerChildren={children}>
			<div {...props}>
				<div className={`${styles["backface-carousel"]} ${isHorizontal ? "" : styles["backface-carousel--vertical"]}`}>
					<ul className={styles["backface-carousel-items"]} style={carouselStyles}>
						{children}
					</ul>
				</div>
				{(showArrows || allowSwitchingOrientation) && (
					<div className={carouselControlsStyles["carousel-controls"]}>
						{showArrows && (
							<button
								className={carouselControlsStyles["carousel-controls__previous-button"]}
								onClick={() => {
									abortTimeout();
									previousSlide();
								}}
							></button>
						)}
						{allowSwitchingOrientation && (
							<button
								className={carouselControlsStyles["carousel-controls__perspective-button"]}
								onClick={() => {
									abortTimeout();
									switchPerspective();
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
									nextSlide();
								}}
							></button>
						)}
					</div>
				)}
				{showToggles && (
					<ul className={carouselControlsStyles["carousel-controls__toggles"]}>
						{Array.from({ length: childrenLength }, (_, i) => (
							<li
								key={i}
								className={`${carouselControlsStyles["carousel-controls__toggle"]} ${i === realCurrentItem ? carouselControlsStyles["carousel-controls__toggle--active"] : ""}`}
								onClick={() => {
									abortTimeout();
									rotateCarousel(getCurrentItem(i));
								}}
							></li>
						))}
					</ul>
				)}
			</div>
		</ContextLinkedItems>
	);
};
