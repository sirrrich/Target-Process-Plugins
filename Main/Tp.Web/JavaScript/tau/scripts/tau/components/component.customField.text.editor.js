define(["require","tau/components/component.creator","tau/models/customField/model.customField","tau/models/customField/model.customField.text.editable","tau/components/extensions/customField/extension.customField.text.editor","template!tau/ui/templates/customField/ui.template.customField.text.editor"],function(e){var t=e("tau/components/component.creator"),o=e("tau/models/customField/model.customField"),m=e("tau/models/customField/model.customField.text.editable"),i=e("tau/components/extensions/customField/extension.customField.text.editor"),u=e("template!tau/ui/templates/customField/ui.template.customField.text.editor");return{create:function(e){var l={ModelType:o,template:u,extensions:[m,i]};return t.create(l,e)}}});