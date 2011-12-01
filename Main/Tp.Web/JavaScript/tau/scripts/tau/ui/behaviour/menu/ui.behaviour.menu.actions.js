define(["Underscore","jQuery","tau/core/tau-widget"],function(a,b,c){c.widget("ui.behaviourMenuActions",{_create:function(){this.init()},init:function(){var a=b(this.element);this.$element=a,this.$popup=a.find(".ui-menu__popup");var c=this;this.$items=this.$element.find(".ui-menu__item-action"),this.currentIndex=-1,c.isOpened=!1,this.$element.find(".ui-menu__trigger").click(function(a){}),this._bindEvents()},show:function(){var a=this;a.$popup.slideToggle(100,function(){a.isOpened=!a.isOpened,a.isOpened?a._mapKeyboard():a._unmapKeyboard()})},_bindEvents:function(){var a=this;a.$items.hover(function(){a.$items.not(this).removeClass("ui-menu__item-action-hover"),b(this).addClass("ui-menu__item-action-hover"),a.currentIndex=a.$items.index(this)},function(){b(this).removeClass("ui-menu__item-action-hover")}),b("body").click(function(c){a.isOpened&&a.close();!!b(c.target).parents(".ui-menu:first").length})},_mapKeyboard:function(){this.mapper=a.bind(this._keyboardEvents,this),b(document).bind("keydown",this.mapper)},_unmapKeyboard:function(){b(document).unbind("keydown",this.mapper)},_keyboardEvents:function(a){var c=this;switch(a.keyCode){case b.ui.keyCode.ESCAPE:c.close();break;case b.ui.keyCode.DOWN:c.currentIndex++,c.currentIndex=c.currentIndex>=c.$items.length?0:c.currentIndex,c.$items.removeClass("ui-menu__item-action-hover"),c.$items.eq(c.currentIndex).addClass("ui-menu__item-action-hover");break;case b.ui.keyCode.UP:c.currentIndex--,c.currentIndex=c.currentIndex<0?c.$items.length-1:c.currentIndex,c.$items.removeClass("ui-menu__item-action-hover"),c.$items.eq(c.currentIndex).addClass("ui-menu__item-action-hover");break;case b.ui.keyCode.ENTER:var d=c.$items.filter(".ui-menu__item-action-hover");d&&d.trigger("click")}},close:function(){var a=this;this.$popup.slideUp(100,function(){a.isOpened=!1,a._unmapKeyboard()})},destroy:function(){}})})