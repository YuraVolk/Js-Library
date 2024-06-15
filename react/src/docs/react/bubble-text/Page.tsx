import React from "react";
import classes from "./Page.module.css";
import { BubbleText } from "../../../components/bubble-text/BubbleText";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Bubble Text</h1>
			<p>
				The Bubble Text Component is a component that allows you to display text in a swapping manner: one by one each letter is replaced by
				a different letter from the new text, as such creating a swapping effect. This component makes most sense with Transition Group
				component, which is activated through setting a duration prop and passing a render function to the component. This way one can make
				smooth animations with letters actually being swapped. Here's an example below that demonstrates this effect:
			</p>
			<BubbleText
				className={classes["bubble-text"]}
				strings={["Lorem ipsum dolor", "sit amet dolor consecteur"]}
				repetitions={Infinity}
				typingSpeed={175}
				duration={175}
				classNames={{ ...classes }}
			>
				{(letter, i) => (
					<span key={letter.letter + String(i)} className={classes["bubble-text__span"]}>
						{letter.letter}
					</span>
				)}
			</BubbleText>
			<p>
				Here's an another example of the component, but this time with faster typing speed than transition speed:
			</p>
			<BubbleText
				className={classes["bubble-text"]}
				strings={["Lorem ipsum dolor", "sit amet dolor consecteur"]}
				repetitions={Infinity}
				typingSpeed={75}
				duration={175}
				classNames={{ ...classes }}
			>
				{(letter, i) => (
					<span key={letter.letter + String(i)} className={classes["bubble-text__span"]}>
						{letter.letter}
					</span>
				)}
			</BubbleText>
		</main>
	);
};

export default Page;
