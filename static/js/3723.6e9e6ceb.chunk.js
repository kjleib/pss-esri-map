"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[3723],{48734:(e,t,E)=>{E.d(t,{B3:()=>_,Op:()=>A,U:()=>T,n1:()=>n});E(93169);function n(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function _(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function T(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function A(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},35888:(e,t,E)=>{E.d(t,{d:()=>_});var n=E(16889);function _(e,t,E){const _=e.byteLength/(4*t),i=new Uint32Array(e,0,_*t);let s=new Uint32Array(_);const N=E?.minReduction??0,o=E?.originalIndices||null,c=o?o.length:0,I=E?.componentOffsets||null;let O=0;if(I)for(let n=0;n<I.length-1;n++){const e=I[n+1]-I[n];e>O&&(O=e)}else O=_;const S=Math.floor(1.1*O)+1;(null==r||r.length<2*S)&&(r=new Uint32Array((0,n.Sf)(2*S)));for(let n=0;n<2*S;n++)r[n]=0;let a=0;const u=!!I&&!!o,C=u?c:_,f=u?new Uint32Array(c):null,l=1.96;let L=0!==N?Math.ceil(4*l*l/(N*N)*N*(1-N)):C,D=1,U=I?I[1]:C;for(let n=0;n<C;n++){if(n===L){const e=1-a/n;if(e+l*Math.sqrt(e*(1-e)/n)<N)return null;L*=2}if(n===U){for(let e=0;e<2*S;e++)r[e]=0;if(o)for(let e=I[D-1];e<I[D];e++)f[e]=s[o[e]];U=I[++D]}const e=u?o[n]:n,E=e*t,_=R(i,E,t);let A=_%S,c=a;for(;0!==r[2*A+1];){if(r[2*A]===_){const e=r[2*A+1]-1;if(T(i,E,e*t,t)){c=s[e];break}}A++,A>=S&&(A-=S)}c===a&&(r[2*A]=_,r[2*A+1]=e+1,a++),s[e]=c}if(0!==N&&1-a/_<N)return null;if(u){for(let e=I[D-1];e<f.length;e++)f[e]=s[o[e]];s=f}const P=new Uint32Array(t*a);a=0;for(let n=0;n<C;n++)s[n]===a&&(A(i,(u?o[n]:n)*t,P,a*t,t),a++);if(o&&!u){const e=new Uint32Array(c);for(let t=0;t<e.length;t++)e[t]=s[o[t]];s=e}return{buffer:P.buffer,indices:s,uniqueCount:a}}function T(e,t,E,n){for(let _=0;_<n;_++)if(e[t+_]!==e[E+_])return!1;return!0}function A(e,t,E,n,_){for(let T=0;T<_;T++)E[n+T]=e[t+T]}function R(e,t,E){let n=0;for(let _=0;_<E;_++)n=e[t+_]+n|0,n=n+(n<<11)+(n>>>2)|0;return n>>>0}let r=null},55158:(e,t,E)=>{E.d(t,{U$:()=>R});var n=E(25158),_=E(48734);class T{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const E of e.fieldNames){const t=e.fields.get(E);this[E]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const E=this[e];return E&&E.elementCount===t.ElementCount&&E.elementType===t.ElementType?E:null}slice(e,t){return new T(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,E,n){const _=this.stride;if(_%4==0){const T=new Uint32Array(e.buffer,t*_,n*_/4);new Uint32Array(this.buffer,E*_,n*_/4).set(T)}else{const T=new Uint8Array(e.buffer,t*_,n*_);new Uint8Array(this.buffer,E*_,n*_).set(T)}}}class A{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,n.Eu,t),this}vec2f64(e,t){return this._appendField(e,n.q6,t),this}vec3f(e,t){return this._appendField(e,n.ct,t),this}vec3f64(e,t){return this._appendField(e,n.fP,t),this}vec4f(e,t){return this._appendField(e,n.ek,t),this}vec4f64(e,t){return this._appendField(e,n.Cd,t),this}mat3f(e,t){return this._appendField(e,n.gK,t),this}mat3f64(e,t){return this._appendField(e,n.ey,t),this}mat4f(e,t){return this._appendField(e,n.bj,t),this}mat4f64(e,t){return this._appendField(e,n.O1,t),this}vec4u8(e,t){return this._appendField(e,n.mc,t),this}f32(e,t){return this._appendField(e,n.ly,t),this}f64(e,t){return this._appendField(e,n.oS,t),this}u8(e,t){return this._appendField(e,n.D_,t),this}u16(e,t){return this._appendField(e,n.av,t),this}i8(e,t){return this._appendField(e,n.Hz,t),this}vec2i8(e,t){return this._appendField(e,n.Vs,t),this}vec2i16(e,t){return this._appendField(e,n.or,t),this}vec2u8(e,t){return this._appendField(e,n.xA,t),this}vec4u16(e,t){return this._appendField(e,n.v6,t),this}u32(e,t){return this._appendField(e,n.Nu,t),this}_appendField(e,t,E){const n=t.ElementCount*(0,_.n1)(t.ElementType),T=this.stride;this.fields.set(e,{size:n,constructor:t,offset:T,optional:E}),this.stride+=n,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.includes(e)}createBuffer(e){return new T(this,e)}createView(e){return new T(this,e)}clone(){const e=new A;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,E)=>e.fields.set(E,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function R(){return new A}},4760:(e,t,E)=>{var n;E.d(t,{T:()=>n}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(n||(n={}))},33723:(e,t,E)=>{E.r(t),E.d(t,{EdgeProcessingWorker:()=>q,default:()=>re,extract:()=>Q,extractComponentsEdgeLocationsLayout:()=>Re,extractEdgeLocationsLayout:()=>Ae});var n=E(35888);function _(e,t,E){const n=t/3,_=new Uint32Array(E+1),T=new Uint32Array(E+1),A=(e,t)=>{e<t?_[e+1]++:T[t+1]++};for(let a=0;a<n;a++){const t=e[3*a],E=e[3*a+1],n=e[3*a+2];A(t,E),A(E,n),A(n,t)}let R=0,r=0;for(let a=0;a<E;a++){const e=_[a+1],t=T[a+1];_[a+1]=R,T[a+1]=r,R+=e,r+=t}const i=new Uint32Array(6*n),s=_[E],N=(e,t,E)=>{if(e<t){const n=_[e+1]++;i[2*n]=t,i[2*n+1]=E}else{const n=T[t+1]++;i[2*s+2*n]=e,i[2*s+2*n+1]=E}};for(let a=0;a<n;a++){const t=e[3*a],E=e[3*a+1],n=e[3*a+2];N(t,E,a),N(E,n,a),N(n,t,a)}const o=(e,t)=>{const E=2*e,n=t-e;for(let _=1;_<n;_++){const e=i[E+2*_],t=i[E+2*_+1];let n=_-1;for(;n>=0&&i[E+2*n]>e;n--)i[E+2*n+2]=i[E+2*n],i[E+2*n+3]=i[E+2*n+1];i[E+2*n+2]=e,i[E+2*n+3]=t}};for(let a=0;a<E;a++)o(_[a],_[a+1]),o(s+T[a],s+T[a+1]);const c=new Int32Array(3*n),I=(t,E)=>t===e[3*E]?0:t===e[3*E+1]?1:t===e[3*E+2]?2:-1,O=(e,t)=>{const E=I(e,t);c[3*t+E]=-1},S=(e,t,E,n)=>{const _=I(e,t);c[3*t+_]=n;const T=I(E,n);c[3*n+T]=t};for(let a=0;a<E;a++){let e=_[a];const t=_[a+1];let E=T[a];const n=T[a+1];for(;e<t&&E<n;){const t=i[2*e],n=i[2*s+2*E];t===n?(S(a,i[2*e+1],n,i[2*s+2*E+1]),e++,E++):t<n?(O(a,i[2*e+1]),e++):(O(n,i[2*s+2*E+1]),E++)}for(;e<t;)O(a,i[2*e+1]),e++;for(;E<n;)O(i[2*s+2*E],i[2*s+2*E+1]),E++}return c}var T=E(55158),A=E(25158);function R(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:r(e.layout)}}function r(e){const t=new Array;return e.fields.forEach(((e,E)=>{const n={...e,constructor:s(e.constructor)};t.push([E,n])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const i=[A.ly,A.Eu,A.ct,A.ek,A.gK,A.bj,A.oS,A.q6,A.fP,A.Cd,A.ey,A.O1,A.D_,A.xA,A.ne,A.mc,A.av,A.TS,A.mw,A.v6,A.Nu,A.qt,A.G5,A.hu,A.Hz,A.Vs,A.P_,A.ir,A.o7,A.or,A.n1,A.zO,A.Jj,A.wA,A.PP,A.TN];function s(e){return`${e.ElementType}_${e.ElementCount}`}const N=new Map;i.forEach((e=>N.set(s(e),e)));var o=E(4760),c=E(8548),I=E(61109);function O(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const E=e.stride;return e.fieldNames.filter((t=>{const E=e.fields.get(t).optional;return!(E&&E.glPadding)})).map((n=>{const _=e.fields.get(n),T=_.constructor.ElementCount,A=S(_.constructor.ElementType),R=_.offset,r=!(!_.optional||!_.optional.glNormalized);return new I.G(n,T,A,R,E,r,t)}))}function S(e){const t=a[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const a={u8:c.g.UNSIGNED_BYTE,u16:c.g.UNSIGNED_SHORT,u32:c.g.UNSIGNED_INT,i8:c.g.BYTE,i16:c.g.SHORT,i32:c.g.INT,f32:c.g.FLOAT},u=(0,T.U$)().vec3f(o.T.POSITION).u16(o.T.COMPONENTINDEX).u16(o.T.U16PADDING),C=(O((0,T.U$)().vec2u8(o.T.SIDENESS)),(0,T.U$)().vec3f(o.T.POSITION0).vec3f(o.T.POSITION1).u16(o.T.COMPONENTINDEX).u8(o.T.VARIANTOFFSET,{glNormalized:!0}).u8(o.T.VARIANTSTROKE).u8(o.T.VARIANTEXTENSION,{glNormalized:!0}).u8(o.T.U8PADDING,{glPadding:!0}).u16(o.T.U16PADDING,{glPadding:!0})),f=C.clone().vec3f(o.T.NORMAL),l=C.clone().vec3f(o.T.NORMALA).vec3f(o.T.NORMALB);new Map([[o.T.POSITION0,0],[o.T.POSITION1,1],[o.T.COMPONENTINDEX,2],[o.T.VARIANTOFFSET,3],[o.T.VARIANTSTROKE,4],[o.T.VARIANTEXTENSION,5],[o.T.NORMAL,6],[o.T.NORMALA,6],[o.T.NORMALB,7],[o.T.SIDENESS,8]]);var L=E(84936),D=E(11186),U=E(71353);class P{updateSettings(e){this.settings=e,this.edgeHashFunction=e.reducedPrecision?B:F}write(e,t,E){const n=this.edgeHashFunction(E);m.seed=n;const _=m.getIntRange(0,255),T=m.getIntRange(0,this.settings.variants-1),A=m.getFloat(),R=255*(.5*function(e,t){const E=e<0?-1:1;return Math.abs(e)**t*E}(-(1-Math.min(A/.7,1))+Math.max(0,A-.7)/(1-.7),1.2)+.5);e.position0.setVec(t,E.position0),e.position1.setVec(t,E.position1),e.componentIndex.set(t,E.componentIndex),e.variantOffset.set(t,_),e.variantStroke.set(t,T),e.variantExtension.set(t,R)}trim(e,t){return e.slice(0,t)}}const M=new Float32Array(6),G=new Uint32Array(M.buffer),d=new Uint32Array(1);function F(e){const t=M;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],d[0]=5381;for(let E=0;E<G.length;E++)d[0]=31*d[0]+G[E];return d[0]}function B(e){const t=M;t[0]=h(e.position0[0]),t[1]=h(e.position0[1]),t[2]=h(e.position0[2]),t[3]=h(e.position1[0]),t[4]=h(e.position1[1]),t[5]=h(e.position1[2]),d[0]=5381;for(let E=0;E<G.length;E++)d[0]=31*d[0]+G[E];return d[0]}function h(e){return Math.round(1e4*e)/1e4}class p{constructor(){this.commonWriter=new P}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return f.createBuffer(e)}write(e,t,E){this.commonWriter.write(e,t,E),(0,D.a)(H,E.faceNormal0,E.faceNormal1),(0,D.n)(H,H),e.normal.setVec(t,H)}trim(e,t){return this.commonWriter.trim(e,t)}}p.Layout=f,p.glLayout=O(f,1);class g{constructor(){this.commonWriter=new P}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return l.createBuffer(e)}write(e,t,E){this.commonWriter.write(e,t,E),e.normalA.setVec(t,E.faceNormal0),e.normalB.setVec(t,E.faceNormal1)}trim(e,t){return this.commonWriter.trim(e,t)}}g.Layout=l,g.glLayout=O(l,1);const H=(0,U.c)(),m=new L.Z;var V=E(63780),w=E(16889),v=E(18722);const y=-1;var X;function Y(e,t,E){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:z;const _=e.vertices.position,T=e.vertices.componentIndex,A=(0,w.Vl)(n.anglePlanar),R=(0,w.Vl)(n.angleSignificantEdge),r=Math.cos(R),i=Math.cos(A),s=Z.edge,N=s.position0,o=s.position1,c=s.faceNormal0,I=s.faceNormal1,O=k(e),S=K(e),a=S.length/4,u=t.allocate(a);let C=0;const f=a,l=E.allocate(f);let L=0,U=0,P=0;const M=(0,V.w6)(0,a),G=new Float32Array(a);(0,v.Ed)(G,((e,t,E)=>{_.getVec(S[4*t+0],N),_.getVec(S[4*t+1],o),E[t]=(0,D.i)(N,o)})),M.sort(((e,t)=>G[t]-G[e]));const d=new Array,F=new Array;for(let p=0;p<a;p++){const e=M[p],n=G[e],R=S[4*e+0],a=S[4*e+1],f=S[4*e+2],B=S[4*e+3],h=B===y;if(_.getVec(R,N),_.getVec(a,o),h)(0,D.s)(c,O[3*f+0],O[3*f+1],O[3*f+2]),(0,D.c)(I,c),s.componentIndex=T.get(R),s.cosAngle=(0,D.e)(c,I);else{if((0,D.s)(c,O[3*f+0],O[3*f+1],O[3*f+2]),(0,D.s)(I,O[3*B+0],O[3*B+1],O[3*B+2]),s.componentIndex=T.get(R),s.cosAngle=(0,D.e)(c,I),x(s,i))continue;s.cosAngle<-.9999&&(0,D.c)(I,c)}U+=n,P++,h||b(s,r)?(t.write(u,C++,s),d.push(n)):W(s,A)&&(E.write(l,L++,s),F.push(n))}const B=new Float32Array(d.reverse()),h=new Float32Array(F.reverse());return{regular:{instancesData:t.trim(u,C),lodInfo:{lengths:B}},silhouette:{instancesData:E.trim(l,L),lodInfo:{lengths:h}},averageEdgeLength:U/P}}function b(e,t){return e.cosAngle<t}function x(e,t){return e.cosAngle>t}function W(e,t){const E=(0,w.ZF)(e.cosAngle),n=Z.fwd,_=Z.ortho;return(0,D.r)(n,e.position1,e.position0),E*((0,D.e)((0,D.f)(_,e.faceNormal0,e.faceNormal1),n)>0?-1:1)>t}function K(e){const t=e.faces.length/3,E=e.faces,n=e.neighbors;let _=0;for(let R=0;R<t;R++){const e=n[3*R+0],t=n[3*R+1],T=n[3*R+2],A=E[3*R+0],r=E[3*R+1],i=E[3*R+2];_+=e===y||A<r?1:0,_+=t===y||r<i?1:0,_+=T===y||i<A?1:0}const T=new Int32Array(4*_);let A=0;for(let R=0;R<t;R++){const e=n[3*R+0],t=n[3*R+1],_=n[3*R+2],r=E[3*R+0],i=E[3*R+1],s=E[3*R+2];(e===y||r<i)&&(T[A++]=r,T[A++]=i,T[A++]=R,T[A++]=e),(t===y||i<s)&&(T[A++]=i,T[A++]=s,T[A++]=R,T[A++]=t),(_===y||s<r)&&(T[A++]=s,T[A++]=r,T[A++]=R,T[A++]=_)}return T}function k(e){const t=e.faces.length/3,E=e.vertices.position,n=e.faces,_=j.v0,T=j.v1,A=j.v2,R=new Float32Array(3*t);for(let r=0;r<t;r++){const e=n[3*r+0],t=n[3*r+1],i=n[3*r+2];E.getVec(e,_),E.getVec(t,T),E.getVec(i,A),(0,D.b)(T,T,_),(0,D.b)(A,A,_),(0,D.f)(_,T,A),(0,D.n)(_,_),R[3*r+0]=_[0],R[3*r+1]=_[1],R[3*r+2]=_[2]}return R}!function(e){e[e.SOLID=0]="SOLID",e[e.SKETCH=1]="SKETCH"}(X||(X={}));const Z={edge:{position0:(0,U.c)(),position1:(0,U.c)(),faceNormal0:(0,U.c)(),faceNormal1:(0,U.c)(),componentIndex:0,cosAngle:0},ortho:(0,U.c)(),fwd:(0,U.c)()},j={v0:(0,U.c)(),v1:(0,U.c)(),v2:(0,U.c)()},z={anglePlanar:4,angleSignificantEdge:35};class q{async extract(e){const t=$(e),E=Q(t),n=[t.data.buffer];return{result:J(E,n),transferList:n}}async extractComponentsEdgeLocations(e){const t=$(e),E=[];return{result:R(Y(ee(t.data,t.skipDeduplicate,t.indices,t.indicesLength),_e,Te).regular.instancesData,E),transferList:E}}async extractEdgeLocations(e){const t=$(e),E=[];return{result:R(Y(ee(t.data,t.skipDeduplicate,t.indices,t.indicesLength),ne,Te).regular.instancesData,E),transferList:E}}}function Q(e){const t=ee(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return te.updateSettings(e.writerSettings),Ee.updateSettings(e.writerSettings),Y(t,te,Ee)}function $(e){return{data:u.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function J(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:R(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:R(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function ee(e,t,E,T){if(t)return{faces:E,facesLength:T,neighbors:_(E,T,e.count),vertices:e};const A=(0,n.d)(e.buffer,e.stride/4,{originalIndices:E,originalIndicesLength:T}),R=_(A.indices,T,A.uniqueCount);return{faces:A.indices,facesLength:A.indices.length,neighbors:R,vertices:u.createView(A.buffer)}}const te=new p,Ee=new g;const ne=new class{allocate(e){return Ae.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,E){e.position0.setVec(t,E.position0),e.position1.setVec(t,E.position1)}},_e=new class{allocate(e){return Re.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,E){e.position0.setVec(t,E.position0),e.position1.setVec(t,E.position1),e.componentIndex.set(t,E.componentIndex)}},Te={allocate:()=>null,write:()=>{},trim:()=>null},Ae=(0,T.U$)().vec3f(o.T.POSITION0).vec3f(o.T.POSITION1),Re=(0,T.U$)().vec3f(o.T.POSITION0).vec3f(o.T.POSITION1).u16(o.T.COMPONENTINDEX).u16(o.T.U16PADDING,{glPadding:!0});function re(){return new q}},61109:(e,t,E)=>{E.d(t,{G:()=>n});class n{constructor(e,t,E,n,_){let T=arguments.length>5&&void 0!==arguments[5]&&arguments[5],A=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=e,this.count=t,this.type=E,this.offset=n,this.stride=_,this.normalized=T,this.divisor=A}}},8548:(e,t,E)=>{var n,_,T,A,R,r,i,s,N,o,c,I,O,S,a,u,C,f,l,L,D,U;E.d(t,{Br:()=>u,Ho:()=>l,LR:()=>r,Ld:()=>P,Lm:()=>D,Lu:()=>d,MX:()=>_,No:()=>O,OU:()=>U,Se:()=>B,Tg:()=>C,V7:()=>H,VI:()=>S,VY:()=>G,Wf:()=>i,Y5:()=>g,_g:()=>M,cw:()=>c,db:()=>A,e8:()=>I,g:()=>s,l1:()=>f,lP:()=>a,lk:()=>n,q_:()=>F,qi:()=>L,w0:()=>R,wb:()=>N,xS:()=>o,zi:()=>T}),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(n||(n={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(_||(_={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(T||(T={})),function(e){e[e.ADD=32774]="ADD",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(A||(A={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(R||(R={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(r||(r={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(i||(i={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(s||(s={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(N||(N={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(o||(o={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(c||(c={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(I||(I={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(O||(O={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(S||(S={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(a||(a={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(u||(u={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(C||(C={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(f||(f={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(l||(l={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(L||(L={})),function(e){e[e.TEXTURE=0]="TEXTURE",e[e.RENDER_BUFFER=1]="RENDER_BUFFER",e[e.CUBEMAP=2]="CUBEMAP"}(D||(D={})),function(e){e[e.NONE=0]="NONE",e[e.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",e[e.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(U||(U={}));const P=33984;var M,G;!function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.Sync=7]="Sync",e[e.COUNT=8]="COUNT"}(M||(M={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(G||(G={}));const d=33306;var F,B,h,p,g,H,m;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(F||(F={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(B||(B={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(h||(h={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(p||(p={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(g||(g={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(H||(H={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(m||(m={}))}}]);
//# sourceMappingURL=3723.6e9e6ceb.chunk.js.map