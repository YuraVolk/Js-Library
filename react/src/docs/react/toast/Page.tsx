import React, { useState } from "react";
import styles from "./Page.module.css";
import { Toast } from "../../../components/toast/Toast";

const Page = () => {
	const [isOpen, setOpen] = useState(true);

	return (
		<main className="main">
			<h1 className="heading">Toast</h1>
			<p>
				The toast component which represents a panel that smoothly transitions in and then smoothly transitions out is commonly used and has
				many applications: notifications, cookie requests, and et cetera. This is a very simplistic, and just gives the necessary attributes
				to quickly setup a smooth animation. The basic configuration is to insert all required content inside the component. This component
				accepts the following props:
			</p>
			<ul>
				<li>isOpen, specifies whether the toast is open.</li>
				<li>
					autoCloseDelay, a feature by default disabled that automatically closes the toast after the milliseconds passed to this attribute.
				</li>
				<li>animationDuration, a number that specifies the duration of the animation in milliseconds.</li>
				<li>closeToast, an optional callback that closes the toast.</li>
			</ul>
			<p>In the bottom of a page you can see a toast with external CSS styling:</p>
			<Toast isOpen={isOpen} classes={{ ...styles }} animationDuration={800}>
				<div className={styles.toast}>
					<div className={styles["toast-content"]}>
						<span>Some Toast Content Here</span>
						<div className={styles["toast-buttons"]}>
							<button
								className={styles["toast-button"]}
								onClick={() => {
									setOpen(false);
								}}
							>
								OK
							</button>
							<button
								className={styles["toast-button"]}
								onClick={() => {
									setOpen(false);
								}}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</Toast>
		</main>
	);
};

export default Page;
