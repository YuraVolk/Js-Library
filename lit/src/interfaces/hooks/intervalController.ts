import { ReactiveController, ReactiveControllerHost } from "lit";

export class IntervalController implements ReactiveController {
	private _intervalId?: number;

	constructor(host: ReactiveControllerHost, readonly callback: () => void, readonly timeout: number) {
		host.addController(this);
	}

	hostConnected(): void {
		this._intervalId = window.setInterval(this.callback, this.timeout);
	}

    hostDisconnected(): void {
        this.abortInterval();
    }

    abortInterval() {
        window.clearInterval(this._intervalId);
        this._intervalId = undefined;
    }

    restartInterval() {
        this._intervalId = window.setInterval(this.callback, this.timeout);
    }
}
