/*! For license information please see 3231-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[3231],{309:(e,t,i)=>{i.d(t,{A:()=>r});class r extends Event{constructor(e){super("change"),this.value=e}}},3231:(e,t,i)=>{i.r(t),i.d(t,{RangeInputComponent:()=>h});var r=i(2618),a=i(4791),s=i(1956),n=i(754),o=i(4198),l=i(302),c=i(2627),u=i(309),d=function(e,t,i,r){var a,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class h extends r.WF{constructor(){super(...arguments),this.uiRangeID=crypto.randomUUID(),this.minimum=0,this.maximum=100,this.defaultValue=0,this.step=1,this.ticks=[],this.label="",this.thumbSize="15px",this.trackColor="#ccc",this.thumbColor="#f50",this.hoverColor=o.LO,this.activeColor=o.NP,this.valueSize="25px",this.hideValue=!1,this.allSameLine=!1,this._value=0,this._gradientStyle={}}set dynamicValue(e){this.changeValue(e)}setGradientStyle(){const e=this._value/this.maximum*100;this._gradientStyle={background:`linear-gradient(to right, ${this.thumbColor} ${String(e)}%, ${this.trackColor} ${String(e)}%)`}}onValueChange(e){(0,s.assertDevOnly)(e.target instanceof HTMLInputElement),this._value=Number(e.target.value),this.setGradientStyle(),this.dispatchEvent(new u.A(this._value))}changeValue(e){const t=this.rangeSlider;t&&(this._value=e,t.value=String(e),this.setGradientStyle())}connectedCallback(){super.connectedCallback(),this._value=this.defaultValue,this.setGradientStyle()}render(){return r.qy`
			<div class="wrap" style="${["thumbSize","trackColor","thumbColor","hoverColor","activeColor","valueSize"].map((e=>`--${String(e)}: ${String(this[e])}`)).join("; ")}">
				<div class="range-slider ${(0,c.H)({"range-slider--one-lined":this.allSameLine})}">
					<label class="range-slider__label" for="${this.uiRangeID}">${this.label}</label>
					<input
						type="range"
						min="${this.minimum}"
						max="${this.maximum}"
						value="${this.defaultValue}"
						id="${this.uiRangeID}"
						step="${this.step}"
						class="range-slider__input"
						style=${(0,n.W)(this._gradientStyle)}
						@input=${e=>{this.onValueChange(e)}}
					/>
					${(0,l.z)(this.ticks.length,(()=>r.qy`<ul class="range-slider-ticks">
								${this.ticks.map((e=>r.qy`<li class="range-slider-ticks__tick" style="--value: ${e}%">${e}</li>`))}
							</ul>`))}
				</div>
				${(0,l.z)(!this.hideValue,(()=>r.qy`<span class="value">${this._value}</span>`))}
			</div>
		`}static{this.styles=r.AH`
		:host {
			display: block;
		}

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
			${(0,r.iz)(o.NS)};
		}

		.range-slider__input::-moz-range-thumb {
			${(0,r.iz)(o.NS)};
		}

		.range-slider__input::-webkit-slider-thumb:hover {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${r.AH`defaultHoverColor`});
		}

		.range-slider__input::-moz-range-thumb:hover {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${r.AH`defaultHoverColor`});
		}

		.range-slider__input:active::-webkit-slider-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r.AH`defaultActiveColor`});
		}

		.range-slider__input:active::-moz-range-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r.AH`defaultActiveColor`});
		}

		.range-slider__input:focus::-webkit-slider-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r.AH`defaultActiveColor`});
		}

		.range-slider__input:focus::-moz-range-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${r.AH`defaultActiveColor`});
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
	`}}d([(0,a.MZ)({type:Number}),p("design:type",Object)],h.prototype,"minimum",void 0),d([(0,a.MZ)({type:Number}),p("design:type",Object)],h.prototype,"maximum",void 0),d([(0,a.MZ)({type:Number}),p("design:type",Object)],h.prototype,"defaultValue",void 0),d([(0,a.MZ)({type:Number}),p("design:type",Object)],h.prototype,"step",void 0),d([(0,a.MZ)({type:Array}),p("design:type",Array)],h.prototype,"ticks",void 0),d([(0,a.MZ)({type:String}),p("design:type",Object)],h.prototype,"label",void 0),d([(0,a.MZ)({type:String}),p("design:type",Object)],h.prototype,"thumbSize",void 0),d([(0,a.MZ)({type:String}),p("design:type",Object)],h.prototype,"trackColor",void 0),d([(0,a.MZ)({type:String}),p("design:type",Object)],h.prototype,"thumbColor",void 0),d([(0,a.MZ)({type:String}),p("design:type",Object)],h.prototype,"hoverColor",void 0),d([(0,a.MZ)({type:String}),p("design:type",Object)],h.prototype,"activeColor",void 0),d([(0,a.MZ)({type:String}),p("design:type",Object)],h.prototype,"valueSize",void 0),d([(0,a.MZ)({type:Boolean}),p("design:type",Object)],h.prototype,"hideValue",void 0),d([(0,a.MZ)({type:Boolean}),p("design:type",Object)],h.prototype,"allSameLine",void 0),d([(0,a.wk)(),p("design:type",Object)],h.prototype,"_value",void 0),d([(0,a.wk)(),p("design:type",Object)],h.prototype,"_gradientStyle",void 0),d([(0,a.P)(".range-slider__input"),p("design:type",HTMLInputElement)],h.prototype,"rangeSlider",void 0)},4198:(e,t,i)=>{i.d(t,{LO:()=>r.defaultHoverColor,NP:()=>r.defaultActiveColor,NS:()=>a});var r=i(6538);const a="\n  width: var(--thumbSize, 15px);\n  height: var(--thumbSize, 15px);\n  background-color: var(--thumbColor, #f50);\n  border-radius: 50%;\n  border: none;\n  transition: 0.35s ease-in-out;\n"},7804:(e,t,i)=>{i.d(t,{OA:()=>r,WL:()=>s,u$:()=>a});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=e=>(...t)=>({_$litDirective$:e,values:t});class s{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},6683:(e,t,i)=>{i.d(t,{H:()=>s});var r=i(6752),a=i(7804);const s=(0,a.u$)(class extends a.WL{constructor(e){if(super(e),e.type!==a.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return r.c0}})},2378:(e,t,i)=>{i.d(t,{W:()=>o});var r=i(6752),a=i(7804);const s="important",n=" !"+s,o=(0,a.u$)(class extends a.WL{constructor(e){if(super(e),e.type!==a.OA.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const r=e[i];return null==r?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const r=t[e];if(null!=r){this.ft.add(e);const t="string"==typeof r&&r.endsWith(n);e.includes("-")||t?i.setProperty(e,t?r.slice(0,-11):r,t?s:""):i[e]=r}}return r.c0}})},302:(e,t,i)=>{function r(e,t,i){return e?t(e):i?.(e)}i.d(t,{z:()=>r})},2627:(e,t,i)=>{i.d(t,{H:()=>r.H});var r=i(6683)},754:(e,t,i)=>{i.d(t,{W:()=>r.W});var r=i(2378)}}]);