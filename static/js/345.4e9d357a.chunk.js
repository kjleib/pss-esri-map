"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[345],{60345:(e,t,r)=>{r.r(t),r.d(t,{BufferObject:()=>s.f,FramebufferObject:()=>o.X,Program:()=>n.$,ProgramCache:()=>i.G,Renderbuffer:()=>c.r,ShaderCompiler:()=>a.B,Texture:()=>f.x,VertexArrayObject:()=>u.U,createContextOrErrorHTML:()=>p.sj,createProgram:()=>l.H,glslifyDefineMap:()=>h.K});var s=r(44070),o=r(53634),n=r(47428),i=r(66293),c=r(15880),a=r(56648),f=r(51378),u=r(45412),h=r(65706),l=r(96721),p=r(49800)},66293:(e,t,r)=>{r.d(t,{G:()=>i});var s=r(92026);class o{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const s=this._outer.get(e);s?s.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}var n=r(47428);class i{constructor(e){this._rctx=e,this._store=new o}dispose(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()}acquire(e,t,r,o){const i=this._store.get(e,t);if((0,s.pC)(i))return i.ref(),i;const c=new n.$(this._rctx,e,t,r,o);return c.ref(),this._store.set(e,t,c),c}get test(){let e=0;return this._store.forEach((t=>t.forEach((t=>e+=t.hasGLName?2:1)))),{cachedWebGLObjects:e}}}},65706:(e,t,r)=>{function s(e){const{options:t,value:r}=e;return"number"==typeof t[r]}function o(e){let t="";for(const r in e){const o=e[r];if("boolean"==typeof o)o&&(t+=`#define ${r}\n`);else if("number"==typeof o)t+=`#define ${r} ${o.toFixed()}\n`;else if("object"==typeof o)if(s(o)){const{value:e,options:s,namespace:n}=o,i=n?`${n}_`:"";for(const r in s)t+=`#define ${i}${r} ${s[r].toFixed()}\n`;t+=`#define ${r} ${i}${e}\n`}else{const e=o.options;let s=0;for(const r in e)t+=`#define ${e[r]} ${(s++).toFixed()}\n`;t+=`#define ${r} ${e[o.value]}\n`}}return t}r.d(t,{K:()=>o})}}]);
//# sourceMappingURL=345.4e9d357a.chunk.js.map