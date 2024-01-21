import React, { useState } from "react";
import styles from "./Page.module.css";
import { Tabs } from "../../../components/tabs/Tabs";
import { Tab } from "../../../components/tabs/Tab";

const Page = () => {
	const [openTab, setOpenTab] = useState(0);

	return (
		<main className="main">
			<h1 className="heading">Tabs</h1>
			<p>
				The tabs component is a quite popular component that allows to view multiple panes of content out of which only one is visible
				initially. This component encapsulates away the animation logic, automatically applying the click listeners and animation classes in
				order to allow for creating more complex tabs animations, like the one demonstrated here. This component accepts two slotted
				children: a slot with name "headers", for tab headers parent, and a slot with name "tabs", for the tabs parent. Additionally this
				component may accept the following props:
			</p>
			<ul>
				<li>currentTab, a number that specifies the default visible tab index, defaults to 0. Use this prop to change the visible tab.</li>
				<li>headerChildren and tabChildren, to specify headers and tabs children.</li>
			</ul>
			<p>Tab component props are:</p>
			<ul>
				<li>animationDuration, a number to set the animation length in milliseconds.</li>
				<li>tabId, a number to set the tab index.</li>
				<li>classes, which is in fact an object that is passed to the React Transition Group as classes.</li>
			</ul>
			<p>Here you can see an example of default component settings with external CSS styling:</p>
			<Tabs
				className={styles["tabs-wrap"]}
				currentTab={openTab}
				headerChildren={
					<div className={styles["tabs-headers"]}>
						{Array.from({ length: 3 }, (_, i) => (
							<div
								className={`${styles["tab-header"]} ${openTab === i ? styles["active"] : ""}`}
								onClick={() => {
									setOpenTab(i);
								}}
							>
								Tab {i + 1}
							</div>
						))}
					</div>
				}
				tabsChildren={
					<div className={styles["tabs"]}>
						<Tab className={styles["tab"]} animationDuration={300} tabId={0} classes={{ ...styles }}>
							<div className={styles.tab}>
								<h3 className={styles.h3}>Tab 1</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat,
									officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur.
								</p>
							</div>
						</Tab>
						<Tab className={styles["tab"]} animationDuration={300} tabId={1} classes={{ ...styles }}>
							<div className={styles.tab}>
								<h3 className={styles.h3}>Tab 2</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat,
									officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur.
								</p>
							</div>
						</Tab>
						<Tab className={styles["tab"]} animationDuration={300} tabId={2} classes={{ ...styles }}>
							<div className={styles.tab}>
								<h3 className={styles.h3}>Tab 3</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat,
									officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur.
								</p>
							</div>
						</Tab>
					</div>
				}
			/>
		</main>
	);
};

export default Page;
