export type RGBAColor = [number, number, number, number];
export const verifyValidRGBAColor = (color: number[]): color is RGBAColor => color.length === 4;
