/*! For license information please see 8819-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[8819],{8819:(t,e,s)=>{s.r(e),s.d(e,{MarqueeCarouselComponent:()=>y});var r=s(2618),i=s(4791),n=s(6752);const o=t=>(...e)=>({_$litDirective$:t,values:e});class a{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const d=o(class extends a{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return n.c0}});function*c(t,e){if(void 0!==t){let s=0;for(const r of t)yield e(r,s++)}}function*l(t,e,s=1){const r=void 0===e?0:t;e??=t;for(let t=r;s>0?t<e:e<t;t+=s)yield t}const u="important",h=" !"+u,p=o(class extends a{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const r=t[s];return null==r?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(h);t.includes("-")||e?s.setProperty(t,e?r.slice(0,-11):r,e?u:""):s[t]=r}}return n.c0}});var f=function(t,e,s,r){var i,n=arguments.length,o=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(n<3?i(o):n>3?i(e,s,o):i(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o},m=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class y extends r.WF{constructor(){super(...arguments),this.duration="15s",this.repetitions=2,this.isPaused=!1,this.isReversed=!1,this.renderItem=()=>r.qy``}static{this.styles=r.AH`
		:host {
			display: block;
			overflow: hidden;
		}

		.marquee {
			width: 10000vw;
		}

		.marquee-text {
			animation-name: marquee-scroll-animation;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
			animation-duration: var(--duration);
			float: left;
		}

		.marquee--paused .marquee-text {
			animation-play-state: paused;
		}

		.marquee-text--reversed {
			animation-direction: reverse;
		}

		@keyframes marquee-scroll-animation {
			from {
				transform: translateX(0);
			}

			to {
				transform: translateX(-100%);
			}
		}
	`}render(){return(0,r.XX)(c(l(this.repetitions),(t=>this.renderItem(t))),this),r.qy`<div
			class="marquee ${d({"marquee--paused":this.isPaused})}"
			style=${p({"--duration":this.duration})}
		>
			${c(l(this.repetitions),(t=>r.qy`<div class="marquee-text ${d({"marquee-text--reversed":this.isReversed})}">
						<slot name=${t}></slot>
					</div>`))}
		</div>`}}f([(0,i.MZ)({type:String}),m("design:type",Object)],y.prototype,"duration",void 0),f([(0,i.MZ)({type:Number}),m("design:type",Object)],y.prototype,"repetitions",void 0),f([(0,i.MZ)({type:Boolean}),m("design:type",Object)],y.prototype,"isPaused",void 0),f([(0,i.MZ)({type:Boolean}),m("design:type",Object)],y.prototype,"isReversed",void 0),f([(0,i.MZ)({attribute:!1}),m("design:type",Function)],y.prototype,"renderItem",void 0)}}]);