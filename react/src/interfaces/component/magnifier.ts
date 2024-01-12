import { GenericReactComponentProps } from "../generic/classNameFallthrough";
import { MagnifierConfiguration as SharedMagnifierConfiguration } from "shared/component/magnifier";
import React, { ReactNode } from "react";

export interface MagnifierGlassProps extends GenericReactComponentProps {
    children?: ReactNode;
    onGlassMove(event: React.MouseEvent<HTMLDivElement>): void;
}

export interface MagnifierConfiguration extends SharedMagnifierConfiguration, GenericReactComponentProps {
    imageChildren: ReactNode;
    glassChildren: ReactNode;
}

export interface MagnifierExposedFunctions {
    onMouseMove(event: React.MouseEvent<HTMLElement>): void;
}
