import { LitElement, html } from "lit";
import {
  customElement,
  property,
  queryAssignedElements
} from "lit/decorators.js";

declare global {
  interface HTMLElementTagNameMap {
    "countdown-component": CountdownComponent;
  }
}

export interface TimeUnit {
  name: string;
  timeFactor: number;
}

@customElement("countdown-component")
export class CountdownComponent extends LitElement {
  static reduceTimeUnits(units: TimeUnit[]) {
    return units
      .map((unit, i) => ({ ...unit, timeFactor: units.slice(0, i + 1).reduce((factor, unit) => factor * unit.timeFactor, 1) }))
      .reverse();
  }

  private static units: TimeUnit[] = CountdownComponent.reduceTimeUnits([
    { name: "second", timeFactor: 1000 },
    { name: "minute", timeFactor: 60 },
    { name: "hour", timeFactor: 60 },
    { name: "day", timeFactor: 24 },
    { name: "year", timeFactor: 356 }
  ]);

  @property({ converter: {
    fromAttribute: (string) => new Date(string ?? 'May 6, 2085 11:00:00'),
    toAttribute: (date: Date) => date.toString()
  } })
  date = new Date('May 6, 2085 11:00:00');

  @queryAssignedElements({ selector: '[data-countdown]', flatten: true })
  _countdownItems!: HTMLElement[];

  private intervalId = 0;

  protected firstUpdated(): void {
    this.renderTexts();
  }

  renderTexts(units = CountdownComponent.units) {
    let timeString = "", distance = this.date.getTime() - new Date().getTime();
    units.forEach(({ timeFactor, name }) => {
      const value = Math.floor(distance / timeFactor);
      timeString += value <= 0 ? '' : `${value} ${String(value).slice(-1) === '1' ? name : name + 's'} `;
      distance %= timeFactor;
    });
    timeString = timeString ? timeString.trim() : "0 seconds";

    for (const element of this._countdownItems) element.textContent = timeString;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.intervalId = window.setInterval(() => this.renderTexts(), 1000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.clearInterval(this.intervalId);
  }

  render() {
    return html`<slot></slot>`;
  }
}
