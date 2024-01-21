import React from "react";
import styles from "./Page.module.css";
import { TypingText } from "../../../components/typing-text/TypingText";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Typing Text</h1>
			<p>
				The typing text, or typewriter text effect is an interesting effect to add to your website. This component represents a visually
				appealing self-typing text effect that firstly erases any existing text and then types the new text. Through configuration options
				you may tweak the default settings and even apply animation to the text. This component accepts the following props
			</p>
			<ul>
				<li>strings, specifies the phrase list, with semicolon separated sentences. Empty by default.</li>
				<li>repetitions, allows you to repeat and cycle through phrases by the number specified. Defaults to 1.</li>
				<li>interval, sets the initial delay and interval between the text animation.</li>
				<li>typingSpeed, sets the speed at which letters are typed in milliseconds, defaults to 35.</li>
				<li>unTypingSpeed, an optional number that sets the speed at which letters are deleted in milliseconds, defaults to 35.</li>
			</ul>
			<p>In the bottom of a page you can see a typing text with external CSS styling:</p>
			<TypingText
				className={styles["typing-text"]}
				repetitions={Infinity}
				unTypingSpeed={15}
				strings={[
					"Nulla facilisi. Cras venenatis nulla non erat luctus ultrices. In facilisis tincidunt tristique. Curabitur lobortis sapien a metus lobortis, et lobortis nunc suscipit. Fusce orci mauris, bibendum et vehicula ac, fringilla at elit.",
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque nam! Perferendis non, deleniti tempore soluta magnam expedita nulla? Est repudiandae error rerum dolorum dolor ducimus ex tempore aut temporibus."
				]}
			/>
			<p>And here is an animated version of this text:</p>
			<TypingText
				className={`${styles["typing-text"]} ${styles["typing-text--animated"]}`}
				repetitions={Infinity}
				unTypingSpeed={15}
				strings={[
					"",
					"Nulla facilisi. Cras venenatis nulla non erat luctus ultrices. In facilisis tincidunt tristique. Curabitur lobortis sapien a metus lobortis, et lobortis nunc suscipit. Fusce orci mauris, bibendum et vehicula ac, fringilla at elit.",
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque nam! Perferendis non, deleniti tempore soluta magnam expedita nulla? Est repudiandae error rerum dolorum dolor ducimus ex tempore aut temporibus."
				]}
			/>
		</main>
	);
};

export default Page;
