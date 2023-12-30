import { TabsConfiguration } from "shared/component/tabs";

export interface TabsLitConfiguration extends TabsConfiguration {
    transitionTime: number;
    activeTabClassName: string;
    leaveTabClassName: string;
    inactiveTabClassName: string;
}
