(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[3216],{1923:function(e,t,n){"use strict";n.r(t);var a=n(8081),s=n.n(a),l=n(3645),r=n.n(l)()(s());r.push([e.id,"\n.carousel[data-v-cfd6b58e] {\n    position: relative;\n    overflow: hidden;\n    padding: 0;\n    list-style-type: none;\n}\n.carousel-controls[data-v-cfd6b58e] {\n    z-index: 999;\n    top: 80%;\n}\n",""]),t.default=r},8310:function(e,t,n){"use strict";n.r(t);var a=n(8081),s=n.n(a),l=n(3645),r=n.n(l)()(s());r.push([e.id,"\n.carousel[data-v-e0c99120] {\n  width: 100%;\n  height: 60vh;\n}\n.carousel-item[data-v-e0c99120] {\n  width: 18vw;\n}\nimg[data-v-e0c99120] {\n    width: 100%;\n    height: 100%;\n}\n",""]),t.default=r},1945:function(e,t,n){"use strict";n.r(t);var a=n(8081),s=n.n(a),l=n(3645),r=n.n(l)()(s());r.push([e.id,".carousel-controls[data-v-cfd6b58e] {\n    position: relative;\n    z-index: 1;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    justify-content: center;\n}\n.carousel-controls__next-button[data-v-cfd6b58e] {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 7.5px 0 7.5px 13px;\n    border-color: transparent transparent transparent #fff;\n    background: none;\n    cursor: pointer;\n}\n.carousel-controls__previous-button[data-v-cfd6b58e] {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 7.5px 13px 7.5px 0;\n    border-color: transparent #fff transparent transparent;\n    background: none;\n    cursor: pointer;\n}\n.carousel-controls__perspective-button[data-v-cfd6b58e] {\n    border: none;\n    background-color: #000;\n    padding: 0.5rem;\n    color: #fff;\n    text-transform: uppercase;\n    cursor: pointer;\n}\n",""]),t.default=r},3645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,s,l){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);a&&r[c[0]]||(void 0!==l&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=l),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),t.push(c))}},t}},8081:function(e){"use strict";e.exports=function(e){return e[1]}},3744:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},8494:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var a=n(5166),s=n(3105),l=n(9850);const r=Symbol();var o=n(8956),i=(0,a.aZ)({__name:"MenuCarousel",props:{xPos:{},yPos:{default:112},xRadius:{},yRadius:{default:128},farScale:{default:.9},speed:{default:.11}},setup(e){const t=e,n=(0,a.iH)(Math.PI/2),i=(0,a.iH)(Math.PI/2),u=(0,a.iH)(),c=(0,a.iH)(t.xRadius),d=(0,a.iH)(t.yRadius),f=(0,a.iH)(t.xPos),p=(0,a.iH)(t.yPos),m=(0,a.iH)(null),v=function(){const e=(0,a.qj)({});return(0,a.JJ)(r,e),e}(),h=(0,a.qj)([]);class g extends s.MenuCarouselInternalItem{constructor(e){super(e.element),this.elementData=e}initStyles(){return this.elementData.styles={position:"absolute"},this}setMovingStyle(e,t,n){this.elementData.styles={...this.elementData.styles,width:this.width+"px",left:e+"px",top:t+"px",zIndex:String(100*n|0)}}}const _=(e,n)=>{const a=h[e],s=Math.sin(n),r=t.farScale+(1-t.farScale)*(s+1)*.5;(0,l.assertNonUndefinedDevOnly)(f.value),(0,l.assertNonUndefinedDevOnly)(c.value),a.moveTo(f.value+r*(Math.cos(n)*c.value-a.fullWidth/2),p.value+r*s*d.value+p.value/2.3,r)},b=()=>{u.value=window.setTimeout((()=>{(()=>{const e=i.value-n.value;Math.abs(e)<=0?(n.value=i.value,window.clearTimeout(u.value),u.value=void 0):(n.value+=e*t.speed,b()),w()})()}),32)},y=e=>{i.value+=2*Math.PI/h.length*e,void 0===u.value&&b()},w=()=>{const e=h.length,t=2*Math.PI/e;let a=n.value;for(let n=0;n<e;n++)_(n,a),a+=t},x=()=>{if(m.value){f.value??=.5*m.value.offsetWidth,p.value=.1*m.value.offsetHeight,c.value??=m.value.offsetWidth/2.3,d.value=m.value.offsetHeight/6,h.splice(0,h.length);for(const e of Object.values(v))e.element.removeAttribute("style"),h.push(new g(e).initStyles());w()}},S=()=>{c.value=void 0,f.value=void 0,x()},C=()=>{y(o.CarouselDirection.BACKWARDS)},I=()=>{y(o.CarouselDirection.FORWARDS)};return(0,a.bv)((()=>{x(),window.addEventListener("resize",S)})),(0,a.SK)((()=>{window.removeEventListener("resize",S),window.clearTimeout(u.value)})),(e,t)=>((0,a.wg)(),(0,a.iD)("ul",{ref_key:"carousel",ref:m},[(0,a.WI)(e.$slots,"default"),(0,a._)("li",{class:"carousel-controls"},[(0,a._)("button",{class:"carousel-controls__previous-button",onClick:C}),(0,a._)("button",{class:"carousel-controls__next-button",onClick:I})])],512))}}),u=(n(3154),n(599),n(3744)),c=(0,u.Z)(i,[["__scopeId","data-v-cfd6b58e"]]),d=(0,a.aZ)({__name:"CarouselItem",setup(e){const t=(0,a.iH)(null);return function(e,t){const n=(0,a.iH)(e()),s=(0,a.f3)(r)??{};(0,a.bv)((()=>{(0,l.assertNonUndefined)(t.value),s[n.value]={element:t.value,styles:{}}})),(0,a.YP)((()=>s[n.value]?.styles),(()=>{t.value&&Object.assign(t.value.style,s[n.value].styles)}))}(l.uid,t),(e,n)=>((0,a.wg)(),(0,a.iD)("li",{class:"carousel-item",ref_key:"item",ref:t},[(0,a.WI)(e.$slots,"default")],512))}}),f=n.p+"img/slide0.png",p=n.p+"img/slide1.png",m=n.p+"img/slide2.png",v=n.p+"img/slide3.png",h=n.p+"img/slide4.png",g=n.p+"img/slide5.png";const _=e=>((0,a.dD)("data-v-e0c99120"),e=e(),(0,a.Cn)(),e),b={class:"main"},y=_((()=>(0,a._)("h1",{class:"heading"},"Menu Carousel",-1))),w=_((()=>(0,a._)("p",null," The menu carousel component represents a 3D carousel in which items are rotated around a circular area that can be defined and whose X/Y dimensions can be changed by user. The carousel accepts a variety of configuration options: ",-1))),x=_((()=>(0,a._)("ul",null,[(0,a._)("li",null,"xPos, automatically re-calculated on resize by default."),(0,a._)("li",null,"yPos, defines Y size of carousel."),(0,a._)("li",null,"xRadius, defines inner circle X radius."),(0,a._)("li",null,"yRadius, defines inner circle Y radius."),(0,a._)("li",null,"farScale, defines the scale between elements, allowing farther elements to appear smaller."),(0,a._)("li",null,"speed, defines the animation speed.")],-1))),S=_((()=>(0,a._)("p",null," The carousel accepts special carousel item components to keep track of all the elements, and automatically detect width and height. Here's an example of the carousel with all default settings except far scale being set to 0.8: ",-1))),C=["src"],I=["src"],U=["src"],W=["src"],M=["src"],E=["src"],D=["src"],k=["src"],H=["src"],R=["src"],P=["src"],T=["src"];var j=(0,a.aZ)({__name:"App",setup(e){const t=(0,a.RC)((()=>n.e(582).then(n.bind(n,8619)))),s=(0,a.RC)((()=>Promise.all([n.e(7757),n.e(3447)]).then(n.bind(n,3147))));return(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,a.SU)(t)),(0,a.Wm)((0,a.SU)(s),{"active-link":"Menu Carousel"}),(0,a._)("main",b,[y,w,x,S,(0,a.Wm)(c,{class:"carousel","far-scale":.8},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(f),alt:"Example Image"},null,8,C)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(p),alt:"Example Image"},null,8,I)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(m),alt:"Example Image"},null,8,U)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(v),alt:"Example Image"},null,8,W)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(h),alt:"Example Image"},null,8,M)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(g),alt:"Example Image"},null,8,E)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(f),alt:"Example Image"},null,8,D)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(p),alt:"Example Image"},null,8,k)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(m),alt:"Example Image"},null,8,H)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(v),alt:"Example Image"},null,8,R)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(h),alt:"Example Image"},null,8,P)])),_:1}),(0,a.Wm)(d,{class:"carousel-item"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,a.SU)(g),alt:"Example Image"},null,8,T)])),_:1})])),_:1})])],64))}});n(5042);var N=(0,u.Z)(j,[["__scopeId","data-v-e0c99120"]])},599:function(e,t,n){var a=n(1923);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(5346).Z)("b93a2f58",a,!1,{})},5042:function(e,t,n){var a=n(8310);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(5346).Z)("76aa136e",a,!1,{})},3154:function(e,t,n){var a=n(1945);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(5346).Z)("4b34be94",a,!1,{})},5346:function(e,t,n){"use strict";function a(e,t){for(var n=[],a={},s=0;s<t.length;s++){var l=t[s],r=l[0],o={id:e+":"+s,css:l[1],media:l[2],sourceMap:l[3]};a[r]?a[r].parts.push(o):n.push(a[r]={id:r,parts:[o]})}return n}n.d(t,{Z:function(){return m}});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},r=s&&(document.head||document.getElementsByTagName("head")[0]),o=null,i=0,u=!1,c=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,s){u=n,d=s||{};var r=a(e,t);return v(r),function(t){for(var n=[],s=0;s<r.length;s++){var o=r[s];(i=l[o.id]).refs--,n.push(i)}for(t?v(r=a(e,t)):r=[],s=0;s<n.length;s++){var i;if(0===(i=n[s]).refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete l[i.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],a=l[n.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](n.parts[s]);for(;s<n.parts.length;s++)a.parts.push(g(n.parts[s]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var r=[];for(s=0;s<n.parts.length;s++)r.push(g(n.parts[s]));l[n.id]={id:n.id,refs:1,parts:r}}}}function h(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function g(e){var t,n,a=document.querySelector("style["+f+'~="'+e.id+'"]');if(a){if(u)return c;a.parentNode.removeChild(a)}if(p){var s=i++;a=o||(o=h()),t=y.bind(null,a,s,!1),n=y.bind(null,a,s,!0)}else a=h(),t=w.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var _,b=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function y(e,t,n,a){var s=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(t,s);else{var l=document.createTextNode(s),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(l,r[t]):e.appendChild(l)}}function w(e,t){var n=t.css,a=t.media,s=t.sourceMap;if(a&&e.setAttribute("media",a),d.ssrId&&e.setAttribute(f,t.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);