"use strict";(self.webpackChunkjs_react_components_library=self.webpackChunkjs_react_components_library||[]).push([[8037],{8037:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var r=n(6540),o=n(5072),a=n.n(o),i=n(7825),l=n.n(i),c=n(7659),u=n.n(c),s=n(5056),f=n.n(s),m=n(540),d=n.n(m),y=n(1113),h=n.n(y),p=n(3945),b={};b.styleTagTransform=h(),b.setAttributes=f(),b.insert=u().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=d(),a()(p.A,b);const v=p.A&&p.A.locals?p.A.locals:void 0;var w=n(9320),g=["units","date"];function S(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=e=>{var t,n,o,a,i,l,c,u=e.units,s=void 0===u?(0,w.reduceTimeUnits)(w.defaultTimeUnits):u,f=e.date,m=void 0===f?new Date("May 6, 2085 11:00:00"):f,d=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,g),y=(l=(0,r.useState)(""),c=2,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(l,c)||S(l,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=y[0],p=y[1],b=(0,r.useCallback)((e=>{var t,n="",r=m.getTime()-(new Date).getTime(),o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=S(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}(e);try{for(o.s();!(t=o.n()).done;){var a=t.value,i=a.timeFactor,l=a.name,c=Math.floor(r/i);n+=c<=0?"":"".concat(String(c)," ").concat("1"===String(c).slice(-1)?l:l+"s"," "),r%=i}}catch(e){o.e(e)}finally{o.f()}p(n?n.trim():"0 seconds")}),[m]);return n=()=>{b(s)},1e3,o=(0,r.useRef)(),a=(0,r.useCallback)((()=>{window.clearInterval(o.current),o.current=void 0}),[]),i=(0,r.useCallback)((()=>{o.current=window.setInterval(n,1e3)}),[n,1e3]),(0,r.useEffect)((()=>(i(),()=>{a()})),[i]),(0,r.useEffect)((()=>{b(s)}),[b,s]),r.createElement("span",{className:null!==(t=d.className)&&void 0!==t?t:""},h)};const C=()=>r.createElement("main",{className:"main"},r.createElement("h1",{className:"heading"},"Countdown"),r.createElement("p",null,"The countdown component is a common component and has many applications. Many countdowns have fixed formats, however this countdown component can be easily extended to give a custom format with minimum configuration required. If you want to use standard word-based text rendering, all you have to do is to specify the date prop to be a real date string in the countdown-component element. The countdown can be easily customized through external CSS, thus making it very easy to configure. Here is a working example of the component:"),r.createElement(j,{className:v.countdown}),r.createElement("p",null,"This React version of the countdown component is configured to accept TimeUnit interface array, thus allowing you to easily customize the output format and the total output settings."))},3945:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(1601),o=n.n(r),a=n(6314),i=n.n(a)()(o());i.push([e.id,".lfuBcGPVIU39yDPtCoCB {\n\tdisplay: block;\n\tmargin: 0 auto;\n\tfont-size: 38px;\n\tcolor: #e2e2e2;\n\ttext-align: left;\n}\n",""]),i.locals={countdown:"lfuBcGPVIU39yDPtCoCB"};const l=i}}]);