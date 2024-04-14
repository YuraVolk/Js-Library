/*! For license information please see 6400-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[6400],{6400:(t,e,o)=>{o.r(e),o.d(e,{AutocompleteListComponent:()=>c});var s=o(2618),i=o(4791);class r extends Event{constructor(t){super("autocomplete-selected"),this.value=t}}var n=function(t,e,o,s){var i,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(r<3?i(n):r>3?i(e,o,n):i(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class c extends s.WF{constructor(){super(...arguments),this.options=[],this.inputValue=""}static{this.styles=s.AH`
		:host {
			position: relative;
		}

		.autocomplete-items {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 9999;
			overflow-y: scroll;
			width: 100%;
			max-height: 200px;
			padding-left: 0;
			margin: 0;
			list-style-type: none;
		}

		.autocomplete-item {
			padding: 10px;
			cursor: pointer;
			background-color: #ffffff;
			border-bottom: 1px solid #d4d4d4;
		}
	`}render(){const t=this.inputValue.toLowerCase().trim(),e=t.length?this.options.filter((e=>{const o=e.toLowerCase();return o!==t&&o.startsWith(t)})):[],o=e.length>0;return s.qy`
			<slot></slot>
			${i=o,n=()=>s.qy`<ul class="autocomplete-items">
						${e.map((t=>s.qy`<li
								class="autocomplete-item"
								@click="${()=>{this.dispatchEvent(new r(t))}}"
							>
								${t}
							</li>`))}
					</ul>`,i?n():void 0}
		`;var i,n}}n([(0,i.MZ)({type:Array}),l("design:type",Array)],c.prototype,"options",void 0),n([(0,i.MZ)({type:String}),l("design:type",Object)],c.prototype,"inputValue",void 0)}}]);