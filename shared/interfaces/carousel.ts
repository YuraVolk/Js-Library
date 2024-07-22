export const CarouselDirection = {
	BACKWARDS: -1,
	STILL: 0,
	FORWARDS: 1
} as const;

export type CarouselDirection = (typeof CarouselDirection)[keyof typeof CarouselDirection];
export interface CarouselConfigurationAutoplayOptions {
	delay: number;
	totalRepetitions: number;
	direction: CarouselDirection;
}

export interface CarouselConfiguration {
	isVertical?: boolean;
	allowSwitchingOrientation?: boolean;
	showArrows?: boolean;
	showToggles?: boolean;
	autoplay?: CarouselConfigurationAutoplayOptions | undefined; 
}
