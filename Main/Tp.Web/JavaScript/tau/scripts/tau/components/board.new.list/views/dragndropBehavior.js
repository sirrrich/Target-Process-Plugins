define(["require","Underscore","jQuery","tau/core/class","tau/components/board.new.list/views/view.new.list.tree.dragndrop","tau/components/board.new.list/views/view.new.list.tree.dragndrop.testplan","tau/components/board.new.list/models/node.modification.strategies","tau/components/board.new.list/views/view.new.list.tree.dragndrop.expander"],function(t){var e=t("Underscore"),i=t("jQuery"),n=t("tau/core/class"),s=t("tau/components/board.new.list/views/view.new.list.tree.dragndrop"),o=t("tau/components/board.new.list/views/view.new.list.tree.dragndrop.testplan"),r=t("tau/components/board.new.list/models/node.modification.strategies"),a=t("tau/components/board.new.list/views/view.new.list.tree.dragndrop.expander");return n.extend({_eventNamespace:".newlist-dragndrop-behavior",_fields:["prioritization"],init:function(t){this._eventAggregator=t.eventAggregator,this.skeletonView=t.skeletonView,this._boardSettingsService=t.modelSettings.listSettings.boardSettingsService,this._apiService=t.modelSettings.listSettings.apiService,this._configurator=t.configurator,this.dndOptions=t.behaviorsSettings.dndOptions||{},this._treeRootModel=t.treeRootModel,this._dndEventNamespace=e.uniqueId(this._eventNamespace),this._treeDragNDropExpander=new a(this._eventAggregator)},attach:function(){i(this._configurator.getWindow()).on("keydown"+this._dndEventNamespace,this._trackShiftKeyState.bind(this)).on("keyup"+this._dndEventNamespace,this._trackShiftKeyState.bind(this)),this._eventAggregator.treeRendered.once(this._onInitialTreeRendered,this),this._boardSettingsService.get(this._fields).then(function(t){this._setPrioritization(t.prioritization)}.bind(this)),this._boardSettingsService.bind({fields:this._fields,listener:this,callback:function(t){this._setPrioritization(t.prioritization)}.bind(this)})},_onInitialTreeRendered:function(){e.each(this.skeletonView.getAllTreeViews(),this._onTreeViewCreated,this),this.skeletonView.treeViewCreated.add(this._onTreeViewCreated,this)},_setPrioritization:function(t){var e=t&&t.mode?t.mode:"enabled";
this.dndOptions.prioritization!==e&&(this.dndOptions.prioritization=e,this.setDndOptions())},_trackShiftKeyState:function(t){this.dndOptions.shiftKey!==t.shiftKey&&"shift"===this.dndOptions.prioritization&&(this.dndOptions.shiftKey=t.shiftKey,this.setDndOptions())},setDndOptions:function(){this.skeletonView.$el.toggleClass("tau-list-prioritization-enabled","enabled"===this.dndOptions.prioritization).toggleClass("tau-list-prioritization-disabled","disabled"===this.dndOptions.prioritization).toggleClass("tau-list-prioritization-shift","shift"===this.dndOptions.prioritization).toggleClass("tau-list-prioritization-shiftDown",!!this.dndOptions.shiftKey&&"shift"===this.dndOptions.prioritization),this.setDndOptionsForView(this.skeletonView._rootView)},setDndOptionsForView:function(t){t&&(t.dndView&&t.dndView.setDndOptions(this.dndOptions),e.each(t.subViews,this.setDndOptionsForView,this))},_onTreeViewCreated:function(t){var e=t.treeModel.hierarchyMetaInfo;if(!e.isInnerCollectionsLevel){var i=e.canMoveToAnyLevel?o:s;t.dndView=new i(t,this.dndOptions,this.applyDndMove.bind(this),this.skeletonView.$el,this._treeDragNDropExpander)}},applyDndMove:function(t){return this._moveAndPrioritizeBatch(t).done(function(e){this._trackDnd(t),this._applyDndChanges(t,e.data)}.bind(this))},_moveAndPrioritizeBatch:function(t){var e={itemId:t.item.data("id"),afterItemId:t.itemAfter?t.itemAfter.data("id"):null,beforeItemId:t.itemBefore?t.itemBefore.data("id"):null,fromPath:t.fromPath,toPath:t.toPath};return this._apiService.treeViewMoveAndPrioritizeBatch({$set:{items:[e]}})},_trackDnd:function(t){taus.track({action:"drag and drop"+(t.shouldMove?"(move)":"")+(t.shouldPrioritize?"(prioritize)":""),cardTypes:e.pluck(t.treeModel.hierarchyMetaInfo.cardTypes,"typeName"),tags:["newlist"]})},_applyDndChanges:function(t,i){var n=e.any(i,function(i){return e.isEqual(i.path,t.fromPath)},this);t.finalizeMovementOnUi(),n||t.treeModel.deleteCard(t.item.data("dataItem"),!0);var s=e.map(i,function(t){return{card:t.dataItem,path:t.path}
},this);this._treeRootModel.updateOrAddUpdatedCards(s,r.regular)},destroy:function(){i(this._configurator.getWindow()).off(this._dndEventNamespace),this._boardSettingsService.unbind({listener:this})}})});