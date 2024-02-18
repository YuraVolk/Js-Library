import React, { useCallback, useState } from "react";
import { AccordionListConfiguration } from "shared/component/accordion";
import styles from "./Accordion.module.css";
import { WithChildren } from "../../../src/utils/utils";
import { AccordionContext } from "./context";
import { AccordionContextInterface } from "../../../src/interfaces/component/accordion";

export const Accordion = (props: WithChildren<AccordionListConfiguration>) => {
    const [expandedIndex, setExpandedIndex] = useState<string | string[]>(props.multiple ? [] : "");

    const expandIndex = useCallback((newIndex: string) => {
        if (!props.multiple) {
            setExpandedIndex((expandedIndex) => {
                return expandedIndex === newIndex ? "" : newIndex;
            });
        } else {
            setExpandedIndex((expandedIndex) => {
                if (typeof expandedIndex === "string") return expandedIndex;
                if (expandedIndex.includes(newIndex)) {
                    return expandedIndex.filter(i => i !== newIndex);
                } else return [...expandedIndex, newIndex];
            });
        }
    }, [props.multiple]);

    const accordionContextState: AccordionContextInterface = {
        expandedIndex,
        expandIndex
    };
    return <AccordionContext.Provider value={accordionContextState}>
        <ul className={styles.accordions}>
            {props.children}
        </ul>
    </AccordionContext.Provider>
};
