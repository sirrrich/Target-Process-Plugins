define(["require","tau/services/boards/service.views.menu.item.api","Underscore"],function(e){var t=e("tau/services/boards/service.views.menu.item.api"),r=e("Underscore");return t.extend({init:function(e,t){this._super({storageConfig:e,storageKeyPrefix:"__board_legacy",itemType:"view",apiItemType:"view",clientId:t.clientId})},createBoard:function(e){return this.createViewMenuItem(r.extend({itemType:"board"},e))},createDashboard:function(e){return this.createViewMenuItem(r.extend({itemType:"dashboard"},e))},createReport:function(e){return this.createViewMenuItem(r.extend({itemType:"customreport"},e))},setBoardData:function(e,t,r){return this.updateViewMenuItem(e,t,r)},getBoardData:function(e){return this.getViewMenuItem(e)},removeBoard:function(e){return this.removeViewMenuItem(e)}})});