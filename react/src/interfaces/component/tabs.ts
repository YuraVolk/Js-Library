import { ReactNode, createContext } from "react";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import { WithChildren } from "../../utils/utils";
import { TabsConfiguration as RootConfiguration } from "shared/component/tabs";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";

export interface TabsConfiguration extends RootConfiguration, GenericReactComponentProps {
	headerChildren: ReactNode;
	tabsChildren: ReactNode;
}

export interface TabConfiguration extends WithChildren<GenericReactComponentProps> {
	tabId: number;
	classes: CSSTransitionClassNames;
	animationDuration: number;
}

export interface TabsContext {
	currentTab: number;
}

export const TabsContext = createContext<TabsContext>({
	currentTab: 0
});
