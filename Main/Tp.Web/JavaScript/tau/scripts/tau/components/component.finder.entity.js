define(["tau/components/component.factory","tau/models/finder.entity/model.finder.entity.data","tau/models/finder.entity/model.finder.entity.data.relation","tau/models/finder.entity/model.finder.entity.data.user","tau/models/finder.entity/model.finder.entity.editable","tau/models/finder.entity/model.finder.entity.editable.property","tau/models/finder.entity/model.finder.entity.autocomplete","tau/models/finder.entity/model.finder.entity.help","tau/models/finder.entity/model.finder.entity.linkItem","tau/ui/extensions/finder.entity/ui.extension.finder.entity.list","tau/ui/extensions/finder.entity/ui.extension.finder.entity.filter","tau/ui/extensions/board.editor/ui.extension.board.editor.autocomplete","tau/ui/extensions/finder.entity/ui.extension.finder.entity.bubble","tau/ui/extensions/board.editor/ui.extension.board.editor.help","tau/components/extensions/error/extension.errorBar","tau/ui/extensions/board.plus/ui.extension.board.plus.errors","tau/ui/templates/finder.entity/ui.template.finder.entity","tau/ui/templates/finder.entity/ui.template.finder.entity.list.row","libs/jquery/jquery.placeholder","libs/jquery/jquery.tau.resetableInput"],function(e,t,i,n,r,a,d,o,l,u,s,m,f,y,p,b,x,c){return e.define(function(e){e.templateList=c;var D={relation:i,user:n,linkItem:l},j=e.allData&&e.allData.model?D[e.allData.model]||t:e.model||t,q={name:e.allData&&e.allData.name||"finder",extensions:[j,r,e.modelEditable||a,d,o,u,s,m,p,b,f,y],template:x};return q})});