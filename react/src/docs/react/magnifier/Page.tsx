import React, { useRef } from "react";
import image from "../../../../../assets/img/slide0.png";
import { Magnifier } from "../../../components/magnifier/Magnifier";
import styles from "./Page.module.css";
import { MagnifierExposedFunctions } from "../../../interfaces/component/magnifier";
import { MagnifierGlass } from "../../../components/magnifier/MagnifierGlass";

const Page = () => {
	const magnifier = useRef<MagnifierExposedFunctions>(null);

	return (
		<main className="main">
			<h1 className="heading">Magnifier</h1>
			<p>
				The image magnifier component is a component that allows users to create an image magnifier effect on their web pages. The main
				configuration is supplied automatically if you're using the correct configuration settings. This component is customizable to the
				point you can control the magnifier glass programmatically without any issues and give any custom styles without any issues, with
				all styling being available through CSS. In order to understand how to customize the component, you need to define two templates for
				two slots: imageChildren prop that contains an image or any content you'd like to zoom, and glassChildren prop that contains
				imported image magnifier glass component. Then, in order to ensure correct behavior you need to pass a callback and make a call to
				image magnifier's component onMouseMove, you would need to persist the reference to magnifier through a React ref, which does expose
				onMouseMove through an imperative handle. After this is set up, you'd need to setup the props for the image magnifier component:
			</p>
			<ul>
				<li>zoomScale: A number that defines the scale of the magnified image. The default value is 2.</li>
				<li>
					imageSource: A string that defines the image URL for the magnifier, a required value for the setup to work correctly. You may give
					this a different value from original image, i.e. image increased in quality.
				</li>
			</ul>
			<p>Here is an example of correctly set up component:</p>
			<Magnifier
				className={styles.magnifier}
				ref={magnifier}
				imageSource={image}
				imageChildren={<img src={image} alt="Example Image" />}
				glassChildren={
					<MagnifierGlass
						className={styles["magnifier-glass"]}
						onGlassMove={(e) => {
							magnifier.current?.onMouseMove(e);
						}}
					/>
				}
			/>
			<p>
				After this default configuration, you're able to fully customize the magnifier glass mouse coordinates, shifts, and you are able to
				give any CSS styles to the components. You should use fallthrough attributes on the image magnifier and image magnifier glass
				components to achieve full styling control.
			</p>
			<p>
				Next, you may see a very similar implementation that is called Zooming Image, with a lot of aspects being shared with this
				implementation. However, there are important algorithmic differences between the two: this implementation is overall less robust and
				works better when magnifying glass does not appear when not hovered. The other implementation provides a fallback effect that shows
				an empty background when near to edge or moving from edge, while this implementation may not give such accurate results for edges.
				This implementation on the other hand is much better for non-rectangular glass shapes, and is overall a perfect implementation for
				statically visible non-rectangular glass.
			</p>
		</main>
	);
};

export default Page;
