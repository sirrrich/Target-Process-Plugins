define(["tau/components/component.creator","tau/views/view.composer","tau/components/extensions/component.creator.extension","tau/models/model.progressBar","tau/models/model.state.editable","tau/ui/extensions/progressBar/ui.extension.progressBar.updater","tau/ui/extensions/ui.extensions.onMarkAsDuplicate","tau/ui/templates/progressBar/ui.template.progressBar"],function(e,t,s,n,o,r,a,i){return{create:function(u,p){p=p||{};for(var m={ViewType:t,extensions:[p.model||n,o,s,r,a],template:p.template||i},c=u.extensions||[],l=0;l<c.length;l++)m.extensions.push(c[l]);return e.create(m,u)}}});