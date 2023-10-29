import { css } from "lit";

export enum CarouselDirection {
	BACKWARDS = -1,
	STILL = 0,
	FORWARDS = 1
}

export const carouselControlsStyles = css`
  .carousel-controls {
	position: relative;
	z-index: 1;
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
  }

  .carousel-controls__next-button {
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 7.5px 0 7.5px 13px;
	border-color: transparent transparent transparent #fff;
	background: none;
	cursor: pointer;
  }

  .carousel-controls__previous-button {
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 7.5px 13px 7.5px 0;
	border-color: transparent #fff transparent transparent;
	background: none;
	cursor: pointer;
  }

  .carousel-controls__perspective-button {
	border: none;
	background-color: #000;
	padding: 0.5rem;
	color: #fff;
	text-transform: uppercase;
	cursor: pointer;
  }
`;
