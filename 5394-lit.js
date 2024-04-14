/*! For license information please see 5394-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[5394,732],{5394:(t,e,s)=>{s.r(e),s.d(e,{BackfaceCarousel:()=>R,BackfaceCarouselItem:()=>j});var i=s(2618),n=s(4791);s(732);const r=i.AH`
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
`;var o=s(6752);class c{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const l="important",a=" !"+l,h=(u=class extends c{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(a);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?l:""):s[t]=i}}return o.c0}},(...t)=>({_$litDirective$:u,values:t}));var u;class d extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}class p{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new d(this.context,this.t,this.subscribe))}}class b{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class f extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class v extends b{constructor(t,e,s){super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)s.has(t)||(s.add(t),e.dispatchEvent(new d(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new f(this.context))}}function y({context:t}){return(e,s)=>{const i=new WeakMap;if("object"==typeof s)return s.addInitializer((function(){i.set(this,new v(this,{context:t}))})),{get(){return e.get.call(this)},set(t){return i.get(this)?.setValue(t),e.set.call(this,t)},init(t){return i.get(this)?.setValue(t),t}};{e.constructor.addInitializer((e=>{i.set(e,new v(e,{context:t}))}));const n=Object.getOwnPropertyDescriptor(e,s);let r;if(void 0===n){const t=new WeakMap;r={get:function(){return t.get(this)},set:function(e){i.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=n.set;r={...n,set:function(e){i.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,s,r)}}}function m({context:t,subscribe:e}){return(s,i)=>{"object"==typeof i?i.addInitializer((function(){new p(this,{context:t,callback:t=>{this[i.name]=t},subscribe:e})})):s.constructor.addInitializer((s=>{new p(s,{context:t,callback:t=>{s[i]=t},subscribe:e})}))}}var x=s(1956),k=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},g=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const C=Symbol(),w=t=>{class e extends t{getUid(){return(0,x.uid)()}constructor(...t){super(...t),this.linkedUid=this.getUid()}get linkedItemStyles(){return this.linkedItemsContext[this.linkedUid].styles}connectedCallback(){super.connectedCallback(),this.linkedUid in this.linkedItemsContext||(this.linkedItemsContext[this.linkedUid]={element:this,styles:{}})}firstUpdated(){this.linkedUid in this.linkedItemsContext&&(this.linkedItemsContext[this.linkedUid].element=this._rootElement??this)}disconnectedCallback(){super.disconnectedCallback(),this.linkedUid in this.linkedItemsContext&&delete this.linkedItemsContext[this.linkedUid]}}return k([(0,n.P)("*"),g("design:type",HTMLElement)],e.prototype,"_rootElement",void 0),k([m({context:C,subscribe:!0}),g("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e},I=t=>{class e extends t{constructor(){super(...arguments),this.linkedItemsContext=new Proxy({},{set:(t,e,s,i)=>{let n=s.styles,r=s.element;const o=this;return Reflect.set(t,e,{get styles(){return n},set styles(t){o.scheduleContextUpdate(),n=t},get element(){return r},set element(t){r=t}},i)}})}async scheduleContextUpdate(){this.linkedItemsContext={...this.linkedItemsContext}}get itemValues(){return Object.values(this.linkedItemsContext)}get itemKeys(){return Object.keys(this.linkedItemsContext)}get itemEntries(){return Object.entries(this.linkedItemsContext)}set itemEntries(t){this.linkedItemsContext=Object.fromEntries(t)}}return k([y({context:C}),g("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e};class _ extends(w(i.WF)){constructor(){super(...arguments),this.hasTransition=!1}static{this.styles=[i.AH`
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
		`]}render(){return i.qy`<div class=${(t=>(this.hasTransition?"with-transition":void 0)??o.s6)()} style=${h(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}k([(0,n.MZ)({type:Boolean}),g("design:type",Object)],_.prototype,"hasTransition",void 0);class j extends(w(i.WF)){static{this.styles=i.AH`
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
	`}render(){return i.qy`<li class="backface-carousel-item" style=${h(this.linkedItemStyles)}>
			<slot></slot>
		</li>`}}class ${constructor(t,e,s){this.callback=e,this.timeout=s,t.addController(this)}hostConnected(){this._intervalId=window.setInterval(this.callback,this.timeout)}hostDisconnected(){this.abortInterval()}abortInterval(){window.clearInterval(this._intervalId),this._intervalId=void 0}startInterval(){this._intervalId=window.setInterval(this.callback,this.timeout)}}class O{constructor(t,e){this.callback=e,t.addController(this)}hostConnected(){window.addEventListener("resize",this.callback)}hostDisconnected(){window.removeEventListener("resize",this.callback)}}var P=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},S=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class R extends(I(i.WF)){constructor(){super(...arguments),this.isVertical=!1,this._carouselStyles={},this._currentItem=0,this.intervalController=new $(this,(()=>{this.setupCarousel()}),250)}static{this.styles=i.AH`
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

		${r}
	`}rotateCarousel(t){const e=2*Math.PI/this.itemValues.length;this._carouselStyles.transform=`rotate${this.isVertical?"X":"Y"}(${String(t*-e)}rad)`,this._currentItem=t}setupCarousel(){const t=this.itemValues,e=t.length,s=2*Math.PI/e,i=t[0].element[this.isVertical?"offsetHeight":"offsetWidth"]/(2*Math.tan(Math.PI/e));this._carouselStyles.transformOrigin=`50% 50% ${String(-i)}px`;for(let n=0;n<e;n++){const e={padding:"0"};0!==n?(e.transformOrigin=`50% 50% ${String(-i)}px`,e.transform=`rotate${this.isVertical?"X":"Y"}(${String(n*s)}rad)`,t[n].styles=e):t[n].styles=e}this.rotateCarousel(this._currentItem)}firstUpdated(){new O(this,this.setupCarousel.bind(this)),this.setupCarousel()}nextSlide(){this.intervalController.abortInterval(),this.rotateCarousel(this._currentItem+1)}previousSlide(){this.intervalController.abortInterval(),this.rotateCarousel(this._currentItem-1)}switchPerspective(){this.intervalController.abortInterval(),this.isVertical=!this.isVertical,this.setupCarousel()}render(){return i.qy`
			<div class="backface-carousel ${this.isVertical?"backface-carousel--vertical":""}">
				<ul class="backface-carousel-items" style=${h(this._carouselStyles)}>
					<slot></slot>
				</ul>
			</div>
			<div class="carousel-controls">
				<button
					class="carousel-controls__previous-button"
					@click=${()=>{this.previousSlide()}}
				></button>
				<button
					class="carousel-controls__perspective-button"
					@click=${()=>{this.switchPerspective()}}
				>
					Switch
				</button>
				<button
					class="carousel-controls__next-button"
					@click=${()=>{this.nextSlide()}}
				></button>
			</div>
		`}}P([(0,n.MZ)({type:Boolean}),S("design:type",Object)],R.prototype,"isVertical",void 0),P([(0,n.wk)(),S("design:type",Object)],R.prototype,"_carouselStyles",void 0),P([(0,n.wk)(),S("design:type",Object)],R.prototype,"_currentItem",void 0)}}]);