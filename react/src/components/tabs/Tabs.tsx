import React from "react";
import { TabsConfiguration, TabsContext } from "../../interfaces/component/tabs";

export const Tabs = (props: TabsConfiguration) => {
	return (
		<TabsContext.Provider value={{ currentTab: props.currentTab }}>
			<div className={props.className}>
				{props.headerChildren}
				{props.tabsChildren}
			</div>
		</TabsContext.Provider>
	);
};
