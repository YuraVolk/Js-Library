import React, { useCallback, useEffect, useRef, useState } from "react";
import { CustomSelectReactConfiguration } from "react/src/interfaces/component/customSelect";
import styles from "./CustomSelect.module.css";
import { SelectInternalItem } from "shared/component/customSelect";

export const CustomSelect = (props: CustomSelectReactConfiguration) => {
	const [internalItems, setInternalItems] = useState([...props.items]);
	const [isOpened, setOpened] = useState(false);
	const selectedItem = internalItems.find((item) => item.isSelected);
	const wrap = useRef<HTMLDivElement>(null);

	const toggleOpened = useCallback(() => {
		setOpened((isOpened) => !isOpened);
	}, []);

	const onItemSelected = useCallback(
		(element: SelectInternalItem) => {
			setOpened(false);
			if (element.isDisabled) return;

			const newElements = [...internalItems];
			for (let i = 0; i < newElements.length; i++) {
				if (newElements[i] === element) {
					newElements[i] = {
						...newElements[i],
						isSelected: true
					};
					props.onChange?.(element);
				} else {
					newElements[i] = {
						...newElements[i],
						isSelected: false
					};
				}
			}

			setInternalItems([...newElements]);
		},
		[internalItems, props]
	);

	useEffect(() => {
		const documentListener: EventListener = (event) => {
			if (!event.composedPath().some((e) => e === wrap.current)) setOpened(false);
		};
		document.addEventListener("click", documentListener);

		return () => {
			document.removeEventListener("click", documentListener);
		};
	}, []);

	return (
		<>
			<select
				className={styles["real-select"]}
				value={selectedItem?.value ?? ""}
				name={props.selectName}
				onChange={() => {
					/* */
				}}
			>
				{internalItems.map((option) => (
					<option value={option.value} disabled={option.isDisabled} key={option.value}>
						{option.innerContent}
					</option>
				))}
			</select>
			<div className={styles.wrap} ref={wrap}>
				<div
					onClick={toggleOpened}
					className={`${styles["custom-select-option"]} ${styles["custom-select-current"]} ${isOpened ? styles["active"] : ""}`}
				>
					{selectedItem?.innerContent ?? ""}
				</div>
				<ul className={`${styles["custom-select-options"]} ${!(internalItems.length && isOpened) ? styles["hidden"] : ""}`}>
					{internalItems.map((element) => (
						<li
							key={element.value}
							className={styles["custom-select-option"]}
							data-disabled={element.isDisabled}
							data-selected={element.isSelected}
							value={element.value}
							onClick={() => {
								onItemSelected(element);
							}}
						>
							{element.innerContent}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
