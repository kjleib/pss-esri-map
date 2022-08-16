"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[2224,4650],{2224:(e,a,t)=>{t.r(a),t.d(a,{save:()=>J,saveAll:()=>M,saveAs:()=>Z});var r=t(63780),n=t(10064),l=t(32718),s=t(92026),i=t(66978),o=t(15909),u=t(53894),y=t(94650),c=t(25899),d=t(37933),f=t(70032),p=t(98995),m=t(32698),w=t(73117);const h=l.Z.getLogger("esri.layers.FeatureLayer"),b="Feature Service";function S(e,a){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`}function I(e,a){if(a.type!==b)throw new n.Z("feature-layer:portal-item-wrong-type",S(e,`should have portal item of type "${b}"`))}async function v(e){if(await e.load(),(0,d.rQ)(e))throw new n.Z("feature-layer:save",S(e,"using an in-memory source cannot be saved to a portal item"))}async function L(e,a,t){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},a);return function(e,a){let t=e.messages.filter((e=>{let{type:a}=e;return"error"===a})).map((e=>{let{name:a,message:t,details:r}=e;return new n.Z(a,t,r)}));if(a?.ignoreUnsupported&&(t=t.filter((e=>{let{name:a}=e;return"layer:unsupported"!==a&&"symbol:unsupported"!==a&&"symbol-layer:unsupported"!==a&&"property:unsupported"!==a&&"url:unsupported"!==a}))),t.length>0)throw new n.Z("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:t})}(a,t),r}function P(e){const{layer:a,layerJSON:t}=e;return a.isTable?{layers:[],tables:[t]}:{layers:[t],tables:[]}}function g(e){(0,w.qj)(e,w.Kz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,a,t)=>t.indexOf(e)===a)))}async function O(e,a){return/\/\d+\/?$/.test(e.url)?P(a[0]):async function(e,a){const{layer:{url:t,customParameters:r,apiKey:n}}=a[0];let l=await e.fetchData("json");l&&null!=l.layers&&null!=l.tables||(l=await async function(e,a,t){var r,n;e||(e={}),(r=e).layers||(r.layers=[]),(n=e).tables||(n.tables=[]);const{url:l,customParameters:o,apiKey:c}=a,{serviceJSON:d,layersJSON:f}=await(0,y.fetchFeatureService)(l,{customParameters:o,apiKey:c}),p=T(e.layers,d.layers,t),m=T(e.tables,d.tables,t);e.layers=p.itemResources,e.tables=m.itemResources;const w=[...p.added,...m.added],h=f?[...f.layers,...f.tables]:[];return await async function(e,a,t,r){const n=a.map((e=>{let{id:a}=e;return new u.default({url:t,layerId:a,sourceJSON:r.find((e=>{let{id:t}=e;return t===a}))})}));await(0,i.as)(n.map((e=>e.load()))),n.forEach((a=>{const{layerId:t,loaded:r,defaultPopupTemplate:n}=a;r&&!(0,s.Wi)(n)&&N(a,{id:t,popupInfo:n.toJSON()},e)}))}(e,w,l,h),e}(l,{url:t,customParameters:r,apiKey:n},a.map((e=>e.layer.layerId))));for(const s of a)N(s.layer,s.layerJSON,l);return l}(e,a)}function T(e,a,t){const n=(0,r.e5)(e,a,((e,a)=>e.id===a.id));e=e.filter((e=>!n.removed.some((a=>a.id===e.id))));const l=n.added.map((e=>{let{id:a}=e;return{id:a}}));return l.forEach((a=>{let{id:t}=a;e.push({id:t})})),{itemResources:e,added:l.filter((e=>{let{id:a}=e;return!t.includes(a)}))}}function N(e,a,t){e.isTable?C(t.tables,a):C(t.layers,a)}function C(e,a){const t=e.findIndex((e=>{let{id:t}=e;return t===a.id}));-1===t?e.push(a):e[t]=a}function F(e){const{portalItem:a}=e;return(0,d.y2)(e)&&!e.dynamicDataSource&&!!a?.loaded&&a.type===b}const J=(0,i.Ds)((async function(e,a){await v(e),function(e){const a=e.portalItem;if(!a)throw h.error("save: requires the portalItem property to be set"),new n.Z("feature-layer:portal-item-not-set",S(e,"requires the portalItem property to be set"));if(!a.loaded)throw new n.Z("feature-layer:portal-item-not-loaded",S(e,"cannot be saved to a portal item that does not exist or is inaccessible"));I(e,a)}(e);const t=e.portalItem,r=(0,m.Y)(t),l=await L(e,r,a),s=await O(t,[{layer:e,layerJSON:l}]);return g(t),await t.update({data:s}),(0,o.D)(r),t}));const M=(0,i.Ds)((async(e,a)=>{await async function(e){if(!e?.length)throw new n.Z("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(e.map((e=>e.load())));for(const r of e)if(!F(r))throw new n.Z("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${S(r,"does not conform")}`,{layer:r});const a=e.map((e=>e.portalItem.id));if(new Set(a).size>1)throw new n.Z("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const t=e.map((e=>e.layerId));if(new Set(t).size!==t.length)throw new n.Z("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}(e);const t=e[0].portalItem,r=(0,m.Y)(t),l=await Promise.all(e.map((e=>L(e,r,a)))),s=await O(t,e.map(((e,a)=>({layer:e,layerJSON:l[a]}))));return g(t),await t.update({data:s}),await Promise.all(e.slice(1).map((e=>e.portalItem.reload()))),(0,o.D)(r),t.clone()})),Z=(0,i.Ds)((async function(e,a,t){await v(e);const r=function(e,a){var t,r;let n=p.default.from(a);return n.id&&(n=n.clone(),n.id=null),(t=n).type??(t.type=b),(r=n).portal??(r.portal=f.Z.getDefault()),I(e,n),n}(e,a),n=(0,m.Y)(r),l=P({layer:e,layerJSON:await L(e,n,t)});return await async function(e,a){const{url:t,layerId:r,title:n,fullExtent:l,isTable:i}=e,o=(0,c.Qc)(t),u=(0,s.pC)(o)&&"FeatureServer"===o.serverType;a.url=u?t:`${t}/${r}`,a.title||(a.title=n),a.extent=null,!i&&(0,s.pC)(l)&&(a.extent=await(0,w.$o)(l)),(0,w.ck)(a,w.Kz.METADATA),(0,w.ck)(a,w.Kz.MULTI_LAYER),(0,w.qj)(a,w.Kz.SINGLE_LAYER),i&&(0,w.qj)(a,w.Kz.TABLE),g(a)}(e,r),await async function(e,a,t){const r=e.portal;await r._signIn(),await r.user.addItem({item:e,data:a,folder:t?.folder})}(r,l,t),e.portalItem=r,(0,o.D)(n),r}))},94650:(e,a,t)=>{t.r(a),t.d(a,{fetchFeatureService:()=>p,fromUrl:()=>u});var r=t(76200),n=t(10064),l=t(92026),s=t(35995),i=t(25899),o=t(19610);async function u(e){const a=e.properties?.customParameters,r=await async function(e,a){let t=(0,i.Qc)(e);if((0,l.Wi)(t)&&(t=await c(e,a)),(0,l.Wi)(t))throw new n.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:r,sublayer:s}=t;let u;const y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(r){case"MapServer":u=null!=s?"FeatureLayer":async function(e,a){return(await m(e,{customParameters:a})).tileInfo}(e,a).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=m(e,{customParameters:a}).then((e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==a?.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=m(t.url.path,{customParameters:a}).then((e=>{if(e){if("Voxel"===e?.layerType)return"VoxelLayer";if(e?.layers&&Array.isArray(e.layers)&&e.layers.length>0){const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},t=e.layers[0]?.layerType;if(null!=a[t])return a[t]}}return"SceneLayer"}));break;default:u=y[r]}const d={FeatureLayer:!0,SceneLayer:!0},f="FeatureServer"===r,w={parsedUrl:t,Constructor:null,layerOrTableId:f?s:null,sublayerIds:null,tableIds:null},h=await u;if(d[h]&&null==s){const t=await async function(e,a,t){let r,n=!1;if("FeatureServer"===a){const a=await p(e,{customParameters:t});n=!!a.layersJSON,r=a.layersJSON||a.serviceJSON}else r=await m(e,{customParameters:t});const l=r?.layers,s=r?.tables;return{layerIds:l?.map((e=>e.id)).reverse()||[],tableIds:s?.map((e=>e.id)).reverse()||[],layerInfos:n?l:[],tableInfos:n?s:[]}}(e,r,a);f&&(w.sublayerInfos=t.layerInfos,w.tableInfos=t.tableInfos),1!==t.layerIds.length+t.tableIds.length?(w.sublayerIds=t.layerIds,w.tableIds=t.tableIds):f&&(w.layerOrTableId=t.layerIds[0]??t.tableIds[0],w.sourceJSON=t.layerInfos[0]??t.tableInfos[0])}return w.Constructor=await async function(e){return(0,o.T[e])()}(h),w}(e.url,a),s={...e.properties,url:e.url};if(!r.sublayerIds)return null!=r.layerOrTableId&&(s.layerId=r.layerOrTableId,s.sourceJSON=r.sourceJSON),new r.Constructor(s);const u=new(0,(await t.e(5069).then(t.bind(t,65069))).default)({title:r.parsedUrl.title});return function(e,a,t){function r(e,r){const n={...t,layerId:e,sublayerTitleMode:"service-name"};return(0,l.pC)(r)&&(n.sourceJSON=r),new a.Constructor(n)}a.sublayerIds.forEach((t=>{const n=r(t,y(a.sublayerInfos,t));e.add(n)})),a.tableIds.forEach((t=>{const n=r(t,y(a.tableInfos,t));e.tables.add(n)}))}(u,r,s),u}function y(e,a){return e?e.find((e=>e.id===a)):null}async function c(e,a){const t=await m(e,{customParameters:a});let r=null,n=null;const o=t.type;if("Feature Layer"===o||"Table"===o?(r="FeatureServer",n=t.id):"indexedVector"===o?r="VectorTileServer":t.hasOwnProperty("mapName")?r="MapServer":t.hasOwnProperty("bandCount")&&t.hasOwnProperty("pixelSizeX")?r="ImageServer":t.hasOwnProperty("maxRecordCount")&&t.hasOwnProperty("allowGeometryUpdates")?r="FeatureServer":t.hasOwnProperty("streamUrls")?r="StreamServer":d(t)?(r="SceneServer",n=t.id):t.hasOwnProperty("layers")&&d(t.layers?.[0])&&(r="SceneServer"),!r)return null;const u=null!=n?(0,i.DR)(e):null;return{title:(0,l.pC)(u)&&t.name||(0,s.vt)(e),serverType:r,sublayer:n,url:{path:(0,l.pC)(u)?u.serviceUrl:(0,s.mN)(e).path}}}function d(e){return e?.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}function f(e){return!e.type||"Feature Layer"===e.type}async function p(e,a){let t=await m(e,a);t=t||{},t.layers=t.layers?.filter(f)||[];const r={serviceJSON:t};if(t.currentVersion<10.5)return r;const n=await m(e+"/layers",a);return r.layersJSON={layers:n?.layers?.filter(f)||[],tables:n?.tables||[]},r}async function m(e,a){return(await(0,r.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}})).data}},19610:(e,a,t)=>{t.d(a,{T:()=>r});const r={BingMapsLayer:async()=>(await t.e(165).then(t.bind(t,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(5731),t.e(6505)]).then(t.bind(t,66505))).default,CSVLayer:async()=>(await t.e(8435).then(t.bind(t,98435))).default,ElevationLayer:async()=>(await t.e(9512).then(t.bind(t,59512))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,53894))).default,GroupLayer:async()=>(await t.e(5069).then(t.bind(t,65069))).default,GeoRSSLayer:async()=>(await t.e(54).then(t.bind(t,70054))).default,GeoJSONLayer:async()=>(await t.e(5064).then(t.bind(t,5064))).default,ImageryLayer:async()=>(await Promise.all([t.e(7314),t.e(5345),t.e(7038),t.e(9112),t.e(3752)]).then(t.bind(t,63752))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(7314),t.e(5345),t.e(394),t.e(7038),t.e(9112),t.e(3060)]).then(t.bind(t,93060))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(5731),t.e(6251)]).then(t.bind(t,56251))).default,KMLLayer:async()=>(await t.e(3838).then(t.bind(t,13838))).default,LineOfSightLayer:async()=>(await t.e(3470).then(t.bind(t,73470))).default,MapImageLayer:async()=>(await Promise.all([t.e(9668),t.e(9583)]).then(t.bind(t,19583))).default,MapNotesLayer:async()=>(await t.e(9622).then(t.bind(t,69622))).default,OGCFeatureLayer:async()=>(await t.e(8701).then(t.bind(t,98701))).default,OpenStreetMapLayer:async()=>(await t.e(1656).then(t.bind(t,31656))).default,PointCloudLayer:async()=>(await Promise.all([t.e(5731),t.e(9532)]).then(t.bind(t,9532))).default,RouteLayer:async()=>(await Promise.all([t.e(729),t.e(3589)]).then(t.bind(t,3589))).default,SceneLayer:async()=>(await Promise.all([t.e(5731),t.e(5838)]).then(t.bind(t,5838))).default,StreamLayer:async()=>(await t.e(2668).then(t.bind(t,2668))).default,TileLayer:async()=>(await Promise.all([t.e(9668),t.e(2977)]).then(t.bind(t,42977))).default,UnknownLayer:async()=>(await t.e(4917).then(t.bind(t,74917))).default,UnsupportedLayer:async()=>(await t.e(8101).then(t.bind(t,88101))).default,VectorTileLayer:async()=>(await Promise.all([t.e(969),t.e(5286)]).then(t.bind(t,27106))).default,VoxelLayer:async()=>(await Promise.all([t.e(5731),t.e(2560)]).then(t.bind(t,52560))).default,WebTileLayer:async()=>(await t.e(9200).then(t.bind(t,89200))).default,WFSLayer:async()=>(await Promise.all([t.e(2622),t.e(8566)]).then(t.bind(t,38566))).default,WMSLayer:async()=>(await t.e(4227).then(t.bind(t,84227))).default,WMTSLayer:async()=>(await t.e(6951).then(t.bind(t,46951))).default}},32698:(e,a,t)=>{t.d(a,{Y:()=>s,h:()=>l});var r=t(35995),n=t(70032);function l(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function s(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,r.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}}}]);
//# sourceMappingURL=2224.78cec88f.chunk.js.map