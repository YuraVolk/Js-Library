import React, { useCallback, useMemo, useReducer, useRef } from "react";
import { VideoConfigurationProps, toMinutesSeconds } from "shared/component/customVideo";
import styles from "./CustomVideo.module.css";
import { WithChildren } from "../../utils/utils";
import { RangeInput } from "../range-input/RangeInput";
import { CustomVideoState, CustomVideoStateAction } from "react/src/interfaces/component/customVideo";
import playButton from "../../../../assets/img/play.png";
import pauseButton from "../../../../assets/img/pause.png";
import resetButton from "../../../../assets/img/reset.png";
import muteButton from "../../../../assets/img/volume.png";

function customVideoStateReducer(state: CustomVideoState, action: CustomVideoStateAction): CustomVideoState {
	switch (action.type) {
		case "setVideoVolume":
			return {
				...state,
				volume: action.volume
			};
		case "startVideo":
			return {
				...state,
				isVideoPlaying: true
			};
		case "stopVideo":
			return {
				...state,
				isVideoPlaying: false
			};
        case "resetVideo": {
            return {
                ...state,
                isVideoPlaying: false,
                current: 0,
                currentTimeLabel: toMinutesSeconds(0)
            };
        }
		case "toggleMute":
			if (state.isMuted && state.previousVideoVolume !== undefined) {
				return {
					...state,
					isMuted: false,
					volume: state.previousVideoVolume
				};
			} else {
				return {
					...state,
					previousVideoVolume: state.volume,
					volume: 0,
					isMuted: true
				};
			}
		case "updateCurrent":
			return {
				...state,
				currentTimeLabel: toMinutesSeconds(action.videoTime),
				current: action.videoTime
			};
		case "setVideoState":
			return {
				...state,
				duration: action.duration,
				current: action.current,
				volume: action.volume,
				currentTimeLabel: toMinutesSeconds(action.current)
			};
	}
}

export const CustomVideo = (props: WithChildren<VideoConfigurationProps>) => {
	const video = useRef<HTMLVideoElement>(null);
	const videoPassedProps = useMemo(() => {
		const configuration: Partial<typeof props> = { ...props };
		delete configuration.muted;
		delete configuration.autoplay;
		delete configuration.children;
		return configuration;
	}, [props]);

	const [videoState, dispatch] = useReducer(customVideoStateReducer, {
		isMuted: props.muted ?? false,
		isVideoPlaying: props.autoplay ?? false,
		currentTimeInSeconds: 0,
		volume: 1,
		currentTimeLabel: toMinutesSeconds(0)
	});

	const updateTrackInfo = useCallback(() => {
		dispatch({
			type: "updateCurrent",
			videoTime: video.current?.currentTime ?? 0
		});
	}, [video]);

	const setVolume = useCallback(
		(volume: number) => {
			if (!video.current) return;
			video.current.volume = volume;

			dispatch({
				type: "setVideoVolume",
				volume
			});
		},
		[video]
	);

	const setVideoSecond = useCallback(
		(seconds: number) => {
			if (!video.current) return;
			video.current.currentTime = seconds;
		},
		[video]
	);

	const startVideo = useCallback(() => {
        if (!video.current) return;
        video.current.play().catch(e => { console.debug(e); });
        dispatch({ type: "startVideo" });
    }, [video]);

	const stopVideo = useCallback(() => {
        video.current?.pause();
        dispatch({ type: "stopVideo" });
    }, [video]);

	const resetVideo = useCallback(() => {
        if (!video.current) return;
        video.current.currentTime = 0;
        video.current.pause();
        dispatch({ type: "resetVideo" });
    }, [video]);

	const muteVideo = useCallback(() => {
        if (!video.current) return;
        dispatch({ type: "toggleMute" });

        if (videoState.isMuted && videoState.previousVideoVolume !== undefined) {
            video.current.volume = videoState.previousVideoVolume;
        } else video.current.volume = 0;
    }, [video, videoState.isMuted, videoState.previousVideoVolume]);

	const setupVideo = useCallback(() => {
		if (!video.current || (!props.children && !props.src)) return;
		dispatch({
			type: "setVideoState",
			duration: video.current.duration,
			current: video.current.currentTime,
			volume: video.current.volume
		});
	}, [props.children, props.src, video]);

	return (
		<div className={styles.wrap}>
			<div className={styles.video}>
				<video ref={video} {...videoPassedProps} onTimeUpdate={updateTrackInfo} onLoadedMetadata={setupVideo} onEnded={stopVideo}>
					{props.children}
				</video>
			</div>
			<div className={styles.controls}>
				<RangeInput
					className={styles["volume-range-input"]}
					step={0.01}
					maximum={1}
					hideValue
					defaultValue={videoState.volume}
					onUpdate={setVolume}
				/>
				<RangeInput
					className={styles["time-range-input"]}
					step={0.01}
					maximum={videoState.duration}
					label={videoState.currentTimeLabel}
					hideValue
					allSameLine
					onUpdate={setVideoSecond}
					defaultValue={videoState.current}
				/>
				<ul className={styles["controls-buttons"]}>
					<li
						className={styles["control-button"]}
						style={{ display: videoState.isVideoPlaying ? "none" : "block" }}
						onClick={startVideo}
					>
                        <button className={styles["controls-button__clickable-button"]}>
                            <img alt="Play" src={playButton} className={styles["controls-button__image"]} />
                        </button>
                    </li>
                    <li
						className={styles["control-button"]}
						style={{ display: videoState.isVideoPlaying ? "block" : "none" }}
						onClick={stopVideo}
					>
                        <button className={styles["controls-button__clickable-button"]}>
                            <img alt="Pause" src={pauseButton} className={styles["controls-button__image"]} />
                        </button>
                    </li>
                    <li className={styles["control-button"]} onClick={resetVideo}>
                        <button className={styles["controls-button__clickable-button"]}>
                            <img alt="Reset" src={resetButton} className={styles["controls-button__image"]} />
                        </button>
                    </li>
                    <li className={styles["control-button"]} onClick={muteVideo}>
                        <button className={styles["controls-button__clickable-button"]}>
                            <img alt="Mute" src={muteButton} className={styles["controls-button__image"]} />
                        </button>
                    </li>
				</ul>
			</div>
		</div>
	);
};
