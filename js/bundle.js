/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},n=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:p,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",y=f.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const r=s?.call(this);o.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??_)(s?o:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,y?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.0.1");const S=globalThis,$=S.trustedTypes,C=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,k="?"+O,j=`<${k}>`,R=document,E=()=>R.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,P="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,H=/>/g,N=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,D=/"/g,U=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),W=B(1),F=(B(2),Symbol.for("lit-noChange")),V=Symbol.for("lit-nothing"),q=new WeakMap,G=R.createTreeWalker(R,129);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=T;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,p=0;for(;p<i.length&&(n.lastIndex=p,l=n.exec(i),null!==l);)p=n.lastIndex,n===T?"!--"===l[1]?n=z:void 0!==l[1]?n=H:void 0!==l[2]?(U.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=o??T,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?N:'"'===l[3]?D:M):n===D||n===M?n=N:n===z||n===H?n=T:(n=N,o=void 0);const d=n===N&&t[e+1].startsWith("/>")?" ":"";r+=n===T?i+j:c>=0?(s.push(a),i.slice(0,c)+A+i.slice(c)+O+d):i+O+(-2===c?e:d)}return[X(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=K.createElement(l,i),G.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(A)){const e=c[r++],i=s.getAttribute(t).split(O),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(O)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(U.test(s.tagName)){const t=s.textContent.split(O),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],E()),G.nextNode(),a.push({type:2,index:++o});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(O,t+1));)a.push({type:7,index:o}),t+=O.length-1}o++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===F)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=L(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??R).importNode(e,!0);G.currentNode=s;let o=G.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=G.nextNode(),r++)}return G.currentNode=R,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),L(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&L(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}T(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.k(E()),this.k(E()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=J(this,t,e,0),r=!L(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=J(this,s[i+n],e,n),a===F&&(a=this._$AH[n]),r||=!L(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??V)===F)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=S.litHtmlPolyfillSupport;rt?.(K,Q),(S.litHtmlVersions??=[]).push("3.0.1");class nt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(E(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.0.1");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ct={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:_},pt=(t=ct,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ht(t){return dt({...t,state:!0,attribute:!1})}const ut=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function ft(t,e){return(i,s,o)=>{const r=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:n}="object"==typeof s?i:o??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ut(i,s,{get(){if(e){let e=t.call(this);return void 0===e&&(e=r(this),n.call(this,e)),e}return r(this)}})}return ut(i,s,{get(){return r(this)}})}}let mt;function gt(t){return(e,i)=>ut(e,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}function yt(t){return(e,i)=>{const{slot:s,selector:o}=t??{},r="slot"+(s?`[name=${s}]`:":not([name])");return ut(e,i,{get(){const e=this.renderRoot?.querySelector(r),i=e?.assignedElements(t)??[];return void 0===o?i:i.filter((t=>t.matches(o)))}})}}const vt=t=>(...e)=>({_$litDirective$:t,values:e});class bt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const _t="important",wt=" !"+_t,xt=vt(class extends bt{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(const t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ut.add(t);const e="string"==typeof s&&s.endsWith(wt);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?_t:""):i[t]=s}}return F}});function St(t){if(null==t)throw new Error(`The value ${t} is nullable, but it must not be`)}var $t=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Ct=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let At=class extends nt{constructor(){super(...arguments),this._elements=[],this._headerHeights=[],this._widths=[],this.opened=[],this.multiple=!1}static{this.styles=r`
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
  `}connectedCallback(){super.connectedCallback(),this._elements.length=this._widths.length=0,this._elements=Array.from(this.children).filter((t=>"LI"===t.nodeName&&2===t.children.length)).map((t=>[t.children[0],t.children[1]])),this.opened=this.opened.length===this._elements.length?[...this.opened]:this._elements.map((()=>!1))}disconnectedCallback(){this._elements.length=this._widths.length=0,super.disconnectedCallback()}firstUpdated(){this.updateWidths(),this.opened=this.opened.length===this._elements.length?[...this.opened]:this._elements.map((()=>!1))}updated(){this.updateWidths()}updateWidths(){this._widths.length=this._headerHeights.length=0,St(this.shadowRoot);for(const t of Array.from(this.shadowRoot.children[0].children).filter((t=>2===t.children.length)))this._widths.push(t.children[1].offsetHeight),this._headerHeights.push(t.children[0].offsetHeight)}_clickAccordion(t){this.updateWidths(),this.opened=this.opened.map(((e,i)=>t===i?!e:!!this.multiple&&e))}render(){return W`
      <ul class="accordions">
        ${[...this._elements].map(((t,e)=>{const[i,s]=t,o=this.opened[e]?{cursor:"n-resize",maxHeight:this._widths[e]+this._headerHeights[e]+"px"}:{cursor:"pointer",maxHeight:`${this._headerHeights[e]}px`};return W`<li class="accordion" style=${xt(o)}>
              <header
                class="accordion__heading"
                @click=${{handleEvent:()=>this._clickAccordion(e)}}
              >
                ${i}
              </header>
              <footer class="according__content">${s}</footer>
            </li>`})).filter(Boolean)}
      </ul>
    `}};var Ot;$t([ht(),Ct("design:type",Array)],At.prototype,"_elements",void 0),$t([ht(),Ct("design:type",Array)],At.prototype,"_headerHeights",void 0),$t([ht(),Ct("design:type",Array)],At.prototype,"_widths",void 0),$t([dt({type:Array,converter:{fromAttribute:t=>{if(null===t)return[];const e=t.split(",").map((t=>"true"===t||"1"===t));return e},toAttribute:t=>t.join(",")}}),Ct("design:type",Array)],At.prototype,"opened",void 0),$t([dt({type:Boolean}),Ct("design:type",Object)],At.prototype,"multiple",void 0),At=$t([lt("accordion-component")],At),function(t){t[t.BACKWARDS=-1]="BACKWARDS",t[t.STILL=0]="STILL",t[t.FORWARDS=1]="FORWARDS"}(Ot||(Ot={}));const kt=r`
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
`;var jt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Rt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Et=class extends nt{constructor(){super(...arguments),this._elements=[],this._currentItem=0,this.isHorizontal=!0}static{this.styles=r`
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

    ${kt}
  `}connectedCallback(){super.connectedCallback(),this._elements=Array.from(this.children),this.boundEventListener=this.setupCarousel.bind(this),window.addEventListener("resize",this.boundEventListener)}disconnectedCallback(){super.disconnectedCallback(),this._elements.length=0,window.removeEventListener("resize",this.boundEventListener)}nextSlide(){this.rotateCarousel(this._currentItem+1)}previousSlide(){this.rotateCarousel(this._currentItem-1)}rotateCarousel(t){const e=Array.from(this._carouselItem).length,i=2*Math.PI/e;this._carouselWrap.style.transform=`rotate${this.isHorizontal?"Y":"X"}(${t*-i}rad)`,this._currentItem=t}switchPerspective(){this.isHorizontal=!this.isHorizontal,this.setupCarousel()}firstUpdated(){this.setupCarousel()}setupCarousel(){const t=Array.from(this._carouselItem),e=t.length,i=2*Math.PI/e,s=parseFloat(getComputedStyle(t[0])[this.isHorizontal?"width":"height"])/(2*Math.tan(Math.PI/e));this._carouselWrap.style.transformOrigin=`50% 50% ${-s}px`;for(let o=0;o<e;o++)t[o].style.padding="0",0!==o&&(t[o].style.transformOrigin=`50% 50% ${-s}px`,t[o].style.transform=`rotate${this.isHorizontal?"Y":"X"}(${o*i}rad)`);this.rotateCarousel(this._currentItem)}render(){return W`
      <div>
        <div class="carousel ${this.isHorizontal?"":"carousel--vertical"}">
          <ul class="carousel-items">
            ${this._elements.map((t=>W`<li class="carousel-item">${t}</li>`))}
          </ul>
        </div>
        <div class="carousel-controls">
          <button
            class="carousel-controls__previous-button"
            @click="${this.previousSlide}"
          ></button>
          <button
            class="carousel-controls__perspective-button"
            @click="${this.switchPerspective}"
          >
            switch
          </button>
          <button
            class="carousel-controls__next-button"
            @click="${this.nextSlide}"
          ></button>
        </div>
      </div>
    `}};jt([ht(),Rt("design:type",Array)],Et.prototype,"_elements",void 0),jt([ht(),Rt("design:type",Object)],Et.prototype,"_currentItem",void 0),jt([ft(".carousel-items"),Rt("design:type",HTMLElement)],Et.prototype,"_carouselWrap",void 0),jt([(t,e)=>ut(t,e,{get(){return(this.renderRoot??(mt??=document.createDocumentFragment())).querySelectorAll(".carousel-item")}}),Rt("design:type",Array)],Et.prototype,"_carouselItem",void 0),jt([dt({type:Boolean,converter:{fromAttribute:t=>Boolean(Number(t)),toAttribute:t=>String(t)}}),Rt("design:type",Object)],Et.prototype,"isHorizontal",void 0),Et=jt([lt("backface-carousel-component")],Et);var Lt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},It=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Pt{constructor(t){this.image=t,this.fullWidth=t.clientWidth,this.fullHeight=t.clientHeight,t.style.position="absolute",this.moveTo=function(t,e,i){this.width=this.fullWidth*i,this.height=this.fullHeight*i,this.x=t,this.y=e,this.scale=i;var s=this.image.style;s.width=this.width+"px",s.left=t+"px",s.top=e+"px",s.zIndex=String(100*i|0)}}}let Tt=class extends nt{constructor(){super(...arguments),this._rotation=Math.PI/2,this._destRotation=Math.PI/2,this._frameTimer=0,this.yPos=112,this.yRadius=128,this.farScale=.9,this.speed=.11}static{this.styles=kt}rotateItem(t,e){const i=this._items[t],s=Math.sin(e),o=this.farScale+(1-this.farScale)*(s+1)*.5;this.xPos,this.xRadius,i.moveTo(this.xPos+o*(Math.cos(e)*this.xRadius-i.fullWidth/2),this.yPos+o*s*this.yRadius,o)}carouselRender(){const t=this._items.length,e=2*Math.PI/t;let i=this._rotation;for(let s=0;s<t;s++)this.rotateItem(s,i),i+=e}scheduleNextFrame(){this._frameTimer=window.setTimeout((()=>this.playFrame()),32)}playFrame(){const t=this._destRotation-this._rotation;Math.abs(t)<=0?(this._rotation=this._destRotation,window.clearTimeout(this._frameTimer),this._frameTimer=0):(this._rotation+=t*this.speed,this.scheduleNextFrame()),this.carouselRender()}go(t){this._destRotation+=2*Math.PI/this._items.length*t,0===this._frameTimer&&this.scheduleNextFrame()}firstUpdated(){this.setupCarousel()}setupCarousel(){const t=this.querySelector(".carousel");if(t){this._carousel=t,this._images=Array.from(this.querySelectorAll(".carousel-item"));for(const t of this._images)t.removeAttribute("style");this.xPos??=.5*this._carousel.offsetWidth,this.yPos??=.1*this._carousel.offsetHeight,this.xRadius??=this._carousel.offsetWidth/2.3,this.yRadius??=this._carousel.offsetHeight/6,this._items=this._images.map((t=>new Pt(t))),this.carouselRender()}}connectedCallback(){super.connectedCallback(),this.boundEventListener=()=>{this.xRadius=this.xPos=void 0,this.setupCarousel()},window.addEventListener("resize",this.boundEventListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.boundEventListener)}goBack(){this.go(-1)}goForward(){this.go(1)}render(){return W`
      <slot></slot>
      <div class="carousel-controls">
        <button
          class="carousel-controls__previous-button"
          @click="${this.goBack}"
        ></button>
        <button
          class="carousel-controls__next-button"
          @click="${this.goForward}"
        ></button>
      </div>
    `}};Lt([ht(),It("design:type",HTMLElement)],Tt.prototype,"_carousel",void 0),Lt([ht(),It("design:type",Array)],Tt.prototype,"_images",void 0),Lt([ht(),It("design:type",Object)],Tt.prototype,"_rotation",void 0),Lt([ht(),It("design:type",Object)],Tt.prototype,"_destRotation",void 0),Lt([ht(),It("design:type",Object)],Tt.prototype,"_frameTimer",void 0),Lt([ht(),It("design:type",Array)],Tt.prototype,"_items",void 0),Lt([dt({type:Number}),It("design:type",Number)],Tt.prototype,"xPos",void 0),Lt([dt({type:Number}),It("design:type",Object)],Tt.prototype,"yPos",void 0),Lt([dt({type:Number}),It("design:type",Number)],Tt.prototype,"xRadius",void 0),Lt([dt({type:Number}),It("design:type",Object)],Tt.prototype,"yRadius",void 0),Lt([dt({type:Number}),It("design:type",Object)],Tt.prototype,"farScale",void 0),Lt([dt({type:Number}),It("design:type",Object)],Tt.prototype,"speed",void 0),Tt=Lt([lt("menu-carousel-component")],Tt);var zt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Nt=class extends nt{constructor(){super(...arguments),this.options=[],this._isListOpened=!1,this._filteredOptions=[]}static{this.styles=r`
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
  `}onInputHandler(t){if(!(t instanceof HTMLInputElement&&t.value))return void(this._isListOpened=!1);const e=t.value.toLowerCase().trim(),i=[];for(const t of this.options){const s=t.toLowerCase();console.log(s.startsWith(e)),s!==e&&s.startsWith(e)&&i.push(t)}i.length&&(this._isListOpened=!0,this._filteredOptions=i)}setInputValue(t){const e=this.querySelector("input");e&&(e.value=t,this._isListOpened=!1,this._filteredOptions=[])}connectedCallback(){super.connectedCallback(),this.boundInputEventListener=({target:t})=>{t&&this.onInputHandler(t)},console.log(this.querySelector("input")),this.querySelector("input")?.addEventListener("input",this.boundInputEventListener)}disconnectedCallback(){super.disconnectedCallback(),this.querySelector("input")?.removeEventListener("input",this.boundInputEventListener)}render(){return W`
      <div class="autocomplete-wrap">
        <slot></slot>
        ${this._isListOpened&&this._filteredOptions.length?W`<ul class="autocomplete-items">
          ${this._filteredOptions.map((t=>W`<li class="autocomplete-item" @click="${()=>{this.setInputValue(t)}}">${t}</li>`))}
        </ul>`:""}
      </div>
    `}};zt([dt({type:Array,converter:{fromAttribute:t=>null===t?[]:t.split(",").map((t=>t.trim())),toAttribute:t=>t.join(",")}}),Ht("design:type",Array)],Nt.prototype,"options",void 0),zt([ht(),Ht("design:type",Object)],Nt.prototype,"_isListOpened",void 0),zt([ht(),Ht("design:type",Array)],Nt.prototype,"_filteredOptions",void 0),Nt=zt([lt("autocomplete-list-component")],Nt);var Mt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Dt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Ut extends nt{constructor(){super(...arguments),this.strings=[],this.repetitions=1}static validateElement(t){return!t.firstElementChild&&t.textContent}*generateNextStrings(t){const e=function*(t,e){const i=[...e.strings];let s=1,o=0,r=t;for(;o<e.repetitions;)o++,yield[r,i[s]],r=i[s],s=(s+1)%i.length;return[r,r]}(t,this);return yield*e,["",""]}onInterval(){const{done:t,value:e}=this.generator.next();t?(window.clearTimeout(this.windowInterval),this.windowInterval=void 0):this.triggerTextAnimation(...e)}get _elements(){return Array.from(this.querySelectorAll("pre")).filter(Ut.validateElement)}connectedCallback(){super.connectedCallback();const t=this._elements[0].textContent??"";this.splitText?.(),this.generator=this.generateNextStrings(t),this.windowInterval=window.setTimeout((()=>{this.onInterval()}),this.interval)}disconnectedCallback(){super.disconnectedCallback(),this.generator.return(["",""]),clearInterval(this.windowInterval)}render(){return W`<slot></slot>`}}Mt([dt({type:Array,converter:{fromAttribute:t=>t?.split(";")??[],toAttribute:t=>t.join(";")}}),Dt("design:type",Array)],Ut.prototype,"strings",void 0),Mt([dt({type:Number}),Dt("design:type",Object)],Ut.prototype,"repetitions",void 0);var Bt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Wt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ft=class extends Ut{constructor(){super(...arguments),this.interval=3e3,this.typingSpeed=45,this.characters=["!",'"',"#","$","%","*","0","1",":",";","?","@","[","]","\\","~","'","/","{","}","|","&","(",")","-","<",">"]}splitText(t){for(const e of this._elements){const i=e.textContent??"";e.textContent="";for(const t of i)e.insertAdjacentHTML("beforeend",`<span>${t}</span>`);if(t&&t.length>i.length)for(let s=0;s<t.length-i.length;s++)e.insertAdjacentElement("beforeend",document.createElement("span"))}}cipherLetter(t){const{element:e,newLetter:i,delayed:s,i:o}=t;let r=Math.round(Math.random()*((s?44:14)-6)+6),n=!1,a=0;const l=1e3*Math.random()+(s?this.typingSpeed*o:0);return setTimeout((()=>{for(;a<=r;){const t=this.characters;!function(s){setTimeout((()=>{n||(e.textContent=t[Math.floor(Math.random()*t.length)]),s>=r&&(n=!0,e.textContent=i,e.removeAttribute("data-ciphering-text-in-progress"))}),65*s)}(a++)}}),l),65*r+65}triggerTextAnimation(t,e){const i=Array.from(this.querySelectorAll("pre"));for(const e of i)e.textContent=t;this.splitText(e);const s=[];for(const t of i)Array.from(t.children).forEach(((t,i)=>{t.textContent!==e[i]&&(t.setAttribute("data-ciphering-text-in-progress",""),s.push(this.cipherLetter({element:t,newLetter:e[i],i,delayed:0===t.textContent?.length})))}));setTimeout((()=>{this.onInterval()}),Math.max(...s)+this.interval)}};Bt([dt({type:Number}),Wt("design:type",Object)],Ft.prototype,"interval",void 0),Bt([dt({type:Number}),Wt("design:type",Object)],Ft.prototype,"typingSpeed",void 0),Bt([dt({type:Array,converter:{fromAttribute:t=>t?.split("")??["!",'"',"#","$","%","*","0","1",":",";","?","@","[","]","\\","~","'","/","{","}","|","&","(",")","-","<",">"],toAttribute:t=>t.join("")}}),Wt("design:type",Array)],Ft.prototype,"characters",void 0),Ft=Bt([lt("ciphering-text-component")],Ft);var Vt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},qt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Gt=class extends nt{constructor(){super(...arguments),this.imageUrl="",this.width=245,this.height=245,this.backgroundColor=[0,0,0,1],this.rgba=[0,0,0,1]}static{this.rgbaConverter={fromAttribute:t=>{const e=t?.split(",");return e&&4===e.length&&e.every((t=>"number"==typeof t))?e.map(Number):[0,0,0,100]},toAttribute:t=>t.join(",")}}static{this.styles=r`
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
  `}convertOpacityToBackground(){const t=1-this.rgba[3]/100,e=this.rgba[3]/100;return this.rgba.map(((i,s)=>3===s?1:Math.round(t*this.backgroundColor[s]+e*i*100)))}getHex(){return"#"+this.convertOpacityToBackground().slice(0,-1).map((t=>Number(t).toString(16).padStart(2,"0"))).join("")}getRGB(){return`rgb(${this.convertOpacityToBackground().slice(0,-1).join(", ")})`}getRGBA(){return`rgba(${this.rgba.join(", ")})`}initColorPicker(){this.canvasElement.then((t=>{const e=t.getContext("2d");St(e);const i=new Image(this.width,this.height);i.src=this.imageUrl,i.onload=()=>e.drawImage(i,0,0,i.width,i.height),t.addEventListener("mousedown",(t=>{this.rgba=[...e.getImageData(t.offsetX,t.offsetY,1,1).data.slice(0,-1),this.rgba[3]]}))}))}connectedCallback(){super.connectedCallback(),this.initColorPicker(),this.opacityRange.then((t=>t._onUpdateListener=t=>{this.rgba=[...this.rgba.slice(0,-1),t]}))}render(){return W`
      <div class="wrap" style="--width: ${this.width}px; --height: ${this.height}px">
        <div class="color-picker-wrap">
          <div class="color-picker">
            <canvas class="color-picker__canvas" width="${this.width}" height="${this.height}"></canvas>
          </div>
        </div>
        <div class="info">
          <div class="current-color-wrap">
            <div class="current-color" style=${xt({backgroundColor:this.getRGB()})}></div>
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
    `}};Vt([dt({type:String}),qt("design:type",Object)],Gt.prototype,"imageUrl",void 0),Vt([dt({type:Number}),qt("design:type",Object)],Gt.prototype,"width",void 0),Vt([dt({type:Number}),qt("design:type",Object)],Gt.prototype,"height",void 0),Vt([dt({converter:Gt.rgbaConverter}),qt("design:type",Object)],Gt.prototype,"backgroundColor",void 0),Vt([dt({converter:Gt.rgbaConverter}),qt("design:type",Object)],Gt.prototype,"rgba",void 0),Vt([gt("#opacity-range"),qt("design:type",Promise)],Gt.prototype,"opacityRange",void 0),Vt([gt("canvas"),qt("design:type",Promise)],Gt.prototype,"canvasElement",void 0),Gt=Vt([lt("color-picker-component")],Gt);const Xt=r`
  width: var(--thumbSize, 15px);
  height: var(--thumbSize, 15px);
  background-color: var(--thumbColor, #f50);
  border-radius: 50%;
  border: none;
  transition: 0.35s ease-in-out;
`,Yt=r`rgba(255,85,0, .6)`,Kt=r`rgba(255,85,0, .3)`;var Jt=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Zt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Qt=class extends nt{constructor(){super(...arguments),this.uiRangeID=crypto.randomUUID(),this.minimum=0,this.maximum=100,this.defaultValue=0,this.step=1,this.ticks=[],this.label="",this.thumbSize="15px",this.trackColor="#ccc",this.thumbColor="#f50",this.hoverColor=Kt,this.activeColor=Yt,this.valueSize="25px",this._value=0,this._gradientStyle={}}static{this.styles=r`
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
      ${Xt}
    }

    .range-slider__input::-moz-range-thumb {
      ${Xt}
    }

    .range-slider__input::-webkit-slider-thumb:hover {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${Kt});
    }

    .range-slider__input::-moz-range-thumb:hover {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${Kt});
    }

    .range-slider__input:active::-webkit-slider-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${Yt});
    }

    .range-slider__input:active::-moz-range-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${Yt});
    }

    .range-slider__input:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${Yt});
    }

    .range-slider__input:focus::-moz-range-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${Yt});
    }

    .wrap {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100%;
      padding: 2rem 10px;
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
  `}setGradientStyle(){const t=this._value/this.maximum*100;this._gradientStyle={background:`linear-gradient(to right, ${this.thumbColor} ${t}%, ${this.trackColor} ${t}%)`}}onValueChange(t){t.target,HTMLInputElement,this._value=Number(t.target.value),this.setGradientStyle(),this._onUpdateListener?.(this._value)}connectedCallback(){super.connectedCallback(),this.boundEventListener=t=>{this.onValueChange(t)},this._value=this.defaultValue,this.rangeSlider.then((t=>{this.setGradientStyle(),t.addEventListener("input",this.boundEventListener)}))}disconnectedCallback(){this.rangeSlider.then((t=>{t.removeEventListener("input",this.boundEventListener)})),super.disconnectedCallback()}render(){return W`
      <div class="wrap" style="${["thumbSize","trackColor","thumbColor","hoverColor","activeColor","valueSize"].map((t=>`--${String(t)}: ${this[t]}`)).join("; ")}">
        <div class="range-slider">
          <label class="range-slider__label" for="${this.uiRangeID}">${this.label}</label>
          <input
            type="range"
            min="${this.minimum}"
            max="${this.maximum}"
            value="${this._value}"
            id="${this.uiRangeID}"
            step="${this.step}"
            class="range-slider__input"
            style=${xt(this._gradientStyle)}
          >
          ${this.ticks.length?W`
            <ul class="range-slider-ticks">
              ${this.ticks.map((t=>W`<li class="range-slider-ticks__tick" style="--value: ${t}%">${t}</li>`))}
            </ul>
          `:""}
        </div>
        <span class="value">${this._value}</span>
      </div>
    `}};Jt([dt({type:Number}),Zt("design:type",Object)],Qt.prototype,"minimum",void 0),Jt([dt({type:Number}),Zt("design:type",Object)],Qt.prototype,"maximum",void 0),Jt([dt({type:Number}),Zt("design:type",Object)],Qt.prototype,"defaultValue",void 0),Jt([dt({type:Number}),Zt("design:type",Object)],Qt.prototype,"step",void 0),Jt([dt({type:Array,converter:{fromAttribute:t=>t?t.split(",").map(Number):[],toAttribute:t=>t.join(",")}}),Zt("design:type",Array)],Qt.prototype,"ticks",void 0),Jt([dt({type:String}),Zt("design:type",Object)],Qt.prototype,"label",void 0),Jt([dt({type:String}),Zt("design:type",Object)],Qt.prototype,"thumbSize",void 0),Jt([dt({type:String}),Zt("design:type",Object)],Qt.prototype,"trackColor",void 0),Jt([dt({type:String}),Zt("design:type",Object)],Qt.prototype,"thumbColor",void 0),Jt([dt({type:String}),Zt("design:type",Object)],Qt.prototype,"hoverColor",void 0),Jt([dt({type:String}),Zt("design:type",Object)],Qt.prototype,"activeColor",void 0),Jt([dt({type:String}),Zt("design:type",Object)],Qt.prototype,"valueSize",void 0),Jt([ht(),Zt("design:type",Object)],Qt.prototype,"_value",void 0),Jt([ht(),Zt("design:type",Object)],Qt.prototype,"_gradientStyle",void 0),Jt([ht(),Zt("design:type",Function)],Qt.prototype,"_onUpdateListener",void 0),Jt([gt(".range-slider__input"),Zt("design:type",Promise)],Qt.prototype,"rangeSlider",void 0),Qt=Jt([lt("range-input-component")],Qt);var te,ee=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},ie=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let se=class extends nt{constructor(){super(...arguments),this.date=new Date("May 6, 2085 11:00:00"),this.intervalId=0}static{te=this}static reduceTimeUnits(t){return t.map(((e,i)=>({...e,timeFactor:t.slice(0,i+1).reduce(((t,e)=>t*e.timeFactor),1)}))).reverse()}static{this.units=te.reduceTimeUnits([{name:"second",timeFactor:1e3},{name:"minute",timeFactor:60},{name:"hour",timeFactor:60},{name:"day",timeFactor:24},{name:"year",timeFactor:356}])}firstUpdated(){this.renderTexts()}renderTexts(t=te.units){let e="",i=this.date.getTime()-(new Date).getTime();t.forEach((({timeFactor:t,name:s})=>{const o=Math.floor(i/t);e+=o<=0?"":`${o} ${"1"===String(o).slice(-1)?s:s+"s"} `,i%=t})),e=e?e.trim():"0 seconds";for(const t of this._countdownItems)t.textContent=e}connectedCallback(){super.connectedCallback(),this.intervalId=window.setInterval((()=>this.renderTexts()),1e3)}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.intervalId)}render(){return W`<slot></slot>`}};ee([dt({converter:{fromAttribute:t=>new Date(t??"May 6, 2085 11:00:00"),toAttribute:t=>t.toString()}}),ie("design:type",Object)],se.prototype,"date",void 0),ee([yt({selector:"[data-countdown]",flatten:!0}),ie("design:type",Array)],se.prototype,"_countdownItems",void 0),se=te=ee([lt("countdown-component")],se);const oe=vt(class extends bt{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const s=!!e[t];s===this.it.has(t)||this.st?.has(t)||(s?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return F}});var re,ne=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},ae=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let le=class extends nt{constructor(){super(...arguments),this._internalElements=[],this._isOpened=!1}static{re=this}static{this.styles=r`
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
	`}onItemSelected(t){this._isOpened=!1,t.isDisabled||(this._internalElements.forEach((e=>e.isSelected=e===t)),this._selectElement.forEach((e=>e.value=t.value)))}connectedCallback(){super.connectedCallback(),this.boundDocumentClickListener=t=>{t.composedPath().some((t=>t instanceof re))||(this._isOpened=!1)},document.addEventListener("click",this.boundDocumentClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundDocumentClickListener)}firstUpdated(){for(const t of this._selectElement)this._internalElements=Array.from(t.children).map(((e,i)=>({innerContent:e.textContent??"",value:e.getAttribute("value")??"",isSelected:t.selectedIndex===i,isDisabled:Boolean(e.getAttribute("disabled"))})))}render(){return W`
			<slot
				style=${xt({display:this._internalElements.length?"none":"revert"})}
			></slot>
			<div class="wrap">
				<div
					class="custom-select-option custom-select-current ${oe({active:this._isOpened})}"
					@click="${()=>{this._isOpened=!this._isOpened}}"
				>
					${this._internalElements.find((t=>t.isSelected))?.innerContent??""}
				</div>
				<ul
					class="custom-select-options ${oe({hidden:!(this._internalElements.length&&this._isOpened)})}"
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
		`}};ne([yt({flatten:!0}),ae("design:type",Array)],le.prototype,"_selectElement",void 0),ne([ht(),ae("design:type",Array)],le.prototype,"_internalElements",void 0),ne([ht(),ae("design:type",Object)],le.prototype,"_isOpened",void 0),le=re=ne([lt("custom-select-component")],le);var ce=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},pe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let de=class extends nt{constructor(){super(...arguments),this.isOpen=!1}firstUpdated(){if(0===this._floatingPanels.length)return;const[t]=this._floatingPanels;document.addEventListener("mousedown",this.listener=({clientX:e,clientY:i})=>{const s=t.offsetLeft,o=t.offsetTop,r=r=>{t.style.left=s+r.clientX-e+"px",t.style.top=o+r.clientY-i+"px"};t.addEventListener("mousemove",r,!1),window.addEventListener("mouseup",(()=>t.removeEventListener("mousemove",r,!1)))})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.listener)}render(){return this.isOpen?W`<slot></slot>`:""}};ce([dt({type:Boolean}),pe("design:type",Object)],de.prototype,"isOpen",void 0),ce([yt({flatten:!0}),pe("design:type",Array)],de.prototype,"_floatingPanels",void 0),de=ce([lt("floating-panel-component")],de);var he=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},ue=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fe=class extends nt{constructor(){super(...arguments),this.smoothDiametralTransition=!1,this.current=1,this.frameGap=20,this.animationDuration=500,this.showArrows=!1,this.showToggles=!1,this._itemsLength=0,this._isAnimating=!1}static{this.styles=r`
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
	`}firstUpdated(){const t=this._carouselItems;this._itemsLength=t.length,this._galleryList.style.left=-100*this.current+"%",t[0].before(t[t.length-1].cloneNode(!0)),t[t.length-1].after(t[0].cloneNode(!0))}checkCurrentSlide(t){return 0===t||t>this._itemsLength?0===t?this._itemsLength:1:t}slideTo(t,e){const i=this._galleryList;this._isAnimating=!0;const s=new Date;this.interval=window.setInterval((()=>{let o=((new Date).getTime()-s.getTime())/this.animationDuration;o>1&&(o=1),i.style.left=t+Math.abs(e-t)*o**2*(t>e?-1:1)+"%",1===o&&(clearInterval(this.interval),this._isAnimating=!1,this.current=this.checkCurrentSlide(this.current),this._galleryList.style.left=-100*this.current+"%")}),this.frameGap)}changeCurrentSlide(t){if(this._itemsLength<=1)return;this.smoothDiametralTransition||(t=this.checkCurrentSlide(t));const e=parseInt(this._galleryList.style.left,10)||0,i=-100*t;this._isAnimating||e===i||(this.current=t,this.slideTo(e,i))}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.interval)}render(){return W`<div class="wrap">
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
				></button>`:""}
			</div>
			${0!==this._itemsLength&&this.showToggles?W`<ul class="gallery-toggles">
						${Array.from({length:this._itemsLength},((t,e)=>W`<li
									class="gallery-toggle ${oe({"gallery-toggle--active":this.current-1===e})}"
									@click="${()=>{this.changeCurrentSlide(e+1)}}"
								></li>`))}
				  </ul>`:""}
		</div>`}};he([dt({type:Boolean}),ue("design:type",Object)],fe.prototype,"smoothDiametralTransition",void 0),he([dt({type:Number}),ue("design:type",Object)],fe.prototype,"current",void 0),he([dt({type:Number}),ue("design:type",Object)],fe.prototype,"frameGap",void 0),he([dt({type:Number}),ue("design:type",Object)],fe.prototype,"animationDuration",void 0),he([dt({type:Boolean}),ue("design:type",Object)],fe.prototype,"showArrows",void 0),he([dt({type:Boolean}),ue("design:type",Object)],fe.prototype,"showToggles",void 0),he([yt({flatten:!0}),ue("design:type",Array)],fe.prototype,"_carouselItems",void 0),he([ft(".gallery-list"),ue("design:type",HTMLElement)],fe.prototype,"_galleryList",void 0),he([ft(".gallery"),ue("design:type",HTMLElement)],fe.prototype,"_galleryWrap",void 0),he([ht(),ue("design:type",Object)],fe.prototype,"_itemsLength",void 0),he([ht(),ue("design:type",Object)],fe.prototype,"_isAnimating",void 0),fe=he([lt("gallery-carousel-component")],fe);var me=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},ge=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ye=class extends nt{constructor(){super(...arguments),this.windowListeners=[]}static{this.styles=r`
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
  `}initializeImageComparator(t){const e=this._comparatorElements,i=e[t],{offsetWidth:s}=i;let o=!1;const r=document.createElement("div");function n(t){i.style.width=t+"px",r.style.left=i.offsetWidth-r.offsetWidth/2+"px"}r.setAttribute("class","comparison-slider"),this._wrapElement.append(r),n(s-s/e.length*t);const a=t=>{t.preventDefault(),o=!0};r.addEventListener("mousedown",a),r.addEventListener("pointerdown",a),this.windowListeners.unshift((t=>{if(!o)return!1;i.style.left="0";let e=t.pageX-i.getBoundingClientRect().left-window.scrollX;e<0&&(e=0),e>s&&(e=s),n(e)})),window.addEventListener("mousemove",this.windowListeners[0],{passive:!0}),window.addEventListener("pointermove",this.windowListeners[0],{passive:!0}),this.windowListeners.unshift((()=>{o=!1})),window.addEventListener("mouseup",this.windowListeners[0],{passive:!0}),window.addEventListener("pointerup",this.windowListeners[0],{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.windowListeners)["mousemove","pointermove","mouseup","pointerup"].forEach((e=>{window.removeEventListener(e,t)}))}firstUpdated(){for(let t=1;t<this._comparatorElements.length;t++)this.initializeImageComparator(t)}render(){return W`<div class="wrap">
      <slot></slot>
    </div>`}};me([yt(),ge("design:type",Array)],ye.prototype,"_comparatorElements",void 0),me([ft(".wrap"),ge("design:type",HTMLDivElement)],ye.prototype,"_wrapElement",void 0),ye=me([lt("image-comparator-component")],ye);var ve=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let _e=class extends nt{constructor(){super(...arguments),this.zoomScale=2,this.autoConfigureGlassSource=!1}moveMagnifier(t,e){const i=this.cachedImage,s=this.cachedGlass,o=s.offsetWidth/2,r=s.offsetHeight/2;t>i.offsetWidth?t=i.offsetWidth:t<0&&(t=0),e>i.offsetHeight?e=i.offsetHeight:e<0&&(e=0),s.style.left=t-o+"px",s.style.top=e-r+"px",s.style.backgroundPosition="-"+(t*this.zoomScale-o)+"px -"+(e*this.zoomScale-r)+"px"}firstUpdated(){const t=this._image[0].querySelector("[data-magnifier-content]"),[e]=this._glass;St(t),this.autoConfigureGlassSource&&t.hasAttribute("src")&&(e.style.backgroundImage=`url("${t.getAttribute("src")??""}")`),e.style.backgroundSize=`${t.offsetWidth*this.zoomScale}px ${t.offsetHeight*this.zoomScale}px`,this.cachedImage=t,this.cachedGlass=e,this.moveListener=e=>{e.preventDefault();const i=t.getBoundingClientRect();this.moveMagnifier(e.pageX-i.left-window.scrollX,e.pageY-i.top-window.scrollY)},t.addEventListener("mousemove",this.moveListener),e.addEventListener("mousemove",this.moveListener),t.addEventListener("pointermove",this.moveListener),t.addEventListener("pointermove",this.moveListener)}render(){return W`<slot></slot>`}};ve([dt({type:Number}),be("design:type",Object)],_e.prototype,"zoomScale",void 0),ve([dt({type:Boolean}),be("design:type",Object)],_e.prototype,"autoConfigureGlassSource",void 0),ve([yt({flatten:!0}),be("design:type",Array)],_e.prototype,"_image",void 0),ve([yt({selector:"[data-magnifier-glass]"}),be("design:type",Array)],_e.prototype,"_glass",void 0),_e=ve([lt("image-magnifier-component")],_e);var we=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Se=class extends nt{constructor(){super(...arguments),this.isHorizontal=!1,this.duration=500,this.increment=6,this.noScrollbar=!1,this._selectedItem=0,this._isScrolling=!1}static{this.styles=r`
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
	`}easeInOutQuad(t,e,i,s){return(t/=s/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}smoothScrollTo(t){this._isScrolling=!0;const e=this._wrapElement,i=this.isHorizontal?e.scrollLeft:e.scrollTop,s=t-i;let o=0;const r=this.isHorizontal?"scrollLeft":"scrollTop",n=()=>{if(!this.scrollEventListener)return;o+=this.increment;const a=this.easeInOutQuad(o,i,s,this.duration);a>this.increment?e[r]=a-this.increment/2:e[r]=a,o<this.duration?setTimeout(n,this.increment):o>=this.duration&&(e[r]=t,this._isScrolling=!1)};n()}scrollSlide(t){this._isScrolling||(this._selectedItem+=t,this.smoothScrollTo(this._onePageScrollElements[this._selectedItem].offsetHeight*this._selectedItem))}firstUpdated(){const t=this._onePageScrollElements;this._wrapElement.addEventListener("wheel",this.scrollEventListener=e=>{e.deltaY>0?this._selectedItem>=t.length-1?this._isScrolling||this.smoothScrollTo(this._selectedItem=0):this.scrollSlide(1):0===this._selectedItem?this._isScrolling||(this._selectedItem=t.length-1,this.smoothScrollTo((this.isHorizontal?this._wrapElement.scrollWidth:this._wrapElement.scrollHeight)-(this.isHorizontal?t[0].offsetWidth:t[0].offsetHeight))):this.scrollSlide(-1)},{passive:!0})}disconnectedCallback(){this._wrapElement.removeEventListener("wheel",this.scrollEventListener),super.disconnectedCallback()}render(){return W`<div class="wrap ${oe({"wrap--horizontal":this.isHorizontal,"wrap--no-scrollbar":this.noScrollbar})}">
			<slot></slot>
		</div>`}};we([dt({type:Boolean}),xe("design:type",Object)],Se.prototype,"isHorizontal",void 0),we([dt({type:Number}),xe("design:type",Object)],Se.prototype,"duration",void 0),we([dt({type:Number}),xe("design:type",Object)],Se.prototype,"increment",void 0),we([dt({type:Boolean}),xe("design:type",Object)],Se.prototype,"noScrollbar",void 0),we([ht(),xe("design:type",Object)],Se.prototype,"_selectedItem",void 0),we([ht(),xe("design:type",Object)],Se.prototype,"_isScrolling",void 0),we([yt(),xe("design:type",Array)],Se.prototype,"_onePageScrollElements",void 0),we([ft(".wrap"),xe("design:type",HTMLDivElement)],Se.prototype,"_wrapElement",void 0),Se=we([lt("one-page-scroll-component")],Se);var $e=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Ce=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ae=class extends nt{constructor(){super(...arguments),this.isHorizontal=!1,this.isHorizontalTranslation=!1,this.effect=1.968,this.speed=2.7,this.margin=0}static{this.styles=r`
		.wrap {
			position: relative;
            transition: 0.1s;
		}
	`}getFirstScrollableParent(){const t=e=>{if(null==e.parentElement)return window;const{overflowX:i,overflowY:s,overflow:o}=window.getComputedStyle(e.parentElement);console.log(i,s,o);const r=/auto|scroll/;return r.test(o)||this.isHorizontal&&r.test(i)||!this.isHorizontal&&r.test(s)?e.parentElement:t(e.parentElement)};return t(this)}rerender(){const t=this._wrapper,e=this.getFirstScrollableParent();e.removeEventListener("scroll",this.scrollListener);const i=()=>e instanceof HTMLElement?this.isHorizontal?e.scrollLeft:e.scrollTop:this.isHorizontal?e.scrollX:e.scrollY,s=t.getBoundingClientRect()[this.isHorizontal?"left":"top"]+i(),o=(e instanceof HTMLElement?this.isHorizontal?e.clientWidth:e.clientHeight:this.isHorizontal?e.innerWidth:e.innerHeight)/this.effect;e.addEventListener("scroll",this.scrollListener=()=>{const e=i();if(e>s-2*o&&e<s+o){const i=(e-(s-o))/this.speed-this.margin;t.style.transform=`translate${this.isHorizontalTranslation?"X":"Y"}(${i}px)`}},{passive:!0}),this.scrollListener(new Event("scroll"))}firstUpdated(){this.rerender(),window.addEventListener("resize",this.resizeListener=()=>{this.rerender()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeListener)}render(){return W`<div class="wrap">
			<slot></slot>
		</div>`}};$e([dt({type:Boolean}),Ce("design:type",Object)],Ae.prototype,"isHorizontal",void 0),$e([dt({type:Boolean}),Ce("design:type",Object)],Ae.prototype,"isHorizontalTranslation",void 0),$e([dt({type:Number}),Ce("design:type",Object)],Ae.prototype,"effect",void 0),$e([dt({type:Number}),Ce("design:type",Object)],Ae.prototype,"speed",void 0),$e([dt({type:Number}),Ce("design:type",Object)],Ae.prototype,"margin",void 0),$e([ft(".wrap"),Ce("design:type",HTMLElement)],Ae.prototype,"_wrapper",void 0),Ae=$e([lt("parallax-component")],Ae);const Oe=()=>({totalItems:0,containerDimensions:[0,0],items:[],calculations:[{opacity:1,offset:0,distance:0}],carouselRotationsLeft:0,currentlyMoving:!1,itemsAnimating:0,currentDirection:Ot.STILL,leftItemsCount:0,rightItemsCount:0,performingSetup:!0});var ke=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},je=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Re=class extends nt{constructor(){super(...arguments),this.imageSize="300px",this.margin="250px auto",this.startingItem=1,this.separation=175,this.separationMultiplier=.6,this.horizonOffset=0,this.horizonOffsetMultiplier=1,this.sizeMultiplier=.7,this.opacityMultiplier=.87,this.horizon=0,this.flankingItems=3,this.isVertical=!1,this.preloadImages=!1,this.forcedImageWidth=0,this.forcedImageHeight=0,this.animationLength=300,this.centralItemClassName="active",this.allowSwitchingOrientation=!1,this._internalState=Oe()}static{this.styles=r`
		.wrap {
			position: relative;
		}

		.images {
			width: 80%;
		}

		${kt}

		.carousel-controls {
			position: absolute;
			left: 40%;
			transform: translateX(-50%);
			bottom: -5%;
			z-index: 99;
		}
	`}initializeCarouselData(t){const e=window.getComputedStyle(t);this._internalState.totalItems=this.images.length,this._internalState.containerDimensions=[parseInt(e.width,10),parseInt(e.height,10)]}forceImageDimensionIfEnabled(){this.images.forEach((t=>t.style.display="none")),this.forcedImageWidth&&this.forcedImageHeight&&this.images.forEach((t=>{t.style.width=`${this.forcedImageWidth}px`,t.style.height=`${this.forcedImageHeight}px`}))}preload(t){if(!this.preloadImages)return void t();const e=this.images;let i=0;for(const s of e)s.setAttribute("src",s.getAttribute("src")??""),s.addEventListener("load",(()=>{s.style.display="",++i===e.length&&t()}))}setOriginalItemDimensions(){this.images.forEach((t=>{(!t.dataset.originalWidth||this.forcedImageWidth>0)&&(t.style.display="",t.dataset.originalWidth=String(t.clientWidth),t.style.display="none"),(!t.dataset.originalHeight||this.forcedImageHeight>0)&&(t.style.display="",t.dataset.originalHeight=String(t.clientHeight),t.style.display="none")}))}calculatePositionProperties(){let t=this.horizonOffset,e=this.separation;for(let i=1;i<=this.flankingItems+2;i++){i>1&&(t*=this.horizonOffsetMultiplier,e*=this.separationMultiplier);const{distance:s,offset:o,opacity:r}=this._internalState.calculations[i-1];this._internalState.calculations[i]={distance:s+e,offset:o+t,opacity:r*this.opacityMultiplier}}this._internalState.calculations[this.flankingItems+1]={distance:0,offset:0,opacity:0}}setupCarousel(){this._internalState.items=this.images,0===this.horizon&&(this.horizon=this._internalState.containerDimensions[Number(!this.isVertical)]/2);for(const t of this._internalState.items){let e,i;this.isVertical?(e=this.horizon-Number(t.dataset.originalWidth)/2,i=this._internalState.containerDimensions[1]/2-Number(t.dataset.originalHeight)/2):(e=this._internalState.containerDimensions[0]/2-Number(t.dataset.originalWidth)/2,i=this.horizon-Number(t.dataset.originalHeight)/2),Object.assign(t.style,{left:`${e}px`,top:`${i}px`,visibility:"visible",position:"absolute","z-index":0,opacity:0}),t.style.display=""}}performCalculations(t,e){const i=Math.abs(e),s=i<this.flankingItems+1?this._internalState.calculations[i]:this._internalState.calculations[this.flankingItems+1],o=this.sizeMultiplier**i,r=o*Number(t.dataset.originalWidth),n=o*Number(t.dataset.originalHeight),a=e<0?-s.distance:s.distance,l=this._internalState.containerDimensions[Number(this.isVertical)]/2;let c,p;this.isVertical?(p=this.horizon-s.offset-r/2,c=l+a-n/2):(p=l+a-r/2,c=this.horizon-s.offset-n/2),t.dataset.width=String(r),t.dataset.height=String(n),t.dataset.top=String(c),t.dataset.left=String(p),t.dataset.oldPosition=t.dataset.currentPosition||"0",t.dataset.depth=String(this.flankingItems+2-i),t.dataset.opacity=String(e?s.opacity:1)}itemAnimationComplete(t,e){this._internalState.itemsAnimating--,t.dataset.currentPosition=String(e),0===e&&(this._internalState.currentCenterItem=t),this._internalState.itemsAnimating||(this._internalState.currentlyMoving=!1,--this._internalState.carouselRotationsLeft<=0?(this._internalState.currentCenterItem?.classList.add(this.centralItemClassName),this._internalState.performingSetup?this._internalState.performingSetup=!1:(this.movingToCenter(),this.movedToCenter())):this.rotateCarousel())}movingFromCenter(t){return t?(HTMLElement,t):void 0}movingToCenter(t){}movedToCenter(){}moveItem(t,e){const i=()=>{Object.assign(t.style,{left:`${t.dataset.left}px`,width:`${t.dataset.width}px`,height:`${t.dataset.height}px`,top:`${t.dataset.top}px`,opacity:String(t.dataset.opacity)})};Math.abs(e)<=this.flankingItems+1?(this.performCalculations(t,e),this._internalState.itemsAnimating++,t.style.zIndex=t.dataset.depth??"",i(),setTimeout((()=>{this.itemAnimationComplete(t,e)}),this.animationLength)):(t.dataset.currentPosition=String(e),"0"!==t.dataset.oldPosition&&t.dataset.oldPosition||(this.performCalculations(t,e),i()))}setupStarterRotation(){this.startingItem||=Math.round(this._internalState.totalItems/2),this._internalState.rightItemsCount=Math.ceil((this._internalState.totalItems-1)/2),this._internalState.leftItemsCount=Math.floor((this._internalState.totalItems-1)/2),this._internalState.carouselRotationsLeft=1;let t=this.startingItem-1;this.moveItem(this._internalState.items[t],0),this._internalState.items[t].style.opacity="1";for(let e=1;e<=this._internalState.rightItemsCount;e++)t<this._internalState.totalItems-1?t++:t=0,this._internalState.items[t].style.opacity="1",this.moveItem(this._internalState.items[t],e);t=this.startingItem-1;for(let e=-1;e>=-this._internalState.leftItemsCount;e--)t>0?t--:t=this._internalState.totalItems-1,this._internalState.items[t].style.opacity="1",this.moveItem(this._internalState.items[t],e)}initCarousel(t){this._internalState=Oe(),this.initializeCarouselData(t),this.forceImageDimensionIfEnabled(),this.preload((()=>{this.setOriginalItemDimensions(),this.calculatePositionProperties(),this.setupCarousel(),this.setupStarterRotation()}))}moveOnce(t){this._internalState.currentlyMoving||(this._internalState.previousCenterItem=this._internalState.currentCenterItem,this.movingFromCenter(this._internalState.currentCenterItem),t===Ot.BACKWARDS?this.movingFromCenter(this._internalState.currentCenterItem?.previousElementSibling??void 0):t===Ot.FORWARDS&&this.movingFromCenter(this._internalState.currentCenterItem?.nextElementSibling??void 0),this._internalState.currentDirection=t)}rotateCarousel(){if(!this._internalState.currentlyMoving){this._internalState.currentCenterItem?.classList.remove(this.centralItemClassName),this._internalState.currentlyMoving=!0,this._internalState.itemsAnimating=0,this._internalState.carouselRotationsLeft++;for(const t of this._internalState.items){const e=parseInt(t.dataset.currentPosition??"",10);let i=e+-Number(this._internalState.currentDirection);Math.abs(i)>this._internalState[i>0?"rightItemsCount":"leftItemsCount"]&&(i=-e,this._internalState.totalItems%2==0&&i++),this.moveItem(t,i)}}}nextItem(){this.moveOnce(Ot.FORWARDS),this.rotateCarousel()}previousItem(){this.moveOnce(Ot.BACKWARDS),this.rotateCarousel()}switchOrientation(){this.isVertical=!this.isVertical,this.rotateCarousel()}connectedCallback(){super.connectedCallback(),this.parent.then((t=>this.initCarousel(t))),window.addEventListener("resize",this.windowResizeListener=async()=>{this.initCarousel(await this.parent)})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.windowResizeListener)}render(){return W`<div class="wrap">
			<div class="images" style=${xt({height:this.imageSize,margin:this.margin})}>
				<slot></slot>
			</div>
			<div class="carousel-controls">
				<button class="carousel-controls__previous-button" @click="${this.previousItem}"></button>
				${this.allowSwitchingOrientation?W`<button class="carousel-controls__perspective-button" @click="${this.switchOrientation}">Switch</button>`:""}
				<button class="carousel-controls__next-button" @click="${this.nextItem}"></button>
			</div>
		</div>`}};function Ee(t,e,i){return t?e(t):i?.(t)}ke([dt(),je("design:type",Object)],Re.prototype,"imageSize",void 0),ke([dt(),je("design:type",Object)],Re.prototype,"margin",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"startingItem",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"separation",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"separationMultiplier",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"horizonOffset",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"horizonOffsetMultiplier",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"sizeMultiplier",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"opacityMultiplier",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"horizon",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"flankingItems",void 0),ke([dt({type:Boolean}),je("design:type",Object)],Re.prototype,"isVertical",void 0),ke([dt({type:Boolean}),je("design:type",Object)],Re.prototype,"preloadImages",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"forcedImageWidth",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"forcedImageHeight",void 0),ke([dt({type:Number}),je("design:type",Object)],Re.prototype,"animationLength",void 0),ke([dt(),je("design:type",Object)],Re.prototype,"centralItemClassName",void 0),ke([dt({type:Boolean}),je("design:type",Object)],Re.prototype,"allowSwitchingOrientation",void 0),ke([gt(".images"),je("design:type",Promise)],Re.prototype,"parent",void 0),ke([yt({flatten:!0}),je("design:type",Array)],Re.prototype,"images",void 0),ke([ht(),je("design:type",Object)],Re.prototype,"_internalState",void 0),Re=ke([lt("perspective-carousel-component")],Re);var Le=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Ie=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Pe=class extends nt{constructor(){super(...arguments),this.open=!1,this.displayOpenButton=!1,this.closeButtonSelector="[data-popup-close-button]"}static{this.styles=r`
		.popup {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10000;
		}
	`}async openPopup(){if(this.open)return;this.open=!0;const t=await this._popup,e=Array.from(this._assignedElements.reduce(((t,e)=>[...t,...Array.from(e.querySelectorAll(this.closeButtonSelector))]),[]));t.addEventListener("click",this.clickEventListener=t=>{t.target&&e.includes(t.target)&&this.closePopup()}),this.autoClosingTime&&(await new Promise((t=>setTimeout(t,this.autoClosingTime??0))),this.open&&this.closePopup())}async closePopup(){this.open&&((await this._popup).removeEventListener("click",this.clickEventListener),this.open=!1)}render(){return W`${Ee(this.displayOpenButton,(()=>W`<div @click="${this.openPopup}">
					<slot name="popup-open-button"></slot>
				</div>`))}
		${Ee(this.open,(()=>W`<div class="popup">
				<slot name="popup"></slot>
			</div>`))}`}};Le([dt({type:Boolean}),Ie("design:type",Object)],Pe.prototype,"open",void 0),Le([dt({type:Boolean}),Ie("design:type",Object)],Pe.prototype,"displayOpenButton",void 0),Le([dt({type:Number}),Ie("design:type",Number)],Pe.prototype,"autoClosingTime",void 0),Le([dt(),Ie("design:type",Object)],Pe.prototype,"closeButtonSelector",void 0),Le([gt(".popup"),Ie("design:type",Promise)],Pe.prototype,"_popup",void 0),Le([yt({slot:"popup"}),Ie("design:type",Array)],Pe.prototype,"_assignedElements",void 0),Pe=Le([lt("popup-component")],Pe);var Te=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},ze=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let He=class extends Ut{constructor(){super(...arguments),this.interval=2500,this.typingSpeed=75}triggerTextAnimation(t,e){const i=t.split(""),s=e.split("");if(i.length<s.length){let t=0;for(;i.length<e.length;)++t===i.length&&(t=0),i.splice(t,0,void 0)}else if(s.length<i.length){let t=0;for(;s.length<i.length;)s.splice(t,0,void 0),++t===s.length&&(t=0)}const o=[i],r=[];for(let t=0;t<i.length-1;t++){const e=[...o[o.length-1]];if(t%2==0?[e[t],e[t+1]]=[s[t],e[t]]:r.push(t),r.includes(t-2)){const t=r.shift()??0;e[t]=s[t]}o.push(e)}o.push(s);for(let t=0;t<o.length;t++)setTimeout((()=>{for(const e of this._elements)e.textContent=o[t].filter(Boolean).join(""),t===o.length-1&&setTimeout((()=>{this.onInterval()}),this.interval)}),this.typingSpeed*t)}};Te([dt({type:Number}),ze("design:type",Object)],He.prototype,"interval",void 0),Te([dt({type:Number}),ze("design:type",Object)],He.prototype,"typingSpeed",void 0),He=Te([lt("rebuilding-text-component")],He);var Ne=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Me=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let De=class extends nt{constructor(){super(...arguments),this.rootMargin="0px",this.ratio=.25,this.fixedClassName="fixed"}firstUpdated(){const t=this._headers[0];this.intersectionObserver=new IntersectionObserver((([e])=>{if(e.intersectionRatio<=this.ratio&&!t.classList.contains(this.fixedClassName)){t.classList.add(this.fixedClassName);const{top:e,left:i}=t.getBoundingClientRect();Object.assign(t.style,{position:"fixed",top:`${e}px`,left:`${i}px`}),t.getBoundingClientRect(),Object.assign(t.style,{top:"0",left:"0",right:"0"})}else e.intersectionRatio>this.ratio&&t.classList.contains(this.fixedClassName)&&(t.classList.remove(this.fixedClassName),Object.assign(t.style,{position:"",top:"",left:"",right:""}))}),{rootMargin:this.rootMargin,threshold:[0,...Array.from({length:Math.ceil(100)},((t,e)=>e/100)),1]}),this.intersectionObserver?.observe(this)}disconnectedCallback(){this.intersectionObserver?.disconnect(),super.disconnectedCallback()}render(){return W`<slot></slot>`}};Ne([dt(),Me("design:type",Object)],De.prototype,"rootMargin",void 0),Ne([dt({type:Number}),Me("design:type",Object)],De.prototype,"ratio",void 0),Ne([dt(),Me("design:type",Object)],De.prototype,"fixedClassName",void 0),Ne([yt({flatten:!0}),Me("design:type",Array)],De.prototype,"_headers",void 0),De=Ne([lt("sticky-header-component")],De);var Ue=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let We=class extends nt{constructor(){super(...arguments),this.filterableHeaders=[],this.tabularData={headers:[],rows:[],excludedCriteria:[]}}static{this.styles=r`
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
	`}displaySelect(t,e){if(!this.filterableHeaders.includes(e+1))return;const i=t.getBoundingClientRect(),s=this._wrap.getBoundingClientRect(),o=i.top-s.top,r=i.left-s.left;this.openSelect={index:e,top:o,left:r,width:i.width,height:i.height,options:[...new Set(this.tabularData.rows.map((t=>t[e].textContent??"")))]}}firstUpdated(){const[t]=this._table;Object.assign(this.tabularData,{headers:Array.from(t.querySelectorAll("th")),rows:Array.from(t.querySelectorAll("tbody > tr")).map((t=>Array.from(t.children).filter((t=>t instanceof HTMLTableCellElement))))}),this.tabularData.excludedCriteria=Array.from({length:this.tabularData.headers.length},(()=>[])),this._wrap.addEventListener("click",this.clickListener=t=>{t.target instanceof HTMLTableCellElement&&t.target.parentNode&&"TH"===t.target.tagName?this.displaySelect(t.target,Array.from(t.target.parentNode.children).indexOf(t.target)):t.target instanceof HTMLDivElement&&t.target.classList.contains("wrap-select__option")||(this.openSelect=void 0)})}toggleCriterion(t){St(this.openSelect);const{index:e}=this.openSelect,i=[...this.tabularData.excludedCriteria];i[e].includes(t)?i[e].splice(i[e].indexOf(t),1):i[e].push(t),this.tabularData={...this.tabularData,excludedCriteria:i}}updated(t){if(t.has("tabularData"))for(const t of this.tabularData.rows){const e=t[0].parentElement;e&&(t.some(((t,e)=>this.tabularData.excludedCriteria[e].includes(t.textContent??"")))?e.style.display="none":e.style.removeProperty("display"))}}disconnectedCallback(){this._wrap.removeEventListener("click",this.clickListener),super.disconnectedCallback()}render(){return W`<div class="wrap">
			<slot></slot>
			${this.openSelect?W`<div
						class="wrap-select"
						style=${xt({top:`${this.openSelect.top}px`,left:`${this.openSelect.left}px`,width:`${this.openSelect.width}px`,height:`${this.openSelect.height}px`})}
				  >
						${this.openSelect.options.map((t=>(St(this.openSelect),W`<div
								class="wrap-select__option ${oe({"wrap-select__option--crossed":this.tabularData.excludedCriteria[this.openSelect?.index??0].includes(t)})}"
								@click="${()=>this.toggleCriterion(t)}"
							>
								${t}
							</div>`)))}
				  </div>`:""}
		</div>`}};Ue([dt({type:Array,converter:{fromAttribute:t=>t?t.split(",").map(Number):[],toAttribute:t=>t.join(",")}}),Be("design:type",Array)],We.prototype,"filterableHeaders",void 0),Ue([yt({selector:"table"}),Be("design:type",Array)],We.prototype,"_table",void 0),Ue([ft(".wrap"),Be("design:type",HTMLDivElement)],We.prototype,"_wrap",void 0),Ue([ht(),Be("design:type",Object)],We.prototype,"tabularData",void 0),Ue([ht(),Be("design:type",Object)],We.prototype,"openSelect",void 0),We=Ue([lt("table-filtering-component")],We);var Fe=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Ve=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qe=class extends nt{constructor(){super(...arguments),this.currentTab=0,this.transitionTime=300,this.activeTabClassName="active",this.leaveTabClassName="leave",this.inactiveTabClassName="inactive"}firstUpdated(){this.switchToTab();for(const t of this._headers)Array.from(t.children).forEach(((t,e)=>t.addEventListener("click",(()=>this.switchToTab(e)))))}switchToTab(t){window.clearTimeout(this.animationTimeout),this.animationTimeout=void 0;const e=this.currentTab;void 0!==t&&(this.currentTab=t);for(const t of this._headers)Array.from(t.children).forEach(((t,e)=>{e===this.currentTab?t.classList.add(this.activeTabClassName):t.classList.remove(this.activeTabClassName)}));for(const i of this._tabs)Array.from(i.children).forEach(((i,s)=>{HTMLElement,s===this.currentTab?i.style.removeProperty("display"):e===s?(i.classList.add(this.leaveTabClassName),this.animationTimeout=window.setTimeout((()=>{i.classList.remove(this.leaveTabClassName),i.style.display="none"}),this.transitionTime)):void 0===t?i.style.display="none":i.classList.remove(this.inactiveTabClassName)}))}render(){return W`<div>
			<slot name="headers"></slot>
			<slot name="tabs"></slot>
		</div>`}};Fe([dt({type:Number}),Ve("design:type",Object)],qe.prototype,"currentTab",void 0),Fe([dt({type:Number}),Ve("design:type",Object)],qe.prototype,"transitionTime",void 0),Fe([dt(),Ve("design:type",Object)],qe.prototype,"activeTabClassName",void 0),Fe([dt(),Ve("design:type",Object)],qe.prototype,"leaveTabClassName",void 0),Fe([dt(),Ve("design:type",Object)],qe.prototype,"inactiveTabClassName",void 0),Fe([yt({slot:"headers"}),Ve("design:type",Array)],qe.prototype,"_headers",void 0),Fe([yt({slot:"tabs"}),Ve("design:type",Array)],qe.prototype,"_tabs",void 0),qe=Fe([lt("tabs-component")],qe);const Ge=JSON.parse('{"components":[{"name":"Accordion","link":"../accordion"},{"name":"Autocomplete Input","link":"../autocomplete-list"},{"name":"Backface Carousel","link":"../backface-carousel"},{"name":"Ciphering Text","link":"../ciphering-text"},{"name":"Color Picker","link":"../color-picker"},{"name":"Countdown","link":"../countdown"},{"name":"Custom Select","link":"../custom-select"},{"name":"Floating Panel","link":"../floating-panel"},{"name":"Gallery Carousel","link":"../gallery-carousel"},{"name":"Image Comparator","link":"../image-comparator"},{"name":"Magnifier","link":"../magnifier"},{"name":"Menu Carousel","link":"../menu-carousel"},{"name":"One Page Scroll","link":"../one-page-scroll"},{"name":"Parallax","link":"../parallax"},{"name":"Perspective Carousel","link":"../perspective-carousel"},{"name":"Popup","link":"../popup"},{"name":"Range Input","link":"../range-input"},{"name":"Rebuilding Text","link":"../rebuilding-text"},{"name":"Sticky Header","link":"../sticky-header"},{"name":"Table Filtering","link":"../table-filtering"},{"name":"Tabs","link":"../tabs"}]}');var Xe=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ye=class extends nt{constructor(){super(...arguments),this.activeLink=""}static{this.styles=r`
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
      padding: 2rem 0 0 2rem;
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
        ${Object.entries(Ge).map((([t,e])=>W`
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
    `}};Xe([dt(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Ye.prototype,"activeLink",void 0),Ye=Xe([lt("sidebar-component")],Ye);let Ke=class extends nt{static{this.styles=r`
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
    `}};Ke=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}([lt("header-component")],Ke)})();