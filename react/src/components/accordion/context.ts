import { createContext } from "react";
import { AccordionListConfiguration } from "../../interfaces/component/accordion";

export const AccordionContext = createContext<AccordionListConfiguration>({
    expandedIndex: "",
    expandIndex: () => {}
});
