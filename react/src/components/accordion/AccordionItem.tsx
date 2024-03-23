import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AccordionListItemConfiguration } from "../../../src/interfaces/component/accordion";
import styles from "./Accordion.module.css";
import { AccordionContext } from "./context";
import { uid } from "shared/utils/utils";

export const AccordionItem = (props: AccordionListItemConfiguration) => {
    const [id] = useState(uid());
    const isFirstOpen = useRef(false);
    const context = useContext(AccordionContext);
    const [maxHeight, setMaxHeight] = useState("");
    const header = useRef<HTMLButtonElement | null>(null);
    const content = useRef<HTMLDivElement | null>(null);
    
    const expand = useCallback((firstInit = false) => {
        if (firstInit && !props.isOpen) return;
        context.expandIndex(id);
    }, [context, id, props.isOpen]);

    const updateHeight = useCallback(() => {
        if (!header.current || !content.current) return;
        const isExpanded = typeof context.expandedIndex === "string"
            ? context.expandedIndex === id
            : context.expandedIndex.includes(id);
        
        const headerHeight = header.current.offsetHeight;
        if (isExpanded) {
            const contentHeight = content.current.offsetHeight;
            setMaxHeight(`${String(headerHeight + contentHeight)}px`);
        } else setMaxHeight(`${String(headerHeight)}px`);
    }, [context.expandedIndex, id]);

    const toggleContent = useCallback(() => {
        expand();
        updateHeight();
    }, [expand, updateHeight]);

    useEffect(() => {
        if (!isFirstOpen.current) expand(true);
        updateHeight();
        isFirstOpen.current = true;
    }, [expand, updateHeight]);

    return <li className={styles.accordion} style={{ maxHeight }}>
        <button onClick={toggleContent} className={styles.accordion__heading} ref={header}>
            {props.header}
        </button>
        <div className={styles.accordion__content} ref={content}>
            {props.content}
        </div>
    </li>
};
