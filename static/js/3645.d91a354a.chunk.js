"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[3645],{61156:(e,n,t)=>{t.d(n,{A:()=>E,B:()=>H,C:()=>I,D:()=>S,E:()=>C,F:()=>k,G:()=>L,H:()=>R,I:()=>q,J:()=>B,K:()=>T,a:()=>u,b:()=>f,c:()=>c,d:()=>l,e:()=>o,f:()=>s,g:()=>F,h:()=>a,i:()=>p,j:()=>g,k:()=>m,l:()=>y,m:()=>x,n:()=>w,o:()=>N,p:()=>b,q:()=>_,r:()=>h,s:()=>v,t:()=>d,u:()=>A,v:()=>j,w:()=>G,x:()=>z,y:()=>V,z:()=>D});var r=t(99058),i=t(40237);function o(e){return r.G.extendedSpatialReferenceInfo(e)}function c(e,n,t){return r.G.clip(i.N,e,n,t)}function u(e,n,t){return r.G.cut(i.N,e,n,t)}function f(e,n,t){return r.G.contains(i.N,e,n,t)}function l(e,n,t){return r.G.crosses(i.N,e,n,t)}function s(e,n,t,o){return r.G.distance(i.N,e,n,t,o)}function a(e,n,t){return r.G.equals(i.N,e,n,t)}function p(e,n,t){return r.G.intersects(i.N,e,n,t)}function d(e,n,t){return r.G.touches(i.N,e,n,t)}function G(e,n,t){return r.G.within(i.N,e,n,t)}function g(e,n,t){return r.G.disjoint(i.N,e,n,t)}function N(e,n,t){return r.G.overlaps(i.N,e,n,t)}function h(e,n,t,o){return r.G.relate(i.N,e,n,t,o)}function m(e,n){return r.G.isSimple(i.N,e,n)}function v(e,n){return r.G.simplify(i.N,e,n)}function y(e,n){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.G.convexHull(i.N,e,n,t)}function x(e,n,t){return r.G.difference(i.N,e,n,t)}function w(e,n,t){return r.G.symmetricDifference(i.N,e,n,t)}function b(e,n,t){return r.G.intersect(i.N,e,n,t)}function A(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r.G.union(i.N,e,n,t)}function _(e,n,t,o,c,u,f){return r.G.offset(i.N,e,n,t,o,c,u,f)}function j(e,n,t,o){let c=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return r.G.buffer(i.N,e,n,t,o,c)}function z(e,n,t,o,c,u,f){return r.G.geodesicBuffer(i.N,e,n,t,o,c,u,f)}function V(e,n,t){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return r.G.nearestCoordinate(i.N,e,n,t,o)}function D(e,n,t){return r.G.nearestVertex(i.N,e,n,t)}function E(e,n,t,o,c){return r.G.nearestVertices(i.N,e,n,t,o,c)}function H(e,n,t,i){if(null==n||null==i)throw new Error("Illegal Argument Exception");const o=r.G.rotate(n,t,i);return o.spatialReference=e,o}function I(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipHorizontal(n,t);return i.spatialReference=e,i}function S(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipVertical(n,t);return i.spatialReference=e,i}function C(e,n,t,o,c){return r.G.generalize(i.N,e,n,t,o,c)}function k(e,n,t,o){return r.G.densify(i.N,e,n,t,o)}function L(e,n,t,o){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r.G.geodesicDensify(i.N,e,n,t,o,c)}function R(e,n,t){return r.G.planarArea(i.N,e,n,t)}function q(e,n,t){return r.G.planarLength(i.N,e,n,t)}function B(e,n,t,o){return r.G.geodesicArea(i.N,e,n,t,o)}function T(e,n,t,o){return r.G.geodesicLength(i.N,e,n,t,o)}const F=Object.freeze(Object.defineProperty({__proto__:null,extendedSpatialReferenceInfo:o,clip:c,cut:u,contains:f,crosses:l,distance:s,equals:a,intersects:p,touches:d,within:G,disjoint:g,overlaps:N,relate:h,isSimple:m,simplify:v,convexHull:y,difference:x,symmetricDifference:w,intersect:b,union:A,offset:_,buffer:j,geodesicBuffer:z,nearestCoordinate:V,nearestVertex:D,nearestVertices:E,rotate:H,flipHorizontal:I,flipVertical:S,generalize:C,densify:k,geodesicDensify:L,planarArea:R,planarLength:q,geodesicArea:B,geodesicLength:T},Symbol.toStringTag,{value:"Module"}))},50309:(e,n,t)=>{t.r(n),t.d(n,{buffer:()=>r.v,clip:()=>r.c,contains:()=>r.b,convexHull:()=>r.l,crosses:()=>r.d,cut:()=>r.a,densify:()=>r.F,difference:()=>r.m,disjoint:()=>r.j,distance:()=>r.f,equals:()=>r.h,extendedSpatialReferenceInfo:()=>r.e,flipHorizontal:()=>r.C,flipVertical:()=>r.D,generalize:()=>r.E,geodesicArea:()=>r.J,geodesicBuffer:()=>r.x,geodesicDensify:()=>r.G,geodesicLength:()=>r.K,intersect:()=>r.p,intersects:()=>r.i,isSimple:()=>r.k,nearestCoordinate:()=>r.y,nearestVertex:()=>r.z,nearestVertices:()=>r.A,offset:()=>r.q,overlaps:()=>r.o,planarArea:()=>r.H,planarLength:()=>r.I,relate:()=>r.r,rotate:()=>r.B,simplify:()=>r.s,symmetricDifference:()=>r.n,touches:()=>r.t,union:()=>r.u,within:()=>r.w});t(99058),t(40237);var r=t(61156)}}]);
//# sourceMappingURL=3645.d91a354a.chunk.js.map