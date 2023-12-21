import { ColorPickerConfiguration } from "./types";

export interface ColorPickerVueConfiguration extends ColorPickerConfiguration {
    imageUrl: string;
    imageWidth?: number;
    imageHeight?: number;
}
