(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[7875],{6903:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(1601),l=a.n(n),r=a(6314),o=a.n(r)()(l());o.push([e.id,"\n.wrap[data-v-510bc96e] {\n\tposition: relative;\n\ttransition: 0.1s;\n}\n",""]);const s=o},7875:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(1425),l=a(6246);const r=(0,n.pM)({__name:"ParallaxComponent",props:{isHorizontal:{type:Boolean,default:!1},isHorizontalTranslation:{type:Boolean,default:!1},effect:{default:1.968},speed:{default:2.7},margin:{default:0}},setup(e){var t=(0,n.KR)(null),a=(0,n.Kh)({}),r=e,o=(0,n.KR)(),s=()=>{if(t.value){var e=(0,l.getFirstScrollableParent)(t.value,r.isHorizontal);o.value&&e.removeEventListener("scroll",o.value);var n=e=>e instanceof HTMLElement?r.isHorizontal?e.scrollLeft:e.scrollTop:r.isHorizontal?e.scrollX:e.scrollY,s=t.value.getBoundingClientRect()[r.isHorizontal?"left":"top"]+n(e),i=(e instanceof HTMLElement?r.isHorizontal?e.clientWidth:e.clientHeight:r.isHorizontal?e.innerWidth:e.innerHeight)/r.effect,c=()=>{if(t.value){var e=n((0,l.getFirstScrollableParent)(t.value,r.isHorizontal));if(e>s-2*i&&e<s+i){var o=(e-(s-i))/r.speed-r.margin;a.transform="translate".concat(r.isHorizontalTranslation?"X":"Y","(").concat(String(o),"px)")}}};o.value=c,e.addEventListener("scroll",c,{passive:!0}),c()}};return(0,n.sV)((()=>{s(),window.addEventListener("resize",s)})),(0,n.hi)((()=>{window.removeEventListener("resize",s)})),(e,l)=>((0,n.uX)(),(0,n.CE)("div",{ref_key:"wrap",ref:t,class:"wrap",style:(0,n.Tr)(a)},[(0,n.RG)(e.$slots,"default")],4))}});a(380);const o=(0,a(6262).A)(r,[["__scopeId","data-v-510bc96e"]])},380:(e,t,a)=>{var n=a(6903);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(534).A)("1601bb70",n,!1,{})}}]);