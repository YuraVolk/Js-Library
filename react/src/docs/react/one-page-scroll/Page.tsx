import React from "react";
import { OnePageScroll } from "../../../components/one-page-scroll/OnePageScroll";
import styles from "./Page.module.css";
import { OnePageScrollItem } from "../../../components/one-page-scroll/OnePageScrollItem";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">One Page Scroll</h1>
			<p>
				The one page scroll component provides a smooth scrolling experience for a single-page application. It allows users to navigate
				through different sections of the page by scrolling vertically or horizontally. Its additional plus is that you do not need to
				depend on custom animations, specific CSS styles. The internal formulas automatically adapt to most common scenarios.
			</p>
			<ul>
				<li>
					isVertical: A boolean property that determines whether the scrolling should be horizontal or vertical. By default, it is set to
					true.
				</li>
				<li>
					duration: A number property that specifies the duration of the smooth scrolling animation in milliseconds. The default value is
					500.
				</li>
				<li>
					increment: A number property that determines the increment value for each step of the smooth scrolling animation. The default
					value is 6.
				</li>
				<li>
					noScrollbar: A boolean property that controls whether the scrollbars should be hidden (true) or visible (false). Enabled by
					default.
				</li>
			</ul>
			<OnePageScroll className={styles["one-page-scroll"]}>
				<OnePageScrollItem className={styles["one-page-scroll-slide"]}>
					<p className={styles["one-page-scroll-slide__heading"]}>First slide. Scroll down...</p>
				</OnePageScrollItem>
				<OnePageScrollItem className={styles["one-page-scroll-slide"]}>
					<p className={styles["one-page-scroll-slide__heading"]}>Second slide</p>
				</OnePageScrollItem>
				<OnePageScrollItem className={styles["one-page-scroll-slide"]}>
					<p className={styles["one-page-scroll-slide__heading"]}>Third slide.</p>
				</OnePageScrollItem>
				<OnePageScrollItem className={styles["one-page-scroll-slide"]}>
					<p className={styles["one-page-scroll-slide__heading"]}>Fourth slide.</p>
				</OnePageScrollItem>
			</OnePageScroll>
			<p>Here is an example of horizontal one-page scroll:</p>
			<OnePageScroll className={styles["one-page-scroll"]} isVertical={false} showArrows showToggles allowSwitchingOrientation>
				<OnePageScrollItem className={styles["one-page-scroll-slide"]}>
					<p className={styles["one-page-scroll-slide__heading"]}>First slide. Scroll down...</p>
				</OnePageScrollItem>
				<OnePageScrollItem className={styles["one-page-scroll-slide"]}>
					<p className={styles["one-page-scroll-slide__heading"]}>Second slide</p>
				</OnePageScrollItem>
				<OnePageScrollItem className={styles["one-page-scroll-slide"]}>
					<p className={styles["one-page-scroll-slide__heading"]}>Third slide.</p>
				</OnePageScrollItem>
				<OnePageScrollItem className={styles["one-page-scroll-slide"]}>
					<p className={styles["one-page-scroll-slide__heading"]}>Fourth slide.</p>
				</OnePageScrollItem>
			</OnePageScroll>
			<p>
				In order to get some default styling, it is highly recommended you use the local provided one page scroll item component along with
				the one page scroll component in order to get the one page scroll work right away with minimum configuration.
			</p>
		</main>
	);
};

export default Page;
