define(["tau/components/board.new.list/extension.base.new.list","tau/slice/new.list.factory","tau/components/board.new.list/new.list.quickAdd.component.builder","tau/components/board.new.list/new.list.context.menu.component.builder"],function(t,i,e,n){return t.extend({init:function(t,i,o,r){var a=new e(t.bus,t.context.configurator,r),s=new n(t);this._super(t,i,o,r,a,s)},"bus configurator.ready + boardSettings.ready":function(t,e,n){var o={boardId:n.boardSettings.settings.id},r=new i(e.getSliceFactoryOptions(),o);this.fire("sliceFactory.ready",r)},_initControllerSubscriptions:function(t){this._super(t),t.acidRetrieved.add(function(t){this.fire("acid.ready",t)},this),t.boardSettingsRetrieved.add(function(t){this.fire("board.configuration.ready",t),this.fire("viewMode.ready",t.viewMode)},this),t.definitionReady.add(function(t,i){taus.track({"@":["open-board-action"],boardSettings:i,definition:t})},this)},_initViewSubscriptions:function(t){this._super(t),t.hasDataInSliceChanged.add(function(t){this.fire("board.nodata.status.ready",this._listModel.getIsEmptyObject(t))},this)},_getAppStateStore:function(){return this._configurator.getAppStateStore()}})});