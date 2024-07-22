import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ReactGalleryCarouselConfiguration } from "../../interfaces/component/galleryCarousel";
import styles from "./GalleryCarousel.module.css";
import carouselControlsStyles from "../../interfaces/generic/CarouselControls.module.css";
import { ContextLinkedItems, ExposedContextFunctions } from "../../interfaces/hooks/useLinkedItem";
import { useAutoplay } from "../../interfaces/hooks/useAutoplay";

export const GalleryCarousel = ({
	smoothDiametralTransition = true,
	current = 1,
	frameGap = 20,
	animationDuration = 500,
	showArrows = true,
	showToggles = true,
	carouselItems,
	isVertical,
	allowSwitchingOrientation,
	autoplay,
	className
}: ReactGalleryCarouselConfiguration) => {
	const children = useMemo(
		() => [
			carouselItems[carouselItems.length - 1](carouselItems.length - 1),
			...carouselItems.map((item, i) => item(i)),
			carouselItems[0](0)
		],
		[carouselItems]
	);
	const itemsLength = children.length;

	const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
	const isAnimating = useRef(false);
	const interval = useRef<number>();

	const [isOrientationVertical, setOrientationVertical] = useState(isVertical);
	const [currentSlide, setCurrentSlide] = useState(current);
	const [galleryLeft, setGalleryLeft] = useState(currentSlide * -100);
	const galleryListStyle = useMemo<CSSProperties>(
		() => ({
			[isOrientationVertical ? "top" : "left"]: `${String(galleryLeft)}%`
		}),
		[galleryLeft, isOrientationVertical]
	);

	const checkCurrentSlide = useCallback(
		(value: number) => {
			if (value === 0 || value > itemsLength - 2) return value === 0 ? itemsLength - 2 : 1;
			return value;
		},
		[itemsLength]
	);

	const slideTo = useCallback(
		(position: number, newPosition: number, currentSlide: number) => {
			isAnimating.current = true;
			const start = new Date();
			interval.current = window.setInterval(() => {
				let progress = (new Date().getTime() - start.getTime()) / animationDuration;
				if (progress > 1) progress = 1;
				setGalleryLeft(position + Math.abs(newPosition - position) * progress ** 2 * (position > newPosition ? -1 : 1));
				if (progress === 1) {
					window.clearInterval(interval.current);
					isAnimating.current = false;
					const newSlide = checkCurrentSlide(currentSlide);
					setCurrentSlide(newSlide);
					setGalleryLeft(newSlide * -100);
				}
			}, frameGap);
		},
		[animationDuration, checkCurrentSlide, frameGap]
	);

	const changeCurrentSlide = useCallback(
		(newSlide: number) => {
			if (itemsLength <= 1) return;
			if (!smoothDiametralTransition) newSlide = checkCurrentSlide(newSlide);
			const newPosition = newSlide * -100;
			if (!isAnimating.current && galleryLeft !== newPosition) {
				setCurrentSlide(newSlide);
				slideTo(galleryLeft, newPosition, newSlide);
			}
		},
		[checkCurrentSlide, galleryLeft, itemsLength, slideTo, smoothDiametralTransition]
	);

	const nextSlide = useCallback(() => {
		changeCurrentSlide(currentSlide + 1);
	}, [currentSlide, changeCurrentSlide]);

	const previousSlide = useCallback(() => {
		changeCurrentSlide(currentSlide - 1);
	}, [currentSlide, changeCurrentSlide]);

	useEffect(() => {
		return () => {
			window.clearInterval(interval.current);
		};
	}, []);

	const { abortTimeout } = useAutoplay({ autoplay, nextSlide, previousSlide });

	return (
		<ContextLinkedItems ref={linkedItemsContext} innerChildren={children}>
			<div className={`${styles.wrap} ${className ?? ""}`}>
				<div className={styles.gallery}>
					<ul
						className={`${styles["gallery-list"]} ${isOrientationVertical ? styles["gallery-list--vertical"] : ""}`}
						style={galleryListStyle}
					>
						{children}
					</ul>
				</div>
				{showArrows && (
					<div className={styles["gallery-controls"]}>
						<button
							className={styles["gallery-controls__previous-button"]}
							onClick={() => {
								abortTimeout();
								previousSlide();
							}}
						></button>
						<button
							className={styles["gallery-controls__next-button"]}
							onClick={() => {
								abortTimeout();
								nextSlide();
							}}
						></button>
					</div>
				)}
				{showToggles && itemsLength > 1 && (
					<ul className={styles["gallery-toggles"]}>
						{Array.from({ length: itemsLength - 2 }, (_, i) => (
							<li
								key={i}
								className={`${styles["gallery-toggle"]} ${currentSlide - 1 === i ? styles["gallery-toggle--active"] : ""}`}
								onClick={() => {
									abortTimeout();
									changeCurrentSlide(i + 1);
								}}
							></li>
						))}
					</ul>
				)}
				{allowSwitchingOrientation && (
					<div className={carouselControlsStyles["carousel-controls"]}>
						<button
							className={carouselControlsStyles["carousel-controls__perspective-button"]}
							onClick={() => {
								abortTimeout();
								setOrientationVertical((orientation) => !orientation);
							}}
						>
							Switch
						</button>
					</div>
				)}
			</div>
		</ContextLinkedItems>
	);
};
