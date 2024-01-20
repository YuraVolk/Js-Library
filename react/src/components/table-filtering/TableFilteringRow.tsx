import React, { useRef } from "react";
import { useLinkedItem } from "../../../src/interfaces/hooks/useLinkedItem";
import { uid } from "shared/utils/utils";
import { WithChildren } from "../../utils/utils";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";

export const TableFilteringRow = (props: WithChildren<object> & GenericReactComponentProps) => {
    const item = useRef<HTMLTableRowElement | null>(null);
    const styleObject = useLinkedItem(() => `table-row-${uid()}`, item);

    return <tr ref={item} style={styleObject} className={props.className}>
        {props.children}
    </tr>
};
