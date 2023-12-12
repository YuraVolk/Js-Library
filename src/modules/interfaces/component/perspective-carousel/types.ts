import { CarouselDirection } from "src/modules/interfaces/generic/carousel/carousel";

export interface InternalPerspectiveCarouselState {
	totalItems: number;
	containerDimensions: [width: number, height: number];
	currentCenterItem?: HTMLElement;
	previousCenterItem?: HTMLElement;
	items: HTMLElement[];
	calculations: Array<{
		distance: number;
		opacity: number;
		offset: number;
	}>;
	carouselRotationsLeft: number;
	currentlyMoving: boolean;
	itemsAnimating: number;
	currentDirection: CarouselDirection;
	leftItemsCount: number;
	rightItemsCount: number;
	performingSetup: boolean;
}

export const resetInternalState = (): InternalPerspectiveCarouselState => ({
	totalItems: 0,
	containerDimensions: [0, 0],
	items: [],
	calculations: [
		{
			opacity: 1,
			offset: 0,
			distance: 0
		}
	],
	carouselRotationsLeft: 0,
	currentlyMoving: false,
	itemsAnimating: 0,
	currentDirection: CarouselDirection.STILL,
	leftItemsCount: 0,
	rightItemsCount: 0,
	performingSetup: true
});

export interface PerspectiveCarouselConfiguration {
	imageSize: string;
	margin: string;
	startingItem: number;
	separation: number;
	separationMultiplier: number;
	horizonOffset: number;
	horizonOffsetMultiplier: number;
	sizeMultiplier: number;
	opacityMultiplier: number;
	horizon: number;
	flankingItems: number;
	isVertical: boolean;
	preloadImages: boolean;
	forcedImageWidth: number;
	forcedImageHeight: number;
	animationLength: number;
	centralItemClassName: string;
	allowSwitchingOrientation: boolean;
}

export interface PerspectiveCarouselItemState {
	originalWidth: number;
	originalHeight: number;
}
