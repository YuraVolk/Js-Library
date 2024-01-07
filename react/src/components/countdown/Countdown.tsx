import React, { useCallback, useEffect, useState } from "react";
import { CountdownReactConfiguration } from "react/src/interfaces/component/countdown";
import { useInterval } from "../../interfaces/hooks/useInterval";
import { TimeUnit, defaultTimeUnits, reduceTimeUnits } from "shared/component/countdown";

export const Countdown = ({
	units = reduceTimeUnits(defaultTimeUnits),
	date = new Date("May 6, 2085 11:00:00"),
    ...props
}: CountdownReactConfiguration) => {
	const [text, setText] = useState("");

	const renderText = useCallback(
		(units: TimeUnit[]) => {
			let timeString = "",
				distance = date.getTime() - new Date().getTime();
			for (const { timeFactor, name } of units) {
				const value = Math.floor(distance / timeFactor);
				timeString += value <= 0 ? "" : `${value} ${String(value).slice(-1) === "1" ? name : name + "s"} `;
				distance %= timeFactor;
			}

			setText(timeString ? timeString.trim() : "0 seconds");
		},
		[date]
	);

	useInterval(() => {
		renderText(units);
	}, 1000);

	useEffect(() => {
		renderText(units);
	}, [renderText, units]);

    return <span className={props.className ?? ""}>{text}</span>
};
