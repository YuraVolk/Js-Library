export const CarouselDirection = {
	BACKWARDS: -1,
	STILL: 0,
	FORWARDS: 1
} as const;

export type CarouselDirection = (typeof CarouselDirection)[keyof typeof CarouselDirection];
