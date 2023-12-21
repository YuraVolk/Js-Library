import { ToastConfiguration } from "./types";

export interface ToastVueConfiguration extends ToastConfiguration {
    isOpen: boolean;
    transitionName: string;
}
