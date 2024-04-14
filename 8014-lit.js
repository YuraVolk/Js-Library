/*! For license information please see 8014-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[8014],{8014:(t,e,i)=>{i.r(e),i.d(e,{ColorPickerComponent:()=>H});var r=i(2618),s=i(4791),o=i(1956),n=i(6752);const a=t=>(...e)=>({_$litDirective$:t,values:e});class l{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const c="important",h=" !"+c,d=a(class extends l{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(h);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?c:""):i[t]=r}}return n.c0}});var p=i(6538);const u="\n  width: var(--thumbSize, 15px);\n  height: var(--thumbSize, 15px);\n  background-color: var(--thumbColor, #f50);\n  border-radius: 50%;\n  border: none;\n  transition: 0.35s ease-in-out;\n";function g(t,e,i){return t?e(t):i?.(t)}const v=a(class extends l{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return n.c0}});class y extends Event{constructor(t){super("change"),this.value=t}}var b=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},m=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class f extends r.WF{constructor(){super(...arguments),this.uiRangeID=crypto.randomUUID(),this.minimum=0,this.maximum=100,this.defaultValue=0,this.step=1,this.ticks=[],this.label="",this.thumbSize="15px",this.trackColor="#ccc",this.thumbColor="#f50",this.hoverColor=p.defaultHoverColor,this.activeColor=p.defaultActiveColor,this.valueSize="25px",this.hideValue=!1,this.allSameLine=!1,this._value=0,this._gradientStyle={}}set dynamicValue(t){this.changeValue(t)}setGradientStyle(){const t=this._value/this.maximum*100;this._gradientStyle={background:`linear-gradient(to right, ${this.thumbColor} ${String(t)}%, ${this.trackColor} ${String(t)}%)`}}onValueChange(t){(0,o.assertDevOnly)(t.target instanceof HTMLInputElement),this._value=Number(t.target.value),this.setGradientStyle(),this.dispatchEvent(new y(this._value))}changeValue(t){const e=this.rangeSlider;e&&(this._value=t,e.value=String(t),this.setGradientStyle())}connectedCallback(){super.connectedCallback(),this._value=this.defaultValue,this.setGradientStyle()}render(){return r.qy`
			<div class="wrap" style="${["thumbSize","trackColor","thumbColor","hoverColor","activeColor","valueSize"].map((t=>`--${String(t)}: ${String(this[t])}`)).join("; ")}">
				<div class="range-slider ${v({"range-slider--one-lined":this.allSameLine})}">
					<label class="range-slider__label" for="${this.uiRangeID}">${this.label}</label>
					<input
						type="range"
						min="${this.minimum}"
						max="${this.maximum}"
						value="${this.defaultValue}"
						id="${this.uiRangeID}"
						step="${this.step}"
						class="range-slider__input"
						style=${d(this._gradientStyle)}
						@input=${t=>{this.onValueChange(t)}}
					/>
					${g(this.ticks.length,(()=>r.qy`<ul class="range-slider-ticks">
								${this.ticks.map((t=>r.qy`<li class="range-slider-ticks__tick" style="--value: ${t}%">${t}</li>`))}
							</ul>`))}
				</div>
				${g(!this.hideValue,(()=>r.qy`<span class="value">${this._value}</span>`))}
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
			${(0,r.iz)(u)};
		}

		.range-slider__input::-moz-range-thumb {
			${(0,r.iz)(u)};
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
	`}}b([(0,s.MZ)({type:Number}),m("design:type",Object)],f.prototype,"minimum",void 0),b([(0,s.MZ)({type:Number}),m("design:type",Object)],f.prototype,"maximum",void 0),b([(0,s.MZ)({type:Number}),m("design:type",Object)],f.prototype,"defaultValue",void 0),b([(0,s.MZ)({type:Number}),m("design:type",Object)],f.prototype,"step",void 0),b([(0,s.MZ)({type:Array}),m("design:type",Array)],f.prototype,"ticks",void 0),b([(0,s.MZ)({type:String}),m("design:type",Object)],f.prototype,"label",void 0),b([(0,s.MZ)({type:String}),m("design:type",Object)],f.prototype,"thumbSize",void 0),b([(0,s.MZ)({type:String}),m("design:type",Object)],f.prototype,"trackColor",void 0),b([(0,s.MZ)({type:String}),m("design:type",Object)],f.prototype,"thumbColor",void 0),b([(0,s.MZ)({type:String}),m("design:type",Object)],f.prototype,"hoverColor",void 0),b([(0,s.MZ)({type:String}),m("design:type",Object)],f.prototype,"activeColor",void 0),b([(0,s.MZ)({type:String}),m("design:type",Object)],f.prototype,"valueSize",void 0),b([(0,s.MZ)({type:Boolean}),m("design:type",Object)],f.prototype,"hideValue",void 0),b([(0,s.MZ)({type:Boolean}),m("design:type",Object)],f.prototype,"allSameLine",void 0),b([(0,s.wk)(),m("design:type",Object)],f.prototype,"_value",void 0),b([(0,s.wk)(),m("design:type",Object)],f.prototype,"_gradientStyle",void 0),b([(0,s.P)(".range-slider__input"),m("design:type",HTMLInputElement)],f.prototype,"rangeSlider",void 0);var _=i(2086);const{I:$}=n.ge,x=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),x(t,e);return!0},w=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},S=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),A(e)}};function k(t){void 0!==this._$AN?(w(this),this._$AM=t,S(this)):this._$AM=t}function C(t,e=!1,i=0){const r=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(r))for(let t=i;t<r.length;t++)x(r[t],!1),w(r[t]);else null!=r&&(x(r,!1),w(r));else x(this,t)}const A=t=>{2==t.type&&(t._$AP??=C,t._$AQ??=k)};class z extends l{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),S(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(x(this,t),w(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class j{}const O=new WeakMap,M=a(class extends z{render(t){return n.s6}update(t,[e]){const i=e!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),n.s6}rt(t){if("function"==typeof this.Y){const e=this.ht??globalThis;let i=O.get(e);void 0===i&&(i=new WeakMap,O.set(e,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?O.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var R=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},Z=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};window.customElements.define("range-input-component",f);class H extends r.WF{constructor(){super(...arguments),this.imageUrl="",this.width=245,this.height=245,this.backgroundColor=[0,0,0,1],this.rgba=[0,0,0,1],this._canvasRef=new j}static{this.styles=r.AH`
		.wrap {
			all: inherit;
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
	`}convertOpacityToBackground(){const t=1-this.rgba[3]/100,e=this.rgba[3]/100;return this.rgba.map(((i,r)=>3===r?1:Math.round(t*this.backgroundColor[r]+e*i*100)))}getHex(){return"#"+this.convertOpacityToBackground().slice(0,-1).map((t=>Number(t).toString(16).padStart(2,"0"))).join("")}getRGB(){return`rgb(${this.convertOpacityToBackground().slice(0,-1).join(", ")})`}getRGBA(){return`rgba(${this.rgba.join(", ")})`}get context(){(0,o.assertNonUndefined)(this._canvasRef.value);const t=this._canvasRef.value.getContext("2d",{willReadFrequently:!0});return(0,o.assertNonUndefined)(t),t}onOpacityChange(t){const e=[...this.rgba.slice(0,-1),t];(0,_.verifyValidRGBAColor)(e)&&(this.rgba=e)}onCanvasMouseDown(t){const e=[...this.context.getImageData(t.offsetX,t.offsetY,1,1).data.slice(0,-1),this.rgba[3]];(0,_.verifyValidRGBAColor)(e)&&(this.rgba=e)}firstUpdated(){const t=new Image(this.width,this.height);t.src=this.imageUrl,t.onload=()=>{this.context.drawImage(t,0,0,t.width,t.height)}}render(){return r.qy`
			<div
				class="wrap"
				style=${d({"--width":`${String(this.width)}px`,"--height":`${String(this.height)}px`})}
			>
				<div class="color-picker-wrap">
					<div class="color-picker">
						<canvas
							class="color-picker__canvas"
							width="${this.width}"
							height="${this.height}"
							${M(this._canvasRef)}
							@mousedown=${t=>{this.onCanvasMouseDown(t)}}
						></canvas>
					</div>
				</div>
				<div class="info">
					<div class="current-color-wrap">
						<div class="current-color" style=${d({backgroundColor:this.getRGB()})}></div>
					</div>
					<range-input-component
						id="opacity-range"
						maximum="1"
						step="0.01"
						.ticks=${[0,100]}
						label="Opacity:"
						defaultValue="1"
						@change=${t=>{this.onOpacityChange(t.value)}}
					></range-input-component>
					<p>Hex code: ${this.getHex()}</p>
					<p>RGBA: ${this.getRGBA()}</p>
					<p>RGB: ${this.getRGB()}</p>
				</div>
			</div>
		`}}R([(0,s.MZ)({type:String}),Z("design:type",Object)],H.prototype,"imageUrl",void 0),R([(0,s.MZ)({type:Number}),Z("design:type",Object)],H.prototype,"width",void 0),R([(0,s.MZ)({type:Number}),Z("design:type",Object)],H.prototype,"height",void 0),R([(0,s.MZ)({type:Array}),Z("design:type",Array)],H.prototype,"backgroundColor",void 0),R([(0,s.MZ)({type:Array}),Z("design:type",Array)],H.prototype,"rgba",void 0)}}]);