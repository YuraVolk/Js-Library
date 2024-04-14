/*! For license information please see 2133-lit.js.LICENSE.txt */
"use strict";(self.webpackChunkjs_lit_components_library=self.webpackChunkjs_lit_components_library||[]).push([[2133],{2133:(t,e,s)=>{s.r(e),s.d(e,{TableFilteringComponent:()=>H,TableFilteringHeader:()=>P,TableFilteringRow:()=>q});var i=s(2618),n=s(4791),o=s(6752);const r=t=>(...e)=>({_$litDirective$:t,values:e});class l{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const c=r(class extends l{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return o.c0}}),{I:a}=o.ge,d=()=>document.createComment(""),h=(t,e,s)=>{const i=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(d(),n),o=i.insertBefore(d(),n);s=new a(e,o,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,r=o!==t;if(r){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==n||r){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,n),t=e}}}return s},u=(t,e,s=t)=>(t._$AI(e,s),t),p={},b=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},f=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},y=r(class extends l{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const n=[],o=[];let r=0;for(const e of t)n[r]=i?i(e,r):r,o[r]=s(e,r),r++;return{values:o,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const n=(t=>t._$AH)(t),{values:r,keys:l}=this.dt(e,s,i);if(!Array.isArray(n))return this.ut=l,r;const c=this.ut??=[],a=[];let d,y,g=0,x=n.length-1,v=0,m=r.length-1;for(;g<=x&&v<=m;)if(null===n[g])g++;else if(null===n[x])x--;else if(c[g]===l[v])a[v]=u(n[g],r[v]),g++,v++;else if(c[x]===l[m])a[m]=u(n[x],r[m]),x--,m--;else if(c[g]===l[m])a[m]=u(n[g],r[m]),h(t,a[m+1],n[g]),g++,m--;else if(c[x]===l[v])a[v]=u(n[x],r[v]),h(t,n[g],n[x]),x--,v++;else if(void 0===d&&(d=f(l,v,m),y=f(c,g,x)),d.has(c[g]))if(d.has(c[x])){const e=y.get(l[v]),s=void 0!==e?n[e]:null;if(null===s){const e=h(t,n[g]);u(e,r[v]),a[v]=e}else a[v]=u(s,r[v]),h(t,n[g],s),n[e]=null;v++}else b(n[x]),x--;else b(n[g]),g++;for(;v<=m;){const e=h(t,a[m+1]);u(e,r[v]),a[v++]=e}for(;g<=x;){const t=n[g++];null!==t&&b(t)}return this.ut=l,((t,e=p)=>{t._$AH=e})(t,a),o.c0}}),g="important",x=" !"+g,v=r(class extends l{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(x);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?g:""):s[t]=i}}return o.c0}});class m extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}class _{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new m(this.context,this.t,this.subscribe))}}class k{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class w extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class C extends k{constructor(t,e,s){super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)s.has(t)||(s.add(t),e.dispatchEvent(new m(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new w(this.context))}}function $({context:t}){return(e,s)=>{const i=new WeakMap;if("object"==typeof s)return s.addInitializer((function(){i.set(this,new C(this,{context:t}))})),{get(){return e.get.call(this)},set(t){return i.get(this)?.setValue(t),e.set.call(this,t)},init(t){return i.get(this)?.setValue(t),t}};{e.constructor.addInitializer((e=>{i.set(e,new C(e,{context:t}))}));const n=Object.getOwnPropertyDescriptor(e,s);let o;if(void 0===n){const t=new WeakMap;o={get:function(){return t.get(this)},set:function(e){i.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=n.set;o={...n,set:function(e){i.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,s,o)}}}function A({context:t,subscribe:e}){return(s,i)=>{"object"==typeof i?i.addInitializer((function(){new _(this,{context:t,callback:t=>{this[i.name]=t},subscribe:e})})):s.constructor.addInitializer((s=>{new _(s,{context:t,callback:t=>{s[i]=t},subscribe:e})}))}}var S=s(1956),j=function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r},I=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const U=Symbol(),O=t=>{class e extends t{getUid(){return(0,S.uid)()}constructor(...t){super(...t),this.linkedUid=this.getUid()}get linkedItemStyles(){return this.linkedItemsContext[this.linkedUid].styles}connectedCallback(){super.connectedCallback(),this.linkedUid in this.linkedItemsContext||(this.linkedItemsContext[this.linkedUid]={element:this,styles:{}})}firstUpdated(){this.linkedUid in this.linkedItemsContext&&(this.linkedItemsContext[this.linkedUid].element=this._rootElement??this)}disconnectedCallback(){super.disconnectedCallback(),this.linkedUid in this.linkedItemsContext&&delete this.linkedItemsContext[this.linkedUid]}}return j([(0,n.P)("*"),I("design:type",HTMLElement)],e.prototype,"_rootElement",void 0),j([A({context:U,subscribe:!0}),I("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e},R=t=>{class e extends t{constructor(){super(...arguments),this.linkedItemsContext=new Proxy({},{set:(t,e,s,i)=>{let n=s.styles,o=s.element;const r=this;return Reflect.set(t,e,{get styles(){return n},set styles(t){r.scheduleContextUpdate(),n=t},get element(){return o},set element(t){o=t}},i)}})}async scheduleContextUpdate(){this.linkedItemsContext={...this.linkedItemsContext}}get itemValues(){return Object.values(this.linkedItemsContext)}get itemKeys(){return Object.keys(this.linkedItemsContext)}get itemEntries(){return Object.entries(this.linkedItemsContext)}set itemEntries(t){this.linkedItemsContext=Object.fromEntries(t)}}return j([$({context:U}),I("design:type",Object)],e.prototype,"linkedItemsContext",void 0),e};class E extends(O(i.WF)){constructor(){super(...arguments),this.hasTransition=!1}static{this.styles=[i.AH`
			:host {
				display: flex;
			}

			::slotted(*) {
				width: 100%;
				height: 100%;
			}

			.with-transition {
				transition:
					0.3s linear left,
					0.3s linear width,
					0.3s linear height,
					0.3s linear top,
					0.3s linear opacity;
			}
		`]}render(){return i.qy`<div class=${(t=>(this.hasTransition?"with-transition":void 0)??o.s6)()} style=${v(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}j([(0,n.MZ)({type:Boolean}),I("design:type",Object)],E.prototype,"hasTransition",void 0);class P extends(O(i.WF)){static{this.styles=i.AH`
        :host {
            display: contents;
        }

        .table-header {
            all: inherit;
            display: table-cell;
            font-weight: 700;
            vertical-align: inherit;
            text-align: -internal-center;
            unicode-bidi: isolate;
        }
    `}getUid(){return"table-header-"+super.getUid()}render(){return i.qy`<div class="table-header" style=${v(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}class q extends(O(i.WF)){static{this.styles=i.AH`
        :host {
            display: contents;
        }

        .table-row {
            all: inherit;
            display: table-row;
            vertical-align: inherit;
            unicode-bidi: isolate;
            border-color: inherit;
        }

        ::slotted(*) {
            display: table-cell;
            vertical-align: inherit;
            text-align: -internal-center;
            unicode-bidi: isolate;
        }
    `}getUid(){return"table-row-"+super.getUid()}render(){return i.qy`<div class="table-row" style=${v(this.linkedItemStyles)}>
			<slot></slot>
		</div>`}}var M=function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r},B=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class H extends(R(i.WF)){constructor(){super(...arguments),this._excludedCriteria=[]}static{this.styles=i.AH`
		:host {
			position: relative;
			display: block;
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

		::slotted(*) {
			display: table;
			border-collapse: separate;
			box-sizing: border-box;
			text-indent: initial;
			unicode-bidi: isolate;
			border-spacing: 2px;
			border-color: gray;
		}
	`}get elementAccessors(){const t=[],e=[];for(const[s,i]of this.itemEntries)s.startsWith("table-header-")?t.push(i):s.startsWith("table-row")&&e.push(i);return{headers:t,rows:e}}firstUpdated(){this._excludedCriteria=Array.from({length:this.elementAccessors.headers.length},(()=>[]))}toggleCriterion(t){(0,S.assertNonUndefined)(this._openSelect);const e=this._openSelect.index,s=[...this._excludedCriteria];s[e].includes(t)?s[e].splice(s[e].indexOf(t),1):s[e].push(t),this._excludedCriteria=s,this.updateExcludedRows()}updateExcludedRows(){for(const t of this.elementAccessors.rows)Array.from(t.element.getElementsByTagName("slot")[0].assignedElements()).some(((t,e)=>this._excludedCriteria[e].includes(t.textContent??"")))?t.styles={display:"none"}:t.styles={}}onHeaderClicked(t){const e=this.elementAccessors,s=e.headers[t].element.getBoundingClientRect(),i=this.getBoundingClientRect(),n=s.top-i.top,o=s.left-i.left;this._openSelect={index:t,top:n,left:o,width:s.width,height:s.height,options:[...new Set(e.rows.map((({element:e})=>e.getElementsByTagName("slot")[0].assignedElements()[t].textContent??"")))]}}closeSelect(){this._openSelect=void 0}render(){return i.qy`
			<slot></slot>
			${t=this._openSelect,e=()=>((0,S.assertNonUndefined)(this._openSelect),i.qy`<div
					class="wrap-select"
					style=${v({top:`${String(this._openSelect.top)}px`,left:`${String(this._openSelect.left)}px`,width:`${String(this._openSelect.width)}px`,height:`${String(this._openSelect.height)}px`})}
				>
					${y(this._openSelect.options,(t=>t),(t=>((0,S.assertNonUndefined)(this._openSelect),i.qy`<div
								class="wrap-select__option ${c({"wrap-select__option--crossed":this._excludedCriteria[this._openSelect.index].includes(t)})}"
								@click=${()=>{this.toggleCriterion(t)}}
							>
								${t}
							</div>`)))}
				</div>`),t?e():void 0}
		`;var t,e}}M([(0,n.wk)(),B("design:type",Object)],H.prototype,"_openSelect",void 0),M([(0,n.wk)(),B("design:type",Array)],H.prototype,"_excludedCriteria",void 0)}}]);