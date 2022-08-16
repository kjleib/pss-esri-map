"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[2536],{92536:(e,t,i)=>{i.d(t,{y:()=>y,r:()=>d});var s=i(92026),a=i(4954),n=i(94446),r=i(58971),o=i(92975),l=i(33392),u=i(15903);class c{constructor(e,t,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=i,this.featureAdapter=t;const s=e.outFields;if(s&&!s.includes("*")){this.outFields=s;let e=0;for(const t of s){const s=(0,l.hr)(t),a=this.fieldsIndex.get(s),n=a?null:(0,l.Jc)(s,i),r=a?a.name:(0,l.nu)(t)||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:r,clause:n})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,i){const s=i?i.name:t;let a=null;return this._fieldDataCache.has(s)?a=this._fieldDataCache.get(s).clause:i||(a=(0,l.Jc)(t,this.fieldsIndex),this._fieldDataCache.set(s,{alias:s,clause:a})),i?this.featureAdapter.getAttribute(e,s):a.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const i=t.normalizationType,s=t.normalizationTotal;let a=this.getFieldValue(e,t.field,t.fieldInfo);if(i&&Number.isFinite(a)){const n=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);a=(0,u.fk)(a,i,n,s)}return a}getExpressionValue(e,t,i,s){const a={attributes:this.featureAdapter.getAttributes(e),layer:{fields:this.fieldsIndex.fields}},n=s.createExecContext(a,i);return s.executeFunction(t,n)}getExpressionValues(e,t,i,s){const a={fields:this.fieldsIndex.fields};return e.map((e=>{const n={attributes:this.featureAdapter.getAttributes(e),layer:a},r=s.createExecContext(n,i);return s.executeFunction(t,r)}))}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,l.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,l.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const i={};for(const s of t){const{alias:t,clause:a}=this._fieldDataCache.get(s);i[t]=a?a.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return i}_processAttributesForDistinctValues(e){if((0,s.Wi)(e)||!this.returnDistinctValues)return e;const t=this.outFields,i=[];if(t)for(const s of t){const{alias:t}=this._fieldDataCache.get(s);i.push(e[t])}else for(const s in e)i.push(e[s]);const a=`${(t||["*"]).join(",")}=${i.join(",")}`;let n=this._returnDistinctMap.get(a)||0;return this._returnDistinctMap.set(a,++n),n>1?null:e}}var d,h,f=i(19995),m=i(31904),g=i(80031),p=i(819);class y{constructor(e,t,i){this.items=e,this.query=t,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new c(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:i,outStatistics:s}=this.query,a=t?.length;if(!a)return 1;const n=new Map,r=new Map,o=new Set;for(const l of s){const{statisticType:s}=l,a="exceedslimit"!==s?l.onStatisticField:void 0;if(!r.has(a)){const i=[];for(const s of t){const t=this._getAttributeValues(e,s,n);i.push(t)}r.set(a,this._calculateUniqueValues(i,e.returnDistinctValues))}const u=r.get(a);for(const t in u){const{data:s,items:a}=u[t],n=s.join(",");i&&!e.validateItems(a,i)||o.add(n)}}return o.size}async createQueryResponse(){let e;return e=this.query.outStatistics?this.query.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry&&((0,o.JY)(this.query.outSR)&&!(0,o.fS)(this.query.geometry.spatialReference,this.query.outSR)?e.queryGeometry=(0,m.S2)({spatialReference:this.query.outSR,...(0,f.iV)(this.query.geometry,this.query.geometry.spatialReference,this.query.outSR)}):e.queryGeometry=(0,m.S2)({spatialReference:this.query.outSR,...this.query.geometry})),e}createSnappingResponse(e,t){const i=this.featureAdapter,a=function(e,t){return e?t?4:3:t?3:2}(this.hasZ,this.hasM),{x:n,y:r}=e.point,o="number"==typeof e.distance?e.distance:e.distance.x,l="number"==typeof e.distance?e.distance:e.distance.y,u={candidates:[]},c="esriGeometryPolygon"===this.geometryType,h=this._getPointCreator(e.point,this.spatialReference,t);for(const f of this.items){const t=i.getGeometry(f);if((0,s.Wi)(t))continue;const{coords:m,lengths:g}=t;if(e.types&d.EDGE){let e=0;for(let t=0;t<g.length;t++){const s=g[t];for(let t=0;t<s;t++,e+=a){const c=m[e],d=m[e+1];if(t!==s-1){const t=m[e+a],s=m[e+a+1],{x:g,y:p}=F(n,r,c,d,t,s),y=(n-g)/o,x=(r-p)/l,_=y*y+x*x;_<=1&&u.candidates.push({type:"edge",objectId:i.getObjectId(f),distance:Math.sqrt(_),target:h(g,p),start:h(c,d),end:h(t,s)})}}}}if(e.types&d.VERTEX){const e=c?m.length-a:m.length;for(let t=0;t<e;t+=a){const e=m[t],s=m[t+1],a=(n-e)/o,c=(r-s)/l,d=a*a+c*c;d<=1&&u.candidates.push({type:"vertex",objectId:i.getObjectId(f),distance:Math.sqrt(d),target:h(e,s)})}}}return u.candidates.sort(((e,t)=>e.distance-t.distance)),u}_getPointCreator(e,t,i){const a=(0,s.pC)(i)&&!(0,o.fS)(t,i)?e=>(0,f.iV)(e,t,i):e=>e;return null!=e.z&&null!=e.m?(t,i)=>a({x:t,y:i,z:e.z,m:e.m}):null!=e.z?(t,i)=>a({x:t,y:i,z:e.z}):null!=e.m?(t,i)=>a({x:t,y:i,m:e.m}):(e,t)=>a({x:e,y:t})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,minValue:r,maxValue:o,scale:l}=e,c=this.fieldsIndex.isDateField(t),d=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,scale:l}),h=(0,u.S5)({normalizationType:a,normalizationField:s,minValue:r,maxValue:o}),f=this.fieldsIndex.get(t),m={value:.5,fieldType:f?.type},p=(0,g.qN)(f)?(0,u.H0)({values:d,supportsNullCount:h,percentileParams:m}):(0,u.i5)({values:d,minValue:r,maxValue:o,useSampleStdDev:!a,supportsNullCount:h,percentileParams:m});return(0,u.F_)(p,c)}async createUniqueValuesResponse(e){const{field:t,valueExpression:i,domain:s,returnAllCodedValues:a,scale:n}=e,r=await this._getDataValues({field:t,valueExpression:i,scale:n}),o=(0,u.eT)(r);return(0,u.Qm)(o,s,a)}async createClassBreaksResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:c,numClasses:d,scale:h}=e,f=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,scale:h}),m=(0,u.G2)(f,{field:t,normalizationField:s,normalizationType:a,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:c,numClasses:d});return(0,u.DL)(m,r)}async createHistogramResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:c,numBins:d,scale:h}=e,f=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,scale:h});return(0,u.oF)(f,{field:t,normalizationField:s,normalizationType:a,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:c,numBins:d})}_sortFeatures(e,t,i){if(e.length>1&&t&&t.length)for(const s of t.reverse()){const t=s.split(" "),a=t[0],n=this.fieldsIndex.get(a),r=t[1]&&"desc"===t[1].toLowerCase(),o=(0,u.Lq)(n?.type,r);e.sort(((e,t)=>{const s=i(e,a,n),r=i(t,a,n);return o(s,r)}))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:i,hasM:s,hasZ:a,objectIdField:n,spatialReference:o}=this,{outFields:l,outSR:u,quantizationParameters:c,resultRecordCount:d,resultOffset:h,returnZ:f,returnM:g}=e,p=null!=d&&t.length>(h||0)+d,y=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:p,features:this._createFeatures(e,t),fields:y,geometryType:i,hasM:s&&g,hasZ:a&&f,objectIdFieldName:n,spatialReference:(0,m.S2)(u||o),transform:c&&(0,r.vY)(c)||null}}_createFeatures(e,t){const i=new c(e,this.featureAdapter,this.fieldsIndex),{hasM:s,hasZ:a}=this,{orderByFields:n,quantizationParameters:o,returnGeometry:l,returnCentroid:u,maxAllowableOffset:d,resultOffset:h,resultRecordCount:f,returnZ:g=!1,returnM:p=!1}=e,y=a&&g,F=s&&p;let x=[],_=0;const S=[...t];if(this._sortFeatures(S,n,((e,t,s)=>i.getFieldValue(e,t,s))),l||u){const e=(0,r.vY)(o);if(l&&!u)for(const t of S)x[_++]={attributes:i.getAttributes(t),geometry:(0,m.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),d,e,y,F)};else if(!l&&u)for(const t of S)x[_++]={attributes:i.getAttributes(t),centroid:(0,m.EG)(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of S)x[_++]={attributes:i.getAttributes(t),centroid:(0,m.EG)(this,this.featureAdapter.getCentroid(t,this),e),geometry:(0,m.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),d,e,y,F)}}else for(const r of S){const e=i.getAttributes(r);e&&(x[_++]={attributes:e})}const I=h||0;if(null!=f){const e=I+f;x=x.slice(I,Math.min(x.length,e))}return x}_createExceedsLimitQueryResponse(e){let t=!1,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY;for(const s of e.outStatistics)if("exceedslimit"===s.statisticType){i=null!=s.maxPointCount?s.maxPointCount:Number.POSITIVE_INFINITY,a=null!=s.maxRecordCount?s.maxRecordCount:Number.POSITIVE_INFINITY,n=null!=s.maxVertexCount?s.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>i;else if(this.items.length>a)t=!0;else{const e=this.hasZ?this.hasM?4:3:this.hasM?3:2,i=this.featureAdapter;t=this.items.reduce(((e,t)=>{const a=i.getGeometry(t);return e+((0,s.pC)(a)&&a.coords.length||0)}),0)/e>n}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},i=[],s=new Map,a=new Map,n=new Map,r=new Map,o=new c(e,this.featureAdapter,this.fieldsIndex),l=e.outStatistics,{groupByFieldsForStatistics:u,having:d,orderByFields:h}=e,f=u&&u.length,m=!!f,g=m&&u[0],p=m&&!this.fieldsIndex.get(g);for(const c of l){const{outStatisticFieldName:e,statisticType:l}=c,h=c,y="exceedslimit"!==l?c.onStatisticField:void 0,F="percentile_disc"===l||"percentile_cont"===l,x="EnvelopeAggregate"===l||"CentroidAggregate"===l||"ConvexHullAggregate"===l,_=m&&1===f&&(y===g||p)&&"count"===l;if(m){if(!n.has(y)){const e=[];for(const t of u){const i=this._getAttributeValues(o,t,s);e.push(i)}n.set(y,this._calculateUniqueValues(e,o.returnDistinctValues))}const t=n.get(y);for(const i in t){const{count:a,data:n,items:l,itemPositions:c}=t[i],f=n.join(",");if(!d||o.validateItems(l,d)){const t=r.get(f)||{attributes:{}};if(x){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:i}=await this._getAggregateGeometry(h,l);t.aggregateGeometries[i]=e}else{let i=null;if(_)i=a;else{const e=this._getAttributeValues(o,y,s),t=c.map((t=>e[t]));i=F&&"statisticParameters"in h?this._getPercentileValue(h,t):this._getStatisticValue(h,t,null,o.returnDistinctValues)}t.attributes[e]=i}u.forEach(((e,i)=>t.attributes[this.fieldsIndex.get(e)?e:`EXPR_${i+1}`]=n[i])),r.set(f,t)}}}else if(x){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:i}=await this._getAggregateGeometry(h,this.items);t.aggregateGeometries[i]=e}else{const i=this._getAttributeValues(o,y,s);t.attributes[e]=F&&"statisticParameters"in h?this._getPercentileValue(h,i):this._getStatisticValue(h,i,a,o.returnDistinctValues)}i.push({name:e,alias:e,type:"esriFieldTypeDouble"})}const y=m?Array.from(r.values()):[t];return this._sortFeatures(y,h,((e,t)=>e.attributes[t])),{fields:i,features:y}}async _getAggregateGeometry(e,t){const s=await Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309)),{statisticType:r,outStatisticFieldName:o}=e,{featureAdapter:l,spatialReference:u,geometryType:c,hasZ:d,hasM:h}=this,f=t.map((e=>(0,m.Op)(c,d,h,l.getGeometry(e)))),g=s.convexHull(u,f,!0)[0],p={aggregateGeometries:null,outStatisticFieldName:null};if("EnvelopeAggregate"===r){const e=g?(0,n._w)(g):(0,n.aO)(s.union(u,f));p.aggregateGeometries={...e,spatialReference:u},p.outStatisticFieldName=o||"extent"}else if("CentroidAggregate"===r){const e=g?(0,a.tO)(g):(0,a.$G)((0,n.aO)(s.union(u,f)));p.aggregateGeometries={x:e[0],y:e[1],spatialReference:u},p.outStatisticFieldName=o||"centroid"}else"ConvexHullAggregate"===r&&(p.aggregateGeometries=g,p.outStatisticFieldName=o||"convexHull");return p}_getStatisticValue(e,t,i,s){const{onStatisticField:a,statisticType:n}=e;let r=null;return r=i?.has(a)?i.get(a):(0,g.qN)(this.fieldsIndex.get(a))?(0,u.H0)({values:t,returnDistinct:s}):(0,u.i5)({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(a,r),r["var"===n?"variance":n]}_getPercentileValue(e,t){const{onStatisticField:i,statisticParameters:s,statisticType:a}=e,{value:n,orderBy:r}=s,o=this.fieldsIndex.get(i);return(0,u.XL)(t,{value:n,orderBy:r,fieldType:o?.type,isDiscrete:"percentile_disc"===a})}_getAttributeValues(e,t,i){if(i.has(t))return i.get(t);const s=this.fieldsIndex.get(t),a=this.items.map((i=>e.getFieldValue(i,t,s)));return i.set(t,a),a}_getAttributeNormalizedValues(e,t){return this.items.map((i=>e.getNormalizedValue(i,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})))}async _getAttributeExpressionValues(e,t,i){const{arcadeUtils:s}=await(0,p.LC)(),a=s.createFunction(t),n=i&&s.getViewInfo(i);return e.getExpressionValues(this.items,a,n,s)}_calculateUniqueValues(e,t){const i={},s=this.items,a=s.length;for(let n=0;n<a;n++){const a=s[n],r=[];for(const t of e)r.push(t[n]);const o=r.join(",");t?null==i[o]&&(i[o]={count:1,data:r,items:[a],itemPositions:[n]}):null==i[o]?i[o]={count:1,data:r,items:[a],itemPositions:[n]}:(i[o].count++,i[o].items.push(a),i[o].itemPositions.push(n))}return i}async _getDataValues(e){const t=new c(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,field:s,normalizationField:a,normalizationType:n,normalizationTotal:r,scale:o}=e,l=i?{viewingMode:"map",scale:o,spatialReference:this.query.outSR||this.spatialReference}:null;return i?this._getAttributeExpressionValues(t,i,l):this._getAttributeNormalizedValues(t,{field:s,normalizationField:a,normalizationType:n,normalizationTotal:r})}}function F(e,t,i,s,a,n){const r=a-i,o=n-s,l=r*r+o*o,u=(e-i)*r+(t-s)*o,c=Math.min(1,Math.max(0,u/l));return{x:i+r*c,y:s+o*c}}(h=d||(d={}))[h.NONE=0]="NONE",h[h.EDGE=1]="EDGE",h[h.VERTEX=2]="VERTEX"},33392:(e,t,i)=>{i.d(t,{nu:()=>g,hr:()=>m,Jc:()=>h,G3:()=>p,Of:()=>f,z4:()=>d,hO:()=>c});var s=i(10064),a=i(59026),n=i(48562);const r=new class{constructor(e,t){this._cache=new a.Z(e),this._invalidCache=new a.Z(t)}get(e,t){const i=`${t.uid}:${e}`,s=this._cache.get(i);if(s)return s;if(void 0!==this._invalidCache.get(i))return null;try{const s=n.WhereClause.create(e,t);return this._cache.put(i,s),s}catch{return this._invalidCache.put(i,null),null}}}(50,500),o="feature-store:unsupported-query",l=" as ",u=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function c(e,t){if(!t)return!0;const i=r.get(t,e);if(!i)throw new s.Z(o,"invalid SQL expression",{where:t});if(!i.isStandardized)throw new s.Z(o,"where clause is not standard",{where:t});return f(e,i.fieldNames,"where clause contains missing fields"),!0}function d(e,t,i){if(!t)return!0;const a=r.get(t,e);if(!a)throw new s.Z(o,"invalid SQL expression",{having:t});if(!a.isAggregate)throw new s.Z(o,"having does not contain a valid aggregate function",{having:t});const n=a.fieldNames;if(f(e,n,"having contains missing fields"),!a.getExpressions().every((t=>{const{aggregateType:s,field:a}=t,n=e.has(a)&&e.get(a).name;return i.some((t=>{const{onStatisticField:i,statisticType:a}=t;return(e.has(i)&&e.get(i).name)===n&&a.toLowerCase().trim()===s}))})))throw new s.Z(o,"expressions in having should also exist in outStatistics",{having:t});return!0}function h(e,t){return e?r.get(e,t):null}function f(e,t,i){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const n=[];for(const r of t)if("*"!==r&&!e.has(r))if(a){const t=m(r);try{const i=h(t,e);if(!i)throw new s.Z(o,"invalid SQL expression",{where:t});if(!i.isStandardized)throw new s.Z(o,"expression is not standard",{clause:i});f(e,i.fieldNames,"expression contains missing fields")}catch(d){const t=d&&d.details;if(t&&(t.clause||t.where))throw d;t&&t.missingFields?n.push(...t.missingFields):n.push(r)}}else n.push(r);if(n.length)throw new s.Z(o,i,{missingFields:n})}function m(e){return e.split(l)[0]}function g(e){return e.split(l)[1]}function p(e,t){const i=t.get(e);return!!i&&!u.has(i.type)}},31904:(e,t,i)=>{i.d(t,{EG:()=>x,Op:()=>_,S2:()=>V,Up:()=>S,j6:()=>I,vF:()=>m});var s=i(43404),a=i(92026),n=i(68860),r=i(94446),o=i(77981),l=i(50689),u=i(92975),c=i(83406),d=i(80457),h=i(19995);const f=new s.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),m=Object.freeze({}),g=new d.Z,p=new d.Z,y=new d.Z,F={esriGeometryPoint:c.fQ,esriGeometryPolyline:c.J6,esriGeometryPolygon:c.eG,esriGeometryMultipoint:c.Iv};function x(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if((0,a.Wi)(t))return null;const r=e.hasZ&&s,o=e.hasM&&n;if(i){const a=(0,c.Nh)(y,t,e.hasZ,e.hasM,"esriGeometryPoint",i,s,n);return(0,c.fQ)(a,r,o)}return(0,c.fQ)(t,r,o)}function _(e,t,i,s,n,r){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:i;const u=t&&o,d=i&&l,h=(0,a.pC)(s)?"coords"in s?s:s.geometry:null;if((0,a.Wi)(h))return null;if(n){let s=(0,c.zj)(p,h,t,i,e,n,o,l);return r&&(s=(0,c.Nh)(y,s,u,d,e,r)),F[e](s,u,d)}if(r){const s=(0,c.Nh)(y,h,t,i,e,r,o,l);return F[e](s,u,d)}return(0,c.hY)(g,h,t,i,o,l),F[e](g,u,d)}async function S(e,t,i){const{outFields:s,orderByFields:a,groupByFieldsForStatistics:n,outStatistics:r}=e;if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(a)for(let o=0;o<a.length;o++)a[o]=a[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(r)for(let o=0;o<r.length;o++)r[o].onStatisticField&&(r[o].onStatisticField=r[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),I(e,t,i)}async function I(e,t,s){if(!e)return null;let{where:c}=e;if(e.where=c=c&&c.trim(),(!c||/^1 *= *1$/.test(c)||t&&t===c)&&(e.where=null),!e.geometry)return e;let d=await async function(e){const{geometry:t,distance:s,units:a}=e;if(null==s||"vertexAttributes"in t)return t;const r=t.spatialReference,o=a?f.fromJSON(a):(0,n.qE)(r),l=r&&((0,u.sT)(r)||(0,u.sS)(r))?t:await(0,h._W)(r,u.Zn).then((()=>(0,h.iV)(t,u.Zn)));return(await async function(){return(await Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309))).geodesicBuffer}())(l.spatialReference,l,s,o)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;d=(0,r.aO)(d),d.spatialReference=t}e.geometry=d,await(0,h._W)(d.spatialReference,s);const g=(await(0,l.aX)((0,o.im)(d)))[0];if((0,a.Wi)(g))throw m;const p=g.toJSON(),y=await(0,h.iV)(p,p.spatialReference,s);if(!y)throw m;return y.spatialReference=s,e.geometry=y,e}function V(e){return e&&T in e?JSON.parse(JSON.stringify(e,v)):e}const T="_geVersion",v=(e,t)=>e!==T?t:void 0}}]);
//# sourceMappingURL=2536.04069e6a.chunk.js.map