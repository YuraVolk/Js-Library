import React from "react";
import styles from "./Page.module.css";
import { Parallax } from "../../../components/parallax/Parallax";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Parallax</h1>
			<p>
				This component creates an effect of displacing contents upon scroll, such as when you scroll down the component may either get
				displaced to top or bottom depending on the configuration. Through precise configuration, it is possible to achieve very smooth
				parallax transitions.
			</p>
			<ul>
				<li>effect, number which defines the threshold of required scroll distance.</li>
				<li>isHorizontal, a boolean value allowing to make parallax horizontal and react to horizontal scroll. Set to false by default.</li>
				<li>isHorizontalTranslation, a boolean value allowing parallax to change its axis to X if set to true. Set to false by default.</li>
				<li>speed, a number tht defines how fast the element shifts into view.</li>
				<li>margin, which defines the base shift to be subtracted from parallax, negative number shifts to bottom, positive to top.</li>
			</ul>
			<p>
				The below example showcases a simple effect with margin -20 and default settings to scroll bottom element to top upon it appearing.
			</p>
			<div className={styles["parallax-container"]}>
				<Parallax margin={-20}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed.
						A scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate
						odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque
						id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget
						duis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed
						libero enim sed. A scelerisque purus semper eget duis at tellus.
					</p>
				</Parallax>
				<Parallax margin={-20}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed.
						A scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate
						odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque
						id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget
						duis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed
						libero enim sed. A scelerisque purus semper eget duis at tellus.
					</p>
				</Parallax>
			</div>
		</main>
	);
};

export default Page;
