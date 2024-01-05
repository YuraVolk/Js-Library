import { createContext } from "react";
import { AccordionContextInterface } from "../../interfaces/component/accordion";

export const AccordionContext = createContext<AccordionContextInterface>({
    expandedIndex: "",
    expandIndex: () => {}
});
