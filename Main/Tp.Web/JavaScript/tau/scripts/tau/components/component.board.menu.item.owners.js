define(["require","tau/components/component.creator","tau/components/board.menu.item.owners/extensions/menu.item.owners.extension","template!tau/components/board.menu.item.owners/templates/menu.item.owners.template"],function(e){var n=e("tau/components/component.creator"),t=e("tau/components/board.menu.item.owners/extensions/menu.item.owners.extension"),o=e("template!tau/components/board.menu.item.owners/templates/menu.item.owners.template");return{create:function(e){var m={extensions:[t],template:o};return n.create(m,e)}}});