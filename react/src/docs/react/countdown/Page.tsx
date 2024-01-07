import React from "react";
import styles from "./Page.module.css";
import { Countdown } from "../../../components/countdown/Countdown";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Countdown</h1>
			<p>
				The countdown component is a common component and has many applications. Many countdowns have fixed formats, however this countdown
				component can be easily extended to give a custom format with minimum configuration required. If you want to use standard word-based
				text rendering, all you have to do is to specify the date prop to be a real date string in the countdown-component element. The
				countdown can be easily customized through external CSS, thus making it very easy to configure. Here is a working example of the
				component:
			</p>
			<Countdown className={styles["countdown"]} />
			<p>
				This React version of the countdown component is configured to accept TimeUnit interface array, thus allowing you to easily
				customize the output format and the total output settings.
			</p>
		</main>
	);
};

export default Page;
