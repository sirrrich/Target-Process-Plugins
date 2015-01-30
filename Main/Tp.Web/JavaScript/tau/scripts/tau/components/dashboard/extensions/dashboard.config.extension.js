define(["require","jQuery","tau/core/extension.base","tau/services/boards/service.board.settings.wrapper","../services/dashboard.comet.listener"],function(e){var t=e("jQuery"),i=e("tau/core/extension.base"),r=e("tau/services/boards/service.board.settings.wrapper"),s=e("../services/dashboard.comet.listener"),n=["itemType","name","isShared","customSharedData","acid","menuGroupKey","menuIsVisible","menuNumericPriority","edit","ownerIds","isFavorite","layout"];return i.extend({_configurator:null,"bus initialize":function(e,t){this._configurator=t.context.configurator,this._boardSettingsServiceWrapper=new r,this._isCometEnabled=!t.disableDashboardComet,this._cometListener=null},"bus boardSettings.ready":function(e,t){this._boardSettingsServiceWrapper.setNewBoardSettingsService(t.boardSettings)},"bus afterRender + boardSettings.ready + view.dom.ready:last":function(e,i){this._boardSettingsServiceWrapper.serviceInitialized.then(function(){var e=this._boardSettingsServiceWrapper.getCurrentService();return"none"===e.settings.id?t.Deferred().resolve():e.get({fields:n})}.bind(this)).then(this._initializeDashboard.bind(this,i))},_initializeDashboard:function(e){var t=this._boardSettingsServiceWrapper.getCurrentViewId();this._configurator.getDashboardModelRegistry().getDashboardModel(t).then(function(i){this._initComet(t,i);var r={configurator:this._configurator,element:e.element.find(".i-role-dashboard")[0],model:i};this.fire("dashboard.config.ready",r)}.bind(this))},_initComet:function(e,t){if(this._isCometEnabled){var i=new s(this._configurator.getComet(),this._configurator.getViewsMenuService(),e);i.dashboardUpdateRequired.add(function(e){t.updateLayoutModel(e.newLayout)},this),i.startListen().then(function(e){this.fire("test.only.dashboard.comet.subscription.ready",e)}.bind(this)),this._cometListener=i}},destroy:function(){this._cometListener&&(this._cometListener.dashboardUpdateRequired.remove(this),this._cometListener.destroy()),this._super()}})});