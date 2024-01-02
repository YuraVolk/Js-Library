(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[3447],{385:function(n,e,a){"use strict";a.r(e);var t=a(8081),i=a.n(t),l=a(3645),r=a.n(l)()(i());r.push([n.id,'\n.navigation[data-v-72fa53ae] {\n    position: relative;\n    z-index: 2;\n    width: 230px;\n    height: calc(100vh - 50px);\n    background: rgba(0, 0, 0, 0.25);\n}\n@media (max-width: 800px) {\n.navigation[data-v-72fa53ae] {\n        width: 100%;\n        height: 25vh;\n}\n}\n.wrap[data-v-72fa53ae] {\n    mask-image: linear-gradient(to top,\n            transparent 0%,\n            rgb(0, 0, 0) 10%,\n            rgb(0, 0, 0) 100%,\n            transparent 100%);\n    -webkit-mask-image: linear-gradient(to top,\n            transparent 0%,\n            rgb(0, 0, 0) 10%,\n            rgb(0, 0, 0) 100%,\n            transparent 100%);\n    overflow-y: scroll;\n    height: 100%;\n    scrollbar-width: none;\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n    font-family: Helvetica, Segoe UI, Arial, system-ui;\n}\n@media (max-width: 800px) {\n.wrap[data-v-72fa53ae] {\n        flex-direction: row;\n}\n}\n*[data-v-72fa53ae] {\n    transition: all 0.1s ease-in;\n}\n*[data-v-72fa53ae]:hover {\n    color: #57c9e5;\n}\ndetails:not([open]) svg[data-v-72fa53ae] {\n    transform: rotate(-90deg);\n}\n.wrap[data-v-72fa53ae]::-webkit-scrollbar {\n    display: none;\n}\n.list[data-v-72fa53ae] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    margin: 0;\n    padding: 2rem 0 1.5rem 2rem;\n    list-style-type: none;\n}\n.list-item[data-v-72fa53ae] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    cursor: pointer;\n}\n.list__heading[data-v-72fa53ae] {\n    display: flex;\n    font-size: 16px;\n    color: rgb(236, 237, 238);\n    gap: 0.5rem;\n    align-items: center;\n    text-transform: uppercase;\n}\n.list-sublist[data-v-72fa53ae] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n.list-sublist__item[data-v-72fa53ae] {\n    margin-left: 2.25rem;\n}\n.list-sublist__item-link[data-v-72fa53ae] {\n    position: relative;\n    color: rgba(236, 237, 238);\n    text-decoration: none;\n    font-size: 16px;\n    opacity: 0.6;\n}\n.list-sublist__item--active[data-v-72fa53ae] {\n    width: 100%;\n    margin-left: 0;\n    padding-left: 2.25rem;\n    border-left: rgb(255, 112, 127) 2px solid;\n    padding: 0.25rem 0.25rem 0.25rem 0.5rem;\n    background-color: #ff2a5130;\n}\n.list-sublist__item--active .list-sublist__item-link[data-v-72fa53ae]::before {\n    content: none;\n}\n.list-sublist__item-link[data-v-72fa53ae]::before {\n    position: absolute;\n    left: -1.25rem;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 4px;\n    height: 4px;\n    background-color: #eee;\n    opacity: 0.75;\n    border-radius: 50%;\n    content: "";\n}\n.list-sublist__item-link[data-v-72fa53ae]:hover {\n    opacity: 0.75;\n}\n',""]),e.default=r},3147:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return k}});var t=a(5166),i=a(7757),l=JSON.parse('{"components":[{"name":"Accordion","link":"../accordion"},{"name":"Autocomplete Input","link":"../autocomplete-list"},{"name":"Backface Carousel","link":"../backface-carousel"},{"name":"Ciphering Text","link":"../ciphering-text"},{"name":"Color Picker","link":"../color-picker"},{"name":"Countdown","link":"../countdown"},{"name":"Custom Select","link":"../custom-select"},{"name":"Custom Video","link":"../custom-video"},{"name":"Floating Panel","link":"../floating-panel"},{"name":"Gallery Carousel","link":"../gallery-carousel"},{"name":"Image Comparator","link":"../image-comparator"},{"name":"Magnifier","link":"../magnifier"},{"name":"Menu Carousel","link":"../menu-carousel"},{"name":"One Page Scroll","link":"../one-page-scroll"},{"name":"Parallax","link":"../parallax"},{"name":"Perspective Carousel","link":"../perspective-carousel"},{"name":"Popup","link":"../popup"},{"name":"Range Input","link":"../range-input"},{"name":"Rebuilding Text","link":"../rebuilding-text"},{"name":"Scrolling Ad","link":"../scrolling-ad"},{"name":"Sticky Header","link":"../sticky-header"},{"name":"Table Filtering","link":"../table-filtering"},{"name":"Tabs","link":"../tabs"},{"name":"Toast","link":"../toast"},{"name":"Typing Text","link":"../typing-text"},{"name":"Zooming Image","link":"../zooming-image"}]}');const r={class:"navigation"},o={class:"wrap"},s={class:"list"},m={class:"list-item",open:""},c={class:"list__heading"},d=(n=>((0,t.dD)("data-v-72fa53ae"),n=n(),(0,t.Cn)(),n))((()=>(0,t._)("svg",{ariaHidden:"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em"},[(0,t._)("path",{d:"M15.5 19l-7-7 7-7",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})],-1))),p={class:"list-sublist-wrap"},u={class:"list-sublist"},g=["href","textContent"];var f=(0,t.aZ)({__name:"SidebarComponent",props:{activeLink:{}},setup(n){const e=(0,i.isLocalhostEnvironment)(),a=l;return(n,i)=>((0,t.wg)(),(0,t.iD)("aside",r,[(0,t._)("nav",o,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Object.entries((0,t.SU)(a)),(a=>((0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("details",m,[(0,t._)("summary",c,[(0,t._)("span",null,(0,t.zw)(a[0]),1),d]),(0,t._)("div",p,[(0,t._)("ul",u,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a[1],(a=>((0,t.wg)(),(0,t.iD)("li",{class:(0,t.C_)("list-sublist__item "+(a.name===n.$props.activeLink?"list-sublist__item--active":""))},[(0,t._)("a",{class:"list-sublist__item-link",href:(0,t.SU)(e)?a.link.replace(/\.\.\//g,"./"):a.link,textContent:(0,t.zw)(a.name)},null,8,g)],2)))),256))])])])])))),256))])]))}});a(618);var k=(0,a(3744).Z)(f,[["__scopeId","data-v-72fa53ae"]])},618:function(n,e,a){var t=a(385);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals),(0,a(5346).Z)("a68cb20e",t,!1,{})}}]);