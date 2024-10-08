import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { PerspectiveCarouselConfiguration } from "../../interfaces/component/perspectiveCarousel";
import { PerspectiveCarouselItemState, resetInternalState } from "shared/component/perspectiveCarousel";
import { ContextLinkedItems, ExposedContextFunctions, LinkedReactItem } from "../../interfaces/hooks/useLinkedItem";
import carouselControlsStyles from "../../interfaces/generic/CarouselControls.module.css";
import styles from "./PerspectiveCarousel.module.css";
import { assertNonUndefined } from "shared/utils/utils";
import { CarouselDirection } from "shared/interfaces/carousel";
import { getCurrentItemCallback } from "../../utils/carousel";
import { useAutoplay } from "../../interfaces/hooks/useAutoplay";

const getDataFromExposedFunctions = (contextObject: React.MutableRefObject<ExposedContextFunctions | null>) => {
	const linkedItemsContextsState = contextObject.current?.getState();
	const keys = Object.keys(linkedItemsContextsState ?? {});
	const entries = Object.entries(linkedItemsContextsState ?? {});

	return { keys, entries: [...entries].map(([k, v]): [string, LinkedReactItem] => [k, { ...v }]) };
};

export const enum PerspectiveCarouselState {
	INITIALIZING,
	AWAITING_LAYOUT_EFFECT,
	FINISHED
}

export const PerspectiveCarousel = ({
	imageSize = "300px",
	margin = "250px auto",
	startingItem: propsStartingItem = 1,
	separation: propsSeparation = 175,
	separationMultiplier = 0.6,
	horizonOffset: propsHorizonOffset = 0,
	horizonOffsetMultiplier = 1,
	sizeMultiplier = 0.7,
	opacityMultiplier = 0.87,
	horizon: propsHorizon = 0,
	flankingItems = 3,
	isVertical: propsIsVertical = false,
	forcedImageWidth = 0,
	forcedImageHeight = 0,
	animationLength = 300,
	allowSwitchingOrientation = false,
	showArrows = true,
	showToggles = false,
	autoplay,
	movingToCenter,
	movedToCenter,
	movingFromCenter,
	children,
	className
}: Partial<PerspectiveCarouselConfiguration>) => {
	const imageStyles = useMemo(
		() => ({
			margin,
			height: imageSize
		}),
		[imageSize, margin]
	);

	const timeouts = useRef<number[]>();
	const [isInitializing, setInitializing] = useState(PerspectiveCarouselState.INITIALIZING);
	const [currentItem, setCurrentItem] = useState(0);
	const isStateCurrentlyMoving = useRef<Promise<void>>();
	const resolveStateCurrentlyMoving = useRef<() => void>();
	const isNavigatingByToggles = useRef(false);

	const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
	const state = useRef(resetInternalState<number>());
	const elementsState = useRef<Record<string, Partial<PerspectiveCarouselItemState>>>({});
	const parent = useRef<HTMLUListElement>(null);
	const horizon = useRef(propsHorizon);
	const startingItem = useRef(propsStartingItem);
	const isVertical = useRef(propsIsVertical);

	const forceImageDimensionsIfEnabled = useCallback(() => {
		const { entries } = getDataFromExposedFunctions(linkedItemsContext);
		for (const [, image] of entries) {
			image.styles = { display: "none" };
			if (!forcedImageWidth || !forcedImageHeight) continue;
			image.styles = {
				...image.styles,
				width: `${String(forcedImageWidth)}px`,
				height: `${String(forcedImageHeight)}px`
			};
		}

		linkedItemsContext.current?.updateState(Object.fromEntries(entries));
	}, [forcedImageHeight, forcedImageWidth]);

	const initializeCarouselData = useCallback(() => {
		const { keys } = getDataFromExposedFunctions(linkedItemsContext);
		assertNonUndefined(parent.current);
		const parentStyle = window.getComputedStyle(parent.current);
		state.current.totalItems = keys.length;
		state.current.containerDimensions = [parseInt(parentStyle.width, 10), parseInt(parentStyle.height, 10)];
	}, []);

	const setOriginalItemDimensions = useCallback(() => {
		const { entries } = getDataFromExposedFunctions(linkedItemsContext);
		for (const [key, { element }] of entries) {
			if (!element.current) continue;

			const state = elementsState.current[key];
			if ((!state.originalWidth && !state.originalHeight) || forcedImageWidth > 0 || forcedImageHeight > 0) {
				const initialDisplay = element.current.style.display;
				element.current.style.display = "";
				if (!state.originalWidth || forcedImageWidth > 0) state.originalWidth = element.current.clientWidth;
				if (!state.originalHeight || forcedImageHeight > 0) state.originalHeight = element.current.clientHeight;
				element.current.style.display = initialDisplay;
			}
		}
	}, [forcedImageHeight, forcedImageWidth]);

	const calculatePositionProperties = useCallback(() => {
		let horizonOffset = propsHorizonOffset;
		let separation = propsSeparation;
		for (let i = 1; i <= flankingItems + 2; i++) {
			if (i > 1) {
				horizonOffset *= horizonOffsetMultiplier;
				separation *= separationMultiplier;
			}

			const { distance, offset, opacity } = state.current.calculations[i - 1];
			state.current.calculations[i] = {
				distance: distance + separation,
				offset: offset + horizonOffset,
				opacity: opacity * opacityMultiplier
			};
		}

		state.current.calculations[flankingItems + 1] = {
			distance: 0,
			offset: 0,
			opacity: 0
		};
	}, [flankingItems, horizonOffsetMultiplier, opacityMultiplier, propsHorizonOffset, propsSeparation, separationMultiplier]);

	const setupCarousel = useCallback(() => {
		horizon.current ||= state.current.containerDimensions[Number(!isVertical.current)] / 2;
		const { entries } = getDataFromExposedFunctions(linkedItemsContext);

		for (const [key, item] of entries) {
			const itemState = elementsState.current[key];
			let left, top;
			if (isVertical.current) {
				left = horizon.current - Number(itemState.originalWidth) / 2;
				top = state.current.containerDimensions[1] / 2 - Number(itemState.originalHeight) / 2;
			} else {
				left = state.current.containerDimensions[0] / 2 - Number(itemState.originalWidth) / 2;
				top = horizon.current - Number(itemState.originalHeight) / 2;
			}

			item.styles = {
				...item.styles,
				left: `${String(left)}px`,
				top: `${String(top)}px`,
				visibility: "visible",
				position: "absolute",
				zIndex: 0,
				opacity: 0,
				display: ""
			};
		}

		linkedItemsContext.current?.updateState(Object.fromEntries(entries));
	}, [isVertical]);

	const performCalculations = useCallback(
		(elementIndex: number, newPosition: number) => {
			const { keys } = getDataFromExposedFunctions(linkedItemsContext);
			const itemState = elementsState.current[keys[elementIndex]];

			const newDistanceFromCenter = Math.abs(newPosition);
			const calculations =
				newDistanceFromCenter < flankingItems + 1
					? state.current.calculations[newDistanceFromCenter]
					: state.current.calculations[flankingItems + 1];
			const distanceFactor = sizeMultiplier ** newDistanceFromCenter;
			const newWidth = distanceFactor * Number(itemState.originalWidth);
			const newHeight = distanceFactor * Number(itemState.originalHeight);
			const newDistance = newPosition < 0 ? -calculations.distance : calculations.distance;

			const center = state.current.containerDimensions[Number(isVertical.current)] / 2;
			let top: number, left: number;
			if (isVertical.current) {
				left = horizon.current - calculations.offset - newWidth / 2;
				top = center + newDistance - newHeight / 2;
			} else {
				left = center + newDistance - newWidth / 2;
				top = horizon.current - calculations.offset - newHeight / 2;
			}

			itemState.width = newWidth;
			itemState.height = newHeight;
			itemState.top = top;
			itemState.left = left;
			itemState.oldPosition ??= 0;
			itemState.depth = flankingItems + 2 - newDistanceFromCenter;
			itemState.opacity = newPosition ? calculations.opacity : 1;
		},
		[flankingItems, sizeMultiplier]
	);

	const { setupStarterRotation, rotateCarousel } = useMemo(() => {
		const rotateCarousel = () => {
			if (state.current.currentlyMoving) return;
			state.current.currentlyMoving = true;
			state.current.itemsAnimating = 0;
			state.current.carouselRotationsLeft++;
			isStateCurrentlyMoving.current = new Promise((resolve) => {
				resolveStateCurrentlyMoving.current = resolve;
			});

			getDataFromExposedFunctions(linkedItemsContext).keys.forEach((key, i) => {
				const currentPosition = elementsState.current[key].currentPosition ?? NaN;
				let newPosition = currentPosition + -Number(state.current.currentDirection);

				if (Math.abs(newPosition) > state.current[newPosition > 0 ? "rightItemsCount" : "leftItemsCount"]) {
					newPosition = -currentPosition;
					if (state.current.totalItems % 2 === 0) newPosition++;
				}

				moveItem(i, newPosition);
			});
		};

		const itemAnimationComplete = (elementIndex: number, newPosition: number) => {
			const { keys } = getDataFromExposedFunctions(linkedItemsContext);
			const itemState = elementsState.current[keys[elementIndex]];
			state.current.itemsAnimating--;
			itemState.currentPosition = newPosition;
			if (newPosition === 0) {
				state.current.currentCenterItem = elementIndex;
				setCurrentItem(state.current.currentCenterItem);
			}

			if (state.current.itemsAnimating) return;
			state.current.currentlyMoving = false;

			if (--state.current.carouselRotationsLeft <= 0) {
				if (!state.current.performingSetup) {
					movingToCenter?.();
					movedToCenter?.();
				} else state.current.performingSetup = false;
			}

			if (isStateCurrentlyMoving.current && resolveStateCurrentlyMoving.current) {
				resolveStateCurrentlyMoving.current();
				resolveStateCurrentlyMoving.current = isStateCurrentlyMoving.current = undefined;
			}
		};

		const moveItem = (elementIndex: number, newPosition: number) => {
			linkedItemsContext.current?.updateState((linkedItemsContextsState) => {
				const keys = Object.keys(linkedItemsContextsState);
				const entries = Object.entries(linkedItemsContextsState).map(([k, v]): [string, LinkedReactItem] => [k, { ...v }]);

				const item = entries[elementIndex][1];
				const itemState = elementsState.current[keys[elementIndex]];

				const assignToItem = () => {
					item.styles = {
						...item.styles,
						left: `${String(itemState.left)}px`,
						width: `${String(itemState.width)}px`,
						height: `${String(itemState.height)}px`,
						top: `${String(itemState.top)}px`,
						opacity: String(itemState.opacity)
					};
				};

				if (Math.abs(newPosition) <= flankingItems + 1) {
					performCalculations(elementIndex, newPosition);
					state.current.itemsAnimating++;

					item.styles = {
						...item.styles,
						zIndex: itemState.depth ?? ""
					};
					
					assignToItem();
					if (newPosition === 0) {
						const timeout = window.setTimeout(() => {
							setCurrentItem(elementIndex);
						}, 1);
						timeouts.current?.push(timeout);
					}

					const timeout = window.setTimeout(() => {
						itemAnimationComplete(elementIndex, newPosition);
					}, animationLength);
					timeouts.current?.push(timeout);
				} else {
					itemState.currentPosition = newPosition;
					if (!itemState.oldPosition) {
						performCalculations(elementIndex, newPosition);
						assignToItem();
					}
				}

				return Object.fromEntries(entries);
			});
		};

		const setupStarterRotation = () => {
			const { entries } = getDataFromExposedFunctions(linkedItemsContext);
			startingItem.current ||= Math.round(state.current.totalItems / 2);
			state.current.rightItemsCount = Math.ceil((state.current.totalItems - 1) / 2);
			state.current.leftItemsCount = Math.floor((state.current.totalItems - 1) / 2);
			state.current.carouselRotationsLeft = 1;

			let itemIndex = startingItem.current - 1;
			const moveToIndex = (pos: number) => {
				entries[itemIndex][1].styles = {
					...entries[itemIndex][1].styles,
					opacity: 1
				};

				moveItem(itemIndex, pos);
			};
			moveToIndex(0);

			for (let pos = 1; pos <= state.current.rightItemsCount; pos++) {
				itemIndex < state.current.totalItems - 1 ? itemIndex++ : (itemIndex = 0);
				moveToIndex(pos);
			}
			itemIndex = startingItem.current - 1;
			for (let pos = -1; pos >= -state.current.leftItemsCount; pos--) {
				itemIndex > 0 ? itemIndex-- : (itemIndex = state.current.totalItems - 1);
				moveToIndex(pos);
			}
		};

		return { setupStarterRotation, rotateCarousel };
	}, [animationLength, flankingItems, movedToCenter, movingToCenter, performCalculations]);

	const moveOnce = useCallback(
		(direction: CarouselDirection) => {
			if (state.current.currentlyMoving) return;
			if (direction === CarouselDirection.BACKWARDS && state.current.currentCenterItem !== undefined) {
				movingFromCenter?.(state.current.currentCenterItem - 1 < 0 ? undefined : state.current.currentCenterItem - 1);
			} else if (direction === CarouselDirection.FORWARDS && state.current.currentCenterItem !== undefined) {
				movingFromCenter?.(
					state.current.currentCenterItem + 1 > state.current.totalItems ? undefined : state.current.currentCenterItem + 1
				);
			} else movingFromCenter?.(state.current.currentCenterItem);

			state.current.currentDirection = direction;
		},
		[movingFromCenter]
	);

	const previousSlide = useCallback(() => {
		moveOnce(CarouselDirection.BACKWARDS);
		rotateCarousel();
	}, [moveOnce, rotateCarousel]);

	const switchOrientation = useCallback(() => {
		if (!allowSwitchingOrientation) return;
		isVertical.current = !isVertical.current;
		state.current.currentDirection = CarouselDirection.STILL;
		rotateCarousel();
	}, [allowSwitchingOrientation, rotateCarousel]);

	const nextSlide = useCallback(() => {
		moveOnce(CarouselDirection.FORWARDS);
		rotateCarousel();
	}, [moveOnce, rotateCarousel]);

	const initCarousel = useCallback(() => {
		if (!parent.current) return;
		setInitializing(PerspectiveCarouselState.INITIALIZING);
		state.current = resetInternalState();

		const { keys } = getDataFromExposedFunctions(linkedItemsContext);
		for (const key of keys) {
			if (typeof elementsState.current[key] === "undefined") elementsState.current[key] = {};
		}

		initializeCarouselData();
		forceImageDimensionsIfEnabled();
		setInitializing(PerspectiveCarouselState.AWAITING_LAYOUT_EFFECT);
	}, [forceImageDimensionsIfEnabled, initializeCarouselData]);

	const { abortTimeout } = useAutoplay({ autoplay, nextSlide, previousSlide });
	const { realCurrentItem, childrenLength, getCurrentItem } = getCurrentItemCallback({ children, currentItem });

	const navigateByDifference = useCallback(
		async (difference: number) => {
			isNavigatingByToggles.current = true;
			const direction = Math.sign(difference);
			if (direction === 1 || direction === -1) {
				state.current.currentDirection = direction;
			} else {
				state.current.currentDirection = CarouselDirection.STILL;
				return;
			}

			for (let i = 0; i < Math.abs(difference); i++) {
				rotateCarousel();
				await isStateCurrentlyMoving.current;
				abortTimeout();
			}
		},
		[abortTimeout, rotateCarousel]
	);

	useLayoutEffect(() => {
		if (isInitializing !== PerspectiveCarouselState.AWAITING_LAYOUT_EFFECT) return;
		setOriginalItemDimensions();
		calculatePositionProperties();
		setupCarousel();
		setupStarterRotation();
		setInitializing(PerspectiveCarouselState.FINISHED);

		const timeoutsRef = timeouts.current;
		return () => {
			const isInitializingCurrent: number = isInitializing;
			const awaitingLayoutEffect: number = PerspectiveCarouselState.AWAITING_LAYOUT_EFFECT;
			if (isInitializingCurrent === awaitingLayoutEffect) return;
			timeoutsRef?.forEach(window.clearTimeout);
			timeouts.current = [];
		};
	}, [calculatePositionProperties, isInitializing, setOriginalItemDimensions, setupCarousel, setupStarterRotation]);

	useEffect(() => {
		window.addEventListener("resize", initCarousel);

		return () => {
			window.removeEventListener("resize", initCarousel);
		};
	}, [initCarousel]);

	return (
		<ContextLinkedItems ref={linkedItemsContext} innerChildren={children} onAllElementsLoaded={initCarousel}>
			<div className={`${styles.wrap} ${className ?? ""}`}>
				<ul className={styles.images} style={imageStyles} ref={parent}>
					{children}
				</ul>
				{(allowSwitchingOrientation || showArrows || showToggles) && (
					<div className={styles["carousel-controls"]}>
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
								{Array.from({ length: childrenLength }, (_, i) => (
									<li
										key={i}
										className={`${carouselControlsStyles["carousel-controls__toggle"]} ${i === realCurrentItem ? carouselControlsStyles["carousel-controls__toggle--active"] : ""}`}
										onClick={() => {
											if (isNavigatingByToggles.current) return;
											abortTimeout();
											const difference = (getCurrentItem(i) % childrenLength) - (currentItem % childrenLength);
											navigateByDifference(difference)
												.catch((e: unknown) => {
													console.log(e);
												})
												.finally(() => {
													isNavigatingByToggles.current = false;
												});
										}}
									></li>
								))}
							</ul>
						)}
					</div>
				)}
			</div>
		</ContextLinkedItems>
	);
};
