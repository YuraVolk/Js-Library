import React, { useRef } from "react";
import styles from "./Page.module.css";
import { Popup } from "../../../components/popup/Popup";
import { PopupExposedFunctions } from "../../../interfaces/component/popup";
import closeImage from "../../../../../assets/img/close.png";

const Page = () => {
	const popup = useRef<PopupExposedFunctions>(null);

	return (
		<main className="main">
			<h1 className="heading">Popup</h1>
			<p>
				A popup component is a user interface element that appears on top of the main content to display additional information or
				functionality. Interface blocking popups are a very common feature in user interfaces that prevent the appearance of pop-up windows
				or dialogs. These popups are typically used to display additional information, request user input, or show notifications. This popup
				component accepts two slotted children at user's configuration: slot with name popup, containing the by default hidden popup window,
				and slot with name popup-open-button, which acts as a button to open the popup. This popup accepts the following props:
			</p>
			<ul>
				<li>open, A boolean property that determines whether the popup is open or closed. Defaults to false.</li>
				<li>displayOpenButton, A boolean property that determines whether to display the open button for the popup. Defaults to false.</li>
				<li>
					autoClosingTime, an optional number property that specifies the time in milliseconds after which the popup should automatically
					close.
				</li>
			</ul>
			<p>Here is a simple popup with an open button:</p>
			<Popup displayOpenButton ref={popup} buttonChildren={<button className={styles["popup-open-button"]}>Open Popup</button>}>
				<div className={styles["popup-wrap"]}>
					<div className={styles.popup}>
						<img className={styles["popup__close-button"]} src={closeImage} alt="Close Button" onClick={() => popup.current?.close()} />
						<p>Sample popup. This is a template for making different popups.</p>
					</div>
				</div>
			</Popup>
			<p>
				In order to work correctly in all environments, this popup component uses a portal to the body element to make sure the popup would
				be working correctly.
			</p>
		</main>
	);
};

export default Page;
