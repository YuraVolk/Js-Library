import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";
import styles from "./TableFiltering.module.css";
import { TableSelectInformation } from "shared/component/tableFiltering";
import { ContextLinkedItems, ExposedContextFunctions, LinkedReactItem } from "../../interfaces/hooks/useLinkedItem";
import { assertNonUndefined } from "shared/utils/utils";
import { TableFilteringConfiguration, TableFilteringExposedFunctions } from "../../interfaces/component/tableFiltering";

const TableFiltering = forwardRef<TableFilteringExposedFunctions, TableFilteringConfiguration>((props, ref) => {
	const elements = useRef<ExposedContextFunctions | null>(null);
	const wrap = useRef<HTMLDivElement>(null);
	const [openSelect, setOpenSelect] = useState<TableSelectInformation | undefined>();
	const [excludedCriteria, setExcludedCriteria] = useState<Array<string | null>[]>([]);

	const updateExcludedRows = useCallback((excludedCriteria: Array<string | null>[]) => {
		const entries = [...Object.entries(elements.current?.getState() ?? {})].map(([key, entry]): [string, LinkedReactItem] => [
			key,
			{ ...entry }
		]);

		for (const [key, row] of entries) {
			if (!key.startsWith("table-row-")) continue;
			if (Array.from(row.element.current?.children ?? []).some((element, i) => excludedCriteria[i].includes(element.textContent ?? ""))) {
				row.styles = {
					display: "none"
				};
			} else {
				row.styles = {
					display: "revert"
				};
			}
		}

		elements.current?.updateState(Object.fromEntries(entries));
	}, []);

	const toggleCriterion = useCallback(
		(option: string) => {
			assertNonUndefined(openSelect);
			const index = openSelect.index;

			const newExcludedCriteria = [...excludedCriteria];
			if (newExcludedCriteria[index].includes(option)) {
				newExcludedCriteria[index].splice(newExcludedCriteria[index].indexOf(option), 1);
			} else newExcludedCriteria[index].push(option);

			setExcludedCriteria(newExcludedCriteria);
			updateExcludedRows(newExcludedCriteria);
		},
		[excludedCriteria, openSelect, updateExcludedRows]
	);

	const onHeaderClicked = useCallback((index: number) => {
		if (!wrap.current) return;
		const headers: LinkedReactItem[] = [],
			rows: LinkedReactItem[] = [];
		for (const [key, value] of Object.entries(elements.current?.getState() ?? {})) {
			if (key.startsWith("table-header-")) {
				headers.push(value);
			} else if (key.startsWith("table-row-")) rows.push(value);
		}

		const headerRect = headers[index].element.current?.getBoundingClientRect();
		assertNonUndefined(headerRect);
		const wrapRect = wrap.current.getBoundingClientRect();
		const top = headerRect.top - wrapRect.top,
			left = headerRect.left - wrapRect.left;

		setOpenSelect({
			index,
			top,
			left,
			width: headerRect.width,
			height: headerRect.height,
			options: [...new Set(rows.map(({ element }) => element.current?.children[index].textContent ?? ""))]
		});
	}, []);

	useImperativeHandle(ref, () => ({
		onHeaderClicked(index) {
			onHeaderClicked(index);
		},
		closeSelect() {
			setOpenSelect(undefined);
		}
	}));

	const setup = useCallback(() => {
		setExcludedCriteria(Array.from({ length: Object.entries(elements.current?.getState() ?? {}).length }, () => []));
	}, []);

	return (
		<ContextLinkedItems ref={elements} innerChildren={props.combinedChildren} onAllElementsLoaded={setup}>
			<div className={`${styles.wrap} ${props.className ?? ""}`} ref={wrap}>
				{props.children}
				{openSelect && (
					<div
						className={styles["wrap-select"]}
						style={{
							top: `${String(openSelect.top)}px`,
							left: `${String(openSelect.left)}px`,
							width: `${String(openSelect.width)}px`,
							height: `${String(openSelect.height)}px`
						}}
					>
						{openSelect.options.map((option) => (
							<div
								onClick={() => {
									toggleCriterion(option);
								}}
								key={option}
								className={`${styles["wrap-select__option"]} ${
									excludedCriteria[openSelect.index].includes(option) ? styles["wrap-select__option--crossed"] : ""
								}`}
							>
								{option}
							</div>
						))}
					</div>
				)}
			</div>
		</ContextLinkedItems>
	);
});

export { TableFiltering };
