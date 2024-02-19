import React, { useCallback, useMemo, useState } from "react";
import { AccordionListConfiguration } from "shared/component/accordion";
import styles from "./Accordion.module.css";
import { WithChildren } from "../../../src/utils/utils";
import { AccordionContext } from "./context";

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

    const context = useMemo(() => ({
        expandedIndex,
        expandIndex
    }), [expandIndex, expandedIndex]);

    return <AccordionContext.Provider value={context}>
        <ul className={styles.accordions}>
            {props.children}
        </ul>
    </AccordionContext.Provider>
};
