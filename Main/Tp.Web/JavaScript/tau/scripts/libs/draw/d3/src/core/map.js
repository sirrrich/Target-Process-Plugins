function d3_Map(){}d3.map=function(a){var b=new d3_Map;for(var c in a)b.set(c,a[c]);return b},d3_class(d3_Map,{has:function(a){return d3_map_prefix+a in this},get:function(a){return this[d3_map_prefix+a]},set:function(a,b){return this[d3_map_prefix+a]=b},remove:function(a){return a=d3_map_prefix+a,a in this&&delete this[a]},keys:function(){var a=[];return this.forEach(function(b){a.push(b)}),a},values:function(){var a=[];return this.forEach(function(b,c){a.push(c)}),a},entries:function(){var a=[];return this.forEach(function(b,c){a.push({key:b,value:c})}),a},forEach:function(a){for(var b in this)b.charCodeAt(0)===d3_map_prefixCode&&a.call(this,b.substring(1),this[b])}});var d3_map_prefix="\0",d3_map_prefixCode=d3_map_prefix.charCodeAt(0)