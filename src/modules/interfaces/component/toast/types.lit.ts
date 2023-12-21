import { ToastConfiguration } from "./types";

export interface ToastLitConfiguration extends ToastConfiguration {
    animationDelay: number;
    inactiveClass: string;
    closeOnButtonClick: boolean;
}
