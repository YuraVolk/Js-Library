"use strict";(self.webpackChunkjs_react_components_library=self.webpackChunkjs_react_components_library||[]).push([[298],{5298:function(e,n,a){a.r(n),a.d(n,{default:function(){return C}});var t=a(7294),l=a(3379),r=a.n(l),i=a(7795),o=a.n(i),u=a(569),s=a.n(u),c=a(3565),m=a.n(c),p=a(9216),h=a.n(p),b=a(4589),d=a.n(b),v=a(8512),g={};g.styleTagTransform=d(),g.setAttributes=m(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h(),r()(v.Z,g);var x=v.Z&&v.Z.locals?v.Z.locals:void 0,k=a(4473),f=a(4135),z={};z.styleTagTransform=d(),z.setAttributes=m(),z.insert=s().bind(null,"head"),z.domAPI=o(),z.insertStyleElement=h(),r()(f.Z,z);var S=f.Z&&f.Z.locals?f.Z.locals:void 0;const E=({minimum:e=0,maximum:n=100,defaultValue:a=0,step:l=1,ticks:r=[],label:i="",thumbSize:o="15px",trackColor:u="#ccc",thumbColor:s="#f50",hoverColor:c=k.defaultHoverColor,activeColor:m=k.defaultActiveColor,valueSize:p="25px",hideValue:h=!1,allSameLine:b=!1,onUpdate:d,...v})=>{const g=(0,t.useId)(),[x,f]=(0,t.useState)(0),z=(0,t.useMemo)((()=>({"--thumbSize":o,"--trackColor":u,"--thumbColor":s,"--hoverColor":c,"--activeColor":m,"--valueSize":p})),[m,c,s,o,u,p]),E=(0,t.useMemo)((()=>{const e=x/n*100;return{background:`linear-gradient(to right, ${s} ${e}%, ${u} ${e}%)`}}),[n,s,u,x]),C=(0,t.useCallback)((e=>{const n=Number(e.target.value);f(n),d?.(n)}),[d]);return(0,t.useEffect)((()=>{f(a)}),[a]),t.createElement("div",{className:`${S.wrap} ${v.className??""}`,style:z},t.createElement("div",{className:`${S["range-slider"]} ${b?S["range-slider--one-lined"]:""}`},t.createElement("label",{className:S["range-slider__label"],htmlFor:g},i),t.createElement("input",{type:"range",min:e,max:n,value:x,id:g,step:l,className:S["range-slider__input"],style:E,onInput:C}),r.length>0&&t.createElement("ul",{className:S["range-slider-ticks"]},r.map((e=>{const n={"--value":e+"%"};return t.createElement("li",{className:S["range-slider-ticks__tick"],style:n,key:e},e)})))),!h&&t.createElement("span",{className:S.value},x))};var C=()=>t.createElement("main",{className:"main"},t.createElement("h1",{className:"heading"},"Custom Range Input"),t.createElement("p",null,"The range input component provides a customizable range input slider with various features such as ticks, labels, and styling options. This component allows users to select a value within a specified range. Through the callback function you to react on dynamic value changes without any issues, thus fully functioning as a custom range input component."),t.createElement("ul",null,t.createElement("li",null,"minimum, number as the minimum value."),t.createElement("li",null,"maximum, number as the maximum value."),t.createElement("li",null,"defaultValue, defines the default range value."),t.createElement("li",null,"step, defines the range step."),t.createElement("li",null,"ticks, a number array defining the breakpoints from 0 to 100 of the ticks, no matter the range minimum and maximum."),t.createElement("li",null,"label, a label for the range input, empty string by default."),t.createElement("li",null,"thumbSize, trackColor, thumbColor, hoverColor, activeColor and valueSize. Colors to give range styles: all of these are strings and have default values."),t.createElement("li",null,"onUpdate, an option to allow you to react on input changes.")),t.createElement("p",null,"Here is an example of basic usage with default value of 50 and step 5:"),t.createElement(E,{className:x["range-input"],defaultValue:50,step:5}),t.createElement("p",null,"This is a range input with added ticks:"),t.createElement(E,{className:x["range-input"],ticks:[0,25,50,75,100]}),t.createElement("p",null,"Here is an example of custom styled colors:"),t.createElement(E,{className:x["range-input"],thumbSize:"20px",trackColor:"#ddd",thumbColor:"#0f0",hoverColor:"#ff0",activeColor:"#f00",valueSize:"30px"}))},4135:function(e,n,a){var t=a(8081),l=a.n(t),r=a(3645),i=a.n(r)()(l());i.push([e.id,".mJ3k1k24ubZxEFpPFcuZ {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 100%;\n    height: 6px;\n    background: var(--trackColor, #ccc);\n    cursor: pointer;\n    outline: none;\n    border-radius: var(--thumbSize, 15px);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: var(--thumbSize, 15px);\n    height: var(--thumbSize, 15px);\n    background-color: var(--thumbColor, #f50);\n    border-radius: 50%;\n    border: none;\n    transition: 0.35s ease-in-out;\n}\n\n.mJ3k1k24ubZxEFpPFcuZ::-moz-range-thumb {\n    width: var(--thumbSize, 15px);\n    height: var(--thumbSize, 15px);\n    background-color: var(--thumbColor, #f50);\n    border-radius: 50%;\n    border: none;\n    transition: 0.35s ease-in-out;\n}\n\n.mJ3k1k24ubZxEFpPFcuZ::-webkit-slider-thumb:hover {\n    box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ::-moz-range-thumb:hover {\n    box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ:active::-webkit-slider-thumb {\n    box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ:active::-moz-range-thumb {\n    box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ:focus::-webkit-slider-thumb {\n    box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor);\n}\n\n.mJ3k1k24ubZxEFpPFcuZ:focus::-moz-range-thumb {\n    box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor);\n}\n\n.iISPaOkykjWMZAnMGAKh {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    width: 100%;\n    box-sizing: border-box;\n}\n\n.oigbQndmS2rjH2Zb4A93 {\n    font-size: var(--valueSize, 25px);\n    width: calc(var(--valueSize, 25px) * 2);\n    text-align: center;\n}\n\n.oHr9cEX0FuK8jJxqGiJ0 {\n    display: block;\n    font-size: calc(var(--valueSize, 25px) / 2);\n}\n\n.HgQcOWfFSag8W5KM_yqG {\n    flex-grow: 1;\n    height: 100%;\n}\n\n.XtBLuamk8bNtyolHCv2V {\n    display: flex;\n    align-items: center;\n}\n\n.yCOtxcH2j03TbPea9qFZ {\n    position: relative;\n    margin: 0;\n    padding: 0 10px;\n    list-style-type: none;\n}\n\n.CBtqjaDALx3lW9JYuDqa {\n    position: absolute;\n    top: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    left: calc(var(--value) + var(--valueSize, 25px) / 4);\n    width: 1px;\n    height: calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3));\n    background: var(--trackColor, #ccc);\n    line-height: calc((var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) * 4);\n}\n",""]),i.locals={"range-slider__input":"mJ3k1k24ubZxEFpPFcuZ",wrap:"iISPaOkykjWMZAnMGAKh",value:"oigbQndmS2rjH2Zb4A93","range-slider__label":"oHr9cEX0FuK8jJxqGiJ0","range-slider":"HgQcOWfFSag8W5KM_yqG","range-slider--one-lined":"XtBLuamk8bNtyolHCv2V","range-slider-ticks":"yCOtxcH2j03TbPea9qFZ","range-slider-ticks__tick":"CBtqjaDALx3lW9JYuDqa"},n.Z=i},8512:function(e,n,a){var t=a(8081),l=a.n(t),r=a(3645),i=a.n(r)()(l());i.push([e.id,".DdUVyM4Fz6Qlak_G0Vw1 {\n    padding-bottom: 1rem;\n}\n",""]),i.locals={"range-input":"DdUVyM4Fz6Qlak_G0Vw1"},n.Z=i}}]);