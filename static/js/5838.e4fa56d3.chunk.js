"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[5838],{66576:(e,t,r)=>{r.d(t,{B:()=>m});var s=r(92026),o=r(80292),i=r(35995),a=r(71907),n=r(33397),p=r(25265),l=r(49861);function d(e){return u[function(e){return e instanceof Blob?e.type:function(e){const t=(0,i.Ml)(e);return h[t]||c}(e.url)}(e)]||y}const u={},c="text/plain",y=u[c],h={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const _ in h)u[h[_]]=_;var f=r(53283);function m(e){const t=(0,s.pC)(e)&&e.origins?e.origins:[void 0];return(r,a)=>{const u=function(e,t,r){if((0,s.pC)(e)&&"resource"===e.type)return function(e,t,r){const a=(0,n.VZ)(t,r);return{type:String,read:(e,t,r)=>{const s=(0,f.r)(e,t,r);return a.type===String?s:"function"==typeof a.type?new a.type({url:s}):void 0},write:{writer(t,n,l,u){if(!u||!u.resources)return"string"==typeof t?void(n[l]=(0,f.t)(t,u)):void(n[l]=t.write({},u));const c=function(e){return(0,s.Wi)(e)?null:"string"==typeof e?e:e.url}(t),y=c?(0,f.t)(c,{...u,verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},f.M.NO):null,h=a.type!==String&&(!(0,o.l)(this)||u&&u.origin&&this.originIdOf(r)>(0,p.M9)(u.origin));u&&u.portalItem&&(0,s.pC)(y)&&!(0,i.YP)(y)?h?function(e,t,r,s,o,a,n,p){const l=n.portalItem.resourceFromPath(s),u=v(r,s,n);d(u)===(0,i.Ml)(l.path)?(b(e,t,l,u,n.resources.toUpdate),o[a]=s):g(e,t,r,s,o,a,n,p)}(this,r,t,y,n,l,u,e):function(e,t,r,s){s.resources.toKeep.push({resource:s.portalItem.resourceFromPath(e)}),t[r]=e}(y,n,l,u):u&&u.portalItem&&((0,s.Wi)(y)||(0,s.pC)((0,f.i)(y))||(0,i.jc)(y)||h)?g(this,r,t,y,n,l,u,e):n[l]=y}}}}(e,t,r);switch((0,s.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=f.p;return{read:e,write:t}}}}(e,r,a);for(const e of t){const t=(0,l.CJ)(r,e,a);for(const e in u)t[e]=u[e]}}}function g(e,t,o,n,p,l,u,c){const y=(0,a.D)(),h=v(o,n,u),f=(0,i.v_)((0,s.U2)(c,"prefix"),y),m=`${f}.${d(h)}`,g=u.portalItem.resourceFromPath(m);(0,i.jc)(n)&&u.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,76200))).default,{data:s}=await t(e,{responseType:"blob"});return s}(n).then((e=>{g.path=`${f}.${d(e)}`,p[l]=g.itemRelativeUrl})).catch((()=>{}))),b(e,t,g,h,u.resources.toAdd),p[l]=g.itemRelativeUrl}function b(e,t,r,s,o){o.push({resource:r,content:s,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function v(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}},5838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>de});var s=r(27366),o=r(44055),i=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(79850),r(9014),r(40464)),a=r(76200),n=r(40281),p=r(10064),l=r(32718),d=r(92026),u=r(97642),c=r(66978),y=r(94172),h=r(35995),f=r(49861),m=(r(63780),r(93169),r(23879)),g=(r(25243),r(38511)),b=r(69912),v=r(25265),_=r(30651),I=r(27961),w=r(11936),C=r(6061),S=r(29598),F=r(56811),x=r(95731),j=r(96978),L=r(45948),R=r(87562),T=r(10536),P=r(34785),O=r(25610),U=r(52410),A=r(80031),E=r(34207),D=r(77748),N=r(85116),q=r(71065),Z=r(46784);let M=class extends Z.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,s._)([(0,f.Cb)({type:String,json:{read:!0,write:!0}})],M.prototype,"name",void 0),(0,s._)([(0,f.Cb)({type:String,json:{read:!0,write:!0}})],M.prototype,"field",void 0),(0,s._)([(0,f.Cb)({type:[Number],json:{read:!0,write:!0}})],M.prototype,"currentRangeExtent",void 0),(0,s._)([(0,f.Cb)({type:[Number],json:{read:!0,write:!0}})],M.prototype,"fullRangeExtent",void 0),(0,s._)([(0,f.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],M.prototype,"type",void 0),M=(0,s._)([(0,b.j)("esri.layers.support.RangeInfo")],M);var Q,k=r(100),G=r(84652),W=r(66576),$=r(51370),B=(r(75366),r(80885)),J=r(52587);let V=Q=class extends((0,Z.eC)(n.Z.ofType(B.Z))){constructor(e){super(e)}clone(){return new Q(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((r=>{if(!t.equals(r.spatialReference)){if(!(0,J.Up)(r.spatialReference,t))return e&&e.messages&&e.messages.push(new $.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const s=new B.Z;(0,J.Wt)(r,s,t),r=s}const s=r.toJSON(e);return delete s.spatialReference,s})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new $.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const r=new Q;return e.forEach((e=>r.add(B.Z.fromJSON(e,t)))),r}};V=Q=(0,s._)([(0,b.j)("esri.layers.support.PolygonCollection")],V);const z=V;var K,H=r(53283);let Y=K=class extends Z.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new z,this._geometriesSource=null,this._handles=new k.Z}initialize(){this._handles.add((0,y.on)((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),y.Z_))}destroy(){this._handles.destroy()}readGeometries(e,t,r){this._geometriesSource={url:(0,H.f)(e,r),context:r}}async loadGeometries(e,t){if((0,d.Wi)(this._geometriesSource))return;const{url:r,context:s}=this._geometriesSource,o=await(0,a.default)(r,{responseType:"json",signal:(0,d.U2)(t,"signal")}),i=e.toJSON(),n=o.data.map((e=>({...e,spatialReference:i})));this.geometries=z.fromJSON(n,s),this._geometriesSource=null}clone(){return new K({geometries:(0,G.d9)(this.geometries),spatialRelationship:this.spatialRelationship})}};(0,s._)([(0,f.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],Y.prototype,"spatialRelationship",void 0),(0,s._)([(0,f.Cb)({type:z,nonNullable:!0,json:{write:!0}}),(0,W.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],Y.prototype,"geometries",void 0),(0,s._)([(0,g.r)(["web-scene","portal-item"],"geometries")],Y.prototype,"readGeometries",null),Y=K=(0,s._)([(0,b.j)("esri.layers.support.SceneFilter")],Y);const X=Y;var ee=r(21371),te=r(21149),re=r(81085),se=r(81219);const oe=["3DObject","Point"],ie=l.Z.getLogger("esri.layers.SceneLayer"),ae=(0,O.v)();let ne=class extends((0,x.Vt)((0,w.Y)((0,C.q)((0,S.I)((0,F.M)((0,u.R)((0,I.V)(_.Z)))))))){constructor(){super(...arguments),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new n.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&(0,d.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new U.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:E.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return le[this.profile]||"mesh"}set renderer(e){(0,A.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,d.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:j.C,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:s,supportsUploadWithItemId:o,supportsReturnServiceEditsInSourceSpatialReference:i},data:{supportsZ:a,supportsM:n,isVersioned:p,supportsAttachment:l},operations:{supportsEditing:u,supportsUpdate:c,supportsQuery:y,supportsQueryAttachments:h}}=e,f=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:i,supportsRollbackOnFailure:s,supportsGeometryUpdate:!1,supportsUploadWithItemId:o},data:{supportsAttachment:l,supportsZ:a,supportsM:n,isVersioned:p},operations:{supportsQuery:y,supportsQueryAttachments:h,supportsEditing:u&&f,supportsAdd:!1,supportsDelete:!1,supportsUpdate:c&&f}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return(0,d.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&pe[r]?pe[r]:(ie.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=(0,d.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(c.r9).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),(0,d.pC)(this.filter)?this.filter.loadGeometries(this.spatialReference):null]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>(0,ee.y)(this,{origin:"service"},t))).then((()=>(0,A.YN)(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){(0,d.pC)(this.filter)&&await this.load()}createQuery(){const e=new te.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(ie.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,re.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,d.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,d.Wi)(this.associatedLayer))throw new p.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new p.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.statisticsInfo)if(s.name===r.name){const e=(0,h.v_)(this.parsedUrl.path,s.href);return(0,a.default)(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new p.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(x.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(x.xp.SAVE,e)}async applyEdits(e,t){const s=await r.e(9887).then(r.bind(r,29887));if(await this.load(),(0,d.Wi)(this.associatedLayer))throw new p.Z(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),s.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!oe.includes(e.layerType))throw new p.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,s=!1;if(null==e)r=!0,s=!0;else{const o=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,s=o;break;case"vertex-reference-frame":r=!0,s=!o;break;default:r=!1}}if(!r)throw new p.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!s)throw new p.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new p.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!((0,d.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),s={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=s}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,d.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,d.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,m.vw)(this);for(let r=0;r<e.length;r++){const s=e[r],o=this.originIdOf(s),i=this.associatedLayer.originIdOf(s);o<i&&(i===v.s3.SERVICE||i===v.s3.PORTAL_ITEM)&&t.setAtOrigin(s,this.associatedLayer[s],i)}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new P.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){(0,c.D_)(r)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await(0,y.N1)((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?ie.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):ie.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&ie.warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&ie.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,s._)([(0,f.Cb)({types:{key:"type",base:R.B,typeMap:{selection:T.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ne.prototype,"featureReduction",void 0),(0,s._)([(0,f.Cb)({type:[M],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ne.prototype,"rangeInfos",void 0),(0,s._)([(0,f.Cb)({json:{read:!1}})],ne.prototype,"associatedLayer",void 0),(0,s._)([(0,f.Cb)({type:["show","hide"]})],ne.prototype,"listMode",void 0),(0,s._)([(0,f.Cb)({type:["ArcGISSceneServiceLayer"]})],ne.prototype,"operationalLayerType",void 0),(0,s._)([(0,f.Cb)({json:{read:!1},readOnly:!0})],ne.prototype,"type",void 0),(0,s._)([(0,f.Cb)({...ae.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ne.prototype,"fields",void 0),(0,s._)([(0,f.Cb)()],ne.prototype,"types",null),(0,s._)([(0,f.Cb)()],ne.prototype,"typeIdField",null),(0,s._)([(0,f.Cb)()],ne.prototype,"formTemplate",null),(0,s._)([(0,f.Cb)({readOnly:!0})],ne.prototype,"fieldsIndex",null),(0,s._)([(0,f.Cb)({type:q.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],ne.prototype,"floorInfo",void 0),(0,s._)([(0,f.Cb)(ae.outFields)],ne.prototype,"outFields",void 0),(0,s._)([(0,f.Cb)({type:E.U4,readOnly:!0,json:{read:!1}})],ne.prototype,"nodePages",void 0),(0,s._)([(0,g.r)("service","nodePages",["nodePages","pointNodePages"])],ne.prototype,"readNodePages",null),(0,s._)([(0,f.Cb)({type:[E.QI],readOnly:!0})],ne.prototype,"materialDefinitions",void 0),(0,s._)([(0,f.Cb)({type:[E.Yh],readOnly:!0})],ne.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,f.Cb)({type:[E.H3],readOnly:!0})],ne.prototype,"geometryDefinitions",void 0),(0,s._)([(0,f.Cb)({readOnly:!0})],ne.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,f.Cb)({readOnly:!0})],ne.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,f.Cb)({readOnly:!0})],ne.prototype,"statisticsInfo",void 0),(0,s._)([(0,f.Cb)({type:n.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],ne.prototype,"excludeObjectIds",void 0),(0,s._)([(0,f.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ne.prototype,"definitionExpression",void 0),(0,s._)([(0,f.Cb)({type:X,json:{name:"layerDefinition.polygonFilter",write:!0}})],ne.prototype,"filter",void 0),(0,s._)([(0,f.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ne.prototype,"path",void 0),(0,s._)([(0,f.Cb)(L.PV)],ne.prototype,"elevationInfo",null),(0,s._)([(0,f.Cb)({type:String})],ne.prototype,"geometryType",null),(0,s._)([(0,f.Cb)(L.iR)],ne.prototype,"labelsVisible",void 0),(0,s._)([(0,f.Cb)({type:[D.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:N.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:N.r},write:!0}})],ne.prototype,"labelingInfo",void 0),(0,s._)([(0,f.Cb)(L.rn)],ne.prototype,"legendEnabled",void 0),(0,s._)([(0,f.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?(0,se.b)(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],ne.prototype,"opacity",void 0),(0,s._)([(0,f.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ne.prototype,"priority",void 0),(0,s._)([(0,f.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ne.prototype,"semantic",void 0),(0,s._)([(0,f.Cb)({types:i.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ne.prototype,"renderer",null),(0,s._)([(0,f.Cb)({json:{read:!1}})],ne.prototype,"cachedDrawingInfo",void 0),(0,s._)([(0,g.r)("service","cachedDrawingInfo")],ne.prototype,"readCachedDrawingInfo",null),(0,s._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],ne.prototype,"capabilities",null),(0,s._)([(0,f.Cb)({type:Boolean,json:{read:!1}})],ne.prototype,"editingEnabled",null),(0,s._)([(0,f.Cb)(L.C_)],ne.prototype,"popupEnabled",void 0),(0,s._)([(0,f.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],ne.prototype,"popupTemplate",void 0),(0,s._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],ne.prototype,"defaultPopupTemplate",null),(0,s._)([(0,f.Cb)({type:String,json:{read:!1}})],ne.prototype,"objectIdField",void 0),(0,s._)([(0,g.r)("service","objectIdField",["objectIdField","fields"])],ne.prototype,"readObjectIdField",null),(0,s._)([(0,f.Cb)({type:String,json:{read:!1}})],ne.prototype,"globalIdField",void 0),(0,s._)([(0,g.r)("service","globalIdField",["globalIdField","fields"])],ne.prototype,"readGlobalIdField",null),(0,s._)([(0,f.Cb)({readOnly:!0,type:String,json:{read:!1}})],ne.prototype,"displayField",null),(0,s._)([(0,f.Cb)({type:String,json:{read:!1}})],ne.prototype,"profile",void 0),(0,s._)([(0,g.r)("service","profile",["store.profile"])],ne.prototype,"readProfile",null),(0,s._)([(0,f.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ne.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,f.Cb)(L.YI)],ne.prototype,"screenSizePerspectiveEnabled",void 0),ne=(0,s._)([(0,b.j)("esri.layers.SceneLayer")],ne);const pe={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},le={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},de=ne},34785:(e,t,r)=>{r.d(t,{W:()=>d});var s=r(19545),o=r(76200),i=r(92026),a=r(66978),n=r(53894),p=r(70032),l=r(98995);class d{constructor(e,t,r,s){this.parsedUrl=e,this.portalItem=t,this.apiKey=r,this.signal=s,this.rootDocument=null;const o=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);o&&(this.urlParts={root:o[1],layerId:parseInt(o[2],10)})}async fetch(){if(!this.urlParts)return null;const e=this.portalItem??await this._portalItemFromServiceItemId();if((0,i.Wi)(e))return this._loadFromUrl();const t=await this._findAndLoadRelatedPortalItem(e);return(0,i.Wi)(t)?null:this._loadFeatureLayerFromPortalItem(t)}async fetchPortalItem(){if(!this.urlParts)return null;const e=this.portalItem??await this._portalItemFromServiceItemId();return(0,i.Wi)(e)?null:this._findAndLoadRelatedPortalItem(e)}async _fetchRootDocument(){if((0,i.pC)(this.rootDocument))return this.rootDocument;if((0,i.Wi)(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},t=`${this.urlParts.root}/SceneServer`;try{const r=await(0,o.default)(t,e);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument}async _fetchServiceOwningPortalUrl(){const e=s.id?.findServerInfo(this.parsedUrl.path);if(e?.owningSystemUrl)return e.owningSystemUrl;const t=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await(0,o.default)(t,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(r){(0,a.r9)(r)}return null}async _findAndLoadRelatedPortalItem(e){try{return(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((e=>"Feature Service"===e.type))||null}catch(t){return(0,a.r9)(t),null}}async _loadFeatureLayerFromPortalItem(e){await e.load({signal:this.signal});const t=await this._findMatchingAssociatedSublayerUrl(e.url);return new n.default({url:t,portalItem:e}).load({signal:this.signal})}async _loadFromUrl(){const e=await this._findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new n.default({url:e}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(e){const t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},s=this.urlParts.layerId,i=this._fetchRootDocument(),a=(0,o.default)(t,r),[n,p]=await Promise.all([a,i]),l=p&&p.layers,d=n.data&&n.data.layers;if(!Array.isArray(d))throw new Error("expected layers array");if(Array.isArray(l)){for(let o=0;o<Math.min(l.length,d.length);o++)if(l[o].id===s)return`${t}/${d[o].id}`}else if(s<d.length)return`${t}/${d[s].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const e=(await this._fetchRootDocument()).serviceItemId;if(!e)return null;const t=new l.default({id:e,apiKey:this.apiKey}),r=await this._fetchServiceOwningPortalUrl();(0,i.pC)(r)&&(t.portal=new p.Z({url:r}));try{return t.load({signal:this.signal})}catch(s){return(0,a.r9)(s),null}}}},34207:(e,t,r)=>{r.d(t,{H3:()=>g,QI:()=>u,U4:()=>p,Yh:()=>y});var s=r(27366),o=r(46784),i=r(49861),a=(r(63780),r(93169),r(25243),r(27135)),n=r(69912);let p=class extends o.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,s._)([(0,i.Cb)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,s._)([(0,i.Cb)({type:Number})],p.prototype,"rootIndex",void 0),(0,s._)([(0,i.Cb)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,s._)([(0,n.j)("esri.layer.support.I3SNodePageDefinition")],p);let l=class extends o.wq{constructor(){super(...arguments),this.factor=1}};(0,s._)([(0,i.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,s._)([(0,i.Cb)({type:Number})],l.prototype,"factor",void 0),l=(0,s._)([(0,n.j)("esri.layer.support.I3SMaterialTexture")],l);let d=class extends o.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,s._)([(0,i.Cb)({type:[Number]})],d.prototype,"baseColorFactor",void 0),(0,s._)([(0,i.Cb)({type:l})],d.prototype,"baseColorTexture",void 0),(0,s._)([(0,i.Cb)({type:l})],d.prototype,"metallicRoughnessTexture",void 0),(0,s._)([(0,i.Cb)({type:Number})],d.prototype,"metallicFactor",void 0),(0,s._)([(0,i.Cb)({type:Number})],d.prototype,"roughnessFactor",void 0),d=(0,s._)([(0,n.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],d);let u=class extends o.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,s._)([(0,a.J)({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),(0,s._)([(0,i.Cb)({type:Number})],u.prototype,"alphaCutoff",void 0),(0,s._)([(0,i.Cb)({type:Boolean})],u.prototype,"doubleSided",void 0),(0,s._)([(0,a.J)({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),(0,s._)([(0,i.Cb)({type:l})],u.prototype,"normalTexture",void 0),(0,s._)([(0,i.Cb)({type:l})],u.prototype,"occlusionTexture",void 0),(0,s._)([(0,i.Cb)({type:l})],u.prototype,"emissiveTexture",void 0),(0,s._)([(0,i.Cb)({type:[Number]})],u.prototype,"emissiveFactor",void 0),(0,s._)([(0,i.Cb)({type:d})],u.prototype,"pbrMetallicRoughness",void 0),u=(0,s._)([(0,n.j)("esri.layer.support.I3SMaterialDefinition")],u);let c=class extends o.wq{};(0,s._)([(0,i.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],c.prototype,"name",void 0),(0,s._)([(0,a.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],c.prototype,"format",void 0),c=(0,s._)([(0,n.j)("esri.layer.support.I3STextureFormat")],c);let y=class extends o.wq{constructor(){super(...arguments),this.atlas=!1}};(0,s._)([(0,i.Cb)({type:[c]})],y.prototype,"formats",void 0),(0,s._)([(0,i.Cb)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,s._)([(0,n.j)("esri.layer.support.I3STextureSetDefinition")],y);let h=class extends o.wq{};(0,s._)([(0,a.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,s._)([(0,i.Cb)({type:Number})],h.prototype,"component",void 0),h=(0,s._)([(0,n.j)("esri.layer.support.I3SGeometryAttribute")],h);let f=class extends o.wq{};(0,s._)([(0,a.J)({draco:"draco"})],f.prototype,"encoding",void 0),(0,s._)([(0,i.Cb)({type:[String]})],f.prototype,"attributes",void 0),f=(0,s._)([(0,n.j)("esri.layer.support.I3SGeometryCompressedAttributes")],f);let m=class extends o.wq{constructor(){super(...arguments),this.offset=0}};(0,s._)([(0,i.Cb)({type:Number})],m.prototype,"offset",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"position",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"normal",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"uv0",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"color",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"uvRegion",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"featureId",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"faceRange",void 0),(0,s._)([(0,i.Cb)({type:f})],m.prototype,"compressedAttributes",void 0),m=(0,s._)([(0,n.j)("esri.layer.support.I3SGeometryBuffer")],m);let g=class extends o.wq{};(0,s._)([(0,a.J)({triangle:"triangle"})],g.prototype,"topology",void 0),(0,s._)([(0,i.Cb)()],g.prototype,"geometryBuffers",void 0),g=(0,s._)([(0,n.j)("esri.layer.support.I3SGeometryDefinition")],g)},96978:(e,t,r)=>{r.d(t,{C:()=>s});const s={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=5838.e4fa56d3.chunk.js.map