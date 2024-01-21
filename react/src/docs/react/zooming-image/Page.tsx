import React, { CSSProperties, useRef } from "react";
import styles from "./Page.module.css";
import { MagnifiersExposedFunctions } from "../../../interfaces/generic/magnifiers";
import { ZoomingImage } from "../../../components/zooming-image/ZoomingImage";
import image1 from "../../../../../assets/img/slide0.png";
import { ZoomingImageGlass } from "../../../components/zooming-image/ZoomingImageGlass";

interface ZoomingImageDeclaredProperties extends CSSProperties {
	"--zoomingImageUrl": string;
}

const Page = () => {
	const zoomingImage = useRef<MagnifiersExposedFunctions>(null);

	const stylesObject: ZoomingImageDeclaredProperties = {
		"--zoomingImageUrl": `url("${image1}")`
	};
	return (
		<main className="main" style={stylesObject}>
			<h1 className="heading">Zooming Image</h1>
			<p>
				The zooming image component is a component that allows users to create an image magnifier effect on their web pages. The main
				configuration is done automatically, and requires only two children to be passed: one prop for image (imageChildren) and one prop
				for glass (glassChildren), representing the zooming glass. This implementation is overall more robust and works best with using CSS
				transformations, and as such works better for rectangular shapes and worse for non-rectangular glasses, better for showing the zoom
				on hover on image via CSS, and much worse on without it. In general these are two important differences you should understand when
				thinking about zooming image vs magnifier components. This component accepts the following props:
			</p>
			<ul>
				<li>
					moveRatio: A number that defines the scaling factor of moving the glass, and which position to reference by shift, only affects
					background. Defaults to 0.15.
				</li>
				<li>backgroundShift: Shifts the background to the specified percentage number to top left, defaults to 9.</li>
				<li>positionShift: Shifts the x, y coordinates of the glass to top left, defaults to 34.</li>
			</ul>
			<p>Here is a basic usage of the component with CSS opacity animation:</p>
			<ZoomingImage
				className={styles["zoom-wrap"]}
				ref={zoomingImage}
				imageChildren={<img className={styles["zoom-image"]} src={image1} alt="Example Image" />}
				glassChildren={
					<ZoomingImageGlass
						className={styles["zoom-glass"]}
						onGlassMove={(e) => {
							zoomingImage.current?.onMouseMove(e);
						}}
					/>
				}
			/>
		</main>
	);
};

export default Page;
