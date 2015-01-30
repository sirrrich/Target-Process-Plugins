define(["Underscore","tau/core/model-base","tau/models/board.editor/board.filter.help","tau/models/const.view.modes"],function(e,t,i,s){return t.extend({"bus beforeInit":function(e){var t=e.data.config.context.configurator;this.fire("configurator.ready",t)},"bus afterInit + boardSettings.ready:last + configurator.ready:last":function(t,r,n,a){var l=n.boardSettings,o=a.getLoggedUser(),d=a.getBoardAccessService(),c=e.bind(function(t,i){var n=t.cells||{types:[]};n.name="cells",n.filter=t.user&&t.user.cardFilter?t.user.cardFilter:"";var l=t.viewMode,c=l===s.BOARD||l===s.DETAILS,f=function(t){return t&&e.size(e.intersection(t.types,["entitystate","teamentitystate"]))},u=(f(t.x)||f(t.y))&&a.loggedUser.isProcessAdministrator;n.predefinedFilters=i,this.fire("cell.types",n.types),this.fire("dataBind",{name:t.name,isShared:t.isShared,viewMode:t.viewMode,isPrintable:c,canSetupStates:u,cells:n,zoom:{value:t.zoomLevel,min:r.config.min,max:r.config.max},isEditable:d.isEditable(t,o)})},this);l.get({fields:["ownerIds","user","id","name","isShared","viewMode","zoomLevel","cells","x","y"],callback:function(e){(new i).get({cells:e.cells}).done(function(t){c(e,t.cells||[])})}}),l.unbind({listener:this}),l.bind({fields:["cells"],listener:this,callback:e.bind(function(e){this.fire("cell.types",e.cells.types)},this)}),l.bind({listener:this,fields:["x","y"],callback:function(){this.fire("refresh")}.bind(this)}),a.getAppStateStore().unbind({listener:this}),a.getAppStateStore().bind({fields:["acid"],listener:this,callback:function(){this.fire("refresh")}.bind(this)})},"bus configurator.ready:last + user.filter.changed":function(e,t,i){t.service("boardSettings").set({set:{user:{cardFilter:i}}})},"bus boardSettings.ready:last + configurator.ready:last + destroy":function(e,t,i){t.boardSettings.unbind({listener:this}),i.getAppStateStore().unbind({listener:this})}})});