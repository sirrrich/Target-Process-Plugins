define(["Underscore","jQuery","tau/core/class","tau/core/event","tau/utils/utils.routing/utils.routing.store.hash","tau/utils/utils.storage"],function(t,e,r,i,s,n){var o=r.extend({init:function(e){this.options=e,this.window=this.options.window||window,this.store=new s(this.options),this.referer=this.restoreReferer(),this._routeData={route:{},args:{}},this.routeChanged=t.Callbacks()},redirect:function(e){t.startsWith(e,"#")&&(e=this.window.location.href.split("#")[0]+e),this.window.open(e,"_self")},getUrl:function(){return this.store.getUrl()},setUrl:function(t){this.store.setUrl(t)},getReferer:function(){return this.referer},setReferer:function(t){this.referer=t,n.set("utils.routing.referer",this.referer)},restoreReferer:function(){return n.get("utils.routing.referer")},getLast:function(t){return n.get("utils.routing.last."+t)},setLast:function(t,e){n.set("utils.routing.last."+t,e)},setCurrentRoute:function(t){this._routeData=t,this.routeChanged.fire()},getCurrentRoute:function(){return this._routeData},destroy:function(){this.routeChanged.removeAll()}});return o});