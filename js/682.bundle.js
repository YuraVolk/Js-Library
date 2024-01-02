/*! For license information please see 682.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[682],{1682:function(e,t,i){i.r(t),i.d(t,{AccordionComponent:function(){return h}});var n=i(1293),r=i(3129),s=i(3959),o=i(9850),d=function(e,t,i,n){var r,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(o=(s<3?r(o):s>3?r(t,i,o):r(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends n.oi{constructor(){super(...arguments),this._elements=[],this._headerHeights=[],this._widths=[],this.opened=[],this.multiple=!1}static{this.styles=n.iv`
    .accordions {
      margin: 0;
      padding-left: 0;
      list-style-type: none;
    }

    .accordion {
      width: 100%;
      overflow: hidden;
      background-color: #000000;
      border-radius: .4rem;
      -webkit-transition: max-height 0.4s linear;
      transition: max-height 0.4s linear;
    }

    .accordion:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    .accordion__content {
      color: #fff;
      font-size: 15px;
      padding: 2rem;
      -webkit-transition: max-height 0.2s linear forwards;
      transition: max-height 0.2s linear forwards;
    }

    .accordion__heading {
      position: relative;
      z-index: 1;
      display: block;
      font-size: 1.6rem;
      color: rgba(255,255,255,.8);
      text-decoration: none;
      background-color: #000000;
      padding: 0.25rem 1rem;
      text-transform: uppercase;
      font-family: Segoe UI;
    }
  `}connectedCallback(){super.connectedCallback(),this._elements.length=this._widths.length=0,this._elements=Array.from(this.children).filter((e=>"LI"===e.nodeName&&2===e.children.length)).map((e=>[e.children[0],e.children[1]])),this.opened=this.opened.length===this._elements.length?[...this.opened]:this._elements.map((()=>!1))}disconnectedCallback(){this._elements.length=this._widths.length=0,super.disconnectedCallback()}firstUpdated(){this.updateWidths(),this.opened=this.opened.length===this._elements.length?[...this.opened]:this._elements.map((()=>!1))}updated(){this.updateWidths()}updateWidths(){this._widths.length=this._headerHeights.length=0,(0,o.assertNonUndefined)(this.shadowRoot);for(const e of Array.from(this.shadowRoot.children[0].children).filter((e=>2===e.children.length)))this._widths.push(e.children[1].offsetHeight),this._headerHeights.push(e.children[0].offsetHeight)}_clickAccordion(e){this.updateWidths(),this.opened=this.opened.map(((t,i)=>e===i?!t:!!this.multiple&&t))}render(){return n.dy`
      <ul class="accordions">
        ${[...this._elements].map(((e,t)=>{const[i,r]=e,o=this.opened[t]?{cursor:"n-resize",maxHeight:this._widths[t]+this._headerHeights[t]+"px"}:{cursor:"pointer",maxHeight:`${this._headerHeights[t]}px`};return n.dy`<li class="accordion" style=${(0,s.V)(o)}>
              <header
                class="accordion__heading"
                @click=${{handleEvent:()=>{this._clickAccordion(t)}}}
              >
                ${i}
              </header>
              <footer class="according__content">${r}</footer>
            </li>`})).filter(Boolean)}
      </ul>
    `}};d([(0,r.SB)(),c("design:type",Array)],h.prototype,"_elements",void 0),d([(0,r.SB)(),c("design:type",Array)],h.prototype,"_headerHeights",void 0),d([(0,r.SB)(),c("design:type",Array)],h.prototype,"_widths",void 0),d([(0,r.Cb)({type:Array,converter:{fromAttribute:e=>null===e?[]:e.split(",").map((e=>"true"===e||"1"===e)),toAttribute:e=>e.join(",")}}),c("design:type",Array)],h.prototype,"opened",void 0),d([(0,r.Cb)({type:Boolean}),c("design:type",Object)],h.prototype,"multiple",void 0),h=d([(0,r.Mo)("accordion-component")],h)},875:function(e,t,i){i.d(t,{XM:function(){return r},Xe:function(){return s},pX:function(){return n}});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=e=>(...t)=>({_$litDirective$:e,values:t});class s{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3959:function(e,t,i){i.d(t,{V:function(){return d}});var n=i(3692),r=i(875);const s="important",o=" !"+s,d=(0,r.XM)(class extends r.Xe{constructor(e){if(super(e),e.type!==r.pX.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const n=e[i];return null==n?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(t)),this.render(t);for(const e of this.ut)null==t[e]&&(this.ut.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const n=t[e];if(null!=n){this.ut.add(e);const t="string"==typeof n&&n.endsWith(o);e.includes("-")||t?i.setProperty(e,t?n.slice(0,-11):n,t?s:""):i[e]=n}}return n.Jb}})}}]);