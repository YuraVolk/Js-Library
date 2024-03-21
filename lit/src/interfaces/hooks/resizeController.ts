import { ReactiveController, ReactiveControllerHost } from "lit";

export class ResizeController implements ReactiveController {
	constructor(host: ReactiveControllerHost, readonly callback: () => Promise<void> | void) {
		host.addController(this);
	}

    hostConnected(): void {
        window.addEventListener("resize", this.callback);
    }

    hostDisconnected(): void {
        window.removeEventListener("resize", this.callback);
    }
}
