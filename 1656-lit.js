/*! For license information please see 1656-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[1656],{5236:(t,e,n)=>{n.r(e),n.d(e,{RebuildingTextComponent:()=>p});var i=n(4791),r=n(2618),s=n(7687),o=(n(2817),n(3774),n(1956)),c=function(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class a extends r.WF{constructor(){super(...arguments),this.strings=[],this.repetitions=1/0,this._generator=(0,s.nextStringsGenerator)("",this),this._currentTextValue=[]}static{this.styles=[r.AH`
			:host {
				display: block;
				font-family: monospace;
				unicode-bidi: isolate;
				font-size: 24px;
				line-height: 54px;
			}
		`]}firstUpdated(){this._generator=(0,s.nextStringsGenerator)(this.strings[0],this),this._currentTextValue=this.strings[0].split("").map((t=>({letter:t,letterState:s.LetterState.idle}))),this.splitText?.({context:this}),this.intervalCurrent=window.setTimeout((()=>{this.onInterval()}),this.interval)}disconnectedCallback(){this._generator.return(["",""]),window.clearTimeout(this.intervalCurrent)}onInterval(){const{done:t,value:e}=this._generator.next();t?(window.clearTimeout(this.intervalCurrent),this.intervalCurrent=void 0):this.triggerTextAnimation({context:this,fromText:e[0],toText:e[1]})}render(){if(this.duration&&this.renderElements){const t=r.qy`<transition-group-component
				.renderElements=${this._currentTextValue.map(((t,e)=>{(0,o.assertNonUndefinedDevOnly)(this.renderElements),(0,o.assertNonUndefinedDevOnly)(this.duration);const{key:n,value:i}=this.renderElements(t,e),s=this.duration;return{key:n,isActive:!0,render:({isActive:t,onExited:e})=>r.qy`<transition-component @finished=${e} ?isActive=${t} .duration=${s}>
								${i}
							</transition-component>`,onExited:()=>{}}}))}
			></transition-group-component>`;return(0,r.XX)(t,this),r.qy`<slot></slot>`}if(this.renderElements){const t=this._currentTextValue.map(((t,e)=>((0,o.assertNonUndefinedDevOnly)(this.renderElements),this.renderElements(t,e).value)));return(0,r.XX)(t,this),r.qy`<slot></slot>`}return r.qy`${function*(t,e){if(void 0!==t){let e=0;for(const i of t)yield(n=i,e++,r.qy`<span>${n.letter}</span>`)}var n}(this._currentTextValue)}`}}c([(0,i.MZ)({type:Array}),l("design:type",Array)],a.prototype,"strings",void 0),c([(0,i.MZ)({type:Number}),l("design:type",Object)],a.prototype,"repetitions",void 0),c([(0,i.MZ)({type:Number}),l("design:type",Number)],a.prototype,"duration",void 0),c([(0,i.MZ)({attribute:!1}),l("design:type",Function)],a.prototype,"renderElements",void 0),c([(0,i.wk)(),l("design:type",Array)],a.prototype,"_currentTextValue",void 0);var d=n(5749),u=function(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},h=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class p extends a{constructor(){super(...arguments),this.interval=2500,this.typingSpeed=75}triggerTextAnimation({context:t,fromText:e,toText:n}){const i=(0,d.createRebuildingTextSteps)(e,n);for(let e=0;e<i.length;e++)setTimeout((()=>{this._currentTextValue=i[e].filter((t=>Boolean(t))),e===i.length-1&&setTimeout((()=>{t.onInterval()}),this.interval)}),this.typingSpeed*e)}}u([(0,i.MZ)({type:Number}),h("design:type",Object)],p.prototype,"interval",void 0),u([(0,i.MZ)({type:Number}),h("design:type",Object)],p.prototype,"typingSpeed",void 0)},6201:(t,e,n)=>{n.d(e,{Kq:()=>u});var i=n(8504),r=n(7804);const s=(t,e)=>{const n=t._$AN;if(void 0===n)return!1;for(const t of n)t._$AO?.(e,!1),s(t,e);return!0},o=t=>{let e,n;do{if(void 0===(e=t._$AM))break;n=e._$AN,n.delete(t),t=e}while(0===n?.size)},c=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),d(e)}};function l(t){void 0!==this._$AN?(o(this),this._$AM=t,c(this)):this._$AM=t}function a(t,e=!1,n=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(let t=n;t<i.length;t++)s(i[t],!1),o(i[t]);else null!=i&&(s(i,!1),o(i));else s(this,t)}const d=t=>{t.type==r.OA.CHILD&&(t._$AP??=a,t._$AQ??=l)};class u extends r.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),c(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(s(this,t),o(this))}setValue(t){if((0,i.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},8504:(t,e,n)=>{n.d(e,{Dx:()=>c,KO:()=>h,Rt:()=>s,cN:()=>u,lx:()=>l,mY:()=>d});var i=n(6752);const{I:r}=i.ge,s=t=>void 0===t.strings,o=()=>document.createComment(""),c=(t,e,n)=>{const i=t._$AA.parentNode,s=void 0===e?t._$AB:e._$AA;if(void 0===n){const e=i.insertBefore(o(),s),c=i.insertBefore(o(),s);n=new r(e,c,t,t.options)}else{const e=n._$AB.nextSibling,r=n._$AM,o=r!==t;if(o){let e;n._$AQ?.(t),n._$AM=t,void 0!==n._$AP&&(e=t._$AU)!==r._$AU&&n._$AP(e)}if(e!==s||o){let t=n._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,s),t=e}}}return n},l=(t,e,n=t)=>(t._$AI(e,n),t),a={},d=(t,e=a)=>t._$AH=e,u=t=>t._$AH,h=t=>{t._$AP?.(!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const t=e.nextSibling;e.remove(),e=t}}},7804:(t,e,n)=>{n.d(e,{OA:()=>i,WL:()=>s,u$:()=>r});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class s{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}}}]);