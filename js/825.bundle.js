/*! For license information please see 825.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[825],{1825:function(t,e,r){r.r(e),r.d(e,{ColorPickerComponent:function(){return d}});var i=r(1293),o=r(3129),n=r(9850),s=r(3959),c=r(6887),a=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let d=class extends i.oi{constructor(){super(...arguments),this.imageUrl="",this.width=245,this.height=245,this.backgroundColor=[0,0,0,1],this.rgba=[0,0,0,1]}static{this.rgbaConverter={fromAttribute:t=>{const e=t?.split(",");return e&&4===e.length&&e.every((t=>"number"==typeof t))?e.map(Number):[0,0,0,100]},toAttribute:t=>t.join(",")}}static{this.styles=i.iv`
    .wrap {
      max-width: 670px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 0.3rem;
    }

    .color-picker-wrap {
      max-width: var(--width);
      max-height: var(--height);
      border: 3px solid #000000;
      background-color: #000000;
    }

    .color-picker {
      max-width: inherit;
      max-height: inherit;
    }

    .color-picker__canvas {
      cursor: crosshair;
    }

    .current-color-wrap {
      width: calc(var(--width) / 2);
      height: calc(var(--height) / 2);
      border: 3px solid #000000;
    }

    .current-color {
      width: 100%;
      height: 100%;
    }

    .info {
      width: 235px;
    }

    p {
      margin: 3px 0;
    }

    #opacity-range {
      display: block;
      padding: 2rem 0;
    }
  `}convertOpacityToBackground(){const t=1-this.rgba[3]/100,e=this.rgba[3]/100;return this.rgba.map(((r,i)=>3===i?1:Math.round(t*this.backgroundColor[i]+e*r*100)))}getHex(){return"#"+this.convertOpacityToBackground().slice(0,-1).map((t=>Number(t).toString(16).padStart(2,"0"))).join("")}getRGB(){return`rgb(${this.convertOpacityToBackground().slice(0,-1).join(", ")})`}getRGBA(){return`rgba(${this.rgba.join(", ")})`}initColorPicker(){this.canvasElement.then((t=>{const e=t.getContext("2d",{willReadFrequently:!0});(0,n.assertNonUndefined)(e);const r=new Image(this.width,this.height);r.src=this.imageUrl,r.onload=()=>{e.drawImage(r,0,0,r.width,r.height)},t.addEventListener("mousedown",(t=>{const r=[...e.getImageData(t.offsetX,t.offsetY,1,1).data.slice(0,-1),this.rgba[3]];(0,c.verifyValidRGBAColor)(r)&&(this.rgba=r)}))})).catch((t=>{console.log(t)}))}connectedCallback(){super.connectedCallback(),this.initColorPicker(),this.opacityRange.then((t=>t._onUpdateListener=t=>{const e=[...this.rgba.slice(0,-1),t];(0,c.verifyValidRGBAColor)(e)&&(this.rgba=e)})).catch((t=>{console.log(t)}))}render(){return i.dy`
      <div class="wrap" style="--width: ${this.width}px; --height: ${this.height}px">
        <div class="color-picker-wrap">
          <div class="color-picker">
            <canvas class="color-picker__canvas" width="${this.width}" height="${this.height}"></canvas>
          </div>
        </div>
        <div class="info">
          <div class="current-color-wrap">
            <div class="current-color" style=${(0,s.V)({backgroundColor:this.getRGB()})}></div>
          </div>
          <range-input-component
            id="opacity-range"
            maximum="1"
            step="0.01"
            ticks="0,100"
            label="Opacity:"
            defaultValue="1"
          ></range-input-component>
          <p>Hex code: ${this.getHex()}</p>
          <p>RGBA: ${this.getRGBA()}</p>
          <p>RGB: ${this.getRGB()}</p>
        </div>
      </div>
    `}};a([(0,o.Cb)({type:String}),l("design:type",Object)],d.prototype,"imageUrl",void 0),a([(0,o.Cb)({type:Number}),l("design:type",Object)],d.prototype,"width",void 0),a([(0,o.Cb)({type:Number}),l("design:type",Object)],d.prototype,"height",void 0),a([(0,o.Cb)({converter:d.rgbaConverter}),l("design:type",Array)],d.prototype,"backgroundColor",void 0),a([(0,o.Cb)({converter:d.rgbaConverter}),l("design:type",Array)],d.prototype,"rgba",void 0),a([(0,o.GC)("#opacity-range"),l("design:type",Promise)],d.prototype,"opacityRange",void 0),a([(0,o.GC)("canvas"),l("design:type",Promise)],d.prototype,"canvasElement",void 0),d=a([(0,o.Mo)("color-picker-component")],d)},875:function(t,e,r){r.d(e,{XM:function(){return o},Xe:function(){return n},pX:function(){return i}});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},3959:function(t,e,r){r.d(e,{V:function(){return c}});var i=r(3692),o=r(875);const n="important",s=" !"+n,c=(0,o.XM)(class extends o.Xe{constructor(t){if(super(t),t.type!==o.pX.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const i=t[r];return null==i?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:r}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(const t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?r.removeProperty(t):r[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ut.add(t);const e="string"==typeof i&&i.endsWith(s);t.includes("-")||e?r.setProperty(t,e?i.slice(0,-11):i,e?n:""):r[t]=i}}return i.Jb}})}}]);