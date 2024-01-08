import React from "react";
import styles from "./Page.module.css";
import { FloatingPanel } from "../../../components/floating-panel/FloatingPanel";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Floating Panel</h1>
			<p>
				The floating panel component is a versatile and customizable UI element that can be easily integrated into web applications. It
				provides a convenient way to display content in a floating manner, allowing users to interact with it while maintaining its position
				on the screen. The component can be configured through CSS and offers various options to suit different design requirements.
			</p>
			<ul>
				<li>
					isOpen: This boolean attribute determines whether the panel is open or closed. When set to true, the panel is visible and
					accessible to the user. Conversely, when set to false, the panel is hidden from view.
				</li>
				<li>
					CSS Styling: The component can be styled using CSS to match the desired design aesthetic. This includes options to define the
					panel's dimensions, background color, border, and other visual properties. Without the correct styles, like width, height and
					position properties, the panel may not work correctly at all, so only the React logic is delegated.
				</li>
				<li>
					Positioning: The floating panel component best supports two main CSS position options: fixed and sticky. When the fixed position
					is used, the panel remains fixed relative to the viewport, regardless of scrolling. This is useful when the panel needs to stay in
					a specific position on the screen, such as a sidebar or a toolbar. On the other hand, the sticky position allows the panel to
					stick to a specific position within its parent container as the user scrolls. This is particularly useful when the panel needs to
					stay within a certain section of the page, such as a header or a footer.
				</li>
			</ul>
			<FloatingPanel isOpen className={`${styles["floating-panel"]} ${styles["floating-panel--fixed"]}`}>
				<h1 className={styles["floating-panel__caption"]}>Fixed Floating Panel</h1>
				<p>
					This panel keeps its alignment through position: fixed. Through this alignment it is possible to keep it atop of all other
					components through minimal CSS configuration.
				</p>
				<strong>DRAG ME</strong>
			</FloatingPanel>
			<p>Here is an example of a floating panel with position set to sticky. As you can see it is confined to container.</p>
			<div className={styles.wrap}>
				<FloatingPanel isOpen className={`${styles["floating-panel"]} ${styles["floating-panel--sticky"]}`}>
					<h1 className={styles["floating-panel__caption"]}>Sticky Floating Panel</h1>
					<p>
						This panel keeps its alignment through position: sticky. This way it stays within the bounds of the container, unable to ever
						leave it in a performant way.
					</p>
					<strong>DRAG ME</strong>
				</FloatingPanel>
			</div>
		</main>
	);
};

export default Page;
