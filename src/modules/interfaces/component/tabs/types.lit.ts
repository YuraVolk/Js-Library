import { TabsConfiguration } from "./types";

export interface TabsLitConfiguration extends TabsConfiguration {
    transitionTime: number;
    activeTabClassName: string;
    leaveTabClassName: string;
    inactiveTabClassName: string;
}
