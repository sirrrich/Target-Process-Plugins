define(["require","tau/core/class"],function(n){var t=n("tau/core/class"),r=t.extend({_constructConditionFor:function(n){return{has:function(t,r){var u=this;return{end:t.call(n,r),and:function(e,c){return u.has(function(){return t.call(n,r)&&e.call(n,c)})}}}}},check:function(n){return n?{then:function(n){return n}}:{then:function(){return null}}},when:function(n){return this._constructConditionFor(n)}});return new r});