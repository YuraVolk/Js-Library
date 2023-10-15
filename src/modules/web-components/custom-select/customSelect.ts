import { LitElement, PropertyValueMap, css, html } from "lit";
import {
  customElement,
  property,
  state,
  queryAssignedElements,
} from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

declare global {
  interface HTMLElementTagNameMap {
    "custom-select-component": CustomSelectComponent;
  }
}

export interface SelectInternalItem {
  innerContent: string;
  value: string;
  isSelected: boolean;
  isDisabled: boolean;
}

@customElement("custom-select-component")
export class CustomSelectComponent extends LitElement {
  @queryAssignedElements({ flatten: true })
  _selectElement!: HTMLSelectElement[];

  @state()
  _internalElements: SelectInternalItem[] = [];
  @state()
  _isOpened = false;

  private boundDocumentClickListener!: (event: Event) => unknown;

  protected onItemSelected(element: SelectInternalItem, index: number) {
    this._isOpened = false;
    if (element.isDisabled) return;
    this._selectElement.forEach((select) => (select.selectedIndex = index));
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.boundDocumentClickListener = (event) => {
      if (!event.composedPath().some(e => e instanceof CustomSelectComponent)) this._isOpened = false;
    };
    document.addEventListener("click", this.boundDocumentClickListener);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("click", this.boundDocumentClickListener);
  }

  protected firstUpdated(): void {
    for (const select of this._selectElement) {
      this._internalElements = Array.from(select.children).map(
        (element, i) => ({
          innerContent: element.textContent ?? "",
          value: element.getAttribute("value") ?? "",
          isSelected: select.selectedIndex === i,
          isDisabled: Boolean(element.getAttribute("disabled")),
        })
      );
    }
  }

  render() {
    return html`
      <slot
        style=${styleMap({
          display: this._internalElements.length ? "none" : "revert",
        })}
      ></slot>
      ${this._internalElements.length
        ? html`<div
            class="custom-select-current"
            @click="${() => {
              this._isOpened = !this._isOpened;
            }}"
          >
            ${this._internalElements.find((item) => item.isSelected)
              ?.innerContent ?? ""}
          </div>`
        : ""}
      ${this._internalElements.length && this._isOpened
        ? html`<ul class="custom-select-options">
            ${this._internalElements.map((element, i) => {
              return html`
                <li
                  class="custom-select-option"
                  ${element.isDisabled ? "disabled" : ""}
                  ${element.isSelected ? "selected" : ""}
                  value="${element.value}"
                  @click="${() => { this.onItemSelected(element, i) }}"
                >
                  ${element.innerContent}
                </li>
              `;
            })}
          </ul>`
        : ""}
    `;
  }
}
