import React, { useRef } from "react";
import { useLinkedItem } from "../../../src/interfaces/hooks/useLinkedItem";
import { uid } from "shared/utils/utils";
import { WithChildren } from "react/src/utils/utils";
import styles from "./BackfaceCarousel.module.css";

export const BackfaceCarouselItem = (props: WithChildren<object>) => {
    const item = useRef<HTMLLIElement | null>(null);
    const styleObject = useLinkedItem(uid, item);

    return <li ref={item} className={styles["backface-carousel-item"]} style={styleObject}>
        {props.children}
    </li>
};
