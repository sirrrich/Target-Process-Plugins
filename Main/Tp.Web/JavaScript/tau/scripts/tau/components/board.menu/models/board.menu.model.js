define(["require","Underscore","tau/core/class","./../services/board.menu.prioritization.service","./board.menu.board.group","./board.menu.section.collection"],function(i){"use strict";var e=i("Underscore"),t=i("tau/core/class"),n=i("./../services/board.menu.prioritization.service"),o=i("./board.menu.board.group"),r=i("./board.menu.section.collection");return t.extend({viewMenuSections:null,init:function(i,e,t,o,s){this._componentBus=i,this._loggedUser=e,this._urlService=t.viewsMenuUrlService,this._viewsMenuService=t,this._boardSettingsService=o,this._boardSettingsService.currentBoardChanged.add(this._onCurrentBoardChanged,this),this.viewMenuSections=new r,this.viewMenuSections.sectionCollectionUpdated.add(this._updateViewsMenu,this),this._prioritization=new n(this._viewsMenuService,s,this._loggedUser),this._subscribeToAcidChanges()},loadBoards:function(){return this._viewsMenuService.getViewsMenuForUser().then(function(i){this.viewMenuSections.setSections(i),this._subscribeToApiServiceChanges()}.bind(this))},_createBoardGroupModel:function(i){return new o(this._urlService,i)},_updateViewsMenu:function(){this._componentBus.fire("board.menu.update.all",this.viewMenuSections)},expandGroup:function(i){if(i){var e=this.viewMenuSections.findGroupById(i);e&&e.getIsRegularGroup()&&!e.isExpanded&&this._viewsMenuService.groupsApi.updateViewMenuItem(e.groupId,{isExpanded:!0})}},prioritizeGroup:function(i,e,t){this._prioritization.prioritizeGroup(this.viewMenuSections,i,e,t)},prioritizeBoard:function(i,e,t,n){this._prioritization.prioritizeBoard(this.viewMenuSections,i,e,t,n)},findBoardDataToReplaceDeleted:function(i){return this.viewMenuSections.findFirstVisibleViewData([i])},_subscribeToAcidChanges:function(){this._clearAcidSubscription(),this._urlService.urlRequiresInvalidation.add(this._onAcidUpdated,this)},_onAcidUpdated:function(){this.viewMenuSections.applyAcidToViews()},_subscribeToApiServiceChanges:function(){this._clearApiSubscriptions();var i=this._viewsMenuService.viewsApi;
i.on("service.views.api.created.view",function(i,e){this._onBoardCreated(e)},this),i.on("service.views.api.updating.view",function(i,e){this._onBoardUpdated(e)},this),i.on("service.views.api.updated.view",function(i,e){this._onBoardUpdated(e)},this),i.on("service.views.api.removed.view",function(i,e){this._onViewRemoved(e)},this),i.on("service.views.api.removing.view",function(i,e){this._onViewRemoved(e)},this);var e=this._viewsMenuService.groupsApi;e.on("service.views.api.created.group",function(i,e){this._onBoardGroupCreated(e)},this),e.on("service.views.api.updating.group",function(i,e){this._onBoardGroupUpdated(e)},this),e.on("service.views.api.updated.group",function(i,e){this._onBoardGroupUpdated(e)},this),e.on("service.views.api.removed.group",function(i,e){this._onBoardGroupRemoved(e)},this)},_onBoardCreated:function(i){this.viewMenuSections.findAppropriateGroupForView(i).createBoardInGroup(i)},_onBoardGroupCreated:function(i){this.viewMenuSections.findGroupById(i.key)||this.viewMenuSections.createGroupInSection(this._createBoardGroupModel(i))},_onBoardUpdated:function(i){this.viewMenuSections.applyBoardUpdates(i)||this._onBoardCreated(i)},_onBoardGroupUpdated:function(i){var t=this.viewMenuSections.findGroupById(i.key);if(!t)return void this._onBoardGroupCreated(i);var n=t?t.boards:[],o=t&&t.isFavorite&&e.has(i,"isFavorite")&&!i.isFavorite;this.viewMenuSections.applyGroupUpdates(i),o&&e.each(n,function(i){i.isFavorite&&this._viewsMenuService.viewsApi.updateViewMenuItem(i.boardId,{isFavorite:!1,itemType:i.itemType},{isFavorite:i.isFavorite})},this)},_onViewRemoved:function(i){this.viewMenuSections.removeView(i)},_onBoardGroupRemoved:function(i){var t=this.viewMenuSections.findGroupById(i);if(t){var n=t.boards,o=t.isFavorite,r=this.viewMenuSections.findSectionContainingGroup(i);r&&r.removeMenuGroup(i),o&&e.each(n,function(i){i.isFavorite||this._viewsMenuService.viewsApi.updateViewMenuItem(i.boardId,{isFavorite:!0,itemType:i.itemType},{isFavorite:i.isFavorite})
},this)}},_onCurrentBoardChanged:function(){var i=this._boardSettingsService.getCurrentSettings().id;this._componentBus.fire("board.menu.switch.view",i)},_clearApiSubscriptions:function(){var i=[this._viewsMenuService.viewsApi,this._viewsMenuService.groupsApi];e.each(i,function(i){i.removeAllListeners(this)},this)},_clearAcidSubscription:function(){this._urlService.urlRequiresInvalidation.remove(this)},destroy:function(){this._clearApiSubscriptions(),this._clearAcidSubscription()}})});