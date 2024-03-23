import React from "react";
import styles from "./Sidebar.module.css";
import links from "../data/sidebar.json";
import { isLocalhostEnvironment, SidebarConfiguration } from "shared/component/sidebar";

const isLocalhost = isLocalhostEnvironment();

const Sidebar = (props: SidebarConfiguration) => {
	return (
		<aside className={styles.navigation}>
			<nav className={styles.wrap}>
				{Object.entries(links).map(([heading, linkList]) => (
					<div className={styles.list} key={heading}>
						<details className={styles["list-item"]} open>
							<summary className={styles.list__heading}>
								<span>{heading}</span>
								<svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em">
									<path d="M15.5 19l-7-7 7-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
								</svg>
							</summary>
							<div className={styles["list-sublist-wrap"]}>
								<ul className={styles["list-sublist"]}>
									{linkList.map((link) => (
										<li
											key={link.name}
											className={`${styles["list-sublist__item"]} ${
												link.name === props.activeLink ? styles["list-sublist__item--active"] : ""
											}`}
										>
											<a className={styles["list-sublist__item-link"]} href={isLocalhost ? link.link.replace(/\.\.\//g, "./") : link.link}>
												{link.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</details>
					</div>
				))}
			</nav>
		</aside>
	);
};

export default Sidebar;
