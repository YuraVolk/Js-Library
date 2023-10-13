import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

declare global {
  interface HTMLElementTagNameMap {
    "ciphering-text-component": CipheringTextComponent;
  }
}

@customElement("ciphering-text-component")
export class CipheringTextComponent extends LitElement {
  private static validateElement(element: HTMLElement) {
    return !element.firstElementChild && element.textContent;
  }

  @property({ type: Array, converter: {
    fromAttribute: (string): string[] => string?.split(";") ?? [],
    toAttribute: (strings: string[]): string => strings.join(";")
  } })
  strings: string[] = [];
  @property({ type: Number })
  repetitions = 1;
  @property({ type: Number })
  interval = 3000;
  @property({ type: Number })
  typingSpeed = 45;
  @property({ type: Array, converter: {
    fromAttribute: (string): string[] => {
      return string?.split("") ?? ['!', '"', '#', '$', '%', '*', '0', '1', ':', ';', '?', '@', '[', ']', '\\', '~', "'", '/', '{', '}', '|', '&', '(', ')', '-', '<', '>'];
    },
    toAttribute: (strings: string[]): string => strings.join("")
  } })
  characters: string[] = ['!', '"', '#', '$', '%', '*', '0', '1', ':', ';', '?', '@', '[', ']', '\\', '~', "'", '/', '{', '}', '|', '&', '(', ')', '-', '<', '>'];

  get _elements() {
    return Array.from(this.querySelectorAll('pre')).filter(CipheringTextComponent.validateElement);
  }

  private windowInterval?: number;

  private *generateNextStrings(startingString: string): Generator<[string, string], [string, string], [string, string]> {
    const newStrings = [...this.strings];
    let index = 1, repeated = 0, previousValue = startingString;
    while (repeated < this.repetitions) {
      repeated++;
      yield [previousValue, newStrings[index]];
      previousValue = newStrings[index];
      index = (index + 1) % newStrings.length;
    }

    return [previousValue, previousValue];
  }
  protected generator!: ReturnType<typeof this.generateNextStrings>;

  protected splitText(newString?: string) {
    for (const element of this._elements) {
      const oldContent = element.textContent ?? "";
      element.textContent = "";
      for (const char of oldContent) element.insertAdjacentHTML("beforeend", `<span>${char}</span>`);
      if (newString && newString.length > oldContent.length) {
        for (let i = 0; i < newString.length - oldContent.length; i++) {
          element.insertAdjacentElement("beforeend", document.createElement("span"));
        }
      }
    }
  }

  protected cipherLetter(properties: { element: Element, newLetter: string, delayed: boolean, i: number }) {
    const { element, newLetter, delayed, i } = properties;
    let changeNumber = Math.round(Math.random() * ((delayed ? 44 : 14) - 6) + 6);
    let isDone = false, index = 0;

    const definedRandom = (Math.random() * 1000) + (delayed ? this.typingSpeed * i : 0), speed = 65;
    setTimeout(() => {
      while (index <= changeNumber) {
        const characters = this.characters;
        (function(index) {
          setTimeout(() => {
            if (!isDone) element.textContent = characters[Math.floor(Math.random() * characters.length)];
            if (index >= changeNumber) {
              isDone = true;
              element.textContent = newLetter;
              element.removeAttribute("data-ciphering-text-in-progress");
            }
          }, speed * index);
        })(index++);
      }
    }, definedRandom);

    return changeNumber * speed + speed;
  }

  protected cipherText(fromText: string, toText: string) {
    const newElements = Array.from(this.querySelectorAll('pre'));
    for (const element of newElements) element.textContent = fromText;
    this.splitText(toText);

    const speeds: number[] = [];
    for (const element of newElements) {
      Array.from(element.children).forEach((element, i) => {
        if (element.textContent === toText[i]) return;
        element.setAttribute("data-ciphering-text-in-progress", "");
        speeds.push(this.cipherLetter({ element, newLetter: toText[i], i, delayed: element.textContent?.length === 0 }));
      });
    }
    setTimeout(() => { this.onInterval(); }, Math.max(...speeds) + this.interval);
  }

  protected onInterval() {
    const { done, value } = this.generator.next();
    if (done) {
      window.clearTimeout(this.windowInterval);
      this.windowInterval = undefined;
    } else this.cipherText(...value);
  }

  connectedCallback() {
    super.connectedCallback();
    const result = this._elements[0].textContent ?? "";
    this.splitText();
    this.generator = this.generateNextStrings(result);
    this.windowInterval = window.setTimeout(() => { this.onInterval(); }, this.interval);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.generator.return(["", ""]);
    clearInterval(this.windowInterval);
  }

  render() {
    return html`<slot></slot>`;
  }
}
