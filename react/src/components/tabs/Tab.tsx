import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { TabConfiguration, TabsContext } from "../../interfaces/component/tabs";

export const Tab = (props: TabConfiguration) => {
	const item = useRef<HTMLDivElement>(null);
	const tabsContext = useContext(TabsContext);

	return (
		<CSSTransition
			unmountOnExit
			nodeRef={item}
			timeout={props.animationDuration}
			in={props.tabId === tabsContext.currentTab}
			classNames={{ ...props.classes }}
		>
			<div ref={item} className={props.className}>
				{props.children}
			</div>
		</CSSTransition>
	);
};
