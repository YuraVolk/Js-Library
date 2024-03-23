import { defaultActiveColor, defaultHoverColor } from "shared/component/rangeInput";

export const thumbStyles = `
  width: var(--thumbSize, 15px);
  height: var(--thumbSize, 15px);
  background-color: var(--thumbColor, #f50);
  border-radius: 50%;
  border: none;
  transition: 0.35s ease-in-out;
`;

export { defaultActiveColor, defaultHoverColor };
