import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { IntervalController } from "../../interfaces/hooks/intervalController";
import { CountdownConfiguration, defaultTimeUnits, reduceTimeUnits } from "shared/component/countdown";

export class CountdownComponent extends LitElement implements CountdownConfiguration {
	@property({ type: Date })
	date = new Date("May 6, 2085 11:00:00");
	@property({ type: Array })
	units = reduceTimeUnits(defaultTimeUnits);
	@state()
	_text = "";

	protected intervalController = new IntervalController(this, () => {
		this.renderTexts();
	}, 1000);

	protected firstUpdated(): void {
		this.renderTexts();
	}

	renderTexts() {
		let timeString = "",
			distance = this.date.getTime() - new Date().getTime();
		this.units.forEach(({ timeFactor, name }) => {
			const value = Math.floor(distance / timeFactor);
			timeString += value <= 0 ? "" : `${String(value)} ${String(value).slice(-1) === "1" ? name : name + "s"} `;
			distance %= timeFactor;
		});

		this._text = timeString ? timeString.trim() : "0 seconds";
	}

	render() {
		return html`<span>${this._text}</span>`;
	}
}
