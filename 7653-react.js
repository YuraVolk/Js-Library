"use strict";(self.webpackChunkjs_react_components_library=self.webpackChunkjs_react_components_library||[]).push([[7653],{7653:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var r=n(6540),a=n(5072),i=n.n(a),o=n(7825),l=n.n(o),s=n(7659),c=n.n(s),u=n(5056),m=n.n(u),b=n(540),d=n.n(b),p=n(1113),f=n.n(p),h=n(4090),y={};y.styleTagTransform=f(),y.setAttributes=m(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=d(),i()(h.A,y);const v=h.A&&h.A.locals?h.A.locals:void 0;var g=(0,r.createContext)({currentTab:0}),w=e=>r.createElement(g.Provider,{value:{currentTab:e.currentTab}},r.createElement("div",{className:e.className},e.headerChildren,e.tabsChildren)),j=n(6488);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){var r,a,i,o;r=e,a=t,i=n[t],(a="symbol"==typeof(o=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a))?o:o+"")in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=e=>{var t=(0,r.useRef)(null),n=(0,r.useContext)(g);return r.createElement(j.A,{unmountOnExit:!0,nodeRef:t,timeout:e.animationDuration,in:e.tabId===n.currentTab,classNames:E({},e.classes)},r.createElement("div",{ref:t,className:e.className},e.children))};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){var r,a,i,o;r=e,a=t,i=n[t],(a="symbol"==typeof(o=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a))?o:o+"")in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const q=()=>{var e,t,n=(e=(0,r.useState)(0),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],i=n[1];return r.createElement("main",{className:"main"},r.createElement("h1",{className:"heading"},"Tabs"),r.createElement("p",null,'The tabs component is a quite popular component that allows to view multiple panes of content out of which only one is visible initially. This component encapsulates away the animation logic, automatically applying the click listeners and animation classes in order to allow for creating more complex tabs animations, like the one demonstrated here. This component accepts two slotted children: a slot with name "headers", for tab headers parent, and a slot with name "tabs", for the tabs parent. Additionally this component may accept the following props:'),r.createElement("ul",null,r.createElement("li",null,"currentTab, a number that specifies the default visible tab index, defaults to 0. Use this prop to change the visible tab."),r.createElement("li",null,"headerChildren and tabChildren, to specify headers and tabs children.")),r.createElement("p",null,"Tab component props are:"),r.createElement("ul",null,r.createElement("li",null,"animationDuration, a number to set the animation length in milliseconds."),r.createElement("li",null,"tabId, a number to set the tab index."),r.createElement("li",null,"classes, which is in fact an object that is passed to the React Transition Group as classes.")),r.createElement("p",null,"Here you can see an example of default component settings with external CSS styling:"),r.createElement(w,{className:v["tabs-wrap"],currentTab:a,headerChildren:r.createElement("div",{className:v["tabs-headers"]},Array.from({length:3},((e,t)=>r.createElement("div",{className:"".concat(v["tab-header"]," ").concat(a===t?v.active:""),onClick:()=>{i(t)}},"Tab ",t+1)))),tabsChildren:r.createElement("div",{className:v.tabs},r.createElement(T,{className:v.tab,animationDuration:300,tabId:0,classes:x({},v)},r.createElement("div",{className:v.tab},r.createElement("h3",{className:v.h3},"Tab 1"),r.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat, officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur."))),r.createElement(T,{className:v.tab,animationDuration:300,tabId:1,classes:x({},v)},r.createElement("div",{className:v.tab},r.createElement("h3",{className:v.h3},"Tab 2"),r.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat, officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur."))),r.createElement(T,{className:v.tab,animationDuration:300,tabId:2,classes:x({},v)},r.createElement("div",{className:v.tab},r.createElement("h3",{className:v.h3},"Tab 3"),r.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat, officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur."))))}))}},4090:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(1601),a=n.n(r),i=n(6314),o=n.n(i)()(a());o.push([e.id,".LqZd4CUM6s9mAGXXSHJX {\n\tdisplay: block;\n\twidth: 320px;\n}\n\n.WKU6oj597P_cU8ntOP4r {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\twidth: inherit;\n\tborder-radius: 4px;\n\tborder: 1px solid #333;\n}\n\n.r9uUQ3Tp_zjL8ABzAdIy {\n\tposition: relative;\n\twidth: inherit;\n\tborder: 2px solid #222;\n\tbox-sizing: border-box;\n}\n\n.cIWVUPT6y3ImoOqbIlgQ {\n\tposition: relative;\n\twidth: 100%;\n\theight: 320px;\n\tbox-sizing: border-box;\n\tpadding: 20px;\n\ttransition: all 0.3s ease-in-out;\n\tbackground-color: #222;\n\toverflow: hidden;\n\tclip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);\n}\n\n.WTKFLBwTeQvdunrZGbxQ {\n\tflex: 1 1 0;\n\ttext-align: center;\n\tcursor: pointer;\n}\n\n.WTKFLBwTeQvdunrZGbxQ:nth-child(even) {\n\tbackground-color: #e2e2e2;\n\tcolor: #222;\n}\n\n.WTKFLBwTeQvdunrZGbxQ:nth-child(odd) {\n\tcolor: #e2e2e2;\n\tbackground-color: #333;\n}\n\n.WTKFLBwTeQvdunrZGbxQ.MTQvjIu7LtXH4Dh_5jlR {\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n}\n\n.nq4ZAc9Ne0ej0Pom4JPw {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 0;\n\tpadding: 0;\n\tz-index: 999;\n}\n\n.nHKHO94IQoRKgDxjAtKS {\n\tmargin: 0;\n}\n",""]),o.locals={"tabs-wrap":"LqZd4CUM6s9mAGXXSHJX","tabs-headers":"WKU6oj597P_cU8ntOP4r",tabs:"r9uUQ3Tp_zjL8ABzAdIy",tab:"cIWVUPT6y3ImoOqbIlgQ","tab-header":"WTKFLBwTeQvdunrZGbxQ",active:"MTQvjIu7LtXH4Dh_5jlR",exitActive:"nq4ZAc9Ne0ej0Pom4JPw",h3:"nHKHO94IQoRKgDxjAtKS"};const l=o}}]);