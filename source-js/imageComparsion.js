const data={COMPARISON_IMG:"comparsion-image--comparison",COMPARISON_SLIDER:"comparsion-slider__toddler"},x=document.querySelectorAll(`.${data.COMPARISON_IMG}`);for(var i=0;i<x.length;i++)compareImages(x[i],i,x.length+1);function compareImages(e,t,n){var o,s=0;const i=e.offsetWidth,a=e.offsetHeight;function d(e){e.preventDefault(),s=1,window.addEventListener("mousemove",r,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0})}function f(){s=0}function r(){if(0!==s){e.style.left=0;let t=event.pageX-e.getBoundingClientRect().left-window.pageXOffset;t<0&&(t=0),t>i&&(t=i),l(t)}}function l(t){e.style.width=t+"px",o.style.left=e.offsetWidth-o.offsetWidth/2+"px"}e.style.width=i/n+"px",(o=document.createElement("DIV")).setAttribute("class",data.COMPARISON_SLIDER),e.parentElement.insertBefore(o,e),o.style.top=a/2-o.offsetHeight/2+"px",o.style.left=i-i/n*(t+1)-o.offsetWidth/2+"px",o.addEventListener("mousedown",d),window.addEventListener("mouseup",f,{passive:!0}),o.addEventListener("touchstart",d),window.addEventListener("touchstop",f,{passive:!0}),l(i-i/n*(t+1))}