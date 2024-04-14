/*! For license information please see 831-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[831],{831:(t,e,i)=>{i.r(e),i.d(e,{ToastComponent:()=>P});var s=i(2618),n=i(4791),r=i(6201),o=i(6752),a=i(8504);class c{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class l{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((t=>this.q=t))}resume(){this.q?.(),this.Z=this.q=void 0}}var h=i(7804);const d=t=>!(0,a.sO)(t)&&"function"==typeof t.then,u=1073741823;class p extends r.Kq{constructor(){super(...arguments),this._$Cwt=u,this._$Cbt=[],this._$CK=new c(this),this._$CX=new l}render(...t){return t.find((t=>!d(t)))??o.c0}update(t,e){const i=this._$Cbt;let s=i.length;this._$Cbt=e;const n=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const o=e[t];if(!d(o))return this._$Cwt=t,o;t<s&&o===i[t]||(this._$Cwt=u,s=0,Promise.resolve(o).then((async t=>{for(;r.get();)await r.get();const e=n.deref();if(void 0!==e){const i=e._$Cbt.indexOf(o);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}})))}return o.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const v=(0,h.u$)(p);var E;!function(t){t[t.ENTERING=0]="ENTERING",t[t.ENTERED=1]="ENTERED",t[t.EXITING=2]="EXITING",t[t.EXITED=3]="EXITED"}(E||(E={}));class m extends r.WL{constructor(t){if(super(t),t.type!==r.OA.ATTRIBUTE||"class"!==t.name)throw new Error("The `transition` directive must be used in the `class` attribute")}render({transitionState:t}){if(this.previousState===t)return s.c0;switch(t){case E.ENTERING:return"enter-active enter";case E.EXITING:return"leave-active leave";case E.ENTERED:return"enter-done";case E.EXITED:return"leave-done"}}update(t,[e]){const{transitionState:i,controller:s}=e;if(t.type!==r.OA.ATTRIBUTE||!(t.element instanceof HTMLElement))return this.render(e);const n=t.element;switch(i){case E.ENTERING:n.classList.add("enter-active"),n&&n.scrollTop,s.scheduleNextState(E.ENTERED);break;case E.ENTERED:n.classList.remove("enter-active");break;case E.EXITING:n.classList.add("leave-active"),n&&n.scrollTop,s.scheduleNextState(E.EXITED);break;case E.EXITED:n.classList.remove("leave-active")}return this.render(e)}}class f extends r.WL{render({template:t,transitionState:e}){return e===E.EXITED?s.s6:t}}class y{constructor(t,e,i){this.host=t,this.duration=e,this.isVisible=i,t.addController(this),this.initializeDirectivePromise()}initializeDirectivePromise(){this.directivePromise=new Promise((t=>{this.directivePromiseResolver=t}))}hostConnected(){this.transitionState=this.isVisible()?E.ENTERED:E.EXITED}hostDisconnected(){window.clearTimeout(this.timeoutId)}setTransitionState(t){this.transitionState=t}scheduleNextState(t){this.timeoutId=window.setTimeout((()=>{this.setTransitionState(t),this.host.requestTransitionDisplayUpdate()}),this.duration())}invalidatePromise(t){this.directivePromiseResolver&&(this.directivePromiseResolver(t),this.initializeDirectivePromise())}async transitionDirectivePromise(){return await this.directivePromise,void 0===this.transitionState?s.s6:T({controller:this,transitionState:this.transitionState})}transitionDirective(){return v(this.transitionDirectivePromise(),"")}transitionDisplayDirective(t,e){if(void 0===this.transitionState)return s.s6;!e||this.transitionState!==E.EXITED&&this.transitionState!==E.EXITING?e||this.transitionState!==E.ENTERED&&this.transitionState!==E.ENTERING||(this.transitionState=E.EXITING):this.transitionState=E.ENTERING;const i=C({controller:this,transitionState:this.transitionState,template:t});return this.invalidatePromise(i),i}}const T=(0,r.u$)(m),C=(0,r.u$)(f);var D=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},R=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let w=class extends s.WF{constructor(){super(...arguments),this.isActive=!1,this.duration=300,this.transitionController=new y(this,(()=>this.duration),(()=>this.isActive))}static{this.styles=s.AH`
		:host {
			display: contents;
		}
	`}initializeDirectivePromise(){this.directivePromise=new Promise((t=>{this.directivePromiseResolver=t}))}async invalidateCache(){this.initializeDirectivePromise();const t=await this.directivePromise;this.transitionController.invalidatePromise(t)}directive(){const t=this.transitionController.transitionDirective();return this.directivePromiseResolver&&(this.directivePromiseResolver(t),this.initializeDirectivePromise()),t}displayDirective(t,e){return this.transitionController.transitionDisplayDirective(t,e)}requestTransitionDisplayUpdate(){this.dispatchEvent(new CustomEvent("transition-display-update-request"))}render(){return s.qy`<slot></slot>`}};D([(0,n.MZ)({type:Boolean}),R("design:type",Object)],w.prototype,"isActive",void 0),D([(0,n.MZ)({type:Number}),R("design:type",Object)],w.prototype,"duration",void 0),w=D([(0,n.EM)("transition-component")],w);var b=i(4489),_=i(1956),N=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},I=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class P extends s.WF{constructor(){super(...arguments),this.isOpen=!1,this.transitionDuration=300,this._transition=(0,b._)()}static{this.styles=s.AH`
		:host {
			display: contents;
		}
	`}onOpenValueChange(){this.autoCloseDelay&&this.isOpen&&(this._timeoutRef=window.setTimeout((()=>{this.close()}),this.autoCloseDelay))}close(){this.isOpen=!1,window.clearTimeout(this._timeoutRef),this._timeoutRef=void 0,this.dispatchEvent(new CustomEvent("transition-display-directive-init")),this._transition.value?.invalidateCache().catch((t=>{console.trace(t)}))}updated(t){for(const e of t.keys())"isOpen"===e&&this.onOpenValueChange()}transitionDirective(){return(0,_.assertNonUndefined)(this._transition.value),this._transition.value.directive()}connectedCallback(){super.connectedCallback(),this.onOpenValueChange()}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this._timeoutRef)}firstUpdated(){this.requestUpdate(),this.dispatchEvent(new CustomEvent("transition-display-directive-init"))}render(){return s.qy`
			<transition-component
				?isActive=${this.isOpen}
				.duration=${this.transitionDuration}
				@transition-display-update-request=${()=>{this.requestUpdate()}}
				${(0,b.K)(this._transition)}
			>
				${this._transition.value?.displayDirective(s.qy`<slot></slot>`,this.isOpen)}
			</transition-component>
		`}}N([(0,n.MZ)({type:Boolean}),I("design:type",Object)],P.prototype,"isOpen",void 0),N([(0,n.MZ)({type:Number}),I("design:type",Number)],P.prototype,"autoCloseDelay",void 0),N([(0,n.MZ)({type:Number}),I("design:type",Object)],P.prototype,"transitionDuration",void 0)}}]);