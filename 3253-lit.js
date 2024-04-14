/*! For license information please see 3253-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[3253],{3253:(t,e,s)=>{s.r(e),s.d(e,{CustomSelectComponent:()=>f});var o=s(2618),n=s(4791),i=s(6752);class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const c=(a=class extends r{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return i.c0}},(...t)=>({_$litDirective$:a,values:t}));var a;class l{constructor(t,e){t.addController(this),this.boundListener=s=>{s.composedPath().some((e=>e===t))||e()}}hostConnected(){document.addEventListener("click",this.boundListener)}hostDisconnected(){document.removeEventListener("click",this.boundListener)}}function*d(t,e){if(void 0!==t){let s=0;for(const o of t)yield e(o,s++)}}class p extends Event{constructor(t){super("change"),this.item=t}}var u=function(t,e,s,o){var n,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(r=(i<3?n(r):i>3?n(e,s,r):n(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r},h=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class f extends o.WF{constructor(){super(...arguments),this.items=[],this.selectName="",this._isOpened=!1}static{this.styles=o.AH`
		select {
			display: none;
		}

		.wrap {
			position: relative;
			width: 150px;
		}

		.custom-select-current {
			border-radius: 20px;
			transition: all 0.3s;
			background-color: dodgerblue;
		}

		.custom-select-current::after {
			position: absolute;
			content: "";
			top: 14px;
			right: 10px;
			width: 0;
			height: 0;
			border: 6px solid transparent;
			border-color: #fff transparent transparent transparent;
			transition: all 0.3s;
		}

		.custom-select-current.active::after {
			border-color: transparent transparent #fff transparent;
			top: 7px;
		}

		.custom-select-option.active {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			background-color: darkcyan;
		}

		.custom-select-option {
			color: #ffffff;
			padding: 3px 12px;
			border: 1px solid transparent;
			border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
			user-select: none;
			cursor: pointer;
		}

		.custom-select-options {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 99;
			opacity: 1;
			transition: opacity 0.2s linear;
			padding-left: 0;
			list-style-type: none;
			margin: 0;
			background-color: dodgerblue;
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 20px;
		}

		.custom-select-options.hidden {
			opacity: 0;
			pointer-events: none;
			cursor: default;
		}

		.custom-select-options .custom-select-option:hover {
			background-color: rgba(0, 0, 0, 0.15);
		}

		.custom-select-options .custom-select-option[data-selected] {
			background-color: rgba(0, 0, 0, 0.1);
		}

		.custom-select-options .custom-select-option[data-disabled] {
			background-color: rgba(0, 0, 0, 0.33);
		}

		.custom-select-options .custom-select-option:last-child {
			overflow: hidden;
		}
	`}connectedCallback(){super.connectedCallback(),new l(this,(()=>{this._isOpened=!1}))}toggledOpened(){this._isOpened=!this._isOpened}onItemSelected(t){if(this._isOpened=!1,!t.isDisabled){for(const e of this.items)e===t?(e.isSelected=!0,this.dispatchEvent(new p(e))):e.isSelected=!1;this.requestUpdate("items")}}render(){const t=this.items.find((t=>t.isSelected));return o.qy`
			<select .value=${t?.value??""} name=${this.selectName}>
				${d(this.items,(t=>o.qy`<option value=${t.value} ?disabled=${t.isDisabled} ?selected=${t.isSelected}>
							${t.innerContent}
						</option>`))}
			</select>
			<div class="wrap">
				<div
					class="custom-select-option custom-select-current ${c({active:this._isOpened})}"
					@click=${()=>{this.toggledOpened()}}
				>
					${t?.innerContent??""}
				</div>
				<ul class="custom-select-options ${c({hidden:!(this.items.length&&this._isOpened)})}">
					${d(this.items,(t=>o.qy`<li
								class="custom-select-option"
								?data-disabled=${t.isDisabled}
								?data-selected=${t.isSelected}
								value=${t.value}
								@click=${()=>{this.onItemSelected(t)}}
							>
								${t.innerContent}
							</li>`))}
				</ul>
			</div>
		`}}u([(0,n.MZ)({type:Array}),h("design:type",Array)],f.prototype,"items",void 0),u([(0,n.MZ)({type:String}),h("design:type",Object)],f.prototype,"selectName",void 0),u([(0,n.wk)(),h("design:type",Object)],f.prototype,"_isOpened",void 0)}}]);