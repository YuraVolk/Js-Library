"use strict";(self.webpackChunkjs_vue_components_library=self.webpackChunkjs_vue_components_library||[]).push([[4957],{4957:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var i=n(5166),l=n(8251);const r=["textContent"];var s=(0,i.aZ)({__name:"TypingText",props:{unTypingSpeed:{},strings:{},repetitions:{default:1},interval:{default:4500},typingSpeed:{default:35}},setup(e){const t=e,n=function(e){const t=(0,i.iH)(void 0),n=(0,i.iH)((0,l.nextStringsGenerator)(e.strings[0],e)),r=(0,i.iH)(e.strings[0].split("").map((e=>({letter:e,classes:[]})))),s=()=>{const{done:i,value:l}=n.value.next();i?(window.clearTimeout(t.value),t.value=void 0):e.triggerTextAnimation(...l)};return(0,i.bv)((()=>{e.splitText?.(),t.value=window.setTimeout((()=>{s()}),e.interval)})),(0,i.SK)((()=>{n.value.return(["",""]),window.clearTimeout(e.interval)})),{interval:t,currentTextValue:r,settings:e,onInterval:s}}({strings:t.strings,repetitions:t.repetitions,interval:t.interval,typingSpeed:t.typingSpeed,triggerTextAnimation:async function(e,i){const l=e.split("").map((e=>({letter:e,classes:[]}))),r=i.split("").map((e=>({letter:e,classes:[]})));for(let i=1;i<e.length+1;i++)await new Promise((e=>s.value=window.setTimeout((()=>{n.currentTextValue.value=l.slice(0,-i),e()}),t.unTypingSpeed??t.typingSpeed)));for(let e=1;e<i.length+1;e++)await new Promise((i=>s.value=window.setTimeout((()=>{n.currentTextValue.value=r.slice(0,e),i()}),t.unTypingSpeed??t.typingSpeed)));setTimeout((()=>{clearTimeout(s.value),n.onInterval()}),t.interval)}}),s=(0,i.iH)();return(0,i.SK)((()=>{clearTimeout(s.value)})),(e,t)=>((0,i.wg)(),(0,i.iD)("pre",null,[(0,i.Uk)("        "),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,i.SU)(n).currentTextValue.value,(e=>((0,i.wg)(),(0,i.iD)("span",{textContent:(0,i.zw)(e.letter),class:(0,i.C_)(e.classes.join(""))},null,10,r)))),256)),(0,i.Uk)("\n    ")]))}})}}]);