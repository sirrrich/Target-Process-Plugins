define(["Underscore","tau/components/component.creator","tau/models/customField/model.customField.row","tau/ui/extensions/customField/ui.extension.customField.required","tau/models/customField/model.customField.url.editable.row","tau/components/extensions/customField/extension.customField.url.editable","tau/ui/extensions/customField/ui.extension.customField.editable","tau/components/extensions/bubble/extension.bubble.creator.direct","tau/components/extensions/component.creator.extension","tau/ui/templates/customField/ui.template.customField.url"],function(e,t,o,n,i,u,s,c,l,m){return{create:function(e){var r={extensions:[o,n,i,u,s,l,{type:c,config:{popupEditorContainer:[{target:"tr",alignTo:".ui-customfield__value",componentsConfig:{components:[{type:"customField.url.editor"}]}}]}}],template:m};return t.create(r,e)}}});