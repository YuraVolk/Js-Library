import { CustomSelectConfiguration, SelectInternalItem } from "shared/component/customSelect";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";

export interface CustomSelectReactConfiguration extends CustomSelectConfiguration, GenericReactComponentProps {
	onChange?(element: SelectInternalItem): void;
}
