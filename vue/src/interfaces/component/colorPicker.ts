import { ColorPickerConfiguration } from "shared/component/colorPicker";
import { RGBAColor } from "shared/interfaces/colors";

export interface ColorPickerVueConfiguration extends Omit<ColorPickerConfiguration, "backgroundColor"> {
	backgroundColor?: RGBAColor;
	imageUrl: string;
	imageWidth?: number;
	imageHeight?: number;
}
