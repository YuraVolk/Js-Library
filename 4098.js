(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[4098],{2899:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),i=n(3645),s=n.n(i)()(o());s.push([e.id,"\n.magnifier[data-v-660c92c4] {\n  position: relative;\n}\n.magnifier__image[data-v-660c92c4] {\n  width: 100%;\n  height: 100%;\n}\n.magnifier__glass[data-v-660c92c4] {\n  position: absolute;\n  top: -25px;\n  left: -25px;\n  width: 70px;\n  height: 70px;\n  border: 2px solid #222;\n  border-radius: 50%;\n  cursor: zoom-in;\n  background-repeat: no-repeat;\n}\n",""]),t.default=s},169:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),i=n(3645),s=n.n(i)()(o());s.push([e.id,"\n.magnifier-glass[data-v-d61057b2] {\n    position: absolute;\n    border-radius: 50%;\n    background-repeat: no-repeat;\n}\n",""]),t.default=s},9851:function(e,t,n){"use strict";n.r(t);var a=n(8081),o=n.n(a),i=n(3645),s=n.n(i)()(o());s.push([e.id,"\n.magnifier[data-v-5ddbea8b] {\n\tborder: 3px solid #333333;\n\twidth: 370px;\n\theight: 220px;\n}\n.magnifier-glass[data-v-5ddbea8b] {\n\ttop: -25px;\n\tleft: -25px;\n\twidth: 70px;\n\theight: 70px;\n\tborder: 2px solid #222;\n\tcursor: zoom-in;\n}\n",""]),t.default=s},3645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(s[l]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);a&&s[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},8081:function(e){"use strict";e.exports=function(e){return e[1]}},3744:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},8524:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var a=n(5166),o=n(9850);const i=Symbol(),s={class:"magnifier"};var r=(0,a.aZ)({__name:"Magnifier",props:{imageSource:{},zoomScale:{default:2}},setup(e,{expose:t}){const n=e,o=function(){const e=(0,a.qj)({});return(0,a.JJ)(i,e),e}(),r=(0,a.iH)(null),l=e=>{if(!r.value)return;e.preventDefault();const t=r.value.getBoundingClientRect();((e,t)=>{if(!r.value)return;const a=o["magnifier-glass"],i=a.element.offsetWidth/2,s=a.element.offsetHeight/2;e>r.value.offsetWidth?e=r.value.offsetWidth:e<0&&(e=0),t>r.value.offsetHeight?t=r.value.offsetHeight:t<0&&(t=0),a.styles={...a.styles,left:e-i+"px",top:t-s+"px",backgroundPosition:"-"+(e*n.zoomScale-i)+"px -"+(t*n.zoomScale-s)+"px"}})(e.pageX-t.left-window.scrollX,e.pageY-t.top-window.scrollY)};return(0,a.bv)((()=>{r.value&&(o["magnifier-glass"].styles={backgroundImage:`url("${n.imageSource}")`,backgroundSize:`${r.value.offsetWidth*n.zoomScale}px ${r.value.offsetHeight*n.zoomScale}px`})})),t({onMouseMove:l}),(e,t)=>((0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",{class:"magnifier__image",onMousemove:l,ref_key:"image",ref:r},[(0,a.WI)(e.$slots,"image")],544),(0,a.WI)(e.$slots,"glass")]))}}),l=(n(8090),n(3744)),u=(0,l.Z)(r,[["__scopeId","data-v-660c92c4"]]),c=(0,a.aZ)({__name:"MagnifierGlass",emits:["glassMove"],setup(e,{emit:t}){const n=t,s=(0,a.iH)(null);return function(e,t){const n=(0,a.iH)("magnifier-glass"),s=(0,a.f3)(i)??{};(0,a.bv)((()=>{(0,o.assertNonUndefined)(t.value),s[n.value]={element:t.value,styles:{}}})),(0,a.YP)((()=>s[n.value]?.styles),(()=>{t.value&&Object.assign(t.value.style,s[n.value].styles)}))}(0,s),(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"magnifier-glass",ref_key:"glass",ref:s,onPointermove:t[0]||(t[0]=e=>n("glassMove",e)),onMousemove:t[1]||(t[1]=e=>n("glassMove",e))},[(0,a.WI)(e.$slots,"default")],544))}});n(2430);var d=(0,l.Z)(c,[["__scopeId","data-v-d61057b2"]]),f=n.p+"img/slide0.png";const g=e=>((0,a.dD)("data-v-5ddbea8b"),e=e(),(0,a.Cn)(),e),m={class:"main"},p=g((()=>(0,a._)("h1",{class:"heading"},"Magnifier",-1))),h=g((()=>(0,a._)("p",null," The image magnifier component is a component that allows users to create an image magnifier effect on their web pages. The main configuration is supplied automatically if you're using the correct configuration settings. This component is customizable to the point you can control the magnifier glass programmatically without any issues and give any custom styles without any issues, with all styling being available through CSS. In order to understand how to customize the component, you need to define two templates for two slots: #image slot that contains an image or any content you'd like to zoom, and #glass slot that contains imported image magnifier glass component. Then, in order to ensure correct behavior you need to listen emitted event glass-move and make a call to image magnifier's component onMouseMove, you would need to persist the reference to magnifier through a Vue ref. After this is set up, you'd need to setup the props for the image magnifier component: ",-1))),v=g((()=>(0,a._)("ul",null,[(0,a._)("li",null,"zoomScale: A number that defines the scale of the magnified image. The default value is 2."),(0,a._)("li",null," imageSource: A string that defines the image URL for the magnifier, a required value for the setup to work correctly. You may give this a different value from original image, i.e. image increased in quality. ")],-1))),y=g((()=>(0,a._)("p",null,"Here is an example of correctly set up component:",-1))),b=["src"],_=g((()=>(0,a._)("p",null," After this default configuration, you're able to fully customize the magnifier glass mouse coordinates, shifts, and you are able to give any CSS styles to the components. You should use fallthrough attributes on the image magnifier and image magnifier glass components to achieve full styling control. ",-1))),w=g((()=>(0,a._)("p",null," Next, you may see a very similar implementation that is called Zooming Image, with a lot of aspects being shared with this implementation. However, there are important algorithmic differences between the two: this implementation is overall less robust and works better when magnifying glass does not appear when not hovered. The other implementation provides a fallback effect that shows an empty background when near to edge or moving from edge, while this implementation may not give such accurate results for edges. This implementation on the other hand is much better for non-rectangular glass shapes, and is overall a perfect implementation for statically visible non-rectangular glass. ",-1)));var x=(0,a.aZ)({__name:"App",setup(e){const t=(0,a.RC)((()=>n.e(582).then(n.bind(n,8619)))),o=(0,a.RC)((()=>Promise.all([n.e(7757),n.e(3447)]).then(n.bind(n,3147)))),i=(0,a.iH)(null);return(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,a.SU)(t)),(0,a.Wm)((0,a.SU)(o),{"active-link":"Magnifier"}),(0,a._)("main",m,[p,h,v,y,(0,a.Wm)(u,{class:"magnifier",ref_key:"magnifier",ref:i,"image-source":(0,a.SU)(f)},{image:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(f),alt:"Example Image"},null,8,b)])),glass:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"magnifier-glass",onGlassMove:n[0]||(n[0]=e=>i.value?.onMouseMove(e))})])),_:1},8,["image-source"]),_,w])],64))}});n(9822);var S=(0,l.Z)(x,[["__scopeId","data-v-5ddbea8b"]])},8090:function(e,t,n){var a=n(2899);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(5346).Z)("75122cf5",a,!1,{})},2430:function(e,t,n){var a=n(169);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(5346).Z)("ba9b70d6",a,!1,{})},9822:function(e,t,n){var a=n(9851);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(5346).Z)("66ba327a",a,!1,{})},5346:function(e,t,n){"use strict";function a(e,t){for(var n=[],a={},o=0;o<t.length;o++){var i=t[o],s=i[0],r={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};a[s]?a[s].parts.push(r):n.push(a[s]={id:s,parts:[r]})}return n}n.d(t,{Z:function(){return m}});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),r=null,l=0,u=!1,c=function(){},d=null,f="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,o){u=n,d=o||{};var s=a(e,t);return p(s),function(t){for(var n=[],o=0;o<s.length;o++){var r=s[o];(l=i[r.id]).refs--,n.push(l)}for(t?p(s=a(e,t)):s=[],o=0;o<n.length;o++){var l;if(0===(l=n[o]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete i[l.id]}}}}function p(e){for(var t=0;t<e.length;t++){var n=e[t],a=i[n.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](n.parts[o]);for(;o<n.parts.length;o++)a.parts.push(v(n.parts[o]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(v(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:s}}}}function h(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var t,n,a=document.querySelector("style["+f+'~="'+e.id+'"]');if(a){if(u)return c;a.parentNode.removeChild(a)}if(g){var o=l++;a=r||(r=h()),t=_.bind(null,a,o,!1),n=_.bind(null,a,o,!0)}else a=h(),t=w.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,n,a){var o=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function w(e,t){var n=t.css,a=t.media,o=t.sourceMap;if(a&&e.setAttribute("media",a),d.ssrId&&e.setAttribute(f,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);