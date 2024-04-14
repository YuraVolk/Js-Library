/*! For license information please see 6138-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[6138],{6138:(t,e,s)=>{s.r(e),s.d(e,{ZoomingImage:()=>E,ZoomingImageGlass:()=>I});var i=s(2618),n=s(4791);class o extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}class r{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new o(this.context,this.t,this.subscribe))}}class c{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class l extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class h extends c{constructor(t,e,s){super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)s.has(t)||(s.add(t),e.dispatchEvent(new o(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new l(this.context))}}function a({context:t}){return(e,s)=>{const i=new WeakMap;if("object"==typeof s)return s.addInitializer((function(){i.set(this,new h(this,{context:t}))})),{get(){return e.get.call(this)},set(t){return i.get(this)?.setValue(t),e.set.call(this,t)},init(t){return i.get(this)?.setValue(t),t}};{e.constructor.addInitializer((e=>{i.set(e,new h(e,{context:t}))}));const n=Object.getOwnPropertyDescriptor(e,s);let o;if(void 0===n){const t=new WeakMap;o={get:function(){return t.get(this)},set:function(e){i.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=n.set;o={...n,set:function(e){i.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,s,o)}}}function d({context:t,subscribe:e}){return(s,i)=>{"object"==typeof i?i.addInitializer((function(){new r(this,{context:t,callback:t=>{this[i.name]=t},subscribe:e})})):s.constructor.addInitializer((s=>{new r(s,{context:t,callback:t=>{s[i]=t},subscribe:e})}))}}var u=s(6752),p=s(7804);const b="important",m=" !"+b,f=(0,p.u$)(class extends p.WL{constructor(t){if(super(t),t.type!==p.OA.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(m);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?b:""):s[t]=i}}return u.c0}});var v=s(1956),g=function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r},y=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const x=Symbol(),k=t=>{class e extends t{getUid(){return(0,v.uid)()}constructor(...t){super(...t),this.linkedUid=this.getUid()}get linkedItemStyles(){return this.linkedItemsContext[this.linkedUid].styles}connectedCallback(){super.connectedCallback(),this.linkedUid in this.linkedItemsContext||(this.linkedItemsContext[this.linkedUid]={element:this,styles:{}})}firstUpdated(){this.linkedUid in this.linkedItemsContext&&(this.linkedItemsContext[this.linkedUid].element=this._rootElement??this)}disconnectedCallback(){super.disconnectedCallback(),this.linkedUid in this.linkedItemsContext&&delete this.linkedItemsContext[this.linkedUid]}}return g([(0,n.P)("*"),y("design:type",HTMLElement)],e.prototype,"_rootElement",void 0),g([d({context:x,subscribe:!0}),y("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e},C=t=>{class e extends t{constructor(){super(...arguments),this.linkedItemsContext=new Proxy({},{set:(t,e,s,i)=>{let n=s.styles,o=s.element;const r=this;return Reflect.set(t,e,{get styles(){return n},set styles(t){r.scheduleContextUpdate(),n=t},get element(){return o},set element(t){o=t}},i)}})}async scheduleContextUpdate(){this.linkedItemsContext={...this.linkedItemsContext}}get itemValues(){return Object.values(this.linkedItemsContext)}get itemKeys(){return Object.keys(this.linkedItemsContext)}get itemEntries(){return Object.entries(this.linkedItemsContext)}set itemEntries(t){this.linkedItemsContext=Object.fromEntries(t)}}return g([a({context:x}),y("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e};class w extends(k(i.WF)){constructor(){super(...arguments),this.hasTransition=!1}static{this.styles=[i.AH`
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
		`]}render(){return i.qy`<div class=${(t=>(this.hasTransition?"with-transition":void 0)??u.s6)()} style=${f(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}g([(0,n.MZ)({type:Boolean}),y("design:type",Object)],w.prototype,"hasTransition",void 0);class j extends Event{constructor(t){super("glass-move"),this.event=t}}class I extends(k(i.WF)){static{this.styles=i.AH`
		:host {
			display: contents;
		}

		.zooming-image-glass {
			all: inherit;
			position: absolute;
			display: block;
			z-index: 99;
			overflow: hidden;
		}
	`}getUid(){return"zooming-image-glass"}render(){return i.qy`<div
			class="zooming-image-glass"
            @pointermove=${t=>{this.dispatchEvent(new j(t))}}
			@mousemove=${t=>{this.dispatchEvent(new j(t))}}
			style=${f(this.linkedItemStyles)}
		>
			<slot></slot>
		</div>`}}var O=function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r},R=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class E extends(C(i.WF)){constructor(){super(...arguments),this.moveRatio=.15,this.backgroundShift=9,this.positionShift=34}static{this.styles=i.AH`
		:host {
			position: relative;
			display: block;
		}
	`}onMouseMove(t){const{top:e,left:s}=this.getBoundingClientRect(),i=t.x-s,n=t.pageY-e,{offsetWidth:o,offsetHeight:r}=this;let c=i/o*100,l=n/r*100;i>=.01*o&&(c+=this.moveRatio*c),n>=.01*r&&(l+=this.moveRatio*l),this.linkedItemsContext["zooming-image-glass"].styles={backgroundPositionX:`${String(c-this.backgroundShift)}%`,backgroundPositionY:`${String(l-this.backgroundShift)}%`,left:`${String(i-this.positionShift)}px`,top:`${String(n-this.positionShift)}px`}}connectedCallback(){super.connectedCallback(),this.addEventListener("mousemove",this.mouseMoveListener??=this.onMouseMove.bind(this)),this.addEventListener("pointermove",this.mouseMoveListener)}disconnectedCallback(){super.disconnectedCallback(),this.mouseMoveListener&&(this.removeEventListener("mousemove",this.mouseMoveListener),this.removeEventListener("pointermove",this.mouseMoveListener))}render(){return i.qy`
			<slot name="image"></slot>
			<slot name="glass"></slot>
		`}}O([(0,n.MZ)({type:Number}),R("design:type",Object)],E.prototype,"moveRatio",void 0),O([(0,n.MZ)({type:Number}),R("design:type",Object)],E.prototype,"backgroundShift",void 0),O([(0,n.MZ)({type:Number}),R("design:type",Object)],E.prototype,"positionShift",void 0)}}]);