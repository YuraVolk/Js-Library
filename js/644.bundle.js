"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[644],{2644:function(t,e,o){o.r(e),o.d(e,{AutocompleteListComponent:function(){return l}});var i=o(1293),n=o(3129),s=function(t,e,o,i){var n,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,o,r):n(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends i.oi{constructor(){super(...arguments),this.options=[],this._isListOpened=!1,this._filteredOptions=[]}static{this.styles=i.iv`
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
  `}onInputHandler(t){if(!(t instanceof HTMLInputElement&&t.value))return void(this._isListOpened=!1);const e=t.value.toLowerCase().trim(),o=[];for(const t of this.options){const i=t.toLowerCase();console.log(i.startsWith(e)),i!==e&&i.startsWith(e)&&o.push(t)}o.length&&(this._isListOpened=!0,this._filteredOptions=o)}setInputValue(t){const e=this.querySelector("input");e&&(e.value=t,this._isListOpened=!1,this._filteredOptions=[])}connectedCallback(){super.connectedCallback(),this.boundInputEventListener=({target:t})=>{t&&this.onInputHandler(t)},console.log(this.querySelector("input")),this.querySelector("input")?.addEventListener("input",this.boundInputEventListener)}disconnectedCallback(){super.disconnectedCallback(),this.querySelector("input")?.removeEventListener("input",this.boundInputEventListener)}render(){return i.dy`
      <div class="autocomplete-wrap">
        <slot></slot>
        ${this._isListOpened&&this._filteredOptions.length?i.dy`<ul class="autocomplete-items">
          ${this._filteredOptions.map((t=>i.dy`<li class="autocomplete-item" @click="${()=>{this.setInputValue(t)}}">${t}</li>`))}
        </ul>`:""}
      </div>
    `}};s([(0,n.Cb)({type:Array,converter:{fromAttribute:t=>null===t?[]:t.split(",").map((t=>t.trim())),toAttribute:t=>t.join(",")}}),r("design:type",Array)],l.prototype,"options",void 0),s([(0,n.SB)(),r("design:type",Object)],l.prototype,"_isListOpened",void 0),s([(0,n.SB)(),r("design:type",Array)],l.prototype,"_filteredOptions",void 0),l=s([(0,n.Mo)("autocomplete-list-component")],l)}}]);