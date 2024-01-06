import React from "react";
import styles from "./Page.module.css";
import { RangeInput } from "../../../components/range-input/RangeInput";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Custom Range Input</h1>
			<p>
				The range input component provides a customizable range input slider with various features such as ticks, labels, and styling
				options. This component allows users to select a value within a specified range. Through the callback function you to react on
				dynamic value changes without any issues, thus fully functioning as a custom range input component.
			</p>
			<ul>
				<li>minimum, number as the minimum value.</li>
				<li>maximum, number as the maximum value.</li>
				<li>defaultValue, defines the default range value.</li>
				<li>step, defines the range step.</li>
				<li>ticks, a number array defining the breakpoints from 0 to 100 of the ticks, no matter the range minimum and maximum.</li>
				<li>label, a label for the range input, empty string by default.</li>
				<li>
					thumbSize, trackColor, thumbColor, hoverColor, activeColor and valueSize. Colors to give range styles: all of these are strings
					and have default values.
				</li>
				<li>onUpdate, an option to allow you to react on input changes.</li>
			</ul>
			<p>Here is an example of basic usage with default value of 50 and step 5:</p>
			<RangeInput className={styles["range-input"]} defaultValue={50} step={5} />
			<p>This is a range input with added ticks:</p>
			<RangeInput className={styles["range-input"]} ticks={[0, 25, 50, 75, 100]} />
			<p>Here is an example of custom styled colors:</p>
			<RangeInput
				className={styles["range-input"]}
				thumbSize="20px"
				trackColor="#ddd"
				thumbColor="#0f0"
				hoverColor="#ff0"
				activeColor="#f00"
				valueSize="30px"
			/>
		</main>
	);
};

export default Page;
