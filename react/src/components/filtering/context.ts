import { createContext } from "react";

export interface FilteringContext<T> {
	contextActiveFilter: T | undefined;
	setContextActiveFilter(activeFilter?: T): void;
}

export const FilteringContext = createContext<FilteringContext<unknown>>({
	contextActiveFilter: undefined,
	setContextActiveFilter: () => {}
});
