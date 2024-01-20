import React from "react";
import styles from "./Page.module.css";
import { RebuildingText } from "../../../components/rebuilding-text/RebuildingText";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Rebuilding Text</h1>
			<p>
				The rebuilding text component is a custom component that allows you to display text in a rebuilding manner. It takes an array of
				strings and displays them one by one, with each string being rebuilt and revealed gradually. This component adds an interesting
				visual effect to your web application or website. You could think of the core logic of this effect to bridge the gap in difference
				between the two words through swapping the letters, bridging the middle gap between two words. Here are the component props:
			</p>
			<ul>
				<li>strings: the main configuration prop that is passed as an array of strings.</li>
				<li>repetitions: the amount of repetitions the rebuilding text component will get rebuilt. Defaults to one repetition.</li>
				<li>interval: the delay between text animations, defaults to 2500 milliseconds.</li>
				<li>typingSpeed: the rebuilding speed of an individual character. Defaults to 75 milliseconds.</li>
			</ul>
			<p>Here is an example of this component:</p>
			<RebuildingText
				strings={["Test text", "The new resulting text", "Small"]}
				repetitions={Infinity}
				className={styles["rebuilding-text"]}
			/>
			<p>Here is another example of the component with two same length words:</p>
			<RebuildingText strings={["Hello", "World"]} repetitions={Infinity} className={styles["rebuilding-text"]} />
			<p>
				In this example, the rebuilding text component is used to display the strings "Hello" and "World" in a swapped manner. The strings
				will be repeated twice with an interval of 3 seconds between repetitions. The typing speed is set to 45 characters per second. The
				pre element is used as the target element for displaying the rebuilt text. Here you can closely observe how the algorithm works:
			</p>
			<RebuildingText
				strings={["Test text", "The new resulting text", "Small"]}
				repetitions={Infinity}
				typingSpeed={300}
				className={styles["rebuilding-text"]}
			/>
		</main>
	);
};

export default Page;
