import { WithChildren } from "../../utils/utils";
import { FloatingPanelConfiguration } from "shared/component/floatingPanel";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";

export interface ReactFloatingPanelConfiguration extends WithChildren<FloatingPanelConfiguration>, GenericReactComponentProps {}
