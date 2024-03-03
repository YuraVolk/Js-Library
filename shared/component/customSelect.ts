export interface CustomSelectConfiguration {
	items: SelectInternalItem[];
	selectName: string;
}

export interface SelectInternalItem {
	innerContent: string;
	value: string;
	isSelected: boolean;
	isDisabled: boolean;
}
