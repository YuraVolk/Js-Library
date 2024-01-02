/*! For license information please see 53.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[53],{6053:function(t,e,o){o.r(e),o.d(e,{PopupComponent:function(){return c}});var p=o(1293),n=o(3129),i=o(801),s=function(t,e,o,p){var n,i=arguments.length,s=i<3?e:null===p?p=Object.getOwnPropertyDescriptor(e,o):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,p);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i<3?n(s):i>3?n(e,o,s):n(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends p.oi{constructor(){super(...arguments),this.open=!1,this.displayOpenButton=!1,this.closeButtonSelector="[data-popup-close-button]"}static{this.styles=p.iv`
		.popup {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10000;
		}
	`}async openPopup(){if(this.open)return;this.open=!0;const t=await this._popup,e=Array.from(this._assignedElements.reduce(((t,e)=>[...t,...Array.from(e.querySelectorAll(this.closeButtonSelector))]),[]));t.addEventListener("click",this.clickEventListener=t=>{t.target&&e.includes(t.target)&&this.closePopup().catch((t=>{console.error(t)}))}),this.autoClosingTime&&(await new Promise((t=>setTimeout(t,this.autoClosingTime??0))),await this.closePopup())}async closePopup(){this.open&&((await this._popup).removeEventListener("click",this.clickEventListener),this.open=!1)}render(){return p.dy`${(0,i.g)(this.displayOpenButton,(()=>p.dy`<div @click="${()=>this.openPopup()}">
					<slot name="popup-open-button"></slot>
				</div>`))}
		${(0,i.g)(this.open,(()=>p.dy`<div class="popup">
				<slot name="popup"></slot>
			</div>`))}`}};s([(0,n.Cb)({type:Boolean}),r("design:type",Object)],c.prototype,"open",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Object)],c.prototype,"displayOpenButton",void 0),s([(0,n.Cb)({type:Number}),r("design:type",Number)],c.prototype,"autoClosingTime",void 0),s([(0,n.Cb)(),r("design:type",Object)],c.prototype,"closeButtonSelector",void 0),s([(0,n.GC)(".popup"),r("design:type",Promise)],c.prototype,"_popup",void 0),s([(0,n.NH)({slot:"popup"}),r("design:type",Array)],c.prototype,"_assignedElements",void 0),c=s([(0,n.Mo)("popup-component")],c)},801:function(t,e,o){function p(t,e,o){return t?e(t):o?.(t)}o.d(e,{g:function(){return p}})}}]);