define(["Underscore","tau/core/class","tau/slice/slice.space.cached","tau/slice/url.resolver"],function(e,n,t,i){return n.extend({init:function(e){this.defaults=e||{}},create:function(n){e.defaults(n,this.defaults);var s=t.extend({isUndefinedAxis:function(e){return"x"===e?!1:this._super(e)},milestones:function(e){return this.resolveDeferred("milestones",e)}});return new s(n,new i({prefix:"timeline"}))}})});