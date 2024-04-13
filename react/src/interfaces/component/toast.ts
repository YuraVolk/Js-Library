import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import { WithChildren } from "react/src/utils/utils";
import { ToastConfiguration as RootConfiguration } from "shared/component/toast";

export interface ToastConfiguration extends WithChildren<RootConfiguration> {
	animationDuration: number;
	classes: CSSTransitionClassNames;
	closeToast?(): void;
}
