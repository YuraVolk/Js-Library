import React from "react";
import { BackfaceCarousel } from "../../../../src/components/backface-carousel/BackfaceCarousel";
import { BackfaceCarouselItem } from "../../../../src/components/backface-carousel/BackfaceCarouselItem";
import image1 from "../../../../../assets/img/slide0.png";
import image2 from "../../../../../assets/img/slide1.png";
import image3 from "../../../../../assets/img/slide2.png";
import image4 from "../../../../../assets/img/slide3.png";
import image5 from "../../../../../assets/img/slide4.png";
import image6 from "../../../../../assets/img/slide5.png";
import styles from "./Page.module.css";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Backface Carousel</h1>
			<p>
				The backface carousel component represents a 3D-style carousel that appears as a 3D shape with its contents being equal-size items.
				Any item can be of any content within the carousel, ranging from simple images to complex HTML structures. The items are inserted
				directly into the carousel as children nodes without any configuration. The carousel exposes methods to be easily controllable, and
				supports both vertical and horizontal placement. The insertion of children is done through the wrapping all images in an
				automatically carousel item component. For usage with this concrete carousel, it is highly recommended you use the predefined
				BackfaceCarouselItem component that gives default styling required for this type of carousel, and give width and height set to 100%
				for all inner items of the backface carousel item components.
			</p>
			<BackfaceCarousel showToggles>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image1} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image2} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image3} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image4} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image5} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image6} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image1} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image2} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image3} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image4} alt="Example Image" />
				</BackfaceCarouselItem>
			</BackfaceCarousel>
			<p>It is also possible to set vertical placement to be the default placement:</p>
			<BackfaceCarousel isVertical>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image1} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image2} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image3} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image4} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image5} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image6} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image1} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image2} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image3} alt="Example Image" />
				</BackfaceCarouselItem>
				<BackfaceCarouselItem>
					<img className={styles.image} src={image4} alt="Example Image" />
				</BackfaceCarouselItem>
			</BackfaceCarousel>
		</main>
	);
};

export default Page;
