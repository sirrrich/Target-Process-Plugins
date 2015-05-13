define(["require","Underscore","tau/core/extension.base"],function(e){var t=e("Underscore"),s=e("tau/core/extension.base");return s.extend({init:function(e){this._super(e);var t=e.context.configurator;this._routing=t.getRouting(),this._urlBuilder=t.getUrlBuilder(),this._showProcessSetup=null,this._lastPage=null,this._onRouteChanged(),this._routing.routeChanged.add(this._onRouteChanged,this)},_processSetupRouteNames:["process-setup-terms","process-setup-general","process-setup-workflow"],_isProcessSetup:function(e){return e=e||this._routing.getCurrentRoute().route,t.contains(this._processSetupRouteNames,e.name)},_onRouteChanged:function(){this.fire(this._isProcessSetup()?"process.setup.start":"process.setup.close")},"bus componentsCreated:last + boardSettings.ready":function(e,t,s){this._fireOnChildren(t,"boardSettings.ready",s)},"bus componentsCreated:last + view.dom.ready":function(e,t,s){this._fireOnChildren(t,"view.dom.ready",s)},"bus componentsCreated:last + afterRender":function(e,t,s){this._subscribe(s.element,t)},"bus componentsCreated:last + afterRender:last + process.setup.start":function(e,t,s){this._toggleProcessSetup(s.element,t,!0)},"bus componentsCreated:last + afterRender:last + process.setup.close":function(e,t,s){this._toggleProcessSetup(s.element,t,!1)},"bus configurator.ready:last + toggle.collapser":function(e,t,s){var r=t.getComponentBusRegistry();r.getByName("board.collapser.aside").then(function(e){e.fire(s)})},_subscribe:function(e,t){var s=this._toggleProcessSetup.bind(this,e,t,!0),r=this._toggleProcessSetup.bind(this,e,t,!1);this.bus.getGlobalBus().on("process.setup.start",s,this),this._onChildEvent(t,"process.setup.close",r)},_toggleProcessSetup:function(e,t,s,r){var o=r?r.data:null;if(this._showProcessSetup===s)return void this._fireOnChildren(t,"_process.changed",o);this._showProcessSetup=s,s?this._lastPage=this._getLastPage():null!==this._lastPage&&this._isProcessSetup()&&this._routing.redirect(this._lastPage),e.find("[role=process-setup]").toggle(s),e.find("[role=board-menu]").toggle(!s);
var n=s?"_process.setup.start":"_process.setup.close";this._fireOnChildren(t,n,o),this.fire("toggle.collapser",s?"disable":"enable")},_getLastPage:function(){var e=this._routing.getReferer(),t=this._routing.getCurrentRoute().route;return t.pattern&&this._isProcessSetup(t)&&t.pattern.test(e)?this._routing.getLast("view"):this._urlBuilder.getRelativeBoardPageUrl(e)},_fireOnChildren:function(e,s,r){t.each(e,function(e){e.component.fire(s,r)})},_onChildEvent:function(e,s,r){t.each(e,function(e){e.component.on(s,r)})},destroy:function(){this._routing.routeChanged.remove(this),this._super()}})});