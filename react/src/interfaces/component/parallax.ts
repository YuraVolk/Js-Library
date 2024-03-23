import { ParallaxConfiguration as RootConfiguration } from "shared/component/parallax";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";
import { ReactNode } from "react";

export interface ParallaxConfiguration extends RootConfiguration, GenericReactComponentProps {
	children: ReactNode;
}
