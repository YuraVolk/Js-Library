import React, { useState } from "react";
import { MarqueeCarousel } from "../../../components/marquee-carousel/MarqueeCarousel";

const Page = () => {
	const [isPaused, setPaused] = useState(false);

	return (
		<main className="main">
			<h1 className="heading">Marquee Carousel</h1>
			<p>
				The Marquee Carousel script is a simple script that sets up an endless marquee scrolling animation, duplicates elements and runs a
				keyframes based animation, allowing it to fit any amount of elements, with variable width with just simple CSS and minimal JS logic.
				The Marquee Carousel script accepts repetitions to specify how many times to repeat the element, duration of animation as string,
				isPaused and isReversed booleans to allow to set up behaviors. Here is a simple example of this component:
			</p>
			<MarqueeCarousel
				repetitions={3}
				renderItem={() => (
					<>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua.&nbsp;
					</>
				)}
			/>
			<p>Here is an example with reversed direction:</p>
			<MarqueeCarousel
				repetitions={3}
				isReversed
				renderItem={() => (
					<>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua.&nbsp;
					</>
				)}
			/>
			<p>And here is an example with pause on hover:</p>
			<MarqueeCarousel
				repetitions={3}
				isPaused={isPaused}
				onMouseOver={() => {
					setPaused(true);
				}}
				onMouseLeave={() => {
					setPaused(false);
				}}
				renderItem={() => (
					<>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua.&nbsp;
					</>
				)}
			/>
		</main>
	);
};

export default Page;
