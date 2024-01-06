import React, { CSSProperties, useCallback, useEffect, useId, useMemo, useState } from "react";
import { defaultActiveColor, defaultHoverColor } from "shared/component/rangeInput";
import styles from "./RangeInput.module.css";
import { RangeInputCSSVariableKeys, RangeInputReactConfiguration, RangeInputTickCSSVariableKeys } from "../../interfaces/component/rangeInput";

export const RangeInput = ({
	minimum = 0,
	maximum = 100,
	defaultValue = 0,
	step = 1,
	ticks = [],
	label = "",
	thumbSize = "15px",
	trackColor = "#ccc",
	thumbColor = "#f50",
	hoverColor = defaultHoverColor,
	activeColor = defaultActiveColor,
	valueSize = "25px",
	hideValue = false,
	allSameLine = false,
    onUpdate,
    ...props
}: Partial<RangeInputReactConfiguration>) => {
	const uniqueId = useId();
	const [value, setValue] = useState(0);

	const rangeInputVariables = useMemo<RangeInputCSSVariableKeys>(
		() => ({
			"--thumbSize": thumbSize,
			"--trackColor": trackColor,
			"--thumbColor": thumbColor,
			"--hoverColor": hoverColor,
			"--activeColor": activeColor,
			"--valueSize": valueSize
		}),
		[activeColor, hoverColor, thumbColor, thumbSize, trackColor, valueSize]
	);
	const gradientStyle = useMemo<CSSProperties>(() => {
		const progress = (value / maximum) * 100;
		return {
			background: `linear-gradient(to right, ${thumbColor} ${progress}%, ${trackColor} ${progress}%)`
		};
	}, [maximum, thumbColor, trackColor, value]);

    const onInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        onUpdate?.(newValue);
    }, [onUpdate]);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

	return (
		<div className={`${styles.wrap} ${props.className ?? ""}`} style={rangeInputVariables}>
			<div className={`${styles["range-slider"]} ${allSameLine ? styles["range-slider--one-lined"] : ""}`}>
				<label className={styles["range-slider__label"]} htmlFor={uniqueId}>
					{label}
				</label>
				<input
					type="range"
					min={minimum}
					max={maximum}
					value={value}
					id={uniqueId}
					step={step}
					className={styles["range-slider__input"]}
					style={gradientStyle}
                    onInput={onInputChange}
				/>
				{ticks.length > 0 && (
					<ul className={styles["range-slider-ticks"]}>
						{ticks.map((tick) => {
							const tickStyles: RangeInputTickCSSVariableKeys = {
								"--value": tick + "%"
							};
							return (
								<li className={styles["range-slider-ticks__tick"]} style={tickStyles} key={tick}>
									{tick}
								</li>
							);
						})}
					</ul>
				)}
			</div>
            {!hideValue && <span className={styles.value}>{value}</span>}
		</div>
	);
};
