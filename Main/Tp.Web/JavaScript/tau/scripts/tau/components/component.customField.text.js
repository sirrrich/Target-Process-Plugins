define(["tau/components/component.creator","tau/models/customField/model.customField.row","tau/models/customField/model.customField.text.editable","tau/ui/extensions/customField/ui.extension.customField.required","tau/components/extensions/customField/extension.customField.text.editable","tau/ui/extensions/customField/ui.extension.customField.editable","tau/ui/templates/customField/ui.template.customField.text"],function(e,t,o,i,u,s,n){return{create:function(l){var d={ModelType:t,template:n,extensions:[o,i,u,s]};return e.create(d,l)}}});