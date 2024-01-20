"use strict";(self.webpackChunkjs_react_components_library=self.webpackChunkjs_react_components_library||[]).push([[6151],{2997:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(7294),l=n(9850);const r=(0,a.createContext)({state:{},updateState:function(){throw new Error("Function not implemented.")}}),s=(0,a.forwardRef)(((e,t)=>{const[n,l]=(0,a.useState)({}),s=(0,a.useRef)(!1),c=(0,a.useMemo)((()=>({state:n,updateState:l})),[n]);return(0,a.useEffect)((()=>{s.current||Object.keys(n).length!==a.Children.toArray(e.innerChildren).length||(s.current=!0,e.onAllElementsLoaded?.())}),[n]),(0,a.useImperativeHandle)(t,(()=>({getState(){return n},updateState(e){l(e)},wasSetupPerformed(){return s.current}}))),a.createElement(r.Provider,{value:c},e.children)}));var c=n(3379),i=n.n(c),m=n(7795),o=n.n(m),u=n(569),g=n.n(u),d=n(3565),p=n.n(d),E=n(9216),f=n.n(E),h=n(4589),b=n.n(h),v=n(4410),x={};x.styleTagTransform=b(),x.setAttributes=p(),x.insert=g().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=f(),i()(v.Z,x);var I=v.Z&&v.Z.locals?v.Z.locals:void 0,w=n(8148),y={};y.styleTagTransform=b(),y.setAttributes=p(),y.insert=g().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=f(),i()(w.Z,y);var k=w.Z&&w.Z.locals?w.Z.locals:void 0;const S=e=>{const t=(0,a.useRef)(null),[n,l]=(0,a.useState)(!e.isVertical),[r,c]=(0,a.useState)({}),[i,m]=(0,a.useState)(0),o=(0,a.useCallback)((e=>{const a=t.current?.getState();if(!a)return;const l=Object.values(a).length,r=2*Math.PI/l;c((t=>({...t,transform:`rotate${n?"Y":"X"}(${e*-r}rad)`}))),m(e)}),[n]),u=(0,a.useCallback)((()=>{const e=t.current?.getState();if(!e)return;const a=Object.values(e),l=a[0].element.current;if(!l)return;const r=a.length,s=2*Math.PI/r,m=parseFloat(getComputedStyle(l)[n?"width":"height"])/(2*Math.tan(Math.PI/r));c((e=>({...e,transformOrigin:`50% 50% ${-m}px`})));for(let e=0;e<r;e++)a[e].styles={},a[e].styles.padding="0",0!==e&&(a[e].styles.transformOrigin=`50% 50% ${-m}px`,a[e].styles.transform=`rotate${n?"Y":"X"}(${e*s}rad)`);t.current?.updateState(Object.keys(e).reduce(((e,t,n)=>({...e,[t]:a[n]})),{})),o(i)}),[i,n,o]),{abortInterval:g}=function(e,t){const n=(0,a.useRef)(),l=(0,a.useCallback)((()=>{window.clearInterval(n.current),n.current=void 0}),[]),r=(0,a.useCallback)((()=>{n.current=window.setInterval(e,250)}),[e,250]);return(0,a.useEffect)((()=>(r(),()=>{l()})),[r]),{abortInterval:l,restartInterval:r}}((0,a.useCallback)((()=>{u()}),[u])),d=(0,a.useCallback)((()=>{g(),o(i+1)}),[g,i,o]),p=(0,a.useCallback)((()=>{g(),o(i-1)}),[g,i,o]),E=(0,a.useCallback)((()=>{g(),l((e=>!e))}),[g]);return(0,a.useEffect)((()=>{t.current?.wasSetupPerformed()&&u()}),[n,u]),function(e){const t=(0,a.useRef)();(0,a.useEffect)((()=>(t.current=e,window.addEventListener("resize",e),()=>{t.current&&window.removeEventListener("resize",t.current),t.current=void 0,window.removeEventListener("resize",e)})),[e])}(u),a.createElement(s,{ref:t,onAllElementsLoaded:u,innerChildren:e.children},a.createElement("div",null,a.createElement("div",{className:`${I["backface-carousel"]} ${n?"":I["backface-carousel--vertical"]}`},a.createElement("ul",{className:I["backface-carousel-items"],style:r},e.children)),a.createElement("div",{className:k["carousel-controls"]},a.createElement("button",{className:k["carousel-controls__previous-button"],onClick:p}),a.createElement("button",{className:k["carousel-controls__perspective-button"],onClick:E},"Switch"),a.createElement("button",{className:k["carousel-controls__next-button"],onClick:d}))))},N=e=>{const t=(0,a.useRef)(null),n=function(e,t){const[n]=(0,a.useState)(e()),s=(0,a.useContext)(r);return(0,a.useEffect)((()=>{(0,l.assertNonUndefined)(t.current),s.updateState((e=>({...e,[n]:{element:t,styles:{}}})))}),[]),void 0===s.state[n]?{}:s.state[n].styles}(l.uid,t);return a.createElement("li",{ref:t,className:I["backface-carousel-item"],style:n},e.children)};var C=n.p+"img/slide0.png",_=n.p+"img/slide1.png",O=n.p+"img/slide2.png",z=n.p+"img/slide3.png",Z=n.p+"img/slide4.png",X=n.p+"img/slide5.png",T=n(3300),j={};j.styleTagTransform=b(),j.setAttributes=p(),j.insert=g().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=f(),i()(T.Z,j);var A=T.Z&&T.Z.locals?T.Z.locals:void 0,L=()=>a.createElement("main",{className:"main"},a.createElement("h1",{className:"heading"},"Backface Carousel"),a.createElement("p",null,"The backface carousel component represents a 3D-style carousel that appears as a 3D shape with its contents being equal-size items. Any item can be of any content within the carousel, ranging from simple images to complex HTML structures. The items are inserted directly into the carousel as children nodes without any configuration. The carousel exposes methods to be easily controllable, and supports both vertical and horizontal placement. The insertion of children is done through the wrapping all images in an automatically carousel item component. For usage with this concrete carousel, it is highly recommended you use the predefined BackfaceCarouselItem component that gives default styling required for this type of carousel, and give width and height set to 100% for all inner items of the backface carousel item components."),a.createElement(S,null,a.createElement(N,null,a.createElement("img",{className:A.image,src:C,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:_,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:O,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:z,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:Z,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:X,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:C,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:_,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:O,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:z,alt:"Example Image"}))),a.createElement("p",null,"It is also possible to set vertical placement to be the default placement:"),a.createElement(S,{isVertical:!0},a.createElement(N,null,a.createElement("img",{className:A.image,src:C,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:_,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:O,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:z,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:Z,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:X,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:C,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:_,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:O,alt:"Example Image"})),a.createElement(N,null,a.createElement("img",{className:A.image,src:z,alt:"Example Image"}))))},4410:function(e,t,n){var a=n(8081),l=n.n(a),r=n(3645),s=n.n(r)()(l());s.push([e.id,".hPmOkUvgVmzEVLlQcsYG {\n    display: flex;\n    width: auto;\n    height: 100%;\n    flex-direction: column;\n    align-items: center;\n    perspective: 500px;\n    overflow: hidden;\n    padding: 20px;\n}\n\n.sRjfrI5xdwoQYOBnCh14 {\n    margin-top: 10%;\n    height: 33vw;\n    overflow: visible;\n}\n\n.hPmOkUvgVmzEVLlQcsYG * {\n    margin: 0 auto;\n    flex: 0 0 auto;\n}\n\n.ZxtqaMpgrWT3H0OuXlOQ {\n    width: 40%;\n    margin: 0;\n    transform-style: preserve-3d;\n    transition: all 0.5s;\n    padding: 0;\n    list-style-type: none;\n}\n\n.el9WSdxqiXcjyrpSXwcI {\n    position: relative;\n    width: 100%;\n    height: auto;\n    padding: 0;\n    opacity: 0.9999;\n    backface-visibility: hidden;\n}\n\n.el9WSdxqiXcjyrpSXwcI:not(:first-of-type) {\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin: 0 auto;\n    padding: 0 auto;\n}\n",""]),s.locals={"backface-carousel":"hPmOkUvgVmzEVLlQcsYG","backface-carousel--vertical":"sRjfrI5xdwoQYOBnCh14","backface-carousel-items":"ZxtqaMpgrWT3H0OuXlOQ","backface-carousel-item":"el9WSdxqiXcjyrpSXwcI"},t.Z=s},3300:function(e,t,n){var a=n(8081),l=n.n(a),r=n(3645),s=n.n(r)()(l());s.push([e.id,".QfWvXO9vXxsz0WVgIL5R {\n    width: 100%;\n    height: 100%;\n}\n",""]),s.locals={image:"QfWvXO9vXxsz0WVgIL5R"},t.Z=s},8148:function(e,t,n){var a=n(8081),l=n.n(a),r=n(3645),s=n.n(r)()(l());s.push([e.id,".M6G_vIp1080cwKXTSqgm {\n    position: relative;\n    z-index: 1;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    justify-content: center;\n}\n\n.paWxUkzhuGSFazKwgVBg {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 7.5px 0 7.5px 13px;\n    border-color: transparent transparent transparent #fff;\n    background: none;\n    cursor: pointer;\n}\n\n.bk1BzS1HYIAjsMcSnib0 {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 7.5px 13px 7.5px 0;\n    border-color: transparent #fff transparent transparent;\n    background: none;\n    cursor: pointer;\n}\n\n.H90OEYAbgsIpQN3YLFe5 {\n    border: none;\n    background-color: #000;\n    padding: 0.5rem;\n    color: #fff;\n    text-transform: uppercase;\n    cursor: pointer;\n}\n",""]),s.locals={"carousel-controls":"M6G_vIp1080cwKXTSqgm","carousel-controls__next-button":"paWxUkzhuGSFazKwgVBg","carousel-controls__previous-button":"bk1BzS1HYIAjsMcSnib0","carousel-controls__perspective-button":"H90OEYAbgsIpQN3YLFe5"},t.Z=s}}]);