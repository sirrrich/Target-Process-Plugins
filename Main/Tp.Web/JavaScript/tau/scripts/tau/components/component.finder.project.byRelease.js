define(["require","tau/components/component.creator","tau/models/finder.project/model.finder.project.byRelease","tau/models/board.context.filter/model.board.context.filter.add.project","tau/models/finder.project/model.finder.project.byEntity.assign","tau/models/finder.project/providers/release.projects.command.factory","tau/ui/extensions/tabs/ui.extension.tabs.modern","tau/ui/extensions/finder.projectAndTeam/ui.extension.finder.projectAndTeam.main","tau/ui/extensions/finder.projectAndTeam/ui.extension.finder.projectAndTeam.attach","tau/ui/extensions/finder.project/ui.extension.finder.project.bubble","tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.filter","tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.selection","tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.add.project","tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.members-widget","tau/components/extensions/error/extension.errorBar","tau/ui/templates/finder.project/ui.template.finder.project.byRelease"],function(e){var t=e("tau/components/component.creator"),o=e("tau/models/finder.project/model.finder.project.byRelease"),n=e("tau/models/board.context.filter/model.board.context.filter.add.project"),r=e("tau/models/finder.project/model.finder.project.byEntity.assign"),i=e("tau/models/finder.project/providers/release.projects.command.factory"),s=e("tau/ui/extensions/tabs/ui.extension.tabs.modern"),a=e("tau/ui/extensions/finder.projectAndTeam/ui.extension.finder.projectAndTeam.main"),c=e("tau/ui/extensions/finder.projectAndTeam/ui.extension.finder.projectAndTeam.attach"),d=e("tau/ui/extensions/finder.project/ui.extension.finder.project.bubble"),u=e("tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.filter"),x=e("tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.selection"),l=e("tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.add.project"),p=e("tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.members-widget"),m=e("tau/components/extensions/error/extension.errorBar"),b=e("tau/ui/templates/finder.project/ui.template.finder.project.byRelease");
return{create:function(e){e["queue.bus"]=!0;var f={"queue.bus":!0,extensions:[o,n,{extType:r,args:[i]},s,a,c,d,u,x,l,p,m],template:b};return t.create(f,e)}}});