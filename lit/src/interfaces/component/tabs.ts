import { createContext } from "@lit/context";
export interface TabsContext {
	currentTab: number;
}

export const tabsContext = createContext<TabsContext>(Symbol());
