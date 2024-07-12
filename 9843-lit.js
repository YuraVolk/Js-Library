"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[9843],{2224:(e,t,i)=>{i.r(t),i.d(t,{SidebarComponent:()=>o});const n=JSON.parse('{"components":[{"name":"Accordion","link":"../accordion"},{"name":"Autocomplete Input","link":"../autocomplete-list"},{"name":"Backface Carousel","link":"../backface-carousel"},{"name":"Bubble Text","link":"../bubble-text"},{"name":"Ciphering Text","link":"../ciphering-text"},{"name":"Color Picker","link":"../color-picker"},{"name":"Countdown","link":"../countdown"},{"name":"Custom Select","link":"../custom-select"},{"name":"Custom Video","link":"../custom-video"},{"name":"Filtering","link":"../filtering"},{"name":"Floating Panel","link":"../floating-panel"},{"name":"Gallery Carousel","link":"../gallery-carousel"},{"name":"Image Comparator","link":"../image-comparator"},{"name":"Magnifier","link":"../magnifier"},{"name":"Menu Carousel","link":"../menu-carousel"},{"name":"One Page Scroll","link":"../one-page-scroll"},{"name":"Parallax","link":"../parallax"},{"name":"Perspective Carousel","link":"../perspective-carousel"},{"name":"Popup","link":"../popup"},{"name":"Range Input","link":"../range-input"},{"name":"Rebuilding Text","link":"../rebuilding-text"},{"name":"Scrolling Ad","link":"../scrolling-ad"},{"name":"Sticky Header","link":"../sticky-header"},{"name":"Table Filtering","link":"../table-filtering"},{"name":"Tabs","link":"../tabs"},{"name":"Toast","link":"../toast"},{"name":"Typing Text","link":"../typing-text"},{"name":"Zooming Image","link":"../zooming-image"}]}');var l=i(2618),a=i(4791),r=function(e,t,i,n){var l,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(r=(a<3?l(r):a>3?l(t,i,r):l(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const s=(0,i(1805).isLocalhostEnvironment)();let o=class extends l.WF{constructor(){super(...arguments),this.activeLink=""}static{this.styles=l.AH`
		.wrap {
			mask-image: linear-gradient(to top, transparent 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 100%, transparent 100%);
			-webkit-mask-image: linear-gradient(to top, transparent 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 100%, transparent 100%);
			overflow-y: scroll;
			height: 100%;
			scrollbar-width: none;
			display: flex;
			flex-direction: column;
			gap: 2vh;
			font-family:
				Helvetica,
				Segoe UI,
				Arial,
				system-ui;
		}

		@media (max-width: 800px) {
			.wrap {
				flex-direction: row;
			}
		}

		* {
			transition: all 0.1s ease-in;
		}

		*:hover {
			color: #57c9e5;
		}

		details:not([open]) svg {
			transform: rotate(-90deg);
		}

		.wrap::-webkit-scrollbar {
			display: none;
		}

		.list {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			margin: 0;
			padding: 2rem 0 1.5rem 2rem;
			list-style-type: none;
		}

		.list-item {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			cursor: pointer;
		}

		.list__heading {
			display: flex;
			font-size: 16px;
			color: rgb(236, 237, 238);
			gap: 0.5rem;
			align-items: center;
			text-transform: uppercase;
		}

		.list-sublist {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
			margin: 0;
			padding: 0;
			list-style-type: none;
		}

		.list-sublist__item {
			margin-left: 2.25rem;
		}

		.list-sublist__item-link {
			position: relative;
			color: rgba(236, 237, 238);
			text-decoration: none;
			font-size: 16px;
			opacity: 0.6;
		}

		.list-sublist__item--active {
			width: 100%;
			margin-left: 0;
			padding-left: 2.25rem;
			border-left: rgb(255, 112, 127) 2px solid;
			padding: 0.25rem 0.25rem 0.25rem 0.5rem;
			background-color: #ff2a5130;
		}

		.list-sublist__item--active .list-sublist__item-link::before {
			content: none;
		}

		.list-sublist__item-link::before {
			position: absolute;
			left: -1.25rem;
			top: 50%;
			transform: translateY(-50%);
			width: 4px;
			height: 4px;
			background-color: #eee;
			opacity: 0.75;
			border-radius: 50%;
			content: "";
		}

		.list-sublist__item-link:hover {
			opacity: 0.75;
		}
	`}render(){return l.qy`
			<nav class="wrap">
				${Object.entries(n).map((([e,t])=>l.qy`
						<div class="list">
							<details class="list-item" open>
								<summary class="list__heading">
									<span>${e}</span>
									<svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em">
										<path
											d="M15.5 19l-7-7 7-7"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
										></path>
									</svg>
								</summary>
								<div class="list-sublist-wrap">
									<ul class="list-sublist">
										${t.map((({name:e,link:t})=>l.qy`<li class="list-sublist__item ${e===this.activeLink?"list-sublist__item--active":""}">
												<a class="list-sublist__item-link" href="${s?t.replace(/\.\.\//g,"./"):t}">${e}</a>
											</li>`))}
									</ul>
								</div>
							</details>
						</div>
					`))}
			</nav>
		`}};r([(0,a.MZ)(),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],o.prototype,"activeLink",void 0),o=r([(0,a.EM)("sidebar-component")],o)}}]);