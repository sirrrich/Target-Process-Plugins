define(["Underscore","jQuery","template!tau/ui/templates/board.context.selector/ui.template.board.context.selector.lists.program","template!tau/ui/templates/board.context.selector/ui.template.board.context.selector.program","tau/core/view-base"],function(e,t,r,o,n){var i=n.extend({init:function(e){this._super(e),this.config.template=r;var t=this.config.context.configurator.getFeaturesService();this._hideNoProject=t.isEnabled("hide.noProject")},"bus program.saved":function(e,t){this.onProgramSaved(t)},"bus program.removed":function(e,t){this.onProgramRemoved(t)},onProgramRemoved:function(e){var t=this._$programById(e.id);t.replaceWith(t.find(".i-role-item")),t.remove()},onProgramSaved:function(e){e.projects.forEach(function(e){t(this.element).find("#content_filter_project_"+e.id).closest("li").remove()},this),this._$programById(e.id).length?this._updateProgram(e):this._addProgram(e)},_$programById:function(e){return t(".i-role-program",this.element).filter(function(){return t(".i-role-select-program :checkbox",this).val()==e})},_$renderProgram:function(e){var t=o.render(e);return this._onProgramAdded(t),t},_addProgram:function(r){var o=t(this.element).find(".tau-projects .i-role-list"),n=this._$renderProgram(r).insertAt(o,1).addClass("tau-added");e.delay(function(){n.removeClass("tau-added")},1500),this.element.find(".tau-projects").removeClass("tau-managed-category_isempty_true")},_updateProgram:function(e){this._$programById(e.id).replaceWith(this._$renderProgram(e))},doRender:function(t,r,o){if(o)throw new Error("Template parameter is forbidden in ContextSelectorView.doRender");var n=e.deepClone(t);n.minProjectsCount=this._hideNoProject?0:1,n.isShowButtonVisible=this._hideNoProject?t.projects.length>0:t.projects.length>1||t.teams.length>1,this._super(n,r,o),this._afterRender()},bindTemplate:function(e,t){return this._rejectComments(this._super(e,t))},_rejectComments:function(e){return e.filter("*")},_afterRender:function(){var e=this.element.find(".tau-projects");e.on("synccheckboxes",function(){e.find(".i-role-program").syncedCheckbox("syncUp")
}),this._onProgramAdded(e.find(".i-role-program"))},_onProgramAdded:function(e){e.syncedCheckbox({sourceSelector:".i-role-select-program :checkbox",targetSelector:".i-role-item :checkbox"})}});return i});