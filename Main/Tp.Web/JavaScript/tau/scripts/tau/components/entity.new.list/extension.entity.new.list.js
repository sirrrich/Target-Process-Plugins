define(["Underscore","jQuery","tau/components/board.new.list/extension.base.new.list","tau/slice/entity.new.list.factory","tau/components/board.new.list/new.list.quickAdd.component.builder","tau/components/board.new.list/new.list.context.menu.component.builder","tau/core/helpers/entityResolver"],function(e,t,i,n,r,o,s){return i.extend({_defaultOnPage:20,_quickAddOptions:{positionConfig:{collision:"fit flip"}},init:function(e,t,i,n){this.eventAggregator=n;var s=new r(e.bus,e.context.configurator,n,this._quickAddOptions),a=new o(e);this._super(e,t,i,n,s,a),n.expansionStateChanged.add(this.fire.bind(this,"expansion.state.changed"))},"bus beforeInit":function(e,t){s.resolve(t.config).done(this.fire.bind(this,"entity.ready"))},"bus afterInit":function(){this.fire("eventAggregator.ready",this.eventAggregator)},"bus start.lifecycle":function(){this._skeletonView.treeViewCreated.add(function(e){this.fire("newListTreeView.ready",{skeletonView:this._skeletonView,treeView:e})}.bind(this))},"bus beforeInit:last + entity.ready":function(e,t,i){var n=t.config,r=this._createViewNewListSettings(n,i);this.fire("boardSettings.ready",{boardSettings:r}),this.fire("listSettings.ready",{boardSettings:r,sliceFactory:this._createSliceFactory(n,i),behaviorsSettings:this._createBehaviorsSettings(n,i)})},"bus afterRender":function(){this.fire("view.dom.ready",{})},_createViewNewListSettings:function(t,i){var n=i.entityType.name.toLowerCase(),r=[n,i.id.toString(),t.name.toLowerCase()].join(""),o=e.extend({id:r,viewMode:"newlist",x:{types:[n]},cellPaging:{onPage:this._defaultOnPage}},t.definition);return this._configurator.getBoardSettingsFactory().createStaticSettings(o)},_createSliceFactory:function(e,t){var i={prefix:e.treeViewEndPoint||"EntityTreeView",entityId:t.id};return new n(this._configurator.getSliceFactoryOptions(),i)},_createBehaviorsSettings:function(t,i){return e.extend(this.config.behaviorsSettings,{entity:i})},_getAppStateStore:function(){return this._configurator.getBoardSettingsFactory().createStaticSettings({acid:null})
}})});