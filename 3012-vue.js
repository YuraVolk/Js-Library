"use strict";(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[3012],{3012:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});var n=t(1425),l=t(6246),a=t(405);function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const i=(0,n.pM)({__name:"ScrollingAd",props:{rootMargin:{default:0},checkInterval:{default:0}},setup(e){var r,t,i,u,c,s=e,v=(0,n.Kh)({}),f=(0,n.KR)(null),p=(0,n.KR)();return r=()=>{if(f.value){var e=(0,l.getFirstScrollableParent)(f.value,!1),r=e instanceof HTMLElement?e.scrollTop:e.scrollY;v.top="".concat(String(r+f.value.offsetHeight+s.rootMargin),"px")}},t=s.checkInterval,i=(0,n.KR)(),u=()=>{window.clearInterval(i.value),i.value=void 0},c=()=>{i.value=window.setInterval(r,t)},(0,n.sV)((()=>{c()})),(0,n.hi)((()=>{u()})),(0,n.sV)((()=>{if(f.value){var e=new IntersectionObserver((e=>{var r,t,n=(r=e,t=1,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,l,a,o,i=[],u=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;u=!1}else for(;!(u=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);u=!0);}catch(e){c=!0,l=e}finally{try{if(!u&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw l}}return i}}(r,t)||function(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];if(f.value){var a=(0,l.getFirstScrollableParent)(f.value,!1);if(n.intersectionRatio<1){var i=a instanceof HTMLElement?a.scrollTop:a.scrollY;v.top="".concat(String(i+f.value.offsetHeight+s.rootMargin),"px")}}}),{rootMargin:"".concat(String(s.rootMargin),"px"),threshold:(0,a.generateThreshold)()});e.observe(f.value),p.value=e}})),(0,n.hi)((()=>{var e;null===(e=p.value)||void 0===e||e.disconnect()})),(e,r)=>((0,n.uX)(),(0,n.CE)("div",{ref_key:"wrap",ref:f,style:(0,n.Tr)(v)},[(0,n.RG)(e.$slots,"default")],4))}})}}]);