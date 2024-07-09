import { createContext } from "@lit/context";

export interface FilteringContext<T> {
	contextActiveFilter: T | undefined;
}

export const filteringContext = createContext<FilteringContext<unknown>>(Symbol());
