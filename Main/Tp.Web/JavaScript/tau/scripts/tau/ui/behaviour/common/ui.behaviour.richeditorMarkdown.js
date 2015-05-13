define(["require","Underscore","jQuery","template!./markdown.editor.template","tau/utils/utils.htmlConverter","tau/utils/utils.constants","./ui.behaviour.richeditor","vendors/jquery-textrange/jquery-textrange"],function(t){var e=t("Underscore"),i=t("jQuery"),r=t("template!./markdown.editor.template"),s=t("tau/utils/utils.htmlConverter"),o=t("tau/utils/utils.constants").get("markdownMarker");t("./ui.behaviour.richeditor"),t("vendors/jquery-textrange/jquery-textrange");var n=function(t,e){return e.disableIfEmpty?Boolean(t):!0};i.widget("ui.richeditorMarkdown",i.ui.richeditor,{getText:function(){var t=this.$textarea.val();return t?o+t:t},setText:function(t){this.$textarea.val(t)},_showPreview:function(){this._$write.addClass("tau-hide"),this._$preview.removeClass("tau-hide").html(s.fromSourceToHtml(this.getText()))},_showWrite:function(){this._$preview.addClass("tau-hide"),this._$write.removeClass("tau-hide"),this.$textarea.focus()},show:function(){if(!this._visible){this._visible=!0;var t=this.options,s=t.saveAction,a=t.cancelAction,h=(t.rawText||"").replace(o,""),d=r.render({saveOptions:s,cancelOptions:a,text:h});this.$tools=d.find(".i-role-tools");var u=this.$tools;if(this.$status=u.find(".i-role-statusmessage"),this.$textarea=d.find(".i-role-textarea"),this.$editor=d,this._$preview=d.find(".i-role-preview"),this._$write=d.find(".i-role-write"),this.$editor.on("click",".i-role-tab-item",function(t){var e=i(t.currentTarget);this.$editor.find(".i-role-tab-item").removeClass("active"),e.addClass("active"),this["_show"+e.data("item")]()}.bind(this)),this.$target.hide().after(d),this.$textarea.on("input",function(){this._trigger("change")}.bind(this)),this.$textarea.on("keydown",function(e){if(e.ctrlKey&&e.keyCode===i.ui.keyCode.ENTER){var r=this.getText();n(r,s)&&t.onSave(r)}}.bind(this)),u.on("click.richeditor",".i-role-actionsave",function(){t.onSave(this.getText())}.bind(this)),u.on("click.richeditor",".i-role-actioncancel",function(){t.onCancel(this.getText())}.bind(this)),s.available&&s.disableIfEmpty){var l=u.find(".i-role-actionsave");
l.prop("disabled",!this.getText().length),this.$textarea.on("input",e.debounce(function(){l.prop("disabled",!this.getText().length)}.bind(this),500))}t.onCreate(this),this._trigger("create"),this.$textarea.textrange("setcursor",h.length),e.each(this.options.plugins,function(t){t.init(this.$editor)},this)}},_hideEditor:function(){this.$target.show(),this.$editor.remove()},destroy:function(){e.each(this.options.plugins,function(t){t.destroy&&t.destroy()},this),this._super()},loadScripts:function(){}})});