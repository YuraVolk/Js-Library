/*! For license information please see 8496-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[8496],{8496:(t,e,i)=>{i.r(e),i.d(e,{TypingTextComponent:()=>u});var n=i(4791),r=i(2618),o=i(7687),s=function(t,e,i,n){var r,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class c extends r.WF{constructor(){super(...arguments),this.strings=[],this.repetitions=1/0,this._generator=(0,o.nextStringsGenerator)("",this),this._currentTextValue=[]}static{this.styles=[r.AH`
			:host {
				display: block;
				font-family: monospace;
				unicode-bidi: isolate;
				font-size: 24px;
				line-height: 54px;
			}
		`]}firstUpdated(){this._generator=(0,o.nextStringsGenerator)(this.strings[0],this),this._currentTextValue=this.strings[0].split("").map((t=>({letter:t,classes:[]}))),this.splitText?.({context:this}),this.intervalCurrent=window.setTimeout((()=>{this.onInterval()}),this.interval)}disconnectedCallback(){this._generator.return(["",""]),window.clearTimeout(this.intervalCurrent)}onInterval(){const{done:t,value:e}=this._generator.next();t?(window.clearTimeout(this.intervalCurrent),this.intervalCurrent=void 0):this.triggerTextAnimation({context:this,fromText:e[0],toText:e[1]})}render(){return r.qy`${function*(t,e){if(void 0!==t){let e=0;for(const n of t)yield(i=n,e++,r.qy`<span class=${i.classes.join(" ")}>${i.letter}</span>`)}var i}(this._currentTextValue)}`}}s([(0,n.MZ)({type:Array}),a("design:type",Array)],c.prototype,"strings",void 0),s([(0,n.MZ)({type:Number}),a("design:type",Object)],c.prototype,"repetitions",void 0),s([(0,n.wk)(),a("design:type",Array)],c.prototype,"_currentTextValue",void 0);var l=function(t,e,i,n){var r,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s},p=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class u extends c{constructor(){super(...arguments),this.interval=4500,this.typingSpeed=35}async triggerTextAnimation({context:t,fromText:e,toText:i}){const n=e.split("").map((t=>({letter:t,classes:[]}))),r=i.split("").map((t=>({letter:t,classes:[]})));for(let t=1;t<e.length+1;t++)await new Promise((e=>this._timeout=window.setTimeout((()=>{this._currentTextValue=n.slice(0,-t),e()}),this.unTypingSpeed??this.typingSpeed)));for(let t=1;t<i.length+1;t++)await new Promise((e=>this._timeout=window.setTimeout((()=>{this._currentTextValue=r.slice(0,t),e()}),this.typingSpeed)));this._timeout=window.setTimeout((()=>{this._timeout=void 0,t.onInterval()}),this.interval)}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this._timeout)}}l([(0,n.MZ)({type:Number}),p("design:type",Object)],u.prototype,"interval",void 0),l([(0,n.MZ)({type:Number}),p("design:type",Object)],u.prototype,"typingSpeed",void 0),l([(0,n.MZ)({type:Number}),p("design:type",Number)],u.prototype,"unTypingSpeed",void 0)}}]);