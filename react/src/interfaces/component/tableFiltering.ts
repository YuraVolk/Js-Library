import { WithChildren } from "../../utils/utils";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";
import { ReactNode } from "react";

export interface TableFilteringExposedFunctions {
	onHeaderClicked(index: number): void;
	closeSelect(): void;
}

export interface TableFilteringConfiguration extends WithChildren<GenericReactComponentProps> {
	combinedChildren: ReactNode;
}

export interface TableHeaderConfiguration extends WithChildren<GenericReactComponentProps> {
	onClick(): void;
}
