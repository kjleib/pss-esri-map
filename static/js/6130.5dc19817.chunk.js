"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[6130],{58971:(e,n,t)=>{t.d(n,{G6:()=>F,Ie:()=>z,J9:()=>x,RF:()=>v,U1:()=>T,vY:()=>s,ym:()=>V});var l=t(92026),a=t(77981);const i=(e,n,t)=>[n,t],r=(e,n,t)=>[n,t,e[2]],o=(e,n,t)=>[n,t,e[2],e[3]];function s(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,l.pC)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function u(e,n){let{scale:t,translate:l}=e;return Math.round((n-l[0])/t[0])}function c(e,n){let{scale:t,translate:l}=e;return Math.round((l[1]-n)/t[1])}function f(e,n,t){const l=[];let a,i,r,o;for(let s=0;s<t.length;s++){const f=t[s];s>0?(r=u(e,f[0]),o=c(e,f[1]),r===a&&o===i||(l.push(n(f,r-a,o-i)),a=r,i=o)):(a=u(e,f[0]),i=c(e,f[1]),l.push(n(f,a,i)))}return l.length>0?l:null}function m(e,n){let{scale:t,translate:l}=e;return n*t[0]+l[0]}function d(e,n){let{scale:t,translate:l}=e;return l[1]-n*t[1]}function p(e,n,t){const l=new Array(t.length);if(!t.length)return l;const[a,i]=e.scale;let r=m(e,t[0][0]),o=d(e,t[0][1]);l[0]=n(t[0],r,o);for(let s=1;s<t.length;s++){const e=t[s];r+=e[0]*a,o-=e[1]*i,l[s]=n(e,r,o)}return l}function h(e,n,t){const l=new Array(t.length);for(let a=0;a<t.length;a++)l[a]=p(e,n,t[a]);return l}function b(e,n,t,l,a){return n.points=function(e,n,t,l){return f(e,t?l?o:r:l?r:i,n)}(e,t.points,l,a),n}function v(e,n,t,l,a){return n.x=u(e,t.x),n.y=c(e,t.y),n!==t&&(l&&(n.z=t.z),a&&(n.m=t.m)),n}function g(e,n,t,l,a){const s=function(e,n,t,l){const a=[],s=t?l?o:r:l?r:i;for(let i=0;i<n.length;i++){const t=f(e,s,n[i]);t&&t.length>=3&&a.push(t)}return a.length?a:null}(e,t.rings,l,a);return s?(n.rings=s,n):null}function y(e,n,t,l,a){const s=function(e,n,t,l){const a=[],s=t?l?o:r:l?r:i;for(let i=0;i<n.length;i++){const t=f(e,s,n[i]);t&&t.length>=2&&a.push(t)}return a.length?a:null}(e,t.paths,l,a);return s?(n.paths=s,n):null}function V(e,n){return e&&n?(0,a.wp)(n)?v(e,{},n,!1,!1):(0,a.l9)(n)?y(e,{},n,!1,!1):(0,a.oU)(n)?g(e,{},n,!1,!1):(0,a.aW)(n)?b(e,{},n,!1,!1):(0,a.YX)(n)?function(e,n,t,l,a){return n.xmin=u(e,t.xmin),n.ymin=c(e,t.ymin),n.xmax=u(e,t.xmax),n.ymax=c(e,t.ymax),n!==t&&(l&&(n.zmin=t.zmin,n.zmax=t.zmax),a&&(n.mmin=t.mmin,n.mmax=t.mmax)),n}(e,{},n,!1,!1):null:null}function x(e,n,t,a,s){return(0,l.pC)(t)&&(n.points=function(e,n,t,l){return p(e,t?l?o:r:l?r:i,n)}(e,t.points,a,s)),n}function T(e,n,t,a,i){return(0,l.Wi)(t)||(n.x=m(e,t.x),n.y=d(e,t.y),n!==t&&(a&&(n.z=t.z),i&&(n.m=t.m))),n}function z(e,n,t,a,s){return(0,l.pC)(t)&&(n.rings=function(e,n,t,l){return h(e,t?l?o:r:l?r:i,n)}(e,t.rings,a,s)),n}function F(e,n,t,a,s){return(0,l.pC)(t)&&(n.paths=function(e,n,t,l){return h(e,t?l?o:r:l?r:i,n)}(e,t.paths,a,s)),n}},76551:(e,n,t)=>{t.d(n,{Z:()=>b});var l=t(27366),a=t(43404),i=t(49861),r=(t(63780),t(93169),t(25243),t(69912)),o=t(46784),s=t(57634),u=t(22061);const c=new a.X({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let f=class extends o.wq{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};(0,l._)([(0,i.Cb)({type:u.Z,json:{write:!0}})],f.prototype,"baseSymbol",void 0),(0,l._)([(0,i.Cb)({types:s.V,json:{read:{reader:s.i},write:!0}})],f.prototype,"colorRamp",void 0),(0,l._)([(0,i.Cb)({json:{read:c.read,write:c.write}})],f.prototype,"type",void 0),f=(0,l._)([(0,r.j)("esri.rest.support.ClassificationDefinition")],f);const m=f,d=new a.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),p=new a.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let h=class extends m{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,l._)([(0,i.Cb)({json:{write:!0}})],h.prototype,"breakCount",void 0),(0,l._)([(0,i.Cb)({json:{write:!0}})],h.prototype,"classificationField",void 0),(0,l._)([(0,i.Cb)({type:String,json:{read:d.read,write:d.write}})],h.prototype,"classificationMethod",void 0),(0,l._)([(0,i.Cb)({json:{write:!0}})],h.prototype,"normalizationField",void 0),(0,l._)([(0,i.Cb)({json:{read:p.read,write:p.write}})],h.prototype,"normalizationType",void 0),(0,l._)([(0,i.Cb)({value:null,json:{write:!0}})],h.prototype,"standardDeviationInterval",null),(0,l._)([(0,i.Cb)({value:null,json:{write:!0}})],h.prototype,"definedInterval",null),(0,l._)([(0,i.Cb)()],h.prototype,"type",void 0),h=(0,l._)([(0,r.j)("esri.rest.support.ClassBreaksDefinition")],h);const b=h},15903:(e,n,t)=>{t.d(n,{G2:()=>C,oF:()=>I,XL:()=>v,i5:()=>b,H0:()=>h,eT:()=>T,Qm:()=>z,Lq:()=>g,fk:()=>F,S5:()=>p,F_:()=>x,DL:()=>D});var l=t(76551);function a(e,n){return Number(e.toFixed(n))}function i(e){const n=e.definition,{classificationMethod:t,breakCount:l,normalizationType:i,definedInterval:u}=n,c=[];let f=e.values;if(0===f.length)return[];f=f.sort(((e,n)=>e-n));const m=f[0],d=f[f.length-1];if("equal-interval"===t)if(f.length>=l){const e=(d-m)/l;let n=m;for(let t=1;t<l;t++){const l=a(m+t*e,6);c.push({minValue:n,maxValue:l,label:r(n,l,i)}),n=l}c.push({minValue:n,maxValue:d,label:r(n,d,i)})}else f.forEach((e=>{c.push({minValue:e,maxValue:e,label:r(e,e,i)})}));else if("natural-breaks"===t){const n=o(f),t=e.valueFrequency||n.valueFrequency,u=s(n.uniqueValues,t,l);let p=m;for(let e=1;e<l;e++)if(n.uniqueValues.length>e){const t=a(n.uniqueValues[u[e]],6);c.push({minValue:p,maxValue:t,label:r(p,t,i)}),p=t}c.push({minValue:p,maxValue:d,label:r(p,d,i)})}else if("quantile"===t)if(f.length>=l&&m!==d){let e=m,n=Math.ceil(f.length/l),t=0;for(let a=1;a<l;a++){let o=n+t-1;o>f.length&&(o=f.length-1),o<0&&(o=0),c.push({minValue:e,maxValue:f[o],label:r(e,f[o],i)}),e=f[o],t+=n,n=Math.ceil((f.length-t)/(l-a))}c.push({minValue:e,maxValue:d,label:r(e,d,i)})}else{let e=-1;for(let n=0;n<f.length;n++){const t=f[n];t!==e&&(e=t,c.push({minValue:e,maxValue:t,label:r(e,t,i)}),e=t)}}else if("standard-deviation"===t){const e=function(e){let n=0;for(let t=0;t<e.length;t++)n+=e[t];return n/=e.length,n}(f),n=function(e,n){let t=0;for(let l=0;l<e.length;l++){const a=e[l];t+=(a-n)*(a-n)}return t/=e.length,Math.sqrt(t)}(f,e);if(0===n)c.push({minValue:f[0],maxValue:f[0],label:r(f[0],f[0],i)});else{const t=function(e,n,t,l,a){let i=Math.max(l-e,n-l)/a/t;return i=i>=1?1:i>=.5?.5:.25,i}(m,d,l,e,n)*n;let o=0,s=m;for(let n=l;n>=1;n--){const l=a(e-(n-.5)*t,6);c.push({minValue:s,maxValue:l,label:r(s,l,i)}),s=l,o++}let u=a(e+.5*t,6);c.push({minValue:s,maxValue:u,label:r(s,u,i)}),s=u,o++;for(let n=1;n<=l;n++)u=o===2*l?d:a(e+(n+.5)*t,6),c.push({minValue:s,maxValue:u,label:r(s,u,i)}),s=u,o++}}else if("defined-interval"===t){if(!u)return c;const e=f[0],n=f[f.length-1],t=Math.ceil((n-e)/u);let l=e;for(let o=1;o<t;o++){const n=a(e+o*u,6);c.push({minValue:l,maxValue:n,label:r(l,n,i)}),l=n}c.push({minValue:l,maxValue:n,label:r(l,n,i)})}return c}function r(e,n,t){let l=null;return l=e===n?t&&"percent-of-total"===t?e+"%":e.toString():t&&"percent-of-total"===t?e+"% - "+n+"%":e+" - "+n,l}function o(e){const n=[],t=[];let l=Number.MIN_VALUE,a=1,i=-1;for(let r=0;r<e.length;r++){const o=e[r];o===l?(a++,t[i]=a):null!==o&&(n.push(o),l=o,a=1,t.push(a),i++)}return{uniqueValues:n,valueFrequency:t}}function s(e,n,t){const l=e.length,a=[];t>l&&(t=l);for(let r=0;r<t;r++)a.push(Math.round(r*l/t-1));a.push(l-1);let i=u(a,e,n,t);return function(e,n,t,l,a,i){let r=0,o=0,s=0,u=0,f=!0;for(let m=0;m<2&&f;m++){0===m&&(f=!1);for(let m=0;m<i-1;m++)for(;t[m+1]+1!==t[m+2];){t[m+1]=t[m+1]+1;const i=c(m,t,l,a);s=i.sbMean,r=i.sbSdcm;const d=c(m+1,t,l,a);if(u=d.sbMean,o=d.sbSdcm,!(r+o<n[m]+n[m+1])){t[m+1]=t[m+1]-1;break}n[m]=r,n[m+1]=o,e[m]=s,e[m+1]=u,f=!0}for(let m=i-1;m>0;m--)for(;t[m]!==t[m-1]+1;){t[m]=t[m]-1;const i=c(m-1,t,l,a);s=i.sbMean,r=i.sbSdcm;const d=c(m,t,l,a);if(u=d.sbMean,o=d.sbSdcm,!(r+o<n[m-1]+n[m])){t[m]=t[m]+1;break}n[m-1]=r,n[m]=o,e[m-1]=s,e[m]=u,f=!0}}return f}(i.mean,i.sdcm,a,e,n,t)&&(i=u(a,e,n,t)),a}function u(e,n,t,l){let a=[],i=[],r=[],o=0;const s=[],u=[];for(let p=0;p<l;p++){const l=c(p,e,n,t);s.push(l.sbMean),u.push(l.sbSdcm),o+=u[p]}let f,m=o,d=!0;for(;d||o<m;){d=!1,a=[];for(let n=0;n<l;n++)a.push(e[n]);for(let t=0;t<l;t++)for(let a=e[t]+1;a<=e[t+1];a++)if(f=n[a],t>0&&a!==e[t+1]&&Math.abs(f-s[t])>Math.abs(f-s[t-1]))e[t]=a;else if(t<l-1&&e[t]!==a-1&&Math.abs(f-s[t])>Math.abs(f-s[t+1])){e[t+1]=a-1;break}m=o,o=0,i=[],r=[];for(let a=0;a<l;a++){i.push(s[a]),r.push(u[a]);const l=c(a,e,n,t);s[a]=l.sbMean,u[a]=l.sbSdcm,o+=u[a]}}if(o>m){for(let n=0;n<l;n++)e[n]=a[n],s[n]=i[n],u[n]=r[n];o=m}return{mean:s,sdcm:u}}function c(e,n,t,l){let a=0,i=0;for(let s=n[e]+1;s<=n[e+1];s++){const e=l[s];a+=t[s]*e,i+=e}i<=0&&console.log("Exception in Natural Breaks calculation");const r=a/i;let o=0;for(let s=n[e]+1;s<=n[e+1];s++)o+=l[s]*(t[s]-r)**2;return{sbMean:r,sbSdcm:o}}const f=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,m=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),d=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function p(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function h(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).length,l={count:t};return e.supportsNullCount&&(l.nullcount=n.length-t),e.percentileParams&&(l.median=v(n,e.percentileParams)),l}function b(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=null,o=null,s=null,u=null,c=0;const f=null==e.minValue?-1/0:e.minValue,m=null==e.maxValue?1/0:e.maxValue;for(const p of n)Number.isFinite(p)?p>=f&&p<=m&&(r+=p,a=Math.min(a,p),i=Math.max(i,p),c++):"string"==typeof p&&c++;if(c&&null!=r){o=r/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=f&&t<=m&&(e+=(t-o)**2);u=t?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(u)}else a=null,i=null;const d={avg:o,count:c,max:i,min:a,stddev:s,sum:r,variance:u};return l&&(d.nullcount=n.length-c),e.percentileParams&&(d.median=v(n,e.percentileParams)),d}function v(e,n){const{fieldType:t,value:l,orderBy:a,isDiscrete:i}=n,r=g(t,"desc"===a);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>r(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const o=(e.length-1)*l,s=Math.floor(o),u=s+1,c=o%1,f=e[s],m=e[u];return u>=e.length||i||"string"==typeof f||"string"==typeof m?f:f*(1-c)+m*c}function g(e,n){const t=n?1:-1,l=function(e){return e?(e,n)=>n-e:(e,n)=>e-n}(n),a=y(n);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...m].includes(e))return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?a(e,n):t;if("esriFieldTypeDate"===e)return(e,n)=>{const a=new Date(e).getTime(),i=new Date(n).getTime();return isNaN(a)||isNaN(i)?t:l(a,i)};if(m.has(e))return(e,n)=>l(e,n);if("esriFieldTypeString"===e)return(e,n)=>a(e,n);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const e=y(n);return(n,t)=>e(V(n),V(t))}return n?(e,n)=>1:(e,n)=>-1}function y(e){return e?(e,n)=>(e=e?.toUpperCase(),n=n?.toUpperCase(),e>n?-1:e<n?1:0):(e,n)=>(e=e?.toUpperCase(),n=n?.toUpperCase(),e<n?-1:e>n?1:0)}function V(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function x(e,n){let t;for(t in e)d.includes(t)&&(Number.isFinite(e[t])||(e[t]=null));return n?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function T(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function z(e,n,t){const l=e.count,a=[];t&&n&&"coded-value"===n.type&&n.codedValues.forEach((e=>{const n=e.code;l.hasOwnProperty(n)||(l[n]={data:n,count:0})}));for(const i in l){const e=l[i];a.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:a}}function F(e,n,t,l){let a=null;switch(n){case"log":0!==e&&(a=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(a=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(a=e/t);break;case"natural-log":e>0&&(a=Math.log(e));break;case"square-root":e>0&&(a=e**.5)}return a}function C(e,n){const t=M({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||5});return e=function(e,n,t){return n=null==n?-1/0:n,t=null==t?1/0:t,e.filter((e=>Number.isFinite(e)&&e>=n&&e<=t))}(e,n.minValue,n.maxValue),function(e){const{normalizationTotal:n}=e;return{classBreaks:i(e),normalizationTotal:n}}({definition:t,values:e,normalizationTotal:n.normalizationTotal})}function M(e){const n=e.field,t=e.classificationMethod||"equal-interval",a=e.normalizationType,i=e.normalizationField,r=new l.Z;return r.classificationField=n,r.breakCount=e.breakCount,r.classificationMethod=t,r.standardDeviationInterval="standard-deviation"===t?e.standardDeviationInterval||1:void 0,r.normalizationType=a,r.normalizationField="field"===a?i:void 0,r}function D(e,n){let t=e.classBreaks;const l=t.length,a=t[0].minValue,i=t[l-1].maxValue,r="standard-deviation"===n,o=f;return t=t.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(r&&n){const e=n.match(o).map((e=>+e.trim()));2===e.length?(t.minStdDev=e[0],t.maxStdDev=e[1],e[0]<0&&e[1]>0&&(t.hasAvg=!0)):1===e.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=e[0]):n.includes(">")&&(t.minStdDev=e[0],t.maxStdDev=null))}return t})),{minValue:a,maxValue:i,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function I(e,n){const{min:t,max:l,intervals:a}=function(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:r,normalizationTotal:o,minValue:s,maxValue:u}=n,c=n.numBins||10;let f=null,m=null,d=null;if(l&&"equal-interval"!==l||i){const{classBreaks:n}=C(e,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:o,classificationMethod:l,standardDeviationInterval:a,minValue:s,maxValue:u,numClasses:c});f=n[0].minValue,m=n[n.length-1].maxValue,d=n.map((e=>[e.minValue,e.maxValue]))}else{if(null!=s&&null!=u)f=s,m=u;else{const n=b({values:e,minValue:s,maxValue:u,useSampleStdDev:!i,supportsNullCount:p({normalizationType:i,normalizationField:r,minValue:s,maxValue:u})});f=n.min,m=n.max}d=function(e,n,t){const l=(n-e)/t,a=[];let i,r=e;for(let o=1;o<=t;o++)i=r+l,i=Number(i.toFixed(16)),a.push([r,o===t?n:i]),r=i;return a}(f,m,c)}return{min:f,max:m,intervals:d}}(e,n),i=a.map(((e,n)=>({minValue:a[n][0],maxValue:a[n][1],count:0})));for(const r of e)if(null!=r&&r>=t&&r<=l){const e=k(a,r);e>-1&&i[e].count++}return{bins:i,minValue:t,maxValue:l,normalizationTotal:n.normalizationTotal}}function k(e,n){let t=-1;for(let l=e.length-1;l>=0;l--)if(n>=e[l][0]){t=l;break}return t}}}]);
//# sourceMappingURL=6130.5dc19817.chunk.js.map