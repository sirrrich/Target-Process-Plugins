define(["tau/core/model.editable.base","tau/utils/utils.htmlConverter","tau/utils/utils.jsonSchema"],function(e,t,i){var a=e.extend({category:"edit",name:"model.property.richtext.editable",schema:null,init:function(e){this._super.apply(this,arguments);var t={type:"object",properties:{}};this.fieldName=e.fieldName,t.properties[this.fieldName]={optional:!0,empty:!0,type:"string"},this.schema=i.Schema.create(t)},"bus dataBind":function(){this.bus.fire("permissionsReady",{editable:this.config.editable===!0||void 0===this.config.editable,deletable:!0})},"bus beforeSave":function(e){var i=e.data.cmd.$set;i[this.fieldName]=t.fromHtmlToSource(i[this.fieldName])},"bus validate":function(e){var t=e.data,i=t.cmd.$set;t.validation=this.schema.validate(i)}});return a});