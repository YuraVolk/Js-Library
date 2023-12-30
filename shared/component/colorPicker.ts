import { RGBAColor } from "shared/interfaces/colors";

export interface ColorPickerConfiguration {
    imageUrl: string;
    width: number;
    height: number;
    backgroundColor: RGBAColor;
    rgba: RGBAColor;
}
