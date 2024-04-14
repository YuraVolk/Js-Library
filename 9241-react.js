"use strict";(self.webpackChunkjs_react_components_library=self.webpackChunkjs_react_components_library||[]).push([[9241],{9241:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(6540),l=r(1956);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){var n,l,o,a;n=e,l=t,o=r[t],(l="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(l))?a:a+"")in n?Object.defineProperty(n,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[l]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,i=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,l=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=(0,n.createContext)({state:{},updateState:function(){throw new Error("Function not implemented.")}}),u=(0,n.forwardRef)(((e,t)=>{var r=i((0,n.useState)({}),2),l=r[0],o=r[1],a=(0,n.useRef)(!1),s=(0,n.useMemo)((()=>({state:l,updateState:o})),[l]);return(0,n.useEffect)((()=>{var t;a.current||Object.keys(l).length!==n.Children.toArray(e.innerChildren).length||(a.current=!0,null===(t=e.onAllElementsLoaded)||void 0===t||t.call(e))}),[l]),(0,n.useImperativeHandle)(t,(()=>({getState:()=>l,updateState(e){o(e)},wasSetupPerformed:()=>a.current}))),n.createElement(c.Provider,{value:s},e.children)})),d=r(1903),m=r(5072),p=r.n(m),f=r(7825),h=r.n(f),g=r(7659),b=r.n(g),v=r(5056),y=r.n(v),E=r(540),w=r.n(E),O=r(1113),S=r.n(O),j=r(3820),A={};A.styleTagTransform=S(),A.setAttributes=y(),A.insert=b().bind(null,"head"),A.domAPI=h(),A.insertStyleElement=w(),p()(j.A,A);const N=j.A&&j.A.locals?j.A.locals:void 0;var x=r(732),_=["isHorizontal","noScrollbar","increment","duration"];var C=e=>{var t=e.isHorizontal,r=void 0!==t&&t,l=e.noScrollbar,o=void 0===l||l,a=e.increment,i=void 0===a?6:a,s=e.duration,c=void 0===s?500:s,m=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,_),p=(0,n.useRef)(null),f=(0,n.useRef)(null),h=(0,n.useRef)({timer:void 0}),g=(0,n.useRef)(0),b=(0,n.useRef)(!1),v=(0,n.useCallback)((e=>{if(f.current){b.current=!0;var t=r?"scrollLeft":"scrollTop",n=f.current[t],l=e-n,o=0,a=()=>{if(f.current){o+=i;var r=(0,d.easeInOutQuad)(o,n,l,c);f.current[t]=r>i?r-i/2:r,o<c?h.current.timer=window.setTimeout(a,i):o>=c&&(f.current[t]=e,b.current=!1)}};a()}}),[c,i,r]),y=(0,n.useCallback)((e=>{var t,n,l,o=null===(t=Object.values(null!==(n=null===(l=p.current)||void 0===l?void 0:l.getState())&&void 0!==n?n:{})[g.current])||void 0===t||null===(t=t.element)||void 0===t?void 0:t.current;!b.current&&o&&(g.current+=e,v(o[r?"offsetWidth":"offsetHeight"]*g.current))}),[r,v]),E=(0,n.useCallback)((e=>{var t,n=null===(t=p.current)||void 0===t?void 0:t.getState();if(n){var l=Object.keys(n).length,o=Object.values(n)[0].element.current;if(o)if(e.deltaY>0)if(g.current>=l-1){if(b.current)return;g.current=0,v(0)}else y(x.CarouselDirection.FORWARDS);else if(0===g.current){if(b.current||!f.current)return;g.current=l-1,v((r?f.current.scrollWidth:f.current.scrollHeight)-(r?o.offsetWidth:o.offsetHeight))}else y(x.CarouselDirection.BACKWARDS)}}),[r,y,v]);return(0,n.useEffect)((()=>{var e=h.current;return()=>{window.clearTimeout(e.timer)}}),[]),n.createElement(u,{ref:p,innerChildren:m.children},n.createElement("article",{className:m.className},n.createElement("div",{ref:f,onWheel:E,className:"".concat(N.wrap," ").concat(r?N["wrap--horizontal"]:""," ").concat(o?N["wrap--no-scrollbar"]:"")},m.children)))},k=r(8758),T={};T.styleTagTransform=S(),T.setAttributes=y(),T.insert=b().bind(null,"head"),T.domAPI=h(),T.insertStyleElement=w(),p()(k.A,T);const P=k.A&&k.A.locals?k.A.locals:void 0;var R=e=>{var t,r=(0,n.useRef)(null),o=function(e,t){var r=i((0,n.useState)(e()),1)[0],o=(0,n.useContext)(c);return(0,n.useEffect)((()=>{(0,l.assertNonUndefined)(t.current),o.updateState((e=>a(a({},e),{},{[r]:{element:t,styles:{}}})))}),[]),void 0===o.state[r]?{}:o.state[r].styles}(l.uid,r);return n.createElement("div",{ref:r,className:"".concat(N["one-page-scroll-item"]," ").concat(null!==(t=e.className)&&void 0!==t?t:""),style:o},e.children)};const D=()=>n.createElement("main",{className:"main"},n.createElement("h1",{className:"heading"},"One Page Scroll"),n.createElement("p",null,"The one page scroll component provides a smooth scrolling experience for a single-page application. It allows users to navigate through different sections of the page by scrolling vertically or horizontally. Its additional plus is that you do not need to depend on custom animations, specific CSS styles. The internal formulas automatically adapt to most common scenarios."),n.createElement("ul",null,n.createElement("li",null,"isHorizontal: A boolean property that determines whether the scrolling should be horizontal (true) or vertical (false). By default, it is set to false."),n.createElement("li",null,"duration: A number property that specifies the duration of the smooth scrolling animation in milliseconds. The default value is 500."),n.createElement("li",null,"increment: A number property that determines the increment value for each step of the smooth scrolling animation. The default value is 6."),n.createElement("li",null,"noScrollbar: A boolean property that controls whether the scrollbars should be hidden (true) or visible (false). Enabled by default.")),n.createElement(C,{className:P["one-page-scroll"]},n.createElement(R,{className:P["one-page-scroll-slide"]},n.createElement("p",{className:P["one-page-scroll-slide__heading"]},"First slide. Scroll down...")),n.createElement(R,{className:P["one-page-scroll-slide"]},n.createElement("p",{className:P["one-page-scroll-slide__heading"]},"Second slide")),n.createElement(R,{className:P["one-page-scroll-slide"]},n.createElement("p",{className:P["one-page-scroll-slide__heading"]},"Third slide.")),n.createElement(R,{className:P["one-page-scroll-slide"]},n.createElement("p",{className:P["one-page-scroll-slide__heading"]},"Fourth slide."))),n.createElement("p",null,"Here is an example of horizontal one-page scroll:"),n.createElement(C,{className:P["one-page-scroll"],isHorizontal:!0},n.createElement(R,{className:P["one-page-scroll-slide"]},n.createElement("p",{className:P["one-page-scroll-slide__heading"]},"First slide. Scroll down...")),n.createElement(R,{className:P["one-page-scroll-slide"]},n.createElement("p",{className:P["one-page-scroll-slide__heading"]},"Second slide")),n.createElement(R,{className:P["one-page-scroll-slide"]},n.createElement("p",{className:P["one-page-scroll-slide__heading"]},"Third slide.")),n.createElement(R,{className:P["one-page-scroll-slide"]},n.createElement("p",{className:P["one-page-scroll-slide__heading"]},"Fourth slide."))),n.createElement("p",null,"In order to get some default styling, it is highly recommended you use the local provided one page scroll item component along with the one page scroll component in order to get the one page scroll work right away with minimum configuration."))},3820:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(1601),l=r.n(n),o=r(6314),a=r.n(o)()(l());a.push([e.id,".L3STuGhl8XM2gZo7K6H7 {\n\twidth: 100%;\n\theight: 100%;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n}\n\n.CD6g9QGkLBBnU0yxlwf2 {\n\tdisplay: flex;\n\toverflow-x: scroll;\n\toverflow-y: hidden;\n}\n\n.Dp7E3BGFjyVQkFgCClWz {\n\toverflow: hidden;\n}\n\n.l6obVy0KKRSKk34vnAZd {\n\tflex: 1 0 0;\n\tbox-sizing: border-box;\n}\n",""]),a.locals={wrap:"L3STuGhl8XM2gZo7K6H7","wrap--horizontal":"CD6g9QGkLBBnU0yxlwf2","wrap--no-scrollbar":"Dp7E3BGFjyVQkFgCClWz","one-page-scroll-item":"l6obVy0KKRSKk34vnAZd"};const i=a},8758:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(1601),l=r.n(n),o=r(6314),a=r.n(o)()(l());a.push([e.id,".soE4uaQGTEInRCy0X7er {\n\tdisplay: block;\n\twidth: 500px;\n\theight: 500px;\n\tborder: 3px solid #333;\n}\n\n.MLTCDeAMYRrkioc0Ui7j {\n\tmin-width: 500px;\n\theight: 500px;\n\tbox-sizing: border-box;\n\tborder: 3px solid #2390bb;\n\tbackground-color: #62626253;\n\tflex: 1 0 0;\n}\n\n.NrDP1Y4n6aN0MWQObrW_ {\n\tmargin: 0;\n\tfont-size: 32px;\n\tline-height: 54px;\n}\n",""]),a.locals={"one-page-scroll":"soE4uaQGTEInRCy0X7er","one-page-scroll-slide":"MLTCDeAMYRrkioc0Ui7j","one-page-scroll-slide__heading":"NrDP1Y4n6aN0MWQObrW_"};const i=a}}]);