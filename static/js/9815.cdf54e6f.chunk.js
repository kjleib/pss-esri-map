"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[9815],{6388:(e,t,o)=>{o.d(t,{Fp:()=>l,RL:()=>f,UV:()=>c,bk:()=>s});var i=o(46228),r=o(77981),n=o(691);function l(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers;return t&&1===t.length?l(t[0]):null}case"CIMVectorMarker":{const t=e.markerGraphics;if(!t||1!==t.length)return null;const o=t[0];if(!o)return null;const i=o.geometry;if(!i)return null;const r=o.symbol;return!r||"CIMPolygonSymbol"!==r.type&&"CIMLineSymbol"!==r.type||r.symbolLayers?.some((e=>!!e.effects))?null:{geom:i,asFill:"CIMPolygonSymbol"===r.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function a(e){let t=1/0,o=-1/0,i=1/0,r=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>o&&(o=e[0]),e[1]<i&&(i=e[1]),e[1]>r&&(r=e[1]);return[t,i,o,r]}function s(e){return e?e.rings?a(e.rings):e.paths?a(e.paths):(0,r.YX)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function c(e,t,o,i,r){const[n,l,a,s]=e;if(a<n||s<l)return[0,0,0];const c=a-n,f=s-l,m=Math.floor(31.5),u=(128-2*(m+1))/Math.max(c,f),p=Math.round(c*u)+2*m,h=Math.round(f*u)+2*m;let y=1;t&&(y=h/u/(t.ymax-t.ymin));let g=0,d=0;if(i)if(r){if(t&&o&&t.ymax-t.ymin>0){const e=(t.xmax-t.xmin)/(t.ymax-t.ymin);g=i.x/(o*e),d=i.y/o}}else g=i.x,d=i.y;return g=.5*(t.xmax+t.xmin)+g*(t.xmax-t.xmin),d=.5*(t.ymax+t.ymin)+d*(t.ymax-t.ymin),g-=n,d-=l,g*=u,d*=u,g+=m,d+=m,[y,g/p-.5,-(d/h-.5)]}function f(e){const t=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),o=function(e){let t=1/0,o=-1/0,i=1/0,r=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>o&&(o=e[0]),e[1]<i&&(i=e[1]),e[1]>r&&(r=e[1]);return new n.Z(t,i,o-t,r-i)}(t),i=Math.floor(31.5),r=(128-2*(i+1))/Math.max(o.width,o.height),l=Math.round(o.width*r)+2*i,a=Math.round(o.height*r)+2*i,s=[];for(const n of t)if(n&&n.length>1){const t=[];for(const l of n){let[n,a]=l;n-=o.x,a-=o.y,n*=r,a*=r,n+=i-.5,a+=i-.5,e.asFill?t.push([n,a]):t.push([Math.round(n),Math.round(a)])}if(e.asFill){const e=t.length-1;t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}s.push(t)}const c=function(e,t,o,i){const r=t*o,n=new Array(r),l=i*i+1;for(let a=0;a<r;++a)n[a]=l;for(const a of e){const e=a.length;for(let r=1;r<e;++r){const e=a[r-1],l=a[r];let s,c,f,m;e[0]<l[0]?(s=e[0],c=l[0]):(s=l[0],c=e[0]),e[1]<l[1]?(f=e[1],m=l[1]):(f=l[1],m=e[1]);let u=Math.floor(s)-i,p=Math.floor(c)+i,h=Math.floor(f)-i,y=Math.floor(m)+i;u<0&&(u=0),p>t&&(p=t),h<0&&(h=0),y>o&&(y=o);const g=l[0]-e[0],d=l[1]-e[1],N=g*g+d*d;for(let i=u;i<p;i++)for(let r=h;r<y;r++){let a,s,c=(i-e[0])*g+(r-e[1])*d;c<0?(a=e[0],s=e[1]):c>N?(a=l[0],s=l[1]):(c/=N,a=e[0]+c*g,s=e[1]+c*d);const f=(i-a)*(i-a)+(r-s)*(r-s),m=(o-r-1)*t+i;f<n[m]&&(n[m]=f)}}}for(let a=0;a<r;++a)n[a]=Math.sqrt(n[a]);return n}(s,l,a,i);return e.asFill&&function(e,t,o,i,r){for(const n of e){const e=n.length;for(let l=1;l<e;++l){const e=n[l-1],a=n[l];let s,c,f,m;e[0]<a[0]?(s=e[0],c=a[0]):(s=a[0],c=e[0]),e[1]<a[1]?(f=e[1],m=a[1]):(f=a[1],m=e[1]);let u=Math.floor(s),p=Math.floor(c)+1,h=Math.floor(f),y=Math.floor(m)+1;u<i&&(u=i),p>t-i&&(p=t-i),h<i&&(h=i),y>o-i&&(y=o-i);for(let n=h;n<y;++n){if(e[1]>n==a[1]>n)continue;const l=(o-n-1)*t;for(let t=u;t<p;++t)t<(a[0]-e[0])*(n-e[1])/(a[1]-e[1])+e[0]&&(r[l+t]=-r[l+t]);for(let e=i;e<u;++e)r[l+e]=-r[l+e]}}}}(s,l,a,i,c),[m(c,i),l,a]}function m(e,t){const o=2*t,r=e.length,n=new Uint8Array(4*r);for(let l=0;l<r;++l){const t=.5-e[l]/o;(0,i.I)(t,n,4*l)}return n}},79815:(e,t,o)=>{o.d(t,{S:()=>j,c:()=>M});var i=o(51995),r=o(84652),n=o(32718),l=o(92026),a=o(17842),s=o(643),c=o(819),f=o(78915),m=o(48202),u=o(6388),p=o(31027),h=o(95954),y=o(91935),g=o(94109),d=o(88750),N=o(93592);const S=n.Z.getLogger("esri.symbols.cim.cimAnalyzer");function v(e){switch(e){case"Butt":return m.RL.BUTT;case"Square":return m.RL.SQUARE;default:return m.RL.ROUND}}function b(e){switch(e){case"Bevel":return m.AH.BEVEL;case"Miter":return m.AH.MITER;default:return m.AH.ROUND}}function C(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return S.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),"center"}}function O(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function P(e,t,o,i){let r;e[t]?r=e[t]:(r={},e[t]=r),r[o]=i}function k(e){const t=e.markerPlacement;return t&&t.angleToLine?m.v2.MAP:m.v2.SCREEN}async function M(e,t,o,i,r){const n=i??[];if(!e)return n;let l,a;const s={};if("CIMSymbolReference"!==e.type)return S.error("Expect cim type to be 'CIMSymbolReference'"),n;if(l=e.symbol,a=e.primitiveOverrides,a){const e=[];for(const o of a){const i=o.valueExpressionInfo;if(i&&t){const r=i.expression,n=(0,c.Yi)(r,t.spatialReference,t.fields).then((e=>{e&&P(s,o.primitiveName,o.propertyName,e)}));e.push(n)}else null!=o.value&&P(s,o.primitiveName,o.propertyName,o.value)}e.length>0&&await Promise.all(e)}const u=[];switch(V(l,o,u),u.length>0&&await Promise.all(u),l.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,o,i,r,n,l){if(!e)return;const a=e.symbolLayers;if(!a)return;const s=e.effects;let c;const u=f.B$.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(c=m.v2.MAP);let p=a.length;for(;p--;){const m=a[p];if(!m||!1===m.enable)continue;let h;s&&s.length&&(h=[...s]);const y=m.effects;y&&y.length&&(s?h.push(...y):h=[...y]);const g=[];let d;f.E0.findEffectOverrides(h,t,g),d=g.length>0?U(h,g,o,i):h;const N=[];switch(f.E0.findApplicableOverrides(m,t,N),m.type){case"CIMSolidFill":w(m,d,o,N,i,r);break;case"CIMPictureFill":x(m,d,o,N,i,n,r);break;case"CIMHatchFill":A(m,d,o,N,i,r);break;case"CIMGradientFill":L(m,d,o,N,i,r);break;case"CIMSolidStroke":I(m,d,o,N,i,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMPictureStroke":z(m,d,o,N,i,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMGradientStroke":R(m,d,o,N,i,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMCharacterMarker":if(X(m,d,o,N,i,r))break;break;case"CIMPictureMarker":if(X(m,d,o,N,i,r))break;"CIMLineSymbol"===e.type&&(c=k(m)),$(m,d,o,N,i,n,r,c,u);break;case"CIMVectorMarker":if(X(m,d,o,N,i,r))break;"CIMLineSymbol"===e.type&&(c=k(m)),J(m,d,o,N,i,r,n,c,u,l);break;default:S.error("Cannot analyze CIM layer",m.type)}}}(l,a,s,t,n,o,r)}return n}function w(e,t,o,i,r,n){const l=e.primitiveName,a=(0,p.NO)(e.color),[c,f]=Z(i,l,t,null,null),m=(0,s.hP)(JSON.stringify(e)+f).toString();n.push({type:"fill",templateHash:m,materialHash:c?()=>m:m,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:B(l,o,"Color",r,a,T),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t,applyRandomOffset:!1,sampleAlphaOnly:!0})}function x(e,t,o,i,r,n,a){const c=e.primitiveName,f=e.tintColor?(0,p.NO)(e.tintColor):{r:255,g:255,b:255,a:1},[m,u]=Z(i,c,t,null,null),h=(0,s.hP)(JSON.stringify(e)+u).toString(),y=(0,s.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();let g=(0,p.NA)(e.scaleX);if("width"in e){const t=e.width;let o=1;const i=n.getResource(e.url);(0,l.pC)(i)&&(o=i.width/i.height),g/=o*(e.height/t)}a.push({type:"fill",templateHash:h,materialHash:m?()=>y:y,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:B(c,o,"TintColor",r,f,T),height:B(c,o,"Height",r,e.height),scaleX:B(c,o,"ScaleX",r,g),angle:B(c,o,"Rotation",r,(0,p.NA)(e.rotation)),offsetX:B(c,o,"OffsetX",r,(0,p.NA)(e.offsetX)),offsetY:B(c,o,"OffsetY",r,(0,p.NA)(e.offsetY)),url:e.url,applyRandomOffset:!1,sampleAlphaOnly:!1})}function A(e,t,o,i,r,n){const l=["Rotation","OffsetX","OffsetY"],a=i.filter((t=>t.primitiveName!==e.primitiveName&&!l.includes(t.propertyName))),c=e.primitiveName,[f,m]=Z(i,c,t,null,null),u=(0,s.hP)(JSON.stringify(e)+m).toString(),h=(0,s.hP)(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();let y={r:255,g:255,b:255,a:1};if(e.lineSymbol){const t=e.lineSymbol?.symbolLayers.find((e=>"CIMSolidStroke"===e.type));t&&(y=(0,p.NO)(t.color))}n.push({type:"fill",templateHash:u,materialHash:f?D(h,o,a,r):h,cim:e,materialOverrides:a,colorLocked:e.colorLocked,effects:t,color:y,height:B(c,o,"Separation",r,e.separation),scaleX:1,angle:B(c,o,"Rotation",r,(0,p.NA)(e.rotation)),offsetX:B(c,o,"OffsetX",r,(0,p.NA)(e.offsetX)),offsetY:B(c,o,"OffsetY",r,(0,p.NA)(e.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0})}function L(e,t,o,i,r,n){const l=e.primitiveName,[a,c]=Z(i,l,t,null,null),f=(0,s.hP)(JSON.stringify(e)+c).toString();n.push({type:"fill",templateHash:f,materialHash:a?D(f,o,i,r):f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,sampleAlphaOnly:!1})}function I(e,t,o,i,r,n,l,a){const c=e.primitiveName,f=(0,p.NO)(e.color),m=void 0!==e.width?e.width:4,u=v(e.capStyle),h=b(e.joinStyle),y=e.miterLimit,[g,d]=Z(i,c,t,null,null),N=(0,s.hP)(JSON.stringify(e)+d).toString();let S,C;if(t&&t instanceof Array&&t.length>0){const e=t[t.length-1];if("CIMGeometricEffectDashes"===e.type&&"NoConstraint"===e.lineDashEnding&&null===e.offsetAlongLine){const e=(t=[...t]).pop();S=e.dashTemplate,C=e.scaleDash}}n.push({type:"line",templateHash:N,materialHash:g?()=>N:N,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:B(c,o,"Color",r,f,T),width:B(c,o,"Width",r,m),cap:B(c,o,"CapStyle",r,u),join:B(c,o,"JoinStyle",r,h),miterLimit:B(c,o,"MiterLimit",r,y),referenceWidth:a,zOrder:F(e.name),dashTemplate:S,scaleDash:C,sampleAlphaOnly:!0})}function z(e,t,o,i,r,n,l,a){const c=(0,s.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,m=(0,p.NO)(e.tintColor),u=void 0!==e.width?e.width:4,h=v(e.capStyle),y=b(e.joinStyle),g=e.miterLimit,[d,N]=Z(i,f,t,null,null),S=(0,s.hP)(JSON.stringify(e)+N).toString();n.push({type:"line",templateHash:S,materialHash:d?()=>c:c,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:B(f,o,"TintColor",r,m,T),width:B(f,o,"Width",r,u),cap:B(f,o,"CapStyle",r,h),join:B(f,o,"JoinStyle",r,y),miterLimit:B(f,o,"MiterLimit",r,g),referenceWidth:a,zOrder:F(e.name),dashTemplate:null,scaleDash:!1,url:e.url,sampleAlphaOnly:!1})}function R(e,t,o,i,r,n,l,a){const c=e.primitiveName,f=void 0!==e.width?e.width:4,m=v(e.capStyle),u=b(e.joinStyle),p=e.miterLimit,[h,y]=Z(i,c,t,null,null),g=(0,s.hP)(JSON.stringify(e)+y).toString();n.push({type:"line",templateHash:g,materialHash:h?D(g,o,i,r):g,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:B(c,o,"Width",r,f),cap:B(c,o,"CapStyle",r,m),join:B(c,o,"JoinStyle",r,u),miterLimit:B(c,o,"MiterLimit",r,p),referenceWidth:a,zOrder:F(e.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}function X(e,t,o,i,r,n){const l=e.markerPlacement;if(!l||"CIMMarkerPlacementInsidePolygon"!==l.type)return!1;const c=l,f=Math.abs(c.stepX),m=Math.abs(c.stepY);if(0===f||0===m)return!0;const u=["Rotation","OffsetX","OffsetY"],h=i.filter((t=>t.primitiveName!==e.primitiveName&&!u.includes(t.propertyName))),y="url"in e?e.url:null,[d,N]=Z(i,c.primitiveName,t,null,null),S=(0,s.hP)(JSON.stringify(e)+N).toString();let v,b,C=null;if("Random"===l.gridType){const e=(0,a.Wz)(g.C1),t=Math.max(Math.floor(e/f),1),o=Math.max(Math.floor(e/m),1);v=m*o,C=e=>e?e*o:0,b=t*f/v}else l.shiftOddRows?(v=2*m,C=e=>e?2*e:0,b=f/m*.5):(v=m,C=null,b=f/m);let O={r:255,g:255,b:255,a:1};return"tintColor"in e&&(O=(0,p.NO)(e.tintColor)),n.push({type:"fill",templateHash:S,materialHash:d?D(S,o,h,r):S,cim:e,materialOverrides:h,colorLocked:e.colorLocked,effects:t,color:B(c.primitiveName,o,"TintColor",r,O,T),height:B(c.primitiveName,o,"StepY",r,v,C),scaleX:b,angle:B(c.primitiveName,o,"GridAngle",r,c.gridAngle),offsetX:B(c.primitiveName,o,"OffsetX",r,(0,p.NA)(c.offsetX)),offsetY:B(c.primitiveName,o,"OffsetY",r,(0,p.NA)(c.offsetY)),url:y,applyRandomOffset:"Random"===l.gridType,sampleAlphaOnly:!y}),!0}function $(e,t,o,i,n,a,m,u,h){const g=e.primitiveName,d=(0,p.NA)(e.size);let S=(0,p.NA)(e.scaleX);const v=(0,p.NA)(e.rotation),b=(0,p.NA)(e.offsetX),C=(0,p.NA)(e.offsetY),O=e.tintColor?(0,p.NO)(e.tintColor):{r:255,g:255,b:255,a:1},P=(0,s.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}${JSON.stringify(e.animatedSymbolProperties)}`).toString(),k=W(e.markerPlacement,i,o,n),M=function(e,t,o,i){const n=[];if(f.E0.findApplicableOverrides(e,t,n),0===n.length)return e;for(const r of n)if(r.valueExpressionInfo){const e=o[r.primitiveName]&&o[r.primitiveName][r.propertyName];e instanceof c.mz&&(r.fn=(t,o,r)=>(0,y.Z)(e,t,{$view:r},i.geometryType,o))}return(t,o,i)=>{for(const e of n)e.fn&&(e.value=e.fn(t,o,i));const l=(0,r.d9)(e),a=e.primitiveName;for(const e of n)if(e.primitiveName===a){const t=G(e.propertyName);null!=e.value&&e.value!==l[t]&&(l[t]=e.value)}return l}}(e.animatedSymbolProperties,i,o,n),[w,x]=Z(i,g,t,k,M),A=(0,s.hP)(JSON.stringify(e)+x).toString(),L=e.anchorPoint??{x:0,y:0};if("width"in e){const t=e.width;let o=1;const i=a.getResource(e.url);(0,l.pC)(i)&&(o=i.width/i.height),S/=o*(d/t)}function I(e,t){return(0,p.hf)(M,e,t)}const z=e.animatedSymbolProperties&&!0===e.animatedSymbolProperties.randomizeStartTime?(e,t,o,i)=>{const r=(0,N.$)(i),n=I(e,t);return P+`-MATERIALGROUP(${r})`+`-ASP(${JSON.stringify(n)})`}:w?(e,t)=>{const o=I(e,t);return P+`-ASP(${JSON.stringify(o)})`}:P;m.push({type:"marker",templateHash:A,materialHash:z,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:u,size:B(g,o,"Size",n,d),scaleX:B(g,o,"ScaleX",n,S),rotation:B(g,o,"Rotation",n,v),offsetX:B(g,o,"OffsetX",n,b),offsetY:B(g,o,"OffsetY",n,C),color:B(g,o,"TintColor",n,O,T),anchorPoint:{x:L.x,y:-L.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:h,sizeRatio:1,markerPlacement:k,url:e.url,animatedSymbolProperties:M})}function J(e,t,o,i,r,n,l,a,s,c){const f=e.markerGraphics;if(!f)return;let m=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(m=t.ymax-t.ymin)}const u=W(e.markerPlacement,i,o,r);for(const p of f)if(p){const f=p.symbol;if(!f)continue;switch(f.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":Y(e,t,u,null,p,i,o,r,n,l,a,s,m,c);break;case"CIMTextSymbol":H(e,t,u,p,o,i,r,n,a,s,m)}}}function H(e,t,o,i,r,n,l,a,c,m,u){f.E0.findApplicableOverrides(i,n,[]);const h=i.geometry;if(!("x"in h)||!("y"in h))return;const y=i.symbol,g=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(y),N=function(e){let t="",o="";if(e){const i=e.toLowerCase();i.includes("italic")?t="italic":i.includes("oblique")&&(t="oblique"),i.includes("bold")?o="bold":i.includes("light")&&(o="lighter")}return{style:t,weight:o}}(y.fontStyleName),S=(0,d.BN)(y.fontFamilyName);y.font={family:S,decoration:g,...N};const v=e.frame,b=h.x-.5*(v.xmin+v.xmax),P=h.y-.5*(v.ymin+v.ymax),k=e.size/u,M=e.primitiveName,w=(0,p.NA)(y.height)*k,x=(0,p.NA)(y.angle),A=(0,p.NA)(e.offsetX)+((0,p.NA)(y.offsetX)+b)*k,L=(0,p.NA)(e.offsetY)+((0,p.NA)(y.offsetY)+P)*k,I=(0,p.NO)(f.B$.getFillColor(y));let z=(0,p.NO)(f.B$.getStrokeColor(y)),R=f.B$.getStrokeWidth(y);R||(z=(0,p.NO)(f.B$.getFillColor(y.haloSymbol)),R=y.haloSize*k);const[X,$]=Z(n,M,t,o,null),J=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),H=(0,s.hP)(JSON.stringify(i)+J+$).toString();let Y=B(i.primitiveName,r,"TextString",l,i.textString,p.X3,y.textCase);if(null==Y)return;const{fontStyleName:E}=y,F=S+(E?"-"+E.toLowerCase():"-regular"),T=F;"string"==typeof Y&&Y.includes("[")&&y.fieldMap&&(Y=(0,p.Qs)(y.fieldMap,Y,y.textCase)),a.push({type:"text",templateHash:H,materialHash:X||"function"==typeof Y||Y.match(/\[(.*?)\]/)?(e,t,o)=>T+"-"+(0,p.hf)(Y,e,t,o):T+"-"+(0,s.hP)(Y),cim:y,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:c,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:F,decoration:g,weight:B(M,r,"Weight",l,N.weight),style:B(M,r,"Size",l,N.style),size:B(M,r,"Size",l,w),angle:B(M,r,"Rotation",l,x),offsetX:B(M,r,"OffsetX",l,A),offsetY:B(M,r,"OffsetY",l,L),horizontalAlignment:C(y.horizontalAlignment),verticalAlignment:O(y.verticalAlignment),text:Y,color:I,outlineColor:z,outlineSize:R,referenceSize:m,sizeRatio:1,markerPlacement:o})}function Y(e,t,o,i,r,n,a,c,m,y,g,d,N,S){const v=r.symbol,b=v.symbolLayers;if(!b)return;if(S)return void E(e,t,o,i,r,a,n,c,m,y,g,d,N);let C=b.length;if(_(b))return void function(e,t,o,i,r,n,l,a,c,m,h,y,g){const d=r.geometry,N=n[0],S=n[1],v=(0,u.bk)(d);if(!v)return;const[b,C,O]=(0,u.UV)(v,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),P={type:"sdf",geom:d,asFill:!0},k=e.primitiveName,M=(0,p.NA)(e.size),w=(0,p.NA)(e.rotation),x=(0,p.NA)(e.offsetX),A=(0,p.NA)(e.offsetY),L=S.path,I=S.primitiveName,z=N.primitiveName,R=(0,p.NO)(f.B$.getFillColor(S)),X=(0,p.NO)(f.B$.getStrokeColor(N)),$=f.B$.getStrokeWidth(N);let J=!1,H="";for(const s of l)s.primitiveName!==I&&s.primitiveName!==z&&s.primitiveName!==k||(void 0!==s.value?H+=`-${s.primitiveName}-${s.propertyName}-${JSON.stringify(s.value)}`:s.valueExpressionInfo&&(J=!0));const Y=JSON.stringify({...e,markerGraphics:null}),E=(0,s.hP)(JSON.stringify(P)+L).toString(),F={type:"marker",templateHash:(0,s.hP)(JSON.stringify(r)+JSON.stringify(S)+JSON.stringify(N)+Y+H).toString(),materialHash:J?()=>E:E,cim:P,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:h,anchorPoint:{x:C,y:O},isAbsoluteAnchorPoint:!1,size:B(e.primitiveName,a,"Size",c,M),rotation:B(e.primitiveName,a,"Rotation",c,w),offsetX:B(e.primitiveName,a,"OffsetX",c,x),offsetY:B(e.primitiveName,a,"OffsetY",c,A),scaleX:1,frameHeight:g,rotateClockwise:e.rotateClockwise,referenceSize:y,sizeRatio:b,color:B(I,a,"Color",c,R,T),outlineColor:B(z,a,"Color",c,X,T),outlineWidth:B(z,a,"Width",c,$),markerPlacement:o,path:L,animatedSymbolProperties:i};m.push(F)}(e,t,o,i,r,b,n,a,c,m,g,d,N);const O=h.j.applyEffects(v.effects,r.geometry,y.geometryEngine);if(O)for(;C--;){const S=b[C];if(S&&!1!==S.enable)switch(S.type){case"CIMSolidFill":case"CIMSolidStroke":{const v=h.j.applyEffects(S.effects,O,y.geometryEngine),b=(0,u.bk)(v);if(!b)continue;const[C,P,k]=(0,u.UV)(b,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),M="CIMSolidFill"===S.type,w={type:"sdf",geom:v,asFill:M},x=e.primitiveName,A=(0,p.NA)(e.size)??10,L=(0,p.NA)(e.rotation),I=(0,p.NA)(e.offsetX),z=(0,p.NA)(e.offsetY),R=S.path,X=S.primitiveName,$=(0,p.NO)(M?f.B$.getFillColor(S):f.B$.getStrokeColor(S)),J=M?{r:0,g:0,b:0,a:0}:(0,p.NO)(f.B$.getStrokeColor(S)),H=f.B$.getStrokeWidth(S);if(!M&&!H)break;let Y=!1,E="";for(const e of n)e.primitiveName!==X&&e.primitiveName!==x||(void 0!==e.value?E+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(Y=!0));(0,l.pC)(t)&&"function"==typeof t&&(Y=!0);const F=JSON.stringify({...e,markerGraphics:null}),G=(0,s.hP)(JSON.stringify(w)+R).toString(),U={type:"marker",templateHash:(0,s.hP)(JSON.stringify(r)+JSON.stringify(S)+F+E).toString(),materialHash:Y?()=>G:G,cim:w,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:g,anchorPoint:{x:P,y:k},isAbsoluteAnchorPoint:!1,size:B(e.primitiveName,a,"Size",c,A),rotation:B(e.primitiveName,a,"Rotation",c,L),offsetX:B(e.primitiveName,a,"OffsetX",c,I),offsetY:B(e.primitiveName,a,"OffsetY",c,z),scaleX:1,frameHeight:N,rotateClockwise:e.rotateClockwise,referenceSize:d,sizeRatio:C,color:B(X,a,"Color",c,$,T),outlineColor:B(X,a,"Color",c,J,T),outlineWidth:B(X,a,"Width",c,H),markerPlacement:o,animatedSymbolProperties:i,path:R};m.push(U);break}default:E(e,t,o,i,r,a,n,c,m,y,g,d,N)}}}function E(e,t,o,i,r,n,c,m,u,h,y,g,d){const N=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,r);let S=[];const v=["Rotation","OffsetX","OffsetY"];S=c.filter((t=>t.primitiveName!==e.primitiveName||!v.includes(t.propertyName)));let b="";for(const l of c)void 0!==l.value&&(b+=`-${l.primitiveName}-${l.propertyName}-${JSON.stringify(l.value)}`);const[C,O,P]=f.B$.getTextureAnchor(N,h),k=e.primitiveName,M=(0,p.NA)(e.rotation),w=(0,p.NA)(e.offsetX),x=(0,p.NA)(e.offsetY),A=(0,s.hP)(JSON.stringify(N)+b).toString(),L={type:"marker",templateHash:A,materialHash:S.length>0||(0,l.pC)(t)&&"function"==typeof t?D(A,n,S,m):A,cim:N,materialOverrides:S,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:y,anchorPoint:{x:C,y:O},isAbsoluteAnchorPoint:!1,size:e.size,rotation:B(k,n,"Rotation",m,M),offsetX:B(k,n,"OffsetX",m,w),offsetY:B(k,n,"OffsetY",m,x),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:d,rotateClockwise:e.rotateClockwise,referenceSize:g,sizeRatio:P/(0,a.F2)(e.size),markerPlacement:o,animatedSymbolProperties:i};u.push(L)}function F(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(!isNaN(t))return t}return 0}function T(e){if(!e||0===e.length)return null;const t=new i.Z(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function B(e,t,o,i,r,n,l){const a=t[e];if(a){const e=a[o];if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,l):e;if(null!=e&&e instanceof c.mz)return(t,o,a)=>{let s=(0,y.Z)(e,t,{$view:a},i.geometryType,o);return null!==s&&n&&(s=n.call(null,s,l)),null!==s?s:r}}return r}function G(e){return e?e.charAt(0).toLowerCase()+e.substr(1):e}function U(e,t,o,i){for(const r of t)if(r.valueExpressionInfo){const e=o[r.primitiveName]&&o[r.primitiveName][r.propertyName];e instanceof c.mz&&(r.fn=(t,o,r)=>(0,y.Z)(e,t,{$view:r},i.geometryType,o))}return(o,i,n)=>{for(const e of t)e.fn&&(e.value=e.fn(o,i,n));const l=[];for(let a of e){const e=a?.primitiveName;if(e){let o=!1;for(const i of t)if(i.primitiveName===e){const e=G(i.propertyName);null!=i.value&&i.value!==a[e]&&(o||(a=(0,r.d9)(a),o=!0),a[e]=i.value)}}l.push(a)}return l}}function W(e,t,o,i){const n=[];if(f.E0.findApplicableOverrides(e,t,n),0===n.length)return e;for(const r of n)if(r.valueExpressionInfo){const e=o[r.primitiveName]&&o[r.primitiveName][r.propertyName];e instanceof c.mz&&(r.fn=(t,o,r)=>(0,y.Z)(e,t,{$view:r},i.geometryType,o))}return(t,o,i)=>{for(const e of n)e.fn&&(e.value=e.fn(t,o,i));const l=(0,r.d9)(e),a=e.primitiveName;for(const e of n)if(e.primitiveName===a){const t=G(e.propertyName);null!=e.value&&e.value!==l[t]&&(l[t]=e.value)}return l}}function D(e,t,o,i){for(const r of o)if(r.valueExpressionInfo){const e=t[r.primitiveName]&&t[r.primitiveName][r.propertyName];e instanceof c.mz&&(r.fn=(t,o,r)=>(0,y.Z)(e,t,{$view:r},i.geometryType,o))}return(t,i,r)=>{for(const e of o)e.fn&&(e.value=e.fn(t,i,r));return(0,s.hP)(e+f.E0.buildOverrideKey(o)).toString()}}function j(e,t){if(!t||0===t.length)return e;const o=JSON.parse(JSON.stringify(e));return f.E0.applyOverrides(o,t),o}function Z(e,t,o,i,r){let n=!1,a="";for(const l of e)l.primitiveName===t&&(void 0!==l.value?a+=`-${l.primitiveName}-${l.propertyName}-${JSON.stringify(l.value)}`:l.valueExpressionInfo&&(n=!0));return(0,l.pC)(o)&&"function"==typeof o&&(n=!0),(0,l.pC)(i)&&"function"==typeof i&&(n=!0),(0,l.pC)(r)&&"function"==typeof r&&(n=!0),[n,a]}function V(e,t,o){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const i=e.symbolLayers;if(!i)return;for(const e of i)switch(Q(e,t,o),e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&o.push(t.fetchResource(e.url,null));break;case"CIMVectorMarker":{const i=e.markerGraphics;if(!i)continue;for(const e of i)if(e){const i=e.symbol;i&&V(i,t,o)}}}}}}const _=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects;let q;function Q(e,t,o){e.effects&&!(0,l.pC)(t.geometryEngine)&&(q?o.push(q):(0,p.Cc)(e.effects)&&(q=(0,p.RI)(),o.push(q),q.then((e=>t.geometryEngine=e))))}},95954:(e,t,o)=>{o.d(t,{j:()=>a});var i=o(77981),r=o(25290),n=o(35747),l=o(7313);class a{static executeEffects(e,t,o){const i=(0,r.GP)(t);let a=new n.M(i);for(const r of e){const e=(0,l.h)(r);e&&(a=e.execute(a,r,1.3333333333333333,o))}return a}static next(e){const t=e.next();return(0,r.wp)(t),t}static applyEffects(e,t,o){if(!e)return t;let r=new n.M(t);for(const i of e){const e=(0,l.h)(i);e&&(r=e.execute(r,i,1,o))}let a,s=null;for(;a=r.next();)s?(0,i.l9)(s)?(0,i.l9)(a)&&s.paths.push(...a.paths):(0,i.oU)(s)&&(0,i.oU)(a)&&s.rings.push(...a.rings):s=a;return s}}},91935:(e,t,o)=>{o.d(t,{Z:()=>l});var i=o(10064),r=o(32718),n=o(58971);function l(e,t,o,i,n){const l=e.referencesGeometry()&&n?s(t,i,n):t,a=e.repurposeFeature(l);try{return e.evaluate({...o,$feature:a})}catch(c){return r.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const a=new Map;function s(e,t,o){const{transform:l,hasZ:s,hasM:c}=o;a.has(t)||a.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,o,i,r)=>(0,n.U1)(o,t,e,i,r);case"esriGeometryPolygon":return(e,o,i,r)=>(0,n.Ie)(o,t,e,i,r);case"esriGeometryPolyline":return(e,o,i,r)=>(0,n.G6)(o,t,e,i,r);case"esriGeometryMultipoint":return(e,o,i,r)=>(0,n.J9)(o,t,e,i,r);default:return r.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new i.Z("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));const f=a.get(t)(e.geometry,l,s,c);return{...e,geometry:f}}},88750:(e,t,o)=>{o.d(t,{BN:()=>i,Yc:()=>r});function i(e){const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function r(e){const t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return i(e.family)+(t.length>0?t:"-regular")}},93592:(e,t,o)=>{o.d(t,{$:()=>n,f:()=>r});var i=o(643);function r(e,t){let o;if("string"==typeof e)o=(0,i.hP)(e+`-seed(${t})`);else{let i=12;o=e^t;do{o=107*(o>>8^o)+i|0}while(0!=--i)}return(1+o/(1<<31))/2}function n(e){return Math.floor(r(e,l)*a)}const l=53290320,a=10}}]);
//# sourceMappingURL=9815.cdf54e6f.chunk.js.map