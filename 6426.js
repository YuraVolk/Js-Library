(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[6426],{6254:function(e,n,t){"use strict";t.d(n,{OX:function(){return i},UM:function(){return o}});var a=t(5166),l=t(9850);const r=Symbol();function o(e,n){const t=(0,a.iH)(e()),o=(0,a.f3)(r)??{};(0,a.bv)((()=>{(0,l.assertNonUndefined)(n.value),o[t.value]={element:n.value,styles:{}}})),(0,a.YP)((()=>o[t.value]?.styles),(()=>{n.value&&Object.assign(n.value.style,o[t.value].styles)}))}function i(){const e=(0,a.qj)({});return(0,a.JJ)(r,e),e}},3047:function(e,n,t){"use strict";t.r(n);var a=t(8081),l=t.n(a),r=t(3645),o=t.n(r)()(l());o.push([e.id,"\n.wrap[data-v-d6d124ae] {\n    position: relative;\n}\n.gallery[data-v-d6d124ae] {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n}\n.gallery-list[data-v-d6d124ae] {\n    position: relative;\n    display: flex;\n    width: inherit;\n    height: inherit;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 0;\n    white-space: nowrap;\n    line-height: 1;\n    z-index: 10;\n}\n.gallery-item[data-v-d6d124ae] {\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n}\n.gallery-toggles[data-v-d6d124ae] {\n    position: relative;\n    z-index: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style-type: none;\n    padding: 0;\n    gap: 0.3rem;\n}\n.gallery-toggle[data-v-d6d124ae] {\n    width: 10px;\n    height: 10px;\n    cursor: pointer;\n    border: 1px solid #e2e2e2;\n    border-radius: 50%;\n}\n.gallery-toggle--active[data-v-d6d124ae] {\n    background-color: #2390bb;\n}\n.gallery-controls[data-v-d6d124ae] {\n    position: absolute;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    left: -10%;\n    right: -10%;\n    top: 0;\n    bottom: 0;\n}\n.gallery-controls__next-button[data-v-d6d124ae] {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 7.5px 0 7.5px 13px;\n    border-color: transparent transparent transparent #fff;\n    background: none;\n    cursor: pointer;\n}\n.gallery-controls__previous-button[data-v-d6d124ae] {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 7.5px 13px 7.5px 0;\n    border-color: transparent #fff transparent transparent;\n    background: none;\n    cursor: pointer;\n}\n",""]),n.default=o},6426:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var a=t(5166),l=t(6254);const r={class:"wrap"},o={class:"gallery"},i={key:0,class:"gallery-controls"},s={key:1,class:"gallery-toggles"},u=["onClick"];var d=(0,a.aZ)({__name:"GalleryCarousel",props:{smoothDiametralTransition:{type:Boolean,default:!0},current:{default:1},frameGap:{default:20},animationDuration:{default:500},showArrows:{type:Boolean,default:!0},showToggles:{type:Boolean,default:!0}},setup(e){const n=e,t=(0,a.Rr)(),d=()=>{const e=t.default(),n=e[e.length-1];return(0,a.Wm)(n.type,n.props,n.children)},c=()=>{const e=t.default()[0];return(0,a.Wm)(e.type,e.props,e.children)},v=(0,a.iH)(n.current),p=(0,l.OX)(),g=(0,a.iH)(!1),f=(0,a.iH)(),y=(0,a.Fl)((()=>Object.keys(p).length)),h=(0,a.iH)(-100*v.value),w=(0,a.Fl)((()=>({left:`${h.value}%`}))),b=e=>0===e||e>y.value-2?0===e?y.value-2:1:e,m=e=>{if(y.value<=1)return;n.smoothDiametralTransition||(e=b(e));const t=-100*e;g.value||h.value===t||(v.value=e,((e,t)=>{g.value=!0;const a=new Date;f.value=window.setInterval((()=>{let l=((new Date).getTime()-a.getTime())/n.animationDuration;if(l>1&&(l=1),h.value=e+Math.abs(t-e)*l**2*(e>t?-1:1),1===l){window.clearInterval(f.value),g.value=!1;const e=b(v.value);v.value=e,h.value=-100*e}}),n.frameGap)})(h.value,t))};return(0,a.SK)((()=>{window.clearInterval(f.value)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",o,[(0,a._)("ul",{class:"gallery-list",style:(0,a.j5)(w.value)},[(0,a.Wm)(d),(0,a.WI)(e.$slots,"default"),(0,a.Wm)(c)],4)]),n.showArrows?((0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("button",{class:"gallery-controls__previous-button",onClick:t[0]||(t[0]=()=>{m(v.value-1)})}),(0,a._)("button",{class:"gallery-controls__next-button",onClick:t[1]||(t[1]=()=>{m(v.value+1)})})])):(0,a.kq)("v-if",!0),n.showToggles&&y.value>1?((0,a.wg)(),(0,a.iD)("ul",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.value-2,(e=>((0,a.wg)(),(0,a.iD)("li",{class:(0,a.C_)(["gallery-toggle",{"gallery-toggle--active":v.value-1==e-1}]),onClick:()=>{m(e)}},null,10,u)))),256))])):(0,a.kq)("v-if",!0)]))}});t(367);var c=(0,t(3744).Z)(d,[["__scopeId","data-v-d6d124ae"]])},367:function(e,n,t){var a=t(3047);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,t(5346).Z)("4b951432",a,!1,{})}}]);