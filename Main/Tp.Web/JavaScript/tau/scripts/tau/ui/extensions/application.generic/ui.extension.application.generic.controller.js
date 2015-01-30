define(["Underscore","jQuery","tau/core/extension.base","tau/ui/behaviour/common/ui.behaviour.progressIndicator","tau/core/event-dispatcher"],function(e,t,n,a,r){return n.extend({"bus beforeInit":function(){this.fire("controller.hostType",null),this.fire("controller.app.host.prev",null),this.fire("controller.app.page.prev",null)},"bus controller.app.host.prev > controller.app.host":function(e,t,n){t&&t.destroy(),this.fire("controller.app.host.prev",n)},"bus controller.app.page.prev > controller.app.page":function(e,t,n){t&&t.destroy(),this.fire("controller.app.page.prev",n)},"bus configurator.ready:last + application.navigate":function(e,t){t.service("errorBar").fire("clearError")},"bus controller.hostType:last + application.navigate":function(t,n,a){var r=a.requestArgs,i=r||{},o=i.entity,s=i.action,l=e.isObject(o)?o.type:e.asString(o);r&&r.cssClass||!(l&&s||"reports"==o)||(a.applicationClassName="tau-page-entity"),r&&r.applicationClassName&&(a.applicationClassName=r.applicationClassName);var p=a.host,d=!n||p.name!==n.name;d&&this.fire("controller.hostType",p);var c=d?"full":"partial";this.fire("controller.load."+c,a)},"bus options.ready:last + configurator.ready:last + controller.load.full":function(n,a,i,o){var s=i.getComponentBuilder(),l=o.requestArgs,p=l.handlers||{},d=this._getInitConfig(i,a,e.omit(l,"handlers"));t.when(s.create(o.host,d),s.create(o.type,d)).done(e.bind(function(t,n){this.fire("controller.preExecute",{}),this.fire("controller.app.host",t),this.fire("controller.app.page",n),this.addListeners(t,"Host"),this.addListeners(n,"Page");var a=new r([t,n]);a.listen("afterRender",e.bind(function(t){var a=t.argsArr[0].element,r=t.argsArr[1].element;this.fire("innerContentRendered",{element:a,$host:a,$page:r,applicationClassName:o.applicationClassName}),this.fire("host.ready"),n.on("afterRender",e.bind(function(e,t){this.fire("innerContentRendered",{element:this.$host,$host:this.$host,$page:t.element,applicationClassName:o.applicationClassName})},this),this),n.on("afterRenderAll",e.bind(function(e,t){this.fire("innerContentRenderedAll",{element:this.$host,$host:this.$host,$page:t.element,applicationClassName:o.applicationClassName}),p.onPageLoaded&&p.onPageLoaded()
},this),this)},this)),t.initialize(d),n.initialize(d),this.fire("controller.postExecute",{})},this))},"bus options.ready:last + configurator.ready:last + host.ready:last + controller.load.partial":function(n,a,r,i,o){var s=r.getComponentBuilder(),l=o.requestArgs,p=l.handlers||{},d=this._getInitConfig(r,a,e.omit(l,"handlers"));t.when(s.create(o.type,d)).done(e.bind(function(t){this.fire("controller.preExecute",{}),this.fire("controller.app.page",t),this.addListeners(t,"Page"),t.on("afterRender",e.bind(function(e,t){this.fire("innerContentRendered",{element:this.$host,$host:this.$host,$page:t.element,applicationClassName:o.applicationClassName}),p.onPageLoaded&&p.onPageLoaded()},this),this),t.initialize(d),this.fire("controller.postExecute",{})},this))},"bus afterRender:last + innerContentRendered":function(e,t,n){var a=t.element,r=n.$host,i=n.$page;r.is(this.$host)&&i.is(this.$page)||(r.is(this.$host)||(this._appendHost(a,r),this.$host=r,this._appendPage(a,r,i),this.$page=i),i.is(this.$page)||(this._appendPage(a,this.$host,i),this.$page=i),this.fire("applyClasses",{$el:a,controllersRenderData:n}),this.fire("controller.appContent.rendered",a),this.fire("contentRendered",{element:a}))},"bus view.dom.ready:last + applyClasses":function(e,t,n){var a=n.$el,r=n.controllersRenderData,i=a.parents(".ui-popup:first");i=i.length?a.add(i):a,r.applicationClassName?a.data("classname")!=r.applicationClassName&&(i.removeClass(i.data("classname")||""),i.addClass(r.applicationClassName),i.data("classname",r.applicationClassName)):(i.removeClass(i.data("classname")||""),i.data("classname",""))},"bus controller.load.partial > controller.host.rendered":function(e,t,n){this.toggleProgressIndicator(n.element,!0)},"bus controller.load.partial > controller.host.rendered > innerPageRendered":function(e,t,n){this.toggleProgressIndicator(n.element,!1)},toggleProgressIndicator:function(e,t){var n=e.find("[role=main]"),r=this.config.integration||{};r.disableProgressIndicator!==!0&&a.get(n).toggle(!!t)
},"bus configurator.ready:last + controller.app.page":function(e,t,n){n.on("entity.beforeDelete",function(){this.fire("initProgress")},this),n.on("entity.deleted",function(){t.service("navigator").back()},this),n.on("error",function(e){this.fire("application.error",e.data)},this)},"bus view.dom.ready:last + controller.app.host:last + innerHostRendered + controller.appContent.rendered":function(e,t,n){n.fire("view.dom.ready",t)},"bus view.dom.ready:last + controller.app.page:last + innerPageRendered + controller.appContent.rendered":function(e,t,n){n.fire("view.dom.ready",t)},"bus controller.app.host:last > destroy":function(e,t){t.fire("destroy")},"bus controller.app.page:last > destroy":function(e,t){t.fire("destroy")},"bus controller.app.page:last > application.exit":function(e,t){t.fire("destroy"),taus.track({action:"close entity",tags:["entity","close entity"]})},_getInitConfig:function(t,n,a){var r=e.defaults({context:{configurator:t}},a);return r.turnOffLoadingIndicator=n.turnOffLoadingIndicator||!1,r.comet=n.comet||{},r},_appendHost:function(e,t){e.empty().append(t)},_appendPage:function(e,t,n){t.find("[role=main]").append(n)},addListeners:function(t,n){return t.on("afterRender",e.bind(function(e){this.fire("inner"+n+"Rendered",e.data)},this),this),t}})});