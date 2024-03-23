import { InternalPerspectiveCarouselState, resetInternalState } from "shared/component/perspectiveCarousel";

export interface InternalLitPerspectiveCarouselState<T> extends InternalPerspectiveCarouselState<T> {
	items: T[];
}

export const resetInternalLitState = <T>(): InternalLitPerspectiveCarouselState<T> => ({
	...resetInternalState(),
	items: []
});
