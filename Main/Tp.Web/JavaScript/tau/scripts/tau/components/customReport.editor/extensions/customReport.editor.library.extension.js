define(["require","tau/core/extension.base","Underscore","jQuery","jsx!./../views/customReport.editor.library.item.view","../customReport.library.registry"],function(e){var t=e("tau/core/extension.base"),r=e("Underscore"),i=e("jQuery"),s=e("jsx!./../views/customReport.editor.library.item.view"),n=e("../customReport.library.registry");return t.extend({"bus configurator.ready + afterRender":function(e,t,r){t.service("report.rendering").onFinish(function(){this._enable(i(r.element))}.bind(this))},"bus boardSettings.ready + afterRender":function(e,t,o){var a=r.extend({selectListItem:function(e){this._applyReport(i(o.element),t.boardSettings,e)}.bind(this),emptyMessage:"No reports found",searchPlaceholder:"Search reports",ItemComponent:s,templateListClass:"tau-board-settings-chart"},n);this.fire("props.ready",a)},_applyReport:function(e,t,i){if(!this._disabled){this._disable(e);var s=r.deepClone(i.reportSettings);s.tick=(new Date).getTime(),t.set({set:{reportSettings:s,name:i.name}})}},_enable:function(e){e.find(".tau-board-settings__overlay").remove(),this._disabled=!1},_disable:function(e){e.append('<div class="tau-board-settings__overlay"></div>'),this._disabled=!0}})});