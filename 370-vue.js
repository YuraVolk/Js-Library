(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[370],{260:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var r=n(1601),a=n.n(r),o=n(6314),u=n.n(o)()(a());u.push([t.id,"\n.countdown[data-v-56e80541] {\n    display: block;\n}\n",""]);const i=u},370:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var r=n(1425),a=n(9320);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u={class:"countdown"};const i=(0,r.pM)({__name:"CountdownComponent",props:{date:{default:()=>new Date("May 6, 2085 11:00:00")},units:{default:()=>(0,a.reduceTimeUnits)(a.defaultTimeUnits)}},setup(t){var e,n,a,i,l=t,s=(0,r.KR)(""),c=t=>{var e,n="",r=l.date.getTime()-(new Date).getTime(),a=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,u=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw u}}}}(t);try{for(a.s();!(e=a.n()).done;){var u=e.value,i=u.timeFactor,c=u.name,d=Math.floor(r/i);n+=d<=0?"":"".concat(String(d)," ").concat("1"===String(d).slice(-1)?c:c+"s"," "),r%=i}}catch(t){a.e(t)}finally{a.f()}s.value=n?n.trim():"0 seconds"};return e=()=>{c(l.units)},1e3,n=(0,r.KR)(),a=()=>{window.clearInterval(n.value),n.value=void 0},i=()=>{n.value=window.setInterval(e,1e3)},(0,r.sV)((()=>{i()})),(0,r.hi)((()=>{a()})),(0,r.sV)((()=>{c(l.units)})),(t,e)=>((0,r.uX)(),(0,r.CE)("span",u,(0,r.v_)(s.value),1))}});n(8263);const l=(0,n(6262).A)(i,[["__scopeId","data-v-56e80541"]])},8263:(t,e,n)=>{var r=n(260);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals),(0,n(534).A)("81dbd3ea",r,!1,{})}}]);