"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[2977],{42977:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});var r=i(27366),a=i(76200),l=i(10064),s=i(41691),n=i(92026),o=i(97642),c=i(66978),h=i(35995),p=i(49861),u=(i(63780),i(93169),i(89125)),d=i(38511),v=i(69912),y=i(31201),m=i(78952),f=i(30651),_=i(27961),b=i(17775),g=i(6741),w=i(11936),S=i(6693),C=i(46671),T=i(6061),O=i(29598),A=i(71684),D=i(56811),L=i(18870),Z=i(25899),$=i(45948),P=i(77990);const k=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let z=class extends((0,S.h)((0,L.x)((0,D.M)((0,T.q)((0,O.I)((0,b.Z)((0,g.O)((0,w.Y)((0,o.R)((0,s.p)((0,A.Q)((0,_.V)((0,C.N)(f.Z)))))))))))))){constructor(){super(...arguments),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,n.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}get attributionDataUrl(){const e=this.parsedUrl?.path.toLowerCase();return e&&this._getDefaultAttribution(this._getMapName(e))}readSpatialReference(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&m.Z.fromJSON(e)}writeSublayers(e,t,i,r){if(!this.loaded||!e)return;const a=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray(),l=[],s={writeSublayerStructure:!1,...r};a.forEach((e=>{const t=e.write({},s);l.push(t)})),l.some((e=>Object.keys(e).length>1))&&(t.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,h.mN)(e).path)):null}fetchTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=r,s=this.getTileUrl(e,t,i),n={responseType:"image",signal:l,query:{...this.refreshParameters}};return(0,a.default)(s,n).then((e=>e.data))}getTileUrl(e,t,i){const r=!this.tilemapCache&&this.supportsBlankTile,a=(0,h.B7)({...this.parsedUrl.query,blankTile:!r&&null,...this.customParameters,token:this.apiKey}),l=this.tileServers;return`${l&&l.length?l[t%l.length]:this.parsedUrl.path}/tile/${e}/${t}/${i}${a?"?"+a:""}`}_fetchService(e){return new Promise(((t,i)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new l.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new l.Z("tile-layer:undefined-url","layer's url is not defined");const r=(0,Z.Qc)(this.parsedUrl.path);if((0,n.pC)(r)&&"ImageServer"===r.serverType)throw new l.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,a.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t,i)})).then((t=>{if(t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,Z.M8)(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,t){if(!(0,Z.B5)(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,a.default)(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new l.Z("tile-layer:version-not-available")}))}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}_getDefaultAttribution(e){if(!e)return;let t;e=e.toLowerCase();for(let i=0,r=k.length;i<r;i++)if(t=k[i],t.toLowerCase().includes(e))return(0,h.hF)("//static.arcgis.com/attribution/"+t)}_getDefaultTileServers(e){const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||i?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,r._)([(0,p.Cb)({readOnly:!0})],z.prototype,"attributionDataUrl",null),(0,r._)([(0,p.Cb)({type:["show","hide","hide-children"]})],z.prototype,"listMode",void 0),(0,r._)([(0,p.Cb)({json:{read:!0,write:!0}})],z.prototype,"blendMode",void 0),(0,r._)([(0,p.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],z.prototype,"isReference",void 0),(0,r._)([(0,p.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],z.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.Cb)({type:Boolean})],z.prototype,"resampling",void 0),(0,r._)([(0,p.Cb)()],z.prototype,"sourceJSON",void 0),(0,r._)([(0,p.Cb)({type:m.Z})],z.prototype,"spatialReference",void 0),(0,r._)([(0,d.r)("spatialReference",["spatialReference","tileInfo"])],z.prototype,"readSpatialReference",null),(0,r._)([(0,p.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],z.prototype,"path",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],z.prototype,"sublayers",void 0),(0,r._)([(0,y.c)("sublayers",{layers:{type:[P.Z]}})],z.prototype,"writeSublayers",null),(0,r._)([(0,p.Cb)({json:{read:!1,write:!1}})],z.prototype,"popupEnabled",void 0),(0,r._)([(0,p.Cb)()],z.prototype,"tileServers",null),(0,r._)([(0,u.p)("tileServers")],z.prototype,"castTileServers",null),(0,r._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),(0,r._)([(0,p.Cb)($.HQ)],z.prototype,"url",void 0),z=(0,r._)([(0,v.j)("esri.layers.TileLayer")],z),z.prototype.fetchTile.__isDefault__=!0;const N=z},17775:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(27366),a=(i(59486),i(49861)),l=(i(63780),i(93169),i(25243),i(38511)),s=i(69912),n=i(71466),o=i(23638),c=i(78952);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.includes("Tilemap")?new o.y({layer:this}):null}};return(0,r._)([(0,a.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,r._)([(0,a.Cb)()],t.prototype,"minScale",void 0),(0,r._)([(0,l.r)("service","minScale")],t.prototype,"readMinScale",null),(0,r._)([(0,a.Cb)()],t.prototype,"maxScale",void 0),(0,r._)([(0,l.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,r._)([(0,a.Cb)({type:c.Z})],t.prototype,"spatialReference",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,r._)([(0,a.Cb)(n.h)],t.prototype,"tileInfo",void 0),(0,r._)([(0,a.Cb)()],t.prototype,"tilemapCache",void 0),(0,r._)([(0,l.r)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),(0,r._)([(0,a.Cb)()],t.prototype,"version",void 0),t=(0,r._)([(0,s.j)("esri.layers.mixins.ArcGISCachedService")],t),t}},23638:(e,t,i)=>{i.d(t,{y:()=>O});var r,a=i(27366),l=i(76200),s=i(85015),n=i(59896),o=i(10064),c=i(41691),h=i(32718),p=i(16054),u=i(27546),d=i(66978),v=i(94172),y=i(99346),m=i(35995),f=i(49861),_=i(63780),b=(i(93169),i(89125)),g=i(69912),w=i(84652);class S{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),r=i%8,a=i>>3,l=this._tileAvailabilityBitSet;return a<0||a>l.length?"unknown":l[a]&1<<r?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let r=!0,a=!0;const l=Math.ceil(t*i/8),s=new Uint8Array(l);let n=0;for(let o=0;o<e.length;o++){const t=o%8;e[o]?(a=!1,s[n]|=1<<t):r=!1,7===t&&++n}a?this._allAvailability="unavailable":r?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=s,this.byteSize+=s.length)}static fromDefinition(e,t){const i=e.service.request||l.default,{row:r,col:a,width:s,height:n}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:a,width:s,height:n},valid:!0,data:(0,_.a9)(s*n,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==r||e.location.left!==a||e.location.width!==s||e.location.height!==n))throw new o.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:a,width:s,height:n}});return S.fromJSON(e)}))}static fromJSON(e){S._validateJSON(e);const t=new S;return t.location=Object.freeze((0,w.d9)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static _validateJSON(e){if(!e||!e.location)throw new o.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function C(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const T=h.Z.getLogger("esri.layers.support.TilemapCache");let O=r=class extends((0,c.p)(s.Z)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*n.Y8.MEGABYTES,this.request=l.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new p.Z(this.cacheByteSize),this.own([(0,v.YP)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition())),(0,v.YP)((()=>this.layer?.tileInfo?.lods),(e=>this._initializeAvailableLevels(e)),v.tX)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(T.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,r){if(!this._availableLevels[e])return Promise.reject(new o.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const a=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,i,a);if(l)return Promise.resolve(l);const s=r&&r.signal;return r={...r,signal:null},new Promise(((e,t)=>{(0,d.fu)(s,(()=>t((0,d.zE)())));const i=C(a);let l=this._pendingTilemapRequests[i];if(!l){l=S.fromDefinition(a,r).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).catch((e=>e)).then((r=>{if(r instanceof S){const a=r.getAvailability(t,i);if("unavailable"===a)throw new o.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return a}if((0,d.D_)(r))throw r;return"unknown"})):Promise.reject(new o.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,a){r.level=e,r.row=t,r.col=i;const l=this.layer.tileInfo;l.updateTileInfo(r);const s=this.fetchAvailability(e,t,i,a).catch((e=>{if((0,d.D_)(e))throw e;if(l.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,a,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,a,l,s){if(!this._prefetchingEnabled)return;const n=`prefetch-${e}`;if(this.handles.has(n))return;const o=new AbortController;s.then((()=>o.abort()),(()=>o.abort()));let c=!1;const h={remove(){c||(c=!0,o.abort())}};if(this.handles.add(h,n),await(0,y.MU)(10,o.signal).catch((()=>{})),c||(c=!0,this.handles.remove(n)),(0,d.Hc)(o))return;const p={id:e,level:t,row:i,col:a},u={...l,signal:o.signal},v=this.layer.tileInfo;for(let d=0;r._prefetches.length<r._maxPrefetch&&v.upsampleTile(p);++d){const e=this.fetchAvailability(p.level,p.row,p.col,u);r._prefetches.push(e);const t=()=>{r._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,m.B7)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const a=C(r);return this._tilemapCache.get(a)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};O._maxPrefetch=4,O._prefetches=new u.Z({initialSize:r._maxPrefetch}),(0,a._)([(0,f.Cb)({constructOnly:!0,type:Number})],O.prototype,"levels",void 0),(0,a._)([(0,b.p)("levels")],O.prototype,"castLevels",null),(0,a._)([(0,f.Cb)({readOnly:!0,type:Number})],O.prototype,"size",null),(0,a._)([(0,f.Cb)({constructOnly:!0,type:Number})],O.prototype,"cacheByteSize",void 0),(0,a._)([(0,f.Cb)({constructOnly:!0})],O.prototype,"layer",void 0),(0,a._)([(0,f.Cb)({constructOnly:!0})],O.prototype,"request",void 0),O=r=(0,a._)([(0,g.j)("esri.layers.support.TilemapCache")],O)},71466:(e,t,i)=>{i.d(t,{d:()=>l,h:()=>a});var r=i(22824);const a={type:r.Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,i,a){if(!e)return null;const{minScale:l,maxScale:s,minLOD:n,maxLOD:o}=t;if(null!=n&&null!=o)return a&&a.ignoreMinMaxLOD?r.Z.fromJSON(e):r.Z.fromJSON({...e,lods:e.lods.filter((e=>{let{level:t}=e;return null!=t&&t>=n&&t<=o}))});if(0!==l&&0!==s){const t=e=>Math.round(1e4*e)/1e4,i=l?t(l):1/0,a=s?t(s):-1/0;return r.Z.fromJSON({...e,lods:e.lods.filter((e=>{const r=t(e.scale);return r<=i&&r>=a}))})}return r.Z.fromJSON(e)}}}]);
//# sourceMappingURL=2977.6829b633.chunk.js.map