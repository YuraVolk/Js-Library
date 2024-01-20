import React, { CSSProperties, useCallback, useRef } from "react";
import styles from "./Page.module.css";
import filterIcon from "../../../../../assets/svg/filter-icon.svg";
import { TableFiltering } from "../../../components/table-filtering/TableFiltering";
import { TableFilteringExposedFunctions } from "../../../interfaces/component/tableFiltering";
import { TableFilteringHeader } from "../../../components/table-filtering/TableFilteringHeader";
import { TableFilteringRow } from "../../../components/table-filtering/TableFilteringRow";

interface TableFilteringDeclaredVariables extends CSSProperties {
	"--filterIconUrl": string;
}

const Page = () => {
	const table = useRef<TableFilteringExposedFunctions>(null);

	const onHeaderClicked = useCallback((headerIndex: number) => {
		table.current?.onHeaderClicked(headerIndex);
	}, []);

	const onTableBodyClicked = useCallback(() => {
		table.current?.closeSelect();
	}, []);

	const headers = [
		<TableFilteringHeader
			key="name"
			className={styles["table-head__heading"]}
			onClick={() => {
				onHeaderClicked(0);
			}}
		>
			Name
		</TableFilteringHeader>,
		<TableFilteringHeader
			key="country"
			className={styles["table-head__heading"]}
			onClick={() => {
				onHeaderClicked(1);
			}}
		>
			Country
		</TableFilteringHeader>,
		<TableFilteringHeader
			key="specialty"
			className={styles["table-head__heading"]}
			onClick={() => {
				onHeaderClicked(2);
			}}
		>
			Specialty
		</TableFilteringHeader>
	];

	const rows = [
		<TableFilteringRow key="john" className={styles["table-body-row"]}>
			<td className={styles["table-body-row__cell"]}>John</td>
			<td className={styles["table-body-row__cell"]}>Austria</td>
			<td className={styles["table-body-row__cell"]}>Designer</td>
		</TableFilteringRow>,
		<TableFilteringRow key="mary" className={styles["table-body-row"]}>
			<td className={styles["table-body-row__cell"]}>Mary</td>
			<td className={styles["table-body-row__cell"]}>Ireland</td>
			<td className={styles["table-body-row__cell"]}>Architect</td>
		</TableFilteringRow>,
		<TableFilteringRow key="jane" className={styles["table-body-row"]}>
			<td className={styles["table-body-row__cell"]}>Jane</td>
			<td className={styles["table-body-row__cell"]}>Australia</td>
			<td className={styles["table-body-row__cell"]}>QA Tester</td>
		</TableFilteringRow>,
		<TableFilteringRow key="mark" className={styles["table-body-row"]}>
			<td className={styles["table-body-row__cell"]}>Mark</td>
			<td className={styles["table-body-row__cell"]}>Russia</td>
			<td className={styles["table-body-row__cell"]}>Game Developer</td>
		</TableFilteringRow>,
		<TableFilteringRow key="paul" className={styles["table-body-row"]}>
			<td className={styles["table-body-row__cell"]}>Paul</td>
			<td className={styles["table-body-row__cell"]}>France</td>
			<td className={styles["table-body-row__cell"]}>Backend Developer</td>
		</TableFilteringRow>
	];

	const stylesObject: TableFilteringDeclaredVariables = {
		"--filterIconUrl": `url("${filterIcon}")`
	};
	return (
		<main className="main" style={stylesObject}>
			<h1 className="heading">Table Filtering</h1>
			<p>
				The table filtering component is a component that allows you to add filters to a table, through getting all unique values in a table
				column and allowing the user to cross out certain values. While this is rarely needed, it is still a useful widget to have when
				you're displaying real tabular data, as this component allows you to easily customize the table filtering process, making it very
				easy to setup and configure: you need to use three provided components in conjunction for it to work correctly. Firstly, you should
				create a table filtering component, and get the component as a ref. Next, you need to create base table structure: two exceptions is
				to use table filtering header instead of normal table headers and table filtering row instead of normal table rows. In order to
				configure clicking on headers, attach a click event listener to each header and call the table component's exposed onHeaderClicked
				function: pass a zero-based index as the parameter. Then you can attach an event listener to the tbody and make it call table
				component's exposed closeSelect method. The filtering works through the text contents of the td elements, so ensure table cells are
				having a text content. In order to configure non-filterable headers, just omit click listeners for specific headers.
			</p>
			<p>Here you can see an example of this component with filtering for all headers enabled:</p>
			<TableFiltering className={styles["table-wrap"]} ref={table} combinedChildren={[...headers, ...rows]}>
				<table className={styles.table}>
					<thead className={styles["table-head"]}>
						<tr>{headers}</tr>
					</thead>
					<tbody className={styles["table-body"]} onClick={onTableBodyClicked}>
						{rows}
					</tbody>
				</table>
			</TableFiltering>
		</main>
	);
};

export default Page;
