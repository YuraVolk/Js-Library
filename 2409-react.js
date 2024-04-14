"use strict";(self.webpackChunkjs_react_components_library=self.webpackChunkjs_react_components_library||[]).push([[2409],{2774:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var r=n(6540),a=n(5072),o=n.n(a),l=n(7825),i=n.n(l),c=n(7659),u=n.n(c),s=n(5056),m=n.n(s),d=n(540),p=n.n(d),h=n(1113),v=n.n(h),b=n(3046),g={};g.styleTagTransform=v(),g.setAttributes=m(),g.insert=u().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(b.A,g);const f=b.A&&b.A.locals?b.A.locals:void 0;var y=n(4349),k={};k.styleTagTransform=v(),k.setAttributes=m(),k.insert=u().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=p(),o()(y.A,k);const x=y.A&&y.A.locals?y.A.locals:void 0;var w=n(2086),S=n(6538),E=n(9985),A={};A.styleTagTransform=v(),A.setAttributes=m(),A.insert=u().bind(null,"head"),A.domAPI=i(),A.insertStyleElement=p(),o()(E.A,A);const C=E.A&&E.A.locals?E.A.locals:void 0;var z=["minimum","maximum","defaultValue","step","ticks","label","thumbSize","trackColor","thumbColor","hoverColor","activeColor","valueSize","hideValue","allSameLine","onUpdate"];function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=e=>{var t,n,a,o=e.minimum,l=void 0===o?0:o,i=e.maximum,c=void 0===i?100:i,u=e.defaultValue,s=void 0===u?0:u,m=e.step,d=void 0===m?1:m,p=e.ticks,h=void 0===p?[]:p,v=e.label,b=void 0===v?"":v,g=e.thumbSize,f=void 0===g?"15px":g,y=e.trackColor,k=void 0===y?"#ccc":y,x=e.thumbColor,w=void 0===x?"#f50":x,E=e.hoverColor,A=void 0===E?S.defaultHoverColor:E,F=e.activeColor,N=void 0===F?S.defaultActiveColor:F,Z=e.valueSize,_=void 0===Z?"25px":Z,H=e.hideValue,O=void 0!==H&&H,J=e.allSameLine,P=void 0!==J&&J,U=e.onUpdate,D=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,z),W=(0,r.useId)(),G=(n=(0,r.useState)(0),a=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(n,a)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),T=G[0],M=G[1],R=(0,r.useMemo)((()=>({"--thumbSize":f,"--trackColor":k,"--thumbColor":w,"--hoverColor":A,"--activeColor":N,"--valueSize":_})),[N,A,w,f,k,_]),I=(0,r.useMemo)((()=>{var e=T/c*100;return{background:"linear-gradient(to right, ".concat(w," ").concat(String(e),"%, ").concat(k," ").concat(String(e),"%)")}}),[c,w,k,T]),q=(0,r.useCallback)((e=>{var t=Number(e.target.value);M(t),null==U||U(t)}),[U]);return(0,r.useEffect)((()=>{M(s)}),[s]),r.createElement("div",{className:"".concat(C.wrap," ").concat(null!==(t=D.className)&&void 0!==t?t:""),style:R},r.createElement("div",{className:"".concat(C["range-slider"]," ").concat(P?C["range-slider--one-lined"]:"")},r.createElement("label",{className:C["range-slider__label"],htmlFor:W},b),r.createElement("input",{type:"range",min:l,max:c,value:T,id:W,step:d,className:C["range-slider__input"],style:I,onInput:q}),h.length>0&&r.createElement("ul",{className:C["range-slider-ticks"]},h.map((e=>{var t={"--value":String(e)+"%"};return r.createElement("li",{className:C["range-slider-ticks__tick"],style:t,key:e},e)})))),!O&&r.createElement("span",{className:C.value},T))},N=n(1956);function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=[0,100],H=e=>{var t,n,a=e.imageUrl,o=void 0===a?"":a,l=e.width,i=void 0===l?245:l,c=e.height,u=void 0===c?245:c,s=e.backgroundColor,m=void 0===s?[0,0,0,1]:s,d=e.rgba,p=void 0===d?[0,0,0,1]:d,h=(t=(0,r.useState)(p),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=h[0],b=h[1],g=(0,r.useRef)(null),f=(0,r.useCallback)((()=>{var e=1-v[3]/100,t=v[3]/100;return v.map(((n,r)=>3===r?1:Math.round(e*m[r]+t*n*100)))}),[m,v]),y=(0,r.useMemo)((()=>({"--width":"".concat(String(i),"px"),"--height":"".concat(String(u),"px")})),[u,i]),k=(0,r.useCallback)((()=>"#"+f().slice(0,-1).map((e=>Number(e).toString(16).padStart(2,"0"))).join("")),[f]),S=(0,r.useCallback)((()=>"rgb(".concat(f().slice(0,-1).join(", "),")")),[f]),E=(0,r.useCallback)((()=>"rgba(".concat(v.join(", "),")")),[v]),A=(0,r.useMemo)((()=>({backgroundColor:S()})),[S]),C=(0,r.useCallback)((e=>{var t=[...v.slice(0,-1),e];(0,w.verifyValidRGBAColor)(t)&&b(t)}),[v]),z=(0,r.useCallback)((e=>{(0,N.assertNonUndefined)(g.current);var t=g.current.getContext("2d",{willReadFrequently:!0});(0,N.assertNonUndefined)(t);var n=[...t.getImageData(e.nativeEvent.offsetX,e.nativeEvent.offsetY,1,1).data.slice(0,-1),v[3]];(0,w.verifyValidRGBAColor)(n)&&b(n)}),[v]);return(0,r.useEffect)((()=>{(0,N.assertNonUndefined)(g.current);var e=g.current.getContext("2d",{willReadFrequently:!0});(0,N.assertNonUndefined)(e);var t=new Image(i,u);t.src=o,t.onload=()=>{e.drawImage(t,0,0,t.width,t.height)}}),[u,i,o]),r.createElement("div",{className:x.wrap,style:y},r.createElement("div",{className:x["color-picker-wrap"]},r.createElement("div",{className:x["color-picker"]},r.createElement("canvas",{className:x["color-picker__canvas"],width:i,height:u,ref:g,onMouseDown:z}))),r.createElement("div",{className:x.info},r.createElement("div",{className:x["current-color-wrap"]},r.createElement("div",{className:x["current-color"],style:A})),r.createElement(F,{className:x["opacity-range"],maximum:1,step:.01,ticks:_,label:"Opacity:",defaultValue:1,onUpdate:C}),r.createElement("p",null,"Hex code: ",k()),r.createElement("p",null,"RGBA: ",E()),r.createElement("p",null,"RGB: ",S())))};const O=n.p+"img/picker.jpg",J=()=>r.createElement("main",{className:"main"},r.createElement("h1",{className:"heading"},"Color Picker"),r.createElement("p",null,"The custom color picker provides enhanced user experience as it can be manually configured to match the overall look of website, providing a seamless user experience through complete control of layout, styling and interaction. Custom color pickers allow you to easily integrate with your React components, without any compatibility issues, need to convert into different color formats, being the same across all browsers. Such color pickers may have better performance due to not being anyhow dependent on system UI. Here are the props for color picker component:"),r.createElement("ul",null,r.createElement("li",null,"imageUrl, required to load the image from which you can pick the color."),r.createElement("li",null,"width, defines the width of color picker, in pixels. Defaults to 245."),r.createElement("li",null,"height, defines the height of color picker, in pixels. Defaults to 245."),r.createElement("li",null,"backgroundColor, a comma-separated list of four values representing the RGBA background color. Defaults to black."),r.createElement("li",null,"rgba, a comma-separated list of four values representing the default RGBA color. Defaults to black.")),r.createElement("p",null,"The color picker uses range input component to listen for the opacity value changes, and as such allows for easy styling. Here's an example of the component:"),r.createElement("div",{className:f["color-picker"]},r.createElement(H,{imageUrl:O})))},4349:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1601),a=n.n(r),o=n(6314),l=n.n(o)()(a());l.push([e.id,".rvogBgej5KHgGbUWLhZj {\n\tmax-width: 670px;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tflex-wrap: wrap;\n\tgap: 0.3rem;\n}\n\n.WMDyHsR7uyU8kCeptkVy {\n\tmax-width: var(--width);\n\tmax-height: var(--height);\n\tborder: 3px solid #000000;\n\tbackground-color: #000000;\n}\n\n.hDXnD0WGwsFAEDk_pklR {\n\tmax-width: inherit;\n\tmax-height: inherit;\n}\n\n.K83TXp8eg5NF7niUjFpi {\n\tcursor: crosshair;\n}\n\n.GJedy3xNlHZgm4qH90jJ {\n\twidth: calc(var(--width) / 2);\n\theight: calc(var(--height) / 2);\n\tborder: 3px solid #000000;\n}\n\n.vLLk4_JnVURyzTeoFni2 {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.NlTJqAFOoXuzWRHZKz3l {\n\twidth: 235px;\n}\n\n.WMDyHsR7uyU8kCeptkVy p {\n\tmargin: 3px 0;\n}\n\n.LWxMH1xYAvukD5NWTtpG {\n\tdisplay: block;\n\tpadding: 2rem 0;\n}\n",""]),l.locals={wrap:"rvogBgej5KHgGbUWLhZj","color-picker-wrap":"WMDyHsR7uyU8kCeptkVy","color-picker":"hDXnD0WGwsFAEDk_pklR","color-picker__canvas":"K83TXp8eg5NF7niUjFpi","current-color-wrap":"GJedy3xNlHZgm4qH90jJ","current-color":"vLLk4_JnVURyzTeoFni2",info:"NlTJqAFOoXuzWRHZKz3l","opacity-range":"LWxMH1xYAvukD5NWTtpG"};const i=l},9985:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1601),a=n.n(r),o=n(6314),l=n.n(o)()(a());l.push([e.id,".mJ3k1k24ubZxEFpPFcuZ {\n\t-webkit-appearance: none;\n\tappearance: none;\n\twidth: 100%;\n\theight: 6px;\n\tbackground: var(--trackColor, #ccc);\n\tcursor: pointer;\n\toutline: none;\n\tborder-radius: var(--thumbSize, 15px);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\tappearance: none;\n\twidth: var(--thumbSize, 15px);\n\theight: var(--thumbSize, 15px);\n\tbackground-color: var(--thumbColor, #f50);\n\tborder-radius: 50%;\n\tborder: none;\n\ttransition: 0.35s ease-in-out;\n}\n\n.mJ3k1k24ubZxEFpPFcuZ::-moz-range-thumb {\n\twidth: var(--thumbSize, 15px);\n\theight: var(--thumbSize, 15px);\n\tbackground-color: var(--thumbColor, #f50);\n\tborder-radius: 50%;\n\tborder: none;\n\ttransition: 0.35s ease-in-out;\n}\n\n.mJ3k1k24ubZxEFpPFcuZ::-webkit-slider-thumb:hover {\n\tbox-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ::-moz-range-thumb:hover {\n\tbox-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ:active::-webkit-slider-thumb {\n\tbox-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ:active::-moz-range-thumb {\n\tbox-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ:focus::-webkit-slider-thumb {\n\tbox-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ:focus::-moz-range-thumb {\n\tbox-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor);\n}\n\n.iISPaOkykjWMZAnMGAKh {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\twidth: 100%;\n\tbox-sizing: border-box;\n}\n\n.oigbQndmS2rjH2Zb4A93 {\n\tfont-size: var(--valueSize, 25px);\n\twidth: calc(var(--valueSize, 25px) * 2);\n\ttext-align: center;\n}\n\n.oHr9cEX0FuK8jJxqGiJ0 {\n\tdisplay: block;\n\tfont-size: calc(var(--valueSize, 25px) / 2);\n}\n\n.HgQcOWfFSag8W5KM_yqG {\n\tflex-grow: 1;\n\theight: 100%;\n}\n\n.XtBLuamk8bNtyolHCv2V {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.yCOtxcH2j03TbPea9qFZ {\n\tposition: relative;\n\tmargin: 0;\n\tpadding: 0 10px;\n\tlist-style-type: none;\n}\n\n.CBtqjaDALx3lW9JYuDqa {\n\tposition: absolute;\n\ttop: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tleft: calc(var(--value) + var(--valueSize, 25px) / 4);\n\twidth: 1px;\n\theight: calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3));\n\tbackground: var(--trackColor, #ccc);\n\tline-height: calc((var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) * 4);\n}\n",""]),l.locals={"range-slider__input":"mJ3k1k24ubZxEFpPFcuZ",wrap:"iISPaOkykjWMZAnMGAKh",value:"oigbQndmS2rjH2Zb4A93","range-slider__label":"oHr9cEX0FuK8jJxqGiJ0","range-slider":"HgQcOWfFSag8W5KM_yqG","range-slider--one-lined":"XtBLuamk8bNtyolHCv2V","range-slider-ticks":"yCOtxcH2j03TbPea9qFZ","range-slider-ticks__tick":"CBtqjaDALx3lW9JYuDqa"};const i=l},3046:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1601),a=n.n(r),o=n(6314),l=n.n(o)()(a());l.push([e.id,".V09i_Bh_r9FjQPhgwNNc {\n\tposition: relative;\n\tz-index: 2;\n\tmax-width: 670px;\n}\n",""]),l.locals={"color-picker":"V09i_Bh_r9FjQPhgwNNc"};const i=l}}]);