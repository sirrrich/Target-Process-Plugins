define(["tau/core/extension.base"],function(e){return e.extend({"bus afterRender":function(e,n){var t=n.element,i=function(e){var n=t.find(".i-role-results .tau-btn");n.removeClass("tau-checked"),this.fire("result.changed",e)}.bind(this);t.find(".i-role-results").on("click",".tau-btn",function(){var e=$(this),n=!e.hasClass("tau-checked"),t=n?e.data("result"):null;i(t),n&&e.addClass("tau-checked")}),t.find(".i-role-skip").click(function(){i("skip")})}})});