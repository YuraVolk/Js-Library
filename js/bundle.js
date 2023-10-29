/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var a;const l=window,c=l.trustedTypes,d=c?c.emptyScript:"",h=l.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u},f="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var y;g[f]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:g}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const v=window,b=v.trustedTypes,_=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,x="?"+$,S=`<${x}>`,C=document,A=()=>C.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,E="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,I=/>/g,L=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,P=/"/g,H=/^(?:script|style|textarea|title)$/i,T=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),N=T(1),M=(T(2),Symbol.for("lit-noChange")),D=Symbol.for("lit-nothing"),U=new WeakMap,B=C.createTreeWalker(C,129,null,!1);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_?_.createHTML(e):e}const V=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===R?"!--"===l[1]?r=j:void 0!==l[1]?r=I:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=L):void 0!==l[3]&&(r=L):r===L?">"===l[0]?(r=null!=o?o:R,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?L:'"'===l[3]?P:z):r===P||r===z?r=L:r===j||r===I?r=R:(r=L,o=void 0);const h=r===L&&t[e+1].startsWith("/>")?" ":"";n+=r===R?i+S:c>=0?(s.push(a),i.slice(0,c)+w+i.slice(c)+$+h):i+$+(-2===c?(s.push(void 0),e):h)}return[W(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,c]=V(t,e);if(this.el=F.createElement(l,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=B.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(w)||e.startsWith($)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+w).split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?Z:"@"===e[1]?Q:Y})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(H.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),B.nextNode(),a.push({type:2,index:++o});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){var o,n,r,a;if(e===M)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=G(t,l._$AS(t,e.values),l,s)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);B.currentNode=o;let n=B.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new X(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new tt(n,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=B.nextNode(),r++)}return B.currentNode=C,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{constructor(t,e,i,s){var o;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),k(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==M&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>O(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==D&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(W(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new q(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new F(t)),e}T(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new X(this.k(A()),this.k(A()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,i,s,o){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=G(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==M,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=G(this,s[i+r],e,r),a===M&&(a=this._$AH[r]),n||(n=!k(a)||a!==this._$AH[r]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}const J=b?b.emptyScript:"";class Z extends Y{constructor(){super(...arguments),this.type=4}j(t){t&&t!==D?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Q extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=G(this,t,e,0))&&void 0!==i?i:D)===M)return;const s=this._$AH,o=t===D&&s!==D||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==D&&(s===D||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const et=v.litHtmlPolyfillSupport;var it,st;null==et||et(F,X),(null!==(y=v.litHtmlVersions)&&void 0!==y?y:v.litHtmlVersions=[]).push("2.8.0");class ot extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new X(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}ot.finalized=!0,ot._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:ot});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:ot}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");const rt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},lt=(t,e,i)=>{e.constructor.createProperty(i,t)};function ct(t){return(e,i)=>void 0!==i?lt(t,e,i):at(t,e)}function dt(t){return ct({...t,state:!0})}const ht=({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}};function pt(t,e){return ht({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}function ut(t){return ht({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var mt;const ft=null!=(null===(mt=window.HTMLSlotElement)||void 0===mt?void 0:mt.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function gt(t){const{slot:e,selector:i}=null!=t?t:{};return ht({descriptor:s=>({get(){var s;const o="slot"+(e?`[name=${e}]`:":not([name])"),n=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(o),r=null!=n?ft(n,t):[];return i?r.filter((t=>t.matches(i))):r},enumerable:!0,configurable:!0})})}const yt=t=>(...e)=>({_$litDirective$:t,values:e});class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const bt="important",_t=" !"+bt,wt=yt(class extends vt{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];if(null!=s){this.ht.add(t);const e="string"==typeof s&&s.endsWith(_t);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?bt:""):i[t]=s}}return M}});function $t(t){if(null==t)throw new Error(`The value ${t} is nullable, but it must not be`)}var xt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},St=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ct=class extends ot{constructor(){super(...arguments),this._elements=[],this._headerHeights=[],this._widths=[],this.opened=[],this.multiple=!1}static{this.styles=n`
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
  `}connectedCallback(){super.connectedCallback(),this._elements.length=this._widths.length=0,this._elements=Array.from(this.children).filter((t=>"LI"===t.nodeName&&2===t.children.length)).map((t=>[t.children[0],t.children[1]])),this.opened=this.opened.length===this._elements.length?[...this.opened]:this._elements.map((()=>!1))}disconnectedCallback(){this._elements.length=this._widths.length=0,super.disconnectedCallback()}firstUpdated(){this.updateWidths(),this.opened=this.opened.length===this._elements.length?[...this.opened]:this._elements.map((()=>!1))}updated(){this.updateWidths()}updateWidths(){this._widths.length=this._headerHeights.length=0,$t(this.shadowRoot);for(const t of Array.from(this.shadowRoot.children[0].children).filter((t=>2===t.children.length)))this._widths.push(t.children[1].offsetHeight),this._headerHeights.push(t.children[0].offsetHeight)}_clickAccordion(t){this.updateWidths(),this.opened=this.opened.map(((e,i)=>t===i?!e:!!this.multiple&&e))}render(){return N`
      <ul class="accordions">
        ${[...this._elements].map(((t,e)=>{const[i,s]=t,o=this.opened[e]?{cursor:"n-resize",maxHeight:this._widths[e]+this._headerHeights[e]+"px"}:{cursor:"pointer",maxHeight:`${this._headerHeights[e]}px`};return N`<li class="accordion" style=${wt(o)}>
              <header
                class="accordion__heading"
                @click=${{handleEvent:()=>this._clickAccordion(e)}}
              >
                ${i}
              </header>
              <footer class="according__content">${s}</footer>
            </li>`})).filter(Boolean)}
      </ul>
    `}};var At;xt([dt(),St("design:type",Array)],Ct.prototype,"_elements",void 0),xt([dt(),St("design:type",Array)],Ct.prototype,"_headerHeights",void 0),xt([dt(),St("design:type",Array)],Ct.prototype,"_widths",void 0),xt([ct({type:Array,converter:{fromAttribute:t=>{if(null===t)return[];const e=t.split(",").map((t=>"true"===t||"1"===t));return e},toAttribute:t=>t.join(",")}}),St("design:type",Array)],Ct.prototype,"opened",void 0),xt([ct({type:Boolean}),St("design:type",Object)],Ct.prototype,"multiple",void 0),Ct=xt([rt("accordion-component")],Ct),function(t){t[t.BACKWARDS=-1]="BACKWARDS",t[t.STILL=0]="STILL",t[t.FORWARDS=1]="FORWARDS"}(At||(At={}));const kt=n`
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
`;var Ot=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Et=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Rt=class extends ot{constructor(){super(...arguments),this._elements=[],this._currentItem=0,this.isHorizontal=!0}static{this.styles=n`
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
  `}connectedCallback(){super.connectedCallback(),this._elements=Array.from(this.children),this.boundEventListener=this.setupCarousel.bind(this),window.addEventListener("resize",this.boundEventListener)}disconnectedCallback(){super.disconnectedCallback(),this._elements.length=0,window.removeEventListener("resize",this.boundEventListener)}nextSlide(){this.rotateCarousel(this._currentItem+1)}previousSlide(){this.rotateCarousel(this._currentItem-1)}rotateCarousel(t){const e=Array.from(this._carouselItem).length,i=2*Math.PI/e;this._carouselWrap.style.transform=`rotate${this.isHorizontal?"Y":"X"}(${t*-i}rad)`,this._currentItem=t}switchPerspective(){this.isHorizontal=!this.isHorizontal,this.setupCarousel()}firstUpdated(){this.setupCarousel()}setupCarousel(){const t=Array.from(this._carouselItem),e=t.length,i=2*Math.PI/e,s=parseFloat(getComputedStyle(t[0])[this.isHorizontal?"width":"height"])/(2*Math.tan(Math.PI/e));this._carouselWrap.style.transformOrigin=`50% 50% ${-s}px`;for(let o=0;o<e;o++)t[o].style.padding="0",0!==o&&(t[o].style.transformOrigin=`50% 50% ${-s}px`,t[o].style.transform=`rotate${this.isHorizontal?"Y":"X"}(${o*i}rad)`);this.rotateCarousel(this._currentItem)}render(){return N`
      <div>
        <div class="carousel ${this.isHorizontal?"":"carousel--vertical"}">
          <ul class="carousel-items">
            ${this._elements.map((t=>N`<li class="carousel-item">${t}</li>`))}
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
    `}};Ot([dt(),Et("design:type",Array)],Rt.prototype,"_elements",void 0),Ot([dt(),Et("design:type",Object)],Rt.prototype,"_currentItem",void 0),Ot([pt(".carousel-items"),Et("design:type",HTMLElement)],Rt.prototype,"_carouselWrap",void 0),Ot([ht({descriptor:t=>({get(){var t,e;return null!==(e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(".carousel-item"))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})}),Et("design:type",Array)],Rt.prototype,"_carouselItem",void 0),Ot([ct({type:Boolean,converter:{fromAttribute:t=>Boolean(Number(t)),toAttribute:t=>String(t)}}),Et("design:type",Object)],Rt.prototype,"isHorizontal",void 0),Rt=Ot([rt("backface-carousel-component")],Rt);var jt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},It=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Lt{constructor(t){this.image=t,this.fullWidth=t.clientWidth,this.fullHeight=t.clientHeight,t.style.position="absolute",this.moveTo=function(t,e,i){this.width=this.fullWidth*i,this.height=this.fullHeight*i,this.x=t,this.y=e,this.scale=i;var s=this.image.style;s.width=this.width+"px",s.left=t+"px",s.top=e+"px",s.zIndex=String(100*i|0)}}}let zt=class extends ot{constructor(){super(...arguments),this._rotation=Math.PI/2,this._destRotation=Math.PI/2,this._frameTimer=0,this.yPos=112,this.yRadius=128,this.farScale=.9,this.speed=.11}static{this.styles=kt}rotateItem(t,e){const i=this._items[t],s=Math.sin(e),o=this.farScale+(1-this.farScale)*(s+1)*.5;this.xPos,this.xRadius,i.moveTo(this.xPos+o*(Math.cos(e)*this.xRadius-i.fullWidth/2),this.yPos+o*s*this.yRadius,o)}carouselRender(){const t=this._items.length,e=2*Math.PI/t;let i=this._rotation;for(let s=0;s<t;s++)this.rotateItem(s,i),i+=e}scheduleNextFrame(){this._frameTimer=window.setTimeout((()=>this.playFrame()),32)}playFrame(){const t=this._destRotation-this._rotation;Math.abs(t)<=0?(this._rotation=this._destRotation,window.clearTimeout(this._frameTimer),this._frameTimer=0):(this._rotation+=t*this.speed,this.scheduleNextFrame()),this.carouselRender()}go(t){this._destRotation+=2*Math.PI/this._items.length*t,0===this._frameTimer&&this.scheduleNextFrame()}firstUpdated(){this.setupCarousel()}setupCarousel(){const t=this.querySelector(".carousel");if(t){this._carousel=t,this._images=Array.from(this.querySelectorAll(".carousel-item"));for(const t of this._images)t.removeAttribute("style");this.xPos??=.5*this._carousel.offsetWidth,this.yPos??=.1*this._carousel.offsetHeight,this.xRadius??=this._carousel.offsetWidth/2.3,this.yRadius??=this._carousel.offsetHeight/6,this._items=this._images.map((t=>new Lt(t))),this.carouselRender()}}connectedCallback(){super.connectedCallback(),this.boundEventListener=()=>{this.xRadius=this.xPos=void 0,this.setupCarousel()},window.addEventListener("resize",this.boundEventListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.boundEventListener)}goBack(){this.go(-1)}goForward(){this.go(1)}render(){return N`
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
    `}};jt([dt(),It("design:type",HTMLElement)],zt.prototype,"_carousel",void 0),jt([dt(),It("design:type",Array)],zt.prototype,"_images",void 0),jt([dt(),It("design:type",Object)],zt.prototype,"_rotation",void 0),jt([dt(),It("design:type",Object)],zt.prototype,"_destRotation",void 0),jt([dt(),It("design:type",Object)],zt.prototype,"_frameTimer",void 0),jt([dt(),It("design:type",Array)],zt.prototype,"_items",void 0),jt([ct({type:Number}),It("design:type",Number)],zt.prototype,"xPos",void 0),jt([ct({type:Number}),It("design:type",Object)],zt.prototype,"yPos",void 0),jt([ct({type:Number}),It("design:type",Number)],zt.prototype,"xRadius",void 0),jt([ct({type:Number}),It("design:type",Object)],zt.prototype,"yRadius",void 0),jt([ct({type:Number}),It("design:type",Object)],zt.prototype,"farScale",void 0),jt([ct({type:Number}),It("design:type",Object)],zt.prototype,"speed",void 0),zt=jt([rt("menu-carousel-component")],zt);var Pt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Tt=class extends ot{constructor(){super(...arguments),this.options=[],this._isListOpened=!1,this._filteredOptions=[]}static{this.styles=n`
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
  `}onInputHandler(t){if(!(t instanceof HTMLInputElement&&t.value))return void(this._isListOpened=!1);const e=t.value.toLowerCase().trim(),i=[];for(const t of this.options){const s=t.toLowerCase();console.log(s.startsWith(e)),s!==e&&s.startsWith(e)&&i.push(t)}i.length&&(this._isListOpened=!0,this._filteredOptions=i)}setInputValue(t){const e=this.querySelector("input");e&&(e.value=t,this._isListOpened=!1,this._filteredOptions=[])}connectedCallback(){super.connectedCallback(),this.boundInputEventListener=({target:t})=>{t&&this.onInputHandler(t)},console.log(this.querySelector("input")),this.querySelector("input")?.addEventListener("input",this.boundInputEventListener)}disconnectedCallback(){super.disconnectedCallback(),this.querySelector("input")?.removeEventListener("input",this.boundInputEventListener)}render(){return N`
      <div class="autocomplete-wrap">
        <slot></slot>
        ${this._isListOpened&&this._filteredOptions.length?N`<ul class="autocomplete-items">
          ${this._filteredOptions.map((t=>N`<li class="autocomplete-item" @click="${()=>{this.setInputValue(t)}}">${t}</li>`))}
        </ul>`:""}
      </div>
    `}};Pt([ct({type:Array,converter:{fromAttribute:t=>null===t?[]:t.split(",").map((t=>t.trim())),toAttribute:t=>t.join(",")}}),Ht("design:type",Array)],Tt.prototype,"options",void 0),Pt([dt(),Ht("design:type",Object)],Tt.prototype,"_isListOpened",void 0),Pt([dt(),Ht("design:type",Array)],Tt.prototype,"_filteredOptions",void 0),Tt=Pt([rt("autocomplete-list-component")],Tt);var Nt,Mt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Dt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ut=Nt=class extends ot{constructor(){super(...arguments),this.strings=[],this.repetitions=1,this.interval=3e3,this.typingSpeed=45,this.characters=["!",'"',"#","$","%","*","0","1",":",";","?","@","[","]","\\","~","'","/","{","}","|","&","(",")","-","<",">"]}static validateElement(t){return!t.firstElementChild&&t.textContent}get _elements(){return Array.from(this.querySelectorAll("pre")).filter(Nt.validateElement)}*generateNextStrings(t){const e=[...this.strings];let i=1,s=0,o=t;for(;s<this.repetitions;)s++,yield[o,e[i]],o=e[i],i=(i+1)%e.length;return[o,o]}splitText(t){for(const e of this._elements){const i=e.textContent??"";e.textContent="";for(const t of i)e.insertAdjacentHTML("beforeend",`<span>${t}</span>`);if(t&&t.length>i.length)for(let s=0;s<t.length-i.length;s++)e.insertAdjacentElement("beforeend",document.createElement("span"))}}cipherLetter(t){const{element:e,newLetter:i,delayed:s,i:o}=t;let n=Math.round(Math.random()*((s?44:14)-6)+6),r=!1,a=0;const l=1e3*Math.random()+(s?this.typingSpeed*o:0);return setTimeout((()=>{for(;a<=n;){const t=this.characters;!function(s){setTimeout((()=>{r||(e.textContent=t[Math.floor(Math.random()*t.length)]),s>=n&&(r=!0,e.textContent=i,e.removeAttribute("data-ciphering-text-in-progress"))}),65*s)}(a++)}}),l),65*n+65}cipherText(t,e){const i=Array.from(this.querySelectorAll("pre"));for(const e of i)e.textContent=t;this.splitText(e);const s=[];for(const t of i)Array.from(t.children).forEach(((t,i)=>{t.textContent!==e[i]&&(t.setAttribute("data-ciphering-text-in-progress",""),s.push(this.cipherLetter({element:t,newLetter:e[i],i,delayed:0===t.textContent?.length})))}));setTimeout((()=>{this.onInterval()}),Math.max(...s)+this.interval)}onInterval(){const{done:t,value:e}=this.generator.next();t?(window.clearTimeout(this.windowInterval),this.windowInterval=void 0):this.cipherText(...e)}connectedCallback(){super.connectedCallback();const t=this._elements[0].textContent??"";this.splitText(),this.generator=this.generateNextStrings(t),this.windowInterval=window.setTimeout((()=>{this.onInterval()}),this.interval)}disconnectedCallback(){super.disconnectedCallback(),this.generator.return(["",""]),clearInterval(this.windowInterval)}render(){return N`<slot></slot>`}};Mt([ct({type:Array,converter:{fromAttribute:t=>t?.split(";")??[],toAttribute:t=>t.join(";")}}),Dt("design:type",Array)],Ut.prototype,"strings",void 0),Mt([ct({type:Number}),Dt("design:type",Object)],Ut.prototype,"repetitions",void 0),Mt([ct({type:Number}),Dt("design:type",Object)],Ut.prototype,"interval",void 0),Mt([ct({type:Number}),Dt("design:type",Object)],Ut.prototype,"typingSpeed",void 0),Mt([ct({type:Array,converter:{fromAttribute:t=>t?.split("")??["!",'"',"#","$","%","*","0","1",":",";","?","@","[","]","\\","~","'","/","{","}","|","&","(",")","-","<",">"],toAttribute:t=>t.join("")}}),Dt("design:type",Array)],Ut.prototype,"characters",void 0),Ut=Nt=Mt([rt("ciphering-text-component")],Ut);var Bt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Wt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vt=class extends ot{constructor(){super(...arguments),this.imageUrl="",this.width=245,this.height=245,this.backgroundColor=[0,0,0,1],this.rgba=[0,0,0,1]}static{this.rgbaConverter={fromAttribute:t=>{const e=t?.split(",");return e&&4===e.length&&e.every((t=>"number"==typeof t))?e.map(Number):[0,0,0,100]},toAttribute:t=>t.join(",")}}static{this.styles=n`
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
  `}convertOpacityToBackground(){const t=1-this.rgba[3]/100,e=this.rgba[3]/100;return this.rgba.map(((i,s)=>3===s?1:Math.round(t*this.backgroundColor[s]+e*i*100)))}getHex(){return"#"+this.convertOpacityToBackground().slice(0,-1).map((t=>Number(t).toString(16).padStart(2,"0"))).join("")}getRGB(){return`rgb(${this.convertOpacityToBackground().slice(0,-1).join(", ")})`}getRGBA(){return`rgba(${this.rgba.join(", ")})`}initColorPicker(){this.canvasElement.then((t=>{const e=t.getContext("2d");$t(e);const i=new Image(this.width,this.height);i.src=this.imageUrl,i.onload=()=>e.drawImage(i,0,0,i.width,i.height),t.addEventListener("mousedown",(t=>{this.rgba=[...e.getImageData(t.offsetX,t.offsetY,1,1).data.slice(0,-1),this.rgba[3]]}))}))}connectedCallback(){super.connectedCallback(),this.initColorPicker(),this.opacityRange.then((t=>t._onUpdateListener=t=>{this.rgba=[...this.rgba.slice(0,-1),t]}))}render(){return N`
      <div class="wrap" style="--width: ${this.width}px; --height: ${this.height}px">
        <div class="color-picker-wrap">
          <div class="color-picker">
            <canvas class="color-picker__canvas" width="${this.width}" height="${this.height}"></canvas>
          </div>
        </div>
        <div class="info">
          <div class="current-color-wrap">
            <div class="current-color" style=${wt({backgroundColor:this.getRGB()})}></div>
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
    `}};Bt([ct({type:String}),Wt("design:type",Object)],Vt.prototype,"imageUrl",void 0),Bt([ct({type:Number}),Wt("design:type",Object)],Vt.prototype,"width",void 0),Bt([ct({type:Number}),Wt("design:type",Object)],Vt.prototype,"height",void 0),Bt([ct({converter:Vt.rgbaConverter}),Wt("design:type",Object)],Vt.prototype,"backgroundColor",void 0),Bt([ct({converter:Vt.rgbaConverter}),Wt("design:type",Object)],Vt.prototype,"rgba",void 0),Bt([ut("#opacity-range"),Wt("design:type",Promise)],Vt.prototype,"opacityRange",void 0),Bt([ut("canvas"),Wt("design:type",Promise)],Vt.prototype,"canvasElement",void 0),Vt=Bt([rt("color-picker-component")],Vt);const Ft=n`
  width: var(--thumbSize, 15px);
  height: var(--thumbSize, 15px);
  background-color: var(--thumbColor, #f50);
  border-radius: 50%;
  border: none;
  transition: 0.35s ease-in-out;
`,Gt=n`rgba(255,85,0, .6)`,qt=n`rgba(255,85,0, .3)`;var Xt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Yt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Kt=class extends ot{constructor(){super(...arguments),this.uiRangeID=crypto.randomUUID(),this.minimum=0,this.maximum=100,this.defaultValue=0,this.step=1,this.ticks=[],this.label="",this.thumbSize="15px",this.trackColor="#ccc",this.thumbColor="#f50",this.hoverColor=qt,this.activeColor=Gt,this.valueSize="25px",this._value=0,this._gradientStyle={}}static{this.styles=n`
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
      ${Ft}
    }

    .range-slider__input::-moz-range-thumb {
      ${Ft}
    }

    .range-slider__input::-webkit-slider-thumb:hover {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${qt});
    }

    .range-slider__input::-moz-range-thumb:hover {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${qt});
    }

    .range-slider__input:active::-webkit-slider-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${Gt});
    }

    .range-slider__input:active::-moz-range-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${Gt});
    }

    .range-slider__input:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${Gt});
    }

    .range-slider__input:focus::-moz-range-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${Gt});
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
  `}setGradientStyle(){const t=this._value/this.maximum*100;this._gradientStyle={background:`linear-gradient(to right, ${this.thumbColor} ${t}%, ${this.trackColor} ${t}%)`}}onValueChange(t){t.target,HTMLInputElement,this._value=Number(t.target.value),this.setGradientStyle(),this._onUpdateListener?.(this._value)}connectedCallback(){super.connectedCallback(),this.boundEventListener=t=>{this.onValueChange(t)},this._value=this.defaultValue,this.rangeSlider.then((t=>{this.setGradientStyle(),t.addEventListener("input",this.boundEventListener)}))}disconnectedCallback(){this.rangeSlider.then((t=>{t.removeEventListener("input",this.boundEventListener)})),super.disconnectedCallback()}render(){return N`
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
            style=${wt(this._gradientStyle)}
          >
          ${this.ticks.length?N`
            <ul class="range-slider-ticks">
              ${this.ticks.map((t=>N`<li class="range-slider-ticks__tick" style="--value: ${t}%">${t}</li>`))}
            </ul>
          `:""}
        </div>
        <span class="value">${this._value}</span>
      </div>
    `}};Xt([ct({type:Number}),Yt("design:type",Object)],Kt.prototype,"minimum",void 0),Xt([ct({type:Number}),Yt("design:type",Object)],Kt.prototype,"maximum",void 0),Xt([ct({type:Number}),Yt("design:type",Object)],Kt.prototype,"defaultValue",void 0),Xt([ct({type:Number}),Yt("design:type",Object)],Kt.prototype,"step",void 0),Xt([ct({type:Array,converter:{fromAttribute:t=>t?t.split(",").map(Number):[],toAttribute:t=>t.join(",")}}),Yt("design:type",Array)],Kt.prototype,"ticks",void 0),Xt([ct({type:String}),Yt("design:type",Object)],Kt.prototype,"label",void 0),Xt([ct({type:String}),Yt("design:type",Object)],Kt.prototype,"thumbSize",void 0),Xt([ct({type:String}),Yt("design:type",Object)],Kt.prototype,"trackColor",void 0),Xt([ct({type:String}),Yt("design:type",Object)],Kt.prototype,"thumbColor",void 0),Xt([ct({type:String}),Yt("design:type",Object)],Kt.prototype,"hoverColor",void 0),Xt([ct({type:String}),Yt("design:type",Object)],Kt.prototype,"activeColor",void 0),Xt([ct({type:String}),Yt("design:type",Object)],Kt.prototype,"valueSize",void 0),Xt([dt(),Yt("design:type",Object)],Kt.prototype,"_value",void 0),Xt([dt(),Yt("design:type",Object)],Kt.prototype,"_gradientStyle",void 0),Xt([dt(),Yt("design:type",Function)],Kt.prototype,"_onUpdateListener",void 0),Xt([ut(".range-slider__input"),Yt("design:type",Promise)],Kt.prototype,"rangeSlider",void 0),Kt=Xt([rt("range-input-component")],Kt);var Jt,Zt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Qt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let te=class extends ot{constructor(){super(...arguments),this.date=new Date("May 6, 2085 11:00:00"),this.intervalId=0}static{Jt=this}static reduceTimeUnits(t){return t.map(((e,i)=>({...e,timeFactor:t.slice(0,i+1).reduce(((t,e)=>t*e.timeFactor),1)}))).reverse()}static{this.units=Jt.reduceTimeUnits([{name:"second",timeFactor:1e3},{name:"minute",timeFactor:60},{name:"hour",timeFactor:60},{name:"day",timeFactor:24},{name:"year",timeFactor:356}])}firstUpdated(){this.renderTexts()}renderTexts(t=Jt.units){let e="",i=this.date.getTime()-(new Date).getTime();t.forEach((({timeFactor:t,name:s})=>{const o=Math.floor(i/t);e+=o<=0?"":`${o} ${"1"===String(o).slice(-1)?s:s+"s"} `,i%=t})),e=e?e.trim():"0 seconds";for(const t of this._countdownItems)t.textContent=e}connectedCallback(){super.connectedCallback(),this.intervalId=window.setInterval((()=>this.renderTexts()),1e3)}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.intervalId)}render(){return N`<slot></slot>`}};Zt([ct({converter:{fromAttribute:t=>new Date(t??"May 6, 2085 11:00:00"),toAttribute:t=>t.toString()}}),Qt("design:type",Object)],te.prototype,"date",void 0),Zt([gt({selector:"[data-countdown]",flatten:!0}),Qt("design:type",Array)],te.prototype,"_countdownItems",void 0),te=Jt=Zt([rt("countdown-component")],te);const ee=yt(class extends vt{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const o=t.element.classList;this.it.forEach((t=>{t in e||(o.remove(t),this.it.delete(t))}));for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(s=this.nt)||void 0===s?void 0:s.has(t))||(i?(o.add(t),this.it.add(t)):(o.remove(t),this.it.delete(t)))}return M}});var ie,se=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},oe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ne=class extends ot{constructor(){super(...arguments),this._internalElements=[],this._isOpened=!1}static{ie=this}static{this.styles=n`
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
	`}onItemSelected(t){this._isOpened=!1,t.isDisabled||(this._internalElements.forEach((e=>e.isSelected=e===t)),this._selectElement.forEach((e=>e.value=t.value)))}connectedCallback(){super.connectedCallback(),this.boundDocumentClickListener=t=>{t.composedPath().some((t=>t instanceof ie))||(this._isOpened=!1)},document.addEventListener("click",this.boundDocumentClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundDocumentClickListener)}firstUpdated(){for(const t of this._selectElement)this._internalElements=Array.from(t.children).map(((e,i)=>({innerContent:e.textContent??"",value:e.getAttribute("value")??"",isSelected:t.selectedIndex===i,isDisabled:Boolean(e.getAttribute("disabled"))})))}render(){return N`
			<slot
				style=${wt({display:this._internalElements.length?"none":"revert"})}
			></slot>
			<div class="wrap">
				<div
					class="custom-select-option custom-select-current ${ee({active:this._isOpened})}"
					@click="${()=>{this._isOpened=!this._isOpened}}"
				>
					${this._internalElements.find((t=>t.isSelected))?.innerContent??""}
				</div>
				<ul
					class="custom-select-options ${ee({hidden:!(this._internalElements.length&&this._isOpened)})}"
				>
					${this._internalElements.map((t=>N`
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
		`}};se([gt({flatten:!0}),oe("design:type",Array)],ne.prototype,"_selectElement",void 0),se([dt(),oe("design:type",Array)],ne.prototype,"_internalElements",void 0),se([dt(),oe("design:type",Object)],ne.prototype,"_isOpened",void 0),ne=ie=se([rt("custom-select-component")],ne);var re=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ae=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let le=class extends ot{constructor(){super(...arguments),this.isOpen=!1}firstUpdated(){if(0===this._floatingPanels.length)return;const[t]=this._floatingPanels;document.addEventListener("mousedown",this.listener=({clientX:e,clientY:i})=>{const s=t.offsetLeft,o=t.offsetTop,n=n=>{t.style.left=s+n.clientX-e+"px",t.style.top=o+n.clientY-i+"px"};t.addEventListener("mousemove",n,!1),window.addEventListener("mouseup",(()=>t.removeEventListener("mousemove",n,!1)))})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.listener)}render(){return this.isOpen?N`<slot></slot>`:""}};re([ct({type:Boolean}),ae("design:type",Object)],le.prototype,"isOpen",void 0),re([gt({flatten:!0}),ae("design:type",Array)],le.prototype,"_floatingPanels",void 0),le=re([rt("floating-panel-component")],le);var ce=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},de=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let he=class extends ot{constructor(){super(...arguments),this.smoothDiametralTransition=!1,this.current=1,this.frameGap=20,this.animationDuration=500,this.showArrows=!1,this.showToggles=!1,this._itemsLength=0,this._isAnimating=!1}static{this.styles=n`
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
	`}firstUpdated(){const t=this._carouselItems;this._itemsLength=t.length,this._galleryList.style.left=-100*this.current+"%",t[0].before(t[t.length-1].cloneNode(!0)),t[t.length-1].after(t[0].cloneNode(!0))}checkCurrentSlide(t){return 0===t||t>this._itemsLength?0===t?this._itemsLength:1:t}slideTo(t,e){const i=this._galleryList;this._isAnimating=!0;const s=new Date;this.interval=window.setInterval((()=>{let o=((new Date).getTime()-s.getTime())/this.animationDuration;o>1&&(o=1),i.style.left=t+Math.abs(e-t)*o**2*(t>e?-1:1)+"%",1===o&&(clearInterval(this.interval),this._isAnimating=!1,this.current=this.checkCurrentSlide(this.current),this._galleryList.style.left=-100*this.current+"%")}),this.frameGap)}changeCurrentSlide(t){if(this._itemsLength<=1)return;this.smoothDiametralTransition||(t=this.checkCurrentSlide(t));const e=parseInt(this._galleryList.style.left,10)||0,i=-100*t;this._isAnimating||e===i||(this.current=t,this.slideTo(e,i))}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.interval)}render(){return N`<div class="wrap">
			<div class="gallery">
				<ul class="gallery-list">
					<slot></slot>
				</ul>
			</div>
			${this.showArrows?N`<div class="gallery-controls">
				<button
					class="gallery-controls__previous-button"
					@click="${()=>{this.changeCurrentSlide(this.current-1)}}"
				></button>
				<button
					class="gallery-controls__next-button"
					@click="${()=>{this.changeCurrentSlide(this.current+1)}}"
				></button>`:""}
			</div>
			${0!==this._itemsLength&&this.showToggles?N`<ul class="gallery-toggles">
						${Array.from({length:this._itemsLength},((t,e)=>N`<li
									class="gallery-toggle ${ee({"gallery-toggle--active":this.current-1===e})}"
									@click="${()=>{this.changeCurrentSlide(e+1)}}"
								></li>`))}
				  </ul>`:""}
		</div>`}};ce([ct({type:Boolean}),de("design:type",Object)],he.prototype,"smoothDiametralTransition",void 0),ce([ct({type:Number}),de("design:type",Object)],he.prototype,"current",void 0),ce([ct({type:Number}),de("design:type",Object)],he.prototype,"frameGap",void 0),ce([ct({type:Number}),de("design:type",Object)],he.prototype,"animationDuration",void 0),ce([ct({type:Boolean}),de("design:type",Object)],he.prototype,"showArrows",void 0),ce([ct({type:Boolean}),de("design:type",Object)],he.prototype,"showToggles",void 0),ce([gt({flatten:!0}),de("design:type",Array)],he.prototype,"_carouselItems",void 0),ce([pt(".gallery-list"),de("design:type",HTMLElement)],he.prototype,"_galleryList",void 0),ce([pt(".gallery"),de("design:type",HTMLElement)],he.prototype,"_galleryWrap",void 0),ce([dt(),de("design:type",Object)],he.prototype,"_itemsLength",void 0),ce([dt(),de("design:type",Object)],he.prototype,"_isAnimating",void 0),he=ce([rt("gallery-carousel-component")],he);var pe=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ue=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let me=class extends ot{constructor(){super(...arguments),this.windowListeners=[]}static{this.styles=n`
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
  `}initializeImageComparator(t){const e=this._comparatorElements,i=e[t],{offsetWidth:s}=i;let o=!1;const n=document.createElement("div");function r(t){i.style.width=t+"px",n.style.left=i.offsetWidth-n.offsetWidth/2+"px"}n.setAttribute("class","comparison-slider"),this._wrapElement.append(n),r(s-s/e.length*t);const a=t=>{t.preventDefault(),o=!0};n.addEventListener("mousedown",a),n.addEventListener("pointerdown",a),this.windowListeners.unshift((t=>{if(!o)return!1;i.style.left="0";let e=t.pageX-i.getBoundingClientRect().left-window.scrollX;e<0&&(e=0),e>s&&(e=s),r(e)})),window.addEventListener("mousemove",this.windowListeners[0],{passive:!0}),window.addEventListener("pointermove",this.windowListeners[0],{passive:!0}),this.windowListeners.unshift((()=>{o=!1})),window.addEventListener("mouseup",this.windowListeners[0],{passive:!0}),window.addEventListener("pointerup",this.windowListeners[0],{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.windowListeners)["mousemove","pointermove","mouseup","pointerup"].forEach((e=>{window.removeEventListener(e,t)}))}firstUpdated(){for(let t=1;t<this._comparatorElements.length;t++)this.initializeImageComparator(t)}render(){return N`<div class="wrap">
      <slot></slot>
    </div>`}};pe([gt(),ue("design:type",Array)],me.prototype,"_comparatorElements",void 0),pe([pt(".wrap"),ue("design:type",HTMLDivElement)],me.prototype,"_wrapElement",void 0),me=pe([rt("image-comparator-component")],me);var fe=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},ge=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ye=class extends ot{constructor(){super(...arguments),this.zoomScale=2,this.autoConfigureGlassSource=!1}moveMagnifier(t,e){const i=this.cachedImage,s=this.cachedGlass,o=s.offsetWidth/2,n=s.offsetHeight/2;t>i.offsetWidth?t=i.offsetWidth:t<0&&(t=0),e>i.offsetHeight?e=i.offsetHeight:e<0&&(e=0),s.style.left=t-o+"px",s.style.top=e-n+"px",s.style.backgroundPosition="-"+(t*this.zoomScale-o)+"px -"+(e*this.zoomScale-n)+"px"}firstUpdated(){const t=this._image[0].querySelector("[data-magnifier-content]"),[e]=this._glass;$t(t),this.autoConfigureGlassSource&&t.hasAttribute("src")&&(e.style.backgroundImage=`url("${t.getAttribute("src")??""}")`),e.style.backgroundSize=`${t.offsetWidth*this.zoomScale}px ${t.offsetHeight*this.zoomScale}px`,this.cachedImage=t,this.cachedGlass=e,this.moveListener=e=>{e.preventDefault();const i=t.getBoundingClientRect();this.moveMagnifier(e.pageX-i.left-window.scrollX,e.pageY-i.top-window.scrollY)},t.addEventListener("mousemove",this.moveListener),e.addEventListener("mousemove",this.moveListener),t.addEventListener("pointermove",this.moveListener),t.addEventListener("pointermove",this.moveListener)}render(){return N`<slot></slot>`}};fe([ct({type:Number}),ge("design:type",Object)],ye.prototype,"zoomScale",void 0),fe([ct({type:Boolean}),ge("design:type",Object)],ye.prototype,"autoConfigureGlassSource",void 0),fe([gt({flatten:!0}),ge("design:type",Array)],ye.prototype,"_image",void 0),fe([gt({selector:"[data-magnifier-glass]"}),ge("design:type",Array)],ye.prototype,"_glass",void 0),ye=fe([rt("image-magnifier-component")],ye);var ve=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let _e=class extends ot{constructor(){super(...arguments),this.isHorizontal=!1,this.duration=500,this.increment=6,this.noScrollbar=!1,this._selectedItem=0,this._isScrolling=!1}static{this.styles=n`
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
	`}easeInOutQuad(t,e,i,s){return(t/=s/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}smoothScrollTo(t){this._isScrolling=!0;const e=this._wrapElement,i=this.isHorizontal?e.scrollLeft:e.scrollTop,s=t-i;let o=0;const n=this.isHorizontal?"scrollLeft":"scrollTop",r=()=>{if(!this.scrollEventListener)return;o+=this.increment;const a=this.easeInOutQuad(o,i,s,this.duration);a>this.increment?e[n]=a-this.increment/2:e[n]=a,o<this.duration?setTimeout(r,this.increment):o>=this.duration&&(e[n]=t,this._isScrolling=!1)};r()}scrollSlide(t){this._isScrolling||(this._selectedItem+=t,this.smoothScrollTo(this._onePageScrollElements[this._selectedItem].offsetHeight*this._selectedItem))}firstUpdated(){const t=this._onePageScrollElements;this._wrapElement.addEventListener("wheel",this.scrollEventListener=e=>{e.deltaY>0?this._selectedItem>=t.length-1?this._isScrolling||this.smoothScrollTo(this._selectedItem=0):this.scrollSlide(1):0===this._selectedItem?this._isScrolling||(this._selectedItem=t.length-1,this.smoothScrollTo((this.isHorizontal?this._wrapElement.scrollWidth:this._wrapElement.scrollHeight)-(this.isHorizontal?t[0].offsetWidth:t[0].offsetHeight))):this.scrollSlide(-1)},{passive:!0})}disconnectedCallback(){this._wrapElement.removeEventListener("wheel",this.scrollEventListener),super.disconnectedCallback()}render(){return N`<div class="wrap ${ee({"wrap--horizontal":this.isHorizontal,"wrap--no-scrollbar":this.noScrollbar})}">
			<slot></slot>
		</div>`}};ve([ct({type:Boolean}),be("design:type",Object)],_e.prototype,"isHorizontal",void 0),ve([ct({type:Number}),be("design:type",Object)],_e.prototype,"duration",void 0),ve([ct({type:Number}),be("design:type",Object)],_e.prototype,"increment",void 0),ve([ct({type:Boolean}),be("design:type",Object)],_e.prototype,"noScrollbar",void 0),ve([dt(),be("design:type",Object)],_e.prototype,"_selectedItem",void 0),ve([dt(),be("design:type",Object)],_e.prototype,"_isScrolling",void 0),ve([gt(),be("design:type",Array)],_e.prototype,"_onePageScrollElements",void 0),ve([pt(".wrap"),be("design:type",HTMLDivElement)],_e.prototype,"_wrapElement",void 0),_e=ve([rt("one-page-scroll-component")],_e);var we=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},$e=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let xe=class extends ot{constructor(){super(...arguments),this.isHorizontal=!1,this.isHorizontalTranslation=!1,this.effect=1.968,this.speed=2.7,this.margin=0}static{this.styles=n`
		.wrap {
			position: relative;
            transition: 0.1s;
		}
	`}getFirstScrollableParent(){const t=e=>{if(null==e.parentElement)return window;const{overflowX:i,overflowY:s,overflow:o}=window.getComputedStyle(e.parentElement);console.log(i,s,o);const n=/auto|scroll/;return n.test(o)||this.isHorizontal&&n.test(i)||!this.isHorizontal&&n.test(s)?e.parentElement:t(e.parentElement)};return t(this)}rerender(){const t=this._wrapper,e=this.getFirstScrollableParent();e.removeEventListener("scroll",this.scrollListener);const i=()=>e instanceof HTMLElement?this.isHorizontal?e.scrollLeft:e.scrollTop:this.isHorizontal?e.scrollX:e.scrollY,s=t.getBoundingClientRect()[this.isHorizontal?"left":"top"]+i(),o=(e instanceof HTMLElement?this.isHorizontal?e.clientWidth:e.clientHeight:this.isHorizontal?e.innerWidth:e.innerHeight)/this.effect;e.addEventListener("scroll",this.scrollListener=()=>{const e=i();if(e>s-2*o&&e<s+o){const i=(e-(s-o))/this.speed-this.margin;t.style.transform=`translate${this.isHorizontalTranslation?"X":"Y"}(${i}px)`}},{passive:!0}),this.scrollListener(new Event("scroll"))}firstUpdated(){this.rerender(),window.addEventListener("resize",this.resizeListener=()=>{this.rerender()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeListener)}render(){return N`<div class="wrap">
			<slot></slot>
		</div>`}};we([ct({type:Boolean}),$e("design:type",Object)],xe.prototype,"isHorizontal",void 0),we([ct({type:Boolean}),$e("design:type",Object)],xe.prototype,"isHorizontalTranslation",void 0),we([ct({type:Number}),$e("design:type",Object)],xe.prototype,"effect",void 0),we([ct({type:Number}),$e("design:type",Object)],xe.prototype,"speed",void 0),we([ct({type:Number}),$e("design:type",Object)],xe.prototype,"margin",void 0),we([pt(".wrap"),$e("design:type",HTMLElement)],xe.prototype,"_wrapper",void 0),xe=we([rt("parallax-component")],xe);const Se=()=>({totalItems:0,containerDimensions:[0,0],items:[],calculations:[{opacity:1,offset:0,distance:0}],carouselRotationsLeft:0,currentlyMoving:!1,itemsAnimating:0,currentDirection:At.STILL,leftItemsCount:0,rightItemsCount:0,performingSetup:!0});var Ce=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Ae=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ke=class extends ot{constructor(){super(...arguments),this.imageSize="300px",this.margin="250px auto",this.startingItem=1,this.separation=175,this.separationMultiplier=.6,this.horizonOffset=0,this.horizonOffsetMultiplier=1,this.sizeMultiplier=.7,this.opacityMultiplier=.87,this.horizon=0,this.flankingItems=3,this.isVertical=!1,this.preloadImages=!1,this.forcedImageWidth=0,this.forcedImageHeight=0,this.animationLength=300,this.centralItemClassName="active",this.allowSwitchingOrientation=!1,this._internalState=Se()}static{this.styles=n`
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
	`}initializeCarouselData(t){const e=window.getComputedStyle(t);this._internalState.totalItems=this.images.length,this._internalState.containerDimensions=[parseInt(e.width,10),parseInt(e.height,10)]}forceImageDimensionIfEnabled(){this.images.forEach((t=>t.style.display="none")),this.forcedImageWidth&&this.forcedImageHeight&&this.images.forEach((t=>{t.style.width=`${this.forcedImageWidth}px`,t.style.height=`${this.forcedImageHeight}px`}))}preload(t){if(!this.preloadImages)return void t();const e=this.images;let i=0;for(const s of e)s.setAttribute("src",s.getAttribute("src")??""),s.addEventListener("load",(()=>{s.style.display="",++i===e.length&&t()}))}setOriginalItemDimensions(){this.images.forEach((t=>{(!t.dataset.originalWidth||this.forcedImageWidth>0)&&(t.style.display="",t.dataset.originalWidth=String(t.clientWidth),t.style.display="none"),(!t.dataset.originalHeight||this.forcedImageHeight>0)&&(t.style.display="",t.dataset.originalHeight=String(t.clientHeight),t.style.display="none")}))}calculatePositionProperties(){let t=this.horizonOffset,e=this.separation;for(let i=1;i<=this.flankingItems+2;i++){i>1&&(t*=this.horizonOffsetMultiplier,e*=this.separationMultiplier);const{distance:s,offset:o,opacity:n}=this._internalState.calculations[i-1];this._internalState.calculations[i]={distance:s+e,offset:o+t,opacity:n*this.opacityMultiplier}}this._internalState.calculations[this.flankingItems+1]={distance:0,offset:0,opacity:0}}setupCarousel(){this._internalState.items=this.images,0===this.horizon&&(this.horizon=this._internalState.containerDimensions[Number(!this.isVertical)]/2);for(const t of this._internalState.items){let e,i;this.isVertical?(e=this.horizon-Number(t.dataset.originalWidth)/2,i=this._internalState.containerDimensions[1]/2-Number(t.dataset.originalHeight)/2):(e=this._internalState.containerDimensions[0]/2-Number(t.dataset.originalWidth)/2,i=this.horizon-Number(t.dataset.originalHeight)/2),Object.assign(t.style,{left:`${e}px`,top:`${i}px`,visibility:"visible",position:"absolute","z-index":0,opacity:0}),t.style.display=""}}performCalculations(t,e){const i=Math.abs(e),s=i<this.flankingItems+1?this._internalState.calculations[i]:this._internalState.calculations[this.flankingItems+1],o=this.sizeMultiplier**i,n=o*Number(t.dataset.originalWidth),r=o*Number(t.dataset.originalHeight),a=e<0?-s.distance:s.distance,l=this._internalState.containerDimensions[Number(this.isVertical)]/2;let c,d;this.isVertical?(d=this.horizon-s.offset-n/2,c=l+a-r/2):(d=l+a-n/2,c=this.horizon-s.offset-r/2),t.dataset.width=String(n),t.dataset.height=String(r),t.dataset.top=String(c),t.dataset.left=String(d),t.dataset.oldPosition=t.dataset.currentPosition||"0",t.dataset.depth=String(this.flankingItems+2-i),t.dataset.opacity=String(e?s.opacity:1)}itemAnimationComplete(t,e){this._internalState.itemsAnimating--,t.dataset.currentPosition=String(e),0===e&&(this._internalState.currentCenterItem=t),this._internalState.itemsAnimating||(this._internalState.currentlyMoving=!1,--this._internalState.carouselRotationsLeft<=0?(this._internalState.currentCenterItem?.classList.add(this.centralItemClassName),this._internalState.performingSetup?this._internalState.performingSetup=!1:(this.movingToCenter(),this.movedToCenter())):this.rotateCarousel())}movingFromCenter(t){return t?(HTMLElement,t):void 0}movingToCenter(t){}movedToCenter(){}moveItem(t,e){const i=()=>{Object.assign(t.style,{left:`${t.dataset.left}px`,width:`${t.dataset.width}px`,height:`${t.dataset.height}px`,top:`${t.dataset.top}px`,opacity:String(t.dataset.opacity)})};Math.abs(e)<=this.flankingItems+1?(this.performCalculations(t,e),this._internalState.itemsAnimating++,t.style.zIndex=t.dataset.depth??"",i(),setTimeout((()=>{this.itemAnimationComplete(t,e)}),this.animationLength)):(t.dataset.currentPosition=String(e),"0"!==t.dataset.oldPosition&&t.dataset.oldPosition||(this.performCalculations(t,e),i()))}setupStarterRotation(){this.startingItem||=Math.round(this._internalState.totalItems/2),this._internalState.rightItemsCount=Math.ceil((this._internalState.totalItems-1)/2),this._internalState.leftItemsCount=Math.floor((this._internalState.totalItems-1)/2),this._internalState.carouselRotationsLeft=1;let t=this.startingItem-1;this.moveItem(this._internalState.items[t],0),this._internalState.items[t].style.opacity="1";for(let e=1;e<=this._internalState.rightItemsCount;e++)t<this._internalState.totalItems-1?t++:t=0,this._internalState.items[t].style.opacity="1",this.moveItem(this._internalState.items[t],e);t=this.startingItem-1;for(let e=-1;e>=-this._internalState.leftItemsCount;e--)t>0?t--:t=this._internalState.totalItems-1,this._internalState.items[t].style.opacity="1",this.moveItem(this._internalState.items[t],e)}initCarousel(t){this._internalState=Se(),this.initializeCarouselData(t),this.forceImageDimensionIfEnabled(),this.preload((()=>{this.setOriginalItemDimensions(),this.calculatePositionProperties(),this.setupCarousel(),this.setupStarterRotation()}))}moveOnce(t){this._internalState.currentlyMoving||(this._internalState.previousCenterItem=this._internalState.currentCenterItem,this.movingFromCenter(this._internalState.currentCenterItem),t===At.BACKWARDS?this.movingFromCenter(this._internalState.currentCenterItem?.previousElementSibling??void 0):t===At.FORWARDS&&this.movingFromCenter(this._internalState.currentCenterItem?.nextElementSibling??void 0),this._internalState.currentDirection=t)}rotateCarousel(){if(!this._internalState.currentlyMoving){this._internalState.currentCenterItem?.classList.remove(this.centralItemClassName),this._internalState.currentlyMoving=!0,this._internalState.itemsAnimating=0,this._internalState.carouselRotationsLeft++;for(const t of this._internalState.items){const e=parseInt(t.dataset.currentPosition??"",10);let i=e+-Number(this._internalState.currentDirection);Math.abs(i)>this._internalState[i>0?"rightItemsCount":"leftItemsCount"]&&(i=-e,this._internalState.totalItems%2==0&&i++),this.moveItem(t,i)}}}nextItem(){this.moveOnce(At.FORWARDS),this.rotateCarousel()}previousItem(){this.moveOnce(At.BACKWARDS),this.rotateCarousel()}switchOrientation(){this.isVertical=!this.isVertical,this.rotateCarousel()}connectedCallback(){super.connectedCallback(),this.parent.then((t=>this.initCarousel(t))),window.addEventListener("resize",this.windowResizeListener=async()=>{this.initCarousel(await this.parent)})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.windowResizeListener)}render(){return N`<div class="wrap">
			<div class="images" style=${wt({height:this.imageSize,margin:this.margin})}>
				<slot></slot>
			</div>
			<div class="carousel-controls">
				<button class="carousel-controls__previous-button" @click="${this.previousItem}"></button>
				${this.allowSwitchingOrientation?N`<button class="carousel-controls__perspective-button" @click="${this.switchOrientation}">Switch</button>`:""}
				<button class="carousel-controls__next-button" @click="${this.nextItem}"></button>
			</div>
		</div>`}};function Oe(t,e,i){return t?e():null==i?void 0:i()}Ce([ct(),Ae("design:type",Object)],ke.prototype,"imageSize",void 0),Ce([ct(),Ae("design:type",Object)],ke.prototype,"margin",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"startingItem",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"separation",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"separationMultiplier",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"horizonOffset",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"horizonOffsetMultiplier",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"sizeMultiplier",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"opacityMultiplier",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"horizon",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"flankingItems",void 0),Ce([ct({type:Boolean}),Ae("design:type",Object)],ke.prototype,"isVertical",void 0),Ce([ct({type:Boolean}),Ae("design:type",Object)],ke.prototype,"preloadImages",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"forcedImageWidth",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"forcedImageHeight",void 0),Ce([ct({type:Number}),Ae("design:type",Object)],ke.prototype,"animationLength",void 0),Ce([ct(),Ae("design:type",Object)],ke.prototype,"centralItemClassName",void 0),Ce([ct({type:Boolean}),Ae("design:type",Object)],ke.prototype,"allowSwitchingOrientation",void 0),Ce([ut(".images"),Ae("design:type",Promise)],ke.prototype,"parent",void 0),Ce([gt({flatten:!0}),Ae("design:type",Array)],ke.prototype,"images",void 0),Ce([dt(),Ae("design:type",Object)],ke.prototype,"_internalState",void 0),ke=Ce([rt("perspective-carousel-component")],ke);var Ee=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},Re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let je=class extends ot{constructor(){super(...arguments),this.open=!1,this.displayOpenButton=!1,this.closeButtonSelector="[data-popup-close-button]"}static{this.styles=n`
		.popup {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10000;
		}
	`}async openPopup(){if(this.open)return;this.open=!0;const t=await this._popup,e=Array.from(this._assignedElements.reduce(((t,e)=>[...t,...Array.from(e.querySelectorAll(this.closeButtonSelector))]),[]));t.addEventListener("click",this.clickEventListener=t=>{t.target&&e.includes(t.target)&&this.closePopup()}),this.autoClosingTime&&(await new Promise((t=>setTimeout(t,this.autoClosingTime??0))),this.open&&this.closePopup())}async closePopup(){this.open&&((await this._popup).removeEventListener("click",this.clickEventListener),this.open=!1)}render(){return N`${Oe(this.displayOpenButton,(()=>N`<div @click="${this.openPopup}">
					<slot name="popup-open-button"></slot>
				</div>`))}
		${Oe(this.open,(()=>N`<div class="popup">
				<slot name="popup"></slot>
			</div>`))}`}};Ee([ct({type:Boolean}),Re("design:type",Object)],je.prototype,"open",void 0),Ee([ct({type:Boolean}),Re("design:type",Object)],je.prototype,"displayOpenButton",void 0),Ee([ct({type:Number}),Re("design:type",Number)],je.prototype,"autoClosingTime",void 0),Ee([ct(),Re("design:type",Object)],je.prototype,"closeButtonSelector",void 0),Ee([ut(".popup"),Re("design:type",Promise)],je.prototype,"_popup",void 0),Ee([gt({slot:"popup"}),Re("design:type",Array)],je.prototype,"_assignedElements",void 0),je=Ee([rt("popup-component")],je);const Ie=JSON.parse('{"components":[{"name":"Accordion","link":"../accordion"},{"name":"Autocomplete Input","link":"../autocomplete-list"},{"name":"Backface Carousel","link":"../backface-carousel"},{"name":"Ciphering Text","link":"../ciphering-text"},{"name":"Color Picker","link":"../color-picker"},{"name":"Countdown","link":"../countdown"},{"name":"Custom Select","link":"../custom-select"},{"name":"Floating Panel","link":"../floating-panel"},{"name":"Gallery Carousel","link":"../gallery-carousel"},{"name":"Image Comparator","link":"../image-comparator"},{"name":"Magnifier","link":"../magnifier"},{"name":"Menu Carousel","link":"../menu-carousel"},{"name":"One Page Scroll","link":"../one-page-scroll"},{"name":"Parallax","link":"../parallax"},{"name":"Perspective Carousel","link":"../perspective-carousel"},{"name":"Popup","link":"../popup"},{"name":"Range Input","link":"../range-input"}]}');var Le=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let ze=class extends ot{constructor(){super(...arguments),this.activeLink=""}static{this.styles=n`
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
  `}render(){return N`
      <nav class="wrap">
        ${Object.entries(Ie).map((([t,e])=>N`
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
                    ${e.map((({name:t,link:e})=>N`<li class="list-sublist__item ${t===this.activeLink?"list-sublist__item--active":""}">
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
    `}};Le([ct(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],ze.prototype,"activeLink",void 0),ze=Le([rt("sidebar-component")],ze);let Pe=class extends ot{static{this.styles=n`
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
  `}render(){return N`
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
    `}};Pe=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([rt("header-component")],Pe)})();