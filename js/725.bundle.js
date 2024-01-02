/*! For license information please see 725.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[725,30],{22:function(e,t,i){i.r(t),i.d(t,{CustomVideoComponent:function(){return v}});var n=i(1293),o=i(3129),r=i(1030),s=i.p+"img/play.png",a=i.p+"img/pause.png",l=i.p+"img/reset.png",c=i.p+"img/volume.png",u=i(9850),d=i(3959),p=i(7332),h=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let v=class extends n.oi{constructor(){super(...arguments),this._isVideoPlaying=!1,this._isMute=!1}static{this.styles=n.iv`
		.wrap {
			position: relative;
			width: 100%;
			height: 100%;
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
	`}onVideoEnded(){this._isVideoPlaying=!1}onVideoPlaying({timeRange:e,video:t}=this.getWorkingData()){this._isVideoPlaying||(this._isVideoPlaying=!0,this.videoCheckInterval??=window.setInterval((()=>{e.label=(0,p.toMinutesSeconds)(t.currentTime),e.changeValue(t.currentTime)}),50))}resetVideoTime({timeRange:e,video:t}=this.getWorkingData()){this._isVideoPlaying&&(this._isVideoPlaying=!1,t.currentTime=0,t.pause(),e._value=0)}startVideo({video:e}=this.getWorkingData()){this._isVideoPlaying||e.play().catch((e=>{console.debug(e)}))}stopVideo({video:e}=this.getWorkingData()){this._isVideoPlaying&&(e.pause(),window.clearInterval(this.videoCheckInterval),this._isVideoPlaying=!1,this.videoCheckInterval=void 0)}resetVideo(e=this.getWorkingData()){e.timeRange.changeValue(0),e.timeRange.label=(0,p.toMinutesSeconds)(0),e.video.currentTime=0,this.stopVideo(e)}setVideoSecond(e){const{video:t,timeRange:i}=this.getWorkingData();i._value=e,i.label=(0,p.toMinutesSeconds)(e),t.currentTime=e}toggleMute({video:e}=this.getWorkingData()){this._isMute&&void 0!==this._previousVideoVolume?(this._isMute=!1,e.volume=this._previousVideoVolume):(this._isMute=!0,this._previousVideoVolume=e.volume,e.volume=0),this._volumeRangeInput.changeValue(e.volume)}getWorkingData(){const[e]=this._videoElement;return(0,u.assertDevOnly)(e instanceof HTMLVideoElement),{video:e,volumeRange:this._volumeRangeInput,timeRange:this._timeRangeInput}}firstUpdated(){const{video:e,volumeRange:t,timeRange:i}=this.getWorkingData();e.load(),e.onloadeddata=()=>{e.removeAttribute("controls"),i.maximum=e.duration,e.addEventListener("ended",(()=>{this.onVideoEnded()})),e.addEventListener("playing",(()=>{this.onVideoPlaying({video:e,volumeRange:t,timeRange:i})})),i._onUpdateListener=e=>{this.setVideoSecond(e)},t._onUpdateListener=i=>{t.changeValue(i),e.volume=i}}}disconnectedCallback(){window.clearInterval(this.videoCheckInterval),super.disconnectedCallback()}render(){return n.dy`<div class="wrap">
			<div class="video">
				<slot></slot>
			</div>
			<div class="controls">
				<range-input-component id="volume-range-input" step="0.01" defaultValue="1" maximum="1" hideValue></range-input-component>
				<range-input-component id="time-range-input" step="0.01" label="00:00" hideValue allSameLine></range-input-component>
				<ul class="controls-buttons">
					<li
						class="controls-button"
						@click="${()=>{this.startVideo()}}"
						style=${(0,d.V)({display:this._isVideoPlaying?"none":"block"})}
					>
						<button class="controls-button__clickable-button">
							<img alt="Play" src="${s}" class="controls-button__image" />
						</button>
					</li>
					<li
						class="controls-button"
						@click="${()=>{this.stopVideo()}}"
						style=${(0,d.V)({display:this._isVideoPlaying?"block":"none"})}
					>
						<button class="controls-button__clickable-button">
							<img alt="Pause" src="${a}" class="controls-button__image" />
						</button>
					</li>
					<li class="controls-button" @click="${()=>{this.resetVideo()}}">
						<button class="controls-button__clickable-button">
							<img alt="Reset" src="${l}" class="controls-button__image" />
						</button>
					</li>
					<li class="controls-button" @click="${()=>{this.toggleMute()}}">
						<button class="controls-button__clickable-button">
							<img alt="Mute" src="${c}" class="controls-button__image" />
						</button>
					</li>
				</ul>
			</div>
		</div>`}};h([(0,o.SB)(),g("design:type",Object)],v.prototype,"_isVideoPlaying",void 0),h([(0,o.SB)(),g("design:type",Object)],v.prototype,"_isMute",void 0),h([(0,o.SB)(),g("design:type",Number)],v.prototype,"_previousVideoVolume",void 0),h([(0,o.NH)(),g("design:type",Array)],v.prototype,"_videoElement",void 0),h([(0,o.IO)("#volume-range-input"),g("design:type",r.RangeInputComponent)],v.prototype,"_volumeRangeInput",void 0),h([(0,o.IO)("#time-range-input"),g("design:type",r.RangeInputComponent)],v.prototype,"_timeRangeInput",void 0),v=h([(0,o.Mo)("custom-video-component")],v)},1030:function(e,t,i){i.r(t),i.d(t,{RangeInputComponent:function(){return h}});var n=i(1293),o=i(3129),r=i(9850),s=i(3959),a=i(4473);const l=n.iv`
  width: var(--thumbSize, 15px);
  height: var(--thumbSize, 15px);
  background-color: var(--thumbColor, #f50);
  border-radius: 50%;
  border: none;
  transition: 0.35s ease-in-out;
`;var c=i(801),u=i(9455),d=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends n.oi{constructor(){super(...arguments),this.uiRangeID=crypto.randomUUID(),this.minimum=0,this.maximum=100,this.defaultValue=0,this.step=1,this.ticks=[],this.label="",this.thumbSize="15px",this.trackColor="#ccc",this.thumbColor="#f50",this.hoverColor=a.defaultHoverColor,this.activeColor=a.defaultActiveColor,this.valueSize="25px",this.hideValue=!1,this.allSameLine=!1,this._value=0,this._gradientStyle={}}setGradientStyle(){const e=this._value/this.maximum*100;this._gradientStyle={background:`linear-gradient(to right, ${this.thumbColor} ${e}%, ${this.trackColor} ${e}%)`}}onValueChange(e){(0,r.assertDevOnly)(e.target instanceof HTMLInputElement),this._value=Number(e.target.value),this.setGradientStyle(),this._onUpdateListener?.(this._value)}changeValue(e){this._value=e,this.rangeSlider.then((t=>t.value=String(e))).catch((e=>{console.error(e)})),this.setGradientStyle()}connectedCallback(){super.connectedCallback(),this.boundEventListener=e=>{this.onValueChange(e)},this._value=this.defaultValue,this.rangeSlider.then((e=>{this.setGradientStyle(),e.addEventListener("input",this.boundEventListener)})).catch((e=>{console.error(e)}))}disconnectedCallback(){this.rangeSlider.then((e=>{e.removeEventListener("input",this.boundEventListener)})).catch((e=>{console.error(e)})),super.disconnectedCallback()}render(){return n.dy`
			<div class="wrap" style="${["thumbSize","trackColor","thumbColor","hoverColor","activeColor","valueSize"].map((e=>`--${String(e)}: ${String(this[e])}`)).join("; ")}">
				<div class="range-slider ${(0,u.$)({"range-slider--one-lined":this.allSameLine})}">
					<label class="range-slider__label" for="${this.uiRangeID}">${this.label}</label>
					<input
						type="range"
						min="${this.minimum}"
						max="${this.maximum}"
						value="${this._value}"
						id="${this.uiRangeID}"
						step="${this.step}"
						class="range-slider__input"
						style=${(0,s.V)(this._gradientStyle)}
					/>
					${this.ticks.length?n.dy`
								<ul class="range-slider-ticks">
									${this.ticks.map((e=>n.dy`<li class="range-slider-ticks__tick" style="--value: ${e}%">${e}</li>`))}
								</ul>
						  `:""}
				</div>
				${(0,c.g)(!this.hideValue,(()=>n.dy`<span class="value">${this._value}</span>`))}
			</div>
		`}static{this.styles=n.iv`
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
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${n.iv`defaultHoverColor`});
		}

		.range-slider__input::-moz-range-thumb:hover {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${n.iv`defaultHoverColor`});
		}

		.range-slider__input:active::-webkit-slider-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${n.iv`defaultActiveColor`});
		}

		.range-slider__input:active::-moz-range-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${n.iv`defaultActiveColor`});
		}

		.range-slider__input:focus::-webkit-slider-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${n.iv`defaultActiveColor`});
		}

		.range-slider__input:focus::-moz-range-thumb {
			box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${n.iv`defaultActiveColor`});
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
	`}};d([(0,o.Cb)({type:Number}),p("design:type",Object)],h.prototype,"minimum",void 0),d([(0,o.Cb)({type:Number}),p("design:type",Object)],h.prototype,"maximum",void 0),d([(0,o.Cb)({type:Number}),p("design:type",Object)],h.prototype,"defaultValue",void 0),d([(0,o.Cb)({type:Number}),p("design:type",Object)],h.prototype,"step",void 0),d([(0,o.Cb)({type:Array,converter:{fromAttribute:e=>e?e.split(",").map(Number):[],toAttribute:e=>e.join(",")}}),p("design:type",Array)],h.prototype,"ticks",void 0),d([(0,o.Cb)({type:String}),p("design:type",Object)],h.prototype,"label",void 0),d([(0,o.Cb)({type:String}),p("design:type",Object)],h.prototype,"thumbSize",void 0),d([(0,o.Cb)({type:String}),p("design:type",Object)],h.prototype,"trackColor",void 0),d([(0,o.Cb)({type:String}),p("design:type",Object)],h.prototype,"thumbColor",void 0),d([(0,o.Cb)({type:String}),p("design:type",Object)],h.prototype,"hoverColor",void 0),d([(0,o.Cb)({type:String}),p("design:type",Object)],h.prototype,"activeColor",void 0),d([(0,o.Cb)({type:String}),p("design:type",Object)],h.prototype,"valueSize",void 0),d([(0,o.Cb)({type:Boolean}),p("design:type",Object)],h.prototype,"hideValue",void 0),d([(0,o.Cb)({type:Boolean}),p("design:type",Object)],h.prototype,"allSameLine",void 0),d([(0,o.SB)(),p("design:type",Object)],h.prototype,"_value",void 0),d([(0,o.SB)(),p("design:type",Object)],h.prototype,"_gradientStyle",void 0),d([(0,o.SB)(),p("design:type",Function)],h.prototype,"_onUpdateListener",void 0),d([(0,o.GC)(".range-slider__input"),p("design:type",Promise)],h.prototype,"rangeSlider",void 0),h=d([(0,o.Mo)("range-input-component")],h)},875:function(e,t,i){i.d(t,{XM:function(){return o},Xe:function(){return r},pX:function(){return n}});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>(...t)=>({_$litDirective$:e,values:t});class r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},801:function(e,t,i){function n(e,t,i){return e?t(e):i?.(e)}i.d(t,{g:function(){return n}})},9455:function(e,t,i){i.d(t,{$:function(){return r}});var n=i(3692),o=i(875);const r=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.it)e in t||(i.remove(e),this.it.delete(e));for(const e in t){const n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return n.Jb}})},3959:function(e,t,i){i.d(t,{V:function(){return a}});var n=i(3692),o=i(875);const r="important",s=" !"+r,a=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const n=e[i];return null==n?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(t)),this.render(t);for(const e of this.ut)null==t[e]&&(this.ut.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const n=t[e];if(null!=n){this.ut.add(e);const t="string"==typeof n&&n.endsWith(s);e.includes("-")||t?i.setProperty(e,t?n.slice(0,-11):n,t?r:""):i[e]=n}}return n.Jb}})}}]);