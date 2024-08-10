/*! For license information please see 6632-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[6632],{6632:(t,e,s)=>{s.r(e),s.d(e,{BackfaceCarousel:()=>U,BackfaceCarouselItem:()=>O});var i=s(2618),o=s(4791),n=s(732);const r=i.AH`
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

	.carousel-controls__toggles {
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style-type: none;
		padding: 0;
		gap: 0.3rem;
	}

	.carousel-controls__toggle {
		width: 10px;
		height: 10px;
		cursor: pointer;
		border: 1px solid #e2e2e2;
		border-radius: 50%;
	}

	.carousel-controls__toggle--active {
		background-color: #2390bb;
	}
`;var l=s(6752);const c=t=>(...e)=>({_$litDirective$:t,values:e});class a{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const h="important",u=" !"+h,d=c(class extends a{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(u);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?h:""):s[t]=i}}return l.c0}});class p extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}class b{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new p(this.context,this.t,this.subscribe))}}class f{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class y extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class v extends f{constructor(t,e,s){super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)s.has(t)||(s.add(t),e.dispatchEvent(new p(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new y(this.context))}}function m({context:t}){return(e,s)=>{const i=new WeakMap;if("object"==typeof s)return s.addInitializer((function(){i.set(this,new v(this,{context:t}))})),{get(){return e.get.call(this)},set(t){return i.get(this)?.setValue(t),e.set.call(this,t)},init(t){return i.get(this)?.setValue(t),t}};{e.constructor.addInitializer((e=>{i.set(e,new v(e,{context:t}))}));const o=Object.getOwnPropertyDescriptor(e,s);let n;if(void 0===o){const t=new WeakMap;n={get:function(){return t.get(this)},set:function(e){i.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=o.set;n={...o,set:function(e){i.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,s,n)}}}function g({context:t,subscribe:e}){return(s,i)=>{"object"==typeof i?i.addInitializer((function(){new b(this,{context:t,callback:t=>{this[i.name]=t},subscribe:e})})):s.constructor.addInitializer((s=>{new b(s,{context:t,callback:t=>{s[i]=t},subscribe:e})}))}}var x=s(1956),w=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r},k=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const C=Symbol(),_=t=>{class e extends t{getUid(){return(0,x.uid)()}constructor(...t){super(...t),this.linkedUid=this.getUid()}get linkedItemStyles(){return this.linkedItemsContext[this.linkedUid].styles}connectedCallback(){super.connectedCallback(),this.linkedUid in this.linkedItemsContext||(this.linkedItemsContext[this.linkedUid]={element:this,styles:{}})}firstUpdated(){this.linkedUid in this.linkedItemsContext&&(this.linkedItemsContext[this.linkedUid].element=this._rootElement??this)}disconnectedCallback(){super.disconnectedCallback(),this.linkedUid in this.linkedItemsContext&&delete this.linkedItemsContext[this.linkedUid]}}return w([(0,o.P)("*"),k("design:type",HTMLElement)],e.prototype,"_rootElement",void 0),w([g({context:C,subscribe:!0}),k("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e},I=t=>{class e extends t{constructor(){super(...arguments),this.linkedItemsContext=new Proxy({},{set:(t,e,s,i)=>{let o=s.styles,n=s.element;const r=this;return Reflect.set(t,e,{get styles(){return o},set styles(t){r.scheduleContextUpdate(),o=t},get element(){return n},set element(t){n=t}},i)}})}async scheduleContextUpdate(){this.linkedItemsContext={...this.linkedItemsContext}}get itemValues(){return Object.values(this.linkedItemsContext)}get itemKeys(){return Object.keys(this.linkedItemsContext)}get itemEntries(){return Object.entries(this.linkedItemsContext)}set itemEntries(t){this.linkedItemsContext=Object.fromEntries(t)}}return w([m({context:C}),k("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e};class j extends(_(i.WF)){constructor(){super(...arguments),this.hasTransition=!1}static{this.styles=[i.AH`
			:host {
				display: flex;
			}

			::slotted(*) {
				width: 100%;
				height: 100%;
			}

			.with-transition {
				transition:
					0.3s linear left,
					0.3s linear width,
					0.3s linear height,
					0.3s linear top,
					0.3s linear opacity;
			}
		`]}render(){return i.qy`<div class=${(t=>(this.hasTransition?"with-transition":void 0)??l.s6)()} style=${d(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}w([(0,o.MZ)({type:Boolean}),k("design:type",Object)],j.prototype,"hasTransition",void 0);class O extends(_(i.WF)){static{this.styles=i.AH`
		:host {
			display: contents;
		}

		.backface-carousel-item {
			all: inherit;
			display: revert;
			position: relative;
			width: 100%;
			height: auto;
			padding: 0;
			opacity: 0.9999;
			backface-visibility: hidden;
		}

		:host(:not(:first-of-type)) .backface-carousel-item {
			position: absolute;
			left: 0;
			top: 0;
			margin: 0 auto;
			padding: 0 auto;
		}
	`}render(){return i.qy`<li class="backface-carousel-item" style=${d(this.linkedItemStyles)}>
			<slot></slot>
		</li>`}}class S{constructor(t,e,s){this.callback=e,this.timeout=s,t.addController(this)}hostConnected(){this._intervalId=window.setInterval(this.callback,this.timeout)}hostDisconnected(){this.abortInterval()}abortInterval(){window.clearInterval(this._intervalId),this._intervalId=void 0}startInterval(){this._intervalId=window.setInterval(this.callback,this.timeout)}}class ${constructor(t,e){this.callback=e,t.addController(this)}hostConnected(){window.addEventListener("resize",this.callback)}hostDisconnected(){window.removeEventListener("resize",this.callback)}}class R{constructor(t,e){this.host=t,this.options=e,this.repetitionsLeft=e.autoplay?.totalRepetitions??0,t.addController(this)}abortTimeout(){window.clearTimeout(this.timeout),this.repetitionsLeft&&(this.timeout=window.setTimeout((()=>{this.options.autoplay?.direction===n.CarouselDirection.BACKWARDS?this.options.previousSlide():this.options.autoplay?.direction===n.CarouselDirection.FORWARDS&&this.options.nextSlide(),this.repetitionsLeft--,this.host.requestUpdate(),this.abortTimeout()}),this.options.autoplay?.delay))}hostConnected(){this.abortTimeout()}hostDisconnected(){window.clearTimeout(this.timeout)}}var P=s(3899);function q(t,e,s){return t?e(t):s?.(t)}const A=c(class extends a{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return l.c0}});var T=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r},M=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class U extends(I(i.WF)){constructor(){super(...arguments),this.isVertical=!1,this.allowSwitchingOrientation=!1,this.showArrows=!1,this.showToggles=!1,this._carouselStyles={},this._currentItem=0,this._intervalController=new S(this,(()=>{this.setupCarousel()}),250)}static{this.styles=[i.AH`
			:host {
				display: block;
			}

			.backface-carousel {
				display: flex;
				width: auto;
				height: 100%;
				flex-direction: column;
				align-items: center;
				perspective: 500px;
				overflow: hidden;
				padding: 20px;
			}

			.backface-carousel--vertical {
				margin-top: 10%;
				height: 33vw;
				overflow: visible;
			}

			.backface-carousel-items {
				width: 40%;
				transform-style: preserve-3d;
				transition: all 0.5s;
				padding: 0;
				list-style-type: none;
				margin: 0 auto;
				flex: 0 0 auto;
			}
		`,r]}rotateCarousel(t){const e=2*Math.PI/this.itemValues.length;this._carouselStyles.transform=`rotate${this.isVertical?"X":"Y"}(${String(t*-e)}rad)`,this._currentItem=t}setupCarousel(){const t=this.itemValues,e=t.length,s=2*Math.PI/e,i=t[0].element[this.isVertical?"offsetHeight":"offsetWidth"]/(2*Math.tan(Math.PI/e));this._carouselStyles.transformOrigin=`50% 50% ${String(-i)}px`;for(let o=0;o<e;o++){const e={padding:"0"};0!==o?(e.transformOrigin=`50% 50% ${String(-i)}px`,e.transform=`rotate${this.isVertical?"X":"Y"}(${String(o*s)}rad)`,t[o].styles=e):t[o].styles=e}this.rotateCarousel(this._currentItem)}firstUpdated(){new $(this,this.setupCarousel.bind(this)),this._autoplayController=new R(this,{autoplay:this.autoplay,nextSlide:this.nextSlide.bind(this),previousSlide:this.previousSlide.bind(this)}),this.setupCarousel()}nextSlide(){this._intervalController.abortInterval(),this.rotateCarousel(this._currentItem+1)}previousSlide(){this._intervalController.abortInterval(),this.rotateCarousel(this._currentItem-1)}switchPerspective(){this._intervalController.abortInterval(),this.isVertical=!this.isVertical,this.setupCarousel()}render(){const{realCurrentItem:t,childrenLength:e,getCurrentItem:s}=(0,P.getCurrentItemInfo)({childrenLength:this.itemKeys.length,currentItem:this._currentItem});return i.qy`
			<div class="backface-carousel ${this.isVertical?"backface-carousel--vertical":""}">
				<ul class="backface-carousel-items" style=${d(this._carouselStyles)}>
					<slot></slot>
				</ul>
			</div>
			${q(this.showArrows||this.allowSwitchingOrientation,(()=>i.qy`<div class="carousel-controls">
						${q(this.showArrows,(()=>i.qy`<button
									class="carousel-controls__previous-button"
									@click=${()=>{this._autoplayController.abortTimeout(),this.previousSlide()}}
								></button>`))}
						${q(this.allowSwitchingOrientation,(()=>i.qy`<button
									class="carousel-controls__perspective-button"
									@click=${()=>{this._autoplayController.abortTimeout(),this.switchPerspective()}}
								>
									Switch
								</button>`))}
						${q(this.showArrows,(()=>i.qy`<button
									class="carousel-controls__next-button"
									@click=${()=>{this._autoplayController.abortTimeout(),this.nextSlide()}}
								></button>`))}
					</div>`))}
			${q(this.showToggles,(()=>i.qy`<ul class="carousel-controls__toggles">
						${function*(t,e){if(void 0!==t){let s=0;for(const i of t)yield e(i,s++)}}(function*(t,e,s=1){const i=void 0===e?0:t;e??=t;for(let t=i;s>0?t<e:e<t;t+=s)yield t}(e),(e=>i.qy`<li
									class="carousel-controls__toggle ${A({"carousel-controls__toggle--active":e===t})}"
									@click=${()=>{this._autoplayController.abortTimeout(),this.rotateCarousel(s(e))}}
								></li>`))}
					</ul>`))}
		`}}T([(0,o.MZ)({type:Boolean}),M("design:type",Object)],U.prototype,"isVertical",void 0),T([(0,o.MZ)({type:Boolean}),M("design:type",Object)],U.prototype,"allowSwitchingOrientation",void 0),T([(0,o.MZ)({type:Boolean}),M("design:type",Object)],U.prototype,"showArrows",void 0),T([(0,o.MZ)({type:Boolean}),M("design:type",Object)],U.prototype,"showToggles",void 0),T([(0,o.MZ)({type:Object}),M("design:type",Object)],U.prototype,"autoplay",void 0),T([(0,o.wk)(),M("design:type",Object)],U.prototype,"_carouselStyles",void 0),T([(0,o.wk)(),M("design:type",Object)],U.prototype,"_currentItem",void 0)}}]);