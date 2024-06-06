import React, { useMemo } from "react";
import classes from "./Page.module.css";
import { CipheringText } from "../../../components/ciphering-text/CipheringText";

const Page = () => {
	const strings = useMemo(
		() => ({
			first: ["Lorem ipsum dolor", "sit amet"],
			second: ["Hello", "World"],
			third: ["Hello", "World", "New Text", "Something else"]
		}),
		[]
	);

	return (
		<main className="main">
			<h1 className="heading">Ciphering Text</h1>
			<p>
				The Ciphering Text Component is a custom component that allows you to display text in a ciphered manner. It takes an array of
				strings and displays them one by one, with each string being ciphered and revealed gradually. This component adds an interesting
				visual effect to your web application or website. The ciphering text component can be configured through a variety of configuration
				settings:
			</p>
			<ul>
				<li>strings: the main configuration prop that is passed as an array of strings.</li>
				<li>repetitions: the amount of repetitions the ciphering text component will get re-ciphered. Defaults to one repetition.</li>
				<li>interval: the delay between text animations, defaults to 3000 milliseconds.</li>
				<li>typingSpeed: the ciphering speed of an individual character. Defaults to 45 milliseconds.</li>
				<li>characters: an optional configuration prop that is passed as an array of strings. It contains all ciphering characters.</li>
			</ul>
			<p>An actively ciphering letter is given the active class. Here you can see a ciphering text with two phrases in action:</p>
			<CipheringText className={classes["ciphering-text"]} strings={strings.first} repetitions={Infinity}>
				{(letter, i) => (
					<span
						key={`${letter.letter}-${String(i)}`}
						className={`${classes["ciphering-text__span"]} ${letter.letterState === "changing" ? classes.active : ""}`}
					>
						{letter.letter}
					</span>
				)}
			</CipheringText>
			<p>Here is another example of it animating Hello and World phrases:</p>
			<CipheringText className={classes["ciphering-text"]} strings={strings.second} interval={2000} repetitions={Infinity}>
				{(letter, i) => (
					<span
						key={`${letter.letter}-${String(i)}`}
						className={`${classes["ciphering-text__span"]} ${letter.letterState === "changing" ? classes.active : ""}`}
					>
						{letter.letter}
					</span>
				)}
			</CipheringText>
			<p>Here is an example with custom characters:</p>
			<CipheringText
				className={classes["ciphering-text"]}
				strings={strings.third}
				repetitions={Infinity}
				characters={"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
			>
				{(letter, i) => (
					<span
						key={`${letter.letter}-${String(i)}`}
						className={`${classes["ciphering-text__span"]} ${letter.letterState === "changing" ? classes.active : ""}`}
					>
						{letter.letter}
					</span>
				)}
			</CipheringText>
			<p>
				In this example, the Ciphering Text Component is configured to use custom characters for ciphering the text. The characters are set
				to "ABCDEFGHIJKLMNOPQRSTUVWXYZ", which means the ciphered text will only contain uppercase letters.
			</p>
			<CipheringText
				className={classes["ciphering-text"]}
				strings={strings.third}
				repetitions={Infinity}
				characters={"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
				typingSpeed={45}
				duration={100}
				classNames={{ ...classes }}
			>
				{(letter, i) => (
					<span
						key={letter.letterState === "changing" ? `${letter.letter}-${String(i)}` : String(i)}
						className={`${classes["ciphering-text__span"]} ${classes["ciphering-text__span--animated"]} ${classes.initial}`}
					>
						{letter.letter}
					</span>
				)}
			</CipheringText>
		</main>
	);
};

export default Page;
