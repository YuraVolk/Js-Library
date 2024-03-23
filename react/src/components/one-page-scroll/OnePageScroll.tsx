import React, { useCallback, useEffect, useRef } from "react";
import { ExposedContextFunctions, ContextLinkedItems } from "../../interfaces/hooks/useLinkedItem";
import { easeInOutQuad } from "shared/component/onePageScroll";
import { OnePageScrollConfiguration } from "../../interfaces/component/onePageScroll";
import styles from "./OnePageScroll.module.css";
import { CarouselDirection } from "shared/interfaces/carousel";

export const OnePageScroll = ({
	isHorizontal = false,
	noScrollbar = true,
	increment = 6,
	duration = 500,
	...props
}: OnePageScrollConfiguration) => {
	const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
	const wrap = useRef<HTMLDivElement | null>(null);
	const animationTimeout = useRef<{ timer?: number }>({ timer: undefined });
	const selectedItem = useRef(0);
	const isScrolling = useRef(false);

	const smoothScrollTo = useCallback(
		(to: number) => {
			if (!wrap.current) return;
			isScrolling.current = true;
			const property = isHorizontal ? "scrollLeft" : "scrollTop";
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
		[duration, increment, isHorizontal]
	);

	const scrollSlide = useCallback(
		(direction: CarouselDirection) => {
			const element = Object.values(linkedItemsContext.current?.getState() ?? {})[selectedItem.current]?.element?.current;
			if (isScrolling.current || !element) return;
			selectedItem.current += direction;

			smoothScrollTo(element[isHorizontal ? "offsetWidth" : "offsetHeight"] * selectedItem.current);
		},
		[isHorizontal, smoothScrollTo]
	);

	const onWheel = useCallback(
		(event: React.WheelEvent<HTMLDivElement>) => {
			const elements = linkedItemsContext.current?.getState();
			if (!elements) return;
			const elementsLength = Object.keys(elements).length;
			const firstElement = Object.values(elements)[0].element.current;
			if (!firstElement) return;

			if (event.deltaY > 0) {
				if (selectedItem.current >= elementsLength - 1) {
					if (isScrolling.current) return;
					selectedItem.current = 0;
					smoothScrollTo(0);
				} else scrollSlide(CarouselDirection.FORWARDS);
			} else {
				if (selectedItem.current === 0) {
					if (isScrolling.current || !wrap.current) return;
					selectedItem.current = elementsLength - 1;
					smoothScrollTo(
						(isHorizontal ? wrap.current.scrollWidth : wrap.current.scrollHeight) -
							(isHorizontal ? firstElement.offsetWidth : firstElement.offsetHeight)
					);
				} else scrollSlide(CarouselDirection.BACKWARDS);
			}
		},
		[isHorizontal, scrollSlide, smoothScrollTo]
	);

	useEffect(() => {
		const animationTimeoutObject = animationTimeout.current;

		return () => {
			window.clearTimeout(animationTimeoutObject.timer);
		};
	}, []);

	return (
		<ContextLinkedItems ref={linkedItemsContext} innerChildren={props.children}>
			<article className={props.className}>
				<div
					ref={wrap}
					onWheel={onWheel}
					className={`${styles.wrap} ${isHorizontal ? styles["wrap--horizontal"] : ""} ${noScrollbar ? styles["wrap--no-scrollbar"] : ""}`}
				>
					{props.children}
				</div>
			</article>
		</ContextLinkedItems>
	);
};
