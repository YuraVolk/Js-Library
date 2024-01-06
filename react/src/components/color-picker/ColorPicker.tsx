import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./ColorPicker.module.css";
import { ColorPickerConfiguration } from "shared/component/colorPicker";
import { verifyValidRGBAColor } from "shared/interfaces/colors";
import { ColorPickerCSSVariableKeys } from "react/src/interfaces/component/colorPicker";
import { RangeInput } from "../range-input/RangeInput";
import { assertNonUndefined } from "shared/utils/utils";

const ticks = [0, 100];

export const ColorPicker = ({
	imageUrl = "",
	width = 245,
	height = 245,
	backgroundColor = [0, 0, 0, 1],
	rgba = [0, 0, 0, 1]
}: Partial<ColorPickerConfiguration>) => {
	const [rgbaColor, setRgbaColor] = useState(rgba);
	const canvasElement = useRef<HTMLCanvasElement>(null);

	const convertOpacityToBackground = useCallback(() => {
		const alpha = 1 - rgbaColor[3] / 100,
			baseAlpha = rgbaColor[3] / 100;
		return rgbaColor.map((c, i) => (i === 3 ? 1 : Math.round(alpha * backgroundColor[i] + baseAlpha * c * 100)));
	}, [backgroundColor, rgbaColor]);

	const colorPickerStyles = useMemo<ColorPickerCSSVariableKeys>(
		() => ({
			"--width": `${width}px`,
			"--height": `${height}px`
		}),
		[height, width]
	);

	const getHex = useCallback(() => {
		return (
			"#" +
			convertOpacityToBackground()
				.slice(0, -1)
				.map((color) => Number(color).toString(16).padStart(2, "0"))
				.join("")
		);
	}, [convertOpacityToBackground]);

	const getRGB = useCallback(() => {
		return `rgb(${convertOpacityToBackground().slice(0, -1).join(", ")})`;
	}, [convertOpacityToBackground]);

	const getRGBA = useCallback(() => {
		return `rgba(${rgbaColor.join(", ")})`;
	}, [rgbaColor]);

	const sampleStyles = useMemo<CSSProperties>(
		() => ({
			backgroundColor: getRGB()
		}),
		[getRGB]
	);

	const onRangeUpdate = useCallback(
		(newValue: number) => {
			const color = [...rgbaColor.slice(0, -1), newValue];
			if (verifyValidRGBAColor(color)) setRgbaColor(color);
		},
		[rgbaColor]
	);

	const onCanvasMouseDown = useCallback(
		(event: React.MouseEvent<HTMLCanvasElement>) => {
			assertNonUndefined(canvasElement.current);
			const ctx = canvasElement.current.getContext("2d", { willReadFrequently: true });
			assertNonUndefined(ctx);

			const color = [...ctx.getImageData(event.nativeEvent.offsetX, event.nativeEvent.offsetY, 1, 1).data.slice(0, -1), rgbaColor[3]];
			if (verifyValidRGBAColor(color)) setRgbaColor(color);
		},
		[rgbaColor]
	);

	useEffect(() => {
		assertNonUndefined(canvasElement.current);
		const ctx = canvasElement.current.getContext("2d", { willReadFrequently: true });
		assertNonUndefined(ctx);
		const image = new Image(width, height);
		image.src = imageUrl;
		image.onload = () => {
			ctx.drawImage(image, 0, 0, image.width, image.height);
		};
	}, [height, width, imageUrl]);

	return (
		<div className={styles.wrap} style={colorPickerStyles}>
			<div className={styles["color-picker-wrap"]}>
				<div className={styles["color-picker"]}>
					<canvas
						className={styles["color-picker__canvas"]}
						width={width}
						height={height}
						ref={canvasElement}
						onMouseDown={onCanvasMouseDown}
					></canvas>
				</div>
			</div>
			<div className={styles["info"]}>
				<div className={styles["current-color-wrap"]}>
					<div className={styles["current-color"]} style={sampleStyles}></div>
				</div>
				<RangeInput
					className={styles["opacity-range"]}
					maximum={1}
					step={0.01}
					ticks={ticks}
					label={"Opacity:"}
					defaultValue={1}
					onUpdate={onRangeUpdate}
				/>
				<p>Hex code: {getHex()}</p>
				<p>RGBA: {getRGBA()}</p>
				<p>RGB: {getRGB()}</p>
			</div>
		</div>
	);
};
