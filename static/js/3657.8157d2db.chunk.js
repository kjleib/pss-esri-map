"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[3657],{23657:(e,r,t)=>{t.r(r),t.d(r,{clearBoundingBoxCache:()=>y,computeIconLayerResourceSize:()=>h,computeLayerResourceSize:()=>p,computeLayerSize:()=>f,computeObjectLayerResourceSize:()=>m});var n=t(76200),o=t(10064),i=t(59026),s=t(92026),c=t(41414),u=t(53720);let a=l();function l(){return new i.Z(50)}function y(){a=l()}function p(e,r){if("icon"===e.type)return h(e,r);if("object"===e.type)return m(e,r);throw new o.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function f(e,r){if("icon"===e.type)return function(e,r){return h(e,r).then((r=>{if(null==e.size)return r;const t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}(e,r);if("object"===e.type)return async function(e,r){const t=await m(e,r);return(0,u.$K)(t,e)}(e,r);throw new o.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function h(e,r){if(e.resource.href)return(t=e.resource.href,(0,n.default)(t,{responseType:"image"}).then((e=>e.data))).then((e=>[e.width,e.height]));var t;if(e.resource.primitive)return(0,s.pC)(r)?[r,r]:[256,256];throw new o.Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function m(e,r){return async function(e,r){if(!e.isPrimitive){const r=e.resource.href,n=a.get(r);if(void 0!==n)return n;const o=await Promise.all([t.e(1378),t.e(2029),t.e(5158),t.e(7934),t.e(128)]).then(t.bind(t,50128)),i=await o.fetch(r,{disableTextures:!0});return a.put(r,i.referenceBoundingBox),i.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=(0,c.Ue)((0,u.Uz)(e.resource.primitive)),(0,s.pC)(r)))for(let t=0;t<n.length;t++)n[t]*=r;return n?Promise.resolve(n):Promise.reject(new o.Z("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then((e=>(0,c.dp)(e)))}}}]);
//# sourceMappingURL=3657.8157d2db.chunk.js.map