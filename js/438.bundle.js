"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[438],{438:function(t,e,s){s.r(e),s.d(e,{MenuCarouselComponent:function(){return u}});var o=s(1293),i=s(3129),r=s(9850),n=s(8116),a=s(5346),c=function(t,e,s,o){var i,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(r<3?i(n):r>3?i(e,s,n):i(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class d extends a.MenuCarouselInternalItem{initStyles(){return this.image.style.position="absolute",this}setMovingStyle(t,e,s){const o=this.image.style;o.width=this.width+"px",o.left=t+"px",o.top=e+"px",o.zIndex=String(100*s|0)}}let u=class extends o.oi{constructor(){super(...arguments),this._rotation=Math.PI/2,this._destRotation=Math.PI/2,this._frameTimer=0,this.yPos=112,this.yRadius=128,this.farScale=.9,this.speed=.11}static{this.styles=n.I}rotateItem(t,e){const s=this._items[t],o=Math.sin(e),i=this.farScale+(1-this.farScale)*(o+1)*.5;(0,r.assertNonUndefinedDevOnly)(this.xPos),(0,r.assertNonUndefinedDevOnly)(this.xRadius),s.moveTo(this.xPos+i*(Math.cos(e)*this.xRadius-s.fullWidth/2),this.yPos+i*o*this.yRadius,i)}carouselRender(){const t=this._items.length,e=2*Math.PI/t;let s=this._rotation;for(let o=0;o<t;o++)this.rotateItem(o,s),s+=e}scheduleNextFrame(){this._frameTimer=window.setTimeout((()=>{this.playFrame()}),32)}playFrame(){const t=this._destRotation-this._rotation;Math.abs(t)<=0?(this._rotation=this._destRotation,window.clearTimeout(this._frameTimer),this._frameTimer=0):(this._rotation+=t*this.speed,this.scheduleNextFrame()),this.carouselRender()}go(t){this._destRotation+=2*Math.PI/this._items.length*t,0===this._frameTimer&&this.scheduleNextFrame()}firstUpdated(){this.setupCarousel()}setupCarousel(){const t=this.querySelector(".carousel");if(t){this._carousel=t,this._images=Array.from(this.querySelectorAll(".carousel-item"));for(const t of this._images)t.removeAttribute("style");this.xPos??=.5*this._carousel.offsetWidth,this.yPos=.1*this._carousel.offsetHeight,this.xRadius??=this._carousel.offsetWidth/2.3,this.yRadius=this._carousel.offsetHeight/6,this._items=this._images.map((t=>new d(t).initStyles())),this.carouselRender()}}connectedCallback(){super.connectedCallback(),this.boundEventListener=()=>{this.xRadius=this.xPos=void 0,this.setupCarousel()},window.addEventListener("resize",this.boundEventListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.boundEventListener)}goBack(){this.go(-1)}goForward(){this.go(1)}render(){return o.dy`
      <slot></slot>
      <div class="carousel-controls">
        <button
          class="carousel-controls__previous-button"
          @click="${()=>{this.goBack()}}"
        ></button>
        <button
          class="carousel-controls__next-button"
          @click="${()=>{this.goForward()}}"
        ></button>
      </div>
    `}};c([(0,i.SB)(),l("design:type",HTMLElement)],u.prototype,"_carousel",void 0),c([(0,i.SB)(),l("design:type",Array)],u.prototype,"_images",void 0),c([(0,i.SB)(),l("design:type",Object)],u.prototype,"_rotation",void 0),c([(0,i.SB)(),l("design:type",Object)],u.prototype,"_destRotation",void 0),c([(0,i.SB)(),l("design:type",Object)],u.prototype,"_frameTimer",void 0),c([(0,i.SB)(),l("design:type",Array)],u.prototype,"_items",void 0),c([(0,i.Cb)({type:Number}),l("design:type",Number)],u.prototype,"xPos",void 0),c([(0,i.Cb)({type:Number}),l("design:type",Object)],u.prototype,"yPos",void 0),c([(0,i.Cb)({type:Number}),l("design:type",Number)],u.prototype,"xRadius",void 0),c([(0,i.Cb)({type:Number}),l("design:type",Object)],u.prototype,"yRadius",void 0),c([(0,i.Cb)({type:Number}),l("design:type",Object)],u.prototype,"farScale",void 0),c([(0,i.Cb)({type:Number}),l("design:type",Object)],u.prototype,"speed",void 0),u=c([(0,i.Mo)("menu-carousel-component")],u)},8116:function(t,e,s){s.d(e,{I:function(){return i}});var o=s(1293);s(8956);const i=o.iv`
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