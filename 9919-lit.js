/*! For license information please see 9919-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[9919],{9919:(t,e,s)=>{s.r(e),s.d(e,{GalleryCarouselComponent:()=>R,GalleryCarouselItem:()=>I});var i=s(2618),n=s(4791),r=s(6752);const o=t=>(...e)=>({_$litDirective$:t,values:e});class l{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const c=o(class extends l{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return r.c0}});class a extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}class h{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new a(this.context,this.t,this.subscribe))}}class d{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class u extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class p extends d{constructor(t,e,s){super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)s.has(t)||(s.add(t),e.dispatchEvent(new a(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new u(this.context))}}function b({context:t}){return(e,s)=>{const i=new WeakMap;if("object"==typeof s)return s.addInitializer((function(){i.set(this,new p(this,{context:t}))})),{get(){return e.get.call(this)},set(t){return i.get(this)?.setValue(t),e.set.call(this,t)},init(t){return i.get(this)?.setValue(t),t}};{e.constructor.addInitializer((e=>{i.set(e,new p(e,{context:t}))}));const n=Object.getOwnPropertyDescriptor(e,s);let r;if(void 0===n){const t=new WeakMap;r={get:function(){return t.get(this)},set:function(e){i.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=n.set;r={...n,set:function(e){i.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,s,r)}}}function g({context:t,subscribe:e}){return(s,i)=>{"object"==typeof i?i.addInitializer((function(){new h(this,{context:t,callback:t=>{this[i.name]=t},subscribe:e})})):s.constructor.addInitializer((s=>{new h(s,{context:t,callback:t=>{s[i]=t},subscribe:e})}))}}const y="important",f=" !"+y,m=o(class extends l{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(f);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?y:""):s[t]=i}}return r.c0}});var v=s(1956),x=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},k=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const w=Symbol(),C=t=>{class e extends t{getUid(){return(0,v.uid)()}constructor(...t){super(...t),this.linkedUid=this.getUid()}get linkedItemStyles(){return this.linkedItemsContext[this.linkedUid].styles}connectedCallback(){super.connectedCallback(),this.linkedUid in this.linkedItemsContext||(this.linkedItemsContext[this.linkedUid]={element:this,styles:{}})}firstUpdated(){this.linkedUid in this.linkedItemsContext&&(this.linkedItemsContext[this.linkedUid].element=this._rootElement??this)}disconnectedCallback(){super.disconnectedCallback(),this.linkedUid in this.linkedItemsContext&&delete this.linkedItemsContext[this.linkedUid]}}return x([(0,n.P)("*"),k("design:type",HTMLElement)],e.prototype,"_rootElement",void 0),x([g({context:w,subscribe:!0}),k("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e},_=t=>{class e extends t{constructor(){super(...arguments),this.linkedItemsContext=new Proxy({},{set:(t,e,s,i)=>{let n=s.styles,r=s.element;const o=this;return Reflect.set(t,e,{get styles(){return n},set styles(t){o.scheduleContextUpdate(),n=t},get element(){return r},set element(t){r=t}},i)}})}async scheduleContextUpdate(){this.linkedItemsContext={...this.linkedItemsContext}}get itemValues(){return Object.values(this.linkedItemsContext)}get itemKeys(){return Object.keys(this.linkedItemsContext)}get itemEntries(){return Object.entries(this.linkedItemsContext)}set itemEntries(t){this.linkedItemsContext=Object.fromEntries(t)}}return x([b({context:w}),k("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e};class j extends(C(i.WF)){constructor(){super(...arguments),this.hasTransition=!1}static{this.styles=[i.AH`
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
		`]}render(){return i.qy`<div class=${(t=>(this.hasTransition?"with-transition":void 0)??r.s6)()} style=${m(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}function O(t,e,s){return t?e(t):s?.(t)}x([(0,n.MZ)({type:Boolean}),k("design:type",Object)],j.prototype,"hasTransition",void 0);class I extends(C(i.WF)){static{this.styles=i.AH`
		:host {
			display: contents;
		}

		.gallery-carousel-item {
			all: inherit;
			display: inline-block;
			width: 100%;
			height: 100%;
		}

		::slotted(*) {
			width: 100%;
			height: 100%;
		}
	`}render(){return i.qy`<li class="gallery-carousel-item" style=${m(this.linkedItemStyles)}>
			<slot></slot>
		</li>`}}var $=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},L=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class R extends(_(i.WF)){constructor(){super(...arguments),this.smoothDiametralTransition=!1,this.current=1,this.frameGap=20,this.animationDuration=500,this.showArrows=!1,this.showToggles=!1,this._galleryLeft=-100*this.current,this._isAnimating=!1}static{this.styles=i.AH`
		:host {
			position: relative;
		}

		.gallery {
			position: relative;
			overflow: hidden;
			width: 100%;
			height: 100%;
		}

		.gallery-list {
			position: relative;
			width: inherit;
			height: inherit;
			margin: 0;
			padding: 0;
			list-style-type: none;
			font-size: 0;
			white-space: nowrap;
			line-height: 1;
			z-index: 10;
		}

		.gallery-item {
			display: inline-block;
			width: 100%;
			height: 100%;
		}

		.gallery-toggles {
			position: relative;
			z-index: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style-type: none;
			padding: 0;
			gap: 0.3rem;
		}

		.gallery-toggle {
			width: 10px;
			height: 10px;
			cursor: pointer;
			border: 1px solid #e2e2e2;
			border-radius: 50%;
		}

		.gallery-toggle--active {
			background-color: #2390bb;
		}

		.gallery-controls {
			position: absolute;
			z-index: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			left: -10%;
			right: -10%;
			top: 0;
			bottom: 0;
		}

		.gallery-controls__next-button {
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 7.5px 0 7.5px 13px;
			border-color: transparent transparent transparent #fff;
			background: none;
			cursor: pointer;
		}

		.gallery-controls__previous-button {
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 7.5px 13px 7.5px 0;
			border-color: transparent #fff transparent transparent;
			background: none;
			cursor: pointer;
		}
	`}get itemsLength(){return this.itemKeys.length}firstUpdated(){const t=this._assignedElements;t[0].before(t[t.length-1].cloneNode(!0)),t[t.length-1].after(t[0].cloneNode(!0))}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._interval)}checkCurrentSlide(t){return 0===t||t>this.itemsLength-2?0===t?this.itemsLength-2:1:t}slideTo(t,e,s){this._isAnimating=!0;const i=new Date;this._interval=window.setInterval((()=>{const n=Math.min(((new Date).getTime()-i.getTime())/this.animationDuration,1);this._galleryLeft=t+Math.abs(e-t)*n**2*(t>e?-1:1),1===n&&(window.clearInterval(this._interval),this._isAnimating=!1,this.current=this.checkCurrentSlide(s),this._galleryLeft=-100*this.current)}),this.frameGap)}changeCurrentSlide(t){if(this.itemKeys.length<=1)return;this.smoothDiametralTransition||(t=this.checkCurrentSlide(t));const e=-100*t;this._isAnimating||this._galleryLeft===e||(this.current=t,this.slideTo(this._galleryLeft,e,t))}render(){return i.qy`
			<div class="gallery">
				<ul
					class="gallery-list"
					style=${m({left:`${String(this._galleryLeft)}%`})}
				>
					<slot></slot>
				</ul>
			</div>
			${O(this.showArrows,(()=>i.qy`<div class="gallery-controls">
						<button
							@click=${()=>{this.changeCurrentSlide(this.current-1)}}
							class="gallery-controls__previous-button"
						></button>
						<button
							@click=${()=>{this.changeCurrentSlide(this.current+1)}}
							class="gallery-controls__next-button"
						></button>
					</div>`))}
			${O(this.showToggles&&this.itemsLength,(()=>i.qy`<ul class="gallery-toggles">
						${function*(t,e){if(void 0!==t){let s=0;for(const i of t)yield e(i,s++)}}(function*(t,e,s=1){const i=void 0===e?0:t;e??=t;for(let t=i;s>0?t<e:e<t;t+=s)yield t}(this._assignedElements.length?this.itemsLength-2:this.itemsLength),(t=>i.qy`<li
									@click=${()=>{this.changeCurrentSlide(t+1)}}
									class="gallery-toggle ${c({"gallery-toggle--active":t===this.current-1})}"
								></li>`))}
					</ul>`))}
		`}}$([(0,n.MZ)({type:Boolean}),L("design:type",Object)],R.prototype,"smoothDiametralTransition",void 0),$([(0,n.MZ)({type:Number}),L("design:type",Object)],R.prototype,"current",void 0),$([(0,n.MZ)({type:Number}),L("design:type",Object)],R.prototype,"frameGap",void 0),$([(0,n.MZ)({type:Number}),L("design:type",Object)],R.prototype,"animationDuration",void 0),$([(0,n.MZ)({type:Boolean}),L("design:type",Object)],R.prototype,"showArrows",void 0),$([(0,n.MZ)({type:Boolean}),L("design:type",Object)],R.prototype,"showToggles",void 0),$([(0,n.wk)(),L("design:type",Object)],R.prototype,"_galleryLeft",void 0),$([(0,n.KN)({flatten:!0}),L("design:type",Array)],R.prototype,"_assignedElements",void 0)}}]);