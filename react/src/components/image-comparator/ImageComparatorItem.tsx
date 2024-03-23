import React, { useRef } from "react";
import { useLinkedItem } from "../../../src/interfaces/hooks/useLinkedItem";
import { uid } from "shared/utils/utils";
import { WithChildren } from "../../utils/utils";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";
import styles from "./ImageComparator.module.css";

export const ImageComparatorItem = (props: WithChildren<object> & GenericReactComponentProps) => {
	const item = useRef<HTMLLIElement | null>(null);
	const styleObject = useLinkedItem(uid, item);

	return (
		<li ref={item} style={styleObject} className={`${styles["image-comparator-item"]} ${props.className ?? ""}`}>
			{props.children}
		</li>
	);
};
