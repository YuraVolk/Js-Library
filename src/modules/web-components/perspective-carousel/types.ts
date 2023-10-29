import { CarouselDirection } from "../../interfaces/carousel";

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
