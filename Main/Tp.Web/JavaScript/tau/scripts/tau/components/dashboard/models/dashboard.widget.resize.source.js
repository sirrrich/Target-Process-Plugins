define(["require","Underscore","tau/core/class"],function(e){var i=e("Underscore"),n=e("tau/core/class");return n.extend({init:function(){this._resizeEvent=i.Callbacks()},onResize:function(e,i){return this._resizeEvent.add(e,i),{destroy:function(){this._resizeEvent.remove(e,i)}.bind(this)}},triggerResize:function(){this._resizeEvent.fire()},destroy:function(){this._resizeEvent.removeAll()}})});