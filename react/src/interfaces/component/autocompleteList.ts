import { AutocompleteListConfiguration } from "shared/component/autocompleteList";
import { WithChildren } from "../../utils/utils";

export interface AutocompleteListReactConfiguration extends WithChildren<AutocompleteListConfiguration> {
	changeInputValue(value: string): void;
}
