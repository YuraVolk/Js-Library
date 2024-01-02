"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[852],{3852:function(e,t,n){n.r(t),n.d(t,{ImageComparatorComponent:function(){return a}});var i=n(1293),o=n(3129),s=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.windowListeners=[]}static{this.styles=i.iv`
    .wrap {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .comparison-slider {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      width: 40px;
      height: 40px;
      background-color: #333;
      border-radius: 50%;
      cursor: ew-resize;
    }
  `}initializeImageComparator(e){const t=this._comparatorElements,n=t[e],{offsetWidth:i}=n;let o=!1;const s=document.createElement("div");function r(e){n.style.width=e+"px",s.style.left=n.offsetWidth-s.offsetWidth/2+"px"}s.setAttribute("class","comparison-slider"),this._wrapElement.append(s),r(i-i/t.length*e);const a=e=>{e.preventDefault(),o=!0};s.addEventListener("mousedown",a),s.addEventListener("pointerdown",a),this.windowListeners.unshift((e=>{if(!o)return!1;n.style.left="0";let t=e.pageX-n.getBoundingClientRect().left-window.scrollX;t<0&&(t=0),t>i&&(t=i),r(t)})),window.addEventListener("mousemove",this.windowListeners[0],{passive:!0}),window.addEventListener("pointermove",this.windowListeners[0],{passive:!0}),this.windowListeners.unshift((()=>{o=!1})),window.addEventListener("mouseup",this.windowListeners[0],{passive:!0}),window.addEventListener("pointerup",this.windowListeners[0],{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const e of this.windowListeners)["mousemove","pointermove","mouseup","pointerup"].forEach((t=>{window.removeEventListener(t,e)}))}firstUpdated(){for(let e=1;e<this._comparatorElements.length;e++)this.initializeImageComparator(e)}render(){return i.dy`<div class="wrap">
      <slot></slot>
    </div>`}};s([(0,o.NH)(),r("design:type",Array)],a.prototype,"_comparatorElements",void 0),s([(0,o.IO)(".wrap"),r("design:type",HTMLDivElement)],a.prototype,"_wrapElement",void 0),a=s([(0,o.Mo)("image-comparator-component")],a)}}]);