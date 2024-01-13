/*! For license information please see 701.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[701],{8701:function(t,e,i){i.r(e),i.d(e,{PerspectiveCarouselComponent:function(){return u}});var n=i(1293),s=i(3129),r=i(3959),o=i(9850),a=i(8956),l=i(8116),c=i(1105);const h=()=>({...(0,c.resetInternalState)(),items:[]});var p=function(t,e,i,n){var s,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,i,o):s(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},d=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let u=class extends n.oi{constructor(){super(...arguments),this.imageSize="300px",this.margin="250px auto",this.startingItem=1,this.separation=175,this.separationMultiplier=.6,this.horizonOffset=0,this.horizonOffsetMultiplier=1,this.sizeMultiplier=.7,this.opacityMultiplier=.87,this.horizon=0,this.flankingItems=3,this.isVertical=!1,this.preloadImages=!1,this.forcedImageWidth=0,this.forcedImageHeight=0,this.animationLength=300,this.centralItemClassName="active",this.allowSwitchingOrientation=!1,this._internalState=h()}static{this.styles=n.iv`
		.wrap {
			position: relative;
		}

		.images {
			width: 80%;
		}

		${l.I}

		.carousel-controls {
			position: absolute;
			left: 40%;
			transform: translateX(-50%);
			bottom: -5%;
			z-index: 99;
		}
	`}initializeCarouselData(t){const e=window.getComputedStyle(t);this._internalState.totalItems=this.images.length,this._internalState.containerDimensions=[parseInt(e.width,10),parseInt(e.height,10)]}forceImageDimensionIfEnabled(){this.images.forEach((t=>t.style.display="none")),this.forcedImageWidth&&this.forcedImageHeight&&this.images.forEach((t=>{t.style.width=`${this.forcedImageWidth}px`,t.style.height=`${this.forcedImageHeight}px`}))}preload(t){if(!this.preloadImages)return void t();const e=this.images;let i=0;for(const n of e)n.setAttribute("src",n.getAttribute("src")??""),n.addEventListener("load",(()=>{n.style.display="",++i===e.length&&t()}))}setOriginalItemDimensions(){this.images.forEach((t=>{(!t.dataset.originalWidth||this.forcedImageWidth>0)&&(t.style.display="",t.dataset.originalWidth=String(t.clientWidth),t.style.display="none"),(!t.dataset.originalHeight||this.forcedImageHeight>0)&&(t.style.display="",t.dataset.originalHeight=String(t.clientHeight),t.style.display="none")}))}calculatePositionProperties(){let t=this.horizonOffset,e=this.separation;for(let i=1;i<=this.flankingItems+2;i++){i>1&&(t*=this.horizonOffsetMultiplier,e*=this.separationMultiplier);const{distance:n,offset:s,opacity:r}=this._internalState.calculations[i-1];this._internalState.calculations[i]={distance:n+e,offset:s+t,opacity:r*this.opacityMultiplier}}this._internalState.calculations[this.flankingItems+1]={distance:0,offset:0,opacity:0}}setupCarousel(){this._internalState.items=this.images,0===this.horizon&&(this.horizon=this._internalState.containerDimensions[Number(!this.isVertical)]/2);for(const t of this._internalState.items){let e,i;this.isVertical?(e=this.horizon-Number(t.dataset.originalWidth)/2,i=this._internalState.containerDimensions[1]/2-Number(t.dataset.originalHeight)/2):(e=this._internalState.containerDimensions[0]/2-Number(t.dataset.originalWidth)/2,i=this.horizon-Number(t.dataset.originalHeight)/2),Object.assign(t.style,{left:`${e}px`,top:`${i}px`,visibility:"visible",position:"absolute","z-index":0,opacity:0,display:""})}}performCalculations(t,e){const i=Math.abs(e),n=i<this.flankingItems+1?this._internalState.calculations[i]:this._internalState.calculations[this.flankingItems+1],s=this.sizeMultiplier**i,r=s*Number(t.dataset.originalWidth),o=s*Number(t.dataset.originalHeight),a=e<0?-n.distance:n.distance,l=this._internalState.containerDimensions[Number(this.isVertical)]/2;let c,h;this.isVertical?(h=this.horizon-n.offset-r/2,c=l+a-o/2):(h=l+a-r/2,c=this.horizon-n.offset-o/2),t.dataset.width=String(r),t.dataset.height=String(o),t.dataset.top=String(c),t.dataset.left=String(h),t.dataset.oldPosition||="0",t.dataset.depth=String(this.flankingItems+2-i),t.dataset.opacity=String(e?n.opacity:1)}itemAnimationComplete(t,e){this._internalState.itemsAnimating--,t.dataset.currentPosition=String(e),0===e&&(this._internalState.currentCenterItem=t),this._internalState.itemsAnimating||(this._internalState.currentlyMoving=!1,--this._internalState.carouselRotationsLeft<=0?(this._internalState.currentCenterItem?.classList.add(this.centralItemClassName),this._internalState.performingSetup?this._internalState.performingSetup=!1:(this.movingToCenter(),this.movedToCenter())):this.rotateCarousel())}movingFromCenter(t){return t?((0,o.assertDevOnly)(t instanceof HTMLElement),t):void 0}movingToCenter(){}movedToCenter(){}moveItem(t,e){const i=()=>{console.log(t.dataset.width),Object.assign(t.style,{left:`${t.dataset.left}px`,width:`${t.dataset.width}px`,height:`${t.dataset.height}px`,top:`${t.dataset.top}px`,opacity:String(t.dataset.opacity)})};Math.abs(e)<=this.flankingItems+1?(this.performCalculations(t,e),this._internalState.itemsAnimating++,t.style.zIndex=t.dataset.depth??"",i(),setTimeout((()=>{this.itemAnimationComplete(t,e)}),this.animationLength)):(t.dataset.currentPosition=String(e),"0"!==t.dataset.oldPosition&&t.dataset.oldPosition||(this.performCalculations(t,e),i()))}setupStarterRotation(){this.startingItem||=Math.round(this._internalState.totalItems/2),this._internalState.rightItemsCount=Math.ceil((this._internalState.totalItems-1)/2),this._internalState.leftItemsCount=Math.floor((this._internalState.totalItems-1)/2),this._internalState.carouselRotationsLeft=1;let t=this.startingItem-1;this.moveItem(this._internalState.items[t],0),this._internalState.items[t].style.opacity="1";for(let e=1;e<=this._internalState.rightItemsCount;e++)t<this._internalState.totalItems-1?t++:t=0,this._internalState.items[t].style.opacity="1",this.moveItem(this._internalState.items[t],e);t=this.startingItem-1;for(let e=-1;e>=-this._internalState.leftItemsCount;e--)t>0?t--:t=this._internalState.totalItems-1,this._internalState.items[t].style.opacity="1",this.moveItem(this._internalState.items[t],e)}initCarousel(t){this._internalState=h(),this.initializeCarouselData(t),this.forceImageDimensionIfEnabled(),this.preload((()=>{this.setOriginalItemDimensions(),this.calculatePositionProperties(),this.setupCarousel(),this.setupStarterRotation()}))}moveOnce(t){this._internalState.currentlyMoving||(this._internalState.previousCenterItem=this._internalState.currentCenterItem,t===a.CarouselDirection.BACKWARDS?this.movingFromCenter(this._internalState.currentCenterItem?.previousElementSibling??void 0):t===a.CarouselDirection.FORWARDS?this.movingFromCenter(this._internalState.currentCenterItem?.nextElementSibling??void 0):this.movingFromCenter(this._internalState.currentCenterItem),this._internalState.currentDirection=t)}rotateCarousel(){if(!this._internalState.currentlyMoving){this._internalState.currentCenterItem?.classList.remove(this.centralItemClassName),this._internalState.currentlyMoving=!0,this._internalState.itemsAnimating=0,this._internalState.carouselRotationsLeft++;for(const t of this._internalState.items){const e=parseInt(t.dataset.currentPosition??"",10);let i=e+-Number(this._internalState.currentDirection);Math.abs(i)>this._internalState[i>0?"rightItemsCount":"leftItemsCount"]&&(i=-e,this._internalState.totalItems%2==0&&i++),this.moveItem(t,i)}}}nextItem(){this.moveOnce(a.CarouselDirection.FORWARDS),this.rotateCarousel()}previousItem(){this.moveOnce(a.CarouselDirection.BACKWARDS),this.rotateCarousel()}switchOrientation(){this.isVertical=!this.isVertical,this.rotateCarousel()}connectedCallback(){super.connectedCallback(),this.parent.then((t=>{this.initCarousel(t)})).catch((t=>{console.error(t)})),window.addEventListener("resize",this.windowResizeListener=()=>{this.parent.then((t=>{this.initCarousel(t)})).catch((t=>{console.log(t)}))})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.windowResizeListener)}render(){return n.dy`<div class="wrap">
			<div class="images" style=${(0,r.V)({height:this.imageSize,margin:this.margin})}>
				<slot></slot>
			</div>
			<div class="carousel-controls">
				<button class="carousel-controls__previous-button" @click="${()=>{this.previousItem()}}"></button>
				${this.allowSwitchingOrientation?n.dy`<button class="carousel-controls__perspective-button" @click="${()=>{this.switchOrientation()}}">Switch</button>`:""}
				<button class="carousel-controls__next-button" @click="${()=>{this.nextItem()}}"></button>
			</div>
		</div>`}};p([(0,s.Cb)(),d("design:type",Object)],u.prototype,"imageSize",void 0),p([(0,s.Cb)(),d("design:type",Object)],u.prototype,"margin",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"startingItem",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"separation",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"separationMultiplier",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"horizonOffset",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"horizonOffsetMultiplier",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"sizeMultiplier",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"opacityMultiplier",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"horizon",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"flankingItems",void 0),p([(0,s.Cb)({type:Boolean}),d("design:type",Object)],u.prototype,"isVertical",void 0),p([(0,s.Cb)({type:Boolean}),d("design:type",Object)],u.prototype,"preloadImages",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"forcedImageWidth",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"forcedImageHeight",void 0),p([(0,s.Cb)({type:Number}),d("design:type",Object)],u.prototype,"animationLength",void 0),p([(0,s.Cb)(),d("design:type",Object)],u.prototype,"centralItemClassName",void 0),p([(0,s.Cb)({type:Boolean}),d("design:type",Object)],u.prototype,"allowSwitchingOrientation",void 0),p([(0,s.GC)(".images"),d("design:type",Promise)],u.prototype,"parent",void 0),p([(0,s.NH)({flatten:!0}),d("design:type",Array)],u.prototype,"images",void 0),p([(0,s.SB)(),d("design:type",Object)],u.prototype,"_internalState",void 0),u=p([(0,s.Mo)("perspective-carousel-component")],u)},8116:function(t,e,i){i.d(e,{I:function(){return s}});var n=i(1293);i(8956);const s=n.iv`
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
`},875:function(t,e,i){i.d(e,{XM:function(){return s},Xe:function(){return r},pX:function(){return n}});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},3959:function(t,e,i){i.d(e,{V:function(){return a}});var n=i(3692),s=i(875);const r="important",o=" !"+r,a=(0,s.XM)(class extends s.Xe{constructor(t){if(super(t),t.type!==s.pX.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(const t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const n=e[t];if(null!=n){this.ut.add(t);const e="string"==typeof n&&n.endsWith(o);t.includes("-")||e?i.setProperty(t,e?n.slice(0,-11):n,e?r:""):i[t]=n}}return n.Jb}})}}]);