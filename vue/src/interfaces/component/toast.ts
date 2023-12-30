import { ToastConfiguration } from "shared/component/toast";

export interface ToastVueConfiguration extends ToastConfiguration {
    isOpen: boolean;
    transitionName: string;
}
