"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[8651],{41978:(e,t,s)=>{s.d(t,{AM:()=>v});var i=s(27366),r=s(85015),n=s(93169),a=s(84652),o=s(32718),l=s(49861),c=(s(25243),s(69912)),h=s(85411),u=s(32551);const d=-1;let v=class extends r.Z{constructor(e){super(e),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,n.Z)("mapview-transitions-duration"),this.effects=[]}set effect(e){if(this._get("effect")!==(e=e||"")){this._set("effect",e);try{this._transitionTo(p(e))}catch(t){this._transitionTo([]),o.Z.getLogger(this.declaredClass).warn("Invalid Effect",{effect:e,error:t})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(e){this._updateForScale(e)}get transitioning(){return null!==this._to}canTransitionTo(e){try{return this.scale>0&&f(this._current,p(e),this.scale)}catch{return!1}}transitionStep(e,t){this._applyTimeTransition(e),this._updateForScale(t)}end(){this._applyTimeTransition(this.duration)}_transitionTo(e){this.scale>0&&f(this._current,e,this.scale)?(this._final=e,this._to=(0,a.d9)(e),function(e,t,s){const i=e.length>t.length?e:t,r=e.length>t.length?t:e,n=r[r.length-1],a=n?.scale??s,o=n?.effects??[];for(let l=r.length;l<i.length;l++)r.push({scale:a,effects:[...o]});for(let l=0;l<i.length;l++)r[l].scale=r[l].scale===d?s:r[l].scale,i[l].scale=i[l].scale===d?s:i[l].scale,(0,u.uF)(r[l].effects,i[l].effects)}(this._current,this._to,this.scale),this._from=(0,a.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=e),this._set("effects",this._current[0]?(0,a.d9)(this._current[0].effects):[])}_applyTimeTransition(e){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=e;const t=Math.min(1,this._time/this.duration);for(let s=0;s<this._current.length;s++){const e=this._current[s],i=this._from[s],r=this._to[s];e.scale=g(i.scale,r.scale,t);for(let s=0;s<e.effects.length;s++){const n=e.effects[s],a=i.effects[s],o=r.effects[s];n.interpolate(a,o,t)}}1===t&&(this._current=this._final,this._set("effects",this._current[0]?(0,a.d9)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(e){if(this._set("scale",e),0===this._current.length)return;const t=this._current,s=this._current.length-1;let i,r,n=1;if(1===t.length||e>=t[0].scale)r=i=t[0].effects;else if(e<=t[s].scale)r=i=t[s].effects;else for(let a=0;a<s;a++){const s=t[a],o=t[a+1];if(s.scale>=e&&o.scale<=e){n=(e-s.scale)/(o.scale-s.scale),i=s.effects,r=o.effects;break}}for(let a=0;a<this.effects.length;a++)this.effects[a].interpolate(i[a],r[a],n)}};function p(e){const t=(0,h.Q)(e)||[];return function(e){const t=e[0];return!!t&&"type"in t}(t)?[{scale:d,effects:t}]:t}function f(e,t,s){return!e[0]?.effects||!t[0]?.effects||!((e[0]?.scale===d||t[0]?.scale===d)&&(e.length>1||t.length>1)&&s<=0)&&(0,u.AS)(e[0].effects,t[0].effects)}function g(e,t,s){return e+(t-e)*s}(0,i._)([(0,l.Cb)()],v.prototype,"_to",void 0),(0,i._)([(0,l.Cb)()],v.prototype,"duration",void 0),(0,i._)([(0,l.Cb)({value:""})],v.prototype,"effect",null),(0,i._)([(0,l.Cb)({readOnly:!0})],v.prototype,"effects",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],v.prototype,"hasEffects",null),(0,i._)([(0,l.Cb)({value:0})],v.prototype,"scale",null),(0,i._)([(0,l.Cb)({readOnly:!0})],v.prototype,"transitioning",null),v=(0,i._)([(0,c.j)("esri.layers.effects.EffectView")],v)},33624:(e,t,s)=>{s.d(t,{W:()=>a});var i=s(23588),r=s(41978),n=s(87422);class a extends n.s{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e))}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new r.AM),this._effectView.effect=e,this.requestRender())}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.children.length;if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const s=e.parent;return s&&s!==this&&s.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}_createTransforms(){return{dvs:(0,i.c)()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(e);for(const t of this.children)t.afterRender(e)}createRenderParams(e){return{...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}},87422:(e,t,s)=>{s.d(t,{s:()=>l});var i=s(91505),r=s(93169),n=s(92026),a=s(66978);const o=1/(0,r.Z)("mapview-transitions-duration");class l extends i.Z{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(e){this._clips=e,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}get stage(){return this._stage}set stage(e){if(this._stage===e)return;const t=this._stage;this._stage=e,e?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return(0,n.Wi)(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,a.hh)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,a.hh)(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(e){this.updateTransitionProperties(e.deltaTime,e.state.scale)}afterRender(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(e){}processRender(e){this.stage&&this.computedVisible&&this.doRender(e)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(e,t){if(this.fadeTransitionEnabled){const t=this._fadeOutResolver||!this.visible?0:this.opacity,s=this.computedOpacity;if(s===t)this.computedVisible=this.visible;else{const i=e*o;this.computedOpacity=s>t?Math.max(t,s-i):Math.min(t,s+i),this.computedVisible=this.computedOpacity>0;const r=t===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(e){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},38999:(e,t,s)=>{var i,r;function n(e){switch(e){case"left":return i.Left;case"right":return i.Right;case"center":return i.Center}}function a(e){switch(e){case"top":return r.Top;case"middle":return r.Center;case"baseline":return r.Baseline;case"bottom":return r.Bottom}}function o(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[i.Right,r.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[i.Center,r.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[i.Left,r.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[i.Right,r.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[i.Center,r.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[i.Left,r.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[i.Right,r.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[i.Center,r.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[i.Left,r.Top];default:return console.debug(`Found invalid placement type ${e}`),[i.Center,r.Center]}}function l(e){switch(e){case i.Right:return-1;case i.Center:return 0;case i.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function c(e){switch(e){case r.Top:return 1;case r.Center:return 0;case r.Bottom:case r.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function h(e){switch(e){case"left":return i.Left;case"right":return i.Right;case"center":return i.Center}}function u(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}s.d(t,{Hd:()=>h,M7:()=>i,NS:()=>u,TR:()=>r,b7:()=>a,g:()=>l,kH:()=>n,qv:()=>o,tf:()=>c}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(i||(i={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(r||(r={}))},54815:(e,t,s)=>{s.d(t,{CA:()=>c,Gq:()=>b,Xp:()=>l,a:()=>S,dk:()=>_,hF:()=>u,jj:()=>h,jy:()=>o,m2:()=>d,mE:()=>m,qr:()=>y});var i=s(10064),r=s(38999),n=s(80613);const a=Object.keys(n.mD).filter((e=>"number"==typeof n.mD[e])).reduce(((e,t)=>({...e,[t]:n.mD[t]})),{});function o(e){return e===n.mD.OUTLINE_FILL||e===n.mD.OUTLINE_FILL_SIMPLE}function l(e){return function(e){return e===n.mD.SIMPLE||e===n.mD.OUTLINE_FILL_SIMPLE}(e.symbologyType)}function c(e){return o(e.symbologyType)}function h(e,t){switch(e){case n.LW.FILL:return _.from(t);case n.LW.LINE:return S.from(t);case n.LW.MARKER:return m.from(t);case n.LW.TEXT:return y.from(t);case n.LW.LABEL:return b.from(t);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${e}`)}}function u(e){switch(d.load(e).geometryType){case n.LW.MARKER:return new m(e);case n.LW.FILL:return new _(e);case n.LW.LINE:return new S(e);case n.LW.TEXT:return new y(e);case n.LW.LABEL:return new b(e)}}class d{constructor(e){this._data=0,this._data=e}static load(e){const t=this.shared;return t.data=e,t}set data(e){this._data=e}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(e){this.setBits(e,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(e){this.setBit(20,e)}get sdf(){return!!this.bit(11)}set sdf(e){this.setBit(11,e)}get pattern(){return!!this.bit(12)}set pattern(e){this.setBit(12,e)}get textureBinding(){return this.bits(0,8)}set textureBinding(e){this.setBits(e,0,8)}get symbologyType(){return this.bits(21,26)}set symbologyType(e){this.setBits(e,21,26)}get geometryTypeString(){switch(this.geometryType){case n.LW.FILL:return"fill";case n.LW.MARKER:return"marker";case n.LW.LINE:return"line";case n.LW.TEXT:return"text";case n.LW.LABEL:return"label";default:throw new i.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(e,t){const s=1<<e;t?this._data|=s:this._data&=~s}bit(e){return(this._data&1<<e)>>e}setBits(e,t,s){for(let i=t,r=0;i<s;i++,r++)this.setBit(i,0!=(e&1<<r))}bits(e,t){let s=0;for(let i=e,r=0;i<t;i++,r++)s|=this.bit(i)<<r;return s}hasVV(){return!1}setVV(e,t){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:n.mD[this.symbologyType],options:a,namespace:"SYMBOLOGY_TYPE"}}}getVariationHash(){return this._data&~(7&this.textureBinding)}}d.shared=new d(0);const v=e=>class extends e{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(e){this.setBit(16,e)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(e){this.setBit(17,e)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(e){this.setBit(18,e)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(e){this.setBit(19,e)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(e,t){super.setVV(e,t);const s=function(e,t,s){const i=n.X.SIZE_FIELD_STOPS|n.X.SIZE_MINMAX_VALUE|n.X.SIZE_SCALE_STOPS|n.X.SIZE_UNIT_VALUE,r=(t&(n.mf.FIELD_TARGETS_OUTLINE|n.mf.MINMAX_TARGETS_OUTLINE|n.mf.SCALE_TARGETS_OUTLINE|n.mf.UNIT_TARGETS_OUTLINE))>>>4;return e===n.LW.LINE&&s.isOutline||e===n.LW.FILL&&o(s.symbologyType)?i&r:i&~r}(this.geometryType,e,t)&e;this.vvSizeMinMaxValue=!!(s&n.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&n.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&n.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&n.X.SIZE_SCALE_STOPS)}},p=e=>class extends e{get vvRotation(){return 0!==this.bit(15)}set vvRotation(e){this.setBit(15,e)}hasVV(){return super.hasVV()||this.vvRotation}setVV(e,t){super.setVV(e,t),this.vvRotation=!t.isOutline&&!!(e&n.X.ROTATION)}},f=e=>class extends e{get vvColor(){return 0!==this.bit(13)}set vvColor(e){this.setBit(13,e)}hasVV(){return super.hasVV()||this.vvColor}setVV(e,t){super.setVV(e,t),this.vvColor=!t.isOutline&&!!(e&n.X.COLOR)}},g=e=>class extends e{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(e){this.setBit(14,e)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(e,t){super.setVV(e,t),this.vvOpacity=!t.isOutline&&!!(e&n.X.OPACITY)}};class _ extends(f(g(v(d)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const{symbologyType:t,vvFlags:s}=e,i=this.load(0);return i.geometryType=n.LW.FILL,i.symbologyType=t,t!==n.mD.DOT_DENSITY&&i.setVV(s,e),i.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}_.shared=new _(0);class m extends(f(g(p(v(d))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const{symbologyType:t,vvFlags:s}=e,i=this.load(0);return i.geometryType=n.LW.MARKER,i.symbologyType=t,t!==n.mD.HEATMAP&&i.setVV(s,e),i.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}m.shared=new m(0);class S extends(f(g(v(d)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.LINE,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}S.shared=new S(0);class y extends(f(g(p(v(d))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.TEXT,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}y.shared=new y(0);class b extends(v(d)){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.LABEL,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.mapAligned=(0,r.NS)(e.placement),t.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}b.shared=new b(0)},10435:(e,t,s)=>{s.d(t,{v:()=>r});var i=s(92026);class r{static getStorageSpec(e){return null}static createOrUpdateRendererSchema(e,t){return(0,i.pC)(e)&&"default"===e.type?e:{type:"default"}}static getVariation(e){return{}}static getVariationHash(e){return 0}}r.type="default",r.programSpec=null},8848:(e,t,s)=>{s.d(t,{t4:()=>_,a1:()=>S,EJ:()=>m});var i=s(10064),r=s(80613),n=s(54815),a=s(10435),o=s(92026),l=s(65800),c=s(94109),h=s(8548);class u extends a.v{static getStorageSpec(e){let{attributes:t}=e;return{visualVariables:!1,attributes:t??null}}static _createRendererSchema(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(e,t){const{attributes:s,dotValue:i,referenceScale:r,dotSize:n,dotBlendingEnabled:a,seed:h,backgroundColor:u}=t,d=(0,o.pC)(e)&&"dot-density"===e.type?e:this._createRendererSchema();d.dotValue=i,d.dotSize=n,d.dotScale=r,d.dotBlending=a,d.seed=h;const{colors:v,activeDots:p,backgroundColor:f}=d;for(let o=0;o<c.$0;o++){const e=o>=s.length?null:s[o].color;(0,l.Vs)(v,e,4*o)}for(let o=0;o<8;o++)p[o]=o<t.attributes.length?1:0;return(0,l.Vs)(f,u),d}static getVariation(e){return{ddDotBlending:e.dotBlending}}static getVariationHash(e){return e.dotBlending?1:0}}u.type="dot-density",u.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:h.g.SHORT},{location:1,name:"a_id",count:3,type:h.g.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:h.g.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:h.g.FLOAT}]}};var d=s(17842),v=s(27811);class p extends a.v{static getStorageSpec(e){let{field:t,valueExpression:s}=e;return{visualVariables:!1,attributes:t||s?[{field:t,valueExpression:s}]:null}}static _createRendererSchema(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(e,t){const{radius:s,minDensity:i,maxDensity:r,referenceScale:n,field:a,valueExpression:l,colorStops:c}=t,h=r-i,u=a||l?1:0,p=c.map((e=>{let{color:t,ratio:s}=e;return`${s}:${t.toString()}`})).join();let f,g=!0;return(0,o.pC)(e)&&"heatmap"===e.type?(f=e,g=p!==e.gradientHash):f=this._createRendererSchema(),f.radius=(0,d.F2)(s),f.minDensity=i,f.densityRange=h,f.referenceScale=n,f.isFieldActive=u,g&&(f.gradient=(0,v.uI)(c),f.gradientHash=p),f}}p.type="heatmap",p.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:h.g.SHORT},{location:1,name:"a_vertexOffset",count:2,type:h.g.SHORT},{location:4,name:"a_id",count:4,type:h.g.UNSIGNED_BYTE}]}};var f=s(51995);class g extends a.v{static getStorageSpec(e){let{attributes:t}=e;return{visualVariables:!0,attributes:t??null}}static _createRendererSchema(){return{type:"pie-chart",colors:new Float32Array(4*c.eV),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(e,t){const{attributes:s,defaultColor:i,holePercentage:r,othersCategory:n,outline:a}=t,h=(0,o.pC)(e)&&"pie-chart"===e.type?e:this._createRendererSchema();for(let o=0;o<c.eV;o++){const e=o>=s.length?new f.Z([0,0,0,0]):s[o].color;(0,l.Vs)(h.colors,e,4*o)}return(0,l.Vs)(h.defaultColor,i),(0,l.Vs)(h.othersColor,n?.color),(0,l.Vs)(h.outlineColor,a?.color),h.outlineWidth=(0,d.F2)(a?.width||0),h.holePercentage=r,h.sectorThreshold=n?.threshold||0,h.numberOfFields=s.length,h}static getVariation(e){return{numberOfFields:e.numberOfFields}}static getVariationHash(e){return e.numberOfFields}}function _(e,t){if(e.type!==t)throw new i.Z("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${t}" but found type "${e.type}"`)}function m(e){switch(e.type){case"dot-density":return u;case"heatmap":return p;case"pie-chart":return g;default:return a.v}}function S(e){const{geometryType:t,symbologyType:s}=n.m2.load(e);switch(t){case r.LW.FILL:if(s===r.mD.DOT_DENSITY)return u;break;case r.LW.MARKER:switch(s){case r.mD.HEATMAP:return p;case r.mD.PIE_CHART:return g}}return a.v}g.type="pie-chart",g.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:h.g.SHORT},{location:1,name:"a_vertexOffset",count:2,type:h.g.SHORT},{location:2,name:"a_texCoords",count:2,type:h.g.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:h.g.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:h.g.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:h.g.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:h.g.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:h.g.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:h.g.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]}}}]);
//# sourceMappingURL=8651.1b42bc6c.chunk.js.map