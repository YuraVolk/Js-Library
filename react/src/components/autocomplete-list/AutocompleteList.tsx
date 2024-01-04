import React from "react";
import { AutocompleteListReactConfiguration } from "../../../src/interfaces/component/autocompleteList";
import styles from "./AutocompleteList.module.css";

export const AutocompleteList = (props: AutocompleteListReactConfiguration) => {
	const value = props.inputValue.toLowerCase().trim();
	const filteredOptions = value.length ? props.options.filter((option) => {
		const lowerOption = option.toLowerCase();
		return lowerOption !== value && lowerOption.startsWith(value);
	}) : [];
	const isListOpened = filteredOptions.length > 0;

	return (
		<div className={styles.wrap}>
			{props.children}
			{isListOpened && (
				<ul className={styles["autocomplete-items"]}>
					{filteredOptions.map((option) => (
						<li
							key={option}
							className={styles["autocomplete-item"]}
							onClick={() => {
								props.changeInputValue(option);
							}}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
