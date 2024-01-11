import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ReactGalleryCarouselConfiguration } from "../../interfaces/component/galleryCarousel";
import styles from "./GalleryCarousel.module.css";
import { ContextLinkedItems, ExposedContextFunctions } from "../../interfaces/hooks/useLinkedItem";

export const GalleryCarousel = ({
	smoothDiametralTransition = true,
	current = 1,
	frameGap = 20,
	animationDuration = 500,
	showArrows = true,
	showToggles = true,
	...props
}: ReactGalleryCarouselConfiguration) => {
	const children = useMemo(
		() => [
			props.carouselItems[props.carouselItems.length - 1](props.carouselItems.length - 1),
			...props.carouselItems.map((item, i) => item(i)),
			props.carouselItems[0](0)
		],
		[props.carouselItems]
	);
	const itemsLength = children.length;

	const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
	const isAnimating = useRef(false);
	const interval = useRef<number>();

	const [currentSlide, setCurrentSlide] = useState(current);
	const [galleryLeft, setGalleryLeft] = useState(currentSlide * -100);
	const galleryListStyle = useMemo<CSSProperties>(
		() => ({
			left: `${galleryLeft}%`
		}),
		[galleryLeft]
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

	useEffect(() => {
		return () => {
			window.clearInterval(interval.current);
		};
	}, []);

	return (
		<ContextLinkedItems ref={linkedItemsContext} innerChildren={children}>
			<div className={`${styles.wrap} ${props.className ?? ""}`}>
				<div className={styles.gallery}>
                    <ul className={styles["gallery-list"]} style={galleryListStyle}>
                        {children}
                    </ul>
				</div>
				{showArrows && (
					<div className={styles["gallery-controls"]}>
						<button
							className={styles["gallery-controls__previous-button"]}
							onClick={() => {
								changeCurrentSlide(currentSlide - 1);
							}}
						></button>
						<button
							className={styles["gallery-controls__next-button"]}
							onClick={() => {
								changeCurrentSlide(currentSlide + 1);
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
									changeCurrentSlide(i + 1);
								}}
							></li>
						))}
					</ul>
				)}
			</div>
		</ContextLinkedItems>
	);
};
