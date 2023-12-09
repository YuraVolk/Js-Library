/*! For license information please see bundle.js.LICENSE.txt */
!function(){"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var o=i.getElementsByTagName("script");if(o.length)for(var s=o.length-1;s>-1&&!e;)e=o[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"}();const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(i,t,o)},a=(t,o)=>{if(i)t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of o){const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:p,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,g=globalThis,m=g.trustedTypes,y=m?m.emptyScript:"",v=g.reactiveElementPolyfillSupport,b=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!c(t,e),x={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&p(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const n=o?.call(this);s.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=o,this[o]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??w)(o?s:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[b("elementProperties")]=new Map,S[b("finalized")]=new Map,v?.({ReactiveElement:S}),(g.reactiveElementVersions??=[]).push("2.0.1");const $=globalThis,C=$.trustedTypes,k=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,R="?"+A,j=`<${R}>`,E=document,L=()=>E.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,P="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,H=/>/g,M=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,B=/"/g,U=/^(?:script|style|textarea|title)$/i,V=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),W=V(1),F=(V(2),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),q=new WeakMap,Y=E.createTreeWalker(E,129);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",r=z;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,p=0;for(;p<i.length&&(r.lastIndex=p,l=r.exec(i),null!==l);)p=r.lastIndex,r===z?"!--"===l[1]?r=N:void 0!==l[1]?r=H:void 0!==l[2]?(U.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=M):void 0!==l[3]&&(r=M):r===M?">"===l[0]?(r=s??z,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?M:'"'===l[3]?B:D):r===B||r===D?r=M:r===N||r===H?r=z:(r=M,s=void 0);const d=r===M&&t[e+1].startsWith("/>")?" ":"";n+=r===z?i+j:c>=0?(o.push(a),i.slice(0,c)+O+i.slice(c)+A+d):i+A+(-2===c?e:d)}return[X(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class J{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=J.createElement(l,i),Y.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=Y.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(O)){const e=c[n++],i=o.getAttribute(t).split(A),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?it:"?"===r[1]?ot:"@"===r[1]?st:et}),o.removeAttribute(t)}else t.startsWith(A)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(U.test(o.tagName)){const t=o.textContent.split(A),e=t.length-1;if(e>0){o.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],L()),Y.nextNode(),a.push({type:2,index:++s});o.append(t[e],L())}}}else if(8===o.nodeType)if(o.data===R)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(A,t+1));)a.push({type:7,index:s}),t+=A.length-1}s++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,o){if(e===F)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=T(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=Z(t,s._$AS(t,e.values),s,o)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??E).importNode(e,!0);Y.currentNode=o;let s=Y.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new tt(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new nt(s,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(s=Y.nextNode(),n++)}return Y.currentNode=E,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),T(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==G&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Q(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new J(t)),e}T(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new tt(this.k(L()),this.k(L()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=Z(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const o=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=Z(this,o[i+r],e,r),a===F&&(a=this._$AH[r]),n||=!T(a)||a!==this._$AH[r],a===G?t=G:t!==G&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class st extends et{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??G)===F)return;const i=this._$AH,o=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==G&&(i===G||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=$.litHtmlPolyfillSupport;rt?.(J,tt),($.litHtmlVersions??=[]).push("3.0.1");class at extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new tt(e.insertBefore(L(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const lt=globalThis.litElementPolyfillSupport;lt?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.0.1");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},pt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:w},dt=(t=pt,e,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t)}}throw Error("Unsupported decorator location: "+o)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return ht({...t,state:!0,attribute:!1})}const ft=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function gt(t,e){return(i,o,s)=>{const n=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:r}="object"==typeof o?i:s??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ft(i,o,{get(){if(e){let e=t.call(this);return void 0===e&&(e=n(this),r.call(this,e)),e}return n(this)}})}return ft(i,o,{get(){return n(this)}})}}let mt;function yt(t){return(e,i)=>ft(e,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}function vt(t){return(e,i)=>{const{slot:o,selector:s}=t??{},n="slot"+(o?`[name=${o}]`:":not([name])");return ft(e,i,{get(){const e=this.renderRoot?.querySelector(n),i=e?.assignedElements(t)??[];return void 0===s?i:i.filter((t=>t.matches(s)))}})}}const bt=t=>(...e)=>({_$litDirective$:t,values:e});class _t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const wt="important",xt=" !"+wt,St=bt(class extends _t{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(const t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const o=e[t];if(null!=o){this.ut.add(t);const e="string"==typeof o&&o.endsWith(xt);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?wt:""):i[t]=o}}return F}});function $t(t){if(null==t)throw new Error(`The value ${String(t)} is nullable, but it must not be`)}var Ct=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},kt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ot=class extends at{constructor(){super(...arguments),this._elements=[],this._headerHeights=[],this._widths=[],this.opened=[],this.multiple=!1}static{this.styles=r`
    .accordions {
      margin: 0;
      padding-left: 0;
      list-style-type: none;
    }

    .accordion {
      width: 100%;
      overflow: hidden;
      background-color: #000000;
      border-radius: .4rem;
      -webkit-transition: max-height 0.4s linear;
      transition: max-height 0.4s linear;
    }

    .accordion:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    .accordion__content {
      color: #fff;
      font-size: 15px;
      padding: 2rem;
      -webkit-transition: max-height 0.2s linear forwards;
      transition: max-height 0.2s linear forwards;
    }

    .accordion__heading {
      position: relative;
      z-index: 1;
      display: block;
      font-size: 1.6rem;
      color: rgba(255,255,255,.8);
      text-decoration: none;
      background-color: #000000;
      padding: 0.25rem 1rem;
      text-transform: uppercase;
      font-family: Segoe UI;
    }
  `}connectedCallback(){super.connectedCallback(),this._elements.length=this._widths.length=0,this._elements=Array.from(this.children).filter((t=>"LI"===t.nodeName&&2===t.children.length)).map((t=>[t.children[0],t.children[1]])),this.opened=this.opened.length===this._elements.length?[...this.opened]:this._elements.map((()=>!1))}disconnectedCallback(){this._elements.length=this._widths.length=0,super.disconnectedCallback()}firstUpdated(){this.updateWidths(),this.opened=this.opened.length===this._elements.length?[...this.opened]:this._elements.map((()=>!1))}updated(){this.updateWidths()}updateWidths(){this._widths.length=this._headerHeights.length=0,$t(this.shadowRoot);for(const t of Array.from(this.shadowRoot.children[0].children).filter((t=>2===t.children.length)))this._widths.push(t.children[1].offsetHeight),this._headerHeights.push(t.children[0].offsetHeight)}_clickAccordion(t){this.updateWidths(),this.opened=this.opened.map(((e,i)=>t===i?!e:!!this.multiple&&e))}render(){return W`
      <ul class="accordions">
        ${[...this._elements].map(((t,e)=>{const[i,o]=t,s=this.opened[e]?{cursor:"n-resize",maxHeight:this._widths[e]+this._headerHeights[e]+"px"}:{cursor:"pointer",maxHeight:`${this._headerHeights[e]}px`};return W`<li class="accordion" style=${St(s)}>
              <header
                class="accordion__heading"
                @click=${{handleEvent:()=>{this._clickAccordion(e)}}}
              >
                ${i}
              </header>
              <footer class="according__content">${o}</footer>
            </li>`})).filter(Boolean)}
      </ul>
    `}};var At;Ct([ut(),kt("design:type",Array)],Ot.prototype,"_elements",void 0),Ct([ut(),kt("design:type",Array)],Ot.prototype,"_headerHeights",void 0),Ct([ut(),kt("design:type",Array)],Ot.prototype,"_widths",void 0),Ct([ht({type:Array,converter:{fromAttribute:t=>{if(null===t)return[];const e=t.split(",").map((t=>"true"===t||"1"===t));return e},toAttribute:t=>t.join(",")}}),kt("design:type",Array)],Ot.prototype,"opened",void 0),Ct([ht({type:Boolean}),kt("design:type",Object)],Ot.prototype,"multiple",void 0),Ot=Ct([ct("accordion-component")],Ot),function(t){t[t.BACKWARDS=-1]="BACKWARDS",t[t.STILL=0]="STILL",t[t.FORWARDS=1]="FORWARDS"}(At||(At={}));const Rt=r`
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
`;var jt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Et=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Lt=class extends at{constructor(){super(...arguments),this._elements=[],this._currentItem=0,this.isHorizontal=!0}static{this.styles=r`
    .carousel {
      display: flex;
      width: auto;
      height: 100%;
      flex-direction: column;
      align-items: center;
      perspective: 500px;
      overflow: hidden;
      padding: 20px;
    }

    .carousel--vertical {
      margin-top: 10%;
      height: 33vw;
      overflow: visible;
    }

    .carousel * {
      margin: 0 auto;
      flex: 0 0 auto;
    }

    .carousel-items {
      width: 40%;
      margin: 0;
      transform-style: preserve-3d;
      transition: all 0.5s;
      padding: 0;
      list-style-type: none;
    }

    .carousel-item {
      position: relative;
      width: 100%;
      height: auto;
      padding: 0;
      opacity: 0.9999;
      backface-visibility: hidden;
    }

    .carousel-item:not(:first-of-type) {
      position: absolute;
      left: 0;
      top: 0;
      margin: 0 auto;
      padding: 0 auto;
    }

    .carousel-item > * {
      width: 100%;
      height: 100%;
    }

    ${Rt}
  `}connectedCallback(){super.connectedCallback(),this._elements=Array.from(this.children),this.boundEventListener=this.setupCarousel.bind(this),window.addEventListener("resize",this.boundEventListener)}disconnectedCallback(){super.disconnectedCallback(),this._elements.length=0,window.removeEventListener("resize",this.boundEventListener)}nextSlide(){this.rotateCarousel(this._currentItem+1)}previousSlide(){this.rotateCarousel(this._currentItem-1)}rotateCarousel(t){const e=Array.from(this._carouselItem).length,i=2*Math.PI/e;this._carouselWrap.style.transform=`rotate${this.isHorizontal?"Y":"X"}(${t*-i}rad)`,this._currentItem=t}switchPerspective(){this.isHorizontal=!this.isHorizontal,this.setupCarousel()}firstUpdated(){this.setupCarousel()}setupCarousel(){const t=Array.from(this._carouselItem),e=t.length,i=2*Math.PI/e,o=parseFloat(getComputedStyle(t[0])[this.isHorizontal?"width":"height"])/(2*Math.tan(Math.PI/e));this._carouselWrap.style.transformOrigin=`50% 50% ${-o}px`;for(let s=0;s<e;s++)t[s].style.padding="0",0!==s&&(t[s].style.transformOrigin=`50% 50% ${-o}px`,t[s].style.transform=`rotate${this.isHorizontal?"Y":"X"}(${s*i}rad)`);this.rotateCarousel(this._currentItem)}render(){return W`
      <div>
        <div class="carousel ${this.isHorizontal?"":"carousel--vertical"}">
          <ul class="carousel-items">
            ${this._elements.map((t=>W`<li class="carousel-item">${t}</li>`))}
          </ul>
        </div>
        <div class="carousel-controls">
          <button
            class="carousel-controls__previous-button"
            @click="${()=>{this.previousSlide()}}"
          ></button>
          <button
            class="carousel-controls__perspective-button"
            @click="${()=>{this.switchPerspective()}}"
          >
            switch
          </button>
          <button
            class="carousel-controls__next-button"
            @click="${()=>{this.nextSlide()}}"
          ></button>
        </div>
      </div>
    `}};jt([ut(),Et("design:type",Array)],Lt.prototype,"_elements",void 0),jt([ut(),Et("design:type",Object)],Lt.prototype,"_currentItem",void 0),jt([gt(".carousel-items"),Et("design:type",HTMLElement)],Lt.prototype,"_carouselWrap",void 0),jt([(t,e)=>ft(t,e,{get(){return(this.renderRoot??(mt??=document.createDocumentFragment())).querySelectorAll(".carousel-item")}}),Et("design:type",Array)],Lt.prototype,"_carouselItem",void 0),jt([ht({type:Boolean,converter:{fromAttribute:t=>Boolean(Number(t)),toAttribute:t=>String(t)}}),Et("design:type",Object)],Lt.prototype,"isHorizontal",void 0),Lt=jt([ct("backface-carousel-component")],Lt);var Tt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},It=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Pt{constructor(t){this.image=t,this.fullWidth=t.clientWidth,this.fullHeight=t.clientHeight,t.style.position="absolute",this.moveTo=function(t,e,i){this.width=this.fullWidth*i,this.height=this.fullHeight*i,this.x=t,this.y=e,this.scale=i;const o=this.image.style;o.width=this.width+"px",o.left=t+"px",o.top=e+"px",o.zIndex=String(100*i|0)}}}let zt=class extends at{constructor(){super(...arguments),this._rotation=Math.PI/2,this._destRotation=Math.PI/2,this._frameTimer=0,this.yPos=112,this.yRadius=128,this.farScale=.9,this.speed=.11}static{this.styles=Rt}rotateItem(t,e){const i=this._items[t],o=Math.sin(e),s=this.farScale+(1-this.farScale)*(o+1)*.5;this.xPos,this.xRadius,i.moveTo(this.xPos+s*(Math.cos(e)*this.xRadius-i.fullWidth/2),this.yPos+s*o*this.yRadius,s)}carouselRender(){const t=this._items.length,e=2*Math.PI/t;let i=this._rotation;for(let o=0;o<t;o++)this.rotateItem(o,i),i+=e}scheduleNextFrame(){this._frameTimer=window.setTimeout((()=>{this.playFrame()}),32)}playFrame(){const t=this._destRotation-this._rotation;Math.abs(t)<=0?(this._rotation=this._destRotation,window.clearTimeout(this._frameTimer),this._frameTimer=0):(this._rotation+=t*this.speed,this.scheduleNextFrame()),this.carouselRender()}go(t){this._destRotation+=2*Math.PI/this._items.length*t,0===this._frameTimer&&this.scheduleNextFrame()}firstUpdated(){this.setupCarousel()}setupCarousel(){const t=this.querySelector(".carousel");if(t){this._carousel=t,this._images=Array.from(this.querySelectorAll(".carousel-item"));for(const t of this._images)t.removeAttribute("style");this.xPos??=.5*this._carousel.offsetWidth,this.yPos=.1*this._carousel.offsetHeight,this.xRadius??=this._carousel.offsetWidth/2.3,this.yRadius=this._carousel.offsetHeight/6,this._items=this._images.map((t=>new Pt(t))),this.carouselRender()}}connectedCallback(){super.connectedCallback(),this.boundEventListener=()=>{this.xRadius=this.xPos=void 0,this.setupCarousel()},window.addEventListener("resize",this.boundEventListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.boundEventListener)}goBack(){this.go(-1)}goForward(){this.go(1)}render(){return W`
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
    `}};Tt([ut(),It("design:type",HTMLElement)],zt.prototype,"_carousel",void 0),Tt([ut(),It("design:type",Array)],zt.prototype,"_images",void 0),Tt([ut(),It("design:type",Object)],zt.prototype,"_rotation",void 0),Tt([ut(),It("design:type",Object)],zt.prototype,"_destRotation",void 0),Tt([ut(),It("design:type",Object)],zt.prototype,"_frameTimer",void 0),Tt([ut(),It("design:type",Array)],zt.prototype,"_items",void 0),Tt([ht({type:Number}),It("design:type",Number)],zt.prototype,"xPos",void 0),Tt([ht({type:Number}),It("design:type",Object)],zt.prototype,"yPos",void 0),Tt([ht({type:Number}),It("design:type",Number)],zt.prototype,"xRadius",void 0),Tt([ht({type:Number}),It("design:type",Object)],zt.prototype,"yRadius",void 0),Tt([ht({type:Number}),It("design:type",Object)],zt.prototype,"farScale",void 0),Tt([ht({type:Number}),It("design:type",Object)],zt.prototype,"speed",void 0),zt=Tt([ct("menu-carousel-component")],zt);var Nt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Mt=class extends at{constructor(){super(...arguments),this.options=[],this._isListOpened=!1,this._filteredOptions=[]}static{this.styles=r`
    .autocomplete-items {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 9999;
      overflow-y: scroll;
      width: 100%;
      max-height: 200px;
      padding-left: 0;
      margin: 0;
      list-style-type: none;
    }

    .autocomplete-item {
      padding: 10px;
      cursor: pointer;
      background-color: #ffffff;
      border-bottom: 1px solid #d4d4d4;
    }

    .autocomplete-wrap {
      position: relative;
    }
  `}onInputHandler(t){if(!(t instanceof HTMLInputElement&&t.value))return void(this._isListOpened=!1);const e=t.value.toLowerCase().trim(),i=[];for(const t of this.options){const o=t.toLowerCase();console.log(o.startsWith(e)),o!==e&&o.startsWith(e)&&i.push(t)}i.length&&(this._isListOpened=!0,this._filteredOptions=i)}setInputValue(t){const e=this.querySelector("input");e&&(e.value=t,this._isListOpened=!1,this._filteredOptions=[])}connectedCallback(){super.connectedCallback(),this.boundInputEventListener=({target:t})=>{t&&this.onInputHandler(t)},console.log(this.querySelector("input")),this.querySelector("input")?.addEventListener("input",this.boundInputEventListener)}disconnectedCallback(){super.disconnectedCallback(),this.querySelector("input")?.removeEventListener("input",this.boundInputEventListener)}render(){return W`
      <div class="autocomplete-wrap">
        <slot></slot>
        ${this._isListOpened&&this._filteredOptions.length?W`<ul class="autocomplete-items">
          ${this._filteredOptions.map((t=>W`<li class="autocomplete-item" @click="${()=>{this.setInputValue(t)}}">${t}</li>`))}
        </ul>`:""}
      </div>
    `}};Nt([ht({type:Array,converter:{fromAttribute:t=>null===t?[]:t.split(",").map((t=>t.trim())),toAttribute:t=>t.join(",")}}),Ht("design:type",Array)],Mt.prototype,"options",void 0),Nt([ut(),Ht("design:type",Object)],Mt.prototype,"_isListOpened",void 0),Nt([ut(),Ht("design:type",Array)],Mt.prototype,"_filteredOptions",void 0),Mt=Nt([ct("autocomplete-list-component")],Mt);var Dt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Bt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Ut extends at{constructor(){super(...arguments),this.strings=[],this.repetitions=1}static{this.validateElement=t=>Number(Array.from(t.childNodes).some((t=>t.nodeType===Node.TEXT_NODE)))^Number(t.childElementCount>0)}*generateNextStrings(t){const e=function*(t,e){const i=[...e.strings];let o=1,s=0,n=t;for(;s<e.repetitions;)s++,yield[n,i[o]],n=i[o],o=(o+1)%i.length;return[n,n]}(t,this);return yield*e,["",""]}splitTextAlgorithm(t){for(const e of this._elements){const i=e.textContent??"";e.textContent="";for(const t of i)e.insertAdjacentHTML("beforeend",`<span>${t}</span>`);if(t&&t.length>i.length)for(let o=0;o<t.length-i.length;o++)e.insertAdjacentElement("beforeend",document.createElement("span"))}}onInterval(){const{done:t,value:e}=this.generator.next();t?(window.clearTimeout(this.windowInterval),this.windowInterval=void 0):this.triggerTextAnimation(...e)}get _elements(){return Array.from(this.querySelectorAll("pre")).filter(Ut.validateElement)}connectedCallback(){super.connectedCallback();const t=this._elements[0].textContent??"";this.splitText?.(),this.generator=this.generateNextStrings(t),this.windowInterval=window.setTimeout((()=>{this.onInterval()}),this.interval)}disconnectedCallback(){super.disconnectedCallback(),this.generator.return(["",""]),clearInterval(this.windowInterval)}render(){return W`<slot></slot>`}}Dt([ht({type:Array,converter:{fromAttribute:t=>t?.split(";")??[],toAttribute:t=>t.join(";")}}),Bt("design:type",Array)],Ut.prototype,"strings",void 0),Dt([ht({type:Number}),Bt("design:type",Object)],Ut.prototype,"repetitions",void 0);var Vt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Wt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ft=class extends Ut{constructor(){super(...arguments),this.interval=3e3,this.typingSpeed=45,this.characters=["!",'"',"#","$","%","*","0","1",":",";","?","@","[","]","\\","~","'","/","{","}","|","&","(",")","-","<",">"]}splitText(t){super.splitTextAlgorithm(t)}cipherLetter(t){const{element:e,newLetter:i,delayed:o,i:s}=t,n=Math.round(Math.random()*((o?44:14)-6)+6);let r=!1,a=0;const l=1e3*Math.random()+(o?this.typingSpeed*s:0);return setTimeout((()=>{for(;a<=n;){const t=this.characters;!function(o){setTimeout((()=>{r||(e.textContent=t[Math.floor(Math.random()*t.length)]),o>=n&&(r=!0,e.textContent=i,e.removeAttribute("data-ciphering-text-in-progress"))}),65*o)}(a++)}}),l),65*n+65}triggerTextAnimation(t,e){const i=Array.from(this.querySelectorAll("pre"));for(const e of i)e.textContent=t;this.splitText(e);const o=[];for(const t of i)Array.from(t.children).forEach(((t,i)=>{t.textContent!==e[i]&&(t.setAttribute("data-ciphering-text-in-progress",""),o.push(this.cipherLetter({element:t,newLetter:e[i],i:i,delayed:0===t.textContent?.length})))}));setTimeout((()=>{this.onInterval()}),Math.max(...o)+this.interval)}};Vt([ht({type:Number}),Wt("design:type",Object)],Ft.prototype,"interval",void 0),Vt([ht({type:Number}),Wt("design:type",Object)],Ft.prototype,"typingSpeed",void 0),Vt([ht({type:Array,converter:{fromAttribute:t=>t?.split("")??["!",'"',"#","$","%","*","0","1",":",";","?","@","[","]","\\","~","'","/","{","}","|","&","(",")","-","<",">"],toAttribute:t=>t.join("")}}),Wt("design:type",Array)],Ft.prototype,"characters",void 0),Ft=Vt([ct("ciphering-text-component")],Ft);const Gt=t=>4===t.length;var qt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Yt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Xt=class extends at{constructor(){super(...arguments),this.imageUrl="",this.width=245,this.height=245,this.backgroundColor=[0,0,0,1],this.rgba=[0,0,0,1]}static{this.rgbaConverter={fromAttribute:t=>{const e=t?.split(",");return e&&4===e.length&&e.every((t=>"number"==typeof t))?e.map(Number):[0,0,0,100]},toAttribute:t=>t.join(",")}}static{this.styles=r`
    .wrap {
      max-width: 670px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 0.3rem;
    }

    .color-picker-wrap {
      max-width: var(--width);
      max-height: var(--height);
      border: 3px solid #000000;
      background-color: #000000;
    }

    .color-picker {
      max-width: inherit;
      max-height: inherit;
    }

    .color-picker__canvas {
      cursor: crosshair;
    }

    .current-color-wrap {
      width: calc(var(--width) / 2);
      height: calc(var(--height) / 2);
      border: 3px solid #000000;
    }

    .current-color {
      width: 100%;
      height: 100%;
    }

    .info {
      width: 235px;
    }

    p {
      margin: 3px 0;
    }

    #opacity-range {
      display: block;
      padding: 2rem 0;
    }
  `}convertOpacityToBackground(){const t=1-this.rgba[3]/100,e=this.rgba[3]/100;return this.rgba.map(((i,o)=>3===o?1:Math.round(t*this.backgroundColor[o]+e*i*100)))}getHex(){return"#"+this.convertOpacityToBackground().slice(0,-1).map((t=>Number(t).toString(16).padStart(2,"0"))).join("")}getRGB(){return`rgb(${this.convertOpacityToBackground().slice(0,-1).join(", ")})`}getRGBA(){return`rgba(${this.rgba.join(", ")})`}initColorPicker(){this.canvasElement.then((t=>{const e=t.getContext("2d");$t(e);const i=new Image(this.width,this.height);i.src=this.imageUrl,i.onload=()=>{e.drawImage(i,0,0,i.width,i.height)},t.addEventListener("mousedown",(t=>{const i=[...e.getImageData(t.offsetX,t.offsetY,1,1).data.slice(0,-1),this.rgba[3]];Gt(i)&&(this.rgba=i)}))})).catch((t=>{console.log(t)}))}connectedCallback(){super.connectedCallback(),this.initColorPicker(),this.opacityRange.then((t=>t._onUpdateListener=t=>{const e=[...this.rgba.slice(0,-1),t];Gt(e)&&(this.rgba=e)})).catch((t=>{console.log(t)}))}render(){return W`
      <div class="wrap" style="--width: ${this.width}px; --height: ${this.height}px">
        <div class="color-picker-wrap">
          <div class="color-picker">
            <canvas class="color-picker__canvas" width="${this.width}" height="${this.height}"></canvas>
          </div>
        </div>
        <div class="info">
          <div class="current-color-wrap">
            <div class="current-color" style=${St({backgroundColor:this.getRGB()})}></div>
          </div>
          <range-input-component
            id="opacity-range"
            maximum="1"
            step="0.01"
            ticks="0,100"
            label="Opacity:"
            defaultValue="1"
          ></range-input-component>
          <p>Hex code: ${this.getHex()}</p>
          <p>RGBA: ${this.getRGBA()}</p>
          <p>RGB: ${this.getRGB()}</p>
        </div>
      </div>
    `}};qt([ht({type:String}),Yt("design:type",Object)],Xt.prototype,"imageUrl",void 0),qt([ht({type:Number}),Yt("design:type",Object)],Xt.prototype,"width",void 0),qt([ht({type:Number}),Yt("design:type",Object)],Xt.prototype,"height",void 0),qt([ht({converter:Xt.rgbaConverter}),Yt("design:type",Array)],Xt.prototype,"backgroundColor",void 0),qt([ht({converter:Xt.rgbaConverter}),Yt("design:type",Array)],Xt.prototype,"rgba",void 0),qt([yt("#opacity-range"),Yt("design:type",Promise)],Xt.prototype,"opacityRange",void 0),qt([yt("canvas"),Yt("design:type",Promise)],Xt.prototype,"canvasElement",void 0),Xt=qt([ct("color-picker-component")],Xt);const Kt=r`
  width: var(--thumbSize, 15px);
  height: var(--thumbSize, 15px);
  background-color: var(--thumbColor, #f50);
  border-radius: 50%;
  border: none;
  transition: 0.35s ease-in-out;
`;function Jt(t,e,i){return t?e(t):i?.(t)}const Zt=bt(class extends _t{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const o=!!e[t];o===this.it.has(t)||this.st?.has(t)||(o?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return F}});var Qt=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},te=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ee=class extends at{constructor(){super(...arguments),this.uiRangeID=crypto.randomUUID(),this.minimum=0,this.maximum=100,this.defaultValue=0,this.step=1,this.ticks=[],this.label="",this.thumbSize="15px",this.trackColor="#ccc",this.thumbColor="#f50",this.hoverColor="rgba(255,85,0, .3)",this.activeColor="rgba(255,85,0, .6)",this.valueSize="25px",this.hideValue=!1,this.allSameLine=!1,this._value=0,this._gradientStyle={}}setGradientStyle(){const t=this._value/this.maximum*100;this._gradientStyle={background:`linear-gradient(to right, ${this.thumbColor} ${t}%, ${this.trackColor} ${t}%)`}}onValueChange(t){t.target,HTMLInputElement,this._value=Number(t.target.value),this.setGradientStyle(),this._onUpdateListener?.(this._value)}changeValue(t){this._value=t,this.rangeSlider.then((e=>e.value=String(t))).catch((t=>{console.error(t)})),this.setGradientStyle()}connectedCallback(){super.connectedCallback(),this.boundEventListener=t=>{this.onValueChange(t)},this._value=this.defaultValue,this.rangeSlider.then((t=>{this.setGradientStyle(),t.addEventListener("input",this.boundEventListener)})).catch((t=>{console.error(t)}))}disconnectedCallback(){this.rangeSlider.then((t=>{t.removeEventListener("input",this.boundEventListener)})).catch((t=>{console.error(t)})),super.disconnectedCallback()}render(){return W`
			<div class="wrap" style="${["thumbSize","trackColor","thumbColor","hoverColor","activeColor","valueSize"].map((t=>`--${String(t)}: ${String(this[t])}`)).join("; ")}">
				<div class="range-slider ${Zt({"range-slider--one-lined":this.allSameLine})}">
					<label class="range-slider__label" for="${this.uiRangeID}">${this.label}</label>
					<input
						type="range"
						min="${this.minimum}"
						max="${this.maximum}"
						value="${this._value}"
						id="${this.uiRangeID}"
						step="${this.step}"
						class="range-slider__input"
						style=${St(this._gradientStyle)}
					/>
					${this.ticks.length?W`
								<ul class="range-slider-ticks">
									${this.ticks.map((t=>W`<li class="range-slider-ticks__tick" style="--value: ${t}%">${t}</li>`))}
								</ul>
						  `:""}
				</div>
				${Jt(!this.hideValue,(()=>W`<span class="value">${this._value}</span>`))}
			</div>
		`}static{this.styles=r`
		.range-slider__input {
			-webkit-appearance: none;
			appearance: none;
			width: 100%;
			height: 6px;
			background: var(--trackColor, #ccc);
			cursor: pointer;
			outline: none;
			border-radius: var(--thumbSize, 15px);
		}

		.range-slider__input::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none;
			${Kt}
		}

		.range-slider__input::-moz-range-thumb {
			${Kt}
		}

		.range-slider__input::-webkit-slider-thumb:hover {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${r`defaultHoverColor`});
		}

		.range-slider__input::-moz-range-thumb:hover {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${r`defaultHoverColor`});
		}

		.range-slider__input:active::-webkit-slider-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r`defaultActiveColor`});
		}

		.range-slider__input:active::-moz-range-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r`defaultActiveColor`});
		}

		.range-slider__input:focus::-webkit-slider-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r`defaultActiveColor`});
		}

		.range-slider__input:focus::-moz-range-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r`defaultActiveColor`});
		}

		.wrap {
			display: flex;
			align-items: center;
			gap: 1rem;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
		}

		.value {
			font-size: var(--valueSize, 25px);
			width: calc(var(--valueSize, 25px) * 2);
			text-align: center;
		}

		.range-slider__label {
			display: block;
			font-size: calc(var(--valueSize, 25px) / 2);
		}

		.range-slider {
			flex-grow: 1;
			height: 100%;
		}

		.range-slider--one-lined {
			display: flex;
			align-items: center;
		}

		.range-slider-ticks {
			position: relative;
			margin: 0;
			padding: 0 10px;
			list-style-type: none;
		}

		.range-slider-ticks__tick {
			position: absolute;
			top: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			left: calc(var(--value) + var(--valueSize, 25px) / 4);
			width: 1px;
			height: calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3));
			background: var(--trackColor, #ccc);
			line-height: calc((var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) * 4);
		}
	`}};Qt([ht({type:Number}),te("design:type",Object)],ee.prototype,"minimum",void 0),Qt([ht({type:Number}),te("design:type",Object)],ee.prototype,"maximum",void 0),Qt([ht({type:Number}),te("design:type",Object)],ee.prototype,"defaultValue",void 0),Qt([ht({type:Number}),te("design:type",Object)],ee.prototype,"step",void 0),Qt([ht({type:Array,converter:{fromAttribute:t=>t?t.split(",").map(Number):[],toAttribute:t=>t.join(",")}}),te("design:type",Array)],ee.prototype,"ticks",void 0),Qt([ht({type:String}),te("design:type",Object)],ee.prototype,"label",void 0),Qt([ht({type:String}),te("design:type",Object)],ee.prototype,"thumbSize",void 0),Qt([ht({type:String}),te("design:type",Object)],ee.prototype,"trackColor",void 0),Qt([ht({type:String}),te("design:type",Object)],ee.prototype,"thumbColor",void 0),Qt([ht({type:String}),te("design:type",Object)],ee.prototype,"hoverColor",void 0),Qt([ht({type:String}),te("design:type",Object)],ee.prototype,"activeColor",void 0),Qt([ht({type:String}),te("design:type",Object)],ee.prototype,"valueSize",void 0),Qt([ht({type:Boolean}),te("design:type",Object)],ee.prototype,"hideValue",void 0),Qt([ht({type:Boolean}),te("design:type",Object)],ee.prototype,"allSameLine",void 0),Qt([ut(),te("design:type",Object)],ee.prototype,"_value",void 0),Qt([ut(),te("design:type",Object)],ee.prototype,"_gradientStyle",void 0),Qt([ut(),te("design:type",Function)],ee.prototype,"_onUpdateListener",void 0),Qt([yt(".range-slider__input"),te("design:type",Promise)],ee.prototype,"rangeSlider",void 0),ee=Qt([ct("range-input-component")],ee);const ie=[{name:"second",timeFactor:1e3},{name:"minute",timeFactor:60},{name:"hour",timeFactor:60},{name:"day",timeFactor:24},{name:"year",timeFactor:356}];var oe,se=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ne=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let re=class extends at{constructor(){super(...arguments),this.date=new Date("May 6, 2085 11:00:00"),this.intervalId=0}static{oe=this}static{var t;this.units=(t=ie).map(((e,i)=>({...e,timeFactor:t.slice(0,i+1).reduce(((t,e)=>t*e.timeFactor),1)}))).reverse()}firstUpdated(){this.renderTexts()}renderTexts(t=oe.units){let e="",i=this.date.getTime()-(new Date).getTime();t.forEach((({timeFactor:t,name:o})=>{const s=Math.floor(i/t);e+=s<=0?"":`${s} ${"1"===String(s).slice(-1)?o:o+"s"} `,i%=t})),e=e?e.trim():"0 seconds";for(const t of this._countdownItems)t.textContent=e}connectedCallback(){super.connectedCallback(),this.intervalId=window.setInterval((()=>{this.renderTexts()}),1e3)}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.intervalId)}render(){return W`<slot></slot>`}};se([ht({converter:{fromAttribute:t=>new Date(t??"May 6, 2085 11:00:00"),toAttribute:t=>t.toString()}}),ne("design:type",Object)],re.prototype,"date",void 0),se([vt({selector:"[data-countdown]",flatten:!0}),ne("design:type",Array)],re.prototype,"_countdownItems",void 0),re=oe=se([ct("countdown-component")],re);var ae,le=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ce=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let pe=class extends at{constructor(){super(...arguments),this._internalElements=[],this._isOpened=!1}static{ae=this}static{this.styles=r`
		.wrap {
			position: relative;
			width: 150px;
		}

		.custom-select-current {
			border-radius: 20px;
			transition: all 0.3s;
			background-color: dodgerblue;
		}

		.custom-select-current::after {
			position: absolute;
			content: "";
			top: 14px;
			right: 10px;
			width: 0;
			height: 0;
			border: 6px solid transparent;
			border-color: #fff transparent transparent transparent;
			transition: all 0.3s;
		}

		.custom-select-current.active::after {
			border-color: transparent transparent #fff transparent;
			top: 7px;
		}

		.custom-select-option.active {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			background-color: darkcyan;
		}

		.custom-select-option {
			color: #ffffff;
			padding: 3px 12px;
			border: 1px solid transparent;
			border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
			user-select: none;
			cursor: pointer;
		}

		.custom-select-options {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 99;
			opacity: 1;
			transition: opacity 0.2s linear;
			padding-left: 0;
			list-style-type: none;
			margin: 0;
			background-color: dodgerblue;
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 20px;
		}

		.custom-select-options.hidden {
			opacity: 0;
			pointer-events: none;
			cursor: default;
		}

		.custom-select-options .custom-select-option:hover {
			background-color: rgba(0, 0, 0, 0.15);
		}

		.custom-select-options .custom-select-option[data-selected="true"] {
			background-color: rgba(0, 0, 0, 0.1);
		}

		.custom-select-options .custom-select-option[data-disabled="true"] {
			background-color: rgba(0, 0, 0, 0.33);
		}

		.custom-select-options .custom-select-option:last-child {
			overflow: hidden;
		}
	`}onItemSelected(t){this._isOpened=!1,t.isDisabled||(this._internalElements.forEach((e=>e.isSelected=e===t)),this._selectElement.forEach((e=>e.value=t.value)))}connectedCallback(){super.connectedCallback(),this.boundDocumentClickListener=t=>{t.composedPath().some((t=>t instanceof ae))||(this._isOpened=!1)},document.addEventListener("click",this.boundDocumentClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundDocumentClickListener)}firstUpdated(){for(const t of this._selectElement)this._internalElements=Array.from(t.children).map(((e,i)=>({innerContent:e.textContent??"",value:e.getAttribute("value")??"",isSelected:t.selectedIndex===i,isDisabled:Boolean(e.getAttribute("disabled"))})))}render(){return W`
			<slot
				style=${St({display:this._internalElements.length?"none":"revert"})}
			></slot>
			<div class="wrap">
				<div
					class="custom-select-option custom-select-current ${Zt({active:this._isOpened})}"
					@click="${()=>{this._isOpened=!this._isOpened}}"
				>
					${this._internalElements.find((t=>t.isSelected))?.innerContent??""}
				</div>
				<ul
					class="custom-select-options ${Zt({hidden:!(this._internalElements.length&&this._isOpened)})}"
				>
					${this._internalElements.map((t=>W`
							<li
								class="custom-select-option"
								data-disabled="${t.isDisabled}"
								data-selected="${t.isSelected}"
								value="${t.value}"
								@click="${()=>{this.onItemSelected(t)}}"
							>
								${t.innerContent}
							</li>
						`))}
				</ul>
			</div>
		`}};le([vt({flatten:!0}),ce("design:type",Array)],pe.prototype,"_selectElement",void 0),le([ut(),ce("design:type",Array)],pe.prototype,"_internalElements",void 0),le([ut(),ce("design:type",Object)],pe.prototype,"_isOpened",void 0),pe=ae=le([ct("custom-select-component")],pe);var de=t.p+"img/play.png",he=t.p+"img/pause.png",ue=t.p+"img/reset.png",fe=t.p+"img/volume.png";function ge(t){const e=Math.floor(t/3600),i=Math.floor((t-3600*e)/60),o=Math.floor(t-3600*e-60*i);return`${String(i).padStart(2,"0")}:${String(o).padStart(2,"0")}`}var me=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ve=class extends at{constructor(){super(...arguments),this._isVideoPlaying=!1,this._isMute=!1}static{this.styles=r`
		.wrap {
			position: relative;
			width: 100%;
			height: 100%;
		}

		.video {
			width: inherit;
			height: inherit;
		}

		.controls {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			background-color: #e2e2e2;
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-around;
			height: 12.5%;
			padding: 4px;
			box-sizing: border-box;
		}

		.controls-buttons {
			display: flex;
			list-style-type: none;
			padding: 0;
			margin: 0;
			gap: 5%;
		}

		.control-button {
			display: block;
			height: 100%;
			cursor: pointer;
		}

		.controls-button__clickable-button {
			width: inherit;
			height: 100%;
			padding: 0;
			margin: 0;
			border: none;
			background: none;
			cursor: pointer;
		}

		.controls-button__image {
			width: inherit;
			height: inherit;
			cursor: pointer;
		}

		range-input-component {
			display: block;
		}

		#time-range-input {
			margin-left: 15px;
			color: #000;
		}

		#volume-range-input {
			width: 33px;
		}
	`}onVideoEnded(){this._isVideoPlaying=!1}onVideoPlaying({timeRange:t,video:e}=this.getWorkingData()){this._isVideoPlaying||(this._isVideoPlaying=!0,this.videoCheckInterval??=window.setInterval((()=>{t.label=ge(e.currentTime),t.changeValue(e.currentTime)}),50))}resetVideoTime({timeRange:t,video:e}=this.getWorkingData()){this._isVideoPlaying&&(this._isVideoPlaying=!1,e.currentTime=0,e.pause(),t._value=0)}startVideo({video:t}=this.getWorkingData()){this._isVideoPlaying||t.play().catch((t=>{console.debug(t)}))}stopVideo({video:t}=this.getWorkingData()){this._isVideoPlaying&&(t.pause(),window.clearInterval(this.videoCheckInterval),this._isVideoPlaying=!1,this.videoCheckInterval=void 0)}resetVideo(t=this.getWorkingData()){t.timeRange.changeValue(0),t.timeRange.label=ge(0),t.video.currentTime=0,this.stopVideo(t)}setVideoSecond(t){const{video:e,timeRange:i}=this.getWorkingData();i._value=t,i.label=ge(t),e.currentTime=t}toggleMute({video:t}=this.getWorkingData()){this._isMute&&void 0!==this._previousVideoVolume?(this._isMute=!1,t.volume=this._previousVideoVolume):(this._isMute=!0,this._previousVideoVolume=t.volume,t.volume=0),this._volumeRangeInput.changeValue(t.volume)}getWorkingData(){const[t]=this._videoElement;return HTMLVideoElement,{video:t,volumeRange:this._volumeRangeInput,timeRange:this._timeRangeInput}}firstUpdated(){const{video:t,volumeRange:e,timeRange:i}=this.getWorkingData();t.load(),t.onloadeddata=()=>{t.removeAttribute("controls"),i.maximum=t.duration,t.addEventListener("ended",(()=>{this.onVideoEnded()})),t.addEventListener("playing",(()=>{this.onVideoPlaying({video:t,volumeRange:e,timeRange:i})})),i._onUpdateListener=t=>{this.setVideoSecond(t)},e._onUpdateListener=i=>{e.changeValue(i),t.volume=i}}}disconnectedCallback(){window.clearInterval(this.videoCheckInterval),super.disconnectedCallback()}render(){return W`<div class="wrap">
			<div class="video">
				<slot></slot>
			</div>
			<div class="controls">
				<range-input-component id="volume-range-input" step="0.01" defaultValue="1" maximum="1" hideValue></range-input-component>
				<range-input-component id="time-range-input" step="0.01" label="00:00" hideValue allSameLine></range-input-component>
				<ul class="controls-buttons">
					<li
						class="controls-button"
						@click="${()=>{this.startVideo()}}"
						style=${St({display:this._isVideoPlaying?"none":"block"})}
					>
						<button class="controls-button__clickable-button">
							<img alt="Play" src="${de}" class="controls-button__image" />
						</button>
					</li>
					<li
						class="controls-button"
						@click="${()=>{this.stopVideo()}}"
						style=${St({display:this._isVideoPlaying?"block":"none"})}
					>
						<button class="controls-button__clickable-button">
							<img alt="Pause" src="${he}" class="controls-button__image" />
						</button>
					</li>
					<li class="controls-button" @click="${()=>{this.resetVideo()}}">
						<button class="controls-button__clickable-button">
							<img alt="Reset" src="${ue}" class="controls-button__image" />
						</button>
					</li>
					<li class="controls-button" @click="${()=>{this.toggleMute()}}">
						<button class="controls-button__clickable-button">
							<img alt="Mute" src="${fe}" class="controls-button__image" />
						</button>
					</li>
				</ul>
			</div>
		</div>`}};me([ut(),ye("design:type",Object)],ve.prototype,"_isVideoPlaying",void 0),me([ut(),ye("design:type",Object)],ve.prototype,"_isMute",void 0),me([ut(),ye("design:type",Number)],ve.prototype,"_previousVideoVolume",void 0),me([vt(),ye("design:type",Array)],ve.prototype,"_videoElement",void 0),me([gt("#volume-range-input"),ye("design:type",ee)],ve.prototype,"_volumeRangeInput",void 0),me([gt("#time-range-input"),ye("design:type",ee)],ve.prototype,"_timeRangeInput",void 0),ve=me([ct("custom-video-component")],ve);var be=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},_e=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let we=class extends at{constructor(){super(...arguments),this.isOpen=!1}firstUpdated(){if(0===this._floatingPanels.length)return;const[t]=this._floatingPanels;document.addEventListener("mousedown",this.listener=({clientX:e,clientY:i})=>{const o=t.offsetLeft,s=t.offsetTop,n=n=>{t.style.left=o+n.clientX-e+"px",t.style.top=s+n.clientY-i+"px"};t.addEventListener("mousemove",n,!1),window.addEventListener("mouseup",(()=>{t.removeEventListener("mousemove",n,!1)}))})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.listener)}render(){return this.isOpen?W`<slot></slot>`:""}};be([ht({type:Boolean}),_e("design:type",Object)],we.prototype,"isOpen",void 0),be([vt({flatten:!0}),_e("design:type",Array)],we.prototype,"_floatingPanels",void 0),we=be([ct("floating-panel-component")],we);var xe=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Se=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $e=class extends at{constructor(){super(...arguments),this.smoothDiametralTransition=!1,this.current=1,this.frameGap=20,this.animationDuration=500,this.showArrows=!1,this.showToggles=!1,this._itemsLength=0,this._isAnimating=!1}static{this.styles=r`
		.wrap {
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
	`}firstUpdated(){const t=this._carouselItems;this._itemsLength=t.length,this._galleryList.style.left=-100*this.current+"%",t[0].before(t[t.length-1].cloneNode(!0)),t[t.length-1].after(t[0].cloneNode(!0))}checkCurrentSlide(t){return 0===t||t>this._itemsLength?0===t?this._itemsLength:1:t}slideTo(t,e){const i=this._galleryList;this._isAnimating=!0;const o=new Date;this.interval=window.setInterval((()=>{let s=((new Date).getTime()-o.getTime())/this.animationDuration;s>1&&(s=1),i.style.left=t+Math.abs(e-t)*s**2*(t>e?-1:1)+"%",1===s&&(clearInterval(this.interval),this._isAnimating=!1,this.current=this.checkCurrentSlide(this.current),this._galleryList.style.left=-100*this.current+"%")}),this.frameGap)}changeCurrentSlide(t){if(this._itemsLength<=1)return;this.smoothDiametralTransition||(t=this.checkCurrentSlide(t));const e=parseInt(this._galleryList.style.left,10)||0,i=-100*t;this._isAnimating||e===i||(this.current=t,this.slideTo(e,i))}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.interval)}render(){return W`<div class="wrap">
			<div class="gallery">
				<ul class="gallery-list">
					<slot></slot>
				</ul>
			</div>
			${this.showArrows?W`<div class="gallery-controls">
							<button
								class="gallery-controls__previous-button"
								@click="${()=>{this.changeCurrentSlide(this.current-1)}}"
							></button>
							<button
								class="gallery-controls__next-button"
								@click="${()=>{this.changeCurrentSlide(this.current+1)}}"
							></button>
					  </div>`:""}
			</div>
			${0!==this._itemsLength&&this.showToggles?W`<ul class="gallery-toggles">
							${Array.from({length:this._itemsLength},((t,e)=>W`<li
										class="gallery-toggle ${Zt({"gallery-toggle--active":this.current-1===e})}"
										@click="${()=>{this.changeCurrentSlide(e+1)}}"
									></li>`))}
					  </ul>`:""}
		</div>`}};xe([ht({type:Boolean}),Se("design:type",Object)],$e.prototype,"smoothDiametralTransition",void 0),xe([ht({type:Number}),Se("design:type",Object)],$e.prototype,"current",void 0),xe([ht({type:Number}),Se("design:type",Object)],$e.prototype,"frameGap",void 0),xe([ht({type:Number}),Se("design:type",Object)],$e.prototype,"animationDuration",void 0),xe([ht({type:Boolean}),Se("design:type",Object)],$e.prototype,"showArrows",void 0),xe([ht({type:Boolean}),Se("design:type",Object)],$e.prototype,"showToggles",void 0),xe([vt({flatten:!0}),Se("design:type",Array)],$e.prototype,"_carouselItems",void 0),xe([gt(".gallery-list"),Se("design:type",HTMLElement)],$e.prototype,"_galleryList",void 0),xe([gt(".gallery"),Se("design:type",HTMLElement)],$e.prototype,"_galleryWrap",void 0),xe([ut(),Se("design:type",Object)],$e.prototype,"_itemsLength",void 0),xe([ut(),Se("design:type",Object)],$e.prototype,"_isAnimating",void 0),$e=xe([ct("gallery-carousel-component")],$e);var Ce=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ke=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Oe=class extends at{constructor(){super(...arguments),this.windowListeners=[]}static{this.styles=r`
    .wrap {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .comparison-slider {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      width: 40px;
      height: 40px;
      background-color: #333;
      border-radius: 50%;
      cursor: ew-resize;
    }
  `}initializeImageComparator(t){const e=this._comparatorElements,i=e[t],{offsetWidth:o}=i;let s=!1;const n=document.createElement("div");function r(t){i.style.width=t+"px",n.style.left=i.offsetWidth-n.offsetWidth/2+"px"}n.setAttribute("class","comparison-slider"),this._wrapElement.append(n),r(o-o/e.length*t);const a=t=>{t.preventDefault(),s=!0};n.addEventListener("mousedown",a),n.addEventListener("pointerdown",a),this.windowListeners.unshift((t=>{if(!s)return!1;i.style.left="0";let e=t.pageX-i.getBoundingClientRect().left-window.scrollX;e<0&&(e=0),e>o&&(e=o),r(e)})),window.addEventListener("mousemove",this.windowListeners[0],{passive:!0}),window.addEventListener("pointermove",this.windowListeners[0],{passive:!0}),this.windowListeners.unshift((()=>{s=!1})),window.addEventListener("mouseup",this.windowListeners[0],{passive:!0}),window.addEventListener("pointerup",this.windowListeners[0],{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.windowListeners)["mousemove","pointermove","mouseup","pointerup"].forEach((e=>{window.removeEventListener(e,t)}))}firstUpdated(){for(let t=1;t<this._comparatorElements.length;t++)this.initializeImageComparator(t)}render(){return W`<div class="wrap">
      <slot></slot>
    </div>`}};Ce([vt(),ke("design:type",Array)],Oe.prototype,"_comparatorElements",void 0),Ce([gt(".wrap"),ke("design:type",HTMLDivElement)],Oe.prototype,"_wrapElement",void 0),Oe=Ce([ct("image-comparator-component")],Oe);var Ae=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let je=class extends at{constructor(){super(...arguments),this.zoomScale=2,this.autoConfigureGlassSource=!1}moveMagnifier(t,e){const i=this.cachedImage,o=this.cachedGlass,s=o.offsetWidth/2,n=o.offsetHeight/2;t>i.offsetWidth?t=i.offsetWidth:t<0&&(t=0),e>i.offsetHeight?e=i.offsetHeight:e<0&&(e=0),o.style.left=t-s+"px",o.style.top=e-n+"px",o.style.backgroundPosition="-"+(t*this.zoomScale-s)+"px -"+(e*this.zoomScale-n)+"px"}firstUpdated(){const t=this._image[0].querySelector("[data-magnifier-content]"),[e]=this._glass;$t(t),this.autoConfigureGlassSource&&t.hasAttribute("src")&&(e.style.backgroundImage=`url("${t.getAttribute("src")??""}")`),e.style.backgroundSize=`${t.offsetWidth*this.zoomScale}px ${t.offsetHeight*this.zoomScale}px`,this.cachedImage=t,this.cachedGlass=e,this.moveListener=e=>{e.preventDefault();const i=t.getBoundingClientRect();this.moveMagnifier(e.pageX-i.left-window.scrollX,e.pageY-i.top-window.scrollY)},t.addEventListener("mousemove",this.moveListener),e.addEventListener("mousemove",this.moveListener),t.addEventListener("pointermove",this.moveListener),t.addEventListener("pointermove",this.moveListener)}render(){return W`<slot></slot>`}};Ae([ht({type:Number}),Re("design:type",Object)],je.prototype,"zoomScale",void 0),Ae([ht({type:Boolean}),Re("design:type",Object)],je.prototype,"autoConfigureGlassSource",void 0),Ae([vt({flatten:!0}),Re("design:type",Array)],je.prototype,"_image",void 0),Ae([vt({selector:"[data-magnifier-glass]"}),Re("design:type",Array)],je.prototype,"_glass",void 0),je=Ae([ct("image-magnifier-component")],je);var Ee=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Le=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Te=class extends at{constructor(){super(...arguments),this.isHorizontal=!1,this.duration=500,this.increment=6,this.noScrollbar=!1,this._selectedItem=0,this._isScrolling=!1}static{this.styles=r`
		.wrap {
			width: 100%;
			height: 100%;
			min-height: 100%;
			max-height: 100%;
			overflow-x: hidden;
			overflow-y: scroll;
		}

		.wrap--horizontal {
			display: flex;
			overflow-x: scroll;
			overflow-y: hidden;
		}

        .wrap--no-scrollbar {
            overflow: hidden;
        }
	`}easeInOutQuad(t,e,i,o){return(t/=o/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}smoothScrollTo(t){this._isScrolling=!0;const e=this._wrapElement,i=this.isHorizontal?e.scrollLeft:e.scrollTop,o=t-i;let s=0;const n=this.isHorizontal?"scrollLeft":"scrollTop",r=()=>{if(!this.scrollEventListener)return;s+=this.increment;const a=this.easeInOutQuad(s,i,o,this.duration);a>this.increment?e[n]=a-this.increment/2:e[n]=a,s<this.duration?setTimeout(r,this.increment):s>=this.duration&&(e[n]=t,this._isScrolling=!1)};r()}scrollSlide(t){this._isScrolling||(this._selectedItem+=t,this.smoothScrollTo(this._onePageScrollElements[this._selectedItem].offsetHeight*this._selectedItem))}firstUpdated(){const t=this._onePageScrollElements;this._wrapElement.addEventListener("wheel",this.scrollEventListener=e=>{e.deltaY>0?this._selectedItem>=t.length-1?this._isScrolling||this.smoothScrollTo(this._selectedItem=0):this.scrollSlide(1):0===this._selectedItem?this._isScrolling||(this._selectedItem=t.length-1,this.smoothScrollTo((this.isHorizontal?this._wrapElement.scrollWidth:this._wrapElement.scrollHeight)-(this.isHorizontal?t[0].offsetWidth:t[0].offsetHeight))):this.scrollSlide(-1)},{passive:!0})}disconnectedCallback(){this.scrollEventListener&&this._wrapElement.removeEventListener("wheel",this.scrollEventListener),super.disconnectedCallback()}render(){return W`<div class="wrap ${Zt({"wrap--horizontal":this.isHorizontal,"wrap--no-scrollbar":this.noScrollbar})}">
			<slot></slot>
		</div>`}};Ee([ht({type:Boolean}),Le("design:type",Object)],Te.prototype,"isHorizontal",void 0),Ee([ht({type:Number}),Le("design:type",Object)],Te.prototype,"duration",void 0),Ee([ht({type:Number}),Le("design:type",Object)],Te.prototype,"increment",void 0),Ee([ht({type:Boolean}),Le("design:type",Object)],Te.prototype,"noScrollbar",void 0),Ee([ut(),Le("design:type",Object)],Te.prototype,"_selectedItem",void 0),Ee([ut(),Le("design:type",Object)],Te.prototype,"_isScrolling",void 0),Ee([vt(),Le("design:type",Array)],Te.prototype,"_onePageScrollElements",void 0),Ee([gt(".wrap"),Le("design:type",HTMLDivElement)],Te.prototype,"_wrapElement",void 0),Te=Ee([ct("one-page-scroll-component")],Te);const Ie=(t,e)=>{if(null==t.parentElement)return window;const{overflowX:i,overflowY:o,overflow:s}=window.getComputedStyle(t.parentElement),n=/auto|scroll/;return n.test(s)||e&&n.test(i)||!e&&n.test(o)?t.parentElement:Ie(t.parentElement,e)};var Pe=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ze=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ne=class extends at{constructor(){super(...arguments),this.isHorizontal=!1,this.isHorizontalTranslation=!1,this.effect=1.968,this.speed=2.7,this.margin=0}static{this.styles=r`
		.wrap {
			position: relative;
            transition: 0.1s;
		}
	`}rerender(){const t=this._wrapper,e=Ie(this,this.isHorizontal);e.removeEventListener("scroll",this.scrollListener);const i=()=>e instanceof HTMLElement?this.isHorizontal?e.scrollLeft:e.scrollTop:this.isHorizontal?e.scrollX:e.scrollY,o=t.getBoundingClientRect()[this.isHorizontal?"left":"top"]+i(),s=(e instanceof HTMLElement?this.isHorizontal?e.clientWidth:e.clientHeight:this.isHorizontal?e.innerWidth:e.innerHeight)/this.effect;e.addEventListener("scroll",this.scrollListener=()=>{const e=i();if(e>o-2*s&&e<o+s){const i=(e-(o-s))/this.speed-this.margin;t.style.transform=`translate${this.isHorizontalTranslation?"X":"Y"}(${i}px)`}},{passive:!0}),this.scrollListener(new Event("scroll"))}firstUpdated(){this.rerender(),window.addEventListener("resize",this.resizeListener=()=>{this.rerender()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeListener)}render(){return W`<div class="wrap">
			<slot></slot>
		</div>`}};Pe([ht({type:Boolean}),ze("design:type",Object)],Ne.prototype,"isHorizontal",void 0),Pe([ht({type:Boolean}),ze("design:type",Object)],Ne.prototype,"isHorizontalTranslation",void 0),Pe([ht({type:Number}),ze("design:type",Object)],Ne.prototype,"effect",void 0),Pe([ht({type:Number}),ze("design:type",Object)],Ne.prototype,"speed",void 0),Pe([ht({type:Number}),ze("design:type",Object)],Ne.prototype,"margin",void 0),Pe([gt(".wrap"),ze("design:type",HTMLElement)],Ne.prototype,"_wrapper",void 0),Ne=Pe([ct("parallax-component")],Ne);const He=()=>({totalItems:0,containerDimensions:[0,0],items:[],calculations:[{opacity:1,offset:0,distance:0}],carouselRotationsLeft:0,currentlyMoving:!1,itemsAnimating:0,currentDirection:At.STILL,leftItemsCount:0,rightItemsCount:0,performingSetup:!0});var Me=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},De=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Be=class extends at{constructor(){super(...arguments),this.imageSize="300px",this.margin="250px auto",this.startingItem=1,this.separation=175,this.separationMultiplier=.6,this.horizonOffset=0,this.horizonOffsetMultiplier=1,this.sizeMultiplier=.7,this.opacityMultiplier=.87,this.horizon=0,this.flankingItems=3,this.isVertical=!1,this.preloadImages=!1,this.forcedImageWidth=0,this.forcedImageHeight=0,this.animationLength=300,this.centralItemClassName="active",this.allowSwitchingOrientation=!1,this._internalState=He()}static{this.styles=r`
		.wrap {
			position: relative;
		}

		.images {
			width: 80%;
		}

		${Rt}

		.carousel-controls {
			position: absolute;
			left: 40%;
			transform: translateX(-50%);
			bottom: -5%;
			z-index: 99;
		}
	`}initializeCarouselData(t){const e=window.getComputedStyle(t);this._internalState.totalItems=this.images.length,this._internalState.containerDimensions=[parseInt(e.width,10),parseInt(e.height,10)]}forceImageDimensionIfEnabled(){this.images.forEach((t=>t.style.display="none")),this.forcedImageWidth&&this.forcedImageHeight&&this.images.forEach((t=>{t.style.width=`${this.forcedImageWidth}px`,t.style.height=`${this.forcedImageHeight}px`}))}preload(t){if(!this.preloadImages)return void t();const e=this.images;let i=0;for(const o of e)o.setAttribute("src",o.getAttribute("src")??""),o.addEventListener("load",(()=>{o.style.display="",++i===e.length&&t()}))}setOriginalItemDimensions(){this.images.forEach((t=>{(!t.dataset.originalWidth||this.forcedImageWidth>0)&&(t.style.display="",t.dataset.originalWidth=String(t.clientWidth),t.style.display="none"),(!t.dataset.originalHeight||this.forcedImageHeight>0)&&(t.style.display="",t.dataset.originalHeight=String(t.clientHeight),t.style.display="none")}))}calculatePositionProperties(){let t=this.horizonOffset,e=this.separation;for(let i=1;i<=this.flankingItems+2;i++){i>1&&(t*=this.horizonOffsetMultiplier,e*=this.separationMultiplier);const{distance:o,offset:s,opacity:n}=this._internalState.calculations[i-1];this._internalState.calculations[i]={distance:o+e,offset:s+t,opacity:n*this.opacityMultiplier}}this._internalState.calculations[this.flankingItems+1]={distance:0,offset:0,opacity:0}}setupCarousel(){this._internalState.items=this.images,0===this.horizon&&(this.horizon=this._internalState.containerDimensions[Number(!this.isVertical)]/2);for(const t of this._internalState.items){let e,i;this.isVertical?(e=this.horizon-Number(t.dataset.originalWidth)/2,i=this._internalState.containerDimensions[1]/2-Number(t.dataset.originalHeight)/2):(e=this._internalState.containerDimensions[0]/2-Number(t.dataset.originalWidth)/2,i=this.horizon-Number(t.dataset.originalHeight)/2),Object.assign(t.style,{left:`${e}px`,top:`${i}px`,visibility:"visible",position:"absolute","z-index":0,opacity:0}),t.style.display=""}}performCalculations(t,e){const i=Math.abs(e),o=i<this.flankingItems+1?this._internalState.calculations[i]:this._internalState.calculations[this.flankingItems+1],s=this.sizeMultiplier**i,n=s*Number(t.dataset.originalWidth),r=s*Number(t.dataset.originalHeight),a=e<0?-o.distance:o.distance,l=this._internalState.containerDimensions[Number(this.isVertical)]/2;let c,p;this.isVertical?(p=this.horizon-o.offset-n/2,c=l+a-r/2):(p=l+a-n/2,c=this.horizon-o.offset-r/2),t.dataset.width=String(n),t.dataset.height=String(r),t.dataset.top=String(c),t.dataset.left=String(p),t.dataset.oldPosition=t.dataset.currentPosition||"0",t.dataset.depth=String(this.flankingItems+2-i),t.dataset.opacity=String(e?o.opacity:1)}itemAnimationComplete(t,e){this._internalState.itemsAnimating--,t.dataset.currentPosition=String(e),0===e&&(this._internalState.currentCenterItem=t),this._internalState.itemsAnimating||(this._internalState.currentlyMoving=!1,--this._internalState.carouselRotationsLeft<=0?(this._internalState.currentCenterItem?.classList.add(this.centralItemClassName),this._internalState.performingSetup?this._internalState.performingSetup=!1:(this.movingToCenter(),this.movedToCenter())):this.rotateCarousel())}movingFromCenter(t){return t?(HTMLElement,t):void 0}movingToCenter(){}movedToCenter(){}moveItem(t,e){const i=()=>{Object.assign(t.style,{left:`${t.dataset.left}px`,width:`${t.dataset.width}px`,height:`${t.dataset.height}px`,top:`${t.dataset.top}px`,opacity:String(t.dataset.opacity)})};Math.abs(e)<=this.flankingItems+1?(this.performCalculations(t,e),this._internalState.itemsAnimating++,t.style.zIndex=t.dataset.depth??"",i(),setTimeout((()=>{this.itemAnimationComplete(t,e)}),this.animationLength)):(t.dataset.currentPosition=String(e),"0"!==t.dataset.oldPosition&&t.dataset.oldPosition||(this.performCalculations(t,e),i()))}setupStarterRotation(){this.startingItem||=Math.round(this._internalState.totalItems/2),this._internalState.rightItemsCount=Math.ceil((this._internalState.totalItems-1)/2),this._internalState.leftItemsCount=Math.floor((this._internalState.totalItems-1)/2),this._internalState.carouselRotationsLeft=1;let t=this.startingItem-1;this.moveItem(this._internalState.items[t],0),this._internalState.items[t].style.opacity="1";for(let e=1;e<=this._internalState.rightItemsCount;e++)t<this._internalState.totalItems-1?t++:t=0,this._internalState.items[t].style.opacity="1",this.moveItem(this._internalState.items[t],e);t=this.startingItem-1;for(let e=-1;e>=-this._internalState.leftItemsCount;e--)t>0?t--:t=this._internalState.totalItems-1,this._internalState.items[t].style.opacity="1",this.moveItem(this._internalState.items[t],e)}initCarousel(t){this._internalState=He(),this.initializeCarouselData(t),this.forceImageDimensionIfEnabled(),this.preload((()=>{this.setOriginalItemDimensions(),this.calculatePositionProperties(),this.setupCarousel(),this.setupStarterRotation()}))}moveOnce(t){this._internalState.currentlyMoving||(this._internalState.previousCenterItem=this._internalState.currentCenterItem,this.movingFromCenter(this._internalState.currentCenterItem),t===At.BACKWARDS?this.movingFromCenter(this._internalState.currentCenterItem?.previousElementSibling??void 0):t===At.FORWARDS&&this.movingFromCenter(this._internalState.currentCenterItem?.nextElementSibling??void 0),this._internalState.currentDirection=t)}rotateCarousel(){if(!this._internalState.currentlyMoving){this._internalState.currentCenterItem?.classList.remove(this.centralItemClassName),this._internalState.currentlyMoving=!0,this._internalState.itemsAnimating=0,this._internalState.carouselRotationsLeft++;for(const t of this._internalState.items){const e=parseInt(t.dataset.currentPosition??"",10);let i=e+-Number(this._internalState.currentDirection);Math.abs(i)>this._internalState[i>0?"rightItemsCount":"leftItemsCount"]&&(i=-e,this._internalState.totalItems%2==0&&i++),this.moveItem(t,i)}}}nextItem(){this.moveOnce(At.FORWARDS),this.rotateCarousel()}previousItem(){this.moveOnce(At.BACKWARDS),this.rotateCarousel()}switchOrientation(){this.isVertical=!this.isVertical,this.rotateCarousel()}connectedCallback(){super.connectedCallback(),this.parent.then((t=>{this.initCarousel(t)})).catch((t=>{console.error(t)})),window.addEventListener("resize",this.windowResizeListener=()=>{this.parent.then((t=>{this.initCarousel(t)})).catch((t=>{console.log(t)}))})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.windowResizeListener)}render(){return W`<div class="wrap">
			<div class="images" style=${St({height:this.imageSize,margin:this.margin})}>
				<slot></slot>
			</div>
			<div class="carousel-controls">
				<button class="carousel-controls__previous-button" @click="${()=>{this.previousItem()}}"></button>
				${this.allowSwitchingOrientation?W`<button class="carousel-controls__perspective-button" @click="${()=>{this.switchOrientation()}}">Switch</button>`:""}
				<button class="carousel-controls__next-button" @click="${()=>{this.nextItem()}}"></button>
			</div>
		</div>`}};Me([ht(),De("design:type",Object)],Be.prototype,"imageSize",void 0),Me([ht(),De("design:type",Object)],Be.prototype,"margin",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"startingItem",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"separation",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"separationMultiplier",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"horizonOffset",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"horizonOffsetMultiplier",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"sizeMultiplier",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"opacityMultiplier",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"horizon",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"flankingItems",void 0),Me([ht({type:Boolean}),De("design:type",Object)],Be.prototype,"isVertical",void 0),Me([ht({type:Boolean}),De("design:type",Object)],Be.prototype,"preloadImages",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"forcedImageWidth",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"forcedImageHeight",void 0),Me([ht({type:Number}),De("design:type",Object)],Be.prototype,"animationLength",void 0),Me([ht(),De("design:type",Object)],Be.prototype,"centralItemClassName",void 0),Me([ht({type:Boolean}),De("design:type",Object)],Be.prototype,"allowSwitchingOrientation",void 0),Me([yt(".images"),De("design:type",Promise)],Be.prototype,"parent",void 0),Me([vt({flatten:!0}),De("design:type",Array)],Be.prototype,"images",void 0),Me([ut(),De("design:type",Object)],Be.prototype,"_internalState",void 0),Be=Me([ct("perspective-carousel-component")],Be);var Ue=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Ve=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let We=class extends at{constructor(){super(...arguments),this.open=!1,this.displayOpenButton=!1,this.closeButtonSelector="[data-popup-close-button]"}static{this.styles=r`
		.popup {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10000;
		}
	`}async openPopup(){if(this.open)return;this.open=!0;const t=await this._popup,e=Array.from(this._assignedElements.reduce(((t,e)=>[...t,...Array.from(e.querySelectorAll(this.closeButtonSelector))]),[]));t.addEventListener("click",this.clickEventListener=t=>{t.target&&e.includes(t.target)&&this.closePopup().catch((t=>{console.error(t)}))}),this.autoClosingTime&&(await new Promise((t=>setTimeout(t,this.autoClosingTime??0))),await this.closePopup())}async closePopup(){this.open&&((await this._popup).removeEventListener("click",this.clickEventListener),this.open=!1)}render(){return W`${Jt(this.displayOpenButton,(()=>W`<div @click="${()=>this.openPopup()}">
					<slot name="popup-open-button"></slot>
				</div>`))}
		${Jt(this.open,(()=>W`<div class="popup">
				<slot name="popup"></slot>
			</div>`))}`}};Ue([ht({type:Boolean}),Ve("design:type",Object)],We.prototype,"open",void 0),Ue([ht({type:Boolean}),Ve("design:type",Object)],We.prototype,"displayOpenButton",void 0),Ue([ht({type:Number}),Ve("design:type",Number)],We.prototype,"autoClosingTime",void 0),Ue([ht(),Ve("design:type",Object)],We.prototype,"closeButtonSelector",void 0),Ue([yt(".popup"),Ve("design:type",Promise)],We.prototype,"_popup",void 0),Ue([vt({slot:"popup"}),Ve("design:type",Array)],We.prototype,"_assignedElements",void 0),We=Ue([ct("popup-component")],We);var Fe=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Ge=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qe=class extends Ut{constructor(){super(...arguments),this.interval=2500,this.typingSpeed=75}triggerTextAnimation(t,e){const i=t.split(""),o=e.split("");if(i.length<o.length){let t=0;for(;i.length<e.length;)++t===i.length&&(t=0),i.splice(t,0,void 0)}else if(o.length<i.length){let t=0;for(;o.length<i.length;)o.splice(t,0,void 0),++t===o.length&&(t=0)}const s=[i],n=[];for(let t=0;t<i.length-1;t++){const e=[...s[s.length-1]];if(t%2==0?[e[t],e[t+1]]=[o[t],e[t]]:n.push(t),n.includes(t-2)){const t=n.shift()??0;e[t]=o[t]}s.push(e)}s.push(o);for(let t=0;t<s.length;t++)setTimeout((()=>{for(const e of this._elements)e.textContent=s[t].filter(Boolean).join(""),t===s.length-1&&setTimeout((()=>{this.onInterval()}),this.interval)}),this.typingSpeed*t)}};Fe([ht({type:Number}),Ge("design:type",Object)],qe.prototype,"interval",void 0),Fe([ht({type:Number}),Ge("design:type",Object)],qe.prototype,"typingSpeed",void 0),qe=Fe([ct("rebuilding-text-component")],qe);var Ye=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ke=class extends at{constructor(){super(...arguments),this.rootMargin="0px",this.ratio=.25,this.fixedClassName="fixed"}firstUpdated(){const t=this._headers[0];this.intersectionObserver=new IntersectionObserver((([e])=>{if(e.intersectionRatio<=this.ratio&&!t.classList.contains(this.fixedClassName)){t.classList.add(this.fixedClassName);const{top:e,left:i}=t.getBoundingClientRect();Object.assign(t.style,{position:"fixed",top:`${e}px`,left:`${i}px`}),t.getBoundingClientRect(),Object.assign(t.style,{top:"0",left:"0",right:"0"})}else e.intersectionRatio>this.ratio&&t.classList.contains(this.fixedClassName)&&(t.classList.remove(this.fixedClassName),Object.assign(t.style,{position:"",top:"",left:"",right:""}))}),{rootMargin:this.rootMargin,threshold:[0,...Array.from({length:Math.ceil(100)},((t,e)=>e/100)),1]}),this.intersectionObserver.observe(this)}disconnectedCallback(){this.intersectionObserver?.disconnect(),super.disconnectedCallback()}render(){return W`<slot></slot>`}};Ye([ht(),Xe("design:type",Object)],Ke.prototype,"rootMargin",void 0),Ye([ht({type:Number}),Xe("design:type",Object)],Ke.prototype,"ratio",void 0),Ye([ht(),Xe("design:type",Object)],Ke.prototype,"fixedClassName",void 0),Ye([vt({flatten:!0}),Xe("design:type",Array)],Ke.prototype,"_headers",void 0),Ke=Ye([ct("sticky-header-component")],Ke);var Je=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Ze=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Qe=class extends at{constructor(){super(...arguments),this.filterableHeaders=[],this.tabularData={headers:[],rows:[],excludedCriteria:[]}}static{this.styles=r`
		.wrap {
			position: relative;
		}

		.wrap-select {
			position: absolute;
		}

		.wrap-select__option {
			background-color: #333;
			height: inherit;
			cursor: pointer;
		}

		.wrap-select__option--crossed {
			text-decoration: line-through;
		}
	`}displaySelect(t,e){if(!this.filterableHeaders.includes(e+1))return;const i=t.getBoundingClientRect(),o=this._wrap.getBoundingClientRect(),s=i.top-o.top,n=i.left-o.left;this.openSelect={index:e,top:s,left:n,width:i.width,height:i.height,options:[...new Set(this.tabularData.rows.map((t=>t[e].textContent??"")))]}}firstUpdated(){const[t]=this._table;Object.assign(this.tabularData,{headers:Array.from(t.querySelectorAll("th")),rows:Array.from(t.querySelectorAll("tbody > tr")).map((t=>Array.from(t.children).filter((t=>t instanceof HTMLTableCellElement))))}),this.tabularData.excludedCriteria=Array.from({length:this.tabularData.headers.length},(()=>[])),this._wrap.addEventListener("click",this.clickListener=t=>{t.target instanceof HTMLTableCellElement&&t.target.parentNode&&"TH"===t.target.tagName?this.displaySelect(t.target,Array.from(t.target.parentNode.children).indexOf(t.target)):t.target instanceof HTMLDivElement&&t.target.classList.contains("wrap-select__option")||(this.openSelect=void 0)})}toggleCriterion(t){$t(this.openSelect);const{index:e}=this.openSelect,i=[...this.tabularData.excludedCriteria];i[e].includes(t)?i[e].splice(i[e].indexOf(t),1):i[e].push(t),this.tabularData={...this.tabularData,excludedCriteria:i}}updated(t){if(t.has("tabularData"))for(const t of this.tabularData.rows){const e=t[0].parentElement;e&&(t.some(((t,e)=>this.tabularData.excludedCriteria[e].includes(t.textContent??"")))?e.style.display="none":e.style.removeProperty("display"))}}disconnectedCallback(){this._wrap.removeEventListener("click",this.clickListener),super.disconnectedCallback()}render(){return W`<div class="wrap">
			<slot></slot>
			${this.openSelect?W`<div
						class="wrap-select"
						style=${St({top:`${this.openSelect.top}px`,left:`${this.openSelect.left}px`,width:`${this.openSelect.width}px`,height:`${this.openSelect.height}px`})}
				  >
						${this.openSelect.options.map((t=>($t(this.openSelect),W`<div
								class="wrap-select__option ${Zt({"wrap-select__option--crossed":this.tabularData.excludedCriteria[this.openSelect.index].includes(t)})}"
								@click="${()=>{this.toggleCriterion(t)}}"
							>
								${t}
							</div>`)))}
				  </div>`:""}
		</div>`}};Je([ht({type:Array,converter:{fromAttribute:t=>t?t.split(",").map(Number):[],toAttribute:t=>t.join(",")}}),Ze("design:type",Array)],Qe.prototype,"filterableHeaders",void 0),Je([vt({selector:"table"}),Ze("design:type",Array)],Qe.prototype,"_table",void 0),Je([gt(".wrap"),Ze("design:type",HTMLDivElement)],Qe.prototype,"_wrap",void 0),Je([ut(),Ze("design:type",Object)],Qe.prototype,"tabularData",void 0),Je([ut(),Ze("design:type",Object)],Qe.prototype,"openSelect",void 0),Qe=Je([ct("table-filtering-component")],Qe);var ti=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ei=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ii=class extends at{constructor(){super(...arguments),this.currentTab=0,this.transitionTime=300,this.activeTabClassName="active",this.leaveTabClassName="leave",this.inactiveTabClassName="inactive"}firstUpdated(){this.switchToTab();for(const t of this._headers)Array.from(t.children).forEach(((t,e)=>{t.addEventListener("click",(()=>{this.switchToTab(e)}))}))}switchToTab(t){window.clearTimeout(this.animationTimeout),this.animationTimeout=void 0;const e=this.currentTab;void 0!==t&&(this.currentTab=t);for(const t of this._headers)Array.from(t.children).forEach(((t,e)=>{e===this.currentTab?t.classList.add(this.activeTabClassName):t.classList.remove(this.activeTabClassName)}));for(const i of this._tabs)Array.from(i.children).forEach(((i,o)=>{HTMLElement,o===this.currentTab?i.style.removeProperty("display"):e===o?(i.classList.add(this.leaveTabClassName),this.animationTimeout=window.setTimeout((()=>{i.classList.remove(this.leaveTabClassName),i.style.display="none"}),this.transitionTime)):void 0===t?i.style.display="none":i.classList.remove(this.inactiveTabClassName)}))}render(){return W`<div>
			<slot name="headers"></slot>
			<slot name="tabs"></slot>
		</div>`}};ti([ht({type:Number}),ei("design:type",Object)],ii.prototype,"currentTab",void 0),ti([ht({type:Number}),ei("design:type",Object)],ii.prototype,"transitionTime",void 0),ti([ht(),ei("design:type",Object)],ii.prototype,"activeTabClassName",void 0),ti([ht(),ei("design:type",Object)],ii.prototype,"leaveTabClassName",void 0),ti([ht(),ei("design:type",Object)],ii.prototype,"inactiveTabClassName",void 0),ti([vt({slot:"headers"}),ei("design:type",Array)],ii.prototype,"_headers",void 0),ti([vt({slot:"tabs"}),ei("design:type",Array)],ii.prototype,"_tabs",void 0),ii=ti([ct("tabs-component")],ii);var oi=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},si=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ni=class extends at{constructor(){super(...arguments),this.animationDelay=500,this.inactiveClass="disabled",this.closeOnButtonClick=!1}closeToast(){for(const t of this._toast)t.classList.add(this.inactiveClass);this.toastClosingId=window.setTimeout((()=>{for(const t of this._toast)t.remove()}),this.animationDelay)}onButtonClicked(t){$t(t)}firstUpdated(){if(this.closeOnButtonClick)for(const t of this._toast.flatMap((t=>Array.from(t.getElementsByTagName("button")))))t.addEventListener("click",(()=>{this.onButtonClicked(t),this.closeToast()}))}connectedCallback(){super.connectedCallback(),this.autoCloseDelay&&(this.timeoutId=window.setTimeout((()=>{this.closeToast()}),this.autoCloseDelay))}disconnectedCallback(){window.clearTimeout(this.timeoutId),window.clearTimeout(this.toastClosingId),super.disconnectedCallback()}render(){return W`<div>
            <slot></slot>
        </div>`}};oi([ht({type:Number}),si("design:type",Object)],ni.prototype,"animationDelay",void 0),oi([ht({type:Number}),si("design:type",Number)],ni.prototype,"autoCloseDelay",void 0),oi([ht(),si("design:type",Object)],ni.prototype,"inactiveClass",void 0),oi([ht({type:Boolean}),si("design:type",Object)],ni.prototype,"closeOnButtonClick",void 0),oi([vt(),si("design:type",Array)],ni.prototype,"_toast",void 0),ni=oi([ct("toast-component")],ni);var ri=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ai=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let li=class extends Ut{constructor(){super(...arguments),this.interval=4500,this.typingSpeed=35,this.eachLetterAsSpan=!1}splitText(t){this.eachLetterAsSpan&&super.splitTextAlgorithm(t)}async triggerTextAnimation(t,e){const i=this._elements;for(let e=1;e<t.length+1;e++)await new Promise((o=>setTimeout((()=>{if(this.eachLetterAsSpan)for(const t of i)t.lastChild?.remove();else for(const o of i)o.textContent=t.slice(0,-e);o()}),this.unTypingSpeed??this.typingSpeed)));for(let t=1;t<e.length+1;t++)await new Promise((o=>setTimeout((()=>{if(this.eachLetterAsSpan){const o=document.createElement("span");o.textContent=e[t-1];for(const t of i)t.append(o)}else for(const o of i)o.textContent=e.slice(0,t);o()}),this.typingSpeed)));setTimeout((()=>{this.onInterval()}),this.interval)}};ri([ht({type:Number}),ai("design:type",Object)],li.prototype,"interval",void 0),ri([ht({type:Number}),ai("design:type",Object)],li.prototype,"typingSpeed",void 0),ri([ht({type:Number}),ai("design:type",Number)],li.prototype,"unTypingSpeed",void 0),ri([ht({type:Boolean}),ai("design:type",Object)],li.prototype,"eachLetterAsSpan",void 0),li=ri([ct("typing-text-component")],li);var ci=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},pi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let di=class extends at{constructor(){super(...arguments),this.rootMargin=0,this.checkInterval=500}firstUpdated(){const t=Ie(this,!1);this.intersectionObserver=new IntersectionObserver((([e])=>{if(e.intersectionRatio<1){const e=t instanceof HTMLElement?t.scrollTop:t.scrollY;this.style.top=`${e+this.offsetHeight+this.rootMargin}px`}}),{rootMargin:`${this.rootMargin}px`,threshold:[0,...Array.from({length:Math.ceil(100)},((t,e)=>e/100)),1]}),this.interval=window.setInterval((()=>{const e=t instanceof HTMLElement?t.scrollTop:t.scrollY;this.style.top=`${e+this.offsetHeight+this.rootMargin}px`}),this.interval),this.intersectionObserver.observe(this)}disconnectedCallback(){window.clearInterval(this.interval),this.intersectionObserver?.disconnect(),super.disconnectedCallback()}render(){return W`<slot></slot>`}};ci([ht({type:Number}),pi("design:type",Object)],di.prototype,"rootMargin",void 0),ci([ht({type:Number}),pi("design:type",Object)],di.prototype,"checkInterval",void 0),di=ci([ct("scrolling-ad-component")],di);var hi=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ui=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fi=class extends at{constructor(){super(...arguments),this.moveRatio=.15,this.backgroundShift=9,this.positionShift=34,this.autoConfigureGlassSource=!1}static{this.styles=r`
		.wrap {
			position: relative;
			width: 100%;
			height: 100%;
		}
	`}firstUpdated(){const[t]=this._image,[e]=this._glass,i=this._wrapElement;this.autoConfigureGlassSource&&t.hasAttribute("src")&&(e.style.backgroundImage=`url("${t.getAttribute("src")??""}")`),Object.assign(e.style,{overflow:"hidden",display:"block",position:"absolute"}),i.addEventListener("pointermove",this.mouseMoveListener=o=>{const{top:s,left:n}=i.getBoundingClientRect(),r=o.x-n,a=o.pageY-s,{offsetWidth:l,offsetHeight:c}=t;let p=r/l*100,d=a/c*100;r>=.01*l&&(p+=this.moveRatio*p),a>=.01*c&&(d+=this.moveRatio*d),Object.assign(e.style,{backgroundPositionX:p-this.backgroundShift+"%",backgroundPositionY:d-this.backgroundShift+"%",left:r-this.positionShift+"px",top:a-this.positionShift+"px"})},{passive:!0})}disconnectedCallback(){this._wrapElement.removeEventListener("mousemove",this.mouseMoveListener),super.disconnectedCallback()}render(){return W`<div class="wrap">
			<slot name="image"></slot>
			<slot name="glass"></slot>
		</div>`}};hi([ht({type:Number}),ui("design:type",Object)],fi.prototype,"moveRatio",void 0),hi([ht({type:Number}),ui("design:type",Object)],fi.prototype,"backgroundShift",void 0),hi([ht({type:Number}),ui("design:type",Object)],fi.prototype,"positionShift",void 0),hi([ht({type:Boolean}),ui("design:type",Object)],fi.prototype,"autoConfigureGlassSource",void 0),hi([vt({slot:"image"}),ui("design:type",Array)],fi.prototype,"_image",void 0),hi([vt({slot:"glass"}),ui("design:type",Array)],fi.prototype,"_glass",void 0),hi([gt(".wrap"),ui("design:type",HTMLElement)],fi.prototype,"_wrapElement",void 0),fi=hi([ct("zooming-image-component")],fi);var gi=JSON.parse('{"components":[{"name":"Accordion","link":"../accordion"},{"name":"Autocomplete Input","link":"../autocomplete-list"},{"name":"Backface Carousel","link":"../backface-carousel"},{"name":"Ciphering Text","link":"../ciphering-text"},{"name":"Color Picker","link":"../color-picker"},{"name":"Countdown","link":"../countdown"},{"name":"Custom Select","link":"../custom-select"},{"name":"Custom Video","link":"../custom-video"},{"name":"Floating Panel","link":"../floating-panel"},{"name":"Gallery Carousel","link":"../gallery-carousel"},{"name":"Image Comparator","link":"../image-comparator"},{"name":"Magnifier","link":"../magnifier"},{"name":"Menu Carousel","link":"../menu-carousel"},{"name":"One Page Scroll","link":"../one-page-scroll"},{"name":"Parallax","link":"../parallax"},{"name":"Perspective Carousel","link":"../perspective-carousel"},{"name":"Popup","link":"../popup"},{"name":"Range Input","link":"../range-input"},{"name":"Rebuilding Text","link":"../rebuilding-text"},{"name":"Scrolling Ad","link":"../scrolling-ad"},{"name":"Sticky Header","link":"../sticky-header"},{"name":"Table Filtering","link":"../table-filtering"},{"name":"Tabs","link":"../tabs"},{"name":"Toast","link":"../toast"},{"name":"Typing Text","link":"../typing-text"},{"name":"Zooming Image","link":"../zooming-image"}]}'),mi=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let yi=class extends at{constructor(){super(...arguments),this.activeLink=""}static{this.styles=r`
    .wrap {
      mask-image: linear-gradient(
        to top,
        transparent 0%,
        rgb(0, 0, 0) 10%,
        rgb(0, 0, 0) 100%,
        transparent 100%
      );
      -webkit-mask-image: linear-gradient(
        to top,
        transparent 0%,
        rgb(0, 0, 0) 10%,
        rgb(0, 0, 0) 100%,
        transparent 100%
      );
      overflow-y: scroll;
      height: 100%;
      scrollbar-width: none;
      display: flex;
      flex-direction: column;
      gap: 2vh;
      font-family: Helvetica, Segoe UI, Arial, system-ui;
    }

    @media (max-width: 800px) {
      .wrap {
        flex-direction: row;
      }
    }

    * {
      transition: all 0.1s ease-in;
    }

    *:hover {
      color: #57c9e5;
    }

    details:not([open]) svg {
      transform: rotate(-90deg);
    }

    .wrap::-webkit-scrollbar {
      display: none;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: 0;
      padding: 2rem 0 1.5rem 2rem;
      list-style-type: none;
    }

    .list-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      cursor: pointer;
    }

    .list__heading {
      display: flex;
      font-size: 16px;
      color: rgb(236, 237, 238);
      gap: 0.5rem;
      align-items: center;
      text-transform: uppercase;
    }

    .list-sublist {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .list-sublist__item {
      margin-left: 2.25rem;
    }

    .list-sublist__item-link {
      position: relative;
      color: rgba(236, 237, 238);
      text-decoration: none;
      font-size: 16px;
      opacity: 0.6;
    }

    .list-sublist__item--active {
      width: 100%;
      margin-left: 0;
      padding-left: 2.25rem;
      border-left: rgb(255, 112, 127) 2px solid;
      padding: 0.25rem 0.25rem 0.25rem 0.5rem;
      background-color: #ff2a5130;
    }

    .list-sublist__item--active .list-sublist__item-link::before {
      content: none;
    }

    .list-sublist__item-link::before {
      position: absolute;
      left: -1.25rem;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background-color: #eee;
      opacity: 0.75;
      border-radius: 50%;
      content: "";
    }

    .list-sublist__item-link:hover {
      opacity: 0.75;
    }
  `}render(){return W`
      <nav class="wrap">
        ${Object.entries(gi).map((([t,e])=>W`
            <div class="list">
              <details class="list-item" open>
                <summary class="list__heading">
                  <span>${t}</span>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="1em"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="1em"
                  >
                    <path
                      d="M15.5 19l-7-7 7-7"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </summary>
                <div class="list-sublist-wrap">
                  <ul class="list-sublist">
                    ${e.map((({name:t,link:e})=>W`<li class="list-sublist__item ${t===this.activeLink?"list-sublist__item--active":""}">
                        <a class="list-sublist__item-link" href="${e}"
                          >${t}</a
                        >
                      </li>`))}
                  </ul>
                </div>
              </details>
            </div>
          `))}
      </nav>
    `}};mi([ht(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],yi.prototype,"activeLink",void 0),yi=mi([ct("sidebar-component")],yi);let vi=class extends at{static{this.styles=r`
    .navigation {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 50px;
      box-sizing: border-box;
      color: #fff;
      font-family: Helvetica, Segoe UI, Arial, sans-serif;
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
  `}render(){return W`
      <nav class="navigation">
        <span class="navigation__name">JS Components Library</span>
        <ul class="navigation-links">
          <a href="#" class="navigation-link">Components</a>
          <a href="#" class="navigation-link">About</a>
          <a href="#" class="navigation-link">React Version</a>
          <a href="#" class="navigation-link">Vue Version</a>
        </ul>
        <a class="navigation-icon" href="#">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </a>
      </nav>
    `}};vi=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([ct("header-component")],vi)}();