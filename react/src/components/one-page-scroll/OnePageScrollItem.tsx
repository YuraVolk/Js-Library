import React, { useRef } from "react";
import { useLinkedItem } from "../../../src/interfaces/hooks/useLinkedItem";
import { uid } from "shared/utils/utils";
import { WithChildren } from "../../utils/utils";
import styles from "./OnePageScroll.module.css";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";

export const OnePageScrollItem = (props: WithChildren<object> & GenericReactComponentProps) => {
    const item = useRef<HTMLDivElement | null>(null);
    const styleObject = useLinkedItem(uid, item);

    return <div ref={item} className={`${styles["one-page-scroll-item"]} ${props.className ?? ""}`} style={styleObject}>
        {props.children}
    </div>
};
