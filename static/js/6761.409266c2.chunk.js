"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[6761],{11873:(e,t,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function i(e,t){return new Float64Array(e,t,9)}n.d(t,{a:()=>i,c:()=>r});Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,n,r,i,o,s,c,a){return[e,t,n,r,i,o,s,c,a]},createView:i},Symbol.toStringTag,{value:"Module"}))},81949:(e,t,n)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t){return new Float64Array(e,t,16)}n.d(t,{I:()=>s,a:()=>o,b:()=>i,c:()=>r});const s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:i,fromValues:function(e,t,n,r,i,o,s,c,a,u,f,l,h,d,m,g){return[e,t,n,r,i,o,s,c,a,u,f,l,h,d,m,g]},createView:o,IDENTITY:s},Symbol.toStringTag,{value:"Module"}))},98131:(e,t,n)=>{function r(){return[0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3]]}function o(e,t){return new Float64Array(e,t,4)}n.d(t,{I:()=>s,a:()=>r,b:()=>i,c:()=>o});const s=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:i,fromValues:function(e,t,n,r){return[e,t,n,r]},createView:o,IDENTITY:s},Symbol.toStringTag,{value:"Module"}))},71417:(e,t,n)=>{n.d(t,{b:()=>_,c:()=>b,d:()=>y,g:()=>p,i:()=>M,m:()=>L});n(93169);var r,i=n(32718),o=n(16889),s=n(92026),c=n(14226),a=n(11186),u=n(71353),f=n(90045),l=n(67077);!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(r||(r={}));var h=n(40885),d=n(40927),m=n(11185);const g=i.Z.getLogger("esri.geometry.support.sphere");function b(){return(0,l.c)()}function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b();return(0,f.c)(t,e)}function y(e){return e[3]}function p(e){return e}function P(e,t,n){if((0,s.Wi)(t))return!1;const{origin:r,direction:i}=t,o=w;o[0]=r[0]-e[0],o[1]=r[1]-e[1],o[2]=r[2]-e[2];const c=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],a=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),u=a*a-4*c*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(u<0)return!1;const f=Math.sqrt(u);let l=(-a-f)/(2*c);const h=(-a+f)/(2*c);return(l<0||h<l&&h>0)&&(l=h),!(l<0)&&(n&&(n[0]=r[0]+i[0]*l,n[1]=r[1]+i[1]*l,n[2]=r[2]+i[2]*l),!0)}const w=(0,u.c)();function M(e,t){return P(e,t,null)}function E(e,t,n){const r=m.WM.get(),i=m.MP.get();(0,a.f)(r,t.origin,t.direction);const o=y(e);(0,a.f)(n,r,t.origin),(0,a.g)(n,n,1/(0,a.l)(n)*o);const s=A(e,t.origin),u=(0,d.EU)(t.origin,n);return(0,c.d)(i,u+s,r),(0,a.m)(n,n,i),n}function S(e,t,n){const r=(0,a.b)(m.WM.get(),t,e),i=(0,a.g)(m.WM.get(),r,e[3]/(0,a.l)(r));return(0,a.a)(n,i,e)}function A(e,t){const n=(0,a.b)(m.WM.get(),t,e),r=(0,a.l)(n),i=y(e),s=i+Math.abs(i-r);return(0,o.ZF)(i/s)}const v=(0,u.c)();function T(e,t,n,i){const s=(0,a.b)(v,t,e);switch(n){case r.X:{const e=(0,o.jE)(s,v)[2];return(0,a.s)(i,-Math.sin(e),Math.cos(e),0)}case r.Y:{const e=(0,o.jE)(s,v),t=e[1],n=e[2],r=Math.sin(t);return(0,a.s)(i,-r*Math.cos(n),-r*Math.sin(n),Math.cos(t))}case r.Z:return(0,a.n)(i,s);default:return}}function I(e,t){const n=(0,a.b)(U,t,e);return(0,a.l)(n)-e[3]}function L(e,t){const n=(0,a.d)(e,t),r=y(e);return n<=r*r}const U=(0,u.c)(),B=b();Object.freeze(Object.defineProperty({__proto__:null,create:b,copy:_,fromCenterAndRadius:function(e,t){return(0,l.f)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},getRadius:y,getCenter:p,fromValues:function(e,t,n,r){return(0,l.f)(e,t,n,r)},elevate:function(e,t,n){return e!==n&&(0,a.c)(n,e),n[3]=e[3]+t,n},setExtent:function(e,t,n){return g.error("sphere.setExtent is not yet supported"),e===n?n:_(e,n)},intersectRay:P,intersectsRay:M,intersectRayClosestSilhouette:function(e,t,n){if(P(e,t,n))return n;const r=E(e,t,m.WM.get());return(0,a.a)(n,t.origin,(0,a.g)(m.WM.get(),t.direction,(0,a.i)(t.origin,r)/(0,a.l)(t.direction))),n},closestPointOnSilhouette:E,closestPoint:function(e,t,n){return P(e,t,n)?n:((0,h.JI)(t,e,n),S(e,n,n))},projectPoint:S,distanceToSilhouette:function(e,t){const n=(0,a.b)(m.WM.get(),t,e),r=(0,a.p)(n),i=e[3]*e[3];return Math.sqrt(Math.abs(r-i))},angleToSilhouette:A,axisAt:T,altitudeAt:I,setAltitudeAt:function(e,t,n,i){const o=I(e,t),s=T(e,t,r.Z,U),c=(0,a.g)(U,s,n-o);return(0,a.a)(i,t,c)},containsPoint:L,tmpSphere:B},Symbol.toStringTag,{value:"Module"}))},21530:(e,t,n)=>{n.d(t,{x:()=>i});var r=n(70758);class i{constructor(e){this.allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this.allocator())}}const o=1024},40885:(e,t,n)=>{n.d(t,{JI:()=>a,Ue:()=>s,re:()=>c});n(63780);var r=n(21530),i=n(11186),o=n(71353);n(11185);function s(e){return e?{origin:(0,o.a)(e.origin),direction:(0,o.a)(e.direction)}:{origin:(0,o.c)(),direction:(0,o.c)()}}function c(e,t){const n=u.get();return n.origin=e,n.direction=t,n}function a(e,t,n){const r=(0,i.e)(e.direction,(0,i.b)(n,t,e.origin));return(0,i.a)(n,e.origin,(0,i.g)(n,e.direction,r)),n}const u=new r.x((function(){return{origin:null,direction:null}}))},40927:(e,t,n)=>{n.d(t,{EU:()=>s});var r=n(16889),i=n(11186),o=n(71353);function s(e,t){const n=(0,i.e)(e,t)/((0,i.l)(e)*(0,i.l)(t));return-(0,r.ZF)(n)}(0,o.c)(),(0,o.c)()},11185:(e,t,n)=>{n.d(t,{MP:()=>m,WM:()=>d});var r=n(59896),i=n(70758),o=n(11873),s=n(81949),c=n(98131),a=n(6394),u=n(71353),f=n(67077);class l{constructor(e,t,n){this.itemByteSize=e,this.itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this.itemByteSize)}get(){0===this._itemsPtr&&(0,i.Y)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this.itemCreate(e,t*this.itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(16,a.c,e)}static createVec3f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(24,u.b,e)}static createVec4f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(32,f.a,e)}static createMat3f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(72,o.a,e)}static createMat4f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(128,s.a,e)}static createQuatf64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new l(32,c.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const h=4*r.Y8.KILOBYTES,d=(l.createVec2f64(),l.createVec3f64()),m=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},6761:(e,t,n)=>{n.r(t),n.d(t,{destroyContext:()=>P,dracoDecompressPointCloudData:()=>b,filterObbsForModifications:()=>_,filterObbsForModificationsSync:()=>v,initialize:()=>L,interpretObbModificationResults:()=>A,process:()=>g,setLegacySchema:()=>p,setModifications:()=>y,setModificationsSync:()=>E,test:()=>U});var r,i,o=n(92026),s=n(18722);!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(i||(i={}));var c=n(65905);function a(e){return(0,c.V)(`esri/libs/i3s/${e}`)}let u;var f,l,h,d,m;n(71417);!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(f||(f={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(l||(l={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(h||(h={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(d||(d={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(m||(m={}));async function g(e){await L();const t=[e.geometryBuffer];return{result:S(e,t),transferList:t}}async function b(e){await L();const t=[e.geometryBuffer],{geometryBuffer:n}=e,r=n.byteLength,i=M._malloc(r),o=new Uint8Array(M.HEAPU8.buffer,i,r);o.set(new Uint8Array(n));const c=M.dracoDecompressPointCloudData(i,o.byteLength);if(M._free(i),c.error.length>0)throw`i3s.wasm: ${c.error}`;const a=c.featureIds?.length>0?(0,s.tP)(c.featureIds):null,u=(0,s.tP)(c.positions);return a&&t.push(a.buffer),t.push(u.buffer),{result:{positions:u,featureIds:a},transferList:t}}async function _(e){await L(),v(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function y(e){await L(),E(e)}async function p(e){await L(),M.setLegacySchema(e.context,e.jsonSchema)}function P(e){T(e)}let w,M;function E(e){const t=e.modifications,n=M._malloc(8*t.length),r=new Float64Array(M.HEAPU8.buffer,n,t.length);for(let i=0;i<t.length;++i)r[i]=t[i];M.setModifications(e.context,n,t.length,e.isGeodetic),M._free(n)}function S(e,t){if(!M)return null;const{context:n,localOrigin:i,globalTrafo:c,mbs:a,obb:u,elevationOffset:f,geometryBuffer:l,geometryDescriptor:h,indexToVertexProjector:d,vertexToRenderProjector:m}=e,g=M._malloc(l.byteLength),b=M._malloc(33*Float64Array.BYTES_PER_ELEMENT),_=new Uint8Array(M.HEAPU8.buffer,g,l.byteLength);_.set(new Uint8Array(l));const y=new Float64Array(M.HEAPU8.buffer,b,33);I(y,i);let p=y.byteOffset+3*y.BYTES_PER_ELEMENT,P=new Float64Array(y.buffer,p);I(P,c),p+=16*y.BYTES_PER_ELEMENT,P=new Float64Array(y.buffer,p),I(P,a),p+=4*y.BYTES_PER_ELEMENT,(0,o.pC)(u)&&(P=new Float64Array(y.buffer,p),I(P,u.center),p+=3*y.BYTES_PER_ELEMENT,P=new Float64Array(y.buffer,p),I(P,u.halfSize),p+=3*y.BYTES_PER_ELEMENT,P=new Float64Array(y.buffer,p),I(P,u.quaternion));const w=h,E={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:w.featureIndex},S=M.process(n,!!e.obb,g,_.byteLength,w,E,b,f,d,m,e.normalReferenceFrame);if(M._free(b),M._free(g),S.error.length>0)throw`i3s.wasm: ${S.error}`;if(S.discarded)return null;const A=S.componentOffsets.length>0?(0,s.tP)(S.componentOffsets):null,v=S.featureIds.length>0?(0,s.tP)(S.featureIds):null,T=(0,s.tP)(S.interleavedVertedData).buffer,L=S.indicesType===r.Int16?(0,s.tP)(new Uint16Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/2)):(0,s.tP)(new Uint32Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/4)),U=(0,s.tP)(S.positions),B=S.positionIndicesType===r.Int16?(0,s.tP)(new Uint16Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/2)):(0,s.tP)(new Uint32Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/4)),C={layout:e.layouts[0],interleavedVertexData:T,indices:L,hasColors:S.hasColors,hasModifications:S.hasModifications,positionData:{data:U,indices:B}};return v&&t.push(v.buffer),A&&t.push(A.buffer),t.push(T),t.push(L.buffer),t.push(U.buffer),t.push(B.buffer),{componentOffsets:A,featureIds:v,transformedGeometry:C,obb:S.obb}}function A(e){return 0===e?l.Unmodified:1===e?l.PotentiallyModified:2===e?l.Culled:l.Unknown}function v(e){const{context:t,buffer:n}=e,r=M._malloc(n.byteLength),i=n.byteLength/Float64Array.BYTES_PER_ELEMENT,o=new Float64Array(M.HEAPU8.buffer,r,i),s=new Float64Array(n);o.set(s),M.filterOBBs(t,r,i),s.set(o),M._free(r)}function T(e){M&&M.destroy(e)}function I(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function L(){return M?Promise.resolve():(w||(w=(u||(u=new Promise((e=>n.e(7552).then(n.bind(n,57552)).then((e=>e.i)).then((t=>{let{default:n}=t;const r=n({locateFile:a,onRuntimeInitialized:()=>e(r)});delete r.then})))).catch((e=>{throw e}))),u).then((e=>{M=e,w=null}))),w)}const U={transform:S,destroy:T}}}]);
//# sourceMappingURL=6761.409266c2.chunk.js.map