import { CarouselDirection } from "shared/interfaces/carousel";

export const ECarouselDirection = {
    FORWARDS: 1,
    BACKWARDS: -1,
    STILL: 0
} as const satisfies Record<string, CarouselDirection>;
