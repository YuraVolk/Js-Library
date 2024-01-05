(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[8619,582],{9561:function(n,e,t){"use strict";t.r(e);var r=t(8081),a=t.n(r),i=t(3645),o=t.n(i)()(a());o.push([n.id,'\nbody {\n    margin: 0;\n    padding: 0;\n}\n#app {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  background: linear-gradient(161deg, rgb(6, 5, 5) 14%, rgb(23, 15, 41) 79%);\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  font-family: Helvetica, Segoe UI, Arial, sans-serif;\n}\n.header {\n    position: relative;\n    z-index: 2;\n    min-width: 95vw;\n    min-height: 50px;\n    flex: 1 1 0;\n    background-color: rgba(0, 0, 0, 0.25);\n}\n.navigation {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 50px;\n    box-sizing: border-box;\n    color: #fff;\n    font-family: Helvetica, Segoe UI, Arial, sans-serif;\n    padding: 2rem 1rem 1rem;\n}\n.navigation__name {\n    font-size: 24px;\n    text-transform: uppercase;\n}\n.navigation-links {\n    display: flex;\n    gap: 0.8rem;\n}\n.navigation-link {\n    font-size: 16px;\n    color: #fff;\n    text-decoration: none;\n    transition: color 0.1s ease-in;\n}\n.navigation-link:hover {\n    color: #57c9e5;\n}\n.main {\n  position: relative;\n  max-width: calc(100% - 230px - 6rem);\n  height: calc(100vh - 50px - 6rem);\n  margin: 1rem;\n  padding: 2rem;\n  flex-grow: 1;\n  color: #cacaca;\n  border-radius: 10px;\n  overflow-y: auto;\n}\n.main::before {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  mix-blend-mode: hard-light;\n  background: rgba(22, 22, 22, 0.525);\n  content: "";\n  opacity: 0.5;\n  pointer-events: none;\n}\n.heading {\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: .8888889em;\n  line-height: 1.1111111;\n  letter-spacing: -.025em;\n}\n*::-webkit-scrollbar {\n  width: 8px;\n  border-radius: 10px;\n  background-color: #222;\n}\n*::-webkit-scrollbar-thumb {\n  background-color: rgb(164, 123, 203);\n  border-radius: 10px;\n}\n@media (max-width: 700px) {\n.navigation {\n        height: auto;\n        justify-content: flex-start;\n        flex-direction: column;\n}\n.main {\n        overflow-y: hidden;\n        height: auto;\n        max-width: 100%;\n}\n}\n',""]),e.default=o},3645:function(n){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},8081:function(n){"use strict";n.exports=function(n){return n[1]}},8619:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var r=t(5166);const a={class:"header"},i={class:"navigation"},o=(0,r._)("span",{class:"navigation__name"},"JS Components Library",-1),s={class:"navigation-links"},c=(0,r._)("a",{href:"#",class:"navigation-link"},"Components",-1),l=(0,r._)("a",{href:"#",class:"navigation-link"},"About",-1),d=["href"],u=["href"],f=(0,r._)("a",{class:"navigation-icon",href:"#"},[(0,r._)("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},[(0,r._)("path",{clipRule:"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z",fill:"currentColor",fillRule:"evenodd"})])],-1);var p=(0,r.aZ)({__name:"HeaderComponent",setup(n){const e=window.location.href.replace(/\/vue\//g,"/lit/"),t=window.location.href.replace(/\/vue\//g,"/react/");return(n,p)=>((0,r.wg)(),(0,r.iD)("header",a,[(0,r._)("nav",i,[o,(0,r._)("ul",s,[c,l,(0,r._)("a",{href:(0,r.SU)(e),class:"navigation-link"},"Lit Version",8,d),(0,r._)("a",{href:(0,r.SU)(t),class:"navigation-link"},"React Version",8,u)]),f])]))}});t(7433);var h=p},7433:function(n,e,t){var r=t(9561);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals),(0,t(5346).Z)("4ecca035",r,!1,{})},5346:function(n,e,t){"use strict";function r(n,e){for(var t=[],r={},a=0;a<e.length;a++){var i=e[a],o=i[0],s={id:n+":"+a,css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(s):t.push(r[o]={id:o,parts:[s]})}return t}t.d(e,{Z:function(){return h}});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,d=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(n,e,t,a){l=t,u=a||{};var o=r(n,e);return g(o),function(e){for(var t=[],a=0;a<o.length;a++){var s=o[a];(c=i[s.id]).refs--,t.push(c)}for(e?g(o=r(n,e)):o=[],a=0;a<t.length;a++){var c;if(0===(c=t[a]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}}function g(n){for(var e=0;e<n.length;e++){var t=n[e],r=i[t.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](t.parts[a]);for(;a<t.parts.length;a++)r.parts.push(m(t.parts[a]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{var o=[];for(a=0;a<t.parts.length;a++)o.push(m(t.parts[a]));i[t.id]={id:t.id,refs:1,parts:o}}}}function v(){var n=document.createElement("style");return n.type="text/css",o.appendChild(n),n}function m(n){var e,t,r=document.querySelector("style["+f+'~="'+n.id+'"]');if(r){if(l)return d;r.parentNode.removeChild(r)}if(p){var a=c++;r=s||(s=v()),e=y.bind(null,r,a,!1),t=y.bind(null,r,a,!0)}else r=v(),e=w.bind(null,r),t=function(){r.parentNode.removeChild(r)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else t()}}var b,x=(b=[],function(n,e){return b[n]=e,b.filter(Boolean).join("\n")});function y(n,e,t,r){var a=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(e,a);else{var i=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function w(n,e){var t=e.css,r=e.media,a=e.sourceMap;if(r&&n.setAttribute("media",r),u.ssrId&&n.setAttribute(f,e.id),a&&(t+="\n/*# sourceURL="+a.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}}]);