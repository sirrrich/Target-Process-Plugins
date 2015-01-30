define(["libs/underscore","libs/jsonselect"],function(r,n){var e=function(n){if(r.isArray(n))return r.map(n,e);if("object"==typeof n&&null!==n){var t={};return r.each(n,function(r,n){t[n]=e(r)}),t}return n},t=function(n){var e=Array.prototype.slice.call(arguments,1);if("boolean"==typeof e[e.length-1])var i=e.pop();for(var u=0;u<e.length;u++){var o=e[u];r.each(o,function(r,e){var u=n[e];void 0===u&&(n[e]=r),i?Array.isArray(r)&&Array.isArray(u)?n[e]=u.concat(r):"object"==typeof r&&"object"==typeof u?t(u,r):Array.isArray(u)?u.push(r):n[e]=[u,r]:"object"==typeof r&&"object"==typeof u?t(u,r,i):n[e]=r})}return n};return r.mixin({defaults:function(n){return r.each(Array.prototype.slice.call(arguments,1),function(r){if(r)for(var e in r)null==n[e]&&(n[e]=r[e])}),n},keysExt:function(n){if(r.isArray(n))return r.keys(n);var e=[];for(var t in n)e.push(t);return e},findComplexField:function(n,e){var t=null;return r.each(n,function(r){this.isSimple(r)||r.hasOwnProperty(e)&&(t=r)},this),t},concat:function(n){return r.flatten(r.compact(n))},flatMap:function(n,e,t){return r.flatten(r.map(n,e,t),!0)},getFieldName:function(n){if(this.isSimple(n))return n;var e=r.select(r.keys(n),function(r){return"list"!==r});if(e.length>1||0===e.length)throw new Error("Only one reference should be defined. Found "+e.length+" references"+(e.length?": "+e:""));return e[0]},isSimple:function(n){return r.isString(n)},mergeFields:function(n,e,t){var i=this,u=t&&t.prependFields?"unshift":"push";return r.each(e,function(e){if(n!==e){if(i.isSimple(e)){var t=r.select(n,function(r){return r===e});return void(0===t.length&&n[u](e))}var o=i.getFieldName(e),c=i.findComplexField(n,o);if(null===c)return void n[u](e);var f=e[o],a=c[o];i.mergeFields(a,f)}}),n},mergeArrayObjects:function(n,e,t){r.each(r(n).keys(),function(i){r.isArray(n[i])&&r.isArray(e[i])&&(t&&r.isArray(t)&&r(t).indexOf(i)<0||(n[i]=n[i].concat(e[i])))})},functionsExt:function(n){return r.filter(r.keysExt(n),function(e){return r.isFunction(n[e])}).sort()
},groupByComplex:function(n,e){var t=[],i={};return r(n).each(function(r){var n=e(r);if(!i.hasOwnProperty(n)){var u={key:n,items:[]};t.push(u),i[n]=u}i[n].items.push(r)}),t},complexKey:function(n,e){if(!r.isString(e)||r.isEmpty(e))throw new Error("Key is non-string or empty");if(r.isUndefined(n)||r.isNull(n))return void 0;for(var t=e.split("."),i=t.length,u=0;i>u;u++)if(n=n[t[u]],i-1>u&&(r.isUndefined(n)||r.isNull(n)))return void 0;return n},complexProperty:function(r){return function(n){return this.complexKey(n,r)}.bind(this)},jsonSelect:function(r,e){return n.match(e,r)},inArray:function(n,e){return r.indexOf(e,n)>-1},asString:function(r){return String(r||"")},toCamelCase:function(r){var n=r.substr(0,1),e=r.substr(1);return n.toLowerCase()+e},UUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var n=16*Math.random()|0,e="x"==r?n:3&n|8;return e.toString(16)})},cloneDeep:e,deepClone:e,mergeDeep:t,deepMerge:t,toObject:function(n,e){var t=r.isString(e)?function(r){return r[e]}:e;return r.reduce(n,function(r,n){var e=t(n);return r[e]=n,r},{})},sum:function(n){return r.reduce(n,function(r,n){return r+n},0)},resultOf:function(n){return function(e){return r.result(e,n)}},findIndex:function(r,n,e){for(var t=0;t<r.length;t++)if(n.call(e,r[t],t,r))return t;return-1},insertAt:function(n,e,t){var i=r.toArray(n);return t=Math.min(t,n.length),t=Math.max(t,0),i.splice(t,0,e),i},abstractMethod:function(){throw new Error("should be implemented")}}),r.MIN_INT=-9007199254740992,r.MAX_INT=-r.MIN_INT,r});