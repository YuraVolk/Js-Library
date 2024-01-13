"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[402],{1402:function(t,e,r){r.r(e),r.d(e,{BackfaceCarouselComponent:function(){return l}});var o=r(1293),s=r(3129),i=r(8116),n=function(t,e,r,o){var s,i=arguments.length,n=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i<3?s(n):i>3?s(e,r,n):s(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends o.oi{constructor(){super(...arguments),this._elements=[],this._currentItem=0,this.isHorizontal=!0}static{this.styles=o.iv`
    .carousel {
      display: flex;
      width: auto;
      height: 100%;
      flex-direction: column;
      align-items: center;
      perspective: 500px;
      overflow: hidden;
      padding: 20px;
    }

    .carousel--vertical {
      margin-top: 10%;
      height: 33vw;
      overflow: visible;
    }

    .carousel * {
      margin: 0 auto;
      flex: 0 0 auto;
    }

    .carousel-items {
      width: 40%;
      margin: 0;
      transform-style: preserve-3d;
      transition: all 0.5s;
      padding: 0;
      list-style-type: none;
    }

    .carousel-item {
      position: relative;
      width: 100%;
      height: auto;
      padding: 0;
      opacity: 0.9999;
      backface-visibility: hidden;
    }

    .carousel-item:not(:first-of-type) {
      position: absolute;
      left: 0;
      top: 0;
      margin: 0 auto;
      padding: 0 auto;
    }

    .carousel-item > * {
      width: 100%;
      height: 100%;
    }

    ${i.I}
  `}connectedCallback(){super.connectedCallback(),this._elements=Array.from(this.children),this.boundEventListener=this.setupCarousel.bind(this),window.addEventListener("resize",this.boundEventListener)}disconnectedCallback(){super.disconnectedCallback(),this._elements.length=0,window.removeEventListener("resize",this.boundEventListener)}nextSlide(){this.rotateCarousel(this._currentItem+1)}previousSlide(){this.rotateCarousel(this._currentItem-1)}rotateCarousel(t){const e=Array.from(this._carouselItem).length,r=2*Math.PI/e;this._carouselWrap.style.transform=`rotate${this.isHorizontal?"Y":"X"}(${t*-r}rad)`,this._currentItem=t}switchPerspective(){this.isHorizontal=!this.isHorizontal,this.setupCarousel()}firstUpdated(){this.setupCarousel()}setupCarousel(){const t=Array.from(this._carouselItem),e=t.length,r=2*Math.PI/e,o=parseFloat(getComputedStyle(t[0])[this.isHorizontal?"width":"height"])/(2*Math.tan(Math.PI/e));this._carouselWrap.style.transformOrigin=`50% 50% ${-o}px`;for(let s=0;s<e;s++)t[s].style.padding="0",0!==s&&(t[s].style.transformOrigin=`50% 50% ${-o}px`,t[s].style.transform=`rotate${this.isHorizontal?"Y":"X"}(${s*r}rad)`);this.rotateCarousel(this._currentItem)}render(){return o.dy`
      <div>
        <div class="carousel ${this.isHorizontal?"":"carousel--vertical"}">
          <ul class="carousel-items">
            ${this._elements.map((t=>o.dy`<li class="carousel-item">${t}</li>`))}
          </ul>
        </div>
        <div class="carousel-controls">
          <button
            class="carousel-controls__previous-button"
            @click="${()=>{this.previousSlide()}}"
          ></button>
          <button
            class="carousel-controls__perspective-button"
            @click="${()=>{this.switchPerspective()}}"
          >
            switch
          </button>
          <button
            class="carousel-controls__next-button"
            @click="${()=>{this.nextSlide()}}"
          ></button>
        </div>
      </div>
    `}};n([(0,s.SB)(),a("design:type",Array)],l.prototype,"_elements",void 0),n([(0,s.SB)(),a("design:type",Object)],l.prototype,"_currentItem",void 0),n([(0,s.IO)(".carousel-items"),a("design:type",HTMLElement)],l.prototype,"_carouselWrap",void 0),n([(0,s.Kt)(".carousel-item"),a("design:type",Array)],l.prototype,"_carouselItem",void 0),n([(0,s.Cb)({type:Boolean,converter:{fromAttribute:t=>Boolean(Number(t)),toAttribute:t=>String(t)}}),a("design:type",Object)],l.prototype,"isHorizontal",void 0),l=n([(0,s.Mo)("backface-carousel-component")],l)},8116:function(t,e,r){r.d(e,{I:function(){return s}});var o=r(1293);r(8956);const s=o.iv`
	.carousel-controls {
		position: relative;
		z-index: 1;
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
	}

	.carousel-controls__next-button {
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 7.5px 0 7.5px 13px;
		border-color: transparent transparent transparent #fff;
		background: none;
		cursor: pointer;
	}

	.carousel-controls__previous-button {
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 7.5px 13px 7.5px 0;
		border-color: transparent #fff transparent transparent;
		background: none;
		cursor: pointer;
	}

	.carousel-controls__perspective-button {
		border: none;
		background-color: #000;
		padding: 0.5rem;
		color: #fff;
		text-transform: uppercase;
		cursor: pointer;
	}
`}}]);