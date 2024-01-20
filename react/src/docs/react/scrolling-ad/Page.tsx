import React from "react";
import styles from "./Page.module.css";
import { ScrollingAd } from "../../../components/scrolling-ad/ScrollingAd";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Scrolling Ad</h1>
			<p>
				The scrolling ad component is without a doubt one of the most annoying components there are, but nonetheless this component is
				maximally automated to work autonomously, and has two main mechanisms that allow it to be maximally performant to scroll into user's
				view: intersection observer and an interval timer to check its current scroll point within the closest scroll parent. This component
				accepts children elements as the content and the following props:
			</p>
			<ul>
				<li>rootMargin, a number in pixels that specifies the top margin of the component that is applied through CSS. Defaults to 0.</li>
				<li>checkInterval, a number that specifies the milliseconds of automatic scroll window check. Defaults to 500.</li>
			</ul>
			<p>Here is an example component with default settings:</p>
			<div className={styles["scrollable-container"]}>
				<ScrollingAd className={styles["scrolling-ad-wrap"]}>
					<div className={styles["scrolling-ad"]}>
						<p>This message scrolls to the user, even if you scroll away from it.</p>
					</div>
				</ScrollingAd>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A
					scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate
					odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id
					nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget duis
					at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim
					sed. A scelerisque purus semper eget duis at tellus.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A
					scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate
					odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id
					nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget duis
					at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim
					sed. A scelerisque purus semper eget duis at tellus.
				</p>
			</div>
		</main>
	);
};

export default Page;
