define(["require","tau/core/class","jQuery","Underscore"],function(e){var n=e("tau/core/class"),t=e("jQuery"),o=e("Underscore");return n.extend({_getMenuSettings:t.noop,init:function(e){this.config=e},build:function(e){var n=this._getMenuSettings();return n?this._buildMenu(n,e):this._buildNoMenu(e)},_buildMenu:function(e,n){var t={handlers:{},context:n.context,onShow:function(e){e.$menu.addClass("tau-newlist-context-menu")},showSelectors:e.showSelectors,skipShowSelectors:e.skipShowSelectors};return o.each(e.items,function(e){var u,i;o.isFunction(e)?(u=new e(n),i=u.name):(u=e,i=e),o.contains(o.keys(t.handlers),i)&&(i=o.uniqueId(i+"_")),t.handlers[i]=u}),t},_buildNoMenu:function(e){return{showSelectors:[".tau-board-list-view__inner .i-role-card"],skipShowSelectors:[".tau-id",".tau-bubble *"],context:e.context,build:function(){return!1}}}})});