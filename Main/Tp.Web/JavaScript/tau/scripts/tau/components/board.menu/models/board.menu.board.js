define(["require","Underscore","./board.menu.view.item.access","./../board.menu.config","tau/services/service.board.access"],function(e){var t=e("Underscore"),a=e("./board.menu.view.item.access"),i=e("./../board.menu.config"),r=e("tau/services/service.board.access");return a.extend({init:function(e,a){this._urlService=e,this.boardUpdated=t.Callbacks(),this._applyBoardData(a),this.edit=!1},updateBoardData:function(e){this._applyBoardData(e),this.boardUpdated.fire(this)},getUpdatedBoardData:function(e){var a=t.extend(t.deepClone(this.storedViewData||{}),e);return t.defaults(a,{isFavorite:!1})},getCanChangeGroup:function(e){return r.isEditable(this.storedViewData,e)},getCanPrioritizeBoard:function(e){if(!e)throw new Error("User should be defined");return this.getCanChangeGroup(e)},_hasSameAccessAs:function(e){var a=this.storedViewData,i=a.isShared===e.isShared;return i?t.isEqual(a.customSharedData,e.customSharedData):!1},getAccessLevelDiff:function(e){if(e.getIsUngroupedGroup()||e.getIsFavoriteUngroupedGroup())return{};if(this._hasSameAccessAs(e))return{};var a={isShared:e.isShared};return a.customSharedData=e.customSharedData?t.deepClone(e.customSharedData):{isActive:!1,projectIds:[],teamIds:[]},a},applyGlobalAcidSilently:function(){this._updateLink()},_applyBoardData:function(e){var a=this.getUpdatedBoardData(e);this.storedViewData=a;var r=t.pick(a,i.watchedBoardSettingsFields);r.boardId=a.key||a.id,r.name=r.name||r.boardId,r.itemType=a.itemType,t.extend(this,r),this._updateLink()},_updateLink:function(){this.link=this._urlService.getViewUrl(this.storedViewData)}})});