define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(e,t,i){return i.extend({"bus permissionsReady + afterRender":function(e,t,i){t.editable&&(this.$editor=i.element.find(".cf-editor"),this.$editor.textEditor(this._getWidgetConfig(i.data)),this._bindValueChanging())},_bindValueChanging:function(){setTimeout(function(){this.$editor.data("textEditor").onFocus()}.bind(this),0)},_getWidgetConfig:function(e){return{restoreText:!1,onSave:function(t){this.fire("save",{customFields:[{name:e.name,type:e.type,value:t}]})}.bind(this),onEditEnd:function(){this.fire("afterSave")}.bind(this)}},"bus validate":function(){this.$editor.removeClass("error")},"bus validationFailed":function(){this.$editor.addClass("error")}})});