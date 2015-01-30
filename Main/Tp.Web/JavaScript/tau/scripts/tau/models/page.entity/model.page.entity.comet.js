define(["Underscore","tau/core/extension.base"],function(e,t){var s=function(e,t){window.appIsInDebugMode&&window.console&&console.log("model.page.entity.comet: "+e,t)};return t.extend({"bus configurator.ready":function(e,t){this._comet=t.getComet(),this._comet.disconnected.add(function(){this._comet.refreshRequired.add(this._refresh,this)},this)},_refresh:function(){this.fire("refresh")},"bus configurator.ready:last + entity.ready":function(t,s,i){s.getAppStateStore().get({fields:["acid"],callback:e.bind(function(e){this.startCometLoop(s,i,e.acid)},this)})},"bus refresh":function(){this._comet.refreshRequired.remove(this._refresh,this)},destroy:function(){this._stopSubscription(),this._super()},startCometLoop:function(t,i,r){var o=[{resourceType:i.entityType.name,filter:"? Id is "+i.id},{acid:r,resourceType:"assignment",filter:"? assignable.Id is "+i.id},{acid:r,resourceType:"roleEffort",filter:"? assignable.Id is "+i.id}];this._stopSubscription(),this.lastChanges={},this._subscription=this._comet.subscribe("resource",{parameters:e.map(o,function(e){return{parameters:e}}),callback:this.safeCallback(function(e){s("resource comet: ",e),this.handle(e,t)})})},_stopSubscription:function(){this._subscription&&this._subscription.stop(),this._comet.removeEventHandlers(this)},handle:function(t,i){var r=this.processResponse(t),o=r.modification.toLowerCase(),n=r.data,a=r.reason;switch(s("type: ",o),o){case"updated":n.__type=r.type,a.push("id"),a.push("__type"),n.assignable&&a.push("assignable"),n=e.pick(n,a),s("changes: ",a),i.getStore().registerWithEvents(n);break;case"removed":n.__type=r.type,i.getStore().removeWithEvents(n,a);break;case"added":n.__type=r.type,i.getStore().registerWithEvents(n)}},processResponse:function(t){var s=t.data,i=t.timestamp,r=s.type+s.id,o=e.map(s.reason,e.toCamelCase);e.has(this.lastChanges,r)||(this.lastChanges[r]={});var n=this.lastChanges[r];return s.reason=e.filter(o,function(e){var t=i>(n[e]||0);return t&&(n[e]=i),t}),s}})});