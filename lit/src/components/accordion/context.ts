import { createContext } from "@lit/context";

export interface AccordionContext {
    expandedIndex: string | string[];
    setExpandedIndex(newIndex: string): void;
}

export const accordionContext = createContext<AccordionContext>(Symbol());
