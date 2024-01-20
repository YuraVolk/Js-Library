import React, { useRef } from "react";
import { useLinkedItem } from "../../../src/interfaces/hooks/useLinkedItem";
import { uid } from "shared/utils/utils";
import { TableHeaderConfiguration } from "../../interfaces/component/tableFiltering";

export const TableFilteringHeader = (props: TableHeaderConfiguration) => {
	const item = useRef<HTMLTableCellElement | null>(null);
	const styleObject = useLinkedItem(() => `table-header-${uid()}`, item);

	return (
		<th
			ref={item}
			style={styleObject}
			className={props.className}
			onClick={() => {
				props.onClick();
			}}
		>
			{props.children}
		</th>
	);
};
