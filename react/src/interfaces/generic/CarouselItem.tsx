import React, { useRef } from "react";
import { useLinkedItem } from "../../../src/interfaces/hooks/useLinkedItem";
import { uid } from "shared/utils/utils";
import { WithChildren } from "react/src/utils/utils";
import { GenericReactComponentProps } from "./classNameFallthrough";

export const CarouselItem = (props: WithChildren<object> & GenericReactComponentProps) => {
    const item = useRef<HTMLLIElement | null>(null);
    const styleObject = useLinkedItem(uid, item);

    return <li ref={item} style={styleObject}>
        {props.children}
    </li>
};
