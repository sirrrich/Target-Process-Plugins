define(["require","tau/core/extension.base"],function(t){var e=t("tau/core/extension.base"),i="Follow this entity and receive email notifications with all important updates",o="Stop following this entity and receiving email notifications of its updates";return e.extend({"bus afterInit":function(){this.fire("dataBind"),this.isEmailNotificationsDisabled=!1},"bus afterInit + afterRender + followButton.config.ready":function(t,e,i,o){var n=i.element.filter(".i-role-views-followButton"),a=n.next().tauBubble({content:"<span>Email Notifications are disabled in System Settings</span>",zIndex:999,template:['<div class="tau-bubble-board">','<div class="tau-bubble-board__arrow" role="arrow"></div>','<div class="tau-bubble-board__inner tau-container" role="content"></div>',"</div>"].join(""),className:"tau-bubble-tooltip",showEvent:"mouseenter",hideEvent:"mouseleave mousedown",mode:"tooltip",stackName:"tooltip",delay:500}),l=o.model;e.config.store.freeze(!0).done(this.safeCallback(function(t){o.configurator.getGlobalSettingsService().getGlobalSettings().then(function(t){t.IsEmailNotificationsEnabled||(this.isEmailNotificationsDisabled=!0,this._setWarningButton(n)),this._activateButton(l,n,a)}.bind(this)),t.unfreeze()}))},_setWarningButton:function(t){t.removeClass("hidden").addClass("disabled")},_activateButton:function(t,e,i){t.isFollowing().done(function(o){var n=o;this._toggleFollow(e,i,n),e.toggleClass("active",n).removeClass("hidden"),e.on("click",function(){this._toggleFollow(e,i,!n,!0),t.toggleFollow().then(function(){n=!n}).fail(function(){e.toggleClass("active",n),e.removeClass("cancel-hover-style")})}.bind(this))}.bind(this))},_toggleFollow:function(t,e,n,a){n?(t.addClass("active"),t.attr("title",o),a&&(t.addClass("cancel-hover-style"),t.one("mouseleave",function(){t.removeClass("cancel-hover-style")}),this.isEmailNotificationsDisabled&&t.next().tauBubble("show"))):(t.attr("title",i),t.removeClass("active cancel-hover-style"))}})});