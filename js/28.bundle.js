/*! For license information please see 28.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[28],{3028:function(t,e,r){r.r(e),r.d(e,{TableFilteringComponent:function(){return d}});var i=r(1293),s=r(3129),n=r(3959),o=r(9455),a=r(9850),l=function(t,e,r,i){var s,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(n<3?s(o):n>3?s(e,r,o):s(e,r))||o);return n>3&&o&&Object.defineProperty(e,r,o),o},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let d=class extends i.oi{constructor(){super(...arguments),this.filterableHeaders=[],this.tabularData={headers:[],rows:[],excludedCriteria:[]}}static{this.styles=i.iv`
		.wrap {
			position: relative;
		}

		.wrap-select {
			position: absolute;
		}

		.wrap-select__option {
			background-color: #333;
			height: inherit;
			cursor: pointer;
		}

		.wrap-select__option--crossed {
			text-decoration: line-through;
		}
	`}displaySelect(t,e){if(!this.filterableHeaders.includes(e+1))return;const r=t.getBoundingClientRect(),i=this._wrap.getBoundingClientRect(),s=r.top-i.top,n=r.left-i.left;this.openSelect={index:e,top:s,left:n,width:r.width,height:r.height,options:[...new Set(this.tabularData.rows.map((t=>t[e].textContent??"")))]}}firstUpdated(){const[t]=this._table;Object.assign(this.tabularData,{headers:Array.from(t.querySelectorAll("th")),rows:Array.from(t.querySelectorAll("tbody > tr")).map((t=>Array.from(t.children).filter((t=>t instanceof HTMLTableCellElement))))}),this.tabularData.excludedCriteria=Array.from({length:this.tabularData.headers.length},(()=>[])),this._wrap.addEventListener("click",this.clickListener=t=>{t.target instanceof HTMLTableCellElement&&t.target.parentNode&&"TH"===t.target.tagName?this.displaySelect(t.target,Array.from(t.target.parentNode.children).indexOf(t.target)):t.target instanceof HTMLDivElement&&t.target.classList.contains("wrap-select__option")||(this.openSelect=void 0)})}toggleCriterion(t){(0,a.assertNonUndefined)(this.openSelect);const{index:e}=this.openSelect,r=[...this.tabularData.excludedCriteria];r[e].includes(t)?r[e].splice(r[e].indexOf(t),1):r[e].push(t),this.tabularData={...this.tabularData,excludedCriteria:r}}updated(t){if(t.has("tabularData"))for(const t of this.tabularData.rows){const e=t[0].parentElement;e&&(t.some(((t,e)=>this.tabularData.excludedCriteria[e].includes(t.textContent??"")))?e.style.display="none":e.style.removeProperty("display"))}}disconnectedCallback(){this._wrap.removeEventListener("click",this.clickListener),super.disconnectedCallback()}render(){return i.dy`<div class="wrap">
			<slot></slot>
			${this.openSelect?i.dy`<div
						class="wrap-select"
						style=${(0,n.V)({top:`${this.openSelect.top}px`,left:`${this.openSelect.left}px`,width:`${this.openSelect.width}px`,height:`${this.openSelect.height}px`})}
				  >
						${this.openSelect.options.map((t=>((0,a.assertNonUndefined)(this.openSelect),i.dy`<div
								class="wrap-select__option ${(0,o.$)({"wrap-select__option--crossed":this.tabularData.excludedCriteria[this.openSelect.index].includes(t)})}"
								@click="${()=>{this.toggleCriterion(t)}}"
							>
								${t}
							</div>`)))}
				  </div>`:""}
		</div>`}};l([(0,s.Cb)({type:Array,converter:{fromAttribute:t=>t?t.split(",").map(Number):[],toAttribute:t=>t.join(",")}}),c("design:type",Array)],d.prototype,"filterableHeaders",void 0),l([(0,s.NH)({selector:"table"}),c("design:type",Array)],d.prototype,"_table",void 0),l([(0,s.IO)(".wrap"),c("design:type",HTMLDivElement)],d.prototype,"_wrap",void 0),l([(0,s.SB)(),c("design:type",Object)],d.prototype,"tabularData",void 0),l([(0,s.SB)(),c("design:type",Object)],d.prototype,"openSelect",void 0),d=l([(0,s.Mo)("table-filtering-component")],d)},875:function(t,e,r){r.d(e,{XM:function(){return s},Xe:function(){return n},pX:function(){return i}});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},9455:function(t,e,r){r.d(e,{$:function(){return n}});var i=r(3692),s=r(875);const n=(0,s.XM)(class extends s.Xe{constructor(t){if(super(t),t.type!==s.pX.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const r=t.element.classList;for(const t of this.it)t in e||(r.remove(t),this.it.delete(t));for(const t in e){const i=!!e[t];i===this.it.has(t)||this.st?.has(t)||(i?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return i.Jb}})},3959:function(t,e,r){r.d(e,{V:function(){return a}});var i=r(3692),s=r(875);const n="important",o=" !"+n,a=(0,s.XM)(class extends s.Xe{constructor(t){if(super(t),t.type!==s.pX.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const i=t[r];return null==i?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:r}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(const t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?r.removeProperty(t):r[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ut.add(t);const e="string"==typeof i&&i.endsWith(o);t.includes("-")||e?r.setProperty(t,e?i.slice(0,-11):i,e?n:""):r[t]=i}}return i.Jb}})}}]);