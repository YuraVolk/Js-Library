/*! For license information please see 30.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[30],{1030:function(e,t,i){i.r(t),i.d(t,{RangeInputComponent:function(){return h}});var r=i(1293),n=i(3129),o=i(9850),a=i(3959),s=i(4473);const l=r.iv`
  width: var(--thumbSize, 15px);
  height: var(--thumbSize, 15px);
  background-color: var(--thumbColor, #f50);
  border-radius: 50%;
  border: none;
  transition: 0.35s ease-in-out;
`;var u=i(801),c=i(9455),d=function(e,t,i,r){var n,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends r.oi{constructor(){super(...arguments),this.uiRangeID=crypto.randomUUID(),this.minimum=0,this.maximum=100,this.defaultValue=0,this.step=1,this.ticks=[],this.label="",this.thumbSize="15px",this.trackColor="#ccc",this.thumbColor="#f50",this.hoverColor=s.defaultHoverColor,this.activeColor=s.defaultActiveColor,this.valueSize="25px",this.hideValue=!1,this.allSameLine=!1,this._value=0,this._gradientStyle={}}setGradientStyle(){const e=this._value/this.maximum*100;this._gradientStyle={background:`linear-gradient(to right, ${this.thumbColor} ${e}%, ${this.trackColor} ${e}%)`}}onValueChange(e){(0,o.assertDevOnly)(e.target instanceof HTMLInputElement),this._value=Number(e.target.value),this.setGradientStyle(),this._onUpdateListener?.(this._value)}changeValue(e){this._value=e,this.rangeSlider.then((t=>t.value=String(e))).catch((e=>{console.error(e)})),this.setGradientStyle()}connectedCallback(){super.connectedCallback(),this.boundEventListener=e=>{this.onValueChange(e)},this._value=this.defaultValue,this.rangeSlider.then((e=>{this.setGradientStyle(),e.addEventListener("input",this.boundEventListener)})).catch((e=>{console.error(e)}))}disconnectedCallback(){this.rangeSlider.then((e=>{e.removeEventListener("input",this.boundEventListener)})).catch((e=>{console.error(e)})),super.disconnectedCallback()}render(){return r.dy`
			<div class="wrap" style="${["thumbSize","trackColor","thumbColor","hoverColor","activeColor","valueSize"].map((e=>`--${String(e)}: ${String(this[e])}`)).join("; ")}">
				<div class="range-slider ${(0,c.$)({"range-slider--one-lined":this.allSameLine})}">
					<label class="range-slider__label" for="${this.uiRangeID}">${this.label}</label>
					<input
						type="range"
						min="${this.minimum}"
						max="${this.maximum}"
						value="${this._value}"
						id="${this.uiRangeID}"
						step="${this.step}"
						class="range-slider__input"
						style=${(0,a.V)(this._gradientStyle)}
					/>
					${this.ticks.length?r.dy`
								<ul class="range-slider-ticks">
									${this.ticks.map((e=>r.dy`<li class="range-slider-ticks__tick" style="--value: ${e}%">${e}</li>`))}
								</ul>
						  `:""}
				</div>
				${(0,u.g)(!this.hideValue,(()=>r.dy`<span class="value">${this._value}</span>`))}
			</div>
		`}static{this.styles=r.iv`
		.range-slider__input {
			-webkit-appearance: none;
			appearance: none;
			width: 100%;
			height: 6px;
			background: var(--trackColor, #ccc);
			cursor: pointer;
			outline: none;
			border-radius: var(--thumbSize, 15px);
		}

		.range-slider__input::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none;
			${l}
		}

		.range-slider__input::-moz-range-thumb {
			${l}
		}

		.range-slider__input::-webkit-slider-thumb:hover {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${r.iv`defaultHoverColor`});
		}

		.range-slider__input::-moz-range-thumb:hover {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${r.iv`defaultHoverColor`});
		}

		.range-slider__input:active::-webkit-slider-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r.iv`defaultActiveColor`});
		}

		.range-slider__input:active::-moz-range-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r.iv`defaultActiveColor`});
		}

		.range-slider__input:focus::-webkit-slider-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r.iv`defaultActiveColor`});
		}

		.range-slider__input:focus::-moz-range-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r.iv`defaultActiveColor`});
		}

		.wrap {
			display: flex;
			align-items: center;
			gap: 1rem;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
		}

		.value {
			font-size: var(--valueSize, 25px);
			width: calc(var(--valueSize, 25px) * 2);
			text-align: center;
		}

		.range-slider__label {
			display: block;
			font-size: calc(var(--valueSize, 25px) / 2);
		}

		.range-slider {
			flex-grow: 1;
			height: 100%;
		}

		.range-slider--one-lined {
			display: flex;
			align-items: center;
		}

		.range-slider-ticks {
			position: relative;
			margin: 0;
			padding: 0 10px;
			list-style-type: none;
		}

		.range-slider-ticks__tick {
			position: absolute;
			top: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			left: calc(var(--value) + var(--valueSize, 25px) / 4);
			width: 1px;
			height: calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3));
			background: var(--trackColor, #ccc);
			line-height: calc((var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) * 4);
		}
	`}};d([(0,n.Cb)({type:Number}),p("design:type",Object)],h.prototype,"minimum",void 0),d([(0,n.Cb)({type:Number}),p("design:type",Object)],h.prototype,"maximum",void 0),d([(0,n.Cb)({type:Number}),p("design:type",Object)],h.prototype,"defaultValue",void 0),d([(0,n.Cb)({type:Number}),p("design:type",Object)],h.prototype,"step",void 0),d([(0,n.Cb)({type:Array,converter:{fromAttribute:e=>e?e.split(",").map(Number):[],toAttribute:e=>e.join(",")}}),p("design:type",Array)],h.prototype,"ticks",void 0),d([(0,n.Cb)({type:String}),p("design:type",Object)],h.prototype,"label",void 0),d([(0,n.Cb)({type:String}),p("design:type",Object)],h.prototype,"thumbSize",void 0),d([(0,n.Cb)({type:String}),p("design:type",Object)],h.prototype,"trackColor",void 0),d([(0,n.Cb)({type:String}),p("design:type",Object)],h.prototype,"thumbColor",void 0),d([(0,n.Cb)({type:String}),p("design:type",Object)],h.prototype,"hoverColor",void 0),d([(0,n.Cb)({type:String}),p("design:type",Object)],h.prototype,"activeColor",void 0),d([(0,n.Cb)({type:String}),p("design:type",Object)],h.prototype,"valueSize",void 0),d([(0,n.Cb)({type:Boolean}),p("design:type",Object)],h.prototype,"hideValue",void 0),d([(0,n.Cb)({type:Boolean}),p("design:type",Object)],h.prototype,"allSameLine",void 0),d([(0,n.SB)(),p("design:type",Object)],h.prototype,"_value",void 0),d([(0,n.SB)(),p("design:type",Object)],h.prototype,"_gradientStyle",void 0),d([(0,n.SB)(),p("design:type",Function)],h.prototype,"_onUpdateListener",void 0),d([(0,n.GC)(".range-slider__input"),p("design:type",Promise)],h.prototype,"rangeSlider",void 0),h=d([(0,n.Mo)("range-input-component")],h)},875:function(e,t,i){i.d(t,{XM:function(){return n},Xe:function(){return o},pX:function(){return r}});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},801:function(e,t,i){function r(e,t,i){return e?t(e):i?.(e)}i.d(t,{g:function(){return r}})},9455:function(e,t,i){i.d(t,{$:function(){return o}});var r=i(3692),n=i(875);const o=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),e.type!==n.pX.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.it)e in t||(i.remove(e),this.it.delete(e));for(const e in t){const r=!!t[e];r===this.it.has(e)||this.st?.has(e)||(r?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return r.Jb}})},3959:function(e,t,i){i.d(t,{V:function(){return s}});var r=i(3692),n=i(875);const o="important",a=" !"+o,s=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),e.type!==n.pX.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const r=e[i];return null==r?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(t)),this.render(t);for(const e of this.ut)null==t[e]&&(this.ut.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const r=t[e];if(null!=r){this.ut.add(e);const t="string"==typeof r&&r.endsWith(a);e.includes("-")||t?i.setProperty(e,t?r.slice(0,-11):r,t?o:""):i[e]=r}}return r.Jb}})}}]);