"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[465],{2465:function(t,e,o){o.r(e),o.d(e,{ToastComponent:function(){return l}});var s=o(1293),i=o(3129),n=o(9850),a=function(t,e,o,s){var i,n=arguments.length,a=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,s);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends s.oi{constructor(){super(...arguments),this.animationDelay=500,this.inactiveClass="disabled",this.closeOnButtonClick=!1}closeToast(){for(const t of this._toast)t.classList.add(this.inactiveClass);this.toastClosingId=window.setTimeout((()=>{for(const t of this._toast)t.remove()}),this.animationDelay)}onButtonClicked(t){(0,n.assertNonUndefined)(t)}firstUpdated(){if(this.closeOnButtonClick)for(const t of this._toast.flatMap((t=>Array.from(t.getElementsByTagName("button")))))t.addEventListener("click",(()=>{this.onButtonClicked(t),this.closeToast()}))}connectedCallback(){super.connectedCallback(),this.autoCloseDelay&&(this.timeoutId=window.setTimeout((()=>{this.closeToast()}),this.autoCloseDelay))}disconnectedCallback(){window.clearTimeout(this.timeoutId),window.clearTimeout(this.toastClosingId),super.disconnectedCallback()}render(){return s.dy`<div>
            <slot></slot>
        </div>`}};a([(0,i.Cb)({type:Number}),c("design:type",Object)],l.prototype,"animationDelay",void 0),a([(0,i.Cb)({type:Number}),c("design:type",Number)],l.prototype,"autoCloseDelay",void 0),a([(0,i.Cb)(),c("design:type",Object)],l.prototype,"inactiveClass",void 0),a([(0,i.Cb)({type:Boolean}),c("design:type",Object)],l.prototype,"closeOnButtonClick",void 0),a([(0,i.NH)(),c("design:type",Array)],l.prototype,"_toast",void 0),l=a([(0,i.Mo)("toast-component")],l)}}]);