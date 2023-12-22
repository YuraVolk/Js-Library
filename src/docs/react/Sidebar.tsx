import React from "react";
import styles from "./Sidebar.module.css";
import importedLinks from "../data/sidebar.json";
import { isLocalhostEnvironment, SidebarConfiguration } from "src/modules/interfaces/sidebar";

const isLocalhost = isLocalhostEnvironment();

export const Sidebar = (props: SidebarConfiguration) => {
	return (
		<aside className={styles.navigation}>
			<nav className={styles.wrap}>
				{Object.entries(importedLinks).map(([header, list]) => {
					return (
						<div className={styles.list}>
							<details className={styles["list-item"]} open>
								<summary className={styles.list__heading}>
									<span>{header}</span>
									<svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em">
										<path
											d="M15.5 19l-7-7 7-7"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
										></path>
									</svg>
								</summary>
								<div className={styles["list-sublist-wrap"]}>
									<ul className={styles["list-sublist"]}>
										{list.map((link) => {
											return (
												<li
													className={`${styles["list-sublist__item"]} ${
														link.name === props.activeLink ? styles["list-sublist__item--active"] : ""
													}`}
												>
													<a
														className={styles["list-sublist__item-link"]}
														href={isLocalhost ? link.link.replace(/\.\.\//g, "./") : link.link}
													>
														{link.name}
													</a>
												</li>
											);
										})}
									</ul>
								</div>
							</details>
						</div>
					);
				})}
			</nav>
		</aside>
	);
};
