/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t,e,n,i,r={7422:(t,e,n)=>{n.d(e,{A:()=>a});var i=n(1601),r=n.n(i),s=n(6314),o=n.n(s)()(r());o.push([t.id,'body,\n#app {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin: 0;\n\tbackground: linear-gradient(161deg, rgb(6, 5, 5) 14%, rgb(23, 15, 41) 79%);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tmin-height: 100vh;\n\tfont-family:\n\t\tHelvetica,\n\t\tSegoe UI,\n\t\tArial,\n\t\tsans-serif;\n}\n\n.header {\n\tposition: relative;\n\tz-index: 2;\n\tmin-width: 95vw;\n\tmin-height: 50px;\n\tflex: 1 1 0;\n\tbackground-color: rgba(0, 0, 0, 0.25);\n}\n\n.navigation {\n\tposition: relative;\n\tz-index: 2;\n\twidth: 210px;\n\theight: calc(100vh - 50px);\n\tbackground: rgba(0, 0, 0, 0.25);\n}\n\n.main {\n\tposition: relative;\n\tmax-width: calc(100% - 210px - 6rem);\n\theight: calc(100vh - 50px - 6rem);\n\tmargin: 1rem;\n\tpadding: 2rem;\n\tflex-grow: 1;\n\tcolor: #cacaca;\n\tborder-radius: 10px;\n\toverflow-y: auto;\n}\n\n.main::before {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 1;\n\tmix-blend-mode: hard-light;\n\tbackground: rgba(22, 22, 22, 0.525);\n\tcontent: "";\n\topacity: 0.5;\n\tpointer-events: none;\n}\n\n.heading {\n\tfont-weight: 800;\n\tfont-size: 2.25em;\n\tmargin-top: 0;\n\tmargin-bottom: 0.8888889em;\n\tline-height: 1.1111111;\n\tletter-spacing: -0.025em;\n}\n\n*::-webkit-scrollbar {\n\twidth: 8px;\n\tborder-radius: 10px;\n\tbackground-color: #222;\n}\n\n*::-webkit-scrollbar-thumb {\n\tbackground-color: rgb(164, 123, 203);\n\tborder-radius: 10px;\n}\n\n@media (max-width: 800px) {\n\t.navigation {\n\t\twidth: 100%;\n\t\theight: 25vh;\n\t}\n\n\t.main {\n\t\toverflow-y: hidden;\n\t\theight: auto;\n\t\tmax-width: 100%;\n\t}\n}\n',""]);const a=o},6314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var h=[].concat(t[c]);i&&o[h[0]]||(void 0!==s&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=s),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),r&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=r):h[4]="".concat(r)),e.push(h))}},e}},1601:t=>{t.exports=function(t){return t[1]}},5072:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var s={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],h=s[c]||0,d="".concat(c," ").concat(h);s[c]=h+1;var p=n(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=r(u,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var s=i(t=t||[],r=r||{});return function(t){t=t||[];for(var o=0;o<s.length;o++){var a=n(s[o]);e[a].references--}for(var l=i(t,r),c=0;c<s.length;c++){var h=n(s[c]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}s=l}}},7659:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},5056:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},7825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},1113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},9394:()=>{location.origin.endsWith(".github.io")?window.sharedInterfacesUrl=`${location.origin}/${location.pathname.slice(1).replace(/\/.+/,"")}/shared`:window.sharedInterfacesUrl=`${location.origin}/shared`},6010:(t,e,n)=>{var i=new Error;t.exports=new Promise(((t,e)=>{if("undefined"!=typeof shared)return t();n.l(sharedInterfacesUrl+"/remoteEntry.js",(n=>{if("undefined"!=typeof shared)return t();var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading script failed.\n("+r+": "+s+")",i.name="ScriptExternalLoadError",i.type=r,i.request=s,e(i)}),"shared")})).then((()=>shared))},1762:(t,e,n)=>{n.d(e,{i:()=>i});const i=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,n),n)},1124:(t,e,n)=>{n.d(e,{K:()=>r});var i=n(1762);function r(t){return(e,n)=>{const{slot:r,selector:s}=t??{},o="slot"+(r?`[name=${r}]`:":not([name])");return(0,i.i)(e,n,{get(){const e=this.renderRoot?.querySelector(o),n=e?.assignedElements(t)??[];return void 0===s?n:n.filter((t=>t.matches(s)))}})}}},842:(t,e,n)=>{n.d(e,{mN:()=>E,AH:()=>l,W3:()=>A,Ec:()=>w});const i=globalThis,r=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class a{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new a(n,t,s)},c=(t,e)=>{if(r)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const n of e){const e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=n.cssText,t.appendChild(e)}},h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:d,defineProperty:p,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,v=globalThis,$=v.trustedTypes,y=$?$.emptyScript:"",_=v.reactiveElementPolyfillSupport,b=(t,e)=>t,A={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},w=(t,e)=>!d(t,e),x={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&p(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:r}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const s=i?.call(this);r.call(this,e),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...f(t),...m(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(void 0!==i&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:A).toAttribute(e,n.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const n=this.constructor,i=n._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=n.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:A;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??w)(this[t],e))return;this.P(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t)!0!==n.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[b("elementProperties")]=new Map,E[b("finalized")]=new Map,_?.({ReactiveElement:E}),(v.reactiveElementVersions??=[]).push("2.0.4")},6752:(t,e,n)=>{n.d(e,{XX:()=>D,c0:()=>E,ge:()=>L,qy:()=>x,s6:()=>S});const i=globalThis,r=i.trustedTypes,s=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,l="?"+a,c=`<${l}>`,h=document,d=()=>h.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,f=t=>u(t)||"function"==typeof t?.[Symbol.iterator],m="[ \t\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,$=/>/g,y=RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,b=/"/g,A=/^(?:script|style|textarea|title)$/i,w=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),x=w(1),E=(w(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),P=new WeakMap,C=h.createTreeWalker(h,129);function T(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const U=(t,e)=>{const n=t.length-1,i=[];let r,s=2===e?"<svg>":"",l=g;for(let e=0;e<n;e++){const n=t[e];let h,d,p=-1,u=0;for(;u<n.length&&(l.lastIndex=u,d=l.exec(n),null!==d);)u=l.lastIndex,l===g?"!--"===d[1]?l=v:void 0!==d[1]?l=$:void 0!==d[2]?(A.test(d[2])&&(r=RegExp("</"+d[2],"g")),l=y):void 0!==d[3]&&(l=y):l===y?">"===d[0]?(l=r??g,p=-1):void 0===d[1]?p=-2:(p=l.lastIndex-d[2].length,h=d[1],l=void 0===d[3]?y:'"'===d[3]?b:_):l===b||l===_?l=y:l===v||l===$?l=g:(l=y,r=void 0);const f=l===y&&t[e+1].startsWith("/>")?" ":"";s+=l===g?n+c:p>=0?(i.push(h),n.slice(0,p)+o+n.slice(p)+a+f):n+a+(-2===p?e:f)}return[T(t,s+(t[n]||"<?>")+(2===e?"</svg>":"")),i]};class M{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,c=0;const h=t.length-1,p=this.parts,[u,f]=U(t,e);if(this.el=M.createElement(u,n),C.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=C.nextNode())&&p.length<h;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(o)){const e=f[c++],n=i.getAttribute(t).split(a),r=/([.?@])?(.*)/.exec(e);p.push({type:1,index:s,name:r[2],strings:n,ctor:"."===r[1]?R:"?"===r[1]?j:"@"===r[1]?I:N}),i.removeAttribute(t)}else t.startsWith(a)&&(p.push({type:6,index:s}),i.removeAttribute(t));if(A.test(i.tagName)){const t=i.textContent.split(a),e=t.length-1;if(e>0){i.textContent=r?r.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],d()),C.nextNode(),p.push({type:2,index:++s});i.append(t[e],d())}}}else if(8===i.nodeType)if(i.data===l)p.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(a,t+1));)p.push({type:7,index:s}),t+=a.length-1}s++}}static createElement(t,e){const n=h.createElement("template");return n.innerHTML=t,n}}function O(t,e,n=t,i){if(e===E)return e;let r=void 0!==i?n._$Co?.[i]:n._$Cl;const s=p(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,n,i)),void 0!==i?(n._$Co??=[])[i]=r:n._$Cl=r),void 0!==r&&(e=O(t,r._$AS(t,e.values),r,i)),e}class k{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??h).importNode(e,!0);C.currentNode=i;let r=C.nextNode(),s=0,o=0,a=n[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new H(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new z(r,this,t)),this._$AV.push(e),a=n[++o]}s!==a?.index&&(r=C.nextNode(),s++)}return C.currentNode=h,i}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),p(t)?t===S||null==t||""===t?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):f(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==S&&p(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=M.createElement(T(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new k(i,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=P.get(t.strings);return void 0===e&&P.set(t.strings,e=new M(t)),e}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const r of t)i===e.length?e.push(n=new H(this.S(d()),this.S(d()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}_$AI(t,e=this,n,i){const r=this.strings;let s=!1;if(void 0===r)t=O(this,t,e,0),s=!p(t)||t!==this._$AH&&t!==E,s&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=O(this,i[n+o],e,o),a===E&&(a=this._$AH[o]),s||=!p(a)||a!==this._$AH[o],a===S?t=S:t!==S&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class R extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}class j extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}}class I extends N{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??S)===E)return;const n=this._$AH,i=t===S&&n!==S||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==S&&(n===S||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const L={P:o,A:a,C:l,M:1,L:U,R:k,D:f,V:O,I:H,H:N,N:j,U:I,B:R,F:z},q=i.litHtmlPolyfillSupport;q?.(M,H),(i.litHtmlVersions??=[]).push("3.1.2");const D=(t,e,n)=>{const i=n?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=n?.renderBefore??null;i._$litPart$=r=new H(e.insertBefore(d(),t),t,void 0,n??{})}return r._$AI(t),r}},4791:(t,e,n)=>{n.d(e,{EM:()=>i,MZ:()=>a,KN:()=>c.K,wk:()=>l});const i=t=>(e,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var r=n(842);const s={attribute:!0,type:String,converter:r.W3,reflect:!1,hasChanged:r.Ec},o=(t=s,e,n)=>{const{kind:i,metadata:r}=n;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(n.name,t),"accessor"===i){const{name:i}=n;return{set(n){const r=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=n;return function(n){const r=this[i];e.call(this,n),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function a(t){return(e,n)=>"object"==typeof n?o(t,e,n):((t,e,n)=>{const i=e.hasOwnProperty(n);return e.constructor.createProperty(n,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}function l(t){return a({...t,state:!0,attribute:!1})}var c=n(1124)},2618:(t,e,n)=>{n.d(e,{WF:()=>s,AH:()=>i.AH,qy:()=>r.qy,XX:()=>r.XX});var i=n(842),r=n(6752);class s extends i.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,r.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return r.c0}}s._$litElement$=!0,s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const o=globalThis.litElementPolyfillSupport;o?.({LitElement:s}),(globalThis.litElementVersions??=[]).push("4.0.4")}},s={};function o(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={id:t,exports:{}};return r[t](n,n.exports,o),n.exports}o.m=r,o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,n)=>(o.f[n](t,e),e)),[])),o.u=t=>t+"-lit.js",o.miniCssF=t=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="js-lit-components-library:",o.l=(n,i,r,s)=>{if(t[n])t[n].push(i);else{var a,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),h=0;h<c.length;h++){var d=c[h];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+r){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",e+r),a.src=n),t[n]=[i];var p=(e,i)=>{a.onerror=a.onload=null,clearTimeout(u);var r=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((t=>t(i))),e)return e(i)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n={1656:[5749],1805:[1805],1956:[1956],7687:[7687]},i={1805:["default","./component/sidebar",6010],1956:["default","./utils/utils",6010],5749:["default","./component/rebuildingText",6010],7687:["default","./interfaces/selfModifyingText",6010]},o.f.remotes=(t,e)=>{o.o(n,t)&&n[t].forEach((t=>{var n=o.R;n||(n=[]);var r=i[t];if(!(n.indexOf(r)>=0)){if(n.push(r),r.p)return e.push(r.p);var s=e=>{e||(e=new Error("Container missing")),"string"==typeof e.message&&(e.message+='\nwhile loading "'+r[1]+'" from '+r[2]),o.m[t]=()=>{throw e},r.p=0},a=(t,n,i,o,a,l)=>{try{var c=t(n,i);if(!c||!c.then)return a(c,o,l);var h=c.then((t=>a(t,o)),s);if(!l)return h;e.push(r.p=h)}catch(t){s(t)}},l=(t,e,i)=>a(e.get,r[1],n,0,c,i),c=e=>{r.p=1,o.m[t]=t=>{t.exports=e()}};a(o,r[2],0,0,((t,e,n)=>t?a(o.I,r[0],0,t,l,n):s()),1)}}))},(()=>{o.S={};var t={},e={};o.I=(n,i)=>{i||(i=[]);var r=e[n];if(r||(r=e[n]={}),!(i.indexOf(r)>=0)){if(i.push(r),t[n])return t[n];o.o(o.S,n)||(o.S[n]={}),o.S[n];var s=[];return"default"===n&&(t=>{var e=t=>{return e="Initialization of sharing external failed: "+t,void("undefined"!=typeof console&&console.warn&&console.warn(e));var e};try{var r=o(6010);if(!r)return;var a=t=>t&&t.init&&t.init(o.S[n],i);if(r.then)return s.push(r.then(a,e));var l=a(r);if(l&&l.then)return s.push(l.catch(e))}catch(t){e(t)}})(),s.length?t[n]=Promise.all(s).then((()=>t[n]=1)):t[n]=1}}})(),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!t||!/^http(s?):/.test(t));)t=n[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t+"../../"})(),(()=>{var t={3295:0};o.f.j=(e,n)=>{var i=o.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else if(/^(1805|1956|7687)$/.test(e))t[e]=0;else{var r=new Promise(((n,r)=>i=t[e]=[n,r]));n.push(i[2]=r);var s=o.p+o.u(e),a=new Error;o.l(s,(n=>{if(o.o(t,e)&&(0!==(i=t[e])&&(t[e]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,i[1](a)}}),"chunk-"+e,e)}};var e=(e,n)=>{var i,r,s=n[0],a=n[1],l=n[2],c=0;if(s.some((e=>0!==t[e]))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);l&&l(o)}for(e&&e(n);c<s.length;c++)r=s[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0},n=self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),o.nc=void 0,(()=>{o(9394);var t=o(5072),e=o.n(t),n=o(7825),i=o.n(n),r=o(7659),s=o.n(r),a=o(5056),l=o.n(a),c=o(540),h=o.n(c),d=o(1113),p=o.n(d),u=o(7422),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=h(),e()(u.A,f),u.A&&u.A.locals&&u.A.locals;var m=o(2618),g=o(4791),v=function(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};o.e(4512).then(o.bind(o,2131)),Promise.all([o.e(1805),o.e(9843)]).then(o.bind(o,2224)),Promise.all([o.e(1956),o.e(3730),o.e(7687),o.e(1656)]).then(o.bind(o,5236)).then((({RebuildingTextComponent:t})=>{window.customElements.define("rebuilding-text-component",t)})).catch((t=>{console.trace(t)}));let $=class extends m.WF{render(){return m.qy`<rebuilding-text-component .strings=${["Test text","The new resulting text","Small"]}></rebuilding-text-component>`}};$=v([(0,g.EM)("rebuilding-text-application-example-1")],$);let y=class extends m.WF{render(){return m.qy`<rebuilding-text-component .strings=${["Hello","World"]}></rebuilding-text-component>`}};y=v([(0,g.EM)("rebuilding-text-application-example-2")],y);let _=class extends m.WF{render(){return m.qy`
			<rebuilding-text-component
				.strings=${["Test text","The new resulting text","Small"]}
				.typingSpeed=${200}
			></rebuilding-text-component>
		`}};_=v([(0,g.EM)("rebuilding-text-application-example-3")],_);let b=class extends m.WF{static{this.styles=m.AH`
		span {
			display: inline-block;
			overflow: hidden;
			font-size: 24px;
			line-height: 56px;
			white-space: nowrap;
			transition: all 175ms ease;
		}

		transition-component {
			font-size: 0;
		}

		.leave-active > span {
			max-width: 1ch;
			min-width: 1ch;
		}

		.leave > span {
			max-width: 0;
			min-width: 0;
		}

		.appear-active > span {
			max-width: 0;
			min-width: 0;
		}

		.appear > span {
			max-width: 1ch;
			min-width: 1ch;
		}

		.enter > span {
			max-width: 1ch;
			min-width: 1ch;
		}

		.enter-active > span {
			max-width: 0;
			min-width: 0;
		}
	`}render(){return m.qy`<rebuilding-text-component
			class="rebuilding-text"
			.strings=${["Test text","The new resulting text","Small"]}
			.renderElements=${(t,e)=>({key:"idle"!==t.letterState?t.letter+String(e):String(e),value:m.qy`<span class="leave">
					<span>${t.letter}</span>
				</span>`})}
			.duration=${175}
			.typingSpeed=${50}
		></rebuilding-text-component>`}};b=v([(0,g.EM)("rebuilding-text-application-example-4")],b)})()})();