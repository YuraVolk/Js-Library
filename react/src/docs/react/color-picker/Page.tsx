import React from "react";
import styles from "./Page.module.css";
import { ColorPicker } from "../../../components/color-picker/ColorPicker";
import colorPickerImage from "../../../../../assets/img/picker.jpg";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Color Picker</h1>
			<p>
				The custom color picker provides enhanced user experience as it can be manually configured to match the overall look of website,
				providing a seamless user experience through complete control of layout, styling and interaction. Custom color pickers allow you to
				easily integrate with your React components, without any compatibility issues, need to convert into different color formats, being
				the same across all browsers. Such color pickers may have better performance due to not being anyhow dependent on system UI. Here
				are the props for color picker component:
			</p>
			<ul>
				<li>imageUrl, required to load the image from which you can pick the color.</li>
				<li>width, defines the width of color picker, in pixels. Defaults to 245.</li>
				<li>height, defines the height of color picker, in pixels. Defaults to 245.</li>
				<li>backgroundColor, a comma-separated list of four values representing the RGBA background color. Defaults to black.</li>
				<li>rgba, a comma-separated list of four values representing the default RGBA color. Defaults to black.</li>
			</ul>
			<p>
				The color picker uses range input component to listen for the opacity value changes, and as such allows for easy styling. Here's an
				example of the component:
			</p>
            <div className={styles["color-picker"]}>
                <ColorPicker imageUrl={colorPickerImage} />
            </div>
		</main>
	);
};

export default Page;
