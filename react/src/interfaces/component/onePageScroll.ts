import { OnePageScrollConfiguration as RootConfiguration } from "shared/component/onePageScroll";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";
import { ReactNode } from "react";

export interface OnePageScrollConfiguration extends Partial<RootConfiguration>, GenericReactComponentProps {
    children: ReactNode;
}
