export interface CustomVideoState {
    isMuted: boolean;
    previousVideoVolume?: number;
    isVideoPlaying: boolean;
    currentTimeInSeconds: number;
    duration?: number;
    current?: number;
    volume: number;
    currentTimeLabel: string;
}

interface UpdateCurrentAction {
    type: "updateCurrent";
    videoTime: number;
}

interface StopVideoAction {
    type: "stopVideo";
}

interface StartVideoAction {
    type: "startVideo";
}

interface ResetVideoAction {
    type: "resetVideo";
}

interface ToggleMuteAction {
    type: "toggleMute";
}

interface SetVideoVolumeAction {
    type: "setVideoVolume";
    volume: number;
}

interface UpdateVideoStateAction {
    type: "setVideoState";
    duration: number;
    current: number;
    volume: number;
}

export type CustomVideoStateAction =
    UpdateCurrentAction
    | StopVideoAction
    | StartVideoAction
    | ResetVideoAction
    | ToggleMuteAction
    | SetVideoVolumeAction
    | UpdateVideoStateAction;
