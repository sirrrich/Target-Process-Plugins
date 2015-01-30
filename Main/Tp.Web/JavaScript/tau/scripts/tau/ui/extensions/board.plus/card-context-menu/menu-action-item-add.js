define(["jQuery","Underscore","tau/ui/extensions/board.plus/card-context-menu/menu-action-item-base","tau/configurations/factory.container.config","tau/models/page.entity/entity.context.factory"],function(t,e,n,o,i){return n.extend({name:"Add",className:"i-role-card-context-menu-add",init:function(t){this._super(t);var e=t.configurator.getFeaturesService().isEnabled("hide.noProject");this._optionsToHideByEntityType={release:[],teamiteration:e?["team"]:["project","team"]}},getDisabledEntityTypes:function(){return["user","impediment","team","build","testcase","projectmember"]},itemClickCallback:function(t){var n=this.getBubbleCreator(t);i.create(n.entity,this.settings.configurator).done(e.bind(function(t){this.createBubble(n,t)},this))},createBubble:function(e,n){var i=o.getConfigByType(e.entity.entityType.name),a=i.prototype.getEntityQuickAddOptions(),r=e.entity.entityType.name.toLowerCase(),c=this._optionsToHideByEntityType[r]||["project","team"],s={alignTo:e.getAlignTo.bind(e,this),appendMethod:"appendTo",stackName:"quickAddGeneral",className:"tau-quick-add-dialog-general",hideOnScroll:!1,dontCloseSelectors:["#ui-datepicker-div"],context:n,onPositionConfig:function(n){n.my="center top",n.at="center bottom",n.collision="fit none";var o=t(e.cardSelector);if(0===o.length)return n;var i=o.offset().top,a=e.getTarget().tauBubble("widget").height();if(i>a){var r=t(window).height()-i-o.height();a>r&&(n.my="center bottom",n.at="center top")}return n},onArrowPositionConfig:function(t,e){return t.collision="fit none","bottom"===e?(t.my="center bottom",t.at="center top"):(t.my="center top",t.at="center bottom"),t},componentsConfig:{components:[{name:"entity quick add",type:"entity.quickAdd",options:a,useGlobalEntityViewer:!0,optionsToHide:c}]}};e.createBubble(s)}})});