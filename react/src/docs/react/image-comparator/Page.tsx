import React from "react";
import styles from "./Page.module.css";
import image1 from "../../../../../assets/img/slide0.png";
import image2 from "../../../../../assets/img/slide1.png";
import image3 from "../../../../../assets/img/slide2.png";
import image4 from "../../../../../assets/img/slide3.png";
import { ImageComparator } from "../../../components/image-comparator/ImageComparator";
import { ImageComparatorItem } from "../../../components/image-comparator/ImageComparatorItem";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Image Comparator</h1>
			<p>
				The purpose of the image comparator component is to create a visual comparison between two images. The current implementation
				supports comparing an arbitrary amount of images as demonstrated in the widget below. The base requirement to compare images is to
				make images absolute positioned and occupy auto width and height. The component allows users to slide a comparison slider
				horizontally to reveal different portions of the two images. The component is built using. It includes CSS styles for positioning
				and styling the comparison slider. The component dynamically adjusts the width of the images and the position of the slider based on
				user interaction. It also handles mouse and pointer events for smooth sliding functionality. The component only gives basic styling,
				such as a relative wrapper element and required interactions. Other than that, you can achieve full customization only through
				experimenting with CSS properties.
			</p>
			<ImageComparator className={styles.comparator}>
				<ImageComparatorItem>
					<img src={image1} alt="Example Image" className={styles["comparator-element__image"]} />
				</ImageComparatorItem>
				<ImageComparatorItem>
					<img src={image2} alt="Example Image" className={styles["comparator-element__image"]} />
				</ImageComparatorItem>
				<ImageComparatorItem>
					<img src={image3} alt="Example Image" className={styles["comparator-element__image"]} />
				</ImageComparatorItem>
				<ImageComparatorItem>
					<img src={image4} alt="Example Image" className={styles["comparator-element__image"]} />
				</ImageComparatorItem>
			</ImageComparator>
			<p>
				This component requires you use special carousel item components as children to automatically generate context ref and all the
				element data. In order to get default styling and configuration out of the box, it is suggested you use the specific to this
				component ImageComparatorItem that comes in with pre-bundled styles to work correctly.
			</p>
		</main>
	);
};

export default Page;
