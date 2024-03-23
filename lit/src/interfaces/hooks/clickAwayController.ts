import { LitElement, ReactiveController } from "lit";

export class ClickAwayController implements ReactiveController {
	private readonly boundListener: EventListener;

	constructor(host: LitElement, callback: () => void) {
		host.addController(this);
		this.boundListener = (event) => {
			if (!event.composedPath().some((e) => e === host)) callback();
		};
	}

	hostConnected(): void {
		document.addEventListener("click", this.boundListener);
	}

	hostDisconnected(): void {
		document.removeEventListener("click", this.boundListener);
	}
}
