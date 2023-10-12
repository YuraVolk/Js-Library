import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("autocomplete-list-component")
export class AutocompleteListComponent extends LitElement {
  @property({ type: Array, converter: {
    fromAttribute: (value): string[] => {
      if (value === null) return [];
      return value.split(",").map(e => e.trim());
    },
    toAttribute: (value: string[]): string => {
      return value.join(",");
    }
  } })
  options: string[] = [];

  @state()
  _isListOpened = false;
  @state()
  _filteredOptions: string[] = [];

  private boundInputEventListener!: EventListener;

  protected onInputHandler(target: EventTarget) {
    if (!(target instanceof HTMLInputElement) || !target.value) {
      this._isListOpened = false;
      return;
    }
    const value = target.value.toLowerCase().trim();
    const newFilteredOptions = [];
    for (const option of this.options) {
      const lowerOption = option.toLowerCase();
      console.log(lowerOption.startsWith(value));
      if (lowerOption === value || !lowerOption.startsWith(value)) continue;
      newFilteredOptions.push(option);
    }

    if (newFilteredOptions.length) {
      this._isListOpened = true;
      this._filteredOptions = newFilteredOptions;
    }
  }

  protected setInputValue(newValue: string) {
    const input = this.querySelector<HTMLInputElement>("input");
    if (input) {
      input.value = newValue;
      this._isListOpened = false;
      this._filteredOptions = [];
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.boundInputEventListener = ({ target }) => { if (target) this.onInputHandler(target); };
    console.log(this.querySelector("input"));
    this.querySelector<HTMLInputElement>("input")?.addEventListener("input", this.boundInputEventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.querySelector("input")?.removeEventListener("input", this.boundInputEventListener);
  }

  render() {
    return html`
      <slot></slot>
      ${this._isListOpened && this._filteredOptions.length ? html`<ul class="autocomplete-items">
        ${this._filteredOptions.map(option => {
          return html`<li class="autocomplete-item" @click="${() => { this.setInputValue(option); }}">${option}</li>`;
        })}
      </ul>` : ""}
    `;
  }
}
