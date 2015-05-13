define(["Underscore","jQuery","tau/core/extension.base","tau/ui/templates/board.editor/ui.template.board.editor","tau/ui/templates/board.editor/ui.template.board.editor.newlist"],function(e,t,i,n,r){return i.extend({"bus beforeInit":function(e,t){this._entityFiltersService=t.config.context.configurator.getEntityFiltersService(),this.fire("configurator.ready",t.config.context.configurator)},"bus configurator.ready":function(e,t){var i=this;t.getAppStateStore().get({fields:["acid"],callback:function(e){i.fire("acid.ready",e.acid)}}),t.getAppStateStore().unbind({listener:this}),t.getAppStateStore().bind({fields:["acid"],listener:this,callback:function(){i.fire("refresh")}});var n=t.service("boardSettings");n.get({fields:["ownerIds"],callback:function(e){var n=t.getLoggedUser(),r={edit:t.getBoardAccessService().isEditable(e,n)};i.fire("accessData.ready",r)}})},"bus configurator.ready:last + acid.ready:last + accessData.ready:last + form.readyToUpdate":function(e,t,i,n){var r=t.service("boardSettings"),a=this;this.getSpaceTotal(t.getSliceFactory(),r,i,function(e){a.fire("updateData.ready",{space:e,access:n})})},"bus configurator.ready + acid.ready":function(e,i,n){var r=this,a=i.service("boardSettings");a.unbind({listener:this}),a.bind({listener:this,fields:["viewMode"],callback:function(e){this.setTemplate(e.viewMode),this.fire("refresh")}}),t.when(this.getSpaceTotal(i.getSliceFactory(),a,n),this.getViewMode(a)).done(function(e,t){r.setTemplate(t),r.fire("dataBind",{user:i.getLoggedUser(),space:e})})},getViewMode:function(e){return e.get({fields:["viewMode"]}).then(function(e){return e.viewMode})},setTemplate:function(e){var t="newlist"===e?r:n;this.fire("board.editor.setTemplate",t)},"bus configurator.ready + destroy":function(e,t){var i=t.service("boardSettings");i.unbind({listener:this})},getSpaceTotal:function(i,n,r,a){var s=this,c=t.Deferred(),l=[];return l.push(function(e){s.spaceAvailable(i,n,r,e)}),l.push(function(e){s.spaceCells(i,n,r,e)}),l.push(function(e){s.spaceAxisX(i,n,r,e)
}),l.push(function(e){s.spaceAxisY(i,n,r,e)}),l.push(function(e){s.getFilters(n,e)}),e.parallel(l,function(e,t){var i=s.processSpaces(t);a&&a(i),c.resolve(i)}),c},spaceAvailable:function(e,t,i,n){var r={global:{acid:i}},a=e.create({definition:r});a.space().done(function(e){n(!1,{space:e.data})})},spaceCells:function(e,t,i,n){t.get({fields:["name","x","y","cells","zoomLevel","hierarchyMode","viewMode","acid"],callback:function(t){var r={definition:{global:{acid:i},x:t.x,y:t.y,cells:t.cells}},a=e.create(r);a.on("error",function(){n(!1,{space:{},settings:t})}),a.space().done(function(e){n(!1,{space:e.data,settings:t})})}})},spaceAxisX:function(e,t,i,n){t.get({fields:["name","x","y","cells","zoomLevel"],callback:function(t){var r={definition:{global:{acid:i},y:t.y,cells:t.cells}},a=e.create(r);a.on("error",function(){n(!1,{space:{}})}),a.space().done(function(e){n(!1,{space:e.data})})}})},spaceAxisY:function(e,t,i,n){t.get({fields:["name","x","y","cells","zoomLevel"],callback:function(t){var r={definition:{global:{acid:i},x:t.x,cells:t.cells}},a=e.create(r);a.on("error",function(){n(!1,{space:{}})}),a.space().done(function(e){n(!1,{space:e.data})})}})},processSpaces:function(t){var i={spaceDefault:t[0].space,spaceAvailable:{cells:t[1].space.cells||[],x:t[2].space.axes||[],y:t[3].space.axes||[],hierarchyMode:"inside",viewMode:""},settingsCurrent:t[1].settings},n=t[4],r={x:this._createDefaultSpaceData("x",n),y:this._createDefaultSpaceData("y",n),cells:this._createDefaultSpaceData("cells",n),hierarchyMode:null,viewMode:null},a=function(e){return e.toLowerCase()};r.hierarchyMode=i.settingsCurrent.hierarchyMode,r.viewMode=i.settingsCurrent.viewMode;var s=e.bind(function(t){r[t].types=e.map(i.spaceDefault.axes.items,function(n){var r={id:n.id,name:n.name,isAvailable:e.any(i.spaceAvailable[t].items,function(e){return a(e.id)===a(n.id)}),isSelected:i.settingsCurrent[t]&&e.any(i.settingsCurrent[t].types,function(e){return a(e)===a(n.id)})};return r.isAvailable=r.isSelected?!0:r.isAvailable,r.groupName=n.groupName,r
}),r[t].filter=i.settingsCurrent[t]?i.settingsCurrent[t].filter||"":"",r[t].useFilter=this._isFilterEnabled(i.settingsCurrent[t]||{},r[t]);var n=e.filter(r[t].types,function(e){return e.isAvailable});r[t].grouped=e.groupBy(n,function(e){return e.groupName||"default"}),r[t].grouped=e.map(r[t].grouped,function(e,t){return{name:t,items:e}}),r[t].grouped=e.sortBy(r[t].grouped,function(e){return"default"==e.name?"AAAA":e.name});var s=i.settingsCurrent[t]?i.settingsCurrent[t].types[0]||"":"",c=e.find(i.spaceAvailable[t].items,function(e){return a(e.id)===a(s)})||{},l=i.settingsCurrent&&i.settingsCurrent[t]?i.settingsCurrent[t].ordering:{},o=l&&l.name;r[t].orderingNames=e.map(c.orderings||[],function(e){return{id:e.name,name:e.name,isSelected:e.name==o,direction:e.direction}}),r[t].orderingDirection=this.getOrderingDirection(l,c.orderings)},this);s("x"),s("y"),r.cells.types=e.map(i.spaceDefault.cells.items,function(t){var n={id:t.id,name:t.name,isAvailable:e.any(i.spaceAvailable.cells.items,function(e){return a(e.id)===a(t.id)}),isSelected:e.any(i.settingsCurrent.cells.types,function(e){return a(e)===a(t.id)})};return n.isAvailable=n.isSelected?!0:n.isAvailable,n}),r.cells.filter=i.settingsCurrent.cells.filter||"",r.cells.useFilter=this._isFilterEnabled(i.settingsCurrent.cells||{},r.cells);var c=i.settingsCurrent&&i.settingsCurrent.cells.ordering,l=c&&c.name;return r.cells.orderingDirection=this.getOrderingDirection(c,t[1].space.cells.orderings.items),r.cells.orderingNames=e.map(t[1].space.cells.orderings.items,function(e){return{id:e.name,name:e.name,isSelected:e.name==l,direction:e.direction}}),r.acid=t[1].settings.acid||"",r},_createDefaultSpaceData:function(e,t){return{name:e,types:[],filter:"",useFilter:!0,filters:(t[e]||{}).filters,orderingName:"",orderingDirection:"Asc"}},_isFilterEnabled:function(e,t){var i=e.useFilter,n=null!==i&&void 0!==i;return n?e.useFilter:!!t.filter},getOrderingDirection:function(t,i){var n=i&&i[0]&&i[0].direction;if(t)if(t.direction)n=t.direction;
else{var r=e.find(i,function(e){return e.name==t.name});r&&(n=r.direction)}return n},getFilters:function(e,t){e.get({fields:["x","y","cells"],callback:function(e){this._entityFiltersService.getEntityFilters({x:e.x,y:e.y,cells:e.cells}).done(function(e){t(!1,e)})}.bind(this)})}})});