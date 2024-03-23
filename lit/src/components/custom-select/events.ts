import { SelectInternalItem } from "shared/component/customSelect";

export class CustomSelectChangeEvent extends Event {
	constructor(readonly item: SelectInternalItem) {
		super("change");
	}
}
