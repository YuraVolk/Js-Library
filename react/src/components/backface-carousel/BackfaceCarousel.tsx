import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { ContextLinkedItems, ExposedContextFunctions } from "../../../src/interfaces/hooks/useLinkedItem";
import styles from "./BackfaceCarousel.module.css";
import carouselControlsStyles from "../../interfaces/generic/CarouselControls.module.css";
import { useResizeListener } from "../../interfaces/hooks/useResizeListener";
import { useInterval } from "../../interfaces/hooks/useInterval";

export const BackfaceCarousel = (props: { children: React.ReactNode; isVertical?: boolean }) => {
	const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
	const [isHorizontal, setHorizontal] = useState(!props.isVertical);
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

	useResizeListener(setup);

	return (
		<ContextLinkedItems ref={linkedItemsContext} onAllElementsLoaded={setup} innerChildren={props.children}>
			<div>
				<div className={`${styles["backface-carousel"]} ${isHorizontal ? "" : styles["backface-carousel--vertical"]}`}>
					<ul className={styles["backface-carousel-items"]} style={carouselStyles}>
						{props.children}
					</ul>
				</div>
				<div className={carouselControlsStyles["carousel-controls"]}>
					<button className={carouselControlsStyles["carousel-controls__previous-button"]} onClick={previousSlide}></button>
					<button className={carouselControlsStyles["carousel-controls__perspective-button"]} onClick={switchPerspective}>
						Switch
					</button>
					<button className={carouselControlsStyles["carousel-controls__next-button"]} onClick={nextSlide}></button>
				</div>
			</div>
		</ContextLinkedItems>
	);
};
