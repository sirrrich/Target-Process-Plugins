define(["require","tau/components/component.creator","tau/models/customField/model.customField.dropdown.editor","tau/ui/extensions/choice/ui.extension.choice.editable","tau/ui/extensions/bubble/ui.extension.bubble.listResizer","tau/ui/templates/choice/ui.template.choice.list.dropdown"],function(e){var t=e("tau/components/component.creator"),o=e("tau/models/customField/model.customField.dropdown.editor"),i=e("tau/ui/extensions/choice/ui.extension.choice.editable"),n=e("tau/ui/extensions/bubble/ui.extension.bubble.listResizer"),u=e("tau/ui/templates/choice/ui.template.choice.list.dropdown");return{create:function(e){var c={ModelType:o,extensions:[i,n],template:u};return e.allowToReset=!0,e.clearValueLabel="(no value)",t.create(c,e)}}});