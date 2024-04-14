/*! For license information please see 1907-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[1907,732],{1907:(t,e,i)=>{i.r(e),i.d(e,{CarouselItem:()=>M,PerspectiveCarouselComponent:()=>P});var s=i(2618),n=i(4791),o=i(6752);class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const a="important",l=" !"+a,c=(h=class extends r{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(l);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?a:""):i[t]=s}}return o.c0}},(...t)=>({_$litDirective$:h,values:t}));var h,d=i(732);const u=s.AH`
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
`;var p=i(2161);const m=()=>({...(0,p.resetInternalState)(),items:[]});class b extends Event{constructor(t,e,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=i??!1}}class g{constructor(t,e,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new b(this.context,this.t,this.subscribe))}}class f{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}class y extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class v extends f{constructor(t,e,i){super(void 0!==e.context?e.initialValue:i),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const i=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)i.has(t)||(i.add(t),e.dispatchEvent(new b(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new y(this.context))}}function I({context:t}){return(e,i)=>{const s=new WeakMap;if("object"==typeof i)return i.addInitializer((function(){s.set(this,new v(this,{context:t}))})),{get(){return e.get.call(this)},set(t){return s.get(this)?.setValue(t),e.set.call(this,t)},init(t){return s.get(this)?.setValue(t),t}};{e.constructor.addInitializer((e=>{s.set(e,new v(e,{context:t}))}));const n=Object.getOwnPropertyDescriptor(e,i);let o;if(void 0===n){const t=new WeakMap;o={get:function(){return t.get(this)},set:function(e){s.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=n.set;o={...n,set:function(e){s.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,i,o)}}}function S({context:t,subscribe:e}){return(i,s)=>{"object"==typeof s?s.addInitializer((function(){new g(this,{context:t,callback:t=>{this[s.name]=t},subscribe:e})})):i.constructor.addInitializer((i=>{new g(i,{context:t,callback:t=>{i[s]=t},subscribe:e})}))}}var x=i(1956),_=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},C=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const k=Symbol(),w=t=>{class e extends t{getUid(){return(0,x.uid)()}constructor(...t){super(...t),this.linkedUid=this.getUid()}get linkedItemStyles(){return this.linkedItemsContext[this.linkedUid].styles}connectedCallback(){super.connectedCallback(),this.linkedUid in this.linkedItemsContext||(this.linkedItemsContext[this.linkedUid]={element:this,styles:{}})}firstUpdated(){this.linkedUid in this.linkedItemsContext&&(this.linkedItemsContext[this.linkedUid].element=this._rootElement??this)}disconnectedCallback(){super.disconnectedCallback(),this.linkedUid in this.linkedItemsContext&&delete this.linkedItemsContext[this.linkedUid]}}return _([(0,n.P)("*"),C("design:type",HTMLElement)],e.prototype,"_rootElement",void 0),_([S({context:k,subscribe:!0}),C("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e},O=t=>{class e extends t{constructor(){super(...arguments),this.linkedItemsContext=new Proxy({},{set:(t,e,i,s)=>{let n=i.styles,o=i.element;const r=this;return Reflect.set(t,e,{get styles(){return n},set styles(t){r.scheduleContextUpdate(),n=t},get element(){return o},set element(t){o=t}},s)}})}async scheduleContextUpdate(){this.linkedItemsContext={...this.linkedItemsContext}}get itemValues(){return Object.values(this.linkedItemsContext)}get itemKeys(){return Object.keys(this.linkedItemsContext)}get itemEntries(){return Object.entries(this.linkedItemsContext)}set itemEntries(t){this.linkedItemsContext=Object.fromEntries(t)}}return _([I({context:k}),C("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e};class M extends(w(s.WF)){constructor(){super(...arguments),this.hasTransition=!1}static{this.styles=[s.AH`
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
		`]}render(){return s.qy`<div class=${(t=>(this.hasTransition?"with-transition":void 0)??o.s6)()} style=${c(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}_([(0,n.MZ)({type:Boolean}),C("design:type",Object)],M.prototype,"hasTransition",void 0);class j extends Event{constructor(){super("moving-to-center")}}class z extends Event{constructor(){super("moved-to-center")}}class E extends Event{constructor(t){super("moving-from-center"),this.elementIndex=t}}class R{constructor(t,e){this.callback=e,t.addController(this)}hostConnected(){window.addEventListener("resize",this.callback)}hostDisconnected(){window.removeEventListener("resize",this.callback)}}var $=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},D=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class P extends(O(s.WF)){constructor(){super(...arguments),this.imageSize="300px",this.margin="250px auto",this.startingItem=1,this.separation=175,this.separationMultiplier=.6,this.horizonOffset=0,this.horizonOffsetMultiplier=1,this.sizeMultiplier=.7,this.opacityMultiplier=.87,this.horizon=0,this.flankingItems=3,this.isVertical=!1,this.preloadImages=!1,this.forcedImageWidth=0,this.forcedImageHeight=0,this.animationLength=300,this.centralItemClassName="active",this.allowSwitchingOrientation=!1,this._internalState=m(),this._elementsState={}}static{this.styles=s.AH`
		:host {
			display: block;
			position: relative;
		}

		.images {
			width: 80%;
			padding: 0;
			margin: 0;
			list-style-type: none;
		}

		${u}

		.carousel-controls {
			position: absolute;
			left: 40%;
			transform: translateX(-50%);
			bottom: -5%;
			z-index: 99;
		}
	`}initializeCarouselData(){const t=window.getComputedStyle(this._parentElement);this._internalState.totalItems=this.itemValues.length,this._internalState.containerDimensions=[parseInt(t.width,10),parseInt(t.height,10)]}async forceImageDimensionsIfEnabled(){for(const t of this.itemValues)t.styles={display:"none"},this.forcedImageWidth&&this.forcedImageHeight&&(t.styles={...t.styles,width:`${String(this.forcedImageWidth)}px`,height:`${String(this.forcedImageHeight)}px`});await this.updateComplete}async setOriginalItemDimensions(){for(const[t,e]of this.itemEntries){const i=this._elementsState[t];(!i.originalWidth&&!i.originalHeight||this.forcedImageWidth>0||this.forcedImageHeight>0)&&(e.styles={...e.styles,display:""},await this.updateComplete,(!i.originalWidth||this.forcedImageWidth>0)&&(i.originalWidth=e.element.clientWidth),(!i.originalHeight||this.forcedImageHeight>0)&&(i.originalHeight=e.element.clientHeight),e.styles={...e.styles,display:"none"})}}calculatePositionProperties(){let t=this.horizonOffset,e=this.separation;for(let i=1;i<=this.flankingItems+2;i++){i>1&&(t*=this.horizonOffsetMultiplier,e*=this.separationMultiplier);const{distance:s,offset:n,opacity:o}=this._internalState.calculations[i-1];this._internalState.calculations[i]={distance:s+e,offset:n+t,opacity:o*this.opacityMultiplier}}this._internalState.calculations[this.flankingItems+1]={distance:0,offset:0,opacity:0}}async setupCarousel(){this.horizon||=this._internalState.containerDimensions[Number(!this.isVertical)]/2;for(const[t,e]of this.itemEntries){const i=this._elementsState[t];let s,n;this.isVertical?(s=this.horizon-Number(i.originalWidth)/2,n=this._internalState.containerDimensions[1]/2-Number(i.originalHeight)/2):(s=this._internalState.containerDimensions[0]/2-Number(i.originalWidth)/2,n=this.horizon-Number(i.originalHeight)/2),e.styles={...e.styles,left:`${String(s)}px`,top:`${String(n)}px`,visibility:"visible",position:"absolute",zIndex:"0",opacity:"0",display:""}}await this.updateComplete}performCalculations(t,e){const i=this._elementsState[this.itemKeys[t]],s=Math.abs(e),n=s<this.flankingItems+1?this._internalState.calculations[s]:this._internalState.calculations[this.flankingItems+1],o=this.sizeMultiplier**s,r=o*Number(i.originalWidth),a=o*Number(i.originalHeight),l=e<0?-n.distance:n.distance,c=this._internalState.containerDimensions[Number(this.isVertical)]/2;let h,d;this.isVertical?(d=this.horizon-n.offset-r/2,h=c+l-a/2):(d=c+l-r/2,h=this.horizon-n.offset-a/2),i.width=r,i.height=a,i.top=h,i.left=d,i.oldPosition??=0,i.depth=this.flankingItems+2-s,i.opacity=e?n.opacity:1}rotateCarousel(){this._internalState.currentlyMoving||(this._internalState.currentlyMoving=!0,this._internalState.itemsAnimating=0,this._internalState.carouselRotationsLeft++,this.itemKeys.forEach(((t,e)=>{const i=this._elementsState[t].currentPosition??NaN;let s=i+-Number(this._internalState.currentDirection);Math.abs(s)>this._internalState[s>0?"rightItemsCount":"leftItemsCount"]&&(s=-i,this._internalState.totalItems%2==0&&s++),this.moveItem(e,s)})))}itemAnimationComplete(t,e){const i=this._elementsState[this.itemKeys[t]];this._internalState.itemsAnimating--,i.currentPosition=e,0===e&&(this._internalState.currentCenterItem=t),this._internalState.itemsAnimating||(this._internalState.currentlyMoving=!1,--this._internalState.carouselRotationsLeft<=0?this._internalState.performingSetup?this._internalState.performingSetup=!1:(this.dispatchEvent(new j),this.dispatchEvent(new z)):this.rotateCarousel())}moveItem(t,e){const i=this.itemValues[t],s=this._elementsState[this.itemKeys[t]],n=()=>{i.styles={...i.styles,left:`${String(s.left)}px`,width:`${String(s.width)}px`,height:`${String(s.height)}px`,top:`${String(s.top)}px`,opacity:String(s.opacity)}};Math.abs(e)<=this.flankingItems+1?(this.performCalculations(t,e),this._internalState.itemsAnimating++,i.styles={...i.styles,zIndex:String(s.depth??"")},n(),setTimeout((()=>{this.itemAnimationComplete(t,e)}),this.animationLength)):(s.currentPosition=e,s.oldPosition||(this.performCalculations(t,e),n()))}setupStarterRotation(){this.startingItem||=Math.round(this._internalState.totalItems/2),this._internalState.rightItemsCount=Math.ceil((this._internalState.totalItems-1)/2),this._internalState.leftItemsCount=Math.floor((this._internalState.totalItems-1)/2),this._internalState.carouselRotationsLeft=1;let t=this.startingItem-1;const e=this.itemValues,i=i=>{e[t].styles={...e[t].styles,opacity:"1"},this.moveItem(t,i)};i(0);for(let e=1;e<=this._internalState.rightItemsCount;e++)t<this._internalState.totalItems-1?t++:t=0,i(e);t=this.startingItem-1;for(let e=-1;e>=-this._internalState.leftItemsCount;e--)t>0?t--:t=this._internalState.totalItems-1,i(e)}async initCarousel(){this._internalState=m();for(const t of this.itemKeys)t in this._elementsState||(this._elementsState[t]={});this.initializeCarouselData(),await this.forceImageDimensionsIfEnabled(),await this.setOriginalItemDimensions(),this.calculatePositionProperties(),await this.setupCarousel(),this.setupStarterRotation()}async scheduleUpdate(){const t=this.itemValues.map((t=>t.element));if(!t.every((t=>t instanceof M&&!t.hasUpdated)))return super.scheduleUpdate();for(const e of t)await e.updateComplete;return super.scheduleUpdate()}firstUpdated(){new R(this,this.initCarousel.bind(this)),this.initCarousel().catch((t=>{console.trace(t)}))}moveOnce(t){this._internalState.currentlyMoving||(t===d.CarouselDirection.BACKWARDS&&void 0!==this._internalState.currentCenterItem?this.dispatchEvent(new E(this._internalState.currentCenterItem-1<0?void 0:this._internalState.currentCenterItem-1)):t===d.CarouselDirection.FORWARDS&&void 0!==this._internalState.currentCenterItem?this.dispatchEvent(new E(this._internalState.currentCenterItem+1>this._internalState.totalItems?void 0:this._internalState.currentCenterItem+1)):this.dispatchEvent(new E(this._internalState.currentCenterItem)),this._internalState.currentDirection=t)}nextItem(){this.moveOnce(d.CarouselDirection.FORWARDS),this.rotateCarousel()}previousItem(){this.moveOnce(d.CarouselDirection.BACKWARDS),this.rotateCarousel()}switchOrientation(){this.allowSwitchingOrientation&&(this.isVertical=!this.isVertical,this.rotateCarousel())}render(){return s.qy`<div class="images" style=${c({height:this.imageSize,margin:this.margin})}>
				<slot></slot>
			</div>
			<div class="carousel-controls">
				<button
					class="carousel-controls__previous-button"
					@click="${()=>{this.previousItem()}}"
				></button>
				${this.allowSwitchingOrientation?s.qy`<button
							class="carousel-controls__perspective-button"
							@click="${()=>{this.switchOrientation()}}"
						>
							Switch
						</button>`:""}
				<button
					class="carousel-controls__next-button"
					@click="${()=>{this.nextItem()}}"
				></button>
			</div>`}}$([(0,n.MZ)(),D("design:type",Object)],P.prototype,"imageSize",void 0),$([(0,n.MZ)(),D("design:type",Object)],P.prototype,"margin",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"startingItem",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"separation",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"separationMultiplier",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"horizonOffset",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"horizonOffsetMultiplier",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"sizeMultiplier",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"opacityMultiplier",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"horizon",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"flankingItems",void 0),$([(0,n.MZ)({type:Boolean}),D("design:type",Object)],P.prototype,"isVertical",void 0),$([(0,n.MZ)({type:Boolean}),D("design:type",Object)],P.prototype,"preloadImages",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"forcedImageWidth",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"forcedImageHeight",void 0),$([(0,n.MZ)({type:Number}),D("design:type",Object)],P.prototype,"animationLength",void 0),$([(0,n.MZ)(),D("design:type",Object)],P.prototype,"centralItemClassName",void 0),$([(0,n.MZ)({type:Boolean}),D("design:type",Object)],P.prototype,"allowSwitchingOrientation",void 0),$([(0,n.P)(".images"),D("design:type",HTMLDivElement)],P.prototype,"_parentElement",void 0)}}]);