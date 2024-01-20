import { PerspectiveCarouselConfiguration as RootConfiguration } from "shared/component/perspectiveCarousel";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";
import { ReactNode } from "react";

export interface PerspectiveCarouselConfiguration extends RootConfiguration, GenericReactComponentProps {
    children: ReactNode;
    movingToCenter?(): void;
    movedToCenter?(): void;
    movingFromCenter(elementIndex?: number): void;
}
