import { LitElement, ReactiveController } from "lit";
import { CarouselConfigurationAutoplayOptions, CarouselDirection } from "shared/interfaces/carousel";

export interface AutoplayControllerProps {
	autoplay?: CarouselConfigurationAutoplayOptions;
	nextSlide(): void;
	previousSlide(): void;
}

export class AutoplayController implements ReactiveController {
	private timeout?: number;
	private repetitionsLeft: number;

	constructor(
		private readonly host: LitElement,
		private readonly options: AutoplayControllerProps
	) {
		this.repetitionsLeft = options.autoplay?.totalRepetitions ?? 0;
		host.addController(this);
	}

	abortTimeout() {
		window.clearTimeout(this.timeout);
		if (!this.repetitionsLeft) {
			return;
		}

		this.timeout = window.setTimeout(() => {
			if (this.options.autoplay?.direction === CarouselDirection.BACKWARDS) {
				this.options.previousSlide();
			} else if (this.options.autoplay?.direction === CarouselDirection.FORWARDS) {
				this.options.nextSlide();
			}

			this.repetitionsLeft--;
			this.host.requestUpdate();
			this.abortTimeout();
		}, this.options.autoplay?.delay);
	}

	hostConnected(): void {
        this.abortTimeout();
    }

    hostDisconnected(): void {
        window.clearTimeout(this.timeout);
    }
}
