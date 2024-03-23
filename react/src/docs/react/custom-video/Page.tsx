import React from "react";
import styles from "./Page.module.css";
import videoLink from "../../../../../assets/video/sample-mp4-file-small.mp4";
import { CustomVideo } from "../../../components/custom-video/CustomVideo";

const Page = () => {
	return (
		<main className="main">
			<h1 className="heading">Custom Video</h1>
			<p>
				Making your own custom video component is an important and required foundation if you want to extend default browser's video
				settings with your own settings and give the design you like. This approach requires a custom React-implemented behavior, and as
				such this component provides the basics to work with, as it automatically configures the vital video settings, like pausing and
				playing, muting, changing volume, resetting video, changing current video time, and overall smooth animations.
			</p>
			<p>
				This component is configurable through inheriting from it and adding functionality atop, here is a default configuration example,
				with only width and height set through CSS modules for the wrapping div:
			</p>
			<div className={styles["video-wrap"]}>
				<CustomVideo>
					<source src={videoLink} type="video/mp4" />
				</CustomVideo>
			</div>
		</main>
	);
};

export default Page;
