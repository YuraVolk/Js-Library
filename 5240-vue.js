"use strict";(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[5240],{5240:(e,a,o)=>{o.r(a),o.d(a,{default:()=>s});var t=o(1425);const s=(0,t.pM)({__name:"ToastComponent",props:{transitionName:{},isOpen:{type:Boolean},autoCloseDelay:{}},setup(e){var a=e,o=(0,t.KR)(),s=(0,t.KR)(a.isOpen),u=()=>{s.value=!1,window.clearTimeout(o.value),o.value=void 0};return(0,t.wB)((()=>a.isOpen),((e,t)=>{s.value=t,a.autoCloseDelay&&t&&(o.value=window.setTimeout((()=>{u()}),a.autoCloseDelay))})),(0,t.sV)((()=>{s.value&&(o.value=window.setTimeout((()=>{u()}),a.autoCloseDelay))})),(0,t.hi)((()=>{window.clearTimeout(o.value)})),(e,a)=>((0,t.uX)(),(0,t.Wv)(t.Im,{to:"body"},[(0,t.bF)(t.eB,{name:e.transitionName},{default:(0,t.k6)((()=>[e.isOpen?(0,t.RG)(e.$slots,"default",{key:0}):(0,t.Q3)("v-if",!0)])),_:3},8,["name"])]))}})}}]);