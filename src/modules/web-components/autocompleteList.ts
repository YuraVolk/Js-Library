import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("autocomplete-list-component")
export class AutocompleteListComponent extends LitElement {
  @property({ type: Array, converter: {
    fromAttribute: (value): string[] => {
      if (value === null) return [];
      return value.split(",");
    },
    toAttribute: (value: string[]): string => {
      return value.join(",");
    }
  } })
  options: string[] = [];

  private boundClickEventListener!: EventListener;
  private boundInputEventListener!: EventListener;

  protected onClickHandler(target: EventTarget) {

  }

  connectedCallback() {
    super.connectedCallback();
    this.boundClickEventListener = ({ target }) => { if (target) this.onClickHandler(target); };
    this.addEventListener("click", this.boundClickEventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.boundClickEventListener);
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
