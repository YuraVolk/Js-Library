"use strict";(self.webpackChunkjs_react_components_library=self.webpackChunkjs_react_components_library||[]).push([[442],{5995:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(7294),l=n.p+"img/slide0.png",r=n.p+"img/slide1.png",s=n.p+"img/slide2.png",i=n.p+"img/slide3.png",o=n.p+"img/slide4.png",c=n.p+"img/slide5.png",m=n(3379),u=n.n(m),g=n(7795),d=n.n(g),h=n(569),p=n.n(h),y=n(3565),E=n.n(y),f=n(9216),w=n.n(f),b=n(4589),x=n.n(b),I=n(3853),v={};v.styleTagTransform=x(),v.setAttributes=E(),v.insert=p().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=w(),u()(I.Z,v);var N=I.Z&&I.Z.locals?I.Z.locals:void 0,k=n(5727),S={};S.styleTagTransform=x(),S.setAttributes=E(),S.insert=p().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=w(),u()(k.Z,S);var C=k.Z&&k.Z.locals?k.Z.locals:void 0,_=n(9850);const R=(0,a.createContext)({state:{},updateState:function(){throw new Error("Function not implemented.")}}),T=(0,a.forwardRef)(((e,t)=>{const[n,l]=(0,a.useState)({}),r=(0,a.useRef)(!1),s=(0,a.useMemo)((()=>({state:n,updateState:l})),[n]);return(0,a.useEffect)((()=>{!r.current&&Array.isArray(e.innerChildren)&&Object.keys(n).length===e.innerChildren.length&&(r.current=!0,e.onAllElementsLoaded?.())}),[n]),(0,a.useImperativeHandle)(t,(()=>({getState(){return n},updateState(e){l(e)},wasSetupPerformed(){return r.current}}))),a.createElement(R.Provider,{value:s},e.children)})),A=({smoothDiametralTransition:e=!0,current:t=1,frameGap:n=20,animationDuration:l=500,showArrows:r=!0,showToggles:s=!0,...i})=>{const o=(0,a.useMemo)((()=>[i.carouselItems[i.carouselItems.length-1](i.carouselItems.length-1),...i.carouselItems.map(((e,t)=>e(t))),i.carouselItems[0](0)]),[i.carouselItems]),c=o.length,m=(0,a.useRef)(null),u=(0,a.useRef)(!1),g=(0,a.useRef)(),[d,h]=(0,a.useState)(t),[p,y]=(0,a.useState)(-100*d),E=(0,a.useMemo)((()=>({left:`${p}%`})),[p]),f=(0,a.useCallback)((e=>0===e||e>c-2?0===e?c-2:1:e),[c]),w=(0,a.useCallback)(((e,t,a)=>{u.current=!0;const r=new Date;g.current=window.setInterval((()=>{let n=((new Date).getTime()-r.getTime())/l;if(n>1&&(n=1),y(e+Math.abs(t-e)*n**2*(e>t?-1:1)),1===n){window.clearInterval(g.current),u.current=!1;const e=f(a);h(e),y(-100*e)}}),n)}),[l,f,n]),b=(0,a.useCallback)((t=>{if(c<=1)return;e||(t=f(t));const n=-100*t;u.current||p===n||(h(t),w(p,n,t))}),[f,p,c,w,e]);return(0,a.useEffect)((()=>()=>{window.clearInterval(g.current)}),[]),a.createElement(T,{ref:m,innerChildren:o},a.createElement("div",{className:`${C.wrap} ${i.className??""}`},a.createElement("div",{className:C.gallery},a.createElement("ul",{className:C["gallery-list"],style:E},o)),r&&a.createElement("div",{className:C["gallery-controls"]},a.createElement("button",{className:C["gallery-controls__previous-button"],onClick:()=>{b(d-1)}}),a.createElement("button",{className:C["gallery-controls__next-button"],onClick:()=>{b(d+1)}})),s&&c>1&&a.createElement("ul",{className:C["gallery-toggles"]},Array.from({length:c-2},((e,t)=>a.createElement("li",{key:t,className:`${C["gallery-toggle"]} ${d-1===t?C["gallery-toggle--active"]:""}`,onClick:()=>{b(t+1)}}))))))},B=e=>{const t=(0,a.useRef)(null),n=function(e,t){const[n]=(0,a.useState)(e()),l=(0,a.useContext)(R);return(0,a.useEffect)((()=>{(0,_.assertNonUndefined)(t.current),l.updateState((e=>({...e,[n]:{element:t,styles:{}}})))}),[]),void 0===l.state[n]?{}:l.state[n].styles}(_.uid,t);return a.createElement("li",{ref:t,style:n,className:e.className},e.children)};var Z=()=>a.createElement("main",{className:"main"},a.createElement("h1",{className:"heading"},"Gallery Carousel"),a.createElement("p",null,"The gallery carousel component represents a 2D carousel that allows items to be cycled through the visible area, showing one item at a time by default. This is a classic and the most common carousel type, which is commonly seen on websites, and has toggles and arrows to navigate in the carousel."),a.createElement("ul",null,a.createElement("li",null,"smoothDiametralTransition: Determines whether the transition between the last item and the first item is smooth. By default, this property is set to true."),a.createElement("li",null,"current: Specifies the index of the current item being displayed in the carousel."),a.createElement("li",null,"frameGap: Defines the gap between each item in the carousel."),a.createElement("li",null,"animationDuration: Sets the duration of the animation when transitioning between items."),a.createElement("li",null,"showArrows: Determines whether the arrows for navigating to the previous or next item are displayed. True by default."),a.createElement("li",null,"showToggles: Specifies whether the toggles for switching between items are shown. True by default."),a.createElement("li",null,"className: Specifies class name. optional."),a.createElement("li",null,"carouselItems: An array of functions used instead of children prop.")),a.createElement("p",null,"Here is a carousel with all default options:"),a.createElement(A,{className:N["gallery-wrap"],carouselItems:[()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:l,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:r,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:s,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:i,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:o,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:c,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:l,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:r,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:s,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:i,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:o,alt:"Example Image"})),()=>a.createElement(B,{className:N["gallery-item"]},a.createElement("img",{src:c,alt:"Example Image"}))]}),a.createElement("p",null,"In order for the carousel to track amount of items correctly and as such work correctly it must use carousel item components to automatically through context track all the element information, as such the only valid props children are carousel item components."))},5727:function(e,t,n){var a=n(8081),l=n.n(a),r=n(3645),s=n.n(r)()(l());s.push([e.id,".ousT93Ik2ZwWZ9WZA_xF {\n    position: relative;\n}\n\n.odCyvRWx21SBRN4Xl07g {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n}\n\n.bB7Cg_GCKIwm_McfqAzN {\n    position: relative;\n    display: flex;\n    width: inherit;\n    height: inherit;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 0;\n    white-space: nowrap;\n    line-height: 1;\n    z-index: 10;\n}\n\n.yyCLsxJP06mhTyj8YybI {\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n}\n\n.SIsnybxdG4EDpVykdv2y {\n    position: relative;\n    z-index: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style-type: none;\n    padding: 0;\n    gap: 0.3rem;\n}\n\n.dR7a8UdyaSk8dRJggEaw {\n    width: 10px;\n    height: 10px;\n    cursor: pointer;\n    border: 1px solid #e2e2e2;\n    border-radius: 50%;\n}\n\n.dJfHydFNnsCFRnRY0JO0 {\n    background-color: #2390bb;\n}\n\n.UFBOShy9_ikB63Qc7hr4 {\n    position: absolute;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    left: -10%;\n    right: -10%;\n    top: 0;\n    bottom: 0;\n}\n\n.zChScKfYwbeLpyr_Bvcb {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 7.5px 0 7.5px 13px;\n    border-color: transparent transparent transparent #fff;\n    background: none;\n    cursor: pointer;\n}\n\n.onekhRLKoHuVzAnIcB3B {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 7.5px 13px 7.5px 0;\n    border-color: transparent #fff transparent transparent;\n    background: none;\n    cursor: pointer;\n}\n",""]),s.locals={wrap:"ousT93Ik2ZwWZ9WZA_xF",gallery:"odCyvRWx21SBRN4Xl07g","gallery-list":"bB7Cg_GCKIwm_McfqAzN","gallery-item":"yyCLsxJP06mhTyj8YybI","gallery-toggles":"SIsnybxdG4EDpVykdv2y","gallery-toggle":"dR7a8UdyaSk8dRJggEaw","gallery-toggle--active":"dJfHydFNnsCFRnRY0JO0","gallery-controls":"UFBOShy9_ikB63Qc7hr4","gallery-controls__next-button":"zChScKfYwbeLpyr_Bvcb","gallery-controls__previous-button":"onekhRLKoHuVzAnIcB3B"},t.Z=s},3853:function(e,t,n){var a=n(8081),l=n.n(a),r=n(3645),s=n.n(r)()(l());s.push([e.id,".bygy7hgN5HFlTInR47YB {\n\tdisplay: block;\n\twidth: 370px;\n\theight: 220px;\n\tmargin: 0 auto 40px;\n}\n\n._Pa9TL4cHYEDcr7IvSSt {\n\tdisplay: inline-block;\n\twidth: 100%;\n\theight: 100%;\n}\n",""]),s.locals={"gallery-wrap":"bygy7hgN5HFlTInR47YB","gallery-item":"_Pa9TL4cHYEDcr7IvSSt"},t.Z=s}}]);