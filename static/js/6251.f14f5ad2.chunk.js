"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[6251],{66576:(e,t,o)=>{o.d(t,{B:()=>f});var r=o(92026),i=o(80292),s=o(35995),n=o(71907),p=o(33397),a=o(25265),l=o(49861);function c(e){return y[function(e){return e instanceof Blob?e.type:function(e){const t=(0,s.Ml)(e);return h[t]||d}(e.url)}(e)]||u}const y={},d="text/plain",u=y[d],h={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const _ in h)y[h[_]]=_;var m=o(53283);function f(e){const t=(0,r.pC)(e)&&e.origins?e.origins:[void 0];return(o,n)=>{const y=function(e,t,o){if((0,r.pC)(e)&&"resource"===e.type)return function(e,t,o){const n=(0,p.VZ)(t,o);return{type:String,read:(e,t,o)=>{const r=(0,m.r)(e,t,o);return n.type===String?r:"function"==typeof n.type?new n.type({url:r}):void 0},write:{writer(t,p,l,y){if(!y||!y.resources)return"string"==typeof t?void(p[l]=(0,m.t)(t,y)):void(p[l]=t.write({},y));const d=function(e){return(0,r.Wi)(e)?null:"string"==typeof e?e:e.url}(t),u=d?(0,m.t)(d,{...y,verifyItemRelativeUrls:y&&y.verifyItemRelativeUrls?{writtenUrls:y.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},m.M.NO):null,h=n.type!==String&&(!(0,i.l)(this)||y&&y.origin&&this.originIdOf(o)>(0,a.M9)(y.origin));y&&y.portalItem&&(0,r.pC)(u)&&!(0,s.YP)(u)?h?function(e,t,o,r,i,n,p,a){const l=p.portalItem.resourceFromPath(r),y=b(o,r,p);c(y)===(0,s.Ml)(l.path)?(g(e,t,l,y,p.resources.toUpdate),i[n]=r):v(e,t,o,r,i,n,p,a)}(this,o,t,u,p,l,y,e):function(e,t,o,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[o]=e}(u,p,l,y):y&&y.portalItem&&((0,r.Wi)(u)||(0,r.pC)((0,m.i)(u))||(0,s.jc)(u)||h)?v(this,o,t,u,p,l,y,e):p[l]=u}}}}(e,t,o);switch((0,r.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=m.p;return{read:e,write:t}}}}(e,o,n);for(const e of t){const t=(0,l.CJ)(o,e,n);for(const e in y)t[e]=y[e]}}}function v(e,t,i,p,a,l,y,d){const u=(0,n.D)(),h=b(i,p,y),m=(0,s.v_)((0,r.U2)(d,"prefix"),u),f=`${m}.${c(h)}`,v=y.portalItem.resourceFromPath(f);(0,s.jc)(p)&&y.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(o.bind(o,76200))).default,{data:r}=await t(e,{responseType:"blob"});return r}(p).then((e=>{v.path=`${m}.${c(e)}`,a[l]=v.itemRelativeUrl})).catch((()=>{}))),g(e,t,v,h,y.resources.toAdd),a[l]=v.itemRelativeUrl}function g(e,t,o,r,i){i.push({resource:o,content:r,finish:o=>{!function(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}(e,t,o)}})}function b(e,t,o){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(o))],{type:"application/json"})}},56251:(e,t,o)=>{o.r(t),o.d(t,{default:()=>L});var r,i=o(27366),s=o(10064),n=o(100),p=o(92026),a=o(97642),l=o(66978),c=o(94172),y=o(49861),d=(o(63780),o(93169),o(25243),o(38511)),u=o(69912),h=o(66576),m=o(30651),f=o(27961),v=o(11936),g=o(6061),b=o(29598),_=o(56811),C=o(95731),S=o(45948),w=o(34207),x=o(76200),I=o(40281),T=o(46784),j=o(35995),N=(o(59486),o(84652)),U=o(51370),M=o(31201),R=o(52587),O=o(80885);let P=r=class extends T.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,R.Up)(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new U.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const i=new O.Z;(0,R.Wt)(e,i,r.layer.spatialReference),t[o]=i.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new r({geometry:(0,N.d9)(this.geometry),type:this.type})}};(0,i._)([(0,y.Cb)({type:O.Z}),(0,h.B)()],P.prototype,"geometry",void 0),(0,i._)([(0,M.c)(["web-scene","portal-item"],"geometry")],P.prototype,"writeGeometry",null),(0,i._)([(0,y.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,h.B)()],P.prototype,"type",void 0),P=r=(0,i._)([(0,u.j)("esri.layers.support.SceneModification")],P);const F=P;var J;let q=J=class extends((0,T.eC)(I.Z.ofType(F))){constructor(e){super(e),this.url=null}clone(){return new J({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const o=new J;for(const r of e)o.add(F.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:(0,j.mN)(e),origin:"service"},i=await(0,x.default)(e,{responseType:"json",signal:(0,p.U2)(o,"signal")}),s=t.toJSON(),n=[];for(const p of i.data)n.push(F.fromJSON({...p,geometry:{...p.geometry,spatialReference:s}},r));return new J({url:e,items:n})}};(0,i._)([(0,y.Cb)({type:String})],q.prototype,"url",void 0),q=J=(0,i._)([(0,u.j)("esri.layers.support.SceneModifications")],q);const k=q;var A=o(53283);let D=class extends((0,C.Vt)((0,v.Y)((0,g.q)((0,b.I)((0,_.M)((0,a.R)((0,f.V)(m.Z)))))))){constructor(){super(...arguments),this._handles=new n.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add((0,c.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),c.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,A.f)(e,o),context:o}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,p.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,l.r9)(o)}if(await this._fetchService(t),(0,p.pC)(this._modificationsSource)){const t=await k.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,p.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(C.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(C.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,i._)([(0,y.Cb)({type:String,readOnly:!0})],D.prototype,"geometryType",void 0),(0,i._)([(0,y.Cb)({type:["show","hide"]})],D.prototype,"listMode",void 0),(0,i._)([(0,y.Cb)({type:["IntegratedMeshLayer"]})],D.prototype,"operationalLayerType",void 0),(0,i._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],D.prototype,"type",void 0),(0,i._)([(0,y.Cb)({type:w.U4,readOnly:!0})],D.prototype,"nodePages",void 0),(0,i._)([(0,y.Cb)({type:[w.QI],readOnly:!0})],D.prototype,"materialDefinitions",void 0),(0,i._)([(0,y.Cb)({type:[w.Yh],readOnly:!0})],D.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,y.Cb)({type:[w.H3],readOnly:!0})],D.prototype,"geometryDefinitions",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],D.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,y.Cb)({type:k}),(0,h.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],D.prototype,"modifications",void 0),(0,i._)([(0,d.r)(["web-scene","portal-item"],"modifications")],D.prototype,"readModifications",null),(0,i._)([(0,y.Cb)(S.PV)],D.prototype,"elevationInfo",void 0),(0,i._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),D=(0,i._)([(0,u.j)("esri.layers.IntegratedMeshLayer")],D);const L=D},34207:(e,t,o)=>{o.d(t,{H3:()=>v,QI:()=>y,U4:()=>a,Yh:()=>u});var r=o(27366),i=o(46784),s=o(49861),n=(o(63780),o(93169),o(25243),o(27135)),p=o(69912);let a=class extends i.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,s.Cb)({type:Number})],a.prototype,"nodesPerPage",void 0),(0,r._)([(0,s.Cb)({type:Number})],a.prototype,"rootIndex",void 0),(0,r._)([(0,s.Cb)({type:String})],a.prototype,"lodSelectionMetricType",void 0),a=(0,r._)([(0,p.j)("esri.layer.support.I3SNodePageDefinition")],a);let l=class extends i.wq{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,s.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,r._)([(0,s.Cb)({type:Number})],l.prototype,"factor",void 0),l=(0,r._)([(0,p.j)("esri.layer.support.I3SMaterialTexture")],l);let c=class extends i.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,s.Cb)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,r._)([(0,s.Cb)({type:l})],c.prototype,"baseColorTexture",void 0),(0,r._)([(0,s.Cb)({type:l})],c.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,s.Cb)({type:Number})],c.prototype,"metallicFactor",void 0),(0,r._)([(0,s.Cb)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,r._)([(0,p.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],c);let y=class extends i.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,n.J)({opaque:"opaque",mask:"mask",blend:"blend"})],y.prototype,"alphaMode",void 0),(0,r._)([(0,s.Cb)({type:Number})],y.prototype,"alphaCutoff",void 0),(0,r._)([(0,s.Cb)({type:Boolean})],y.prototype,"doubleSided",void 0),(0,r._)([(0,n.J)({none:"none",back:"back",front:"front"})],y.prototype,"cullFace",void 0),(0,r._)([(0,s.Cb)({type:l})],y.prototype,"normalTexture",void 0),(0,r._)([(0,s.Cb)({type:l})],y.prototype,"occlusionTexture",void 0),(0,r._)([(0,s.Cb)({type:l})],y.prototype,"emissiveTexture",void 0),(0,r._)([(0,s.Cb)({type:[Number]})],y.prototype,"emissiveFactor",void 0),(0,r._)([(0,s.Cb)({type:c})],y.prototype,"pbrMetallicRoughness",void 0),y=(0,r._)([(0,p.j)("esri.layer.support.I3SMaterialDefinition")],y);let d=class extends i.wq{};(0,r._)([(0,s.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,r._)([(0,n.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,r._)([(0,p.j)("esri.layer.support.I3STextureFormat")],d);let u=class extends i.wq{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,s.Cb)({type:[d]})],u.prototype,"formats",void 0),(0,r._)([(0,s.Cb)({type:Boolean})],u.prototype,"atlas",void 0),u=(0,r._)([(0,p.j)("esri.layer.support.I3STextureSetDefinition")],u);let h=class extends i.wq{};(0,r._)([(0,n.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:Number})],h.prototype,"component",void 0),h=(0,r._)([(0,p.j)("esri.layer.support.I3SGeometryAttribute")],h);let m=class extends i.wq{};(0,r._)([(0,n.J)({draco:"draco"})],m.prototype,"encoding",void 0),(0,r._)([(0,s.Cb)({type:[String]})],m.prototype,"attributes",void 0),m=(0,r._)([(0,p.j)("esri.layer.support.I3SGeometryCompressedAttributes")],m);let f=class extends i.wq{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,s.Cb)({type:Number})],f.prototype,"offset",void 0),(0,r._)([(0,s.Cb)({type:h})],f.prototype,"position",void 0),(0,r._)([(0,s.Cb)({type:h})],f.prototype,"normal",void 0),(0,r._)([(0,s.Cb)({type:h})],f.prototype,"uv0",void 0),(0,r._)([(0,s.Cb)({type:h})],f.prototype,"color",void 0),(0,r._)([(0,s.Cb)({type:h})],f.prototype,"uvRegion",void 0),(0,r._)([(0,s.Cb)({type:h})],f.prototype,"featureId",void 0),(0,r._)([(0,s.Cb)({type:h})],f.prototype,"faceRange",void 0),(0,r._)([(0,s.Cb)({type:m})],f.prototype,"compressedAttributes",void 0),f=(0,r._)([(0,p.j)("esri.layer.support.I3SGeometryBuffer")],f);let v=class extends i.wq{};(0,r._)([(0,n.J)({triangle:"triangle"})],v.prototype,"topology",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"geometryBuffers",void 0),v=(0,r._)([(0,p.j)("esri.layer.support.I3SGeometryDefinition")],v)}}]);
//# sourceMappingURL=6251.f14f5ad2.chunk.js.map