"use strict";(self.webpackChunkjs_react_components_library=self.webpackChunkjs_react_components_library||[]).push([[117],{117:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(294),i=n(379),a=n.n(i),s=n(795),l=n.n(s),o=n(569),c=n.n(o),u=n(565),p=n.n(u),h=n(216),m=n.n(h),g=n(589),d=n.n(g),f=n(958),x={};x.styleTagTransform=d(),x.setAttributes=p(),x.insert=c().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=m(),a()(f.Z,x),f.Z&&f.Z.locals&&f.Z.locals;var T=n(251);const w=["!",'"',"#","$","%","*","0","1",":",";","?","@","[","]","\\","~","'","/","{","}","|","&","(",")","-","<",">"],y=({characters:e=w,repetitions:t=1,interval:n=3e3,typingSpeed:i=45,...a})=>{const s=(0,r.useRef)(null);async function l(t){const{newLetter:n,delayed:r,i:a}=t,s=Math.round(Math.random()*((r?44:14)-6)+6);let l=!1;const o=1e3*Math.random()+(r?this.settings.typingSpeed*a:0),c=i;await new Promise((e=>{setTimeout(e,o)}));for(let t=0;t<=s;t++){let r;await new Promise((e=>{setTimeout(e,c)})),l||(r=e[Math.floor(Math.random()*e.length)]),t>=s&&(l=!0,r=n??""),this.setCurrentTextValue((e=>{const t=[...e];return void 0!==r&&(t[a]={letter:r,classes:l?[]:["active"]}),t}))}}function o(e,t){e&&t&&this.setCurrentTextValue((0,T.splitTextAlgorithm)(t.split("").map((e=>({letter:e,classes:[]}))),e))}const c=function(e){const t=(0,r.useRef)(),n=(0,r.useRef)(),[i,a]=(0,r.useState)((()=>e.strings[0].split("").map((e=>({letter:e,classes:[]}))))),s=(0,r.useCallback)((()=>{n.current??=(0,T.nextStringsGenerator)(e.strings[0],e);const{done:r,value:l}=n.current.next();r?(window.clearTimeout(t.current),t.current=void 0):function(n){e.triggerTextAnimation.call({interval:t,settings:e,currentTextValue:i,setCurrentTextValue:a,onInterval:s},...n)}(l)}),[n,e.triggerTextAnimation]);return(0,r.useEffect)((()=>()=>{n.current?.return(["",""]),n.current=(0,T.nextStringsGenerator)(e.strings[0],e),window.clearTimeout(t.current)}),[e.interval]),(0,r.useEffect)((()=>{e.splitText?.(),t.current=window.setTimeout((()=>{s()}),e.interval)}),[]),i}({strings:a.strings,repetitions:t,interval:n,typingSpeed:i,splitText:o,triggerTextAnimation:async function(e,t){o.call(this,t,e);const n=(0,T.splitTextAlgorithm)(e.split("").map((e=>({letter:e,classes:[]}))),t).map(((e,n)=>{if(e.letter!==t[n])return l.call(this,{newLetter:t[n],i:n,delayed:0===s.current?.textContent?.length})})).filter(Boolean);await Promise.all(n),this.setCurrentTextValue(t.split("").map((e=>({letter:e,classes:[]})))),await new Promise((e=>{setTimeout(e,this.settings.interval)})),this.onInterval()}});return r.createElement("pre",{ref:s},c.map(((e,t)=>r.createElement("span",{className:e.classes.join(""),key:`${e.letter}-${t}`},e.letter))))};var v=()=>{const e=(0,r.useMemo)((()=>({first:["Lorem ipsum dolor","sit amet"],second:["Hello","World"],third:["Hello","World","New Text","Something else"]})),[]);return r.createElement("main",{className:"main"},r.createElement("h1",{className:"heading"},"Ciphering Text"),r.createElement("p",null,"The Ciphering Text Component is a custom component that allows you to display text in a ciphered manner. It takes an array of strings and displays them one by one, with each string being ciphered and revealed gradually. This component adds an interesting visual effect to your web application or website. The ciphering text component can be configured through a variety of configuration settings:"),r.createElement("ul",null,r.createElement("li",null,"strings: the main configuration prop that is passed as an array of strings."),r.createElement("li",null,"repetitions: the amount of repetitions the ciphering text component will get re-ciphered. Defaults to one repetition."),r.createElement("li",null,"interval: the delay between text animations, defaults to 3000 milliseconds."),r.createElement("li",null,"typingSpeed: the ciphering speed of an individual character. Defaults to 45 milliseconds."),r.createElement("li",null,"characters: an optional configuration prop that is passed as an array of strings. It contains all ciphering characters.")),r.createElement("p",null,"An actively ciphering letter is given the active class. Here you can see a ciphering text with two phrases in action:"),r.createElement(y,{strings:e.first,repetitions:1/0}),r.createElement("p",null,"Here is another example of it animating Hello and World phrases:"),r.createElement(y,{strings:e.second,interval:2e3,repetitions:1/0}),r.createElement("p",null,"Here is an example with custom characters:"),r.createElement(y,{strings:e.third,repetitions:1/0,characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}),r.createElement("p",null,'In this example, the Ciphering Text Component is configured to use custom characters for ciphering the text. The characters are set to "ABCDEFGHIJKLMNOPQRSTUVWXYZ", which means the ciphered text will only contain uppercase letters.'))}},958:function(e,t,n){var r=n(81),i=n.n(r),a=n(645),s=n.n(a)()(i());s.push([e.id,"pre {\n    font-size: 24px;\n    line-height: 54px;\n}\n\npre>span {\n    transition: all 50ms ease-in-out;\n}\n\npre>span.active {\n    color: #e3caca;\n}\n",""]),t.Z=s}}]);