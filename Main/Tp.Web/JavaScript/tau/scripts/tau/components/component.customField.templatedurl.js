define(["Underscore","tau/components/component.creator","tau/models/customField/model.customField.row","tau/models/customField/model.customField.templatedurl.editable","tau/ui/extensions/customField/ui.extension.customField.editable","tau/ui/extensions/customField/ui.extension.customField.required","tau/components/extensions/customField/extension.customField.templatedurl.editable","tau/ui/templates/customField/ui.template.customField.templatedurl"],function(e,t,o,u,i,s,l,n){return{create:function(e){var d={extensions:[o,u,i,s,l],template:n};return t.create(d,e)}}});