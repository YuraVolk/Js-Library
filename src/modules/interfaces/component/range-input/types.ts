export interface RangeInputConfiguration {
    minimum: number;
    maximum: number;
    defaultValue: number;
    step: number;
    ticks: number[];
    label: string;
    thumbSize: string;
    trackColor: string;
    thumbColor: string;
    hoverColor: string;
    activeColor: string;
    valueSize: string;
    hideValue: boolean;
    allSameLine: boolean;
}

export const defaultActiveColor = `rgba(255,85,0, .6)`;
export const defaultHoverColor = `rgba(255,85,0, .3)`;
