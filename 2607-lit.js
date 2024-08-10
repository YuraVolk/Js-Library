/*! For license information please see 2607-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[2607,4512,7845,7369,4988,9750,2131],{2131:(t,e,s)=>{s.r(e),s.d(e,{HeaderComponent:()=>r});var i=s(2618),n=s(4791);let r=class extends i.WF{static{this.styles=i.AH`
		.navigation {
			display: flex;
			align-items: center;
			justify-content: space-around;
			height: 50px;
			box-sizing: border-box;
			color: #fff;
			font-family:
				Helvetica,
				Segoe UI,
				Arial,
				sans-serif;
			padding: 2rem 1rem 1rem;
		}

		@media (max-width: 700px) {
			.navigation {
				height: auto;
				justify-content: flex-start;
				flex-direction: column;
			}
		}

		.navigation__name {
			font-size: 24px;
			text-transform: uppercase;
		}

		.navigation-links {
			display: flex;
			gap: 0.8rem;
		}

		.navigation-link {
			font-size: 16px;
			color: #fff;
			text-decoration: none;
			transition: color 0.1s ease-in;
		}

		.navigation-link:hover {
			color: #57c9e5;
		}
	`}render(){return i.qy`
			<nav class="navigation">
				<span class="navigation__name">JS Components Library</span>
				<ul class="navigation-links">
					<a href="#" class="navigation-link">Components</a>
					<a href="#" class="navigation-link">About</a>
					<a href="${window.location.href.replace(/\/lit\//g,"/vue/")}" class="navigation-link">Vue Version</a>
					<a href="${window.location.href.replace(/\/lit\//g,"/react/")}" class="navigation-link">React Version</a>
				</ul>
				<a class="navigation-icon" href="#">
					<svg height="24" viewBox="0 0 24 24" width="24">
						<path
							clip-rule="evenodd"
							d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
							fill="currentColor"
							fill-rule="evenodd"
						></path>
					</svg>
				</a>
			</nav>
		`}};r=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}([(0,n.EM)("header-component")],r)},1762:(t,e,s)=>{s.d(e,{i:()=>i});const i=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,s),s)},1124:(t,e,s)=>{s.d(e,{K:()=>n});var i=s(1762);function n(t){return(e,s)=>{const{slot:n,selector:r}=t??{},o="slot"+(n?`[name=${n}]`:":not([name])");return(0,i.i)(e,s,{get(){const e=this.renderRoot?.querySelector(o),s=e?.assignedElements(t)??[];return void 0===r?s:s.filter((t=>t.matches(r)))}})}}},1895:(t,e,s)=>{s.d(e,{P:()=>n});var i=s(1762);function n(t,e){return(s,n,r)=>{const o=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof n?s:r??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return(0,i.i)(s,n,{get(){let s=t.call(this);return void 0===s&&(s=o(this),(null!==s||this.hasUpdated)&&e.call(this,s)),s}})}return(0,i.i)(s,n,{get(){return o(this)}})}}},842:(t,e,s)=>{s.d(e,{mN:()=>w,AH:()=>h,W3:()=>b,Ec:()=>E});const i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class a{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const h=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new a(s,t,r)},l=(t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),n=i.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,t.appendChild(e)}},c=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:d,defineProperty:p,getOwnPropertyDescriptor:u,getOwnPropertyNames:$,getOwnPropertySymbols:f,getPrototypeOf:_}=Object,g=globalThis,m=g.trustedTypes,y=m?m.emptyScript:"",A=g.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},E=(t,e)=>!d(t,e),S={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=S){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&p(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);n.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??S}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...$(t),...f(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??E)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,A?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.0.4")},6752:(t,e,s)=>{s.d(e,{XX:()=>D,c0:()=>S,qy:()=>E});const i=globalThis,n=i.trustedTypes,r=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,h="?"+a,l=`<${h}>`,c=document,d=()=>c.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,$="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,g=/>/g,m=RegExp(`>|${$}(?:([^\\s"'>=/]+)(${$}*=${$}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,A=/"/g,v=/^(?:script|style|textarea|title)$/i,b=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),E=b(1),S=(b(2),Symbol.for("lit-noChange")),w=Symbol.for("lit-nothing"),C=new WeakMap,P=c.createTreeWalker(c,129);function x(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==r?r.createHTML(e):e}const U=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",h=f;for(let e=0;e<s;e++){const s=t[e];let c,d,p=-1,u=0;for(;u<s.length&&(h.lastIndex=u,d=h.exec(s),null!==d);)u=h.lastIndex,h===f?"!--"===d[1]?h=_:void 0!==d[1]?h=g:void 0!==d[2]?(v.test(d[2])&&(n=RegExp("</"+d[2],"g")),h=m):void 0!==d[3]&&(h=m):h===m?">"===d[0]?(h=n??f,p=-1):void 0===d[1]?p=-2:(p=h.lastIndex-d[2].length,c=d[1],h=void 0===d[3]?m:'"'===d[3]?A:y):h===A||h===y?h=m:h===_||h===g?h=f:(h=m,n=void 0);const $=h===m&&t[e+1].startsWith("/>")?" ":"";r+=h===f?s+l:p>=0?(i.push(c),s.slice(0,p)+o+s.slice(p)+a+$):s+a+(-2===p?e:$)}return[x(t,r+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class H{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,l=0;const c=t.length-1,p=this.parts,[u,$]=U(t,e);if(this.el=H.createElement(u,s),P.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=P.nextNode())&&p.length<c;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(o)){const e=$[l++],s=i.getAttribute(t).split(a),n=/([.?@])?(.*)/.exec(e);p.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?N:"?"===n[1]?k:"@"===n[1]?j:M}),i.removeAttribute(t)}else t.startsWith(a)&&(p.push({type:6,index:r}),i.removeAttribute(t));if(v.test(i.tagName)){const t=i.textContent.split(a),e=t.length-1;if(e>0){i.textContent=n?n.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],d()),P.nextNode(),p.push({type:2,index:++r});i.append(t[e],d())}}}else if(8===i.nodeType)if(i.data===h)p.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(a,t+1));)p.push({type:7,index:r}),t+=a.length-1}r++}}static createElement(t,e){const s=c.createElement("template");return s.innerHTML=t,s}}function O(t,e,s=t,i){if(e===S)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=p(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=O(t,n._$AS(t,e.values),n,i)),e}class R{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??c).importNode(e,!0);P.currentNode=i;let n=P.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new T(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new z(n,this,t)),this._$AV.push(e),a=s[++o]}r!==a?.index&&(n=P.nextNode(),r++)}return P.currentNode=c,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),p(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==S&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>u(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==w&&p(this._$AH)?this._$AA.nextSibling.data=t:this.T(c.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=H.createElement(x(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new R(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new H(t)),e}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new T(this.S(d()),this.S(d()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class M{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=O(this,t,e,0),r=!p(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=O(this,i[s+o],e,o),a===S&&(a=this._$AH[o]),r||=!p(a)||a!==this._$AH[o],a===w?t=w:t!==w&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class N extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}class k extends M{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}}class j extends M{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??w)===S)return;const s=this._$AH,i=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==w&&(s===w||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const L=i.litHtmlPolyfillSupport;L?.(H,T),(i.litHtmlVersions??=[]).push("3.1.2");const D=(t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new T(e.insertBefore(d(),t),t,void 0,s??{})}return n._$AI(t),n}},4791:(t,e,s)=>{s.d(e,{EM:()=>i,MZ:()=>a,P:()=>l.P,KN:()=>c.K,wk:()=>h});const i=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var n=s(842);const r={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec},o=(t=r,e,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function a(t){return(e,s)=>"object"==typeof s?o(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function h(t){return a({...t,state:!0,attribute:!1})}var l=s(1895),c=s(1124)},2618:(t,e,s)=>{s.d(e,{WF:()=>r,AH:()=>i.AH,qy:()=>n.qy});var i=s(842),n=s(6752);class r extends i.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,n.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.c0}}r._$litElement$=!0,r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:r});const o=globalThis.litElementPolyfillSupport;o?.({LitElement:r}),(globalThis.litElementVersions??=[]).push("4.0.4")}}]);