(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[2237],{4104:function(e,t,n){"use strict";n.r(t);var l=n(8081),a=n.n(l),i=n(3645),r=n.n(i)()(a());r.push([e.id,"\n.wrap[data-v-7b27be11] {\n\tposition: relative;\n\ttransition: 0.1s;\n}\n",""]),t.default=r},2237:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var l=n(5166),a=n(967),i=(0,l.aZ)({__name:"Parallax",props:{isHorizontal:{type:Boolean,default:!1},isHorizontalTranslation:{type:Boolean,default:!1},effect:{default:1.968},speed:{default:2.7},margin:{default:0}},setup(e){const t=(0,l.iH)(null),n=(0,l.qj)({}),i=e,r=(0,l.iH)(),o=()=>{if(!t.value)return;const e=(0,a.getFirstScrollableParent)(t.value,i.isHorizontal);r.value&&e.removeEventListener("scroll",r.value);const l=e=>e instanceof HTMLElement?i.isHorizontal?e.scrollLeft:e.scrollTop:i.isHorizontal?e.scrollX:e.scrollY,o=t.value.getBoundingClientRect()[i.isHorizontal?"left":"top"]+l(e),s=(e instanceof HTMLElement?i.isHorizontal?e.clientWidth:e.clientHeight:i.isHorizontal?e.innerWidth:e.innerHeight)/i.effect,u=()=>{if(!t.value)return;const e=l((0,a.getFirstScrollableParent)(t.value,i.isHorizontal));if(e>o-2*s&&e<o+s){const t=(e-(o-s))/i.speed-i.margin;n.transform=`translate${i.isHorizontalTranslation?"X":"Y"}(${t}px)`}};r.value=u,e.addEventListener("scroll",u,{passive:!0}),u()};return(0,l.bv)((()=>{o(),window.addEventListener("resize",o)})),(0,l.SK)((()=>{window.removeEventListener("resize",o)})),(e,a)=>((0,l.wg)(),(0,l.iD)("div",{class:"wrap",ref_key:"wrap",ref:t,style:(0,l.j5)(n)},[(0,l.WI)(e.$slots,"default")],4))}});n(3452);var r=(0,n(3744).Z)(i,[["__scopeId","data-v-7b27be11"]])},3452:function(e,t,n){var l=n(4104);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),(0,n(5346).Z)("77129920",l,!1,{})}}]);