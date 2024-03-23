import { ReactNode } from "react";
import { PopupConfiguration as RootConfiguration } from "shared/component/popup";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";

export interface PopupConfiguration extends Partial<RootConfiguration>, GenericReactComponentProps {
	buttonChildren?: ReactNode;
	children: ReactNode;
}

export interface PopupExposedFunctions {
	open(): void;
	close(): void;
}
