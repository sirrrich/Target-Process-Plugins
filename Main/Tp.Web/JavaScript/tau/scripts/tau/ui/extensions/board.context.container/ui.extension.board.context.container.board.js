define(["jQuery","tau/core/extension.base"],function(t,e){return e.extend({SUBMIT_BUTTON_TEXT:"Set","bus afterRender + childrenBuses.ready + boardSettings.ready":function(t,e,i,n){var o=i[0],s=i[1],d=e.element.find(".i-role-output");this._bs=n.boardSettings,s.fire("$trigger.ready",d),o.on("refresh",function(){s.fire("hide",{silent:!0})}),d.on("click",".tau-context:not(:disabled)",function(){d.trigger("toggleContextSelector")}),d.on("click",".tau-remove-selected-context:not(:disabled)",function(){this._toggleNotSpecifiedState(d,!0),n.boardSettings.set({set:{acid:""}})}.bind(this)),s.on("show.completed",function(t,e){e.find("button.tau-teams-projects-submit").text(this.SUBMIT_BUTTON_TEXT),e.find(".i-role-process-setup-link").remove()}.bind(this)),this._bs.bind({fields:["acid"],listener:this,callback:function(t){""!==t.acid&&this._toggleNotSpecifiedState(d,!1)}}),s.on("show",function(){d.find(".tau-context").addClass("tau-checked")}),s.on("hide",function(){d.find(".tau-context").removeClass("tau-checked")})},_toggleNotSpecifiedState:function(t,e){t.find(".tau-line-group").toggleClass("hidden",!e),t.find(".tau-inline-group").toggleClass("hidden",e)},"bus destroy":function(){this._bs&&this._bs.unbind(this),this._super()}})});