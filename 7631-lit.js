/*! For license information please see 7631-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[7631],{4160:(e,t,i)=>{i.r(t),i.d(t,{CustomVideoComponent:()=>L});var o=i(2618),s=i(4791),n=i(1956),r=i(6752);const a=e=>(...t)=>({_$litDirective$:e,values:t});class l{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const d="important",c=" !"+d,u=a(class extends l{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(c);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?d:""):i[e]=o}}return r.c0}});var h=i(6538);const p="\n  width: var(--thumbSize, 15px);\n  height: var(--thumbSize, 15px);\n  background-color: var(--thumbColor, #f50);\n  border-radius: 50%;\n  border: none;\n  transition: 0.35s ease-in-out;\n";function v(e,t,i){return e?t(e):i?.(e)}const g=a(class extends l{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return r.c0}});class b extends Event{constructor(e){super("change"),this.value=e}}var m=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class _ extends o.WF{constructor(){super(...arguments),this.uiRangeID=crypto.randomUUID(),this.minimum=0,this.maximum=100,this.defaultValue=0,this.step=1,this.ticks=[],this.label="",this.thumbSize="15px",this.trackColor="#ccc",this.thumbColor="#f50",this.hoverColor=h.defaultHoverColor,this.activeColor=h.defaultActiveColor,this.valueSize="25px",this.hideValue=!1,this.allSameLine=!1,this._value=0,this._gradientStyle={}}set dynamicValue(e){this.changeValue(e)}setGradientStyle(){const e=this._value/this.maximum*100;this._gradientStyle={background:`linear-gradient(to right, ${this.thumbColor} ${String(e)}%, ${this.trackColor} ${String(e)}%)`}}onValueChange(e){(0,n.assertDevOnly)(e.target instanceof HTMLInputElement),this._value=Number(e.target.value),this.setGradientStyle(),this.dispatchEvent(new b(this._value))}changeValue(e){const t=this.rangeSlider;t&&(this._value=e,t.value=String(e),this.setGradientStyle())}connectedCallback(){super.connectedCallback(),this._value=this.defaultValue,this.setGradientStyle()}render(){return o.qy`
			<div class="wrap" style="${["thumbSize","trackColor","thumbColor","hoverColor","activeColor","valueSize"].map((e=>`--${String(e)}: ${String(this[e])}`)).join("; ")}">
				<div class="range-slider ${g({"range-slider--one-lined":this.allSameLine})}">
					<label class="range-slider__label" for="${this.uiRangeID}">${this.label}</label>
					<input
						type="range"
						min="${this.minimum}"
						max="${this.maximum}"
						value="${this.defaultValue}"
						id="${this.uiRangeID}"
						step="${this.step}"
						class="range-slider__input"
						style=${u(this._gradientStyle)}
						@input=${e=>{this.onValueChange(e)}}
					/>
					${v(this.ticks.length,(()=>o.qy`<ul class="range-slider-ticks">
								${this.ticks.map((e=>o.qy`<li class="range-slider-ticks__tick" style="--value: ${e}%">${e}</li>`))}
							</ul>`))}
				</div>
				${v(!this.hideValue,(()=>o.qy`<span class="value">${this._value}</span>`))}
			</div>
		`}static{this.styles=o.AH`
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
			${(0,o.iz)(p)};
		}

		.range-slider__input::-moz-range-thumb {
			${(0,o.iz)(p)};
		}

		.range-slider__input::-webkit-slider-thumb:hover {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${o.AH`defaultHoverColor`});
		}

		.range-slider__input::-moz-range-thumb:hover {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${o.AH`defaultHoverColor`});
		}

		.range-slider__input:active::-webkit-slider-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${o.AH`defaultActiveColor`});
		}

		.range-slider__input:active::-moz-range-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${o.AH`defaultActiveColor`});
		}

		.range-slider__input:focus::-webkit-slider-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${o.AH`defaultActiveColor`});
		}

		.range-slider__input:focus::-moz-range-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${o.AH`defaultActiveColor`});
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
	`}}m([(0,s.MZ)({type:Number}),y("design:type",Object)],_.prototype,"minimum",void 0),m([(0,s.MZ)({type:Number}),y("design:type",Object)],_.prototype,"maximum",void 0),m([(0,s.MZ)({type:Number}),y("design:type",Object)],_.prototype,"defaultValue",void 0),m([(0,s.MZ)({type:Number}),y("design:type",Object)],_.prototype,"step",void 0),m([(0,s.MZ)({type:Array}),y("design:type",Array)],_.prototype,"ticks",void 0),m([(0,s.MZ)({type:String}),y("design:type",Object)],_.prototype,"label",void 0),m([(0,s.MZ)({type:String}),y("design:type",Object)],_.prototype,"thumbSize",void 0),m([(0,s.MZ)({type:String}),y("design:type",Object)],_.prototype,"trackColor",void 0),m([(0,s.MZ)({type:String}),y("design:type",Object)],_.prototype,"thumbColor",void 0),m([(0,s.MZ)({type:String}),y("design:type",Object)],_.prototype,"hoverColor",void 0),m([(0,s.MZ)({type:String}),y("design:type",Object)],_.prototype,"activeColor",void 0),m([(0,s.MZ)({type:String}),y("design:type",Object)],_.prototype,"valueSize",void 0),m([(0,s.MZ)({type:Boolean}),y("design:type",Object)],_.prototype,"hideValue",void 0),m([(0,s.MZ)({type:Boolean}),y("design:type",Object)],_.prototype,"allSameLine",void 0),m([(0,s.wk)(),y("design:type",Object)],_.prototype,"_value",void 0),m([(0,s.wk)(),y("design:type",Object)],_.prototype,"_gradientStyle",void 0),m([(0,s.P)(".range-slider__input"),y("design:type",HTMLInputElement)],_.prototype,"rangeSlider",void 0);const f=i.p+"img/play.png",$=i.p+"img/pause.png",S=i.p+"img/reset.png",k=i.p+"img/volume.png";var x=i(8943);const{I:w}=r.ge,C=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),C(e,t);return!0},A=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},V=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),R(t)}};function M(e){void 0!==this._$AN?(A(this),this._$AM=e,V(this)):this._$AM=e}function z(e,t=!1,i=0){const o=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)C(o[e],!1),A(o[e]);else null!=o&&(C(o,!1),A(o));else C(this,e)}const R=e=>{2==e.type&&(e._$AP??=z,e._$AQ??=M)};class j extends l{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),V(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(C(this,e),A(this))}setValue(e){if((e=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class O{}const N=new WeakMap,Z=a(class extends j{render(e){return r.s6}update(e,[t]){const i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r.s6}rt(e){if("function"==typeof this.Y){const t=this.ht??globalThis;let i=N.get(t);void 0===i&&(i=new WeakMap,N.set(t,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?N.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),T=e=>e??r.s6;var P=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},H=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};window.customElements.define("range-input-component",_);class L extends o.WF{constructor(){super(...arguments),this.autoplay=!1,this.muted=!1,this._isVideoPlaying=!1,this._isMuted=!1,this._currentTimeLabel=(0,x.toMinutesSeconds)(0),this._volume=1,this._videoRef=new O}static{this.styles=o.AH`
		:host {
			display: block;
			position: relative;
		}

		.video {
			width: inherit;
			height: inherit;
		}

		.controls {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			background-color: #e2e2e2;
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-around;
			height: 12.5%;
			padding: 4px;
			box-sizing: border-box;
		}

		.controls-buttons {
			display: flex;
			list-style-type: none;
			padding: 0;
			margin: 0;
			gap: 5%;
		}

		.control-button {
			display: block;
			height: 100%;
			cursor: pointer;
		}

		.controls-button__clickable-button {
			width: inherit;
			height: 100%;
			padding: 0;
			margin: 0;
			border: none;
			background: none;
			cursor: pointer;
		}

		.controls-button__image {
			width: inherit;
			height: inherit;
			cursor: pointer;
		}

		range-input-component {
			display: block;
		}

		#time-range-input {
			margin-left: 15px;
			color: #000;
		}

		#volume-range-input {
			width: 33px;
		}
	`}updateTrackInfo(){(0,n.assertNonUndefined)(this._videoRef.value),this._currentTimeLabel=(0,x.toMinutesSeconds)(this._videoRef.value.currentTime),this._current=this._videoRef.value.currentTime}startVideo(){this._videoRef.value?.play().then((()=>{this._isVideoPlaying=!0})).catch((e=>{console.debug(e)}))}stopVideo(){this._videoRef.value?.pause(),this._isVideoPlaying=!1}resetVideo(){this._videoRef.value&&(this._videoRef.value.currentTime=0),this.stopVideo()}toggleMute(){(0,n.assertNonUndefined)(this._videoRef.value),this._isMuted&&void 0!==this._previousVideoVolume?(this._isMuted=!1,this._videoRef.value.volume=this._previousVideoVolume):(this._isMuted=!0,this._previousVideoVolume=this._videoRef.value.volume,this._videoRef.value.volume=0),this._volume=this._videoRef.value.volume}setVideoSecond(e){(0,n.assertNonUndefined)(this._videoRef.value),this._videoRef.value.currentTime=e}setVolume(e){this._videoRef.value&&(this._videoRef.value.volume=e),this._volume=e}firstUpdated(){(0,n.assertNonUndefined)(this._videoRef.value),this._videoRef.value.append(...this._sourceElements),this._videoRef.value.load(),this._videoRef.value.onloadeddata=()=>{(0,n.assertNonUndefined)(this._videoRef.value),this.muted&&(this._videoRef.value.volume=0,this._isMuted=!0,this._previousVideoVolume=1,this.autoplay&&this.startVideo()),this._videoDuration=this._videoRef.value.duration}}render(){return o.qy`<div class="video">
				<video
					${Z(this._videoRef)}
					?muted=${this.muted}
					width=${T(this.width)}
					height=${T(this.height)}
					poster=${T(this.poster)}
					preload=${T(this.preload)}
					src=${T(this.src)}
					crossorigin=${T(this.crossorigin)}
					@timeupdate=${()=>{this.updateTrackInfo()}}
					@ended=${()=>{this.stopVideo()}}
				>
					<slot></slot>
				</video>
			</div>
			<div class="controls">
				<range-input-component
					id="volume-range-input"
					step="0.01"
					defaultValue="1"
					.dynamicValue=${this._volume}
					maximum="1"
					hideValue
					@change=${e=>{this.setVolume(e.value)}}
				></range-input-component>
				<range-input-component
					id="time-range-input"
					step="0.01"
					label=${this._currentTimeLabel}
					maximum=${T(this._videoDuration)}
					.dynamicValue=${this._current??0}
					hideValue
					allSameLine
					@change=${e=>{this.setVideoSecond(e.value)}}
				></range-input-component>
				<ul class="controls-buttons">
					<li
						class="controls-button"
						@click="${()=>{this.startVideo()}}"
						style=${u({display:this._isVideoPlaying?"none":"block"})}
					>
						<button class="controls-button__clickable-button">
							<img alt="Play" src="${f}" class="controls-button__image" />
						</button>
					</li>
					<li
						class="controls-button"
						@click="${()=>{this.stopVideo()}}"
						style=${u({display:this._isVideoPlaying?"block":"none"})}
					>
						<button class="controls-button__clickable-button">
							<img alt="Pause" src="${$}" class="controls-button__image" />
						</button>
					</li>
					<li
						class="controls-button"
						@click="${()=>{this.resetVideo()}}"
					>
						<button class="controls-button__clickable-button">
							<img alt="Reset" src="${S}" class="controls-button__image" />
						</button>
					</li>
					<li
						class="controls-button"
						@click="${()=>{this.toggleMute()}}"
					>
						<button class="controls-button__clickable-button">
							<img alt="Mute" src="${k}" class="controls-button__image" />
						</button>
					</li>
				</ul>
			</div>`}}P([(0,s.KN)({selector:"source"}),H("design:type",Array)],L.prototype,"_sourceElements",void 0),P([(0,s.MZ)({type:Boolean}),H("design:type",Object)],L.prototype,"autoplay",void 0),P([(0,s.MZ)({type:Boolean}),H("design:type",Object)],L.prototype,"muted",void 0),P([(0,s.MZ)({type:String}),H("design:type",String)],L.prototype,"crossorigin",void 0),P([(0,s.MZ)({type:String}),H("design:type",String)],L.prototype,"poster",void 0),P([(0,s.MZ)({type:String}),H("design:type",String)],L.prototype,"preload",void 0),P([(0,s.MZ)({type:String}),H("design:type",String)],L.prototype,"src",void 0),P([(0,s.MZ)({type:Number}),H("design:type",Number)],L.prototype,"height",void 0),P([(0,s.MZ)({type:Number}),H("design:type",Number)],L.prototype,"width",void 0),P([(0,s.wk)(),H("design:type",Object)],L.prototype,"_isVideoPlaying",void 0),P([(0,s.wk)(),H("design:type",Object)],L.prototype,"_isMuted",void 0),P([(0,s.wk)(),H("design:type",Number)],L.prototype,"_videoDuration",void 0),P([(0,s.wk)(),H("design:type",Object)],L.prototype,"_currentTimeLabel",void 0),P([(0,s.wk)(),H("design:type",Number)],L.prototype,"_current",void 0),P([(0,s.wk)(),H("design:type",Object)],L.prototype,"_volume",void 0)}}]);