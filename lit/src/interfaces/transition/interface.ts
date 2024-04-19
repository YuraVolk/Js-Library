import { TransitionState } from "./enum";

export interface TransitionConfiguration {
    isActive: boolean;
    duration: number;
    classNames: Record<TransitionState, string>;
}

export const defaultClassNames = () => ({
    [TransitionState.ENTERING]: "enter-active",
    [TransitionState.EXITING]: "leave-active",
    [TransitionState.ENTERED]: "enter",
    [TransitionState.EXITED]: "leave"
});
