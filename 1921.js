(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[1921],{7630:function(e,t,n){"use strict";n.r(t);var o=n(8081),a=n.n(o),s=n(3645),i=n.n(s)()(a());i.push([e.id,"\n.wrap[data-v-75a8dd88] {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n.comparison-slider[data-v-75a8dd88] {\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    width: 40px;\n    height: 40px;\n    background-color: #333;\n    border-radius: 50%;\n    cursor: ew-resize;\n}\n",""]),t.default=i},7045:function(e,t,n){"use strict";n.r(t);var o=n(8081),a=n.n(o),s=n(3645),i=n.n(s)()(a());i.push([e.id,"\n.image-comparator-item[data-v-642b8563] {\n  position: absolute;\n  width: auto;\n  height: auto;\n  overflow: hidden;\n}\n",""]),t.default=i},621:function(e,t,n){"use strict";n.r(t);var o=n(8081),a=n.n(o),s=n(3645),i=n.n(s)()(a());i.push([e.id,"\n.comparator[data-v-1e41f424] {\n  display: block;\n  width: 350px;\n  height: 200px;\n  border: 4px solid #333;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.comparator-element__image[data-v-1e41f424] {\n  display: block;\n  width: 350px;\n  height: 200px;\n  box-sizing: border-box;\n}\n",""]),t.default=i},3645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},8081:function(e){"use strict";e.exports=function(e){return e[1]}},3744:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},2773:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var o=n(5166),a=n(9850);const s=Symbol(),i={class:"wrap"},r=["onMousedown","onPointerdown"];var l=(0,o.aZ)({__name:"ImageComparator",setup(e){const t=function(){const e=(0,o.qj)({});return(0,o.JJ)(s,e),e}(),n=(0,o.qj)({}),a=(0,o.Fl)((()=>Object.keys(t).find((e=>n[e].isClicked)))),l=(e,o)=>{const a=t[e],s=n[e];a.styles={width:o+"px"},s.style.left=o+"px"},c=(e,t)=>{e.preventDefault(),n[t].isClicked=!0},d=e=>{if(!a.value)return;const{element:o,styles:s}=t[a.value];s.left="0";let i=e.pageX-o.getBoundingClientRect().left-window.scrollX;i<0&&(i=0),i>n[a.value].offsetWidth&&(i=n[a.value].offsetWidth),l(a.value,i)},u=()=>{for(const e of Object.keys(n))n[e].isClicked=!1};return(0,o.bv)((()=>{Object.entries(t).forEach((([e,{element:{offsetWidth:t}}],o,a)=>{n[e]={isClicked:!1,offsetWidth:t,style:{}},l(e,t-t/a.length*o)})),window.addEventListener("mouseup",u,{passive:!0}),window.addEventListener("pointerup",u,{passive:!0}),window.addEventListener("mousemove",d,{passive:!0}),window.addEventListener("pointermove",d,{passive:!0})})),(0,o.SK)((()=>{window.removeEventListener("mouseup",u),window.removeEventListener("pointerup",u),window.removeEventListener("mousemove",d),window.removeEventListener("pointermove",d)})),(e,a)=>((0,o.wg)(),(0,o.iD)("ul",i,[(0,o.WI)(e.$slots,"default"),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Object.keys((0,o.SU)(t)).slice(1),(e=>((0,o.wg)(),(0,o.iD)("div",{class:"comparison-slider",key:e,style:(0,o.j5)(n[e].style),onMousedown:t=>c(t,e),onPointerdown:t=>c(t,e)},null,44,r)))),128))]))}}),c=(n(7532),n(3744)),d=(0,c.Z)(l,[["__scopeId","data-v-75a8dd88"]]),u=(0,o.aZ)({__name:"ImageComparatorItem",setup(e){const t=(0,o.iH)(null);return function(e,t){const n=(0,o.iH)(e()),i=(0,o.f3)(s)??{};(0,o.bv)((()=>{(0,a.assertNonUndefined)(t.value),i[n.value]={element:t.value,styles:{}}})),(0,o.YP)((()=>i[n.value]?.styles),(()=>{t.value&&Object.assign(t.value.style,i[n.value].styles)}))}(a.uid,t),(e,n)=>((0,o.wg)(),(0,o.iD)("li",{class:"image-comparator-item",ref_key:"item",ref:t},[(0,o.WI)(e.$slots,"default")],512))}});n(4668);var p=(0,c.Z)(u,[["__scopeId","data-v-642b8563"]]),m=n.p+"img/slide0.png",f=n.p+"img/slide1.png",h=n.p+"img/slide2.png",v=n.p+"img/slide3.png";const g=e=>((0,o.dD)("data-v-1e41f424"),e=e(),(0,o.Cn)(),e),y={class:"main"},w=g((()=>(0,o._)("h1",{class:"heading"},"Image Comparator",-1))),_=g((()=>(0,o._)("p",null," The purpose of the image comparator component is to create a visual comparison between two images. The current implementation supports comparing an arbitrary amount of images as demonstrated in the widget below. The base requirement to compare images is to make images absolute positioned and occupy auto width and height. The component allows users to slide a comparison slider horizontally to reveal different portions of the two images. The component is built using. It includes CSS styles for positioning and styling the comparison slider. The component dynamically adjusts the width of the images and the position of the slider based on user interaction. It also handles mouse and pointer events for smooth sliding functionality. The component only gives basic styling, such as a relative wrapper element and required interactions. Other than that, you can achieve full customization only through experimenting with CSS properties. ",-1))),b=["src"],x=["src"],C=["src"],k=["src"],I=g((()=>(0,o._)("p",null," This component requires you use special carousel item components as children to automatically provide and inject all the element data. In order to get default styling and configuration out of the box, it is suggested you use the specific to this component ImageComparatorItem that comes in with pre-bundled styles to work correctly. ",-1)));var S=(0,o.aZ)({__name:"App",setup(e){const t=(0,o.RC)((()=>n.e(582).then(n.bind(n,8619)))),a=(0,o.RC)((()=>Promise.all([n.e(7757),n.e(3447)]).then(n.bind(n,3147))));return(e,n)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)((0,o.SU)(t)),(0,o.Wm)((0,o.SU)(a),{"active-link":"Image Comparator"}),(0,o._)("main",y,[w,_,(0,o.Wm)(d,{class:"comparator"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o._)("img",{src:(0,o.SU)(m),alt:"Example Image",class:"comparator-element__image"},null,8,b)])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o._)("img",{src:(0,o.SU)(f),alt:"Example Image",class:"comparator-element__image"},null,8,x)])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o._)("img",{src:(0,o.SU)(h),alt:"Example Image",class:"comparator-element__image"},null,8,C)])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o._)("img",{src:(0,o.SU)(v),alt:"Example Image",class:"comparator-element__image"},null,8,k)])),_:1})])),_:1}),I])],64))}});n(3658);var E=(0,c.Z)(S,[["__scopeId","data-v-1e41f424"]])},7532:function(e,t,n){var o=n(7630);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,n(5346).Z)("6ef389ad",o,!1,{})},4668:function(e,t,n){var o=n(7045);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,n(5346).Z)("d85809c0",o,!1,{})},3658:function(e,t,n){var o=n(621);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,n(5346).Z)("3a122a5c",o,!1,{})},5346:function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},a=0;a<t.length;a++){var s=t[a],i=s[0],r={id:e+":"+a,css:s[1],media:s[2],sourceMap:s[3]};o[i]?o[i].parts.push(r):n.push(o[i]={id:i,parts:[r]})}return n}n.d(t,{Z:function(){return f}});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},i=a&&(document.head||document.getElementsByTagName("head")[0]),r=null,l=0,c=!1,d=function(){},u=null,p="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,a){c=n,u=a||{};var i=o(e,t);return h(i),function(t){for(var n=[],a=0;a<i.length;a++){var r=i[a];(l=s[r.id]).refs--,n.push(l)}for(t?h(i=o(e,t)):i=[],a=0;a<n.length;a++){var l;if(0===(l=n[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete s[l.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=s[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(g(n.parts[a]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(g(n.parts[a]));s[n.id]={id:n.id,refs:1,parts:i}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function g(e){var t,n,o=document.querySelector("style["+p+'~="'+e.id+'"]');if(o){if(c)return d;o.parentNode.removeChild(o)}if(m){var a=l++;o=r||(r=v()),t=_.bind(null,o,a,!1),n=_.bind(null,o,a,!0)}else o=v(),t=b.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var y,w=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,n,o){var a=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,a);else{var s=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function b(e,t){var n=t.css,o=t.media,a=t.sourceMap;if(o&&e.setAttribute("media",o),u.ssrId&&e.setAttribute(p,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);