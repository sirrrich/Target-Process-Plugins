define(["require","tau/core/extension.base","libs/react/react-ex","jsx!./../views/terms.view"],function(e){var r=e("tau/core/extension.base"),t=e("libs/react/react-ex"),i=e("jsx!./../views/terms.view");return r.extend({"bus afterInit":function(e,r){this.fire("dataBind"),r.config.context.configurator.getTitleManager().set("Terms")},"bus afterRender + terms.config.ready":function(e,r,s){var n=t.resolveClass(s.serviceScope,i),a=r.element.filter(".i-role-views-terms-container"),c=t.renderClass(n,{},a[0]);this.fire("_terms.view",c)}})});