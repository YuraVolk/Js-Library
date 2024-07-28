import React, { Children, useCallback, useEffect, useRef, useState } from "react";
import { ExposedContextFunctions, ContextLinkedItems } from "../../interfaces/hooks/useLinkedItem";
import { easeInOutQuad } from "shared/component/onePageScroll";
import { OnePageScrollConfiguration } from "../../interfaces/component/onePageScroll";
import styles from "./OnePageScroll.module.css";
import carouselControlsStyles from "../../interfaces/generic/CarouselControls.module.css";
import { CarouselDirection } from "shared/interfaces/carousel";
import { useAutoplay } from "../../interfaces/hooks/useAutoplay";
import { useStateWithCallback } from "../../interfaces/hooks/useStateWithCallback";

export const OnePageScroll = ({
	noScrollbar = true,
	increment = 6,
	duration = 500,
	children,
	isVertical: isVerticalProp = true,
	autoplay,
	allowSwitchingOrientation = false,
	showArrows = false,
	showToggles = false,
	...props
}: OnePageScrollConfiguration) => {
	const previousItem = useRef(0);
	const [isVertical, setVertical] = useStateWithCallback(isVerticalProp, () => {
		navigateToItem(previousItem.current);
	});
	
	const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
	const wrap = useRef<HTMLDivElement | null>(null);
	const animationTimeout = useRef<{ timer?: number }>({ timer: undefined });
	const [currentItem, setCurrentItem] = useState(0);
	const isScrolling = useRef(false);

	const smoothScrollTo = useCallback(
		(to: number) => {
			if (!wrap.current) return;
			isScrolling.current = true;
			const property = isVertical ? "scrollTop" : "scrollLeft";
			const start = wrap.current[property],
				change = to - start;
			let currentTime = 0;

			const animateScroll = () => {
				if (!wrap.current) return;
				currentTime += increment;
				const quad = easeInOutQuad(currentTime, start, change, duration);
				if (quad > increment) {
					wrap.current[property] = quad - increment / 2;
				} else wrap.current[property] = quad;

				if (currentTime < duration) {
					animationTimeout.current.timer = window.setTimeout(animateScroll, increment);
				} else if (currentTime >= duration) {
					wrap.current[property] = to;
					isScrolling.current = false;
				}
			};

			animateScroll();
		},
		[duration, increment, isVertical]
	);

	const scrollSlide = useCallback(
		(direction: CarouselDirection) => {
			const element = Object.values(linkedItemsContext.current?.getState() ?? {})[currentItem]?.element?.current;
			if (isScrolling.current || !element) return;
			const newCurrentItem = currentItem + direction;
			setCurrentItem(newCurrentItem);
			smoothScrollTo(element[isVertical ? "offsetHeight" : "offsetWidth"] * newCurrentItem);
		},
		[currentItem, isVertical, smoothScrollTo]
	);

	const nextSlide = useCallback(() => {
		const elements = linkedItemsContext.current?.getState();
		if (!elements) return;
		const elementsLength = Object.keys(elements).length;

		if (currentItem >= elementsLength - 1) {
			if (isScrolling.current) return;
			setCurrentItem(0);
			smoothScrollTo(0);
		} else scrollSlide(CarouselDirection.FORWARDS);
	}, [currentItem, scrollSlide, smoothScrollTo]);

	const previousSlide = useCallback(() => {
		const elements = linkedItemsContext.current?.getState();
		if (!elements) return;
		const elementsLength = Object.keys(elements).length;
		const firstElement = Object.values(elements)[0].element.current;
		if (!firstElement) return;

		if (currentItem === 0) {
			if (isScrolling.current || !wrap.current) return;
			setCurrentItem(elementsLength - 1);
			smoothScrollTo(
				(isVertical ? wrap.current.scrollHeight : wrap.current.scrollWidth) -
					(isVertical ? firstElement.offsetHeight : firstElement.offsetWidth)
			);
		} else scrollSlide(CarouselDirection.BACKWARDS);
	}, [currentItem, isVertical, scrollSlide, smoothScrollTo]);

	const { abortTimeout } = useAutoplay({ autoplay, nextSlide, previousSlide });
	const navigateToItem = useCallback(
		(item: number) => {
			const element = Object.values(linkedItemsContext.current?.getState() ?? {})[0]?.element?.current;
			if (isScrolling.current || !element) return;
			setCurrentItem(item);
			smoothScrollTo(element[isVertical ? "offsetHeight" : "offsetWidth"] * item);
			abortTimeout();
		},
		[abortTimeout, isVertical, smoothScrollTo]
	);

	const switchOrientation = useCallback(() => {
		if (isScrolling.current || !wrap.current) return;
		previousItem.current = currentItem;
		setCurrentItem(0);
		abortTimeout();
		setVertical((isVertical) => !isVertical);
	}, [abortTimeout, currentItem, setVertical]);

	const onWheel = useCallback(
		(event: React.WheelEvent<HTMLDivElement>) => {
			if (event.deltaY > 0) {
				nextSlide();
			} else previousSlide();
			abortTimeout();
		},
		[abortTimeout, nextSlide, previousSlide]
	);

	useEffect(() => {
		const animationTimeoutObject = animationTimeout.current;

		return () => {
			window.clearTimeout(animationTimeoutObject.timer);
		};
	}, []);

	return (
		<ContextLinkedItems ref={linkedItemsContext} innerChildren={children}>
			<article {...props}>
				<div
					ref={wrap}
					onWheel={onWheel}
					className={`${styles.wrap} ${isVertical ? "" : styles["wrap--horizontal"]} ${noScrollbar ? styles["wrap--no-scrollbar"] : ""}`}
				>
					{children}
				</div>
			</article>
			{(allowSwitchingOrientation || showArrows) && (
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
								nextSlide();
							}}
						></button>
					)}
				</div>
			)}
			{showToggles && (
				<ul className={carouselControlsStyles["carousel-controls__toggles"]}>
					{Array.from({ length: Children.count(children) }, (_, i) => (
						<li
							key={i}
							className={`${carouselControlsStyles["carousel-controls__toggle"]} ${i === currentItem ? carouselControlsStyles["carousel-controls__toggle--active"] : ""}`}
							onClick={() => {
								navigateToItem(i);
							}}
						></li>
					))}
				</ul>
			)}
		</ContextLinkedItems>
	);
};
