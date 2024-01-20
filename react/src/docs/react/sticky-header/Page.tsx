import React from "react";
import styles from "./Page.module.css";
import { StickyHeader } from "../../../components/sticky-header/StickyHeader";
import { StickyHeaderElement } from "../../../components/sticky-header/StickyHeaderElement";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Sticky Header</h1>
			<p>
				The sticky header component is a component that makes use of the IntersectionObserver API and wrapper custom component to keep track
				of when intersection changes and quickly keep track of which state the header should be in. The custom component represents the
				scrolling point, and its first nested element is the sticky header. As soon as header is not fully visible as specified by user, the
				sticky header is then automatically re-updated. Another feature of this component is the smooth animation from the non-sticky state
				to the fixed state. This component accepts the following props:
			</p>
			<ul>
				<li>rootMargin, a string that is passed to the IntersectionObserver as the root margin.</li>
				<li>
					ratio, a number in range of 0 to 1 that specifies which ratio of the component should be fully visible for state to change. The
					default value is 0.25.
				</li>
			</ul>
			<p>Here you can see an example of this component with default settings:</p>
			<StickyHeader className={styles["sticky-header-wrap"]}>
				<StickyHeaderElement className={styles["sticky-header"]}>
					<p>Sticky Header</p>
				</StickyHeaderElement>
			</StickyHeader>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
				asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
				asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
				asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
				asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
				asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
				asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
				asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
				asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
				asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
				asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
			</p>
		</main>
	);
};

export default Page;
