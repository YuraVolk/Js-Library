import { CarouselConfiguration } from "shared/interfaces/carousel";

export interface OnePageScrollConfiguration extends CarouselConfiguration {
	duration: number;
	increment: number;
	noScrollbar: boolean;
}

export const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
	t /= d / 2;
	if (t < 1) return (c / 2) * t * t + b;
	t--;
	return (-c / 2) * (t * (t - 2) - 1) + b;
};
