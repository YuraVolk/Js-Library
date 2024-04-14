/*! For license information please see 2969-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[2969],{2969:(t,e,o)=>{o.r(e),o.d(e,{PopupComponent:()=>l});var p=o(2618),n=o(4791);function i(t,e,o){return t?e(t):o?.(t)}var s=function(t,e,o,p){var n,i=arguments.length,s=i<3?e:null===p?p=Object.getOwnPropertyDescriptor(e,o):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,p);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i<3?n(s):i>3?n(e,o,s):n(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class l extends p.WF{constructor(){super(...arguments),this.open=!1,this.displayOpenButton=!1}static{this.styles=p.AH`
		.popup {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10000;
		}
	`}openPopup(){this.open||(this.open=!0,this.autoClosingTime&&setTimeout((()=>{this.closePopup()}),this.autoClosingTime??0))}closePopup(){this.open&&(this.open=!1)}render(){return p.qy`${i(this.displayOpenButton,(()=>p.qy`<div
					@click="${()=>{this.openPopup()}}"
				>
					<slot name="popup-open-button"></slot>
				</div>`))}
		${i(this.open,(()=>p.qy`<div class="popup">
					<slot name="popup"></slot>
				</div>`))}`}}s([(0,n.MZ)({type:Boolean}),r("design:type",Object)],l.prototype,"open",void 0),s([(0,n.MZ)({type:Boolean}),r("design:type",Object)],l.prototype,"displayOpenButton",void 0),s([(0,n.MZ)({type:Number}),r("design:type",Number)],l.prototype,"autoClosingTime",void 0)}}]);