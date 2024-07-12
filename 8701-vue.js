(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[8701],{1705:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(1601),i=n.n(a),r=n(6314),o=n.n(r)()(i());o.push([e.id,'\n.items-list[data-v-1416798e]>  .items-list-inner {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  transition: all 0.24s ease-in;\n  min-width: 100%;\n}\n.item[data-v-1416798e] {\n  width: 320px;\n  height: 240px;\n  margin: 0.8rem;\n  box-shadow: 0px 2px 6px #555555;\n  border-radius: 2px;\n  background-color: #222;\n  transition: all 0.35s ease-in-out;\n}\n.item-inner[data-v-1416798e] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  color: #e2e2e2;\n  transition: all 0.25s ease-out;\n}\n.item-enter-from[data-v-1416798e] {\n  position: absolute;\n}\n.item-enter-active[data-v-1416798e] {\n  position: absolute;\n  margin: 0;\n  opacity: 0;\n}\n.item-enter-to[data-v-1416798e] {\n  position: relative;\n  margin: 0.8rem;\n  opacity: 1;\n}\n.item-leave-active[data-v-1416798e] {\n  position: absolute;\n  margin: 0;\n  opacity: 0;\n}\n.buttons[data-v-1416798e] {\n  width: fit-content;\n  margin: 0 auto 24px;\n}\n.button[data-v-1416798e] {\n  appearance: button;\n  backface-visibility: hidden;\n  background-color: #405cf5;\n  border-radius: 6px;\n  border-width: 0;\n  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;\n  font-size: 100%;\n  height: 44px;\n  line-height: 1.15;\n  margin: 12px 0 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0 25px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transform: translateZ(0);\n  transition: all .2s, box-shadow .08s ease-in;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: 175px;\n  margin-right: 10px;\n}\n.button[data-v-1416798e]:focus {\n  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;\n}\n',""]);const s=o},6314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);a&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},1601:e=>{"use strict";e.exports=function(e){return e[1]}},6262:(e,t)=>{"use strict";t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},8701:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var a=n(1425),i=n(3048),r=Symbol();const o=(0,a.pM)({__name:"FilteringButton",props:{filter:{}},setup(e){var t=e,n=(0,a.lW)((0,a.WQ)(r)),i=()=>{n.value=t.filter};return(e,t)=>((0,a.uX)(),(0,a.CE)("button",{onClick:i},[(0,a.RG)(e.$slots,"default")]))}}),s=(0,a.pM)({__name:"FilteringWrapper",props:{activeFilter:{},items:{}},setup(e){var t=e,n=(0,a.lW)(t.items),i=(0,a.KR)(t.activeFilter),o=(0,a.EW)((()=>void 0===i.value?n.value:n.value.filter((e=>e.filter===i.value))));return(0,a.Gt)(r,i),(e,t)=>((0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.RG)(e.$slots,"filters"),(0,a.bF)(a.F,(0,a._B)((0,a.Ng)(e.$attrs)),{default:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"default",{activeFilter:i.value,filteredItems:o.value})])),_:3},16)],64))}});var l=e=>((0,a.Qi)("data-v-1416798e"),e=e(),(0,a.jt)(),e),u={class:"main"},c=l((()=>(0,a.Lk)("h1",{class:"heading"}," Filtering ",-1))),d=l((()=>(0,a.Lk)("p",null," Animated filtering component is a component that allows you to automatically obtain a list of filtered items for simpler cases, allows you to change the active filter through button or change items through the items prop for the more complicated cases. The key feature is that it also wraps a Transition Group with bound attributes, allowing you to customize the transition group, the item appearance and seamlessly create semantically correct lists due to multiple root slots. This allows you to easily create stunning animations with use of Transition Group and minimal effort. ",-1))),p={class:"items-list"},f={class:"buttons"},v=["textContent"];const h=(0,a.pM)({__name:"App",setup(e){var t=(0,a.$V)((()=>n.e(8924).then(n.bind(n,6543)))),r=(0,a.$V)((()=>Promise.all([n.e(1805),n.e(3711)]).then(n.bind(n,8949)))),l=["First Category","Second Category","Third Category","Fourth Category"],h=(0,i.shuffle)(Array.from({length:16},((e,t)=>({value:"Item ".concat(String(t+1)),filter:l[t%l.length]}))));return(e,n)=>((0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)((0,a.R1)(t)),(0,a.bF)((0,a.R1)(r),{"active-link":"Filtering"}),(0,a.Lk)("main",u,[c,d,(0,a.Lk)("div",p,[(0,a.bF)(s,{name:"item",tag:"ul",class:"items-list-inner",items:(0,a.R1)(h)},{filters:(0,a.k6)((()=>[(0,a.Lk)("div",f,[(0,a.bF)(o,{filter:void 0,class:"button"},{default:(0,a.k6)((()=>[(0,a.eW)(" All ")])),_:1}),((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(l,(e=>(0,a.bF)(o,{key:e,filter:e,class:"button"},{default:(0,a.k6)((()=>[(0,a.eW)((0,a.v_)(e),1)])),_:2},1032,["filter"]))),64))])])),default:(0,a.k6)((e=>{var t=e.activeFilter,n=e.filteredItems;return[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n,((e,n)=>((0,a.uX)(),(0,a.CE)("li",{key:e.value+String(n)+t,class:"item"},[(0,a.Lk)("div",{class:"item-inner",textContent:(0,a.v_)(e.value)},null,8,v)])))),128))]})),_:1},8,["items"])])])],64))}});n(2872);const m=(0,n(6262).A)(h,[["__scopeId","data-v-1416798e"]])},2872:(e,t,n)=>{var a=n(1705);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(534).A)("4af0da2a",a,!1,{})},534:(e,t,n)=>{"use strict";function a(e,t){for(var n=[],a={},i=0;i<t.length;i++){var r=t[i],o=r[0],s={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}n.d(t,{A:()=>v});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},o=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,u=!1,c=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,i){u=n,d=i||{};var o=a(e,t);return h(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i];(l=r[s.id]).refs--,n.push(l)}for(t?h(o=a(e,t)):o=[],i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete r[l.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],a=r[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(g(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var o=[];for(i=0;i<n.parts.length;i++)o.push(g(n.parts[i]));r[n.id]={id:n.id,refs:1,parts:o}}}}function m(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function g(e){var t,n,a=document.querySelector("style["+p+'~="'+e.id+'"]');if(a){if(u)return c;a.parentNode.removeChild(a)}if(f){var i=l++;a=s||(s=m()),t=x.bind(null,a,i,!1),n=x.bind(null,a,i,!0)}else a=m(),t=w.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,a){var i=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function w(e,t){var n=t.css,a=t.media,i=t.sourceMap;if(a&&e.setAttribute("media",a),d.ssrId&&e.setAttribute(p,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);