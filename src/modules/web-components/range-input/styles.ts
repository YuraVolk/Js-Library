import { css } from "lit";

export const thumbStyles = css`
  width: var(--thumbSize, 15px);
  height: var(--thumbSize, 15px);
  background-color: var(--thumbColor, #f50);
  border-radius: 50%;
  border: none;
  transition: 0.35s ease-in-out;
`;

export const defaultActiveColor = css`rgba(255,85,0, .6)`;
export const defaultHoverColor = css`rgba(255,85,0, .3)`;
