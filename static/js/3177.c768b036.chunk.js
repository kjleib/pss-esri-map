"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[3177],{13177:(e,s,i)=>{i.r(s),i.d(s,{default:()=>o});var r=i(27366),t=i(92026),a=i(94172),l=(i(32718),i(25243),i(63780),i(93169),i(75366),i(69912)),n=i(18661),y=i(99288);let u=class extends y.default{initialize(){this.handles.add([(0,a.YP)((()=>this.view?.viewpoint),(()=>this._update()),a.nn)])}_injectOverrides(e){let s=super._injectOverrides(e);const i=this.view.scale,r=this.layer.sublayers.filter((e=>function(e,s){return!e.visible||0!==e.minScale&&s>e.minScale||0!==e.maxScale&&s<e.maxScale}(e,i))).map((e=>e.subtypeCode));if(!r.length)return s;s=(0,t.pC)(s)?s:(new n.Z).toJSON();const a=`NOT ${this.layer.subtypeField} IN (${r.join(",")})`;return s.where=s.where?`(${s.where}) AND (${a})`:a,s}_setLayersForFeature(e){const s=this.layer.fieldsIndex.get(this.layer.subtypeField),i=e.attributes[s.name],r=this.layer.sublayers.find((e=>e.subtypeCode===i));e.layer=r,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},s=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),i=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${s})`:"1=2";let r=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return r+=i,{...super._createSchemaConfig(),...e,definitionExpression:r}}};u=(0,r._)([(0,l.j)("esri.views.2d.layers.SubtypeGroupLayerView2D")],u);const o=u}}]);
//# sourceMappingURL=3177.c768b036.chunk.js.map