(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[4047],{4881:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(1601),r=n.n(a),s=n(6314),o=n.n(s)()(r());o.push([e.id,"\n.marquee-wrap[data-v-af75aaec] {\n    overflow: hidden;\n}\n.marquee[data-v-af75aaec] {\n    width: 10000vw;\n}\n.marquee-text[data-v-af75aaec] {\n    animation-name: marquee-scroll-animation-af75aaec;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-duration: var(--3190318b);\n    float: left;\n}\n.marquee--paused .marquee-text[data-v-af75aaec] {\n    animation-play-state: paused;\n}\n.marquee-text--reversed[data-v-af75aaec] {\n    animation-direction: reverse;\n}\n@keyframes marquee-scroll-animation-af75aaec {\nfrom {\n        transform: translateX(0);\n}\nto {\n        transform: translateX(-100%);\n}\n}\n",""]);const i=o},6314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);a&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},1601:e=>{"use strict";e.exports=function(e){return e[1]}},6262:(e,t)=>{"use strict";t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},4047:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var a=n(1425),r={class:"marquee-wrap"};const s=(0,a.pM)({__name:"MarqueeCarousel",props:{duration:{default:"15s"},repetitions:{default:2},isPaused:{type:Boolean,default:!1},isReversed:{type:Boolean,default:!1}},setup:e=>((0,a.$9)((e=>({"3190318b":e.duration}))),(e,t)=>((0,a.uX)(),(0,a.CE)("div",r,[(0,a.Lk)("div",{class:(0,a.C4)(["marquee",{"marquee--paused":e.isPaused}])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.repetitions,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:(0,a.C4)(["marquee-text",{"marquee-text--reversed":e.isReversed}])},[(0,a.RG)(e.$slots,"default")],2)))),128))],2)])))});n(9994);const o=(0,n(6262).A)(s,[["__scopeId","data-v-af75aaec"]])},9994:(e,t,n)=>{var a=n(4881);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(534).A)("1e69e506",a,!1,{})},534:(e,t,n)=>{"use strict";function a(e,t){for(var n=[],a={},r=0;r<t.length;r++){var s=t[r],o=s[0],i={id:e+":"+r,css:s[1],media:s[2],sourceMap:s[3]};a[o]?a[o].parts.push(i):n.push(a[o]={id:o,parts:[i]})}return n}n.d(t,{A:()=>v});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},o=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,u=0,c=!1,d=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,r){c=n,l=r||{};var o=a(e,t);return m(o),function(t){for(var n=[],r=0;r<o.length;r++){var i=o[r];(u=s[i.id]).refs--,n.push(u)}for(t?m(o=a(e,t)):o=[],r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete s[u.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],a=s[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(g(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(g(n.parts[r]));s[n.id]={id:n.id,refs:1,parts:o}}}}function h(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function g(e){var t,n,a=document.querySelector("style["+f+'~="'+e.id+'"]');if(a){if(c)return d;a.parentNode.removeChild(a)}if(p){var r=u++;a=i||(i=h()),t=b.bind(null,a,r,!1),n=b.bind(null,a,r,!0)}else a=h(),t=q.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var y,C=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function b(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=C(t,r);else{var s=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function q(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(a&&e.setAttribute("media",a),l.ssrId&&e.setAttribute(f,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);