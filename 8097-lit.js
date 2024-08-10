/*! For license information please see 8097-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[8097],{8097:(t,e,s)=>{s.r(e),s.d(e,{ImageMagnifierComponent:()=>H,ImageMagnifierGlass:()=>z});var i=s(2618),n=s(4791),o=s(6752);const{I:r}=o.ge,c=t=>(...e)=>({_$litDirective$:t,values:e});class l{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const h=(t,e)=>{const s=t._$AN;if(void 0===s)return!1;for(const t of s)t._$AO?.(e,!1),h(t,e);return!0},a=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===s?.size)},d=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),f(e)}};function u(t){void 0!==this._$AN?(a(this),this._$AM=t,d(this)):this._$AM=t}function p(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)h(i[t],!1),a(i[t]);else null!=i&&(h(i,!1),a(i));else h(this,t)}const f=t=>{2==t.type&&(t._$AP??=p,t._$AQ??=u)};class b extends l{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),d(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(h(this,t),a(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class g{}const m=new WeakMap,v=c(class extends b{render(t){return o.s6}update(t,[e]){const s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),o.s6}rt(t){if("function"==typeof this.Y){const e=this.ht??globalThis;let s=m.get(e);void 0===s&&(s=new WeakMap,m.set(e,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?m.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var y=s(1956);class x extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}class k{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new x(this.context,this.t,this.subscribe))}}class C{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class $ extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class _ extends C{constructor(t,e,s){super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)s.has(t)||(s.add(t),e.dispatchEvent(new x(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new $(this.context))}}function I({context:t}){return(e,s)=>{const i=new WeakMap;if("object"==typeof s)return s.addInitializer((function(){i.set(this,new _(this,{context:t}))})),{get(){return e.get.call(this)},set(t){return i.get(this)?.setValue(t),e.set.call(this,t)},init(t){return i.get(this)?.setValue(t),t}};{e.constructor.addInitializer((e=>{i.set(e,new _(e,{context:t}))}));const n=Object.getOwnPropertyDescriptor(e,s);let o;if(void 0===n){const t=new WeakMap;o={get:function(){return t.get(this)},set:function(e){i.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=n.set;o={...n,set:function(e){i.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,s,o)}}}function w({context:t,subscribe:e}){return(s,i)=>{"object"==typeof i?i.addInitializer((function(){new k(this,{context:t,callback:t=>{this[i.name]=t},subscribe:e})})):s.constructor.addInitializer((s=>{new k(s,{context:t,callback:t=>{s[i]=t},subscribe:e})}))}}const A="important",M=" !"+A,j=c(class extends l{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(M);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?A:""):s[t]=i}}return o.c0}});var S=function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r},O=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const R=Symbol(),U=t=>{class e extends t{getUid(){return(0,y.uid)()}constructor(...t){super(...t),this.linkedUid=this.getUid()}get linkedItemStyles(){return this.linkedItemsContext[this.linkedUid].styles}connectedCallback(){super.connectedCallback(),this.linkedUid in this.linkedItemsContext||(this.linkedItemsContext[this.linkedUid]={element:this,styles:{}})}firstUpdated(){this.linkedUid in this.linkedItemsContext&&(this.linkedItemsContext[this.linkedUid].element=this._rootElement??this)}disconnectedCallback(){super.disconnectedCallback(),this.linkedUid in this.linkedItemsContext&&delete this.linkedItemsContext[this.linkedUid]}}return S([(0,n.P)("*"),O("design:type",HTMLElement)],e.prototype,"_rootElement",void 0),S([w({context:R,subscribe:!0}),O("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e},P=t=>{class e extends t{constructor(){super(...arguments),this.linkedItemsContext=new Proxy({},{set:(t,e,s,i)=>{let n=s.styles,o=s.element;const r=this;return Reflect.set(t,e,{get styles(){return n},set styles(t){r.scheduleContextUpdate(),n=t},get element(){return o},set element(t){o=t}},i)}})}async scheduleContextUpdate(){this.linkedItemsContext={...this.linkedItemsContext}}get itemValues(){return Object.values(this.linkedItemsContext)}get itemKeys(){return Object.keys(this.linkedItemsContext)}get itemEntries(){return Object.entries(this.linkedItemsContext)}set itemEntries(t){this.linkedItemsContext=Object.fromEntries(t)}}return S([I({context:R}),O("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e};class E extends(U(i.WF)){constructor(){super(...arguments),this.hasTransition=!1}static{this.styles=[i.AH`
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
		`]}render(){return i.qy`<div class=${(t=>(this.hasTransition?"with-transition":void 0)??o.s6)()} style=${j(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}S([(0,n.MZ)({type:Boolean}),O("design:type",Object)],E.prototype,"hasTransition",void 0);class z extends(U(i.WF)){static{this.styles=[i.AH`
			:host {
				display: contents;
			}

			.magnifier-glass {
				all: inherit;
				display: revert;
				position: absolute;
				border-radius: 50%;
				background-repeat: no-repeat;
			}
		`]}getUid(){return"magnifier-glass"}render(){return i.qy`<div class="magnifier-glass" style=${j(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}var Y=function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r},q=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class H extends(P(i.WF)){constructor(){super(...arguments),this.zoomScale=2,this.autoConfigureGlassSource=!1,this.imageSource="",this._magnifierRef=new g}static{this.styles=i.AH`
		:host {
			position: relative;
			display: block;
		}
	`}get magnifierImage(){const t=this._magnifierRef.value;return(0,y.assertNonUndefined)(t),t}moveMagnifier(t,e){const s=this.magnifierImage,i=this.linkedItemsContext["magnifier-glass"],n=i.element.offsetWidth/2,o=i.element.offsetHeight/2;t>s.offsetWidth?t=s.offsetWidth:t<0&&(t=0),e>s.offsetHeight?e=s.offsetHeight:e<0&&(e=0),i.styles={...i.styles,left:`${String(t-n)}px`,top:`${String(e-o)}px`,backgroundPosition:"-"+String(t*this.zoomScale-n)+"px -"+String(e*this.zoomScale-o)+"px"}}onMouseMove(t){t.preventDefault();const e=this.magnifierImage.getBoundingClientRect();this.moveMagnifier(t.pageX-e.left-window.scrollX,t.pageY-e.top-window.scrollY)}firstUpdated(){const t=this.linkedItemsContext["magnifier-glass"];t.element.addEventListener("mousemove",this.mouseMoveListener??=t=>{this.onMouseMove(t)}),t.element.addEventListener("pointermove",this.mouseMoveListener),t.styles={backgroundImage:`url("${this.imageSource}")`,backgroundSize:`${String(this.magnifierImage.offsetWidth*this.zoomScale)}px ${String(this.magnifierImage.offsetHeight*this.zoomScale)}px`}}render(){return i.qy`<div
				class="magnifier__image"
				@mousemove=${t=>{this.onMouseMove(t)}}
				${v(this._magnifierRef)}
			>
				<slot name="image"></slot>
			</div>
			<slot name="glass"></slot>`}}Y([(0,n.MZ)({type:Number}),q("design:type",Object)],H.prototype,"zoomScale",void 0),Y([(0,n.MZ)({type:Boolean}),q("design:type",Object)],H.prototype,"autoConfigureGlassSource",void 0),Y([(0,n.MZ)({type:String}),q("design:type",Object)],H.prototype,"imageSource",void 0)}}]);