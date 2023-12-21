import { InternalPerspectiveCarouselState, resetInternalState } from "./types";

export interface InternalLitPerspectiveCarouselState<T> extends InternalPerspectiveCarouselState<T> {
	items: T[];
}

export const resetInternalLitState = <T>(): InternalLitPerspectiveCarouselState<T> => ({
	...resetInternalState(),
	items: [],
});
