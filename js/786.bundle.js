/*! For license information please see 786.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[786],{6786:function(t,e,i){i.r(e),i.d(e,{GalleryCarouselComponent:function(){return a}});var r=i(1293),s=i(3129),n=i(9455),o=function(t,e,i,r){var s,n=arguments.length,o=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends r.oi{constructor(){super(...arguments),this.smoothDiametralTransition=!1,this.current=1,this.frameGap=20,this.animationDuration=500,this.showArrows=!1,this.showToggles=!1,this._itemsLength=0,this._isAnimating=!1}static{this.styles=r.iv`
		.wrap {
			position: relative;
		}

		.gallery {
			position: relative;
			overflow: hidden;
			width: 100%;
			height: 100%;
		}

		.gallery-list {
			position: relative;
			width: inherit;
			height: inherit;
			margin: 0;
			padding: 0;
			list-style-type: none;
			font-size: 0;
			white-space: nowrap;
			line-height: 1;
			z-index: 10;
		}

		.gallery-item {
			display: inline-block;
			width: 100%;
			height: 100%;
		}

		.gallery-toggles {
			position: relative;
			z-index: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style-type: none;
			padding: 0;
			gap: 0.3rem;
		}

		.gallery-toggle {
			width: 10px;
			height: 10px;
			cursor: pointer;
			border: 1px solid #e2e2e2;
			border-radius: 50%;
		}

		.gallery-toggle--active {
			background-color: #2390bb;
		}

		.gallery-controls {
			position: absolute;
			z-index: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			left: -10%;
			right: -10%;
			top: 0;
			bottom: 0;
		}

		.gallery-controls__next-button {
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 7.5px 0 7.5px 13px;
			border-color: transparent transparent transparent #fff;
			background: none;
			cursor: pointer;
		}

		.gallery-controls__previous-button {
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 7.5px 13px 7.5px 0;
			border-color: transparent #fff transparent transparent;
			background: none;
			cursor: pointer;
		}
	`}firstUpdated(){const t=this._carouselItems;this._itemsLength=t.length,this._galleryList.style.left=-100*this.current+"%",t[0].before(t[t.length-1].cloneNode(!0)),t[t.length-1].after(t[0].cloneNode(!0))}checkCurrentSlide(t){return 0===t||t>this._itemsLength?0===t?this._itemsLength:1:t}slideTo(t,e){const i=this._galleryList;this._isAnimating=!0;const r=new Date;this.interval=window.setInterval((()=>{let s=((new Date).getTime()-r.getTime())/this.animationDuration;s>1&&(s=1),i.style.left=t+Math.abs(e-t)*s**2*(t>e?-1:1)+"%",1===s&&(clearInterval(this.interval),this._isAnimating=!1,this.current=this.checkCurrentSlide(this.current),this._galleryList.style.left=-100*this.current+"%")}),this.frameGap)}changeCurrentSlide(t){if(this._itemsLength<=1)return;this.smoothDiametralTransition||(t=this.checkCurrentSlide(t));const e=parseInt(this._galleryList.style.left,10)||0,i=-100*t;this._isAnimating||e===i||(this.current=t,this.slideTo(e,i))}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.interval)}render(){return r.dy`<div class="wrap">
			<div class="gallery">
				<ul class="gallery-list">
					<slot></slot>
				</ul>
			</div>
			${this.showArrows?r.dy`<div class="gallery-controls">
							<button
								class="gallery-controls__previous-button"
								@click="${()=>{this.changeCurrentSlide(this.current-1)}}"
							></button>
							<button
								class="gallery-controls__next-button"
								@click="${()=>{this.changeCurrentSlide(this.current+1)}}"
							></button>
					  </div>`:""}
			</div>
			${0!==this._itemsLength&&this.showToggles?r.dy`<ul class="gallery-toggles">
							${Array.from({length:this._itemsLength},((t,e)=>r.dy`<li
										class="gallery-toggle ${(0,n.$)({"gallery-toggle--active":this.current-1===e})}"
										@click="${()=>{this.changeCurrentSlide(e+1)}}"
									></li>`))}
					  </ul>`:""}
		</div>`}};o([(0,s.Cb)({type:Boolean}),l("design:type",Object)],a.prototype,"smoothDiametralTransition",void 0),o([(0,s.Cb)({type:Number}),l("design:type",Object)],a.prototype,"current",void 0),o([(0,s.Cb)({type:Number}),l("design:type",Object)],a.prototype,"frameGap",void 0),o([(0,s.Cb)({type:Number}),l("design:type",Object)],a.prototype,"animationDuration",void 0),o([(0,s.Cb)({type:Boolean}),l("design:type",Object)],a.prototype,"showArrows",void 0),o([(0,s.Cb)({type:Boolean}),l("design:type",Object)],a.prototype,"showToggles",void 0),o([(0,s.NH)({flatten:!0}),l("design:type",Array)],a.prototype,"_carouselItems",void 0),o([(0,s.IO)(".gallery-list"),l("design:type",HTMLElement)],a.prototype,"_galleryList",void 0),o([(0,s.IO)(".gallery"),l("design:type",HTMLElement)],a.prototype,"_galleryWrap",void 0),o([(0,s.SB)(),l("design:type",Object)],a.prototype,"_itemsLength",void 0),o([(0,s.SB)(),l("design:type",Object)],a.prototype,"_isAnimating",void 0),a=o([(0,s.Mo)("gallery-carousel-component")],a)},875:function(t,e,i){i.d(e,{XM:function(){return s},Xe:function(){return n},pX:function(){return r}});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},9455:function(t,e,i){i.d(e,{$:function(){return n}});var r=i(3692),s=i(875);const n=(0,s.XM)(class extends s.Xe{constructor(t){if(super(t),t.type!==s.pX.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const r=!!e[t];r===this.it.has(t)||this.st?.has(t)||(r?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return r.Jb}})}}]);