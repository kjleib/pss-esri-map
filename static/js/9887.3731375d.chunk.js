"use strict";(globalThis.webpackChunkjsapi_create_react_app=globalThis.webpackChunkjsapi_create_react_app||[]).push([[9887],{29887:(e,t,a)=>{a.r(t),a.d(t,{applyEdits:()=>u});var r=a(52639),s=a(40281),i=a(10064),d=a(84652),n=a(92026),l=a(35995),o=a(50689);async function u(e,t,a){let r,s,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n={edits:a,result:new Promise(((e,t)=>{r=e,s=t}))};e.emit("apply-edits",n);try{const{results:s,edits:n}=await p(e,t,a,i),l=e=>e.filter((e=>!e.error)).map(d.d9),o={edits:n,addedFeatures:l(s.addFeatureResults),updatedFeatures:l(s.updateFeatureResults),deletedFeatures:l(s.deleteFeatureResults),addedAttachments:l(s.addAttachmentResults),updatedAttachments:l(s.updateAttachmentResults),deletedAttachments:l(s.deleteAttachmentResults)};return s.editedFeatureResults?.length&&(o.editedFeatures=s.editedFeatureResults),(o.addedFeatures.length||o.updatedFeatures.length||o.deletedFeatures.length||o.addedAttachments.length||o.updatedAttachments.length||o.deletedAttachments.length)&&e.emit("edits",o),r(o),s}catch(u){throw s(u),u}}async function p(e,t,a,r){if(await e.load(),!function(e){return e&&null!=e.applyEdits}(t))throw new i.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!e.editingEnabled)throw new i.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:d,options:l}=await async function(e,t,a){const r=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!r&&!d)throw new i.Z(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new i.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new i.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&d)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&d)throw new i.Z(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const l={...a};if(null!=l.rollbackOnFailureEnabled||e.capabilities.editing.supportsRollbackOnFailure||(l.rollbackOnFailureEnabled=!0),!1===l.rollbackOnFailureEnabled&&"original-and-current-features"===l.returnServiceEditsOption)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&l.returnServiceEditsInSourceSR)throw new i.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(l.returnServiceEditsInSourceSR&&"original-and-current-features"!==l.returnServiceEditsOption)throw new i.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const o={...t};if(o.addFeatures=t&&s.Z.isCollection(t.addFeatures)?t.addFeatures.toArray():o.addFeatures||[],o.updateFeatures=t&&s.Z.isCollection(t.updateFeatures)?t.updateFeatures.toArray():o.updateFeatures||[],o.deleteFeatures=t&&s.Z.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():o.deleteFeatures||[],o.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new i.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(o.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new i.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(o.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new i.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");o.addAttachments=o.addAttachments||[],o.updateAttachments=o.updateAttachments||[],o.deleteAttachments=o.deleteAttachments||[],o.addFeatures=o.addFeatures.map(m),o.updateFeatures=o.updateFeatures.map(m);const u=a&&a.globalIdUsed;return o.addFeatures.forEach((t=>function(e,t,a){c(e,t,a)}(t,e,u))),o.updateFeatures.forEach((t=>function(e,t,a){if(c(e,t,a),"geometry"in e&&(0,n.pC)(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new i.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,u))),o.deleteFeatures.forEach((t=>function(e,t,a){c(e,t,a)}(t,e,u))),o.addAttachments.forEach((t=>h(t,e))),o.updateAttachments.forEach((t=>h(t,e))),{edits:await y(o),options:l}}(e,a,r);return d.addFeatures.length||d.updateFeatures.length||d.deleteFeatures.length||d.addAttachments.length||d.updateAttachments.length||d.deleteAttachments.length?{edits:d,results:await t.applyEdits(d,l)}:{edits:d,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}function c(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new i.Z(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&(0,n.pC)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new i.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new i.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function h(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new i.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new i.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=(0,l.sJ)(r.data);if(e&&!e.isBase64)throw new i.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function y(e){const t=e.addFeatures,a=e.updateFeatures,r=t.concat(a).map((e=>e.geometry)),s=await(0,o.aX)(r),i=t.length,d=a.length;return s.slice(0,i).forEach(((t,a)=>e.addFeatures[a].geometry=t)),s.slice(i,i+d).forEach(((t,a)=>e.updateFeatures[a].geometry=t)),e}function m(e){const t=new r.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}}]);
//# sourceMappingURL=9887.3731375d.chunk.js.map