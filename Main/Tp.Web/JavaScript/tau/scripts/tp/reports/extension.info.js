define(["Underscore","tau/components/extensions/component.extension.base"],function(e,t){return t.extend({"bus view.dom.ready":function(t,n){var s=n.$element;s.find(".i-role-toggle-settings").on("click",e.bind(function(e){$(e.currentTarget).toggleClass("tau-checked");var t=$(e.currentTarget).hasClass("tau-checked");s.find(".i-role-settings").toggleClass("tau-hide",!t),this.fire("saveSetting",{isShowSettings:t})},this)),s.find(".i-role-toggle-legend").tauBubble({className:"tau-"+this.config.className+"-legend",stackName:"legend",onShow:function(){this.$target.addClass("tau-checked")},onHide:function(){this.$target.removeClass("tau-checked")},content:n.legend})}})});