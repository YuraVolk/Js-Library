import { createContext } from "react";
import { AccordionContextInterface } from "react/src/interfaces/accordion";

export const AccordionContext = createContext<AccordionContextInterface>({
    expandedIndex: "",
    expandIndex: () => {}
});
