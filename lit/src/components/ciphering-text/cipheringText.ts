import { customElement, property } from "lit/decorators.js";
import { CipheringTextConfiguration } from "shared/component/cipheringText";
import { SelfModifyingText, SplitTextParams, TriggerTextParams } from "../../interfaces/generic/selfModifyingText";

declare global {
  interface HTMLElementTagNameMap {
    "ciphering-text-component": CipheringTextComponent;
  }
}

@customElement("ciphering-text-component")
export class CipheringTextComponent extends SelfModifyingText implements CipheringTextConfiguration {
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

  splitText({ toText }: SplitTextParams) {
    super.splitTextAlgorithm(toText);
  }

  protected cipherLetter(properties: { element: Element, newLetter: string, delayed: boolean, i: number }) {
    const { element, newLetter, delayed, i } = properties;
    const changeNumber = Math.round(Math.random() * ((delayed ? 44 : 14) - 6) + 6);
    let isDone = false, index = 0;

    const definedRandom = (Math.random() * 1000) + (delayed ? this.typingSpeed * i : 0), speed = this.typingSpeed;
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

  triggerTextAnimation({ context, toText, fromText }: TriggerTextParams) {
    const newElements = Array.from(this.querySelectorAll('pre'));
    for (const element of newElements) element.textContent = fromText;
    this.splitText({ context, toText });

    const speeds: number[] = [];
    for (const element of newElements) {
      Array.from(element.children).forEach((element, i) => {
        if (element.textContent === toText[i]) return;
        element.setAttribute("data-ciphering-text-in-progress", "");
        speeds.push(this.cipherLetter({ element, newLetter: toText[i], i, delayed: element.textContent?.length === 0 }));
      });
    }
    setTimeout(() => { 
      context.onInterval();
    }, Math.max(...speeds) + this.interval);
  }
}
