define(["tau/core/model-base"],function(t){var n=t.extend({onInit:function(){var t=this,n=t.config.context,e=n.entity.entityType.name,o=n.entity.id;this.store.get(e,{id:o,fields:["passedCount","failedCount","notRunCount","onHoldCount","blockedCount"]},{success:this.onDataRetrieved,scope:this}).done(),this.store.unbind(this),_.forEach(["passedCount","failedCount","notRunCount","onHoldCount","blockedCount"],function(n){t.store.on({eventName:"afterSave",type:e,listener:t,filter:{id:o},hasChanges:[n]},function(){t.fire("refresh")})})},onDataRetrieved:function(t){var n=t.data,e={passedCount:n.passedCount,failedCount:n.failedCount,notRunCount:n.notRunCount+(n.onHoldCount||0)+(n.blockedCount||0)};this.bus.fire("dataBind",e)},"bus beforeInit:last + destroy":function(t,n){n.config.context.configurator.getStore().unbind(this)}});return n});