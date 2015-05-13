define(["require","tau/core/class","jQuery","Underscore","./../models/board.menu.constants"],function(i){"use strict";var e=i("tau/core/class"),r=i("jQuery"),t=i("Underscore"),n=i("./../models/board.menu.constants");return e.extend({init:function(i,e,r){this._viewsMenuService=i,this._boardAccessEditorService=e,this._loggedUser=r},prioritizeGroup:function(i,e,r,t){var n,o=i.findSectionContainingGroup(e),u=i.findSectionContainingGroup(r),a=i.findGroupById(e),s=i.findGroupById(r);if(!s.getIsUngroupedGroup()){this._viewsMenuService.groupsApi.prioritizeViewMenuItem(e,r,t).then(this._applyGroupPrioritizationResponse.bind(this,i));var d=this._getNewGroupPriority(e,o,r,u,t);null!==d&&(a.updateGroupData({menuNumericPriority:d}),n=!0)}o!==u&&this._changeGroupSection(a,o,u),n&&u.invalidateGroupsOrder()},_applyGroupPrioritizationResponse:function(i,e){var r=e.data.items;t.each(r,function(e){var r=i.findGroupById(e.key);r&&r.menuNumericPriority!==e.menuNumericPriority&&r.updateGroupData({menuNumericPriority:e.menuNumericPriority})},this)},_getNewGroupPriority:function(i,e,r,n,o){var u=e.findGroupIndexById(i);if(0>u)return null;var a=n.viewMenuGroups,s=n.findGroupIndexById(r);if(0>s)return null;if(o&&s++,a.length){var d=t.reject(a,function(i){return i.getIsUngroupedGroup()});return this._calculateTargetPriority(d,s)}return null},prioritizeBoard:function(i,e,r,t,o){var u=i.findBoardById(e),a=i.findGroupContainingView(e),s=i.findGroupById(t||n.UNGROUPED_GROUP_KEY);r&&this._viewsMenuService.viewsApi.prioritizeViewMenuItem(e,r,o).then(this._applyBoardPrioritizationResponse.bind(this,i));var d=this._getNewBoardPriority(e,a,r,s,o);null!==d&&(u.updateBoardData({menuNumericPriority:d}),s.invalidateViewsOrder()),this._updateBoardOnDrop(u,a,s)},_applyBoardPrioritizationResponse:function(i,e){var r=e.data.items;t.each(r,function(e){var r=i.findBoardById(e.key);r&&r.menuNumericPriority!==e.menuNumericPriority&&r.updateBoardData({menuNumericPriority:e.menuNumericPriority})},this)},_getNewBoardPriority:function(i,e,r,t,n){var o=e.findBoardIndexById(i);
if(0>o)return null;var u=t.boards,a=r?t.findBoardIndexById(r):0;return 0>a?null:(n&&a++,u.length?this._calculateTargetPriority(u,a):null)},canChangeGroup:function(i,e){return e.getIsUngroupedGroup()||e.getIsFavoriteUngroupedGroup()?!0:this._loggedUser.isAdministrator?!0:i.getCanChangeGroup(this._loggedUser)?!e.getIsPublic():!1},_updateBoardOnDrop:function(i,e,n){var o=this.canChangeGroup(i,n),u=n!==e,a=e.isFavorite!==n.isFavorite,s=o?i.getAccessLevelDiff(n):{},d=t.deepClone(s);o&&u&&(d.menuGroupKey=n.getIsRegularGroup()?n.groupId:""),a&&(d.isFavorite=n.isFavorite);var c=t.keys(d);if(c.length){var p=t.keys(s).length?this._boardAccessEditorService.confirmAccessChange(this._loggedUser,i,n):r.Deferred().resolve();p.done(function(){var e=t.pick(i,c);this._viewsMenuService.viewsApi.updateViewMenuItem(i.boardId,d,e)}.bind(this))}},_calculateTargetPriority:function(i,e){var r=i[e-1]||{menuNumericPriority:i[0].menuNumericPriority-16},t=i[e]||{menuNumericPriority:i[i.length-1].menuNumericPriority+16};return(r.menuNumericPriority+t.menuNumericPriority)/2},_changeGroupSection:function(i,e,r){this._viewsMenuService.groupsApi.updateViewMenuItem(i.groupId,{isFavorite:r.getIsFavoritesSection()},{isFavorite:e.getIsFavoritesSection()})}})});