define(["require","Underscore","tau/ui/extensions/entity.quickAddTrigger/ui.extension.entity.base.quickAddTrigger","tau/configurations/converters/converter.context","tau/configurations/factory.container.config"],function(t){var e=t("Underscore"),i=t("tau/ui/extensions/entity.quickAddTrigger/ui.extension.entity.base.quickAddTrigger"),n=t("tau/configurations/converters/converter.context"),o=t("tau/configurations/factory.container.config");return i.extend({"bus beforeInit":function(t,i){this._super(t,i),this.options=e.defaults(this.options,{external:!1,items:[]}),this.options.external&&(this.options.items=o.getEntityConfigObject(i.config).getEntityQuickAddOptions().items);var r=i.config.context;this.options.items=n.convert(this.options.items,e.pluck(r.getPractices(),"name"),r.getEdition());var s=i.config.context.configurator.getFeaturesService().isEnabled("hide.noProject");this._optionsToHideByEntityType={release:[],teamiteration:s?["team"]:["project","team"]},this.fire("dataBind",{isEmpty:0==this.options.items.length})},"bus afterRender":function(t,e){var i=e.element;if(i.length){var n=e.view.config.context.entity.entityType.name.toLowerCase(),o=this._optionsToHideByEntityType[n]||["project","team"],r=this._createQuickAddConfig(i,"quickAddGeneral",[{name:"entity quick add",type:"entity.quickAdd",options:this.options,optionsToHide:o}]);this.fire("initBubble",r)}}})});