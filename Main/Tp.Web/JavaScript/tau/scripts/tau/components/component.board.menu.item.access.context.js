define(["require","tau/components/component.creator","template!tau/ui/templates/board.context.selector/ui.template.board.context.selector.lists.program","tau/components/board.menu.item.access.context/menu.item.access.context.extension","tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.filter","tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.selection","tau/components/extensions/error/extension.errorBar"],function(e){var t=e("tau/components/component.creator"),o=e("template!tau/ui/templates/board.context.selector/ui.template.board.context.selector.lists.program"),n=e("tau/components/board.menu.item.access.context/menu.item.access.context.extension"),r=e("tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.filter"),s=e("tau/ui/extensions/board.context.selector/ui.extension.board.context.selector.selection"),c=e("tau/components/extensions/error/extension.errorBar");return{create:function(e){var a={extensions:[n,r,s,c],template:o};return t.create(a,e)}}});