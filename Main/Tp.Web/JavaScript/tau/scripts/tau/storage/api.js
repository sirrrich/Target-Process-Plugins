define(["./api.nocache","jQuery","Underscore"],function(Class,$,_){return Class.extend({_cache:{},_getCacheKey:function(ajaxConfig,$deferred){var self=this,cacheKey=ajaxConfig.url.toLowerCase(),$dataKey=$deferred.$config.$key||$deferred.$config.key,$dataGroup=$deferred.$config.$group||$deferred.$config.group;$dataGroup&&$dataKey&&(cacheKey=($dataGroup+"_"+$dataKey).toLowerCase()),!$dataKey&&ajaxConfig.type==="POST"&&(cacheKey=null);if(ajaxConfig.type==="POST"||ajaxConfig.type==="DELETE"){var _cache=self._cache[self.getGroupCacheKey($dataGroup)];if(_cache){var groupKeys=_.keys(_cache);_.each(groupKeys,function(key){delete self._cache[key]}),delete self._cache[self.getGroupCacheKey($dataGroup)]}}return cacheKey},_makeServiceCall:function(ajaxConfig,$deferred,result){var self=this,cacheKey=this._getCacheKey(ajaxConfig,$deferred);return(!ajaxConfig.type||ajaxConfig.type==="GET")&&self._cache.hasOwnProperty(cacheKey)?self._cache[cacheKey]:(cacheKey&&(self._cache[cacheKey]=$deferred),this._super(ajaxConfig,$deferred,result))},getGroupCacheKey:function(name){return("group_cache_"+name).toLowerCase()},getServiceDeferred:function(ajaxConfig,$deferred){var $dataGroup=$deferred.$config.$group||$deferred.$config.group,self=this;return self._super(ajaxConfig).done(function(r){if(r&&r.group&&r.key)self._cache[(r.group.name+"_"+r.key).toLowerCase()]=$deferred;else{var g=self.getGroupCacheKey($dataGroup);self._cache.hasOwnProperty(g)||(self._cache[g]={}),self._cache[g][ajaxConfig.url.toLowerCase()]={}}})}})})