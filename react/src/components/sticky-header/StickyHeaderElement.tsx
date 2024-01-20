import React, { useRef } from "react";
import { useLinkedItem } from "../../interfaces/hooks/useLinkedItem";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";
import { WithChildren } from "react/src/utils/utils";

export const StickyHeaderElement = (props: WithChildren<object> & GenericReactComponentProps) => {
	const item = useRef<HTMLDivElement>(null);
	const styleObject = useLinkedItem(() => "sticky-header", item);

	return (
		<div ref={item} style={styleObject} className={props.className}>
			{props.children}
		</div>
	);
};
