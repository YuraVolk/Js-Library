import { CarouselConfiguration } from "shared/interfaces/carousel";

export interface GalleryCarouselConfiguration extends CarouselConfiguration {
	smoothDiametralTransition: boolean;
	current: number;
	frameGap: number;
	animationDuration: number;
}
