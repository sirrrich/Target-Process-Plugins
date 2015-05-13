define(["Underscore","tau/core/model-base","tau/models/const.view.modes"],function(e,t,i){return t.extend({"bus beforeInit":function(e){this._entityFiltersService=e.data.config.context.configurator.getEntityFiltersService(),this.fire("configurator.ready",e.data.config.context.configurator)},"bus afterInit + boardSettings.ready:last + configurator.ready:last":function(t,s,r,n){var a=r.boardSettings,l=n.getLoggedUser(),o=n.getBoardAccessService(),c=function(t,r){var a=t.cells||{types:[]};a.name="cells",a.filters=r,a.filter=t.user&&t.user.cardFilter?t.user.cardFilter:"";var c=function(t){return t&&e.size(e.intersection(t.types,["entitystate","teamentitystate"]))},d=(c(t.x)||c(t.y))&&n.loggedUser.isProcessAdministrator;this.fire("cell.types",a.types),this.fire("dataBind",{name:t.name,isShared:t.isShared,viewMode:t.viewMode,isPrintable:t.viewMode===i.BOARD||t.viewMode===i.DETAILS,canSetupStates:d,cells:a,zoom:{value:t.zoomLevel,min:s.config.min,max:s.config.max},isEditable:o.isEditable(t,l)})}.bind(this);a.get({fields:["ownerIds","user","id","name","isShared","viewMode","zoomLevel","cells","x","y"],callback:this.safeCallback(function(e){this._entityFiltersService.getEntityFilters({cells:e.cells}).done(function(t){c(e,(t.cells||{}).filters),this.fire("refresh.help.content",t)}.bind(this))})}),a.unbind({listener:this}),a.bind({fields:["cells"],listener:this,callback:function(e){this.fire("cell.types",e.cells.types)}.bind(this)}),a.bind({listener:this,fields:["x","y"],callback:function(){this.fire("refresh")}.bind(this)}),n.getAppStateStore().unbind({listener:this}),n.getAppStateStore().bind({fields:["acid"],listener:this,callback:function(){this.fire("refresh")}.bind(this)})},"bus configurator.ready:last + user.filter.changed":function(e,t,i){t.service("boardSettings").set({set:{user:{cardFilter:i}}})},"bus boardSettings.ready:last + configurator.ready:last + destroy":function(e,t,i){t.boardSettings.unbind({listener:this}),i.getAppStateStore().unbind({listener:this})}})});