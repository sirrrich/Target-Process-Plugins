define(["require","jQuery","tau/core/extension.base","../controllers/controller.process.workflow","../models/setup.workflow.model","../services/longTaskRunner.service","../services/setup.workflow.service"],function(e){"use strict";var r=e("jQuery"),t=e("tau/core/extension.base"),o=e("../controllers/controller.process.workflow"),n=e("../models/setup.workflow.model"),s=e("../services/longTaskRunner.service"),i=e("../services/setup.workflow.service");return t.extend({"bus afterInit":function(e,r){this._configurator=r.config.context.configurator,this.fire("dataBind"),this._configurator.getTitleManager().set("Workflow")},"bus afterInit:last + afterRender":function(e,r,t){var c=r.config,l=c.context.configurator,a=new i(l.getStore(),l.getStore2(),l.service("errorBar"),new s),u=new n(a,c.processId,c.entityType,l.getLoggedUser().isProcessAdministrator),d=l.getFeaturesService().isEnabled("process.sub.workflows");this._controller=new o(u,l.getUrlBuilder(),this.openEntityViewAction.bind(this)),this._controller.render(t.element[0],{canAddTeamWorkflow:d}).done(this.fire.bind(this,"setup.workflow.rendered",t.element))},"bus destroy":function(){this._controller.destroy(),this._controller=null},openEntityViewAction:function(e,t){var o=r("body").tauProgressIndicator().tauProgressIndicator("show");this._configurator.getEntityViewService().showEntityViewSilent({entityId:e,entityType:t}).always(function(){o.tauProgressIndicator("hide")})}})});