define(["require","tau/components/component.creator","tau/components/extensions/component.creator.extension","tau/components/extensions/bubble/extension.bubble.creator","tau/components/entity.new.list/extension.entity.new.list.lookup.trigger"],function(e){var n=e("tau/components/component.creator"),t=e("tau/components/extensions/component.creator.extension"),o=e("tau/components/extensions/bubble/extension.bubble.creator"),s=e("tau/components/entity.new.list/extension.entity.new.list.lookup.trigger");return{create:function(e){var r={extensions:[t,o,s]};return n.create(r,e)}}});