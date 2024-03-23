import { ToastConfiguration } from "shared/component/toast";

export interface ToastLitConfiguration extends ToastConfiguration {
	animationDelay: number;
	inactiveClass: string;
	closeOnButtonClick: boolean;
}
