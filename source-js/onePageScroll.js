const data={CONTAINER:"one-page-scroll",SLIDE:"one-page-scroll__slide"};let selectedItem=0,isScrolling=!1;const items=Array.prototype.slice.call(document.querySelectorAll(`.${data.SLIDE}`));function scrollDir(e){let t;return t=e.wheelDelta?e.wheelDelta:-1*e.deltaY,t<0||!(t>0)&&void 0}function easeInOutQuad(e,t,l,o){return(e/=o/2)<1?l/2*e*e+t:-l/2*(--e*(e-2)-1)+t}function smoothScrollTo(e,t,l){isScrolling=!0;var o=e.scrollTop,s=t-o,c=0,i=function(){var t=easeInOutQuad(c+=5,o,s,l);e.scrollTop=t,c<l&&setTimeout(i,5),c===l&&(isScrolling=!1)};i()}function scrollToSlide(e){if(!isScrolling)if(1==e){const e=items[selectedItem+1].offsetTop;smoothScrollTo(items[0].parentNode,e,600),selectedItem++}else{const e=items[selectedItem-1].offsetTop;smoothScrollTo(items[0].parentNode,e,600),selectedItem--}}document.querySelector(`.${data.CONTAINER}`).addEventListener("wheel",(e=>{if(e.preventDefault(),scrollDir(e))selectedItem>=items.length-1?isScrolling||(selectedItem=0,smoothScrollTo(items[0].parentNode,items[0].offsetTop,600)):scrollToSlide(!0);else if(0===selectedItem){if(!isScrolling){const e=items[0].parentNode.scrollHeight-items[0].offsetHeight;selectedItem=items.length-1,smoothScrollTo(items[0].parentNode,e,600)}}else scrollToSlide(!1)}));