define(["libs/jquery/jquery","libs/jquery/jquery.caret"],function(e){e.fn.toggleFilter=function(i){var t=e.extend({expandedClass:"boardsettings-filter--show",additionalClass:"",filterOnClass:"boardsettings-filter--on",defaultExpand:!1},i),l=function(e){var i=e.find(".i-role-useFilter"),l=i.prop("checked");e.toggleClass(t.expandedClass,l),e.find(".i-role-filter-toggle").toggleClass("tau-checked",l);var n=t.filterOnClass+" i-role-filter-control_on",r=e.find(".i-role-filter-input");e.toggleClass(n,l&&!!r.val())};if("refresh"===i)return this.each(function(){l(e(this))}),this;if(this.addClass(t.additionalClass),t.defaultExpand){var n=e(this);n.find(".i-role-useFilter").prop("checked",!0),l(n)}return this.each(function(){var i=e(this),t=i.find(".i-role-filter-input"),n=i.find(".i-role-useFilter");l(i),t.on("clear autocompletechange",function(){l(i)}),n.on("click",function(){l(i),t.val()&&t.trigger("_change")}),i.on("click",".i-role-filter-toggle",function(){n.trigger("click")})}),this}});