import { ReactNode } from "react";
import { GalleryCarouselConfiguration } from "shared/component/galleryCarousel";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";

export interface ReactGalleryCarouselConfiguration extends Partial<GalleryCarouselConfiguration>, GenericReactComponentProps {
    carouselItems: Array<(i: number) => ReactNode>;
}
