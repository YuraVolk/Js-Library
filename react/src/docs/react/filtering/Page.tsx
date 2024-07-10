import React from "react";
import { shuffle } from "shared/utils/array";
import styles from "./Page.module.css";
import { FilteringWrapper } from "../../../components/filtering/FilteringWrapper";
import { motion } from "framer-motion";
import { FilteringButton } from "../../../components/filtering/FilteringButton";

const filters = ["First Category", "Second Category", "Third Category", "Fourth Category"];
const items = shuffle(
	Array.from({ length: 16 }, (_, i) => ({
		value: (() => (
			<motion.li
				className={styles.item}
				key={i}
				layout
				animate={{ opacity: 1, height: 240, translateY: 0 }}
				initial={{ opacity: 0, height: 0, translateY: 0 }}
				exit={{ opacity: 0, height: 0, translateY: -10 }}
				transition={{
					scaleY: { duration: 0 }
				}}
			>
				<div className={styles["item-inner"]}>Item {i + 1}</div>
			</motion.li>
		)) satisfies (itemsLength: number, i: number) => JSX.Element,
		filter: filters[i % filters.length]
	}))
);

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Filtering</h1>
			<p>
				Animated filtering component is a component that allows you to automatically obtain a list of filtered items for simpler cases,
				allows you to change the active filter through button or change items through the items prop for the more complicated cases. The key
				feature is that it also wraps a Framer Motion motion.ul and AnimatePresence components that allow you to animate layout transforms.
				This allows you to easily create stunning animations with use of Framer Motion and minimal effort.
			</p>
			<FilteringWrapper className={styles["items-list"]} items={items} duration={0.3}>
				<div className={styles.buttons}>
					<FilteringButton className={styles.button}>All</FilteringButton>
					{filters.map((filter) => (
						<FilteringButton key={filter} className={styles.button} filter={filter}>
							{filter}
						</FilteringButton>
					))}
				</div>
			</FilteringWrapper>
		</main>
	);
};

export default Page;
