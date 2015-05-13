define(["require","tau/core/class","jQuery","Underscore","tau/utils/utils.serverErrorTranslator","template!tau/components/board.menu/templates/board.menu.undelete.template","tau/services/boards/view.types","tau/services/service.board.access"],function(e){var i=e("tau/core/class"),t=e("jQuery"),r=e("Underscore"),n=e("tau/utils/utils.serverErrorTranslator"),o=e("template!tau/components/board.menu/templates/board.menu.undelete.template"),s=e("tau/services/boards/view.types"),a=e("tau/services/service.board.access");return i.extend({init:function(e,i,t,r,n,o,s){this._bus=e,this._errorBarService=i,this._configurator=t,this._viewsMenuService=r,this._urlBuilder=n,this._routing=o,this._history=s},createViewAndRedirect:function(){var e=this._configurator.getBoardDefinitionFactory();return e.createBoard().done(function(e){this._bus.fire("add.board",{board:{id:e.id}}),this._configurator.setConfig("tmpBoardIsJustAdded",!0),this.redirectToView(s.BOARD,e.id)}.bind(this))},createDashboardAndRedirect:function(){var e=this._configurator.getBoardDefinitionFactory();return e.createDashboard().done(function(e){this._bus.fire("add.dashboard",{board:{id:e.id}}),this._configurator.setConfig("tmpBoardIsJustAdded",!0),this.redirectToView(s.DASHBOARD,e.id)}.bind(this))},createReportAndRedirect:function(){var e=this._configurator.getBoardDefinitionFactory();return e.createReport().done(function(e){this._bus.fire("add.customReport",{board:{id:e.id}}),this._configurator.setConfig("tmpBoardIsJustAdded",!0),this.redirectToView(s.REPORT,e.id)}.bind(this))},createViewGroup:function(){var e=this._configurator.getBoardDefinitionFactory();return e.createViewGroup().done(function(e){this._bus.fire("add.board.group",{boardGroup:{id:e.key}})}.bind(this))},removeView:function(e,i){var r=i||this._getCurrentAcid();return this._viewsMenuService.viewsApi.getViewMenuItem(e).then(function(i){return t.when(i.data,this._viewsMenuService.viewsApi.removeViewMenuItem(e))}.bind(this)).fail(function(e){this._errorBarService.fire("error",n.translateXhrError(e))
}.bind(this)).then(function(i){this._bus.fire("remove.board",{board:{id:e}}),this._history.exclude(e);var t=s.getViewTypeName(i.itemType),n=function(){var e=i.key||i.id;this._viewsMenuService.viewsApi.restoreViewMenuItem(e,i).done(function(){this.redirectToView(i.itemType,e,r)}.bind(this))}.bind(this);this._showUndeleteMessage(t,i.name,n)}.bind(this))},removeGroupWithViews:function(e){var i=this._viewsMenuService;t.when(i.groupsApi.getViewMenuItem(e),i.viewsApi.getViewsForGroup(e)).then(function(e,n){var o=e.data,s=this._getEditableViews(n.data.items);return i.viewsApi.removeViews(r.pluck(s,"key")).then(function(){return i.groupsApi.removeViewMenuItem(o.key)}).then(function(){return t.when(o,s)})}.bind(this)).then(function(e,t){var n=r.map(t,r.property("key"));this._bus.fire("remove.group.with.views",{group:e.key,views:n}),r.each(n,this._history.exclude,this._history);var o=function(){i.groupsApi.restoreViewMenuItem(e.key,e).then(function(){r.each(t,function(e){i.viewsApi.restoreViewMenuItem(e.key,e)})})}.bind(this);this._showUndeleteMessage("Group",e.name+" and its Views",o)}.bind(this))},removeGroupWithViewsAndRedirect:function(e,i,t,r){var n=this.removeGroupWithViews(e);return this._redirect(i,t,r),n},removeViewAndRedirect:function(e,i,t,r,n){var o=this.removeView(e,i);return this._redirect(t,r,n),o},_getEditableViews:function(e){var i=this._configurator.getLoggedUser();return r.filter(e,function(e){return a.isEditable(e,i)})},_redirect:function(e,i,t){e&&i?this.redirectToView(e,i,t):this.redirectToDefaultView(t)},_showUndeleteMessage:function(e,i,t){var r=o.render({name:i,itemTypeName:e});r.on("click",".i-role-undo",t),this._errorBarService.fire("notification",{id:"board.removed",className:"tau-system-message-success",$node:r,delay:1e4,disableAutoClose:!1})},_getCurrentAcid:function(){return this._configurator.getAppStateStore().settings.acid},redirectToView:function(e,i,t,r){var n="";switch(e){case s.DASHBOARD:n="dashboard/";break;case s.REPORT:n="customreport/";
break;default:n="board/"}var o=this._urlBuilder.getRelativeBoardPageUrl(n+i,t);this._routing.redirect(o+(r||""))},redirectToDefaultView:function(e){var i=this._urlBuilder.getDefaultViewUrl(e);this._routing.redirect(i)}})});