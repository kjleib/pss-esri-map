"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[8226],{8226:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Y});var r=i(27366),s=i(52639),a=i(40281),n=i(94172),o=i(49861),l=(i(63780),i(93169),i(25243),i(69912)),h=i(78983),d=i(87433),c=i(95986),p=i(34035),u=i(83978),y=i(85015),m=i(32718),g=i(92026),w=i(66978),x=i(17314),v=i(90110),b=i(33624),_=i(10978),f=i(9229);const P=m.Z.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let C=class extends y.Z{constructor(){super(...arguments),this.attached=!1,this.container=new b.W,this.updateRequested=!1,this.type="imagery",this._bitmapView=new v.c}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,w.D_)(e)||P.error(e)}))}hitTest(e){return new s.Z({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new f.Z({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),r=(0,x.Kh)(i,t);return(0,g.pC)(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}_fetchImage(e,t,i,r){return(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,r).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:r.signal}).then((t=>{const i=new _.Z(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return i.filter=e=>this.layer.applyFilter(e),i}))))}};(0,r._)([(0,o.Cb)()],C.prototype,"attached",void 0),(0,r._)([(0,o.Cb)()],C.prototype,"container",void 0),(0,r._)([(0,o.Cb)()],C.prototype,"layer",void 0),(0,r._)([(0,o.Cb)()],C.prototype,"strategy",void 0),(0,r._)([(0,o.Cb)()],C.prototype,"timeExtent",void 0),(0,r._)([(0,o.Cb)()],C.prototype,"view",void 0),(0,r._)([(0,o.Cb)()],C.prototype,"updateRequested",void 0),(0,r._)([(0,o.Cb)()],C.prototype,"updating",null),(0,r._)([(0,o.Cb)()],C.prototype,"type",void 0),C=(0,r._)([(0,l.j)("esri.views.2d.layers.imagery.ImageryView2D")],C);const R=C;var E=i(76200),V=i(41691),S=i(53866),k=i(80394),D=i(64145),T=i(57874),Z=i(80613),q=i(64510);class B extends q.Z{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf)",brushes:[T.Z],target:()=>this.children,drawPhase:Z.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===Z.jx.MAP&&this.symbolTypes.forEach((t=>{e.renderPass=t,super.doRender(e)}))}}var F=i(60831);const I=m.Z.getLogger("esri.views.2d.layers.imagery.VectorFieldView2D");let z=class extends y.Z{constructor(e){super(e),this.update=(0,w.Ds)(((e,t)=>this._update(e,t).catch((e=>{(0,w.D_)(e)||I.error(e)}))))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:s}=e.state,a=new S.Z({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[n,o]=e.state.size;this._loading=this.fetchPixels(a,n,o,i);const l=await this._loading;this._addToDisplay(l,t,e.state),this._loading=null}_addToDisplay(e,t,i){if((0,g.Wi)(e.pixelBlock))return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=e,a=new F.F(s);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=r.xmin,a.y=r.ymax,a.pixelRatio=i.pixelRatio,a.rotation=i.rotation,a.resolution=i.resolution,a.width=s.width*t.symbolTileSize,a.height=s.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a)}};(0,r._)([(0,o.Cb)()],z.prototype,"fetchPixels",void 0),(0,r._)([(0,o.Cb)()],z.prototype,"container",void 0),(0,r._)([(0,o.Cb)()],z.prototype,"_loading",void 0),(0,r._)([(0,o.Cb)()],z.prototype,"updating",null),z=(0,r._)([(0,l.j)("esri.views.2d.layers.imagery.ImageryVFStrategy")],z);const A=z;let j=class extends V.r{constructor(){super(...arguments),this.attached=!1,this.container=new B,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:n,width:o,height:l}=(0,D.BH)(e,t,i,a,s);if((0,g.pC)(s)&&!s.intersects(e))return{extent:n,pixelBlock:null};const h={bbox:`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const e=this.getPixelData();if((0,g.pC)(e)&&`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===h.bbox)return e}const{pixelData:d}=await this.layer.fetchImage(n,o,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});return this._dataParameters=h,(0,g.Wi)(d.pixelBlock)?{extent:n,pixelBlock:null}:{extent:n,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?(0,g.Wg)((0,D.KC)(d.pixelBlock,"vector-uv")):d.pixelBlock}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new A({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add((0,n.YP)((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),n.tX),"vector-field-view-update")}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:e,pixelBlock:t}=this.container.children[0].rawPixelData;return{extent:e,pixelBlock:t}}hitTest(e){return new s.Z({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams)}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams)}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&i&&r&&s}async _getProjectedFullExtent(e){try{return await(0,k.tB)(this.layer.fullExtent,e)}catch(B){try{const t=(await(0,E.default)(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?S.Z.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};(0,r._)([(0,o.Cb)()],j.prototype,"attached",void 0),(0,r._)([(0,o.Cb)()],j.prototype,"container",void 0),(0,r._)([(0,o.Cb)()],j.prototype,"layer",void 0),(0,r._)([(0,o.Cb)()],j.prototype,"timeExtent",void 0),(0,r._)([(0,o.Cb)()],j.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],j.prototype,"view",void 0),(0,r._)([(0,o.Cb)()],j.prototype,"updating",null),j=(0,r._)([(0,l.j)("esri.views.2d.layers.imagery.VectorFieldView2D")],j);const U=j;var M=i(10064),O=i(7882),H=i(45948),G=i(21149),N=i(24405);const L=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new M.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:r}=i,s=(0,N.V)(i,t);if(!r||(0,g.Wi)(s))throw new M.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:r,popupTemplate:s});const a=await s.getRequiredFields(),n=new G.Z;n.timeExtent=this.timeExtent,n.geometry=e,n.outFields=a,n.outSpatialReference=e.spatialReference;const o=this.view.resolution,l="2d"===this.view.type?new O.Z(o,o,this.view.spatialReference):new O.Z(.5*o,.5*o,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:d}=s.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},c={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:l,showNoDataRecords:d,signal:(0,g.pC)(t)?t.signal:null};return i.queryVisibleRasters(n,c).then((e=>e))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,r._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"suspended",void 0),(0,r._)([(0,o.Cb)(H.qG)],t.prototype,"timeExtent",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"view",void 0),t=(0,r._)([(0,l.j)("esri.views.layers.ImageryLayerView")],t),t};var W=i(67581),$=i(13107);let J=class extends(L((0,$.Z)((0,c.y)(W.Z)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new h.J,this.subview=null}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new p.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new u.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([(0,n.YP)((()=>this.layer.blendMode??"normal"),(e=>this.subview.container.blendMode=e),n.tX),(0,n.YP)((()=>this.layer.effect??null),(e=>this.subview.container.effect=e),n.tX),(0,n.YP)((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),n.Z_),(0,n.YP)((()=>this.timeExtent),(e=>{this.subview.timeExtent=e,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch()}),n.Z_),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()})),(0,n.YP)((()=>this.layer.renderer),(()=>this._setSubView()))],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:a.Z.isCollection(e)?e.getItemAt(0):e)instanceof s.Z))return{remove:()=>{}};let i=[];return Array.isArray(e)||a.Z.isCollection(e)?i=e.map((e=>e.clone())):e instanceof s.Z&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if("vector-field"===e?t="imageryVF":"flow"===e&&(t="flow"),this.subview){if(this.subview.type===t)return this._attachSubview(this.subview),void("flow"===this.subview.type&&this.subview.redrawOrRefetch());this._detachSubview(this.subview),this.subview?.destroy()}this.subview="imagery"===t?new R({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===t?new U({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d.Z({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};(0,r._)([(0,o.Cb)()],J.prototype,"pixelData",null),(0,r._)([(0,o.Cb)({readOnly:!0})],J.prototype,"updating",null),(0,r._)([(0,o.Cb)()],J.prototype,"subview",void 0),J=(0,r._)([(0,l.j)("esri.views.2d.layers.ImageryLayerView2D")],J);const Y=J},83978:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(27366),s=(i(32718),i(25243),i(63780),i(93169),i(75366),i(69912)),a=i(80613),n=i(82022),o=i(8548);let l=class extends n.Z{doRender(e){e.drawPhase===a.jx.HIGHLIGHT&&super.doRender(e)}renderChildren(e){if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,i=t.effects.highlight;i.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(o.lk.COLOR_BUFFER_BIT),this._renderChildren(e,i.defines.concat(["highlightAll"])),i.draw(e),i.unbind()}};l=(0,r._)([(0,s.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const h=l}}]);
//# sourceMappingURL=8226.c2dcb463.chunk.js.map