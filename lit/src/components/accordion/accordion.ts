import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { assertNonUndefined } from "shared/utils/utils";
import { AccordionListConfiguration } from "shared/component/accordion";

interface AccordionHTMLCollection extends HTMLCollection {
  [index: number]: HTMLElement;
  readonly length: 2;
}

interface AccordionSection extends HTMLLIElement {
  children: AccordionHTMLCollection;
}

export class AccordionComponent extends LitElement implements AccordionListConfiguration {
  static styles = css`
    .accordions {
      margin: 0;
      padding-left: 0;
      list-style-type: none;
    }

    .accordion {
      width: 100%;
      overflow: hidden;
      background-color: #000000;
      border-radius: .4rem;
      -webkit-transition: max-height 0.4s linear;
      transition: max-height 0.4s linear;
    }

    .accordion:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    .accordion__content {
      color: #fff;
      font-size: 15px;
      padding: 2rem;
      -webkit-transition: max-height 0.2s linear forwards;
      transition: max-height 0.2s linear forwards;
    }

    .accordion__heading {
      position: relative;
      z-index: 1;
      display: block;
      font-size: 1.6rem;
      color: rgba(255,255,255,.8);
      text-decoration: none;
      background-color: #000000;
      padding: 0.25rem 1rem;
      text-transform: uppercase;
      font-family: Segoe UI;
    }
  `;

  @state()
  private _elements: [HTMLElement, HTMLElement][] = [];
  @state()
  private _headerHeights: number[] = [];
  @state()
  private _widths: number[] = [];

  @property({ type: Array, converter: {
    fromAttribute: (value): boolean[] => {
      if (value === null) return [];
      const result = value.split(",").map(v => v === "true" || v === "1");
      return result;
    },
    toAttribute: (value: boolean[]): string => {
      return value.join(",");
    }
  } })
  opened: boolean[] = [];
  @property({ type: Boolean })
  multiple = false;

  connectedCallback() {
    super.connectedCallback();
    this._elements.length = this._widths.length = 0;
    this._elements = Array.from(this.children)
      .filter<AccordionSection>(
        (element): element is AccordionSection =>
          element.nodeName === "LI" && element.children.length === 2
      )
      .map((e) => [e.children[0], e.children[1]]);
    this.opened = this.opened.length === this._elements.length ? [...this.opened] : this._elements.map(() => false);
  }

  disconnectedCallback() {
    this._elements.length = this._widths.length = 0;
    super.disconnectedCallback();
  }

  protected firstUpdated() {
    this.updateWidths();
    this.opened = this.opened.length === this._elements.length ? [...this.opened] : this._elements.map(() => false);
  }

  protected updated() {
    this.updateWidths();
  }

  protected updateWidths() {
    this._widths.length = this._headerHeights.length = 0;
    assertNonUndefined(this.shadowRoot);
    for (const listItem of Array.from(
      this.shadowRoot.children[0].children
    ).filter<AccordionSection>(
      (e): e is AccordionSection => e.children.length === 2
    )) {
      this._widths.push(listItem.children[1].offsetHeight);
      this._headerHeights.push(listItem.children[0].offsetHeight);
    }
  }

  protected _clickAccordion(index: number) {
    this.updateWidths();
    this.opened = this.opened.map((v, i) => (index === i ? !v : (this.multiple ? v : false)));
  }

  protected render() {
    return html`
      <ul class="accordions">
        ${[...this._elements]
          .map((element, i) => {
            const [firstChild, lastChild] = element;

            const styles = this.opened[i]
              ? {
                  cursor: "n-resize",
                  maxHeight: this._widths[i] + this._headerHeights[i] + "px",
                }
              : {
                  cursor: "pointer",
                  maxHeight: `${this._headerHeights[i]}px`,
                };
            return html`<li class="accordion" style=${styleMap(styles)}>
              <header
                class="accordion__heading"
                @click=${{ handleEvent: () => { this._clickAccordion(i); } }}
              >
                ${firstChild}
              </header>
              <footer class="according__content">${lastChild}</footer>
            </li>`;
          })
          .filter(Boolean)}
      </ul>
    `;
  }
}
