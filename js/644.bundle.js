"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[644],{2644:function(t,e,i){i.r(e),i.d(e,{AutocompleteListComponent:function(){return l}});var o=i(1293),n=i(3129),s=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends o.oi{constructor(){super(...arguments),this.options=[],this._isListOpened=!1,this._filteredOptions=[]}static{this.styles=o.iv`
    .autocomplete-items {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 9999;
      overflow-y: scroll;
      width: 100%;
      max-height: 200px;
      padding-left: 0;
      margin: 0;
      list-style-type: none;
    }

    .autocomplete-item {
      padding: 10px;
      cursor: pointer;
      background-color: #ffffff;
      border-bottom: 1px solid #d4d4d4;
    }

    .autocomplete-wrap {
      position: relative;
    }
  `}onInputHandler(t){if(!(t instanceof HTMLInputElement&&t.value))return void(this._isListOpened=!1);const e=t.value.toLowerCase().trim(),i=[];for(const t of this.options){const o=t.toLowerCase();o!==e&&o.startsWith(e)&&i.push(t)}i.length&&(this._isListOpened=!0,this._filteredOptions=i)}setInputValue(t){const e=this.querySelector("input");e&&(e.value=t,this._isListOpened=!1,this._filteredOptions=[])}connectedCallback(){super.connectedCallback(),this.boundInputEventListener=({target:t})=>{t&&this.onInputHandler(t)},this.querySelector("input")?.addEventListener("input",this.boundInputEventListener)}disconnectedCallback(){super.disconnectedCallback(),this.querySelector("input")?.removeEventListener("input",this.boundInputEventListener)}render(){return o.dy`
      <div class="autocomplete-wrap">
        <slot></slot>
        ${this._isListOpened&&this._filteredOptions.length?o.dy`<ul class="autocomplete-items">
          ${this._filteredOptions.map((t=>o.dy`<li class="autocomplete-item" @click="${()=>{this.setInputValue(t)}}">${t}</li>`))}
        </ul>`:""}
      </div>
    `}};s([(0,n.Cb)({type:Array,converter:{fromAttribute:t=>null===t?[]:t.split(",").map((t=>t.trim())),toAttribute:t=>t.join(",")}}),r("design:type",Array)],l.prototype,"options",void 0),s([(0,n.SB)(),r("design:type",Object)],l.prototype,"_isListOpened",void 0),s([(0,n.SB)(),r("design:type",Array)],l.prototype,"_filteredOptions",void 0),l=s([(0,n.Mo)("autocomplete-list-component")],l)}}]);