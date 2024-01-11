import React from "react";
import image1 from "../../../../../assets/img/slide0.png";
import image2 from "../../../../../assets/img/slide1.png";
import image3 from "../../../../../assets/img/slide2.png";
import image4 from "../../../../../assets/img/slide3.png";
import image5 from "../../../../../assets/img/slide4.png";
import image6 from "../../../../../assets/img/slide5.png";
import styles from "./Page.module.css";
import { GalleryCarousel } from "../../../components/gallery-carousel/GalleryCarousel";
import { CarouselItem } from "../../../interfaces/generic/CarouselItem";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Gallery Carousel</h1>
			<p>
				The gallery carousel component represents a 2D carousel that allows items to be cycled through the visible area, showing one item at
				a time by default. This is a classic and the most common carousel type, which is commonly seen on websites, and has toggles and
				arrows to navigate in the carousel.
			</p>
			<ul>
				<li>
					smoothDiametralTransition: Determines whether the transition between the last item and the first item is smooth. By default, this
					property is set to true.
				</li>
				<li>current: Specifies the index of the current item being displayed in the carousel.</li>
				<li>frameGap: Defines the gap between each item in the carousel.</li>
				<li>animationDuration: Sets the duration of the animation when transitioning between items.</li>
				<li>showArrows: Determines whether the arrows for navigating to the previous or next item are displayed. True by default.</li>
				<li>showToggles: Specifies whether the toggles for switching between items are shown. True by default.</li>
				<li>className: Specifies class name. optional.</li>
				<li>carouselItems: An array of functions used instead of children prop.</li>
			</ul>
			<p>Here is a carousel with all default options:</p>
			<GalleryCarousel
				className={styles["gallery-wrap"]}
				carouselItems={[
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image1} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image2} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image3} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image4} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image5} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image6} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image1} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image2} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image3} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image4} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image5} alt="Example Image" />
						</CarouselItem>
					),
					() => (
						<CarouselItem className={styles["gallery-item"]}>
							<img src={image6} alt="Example Image" />
						</CarouselItem>
					)
				]}
			/>
			<p>
				In order for the carousel to track amount of items correctly and as such work correctly it must use carousel item components to
				automatically through context track all the element information, as such the only valid props children are carousel item components.
			</p>
		</main>
	);
};

export default Page;
