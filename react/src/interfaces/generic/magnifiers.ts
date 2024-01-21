import { ReactNode } from "react";
import { GenericReactComponentProps } from "./classNameFallthrough";

export interface MagnifiersGlassConfiguration extends GenericReactComponentProps {
    children?: ReactNode;
    onGlassMove(event: React.MouseEvent<HTMLDivElement>): void;
}

export type MagnifiersConfiguration<T> = {
    imageChildren: ReactNode;
    glassChildren: ReactNode;
} & GenericReactComponentProps & T;

export interface MagnifiersExposedFunctions {
    onMouseMove(event: React.MouseEvent<HTMLElement>): void;
}
