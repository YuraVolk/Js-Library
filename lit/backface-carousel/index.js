/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t,e,n,r,i={7422:(t,e,n)=>{n.d(e,{A:()=>a});var r=n(1601),i=n.n(r),s=n(6314),o=n.n(s)()(i());o.push([t.id,'body,\n#app {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin: 0;\n\tbackground: linear-gradient(161deg, rgb(6, 5, 5) 14%, rgb(23, 15, 41) 79%);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tmin-height: 100vh;\n\tfont-family:\n\t\tHelvetica,\n\t\tSegoe UI,\n\t\tArial,\n\t\tsans-serif;\n}\n\n.header {\n\tposition: relative;\n\tz-index: 2;\n\tmin-width: 95vw;\n\tmin-height: 50px;\n\tflex: 1 1 0;\n\tbackground-color: rgba(0, 0, 0, 0.25);\n}\n\n.navigation {\n\tposition: relative;\n\tz-index: 2;\n\twidth: 210px;\n\theight: calc(100vh - 50px);\n\tbackground: rgba(0, 0, 0, 0.25);\n}\n\n.main {\n\tposition: relative;\n\tmax-width: calc(100% - 210px - 6rem);\n\theight: calc(100vh - 50px - 6rem);\n\tmargin: 1rem;\n\tpadding: 2rem;\n\tflex-grow: 1;\n\tcolor: #cacaca;\n\tborder-radius: 10px;\n\toverflow-y: auto;\n}\n\n.main::before {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 1;\n\tmix-blend-mode: hard-light;\n\tbackground: rgba(22, 22, 22, 0.525);\n\tcontent: "";\n\topacity: 0.5;\n\tpointer-events: none;\n}\n\n.heading {\n\tfont-weight: 800;\n\tfont-size: 2.25em;\n\tmargin-top: 0;\n\tmargin-bottom: 0.8888889em;\n\tline-height: 1.1111111;\n\tletter-spacing: -0.025em;\n}\n\n*::-webkit-scrollbar {\n\twidth: 8px;\n\tborder-radius: 10px;\n\tbackground-color: #222;\n}\n\n*::-webkit-scrollbar-thumb {\n\tbackground-color: rgb(164, 123, 203);\n\tborder-radius: 10px;\n}\n\n@media (max-width: 800px) {\n\t.navigation {\n\t\twidth: 100%;\n\t\theight: 25vh;\n\t}\n\n\t.main {\n\t\toverflow-y: hidden;\n\t\theight: auto;\n\t\tmax-width: 100%;\n\t}\n}\n',""]);const a=o},6314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,s){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var h=[].concat(t[l]);r&&o[h[0]]||(void 0!==s&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=s),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),e.push(h))}},e}},1601:t=>{t.exports=function(t){return t[1]}},5072:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var s={},o=[],a=0;a<t.length;a++){var c=t[a],l=r.base?c[0]+r.base:c[0],h=s[l]||0,p="".concat(l," ").concat(h);s[l]=h+1;var d=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var m=i(u,r);r.byIndex=a,e.splice(a,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var s=r(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<s.length;o++){var a=n(s[o]);e[a].references--}for(var c=r(t,i),l=0;l<s.length;l++){var h=n(s[l]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}s=c}}},7659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},5056:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},7825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},1113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},9394:()=>{location.origin.endsWith(".github.io")?window.sharedInterfacesUrl=`${location.origin}/${location.pathname.slice(1).replace(/\/.+/,"")}/shared`:window.sharedInterfacesUrl=`${location.origin}/shared`},6010:(t,e,n)=>{var r=new Error;t.exports=new Promise(((t,e)=>{if("undefined"!=typeof shared)return t();n.l(sharedInterfacesUrl+"/remoteEntry.js",(n=>{if("undefined"!=typeof shared)return t();var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;r.message="Loading script failed.\n("+i+": "+s+")",r.name="ScriptExternalLoadError",r.type=i,r.request=s,e(r)}),"shared")})).then((()=>shared))},1762:(t,e,n)=>{n.d(e,{i:()=>r});const r=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,n),n)},1895:(t,e,n)=>{n.d(e,{P:()=>i});var r=n(1762);function i(t,e){return(n,i,s)=>{const o=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof i?n:s??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return(0,r.i)(n,i,{get(){let n=t.call(this);return void 0===n&&(n=o(this),(null!==n||this.hasUpdated)&&e.call(this,n)),n}})}return(0,r.i)(n,i,{get(){return o(this)}})}}},842:(t,e,n)=>{n.d(e,{mN:()=>x,AH:()=>c,W3:()=>A,Ec:()=>E});const r=globalThis,i=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class a{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(e,t))}return t}toString(){return this.cssText}}const c=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1]),t[0]);return new a(n,t,s)},l=(t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const n of e){const e=document.createElement("style"),i=r.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=n.cssText,t.appendChild(e)}},h=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:p,defineProperty:d,getOwnPropertyDescriptor:u,getOwnPropertyNames:m,getOwnPropertySymbols:f,getPrototypeOf:g}=Object,$=globalThis,b=$.trustedTypes,v=b?b.emptyScript:"",y=$.reactiveElementPolyfillSupport,_=(t,e)=>t,A={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},E=(t,e)=>!p(t,e),w={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),$.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(t,n,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){const{get:r,set:i}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const s=r?.call(this);i.call(this,e),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...m(t),...f(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(void 0!==r&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:A).toAttribute(e,n.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const n=this.constructor,r=n._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=n.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:A;this._$Em=r,this[r]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??E)(this[t],e))return;this.P(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t)!0!==n.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[_("elementProperties")]=new Map,x[_("finalized")]=new Map,y?.({ReactiveElement:x}),($.reactiveElementVersions??=[]).push("2.0.4")},6752:(t,e,n)=>{n.d(e,{XX:()=>z,c0:()=>w,qy:()=>E,s6:()=>x});const r=globalThis,i=r.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,c="?"+a,l=`<${c}>`,h=document,p=()=>h.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,m="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,$=/>/g,b=RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,y=/"/g,_=/^(?:script|style|textarea|title)$/i,A=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),E=A(1),w=(A(2),Symbol.for("lit-noChange")),x=Symbol.for("lit-nothing"),S=new WeakMap,k=h.createTreeWalker(h,129);function P(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const C=(t,e)=>{const n=t.length-1,r=[];let i,s=2===e?"<svg>":"",c=f;for(let e=0;e<n;e++){const n=t[e];let h,p,d=-1,u=0;for(;u<n.length&&(c.lastIndex=u,p=c.exec(n),null!==p);)u=c.lastIndex,c===f?"!--"===p[1]?c=g:void 0!==p[1]?c=$:void 0!==p[2]?(_.test(p[2])&&(i=RegExp("</"+p[2],"g")),c=b):void 0!==p[3]&&(c=b):c===b?">"===p[0]?(c=i??f,d=-1):void 0===p[1]?d=-2:(d=c.lastIndex-p[2].length,h=p[1],c=void 0===p[3]?b:'"'===p[3]?y:v):c===y||c===v?c=b:c===g||c===$?c=f:(c=b,i=void 0);const m=c===b&&t[e+1].startsWith("/>")?" ":"";s+=c===f?n+l:d>=0?(r.push(h),n.slice(0,d)+o+n.slice(d)+a+m):n+a+(-2===d?e:m)}return[P(t,s+(t[n]||"<?>")+(2===e?"</svg>":"")),r]};class T{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let s=0,l=0;const h=t.length-1,d=this.parts,[u,m]=C(t,e);if(this.el=T.createElement(u,n),k.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=k.nextNode())&&d.length<h;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(o)){const e=m[l++],n=r.getAttribute(t).split(a),i=/([.?@])?(.*)/.exec(e);d.push({type:1,index:s,name:i[2],strings:n,ctor:"."===i[1]?H:"?"===i[1]?N:"@"===i[1]?R:M}),r.removeAttribute(t)}else t.startsWith(a)&&(d.push({type:6,index:s}),r.removeAttribute(t));if(_.test(r.tagName)){const t=r.textContent.split(a),e=t.length-1;if(e>0){r.textContent=i?i.emptyScript:"";for(let n=0;n<e;n++)r.append(t[n],p()),k.nextNode(),d.push({type:2,index:++s});r.append(t[e],p())}}}else if(8===r.nodeType)if(r.data===c)d.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(a,t+1));)d.push({type:7,index:s}),t+=a.length-1}s++}}static createElement(t,e){const n=h.createElement("template");return n.innerHTML=t,n}}function U(t,e,n=t,r){if(e===w)return e;let i=void 0!==r?n._$Co?.[r]:n._$Cl;const s=d(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(t),i._$AT(t,n,r)),void 0!==r?(n._$Co??=[])[r]=i:n._$Cl=i),void 0!==i&&(e=U(t,i._$AS(t,e.values),i,r)),e}class I{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,r=(t?.creationScope??h).importNode(e,!0);k.currentNode=r;let i=k.nextNode(),s=0,o=0,a=n[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new O(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new j(i,this,t)),this._$AV.push(e),a=n[++o]}s!==a?.index&&(i=k.nextNode(),s++)}return k.currentNode=h,r}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),d(t)?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>u(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==x&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=T.createElement(P(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new I(r,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=S.get(t.strings);return void 0===e&&S.set(t.strings,e=new T(t)),e}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,r=0;for(const i of t)r===e.length?e.push(n=new O(this.S(p()),this.S(p()),this,this.options)):n=e[r],n._$AI(i),r++;r<e.length&&(this._$AR(n&&n._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class M{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(t,e=this,n,r){const i=this.strings;let s=!1;if(void 0===i)t=U(this,t,e,0),s=!d(t)||t!==this._$AH&&t!==w,s&&(this._$AH=t);else{const r=t;let o,a;for(t=i[0],o=0;o<i.length-1;o++)a=U(this,r[n+o],e,o),a===w&&(a=this._$AH[o]),s||=!d(a)||a!==this._$AH[o],a===x?t=x:t!==x&&(t+=(a??"")+i[o+1]),this._$AH[o]=a}s&&!r&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class H extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}}class N extends M{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}}class R extends M{constructor(t,e,n,r,i){super(t,e,n,r,i),this.type=5}_$AI(t,e=this){if((t=U(this,t,e,0)??x)===w)return;const n=this._$AH,r=t===x&&n!==x||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==x&&(n===x||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class j{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const L=r.litHtmlPolyfillSupport;L?.(T,O),(r.litHtmlVersions??=[]).push("3.1.2");const z=(t,e,n)=>{const r=n?.renderBefore??e;let i=r._$litPart$;if(void 0===i){const t=n?.renderBefore??null;r._$litPart$=i=new O(e.insertBefore(p(),t),t,void 0,n??{})}return i._$AI(t),i}},4791:(t,e,n)=>{n.d(e,{EM:()=>r,MZ:()=>a,P:()=>l.P,wk:()=>c});const r=t=>(e,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var i=n(842);const s={attribute:!0,type:String,converter:i.W3,reflect:!1,hasChanged:i.Ec},o=(t=s,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),"accessor"===r){const{name:r}=n;return{set(n){const i=e.get.call(this);e.set.call(this,n),this.requestUpdate(r,i,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=n;return function(n){const i=this[r];e.call(this,n),this.requestUpdate(r,i,t)}}throw Error("Unsupported decorator location: "+r)};function a(t){return(e,n)=>"object"==typeof n?o(t,e,n):((t,e,n)=>{const r=e.hasOwnProperty(n);return e.constructor.createProperty(n,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}function c(t){return a({...t,state:!0,attribute:!1})}var l=n(1895)},2618:(t,e,n)=>{n.d(e,{WF:()=>s,AH:()=>r.AH,qy:()=>i.qy});var r=n(842),i=n(6752);class s extends r.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,i.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return i.c0}}s._$litElement$=!0,s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const o=globalThis.litElementPolyfillSupport;o?.({LitElement:s}),(globalThis.litElementVersions??=[]).push("4.0.4")}},s={};function o(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={id:t,exports:{}};return i[t](n,n.exports,o),n.exports}o.m=i,o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,n)=>(o.f[n](t,e),e)),[])),o.u=t=>t+"-lit.js",o.miniCssF=t=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="js-lit-components-library:",o.l=(n,r,i,s)=>{if(t[n])t[n].push(r);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),h=0;h<l.length;h++){var p=l[h];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+i){a=p;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",e+i),a.src=n),t[n]=[r];var d=(e,r)=>{a.onerror=a.onload=null,clearTimeout(u);var i=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((t=>t(r))),e)return e(r)},u=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n={732:[732],1805:[1805],1956:[1956],3899:[3899]},r={732:["default","./interfaces/carousel",6010],1805:["default","./component/sidebar",6010],1956:["default","./utils/utils",6010],3899:["default","./utils/carousel",6010]},o.f.remotes=(t,e)=>{o.o(n,t)&&n[t].forEach((t=>{var n=o.R;n||(n=[]);var i=r[t];if(!(n.indexOf(i)>=0)){if(n.push(i),i.p)return e.push(i.p);var s=e=>{e||(e=new Error("Container missing")),"string"==typeof e.message&&(e.message+='\nwhile loading "'+i[1]+'" from '+i[2]),o.m[t]=()=>{throw e},i.p=0},a=(t,n,r,o,a,c)=>{try{var l=t(n,r);if(!l||!l.then)return a(l,o,c);var h=l.then((t=>a(t,o)),s);if(!c)return h;e.push(i.p=h)}catch(t){s(t)}},c=(t,e,r)=>a(e.get,i[1],n,0,l,r),l=e=>{i.p=1,o.m[t]=t=>{t.exports=e()}};a(o,i[2],0,0,((t,e,n)=>t?a(o.I,i[0],0,t,c,n):s()),1)}}))},(()=>{o.S={};var t={},e={};o.I=(n,r)=>{r||(r=[]);var i=e[n];if(i||(i=e[n]={}),!(r.indexOf(i)>=0)){if(r.push(i),t[n])return t[n];o.o(o.S,n)||(o.S[n]={}),o.S[n];var s=[];return"default"===n&&(t=>{var e=t=>{return e="Initialization of sharing external failed: "+t,void("undefined"!=typeof console&&console.warn&&console.warn(e));var e};try{var i=o(6010);if(!i)return;var a=t=>t&&t.init&&t.init(o.S[n],r);if(i.then)return s.push(i.then(a,e));var c=a(i);if(c&&c.then)return s.push(c.catch(e))}catch(t){e(t)}})(),s.length?t[n]=Promise.all(s).then((()=>t[n]=1)):t[n]=1}}})(),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t+"../../"})(),(()=>{var t={3895:0};o.f.j=(e,n)=>{var r=o.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(1805|1956|3899|732)$/.test(e))t[e]=0;else{var i=new Promise(((n,i)=>r=t[e]=[n,i]));n.push(r[2]=i);var s=o.p+o.u(e),a=new Error;o.l(s,(n=>{if(o.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}}),"chunk-"+e,e)}};var e=(e,n)=>{var r,i,s=n[0],a=n[1],c=n[2],l=0;if(s.some((e=>0!==t[e]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);c&&c(o)}for(e&&e(n);l<s.length;l++)i=s[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0},n=self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),o.nc=void 0,(()=>{var t=o(4791),e=o(2618),n=(o(9394),o(5072)),r=o.n(n),i=o(7825),s=o.n(i),a=o(7659),c=o.n(a),l=o(5056),h=o.n(l),p=o(540),d=o.n(p),u=o(1113),m=o.n(u),f=o(7422),g={};g.styleTagTransform=m(),g.setAttributes=h(),g.insert=c().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=d(),r()(f.A,g),f.A&&f.A.locals&&f.A.locals;const $=o.p+"img/slide0.png",b=o.p+"img/slide1.png",v=o.p+"img/slide2.png",y=o.p+"img/slide3.png",_=o.p+"img/slide4.png",A=o.p+"img/slide5.png";var E=function(t,e,n,r){var i,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};o.e(4512).then(o.bind(o,2131)),Promise.all([o.e(1805),o.e(9843)]).then(o.bind(o,2224)),Promise.all([o.e(1956),o.e(732),o.e(3899),o.e(6632)]).then(o.bind(o,6632)).then((({BackfaceCarousel:t,BackfaceCarouselItem:e})=>{window.customElements.define("backface-carousel-component",t),window.customElements.define("backface-carousel-item-component",e)})).catch((t=>{console.trace(t)}));const w=e.AH`
	img {
		width: 100%;
		height: 100%;
	}
`;let x=class extends e.WF{static{this.styles=w}render(){return e.qy`<backface-carousel-component showArrows showToggles allowSwitchingOrientation>
			<backface-carousel-item-component>
				<img src=${b} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${$} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${v} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${y} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${_} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${A} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${$} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${b} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${v} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${y} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${_} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${A} alt="Example Image" />
			</backface-carousel-item-component>
		</backface-carousel-component>`}};x=E([(0,t.EM)("backface-carousel-application-example-1")],x);let S=class extends e.WF{static{this.styles=w}render(){return e.qy`<backface-carousel-component isVertical showArrows allowSwitchingOrientation>
			<backface-carousel-item-component>
				<img src=${b} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${$} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${v} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${y} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${_} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${A} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${$} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${b} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${v} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${y} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${_} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${A} alt="Example Image" />
			</backface-carousel-item-component>
		</backface-carousel-component>`}};S=E([(0,t.EM)("backface-carousel-application-example-2")],S)})()})();