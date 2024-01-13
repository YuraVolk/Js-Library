import React from "react";
import image1 from "../../../../../assets/img/slide0.png";
import image2 from "../../../../../assets/img/slide1.png";
import image3 from "../../../../../assets/img/slide2.png";
import image4 from "../../../../../assets/img/slide3.png";
import image5 from "../../../../../assets/img/slide4.png";
import image6 from "../../../../../assets/img/slide5.png";
import styles from "./Page.module.css";
import { MenuCarousel } from "../../../components/menu-carousel/MenuCarousel";
import { CarouselItem } from "../../../interfaces/generic/CarouselItem";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Menu Carousel</h1>
			<p>
				The menu carousel component represents a 3D carousel in which items are rotated around a circular area that can be defined and whose
				X/Y dimensions can be changed by user. The carousel accepts a variety of configuration options:
			</p>
			<ul>
				<li>xPos, automatically re-calculated on resize by default.</li>
				<li>yPos, defines Y size of carousel.</li>
				<li>xRadius, defines inner circle X radius.</li>
				<li>yRadius, defines inner circle Y radius.</li>
				<li>farScale, defines the scale between elements, allowing farther elements to appear smaller.</li>
				<li>speed, defines the animation speed.</li>
			</ul>
			<p>
				The carousel accepts special carousel item components to keep track of all the elements, and automatically detect width and height.
				Here's an example of the carousel with all default settings except far scale being set to 0.8:
			</p>
			<MenuCarousel className={styles["carousel"]} farScale={0.8}>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image1} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image2} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image3} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image4} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image5} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image6} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image1} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image2} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image3} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image4} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image5} alt="Example Image" />
				</CarouselItem>
				<CarouselItem className={styles["carousel-item"]}>
					<img className={styles.img} src={image6} alt="Example Image" />
				</CarouselItem>
			</MenuCarousel>
		</main>
	);
};

export default Page;
