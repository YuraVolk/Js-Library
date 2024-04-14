/*! For license information please see 4882-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[4882],{4882:(t,e,s)=>{s.r(e),s.d(e,{CarouselItem:()=>P,MenuCarouselComponent:()=>U});var i=s(2618),o=s(4791),n=s(1956),r=s(732);const c=i.AH`
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
`;var a=s(4236);class l extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}class h{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new l(this.context,this.t,this.subscribe))}}class d{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class u extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class p extends d{constructor(t,e,s){super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)s.has(t)||(s.add(t),e.dispatchEvent(new l(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new u(this.context))}}function b({context:t}){return(e,s)=>{const i=new WeakMap;if("object"==typeof s)return s.addInitializer((function(){i.set(this,new p(this,{context:t}))})),{get(){return e.get.call(this)},set(t){return i.get(this)?.setValue(t),e.set.call(this,t)},init(t){return i.get(this)?.setValue(t),t}};{e.constructor.addInitializer((e=>{i.set(e,new p(e,{context:t}))}));const o=Object.getOwnPropertyDescriptor(e,s);let n;if(void 0===o){const t=new WeakMap;n={get:function(){return t.get(this)},set:function(e){i.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=o.set;n={...o,set:function(e){i.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,s,n)}}}function f({context:t,subscribe:e}){return(s,i)=>{"object"==typeof i?i.addInitializer((function(){new h(this,{context:t,callback:t=>{this[i.name]=t},subscribe:e})})):s.constructor.addInitializer((s=>{new h(s,{context:t,callback:t=>{s[i]=t},subscribe:e})}))}}var m=s(6752);class y{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const x="important",v=" !"+x,g=(k=class extends y{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(v);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?x:""):s[t]=i}}return m.c0}},(...t)=>({_$litDirective$:k,values:t}));var k,C=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r},_=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const w=Symbol(),R=t=>{class e extends t{getUid(){return(0,n.uid)()}constructor(...t){super(...t),this.linkedUid=this.getUid()}get linkedItemStyles(){return this.linkedItemsContext[this.linkedUid].styles}connectedCallback(){super.connectedCallback(),this.linkedUid in this.linkedItemsContext||(this.linkedItemsContext[this.linkedUid]={element:this,styles:{}})}firstUpdated(){this.linkedUid in this.linkedItemsContext&&(this.linkedItemsContext[this.linkedUid].element=this._rootElement??this)}disconnectedCallback(){super.disconnectedCallback(),this.linkedUid in this.linkedItemsContext&&delete this.linkedItemsContext[this.linkedUid]}}return C([(0,o.P)("*"),_("design:type",HTMLElement)],e.prototype,"_rootElement",void 0),C([f({context:w,subscribe:!0}),_("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e},I=t=>{class e extends t{constructor(){super(...arguments),this.linkedItemsContext=new Proxy({},{set:(t,e,s,i)=>{let o=s.styles,n=s.element;const r=this;return Reflect.set(t,e,{get styles(){return o},set styles(t){r.scheduleContextUpdate(),o=t},get element(){return n},set element(t){n=t}},i)}})}async scheduleContextUpdate(){this.linkedItemsContext={...this.linkedItemsContext}}get itemValues(){return Object.values(this.linkedItemsContext)}get itemKeys(){return Object.keys(this.linkedItemsContext)}get itemEntries(){return Object.entries(this.linkedItemsContext)}set itemEntries(t){this.linkedItemsContext=Object.fromEntries(t)}}return C([b({context:w}),_("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e};class P extends(R(i.WF)){constructor(){super(...arguments),this.hasTransition=!1}static{this.styles=[i.AH`
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
		`]}render(){return i.qy`<div class=${(t=>(this.hasTransition?"with-transition":void 0)??m.s6)()} style=${g(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}C([(0,o.MZ)({type:Boolean}),_("design:type",Object)],P.prototype,"hasTransition",void 0);class j{constructor(t,e){this.callback=e,t.addController(this)}hostConnected(){window.addEventListener("resize",this.callback)}hostDisconnected(){window.removeEventListener("resize",this.callback)}}var O=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r},M=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class S extends a.MenuCarouselInternalItem{constructor(t){super(t.element),this.elementData=t}initStyles(){return this.elementData.styles={position:"absolute"},this}setMovingStyle(t,e,s){this.elementData.styles={...this.elementData.styles,width:String(this.width)+"px",left:String(t)+"px",top:String(e)+"px",zIndex:String(100*s|0)}}}class U extends(I(i.WF)){constructor(){super(...arguments),this.yPos=112,this.yRadius=128,this.farScale=.9,this.speed=.11,this._items=[],this._rotation=Math.PI/2,this._destRotation=Math.PI/2}static{this.styles=[i.AH`
			:host {
				display: block;
				position: relative;
				overflow: hidden;
				padding: 0;
			}

			.carousel-controls {
				z-index: 999;
				top: 80%;
			}
		`,c]}playFrame(){const t=this._destRotation-this._rotation;Math.abs(t)<=0?(this._rotation=this._destRotation,window.clearTimeout(this._frameTimer),this._frameTimer=void 0):(this._rotation+=t*this.speed,this.scheduleNextFrame()),this.carouselRender()}scheduleNextFrame(){this._frameTimer=window.setTimeout((()=>{this.playFrame()}),32)}go(t){this._destRotation+=2*Math.PI/this._items.length*t,void 0===this._frameTimer&&this.scheduleNextFrame()}goBack(){this.go(r.CarouselDirection.BACKWARDS)}goForward(){this.go(r.CarouselDirection.FORWARDS)}rotateItem(t,e){const s=this._items[t],i=Math.sin(e),o=this.farScale+(1-this.farScale)*(i+1)*.5;(0,n.assertNonUndefinedDevOnly)(this.xPos),(0,n.assertNonUndefinedDevOnly)(this.xRadius),s.moveTo(this.xPos+o*(Math.cos(e)*this.xRadius-s.fullWidth/2),this.yPos+o*i*this.yRadius+this.yPos/2.3,o)}carouselRender(){const t=this._items.length,e=2*Math.PI/t;let s=this._rotation;for(let i=0;i<t;i++)this.rotateItem(i,s),s+=e}setupCarousel(){this.xPos??=.5*this.offsetWidth,this.yPos=.1*this.offsetHeight,this.xRadius??=this.offsetWidth/2.3,this.yRadius=this.offsetHeight/6,this._items.splice(0,this._items.length);for(const t of this.itemValues)t.element.removeAttribute("style"),this._items.push(new S(t).initStyles());this.carouselRender()}onResize(){this.xRadius=void 0,this.xPos=void 0,this.setupCarousel()}firstUpdated(){this.setupCarousel(),new j(this,this.onResize.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this._frameTimer)}render(){return i.qy`
			<slot></slot>
			<div class="carousel-controls">
				<button
					class="carousel-controls__previous-button"
					@click="${()=>{this.goBack()}}"
				></button>
				<button
					class="carousel-controls__next-button"
					@click="${()=>{this.goForward()}}"
				></button>
			</div>
		`}}O([(0,o.MZ)({type:Number}),M("design:type",Number)],U.prototype,"xPos",void 0),O([(0,o.MZ)({type:Number}),M("design:type",Object)],U.prototype,"yPos",void 0),O([(0,o.MZ)({type:Number}),M("design:type",Number)],U.prototype,"xRadius",void 0),O([(0,o.MZ)({type:Number}),M("design:type",Object)],U.prototype,"yRadius",void 0),O([(0,o.MZ)({type:Number}),M("design:type",Object)],U.prototype,"farScale",void 0),O([(0,o.MZ)({type:Number}),M("design:type",Object)],U.prototype,"speed",void 0)}}]);