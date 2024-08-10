/*! For license information please see 6554-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[6554,732],{6554:(t,e,s)=>{s.r(e),s.d(e,{CarouselItem:()=>O,MenuCarouselComponent:()=>U});var i=s(2618),o=s(4791),n=s(1956),r=s(732);const c=i.AH`
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
`;var l=s(4236);class a extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}class h{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new a(this.context,this.t,this.subscribe))}}class d{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class u extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class p extends d{constructor(t,e,s){super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)s.has(t)||(s.add(t),e.dispatchEvent(new a(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new u(this.context))}}function b({context:t}){return(e,s)=>{const i=new WeakMap;if("object"==typeof s)return s.addInitializer((function(){i.set(this,new p(this,{context:t}))})),{get(){return e.get.call(this)},set(t){return i.get(this)?.setValue(t),e.set.call(this,t)},init(t){return i.get(this)?.setValue(t),t}};{e.constructor.addInitializer((e=>{i.set(e,new p(e,{context:t}))}));const o=Object.getOwnPropertyDescriptor(e,s);let n;if(void 0===o){const t=new WeakMap;n={get:function(){return t.get(this)},set:function(e){i.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=o.set;n={...o,set:function(e){i.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,s,n)}}}function y({context:t,subscribe:e}){return(s,i)=>{"object"==typeof i?i.addInitializer((function(){new h(this,{context:t,callback:t=>{this[i.name]=t},subscribe:e})})):s.constructor.addInitializer((s=>{new h(s,{context:t,callback:t=>{s[i]=t},subscribe:e})}))}}var m=s(6752);const f=t=>(...e)=>({_$litDirective$:t,values:e});class g{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const x="important",v=" !"+x,w=f(class extends g{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(v);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?x:""):s[t]=i}}return m.c0}});var _=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r},k=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const C=Symbol(),R=t=>{class e extends t{getUid(){return(0,n.uid)()}constructor(...t){super(...t),this.linkedUid=this.getUid()}get linkedItemStyles(){return this.linkedItemsContext[this.linkedUid].styles}connectedCallback(){super.connectedCallback(),this.linkedUid in this.linkedItemsContext||(this.linkedItemsContext[this.linkedUid]={element:this,styles:{}})}firstUpdated(){this.linkedUid in this.linkedItemsContext&&(this.linkedItemsContext[this.linkedUid].element=this._rootElement??this)}disconnectedCallback(){super.disconnectedCallback(),this.linkedUid in this.linkedItemsContext&&delete this.linkedItemsContext[this.linkedUid]}}return _([(0,o.P)("*"),k("design:type",HTMLElement)],e.prototype,"_rootElement",void 0),_([y({context:C,subscribe:!0}),k("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e},I=t=>{class e extends t{constructor(){super(...arguments),this.linkedItemsContext=new Proxy({},{set:(t,e,s,i)=>{let o=s.styles,n=s.element;const r=this;return Reflect.set(t,e,{get styles(){return o},set styles(t){r.scheduleContextUpdate(),o=t},get element(){return n},set element(t){n=t}},i)}})}async scheduleContextUpdate(){this.linkedItemsContext={...this.linkedItemsContext}}get itemValues(){return Object.values(this.linkedItemsContext)}get itemKeys(){return Object.keys(this.linkedItemsContext)}get itemEntries(){return Object.entries(this.linkedItemsContext)}set itemEntries(t){this.linkedItemsContext=Object.fromEntries(t)}}return _([b({context:C}),k("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e};class O extends(R(i.WF)){constructor(){super(...arguments),this.hasTransition=!1}static{this.styles=[i.AH`
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
		`]}render(){return i.qy`<div class=${(t=>(this.hasTransition?"with-transition":void 0)??m.s6)()} style=${w(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}_([(0,o.MZ)({type:Boolean}),k("design:type",Object)],O.prototype,"hasTransition",void 0);class j{constructor(t,e){this.callback=e,t.addController(this)}hostConnected(){window.addEventListener("resize",this.callback)}hostDisconnected(){window.removeEventListener("resize",this.callback)}}class S{constructor(t,e){this.host=t,this.options=e,this.repetitionsLeft=e.autoplay?.totalRepetitions??0,t.addController(this)}abortTimeout(){window.clearTimeout(this.timeout),this.repetitionsLeft&&(this.timeout=window.setTimeout((()=>{this.options.autoplay?.direction===r.CarouselDirection.BACKWARDS?this.options.previousSlide():this.options.autoplay?.direction===r.CarouselDirection.FORWARDS&&this.options.nextSlide(),this.repetitionsLeft--,this.host.requestUpdate(),this.abortTimeout()}),this.options.autoplay?.delay))}hostConnected(){this.abortTimeout()}hostDisconnected(){window.clearTimeout(this.timeout)}}function M(t,e,s){return t?e(t):s?.(t)}const P=f(class extends g{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return m.c0}});var T=s(3899),$=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r},A=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class D extends l.MenuCarouselInternalItem{constructor(t){super(t.element),this.elementData=t}initStyles(){return this.elementData.styles={position:"absolute"},this}setMovingStyle(t,e,s){this.elementData.styles={...this.elementData.styles,width:String(this.width)+"px",left:String(t)+"px",top:String(e)+"px",zIndex:String(100*s|0)}}}class U extends(I(i.WF)){constructor(){super(...arguments),this.yPos=112,this.yRadius=128,this.farScale=.9,this.speed=.11,this.isVertical=!1,this.allowSwitchingOrientation=!1,this.showArrows=!1,this.showToggles=!1,this._currentItem=0,this._items=[],this._rotation=Math.PI/2,this._destRotation=Math.PI/2}static{this.styles=[c,i.AH`
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

			.carousel-controls__toggles {
				z-index: 999;
				top: calc(80% + 40px);
			}
		`]}playFrame(){const t=this._destRotation-this._rotation;Math.abs(t)<=0?(this._rotation=this._destRotation,window.clearTimeout(this._frameTimer),this._frameTimer=void 0):(this._rotation+=t*this.speed,this.scheduleNextFrame()),this.carouselRender()}scheduleNextFrame(){this._frameTimer=window.setTimeout((()=>{this.playFrame()}),32)}go(t){this._destRotation+=2*Math.PI/this._items.length*t,void 0===this._frameTimer&&this.scheduleNextFrame()}previousSlide(){this.go(r.CarouselDirection.BACKWARDS),this._currentItem++}nextSlide(){this.go(r.CarouselDirection.FORWARDS),this._currentItem--}switchOrientation(){this.isVertical=!this.isVertical,this.onResize()}rotateItem(t,e){const s=this._items[t],i=Math.sin(e),o=this.farScale+(1-this.farScale)*(i+1)*.5;(0,n.assertNonUndefinedDevOnly)(this.xPos),(0,n.assertNonUndefinedDevOnly)(this.xRadius),s.moveTo(this.xPos+o*(Math.cos(e)*this.xRadius-s.fullWidth/2),this.yPos+o*i*(this.yRadius??1)+this.yPos/2.3,o)}carouselRender(){const t=this._items.length,e=2*Math.PI/t;let s=this._rotation;for(let i=0;i<t;i++)this.rotateItem(i,s),s+=e}setupCarousel(){this.xPos??=.5*this.offsetWidth,this.yPos=.1*this.offsetHeight,this[this.isVertical?"yRadius":"xRadius"]??=this.offsetWidth/2.3,this[this.isVertical?"xRadius":"yRadius"]=this.offsetHeight/6,this._items.splice(0,this._items.length);for(const t of this.itemValues)t.element.removeAttribute("style"),this._items.push(new D(t).initStyles());this.carouselRender()}onResize(){this[this.isVertical?"yRadius":"xRadius"]=void 0,this.xPos=void 0,this.setupCarousel()}firstUpdated(){this.setupCarousel(),new j(this,this.onResize.bind(this)),this._autoplayController=new S(this,{autoplay:this.autoplay,nextSlide:this.nextSlide.bind(this),previousSlide:this.previousSlide.bind(this)})}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this._frameTimer)}render(){const{realCurrentItem:t,childrenLength:e,getCurrentItem:s}=(0,T.getCurrentItemInfo)({childrenLength:this.itemKeys.length,currentItem:this._currentItem});return i.qy`
			<slot></slot>
			${M(this.allowSwitchingOrientation||this.showArrows,(()=>i.qy`<div class="carousel-controls">
						${M(this.showArrows,(()=>i.qy`<button
									class="carousel-controls__previous-button"
									@click="${()=>{this._autoplayController.abortTimeout(),this.nextSlide()}}"
								></button>`))}
						${M(this.allowSwitchingOrientation,(()=>i.qy`<button
									class="carousel-controls__perspective-button"
									@click=${()=>{this._autoplayController.abortTimeout(),this.switchOrientation()}}
								>
									Switch
								</button>`))}
						${M(this.showArrows,(()=>i.qy`<button
									class="carousel-controls__next-button"
									@click="${()=>{this._autoplayController.abortTimeout(),this.previousSlide()}}"
								></button>`))}
					</div>`))}
			${M(this.showToggles,(()=>i.qy`
					<ul class="carousel-controls__toggles">
						${function*(t,e){if(void 0!==t){let s=0;for(const i of t)yield e(i,s++)}}(function*(t,e,s=1){const i=void 0===e?0:t;e??=t;for(let t=i;s>0?t<e:e<t;t+=s)yield t}(e),(o=>i.qy`<li
									class="carousel-controls__toggle ${P({"carousel-controls__toggle--active":o===t})}"
									@click=${()=>{this._autoplayController.abortTimeout();const t=s(o)%e-this._currentItem%e;this.go(t),this._currentItem+=t}}
								></li>`))}
					</ul>
				`))}
		`}}$([(0,o.MZ)({type:Number}),A("design:type",Number)],U.prototype,"xPos",void 0),$([(0,o.MZ)({type:Number}),A("design:type",Object)],U.prototype,"yPos",void 0),$([(0,o.MZ)({type:Number}),A("design:type",Number)],U.prototype,"xRadius",void 0),$([(0,o.MZ)({type:Number}),A("design:type",Number)],U.prototype,"yRadius",void 0),$([(0,o.MZ)({type:Number}),A("design:type",Object)],U.prototype,"farScale",void 0),$([(0,o.MZ)({type:Number}),A("design:type",Object)],U.prototype,"speed",void 0),$([(0,o.MZ)({type:Boolean}),A("design:type",Object)],U.prototype,"isVertical",void 0),$([(0,o.MZ)({type:Boolean}),A("design:type",Object)],U.prototype,"allowSwitchingOrientation",void 0),$([(0,o.MZ)({type:Boolean}),A("design:type",Object)],U.prototype,"showArrows",void 0),$([(0,o.MZ)({type:Boolean}),A("design:type",Object)],U.prototype,"showToggles",void 0),$([(0,o.MZ)({type:Object}),A("design:type",Object)],U.prototype,"autoplay",void 0),$([(0,o.wk)(),A("design:type",Object)],U.prototype,"_currentItem",void 0)}}]);