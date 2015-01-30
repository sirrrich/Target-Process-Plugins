define(["Underscore","tau/core/model-base"],function(t,e){return e.extend({init:function(e){if(this._super(e),!e.propertyName)throw new Error("Property name was not configured");this.propertyName=e.propertyName,this.placeholderText=t.asString(e.placeholderText),this.listenedEntities={}},getEntityTypeName:function(){return this.config.context.entity.entityType.name},getEntityId:function(){return this.config.context.entity.id},listenOfPropertyChanged:function(){var t=this.config.context.entity.id;this.listenedEntities[t]||(this.listenedEntities[t]=!0,this.attachToChangePropertiesOfCurrentEntity(this.propertyName))},onInit:function(){this.listenOfPropertyChanged(),this.store.get(this.getEntityTypeName(),{id:this.getEntityId(),fields:this._getRequiredFields()}).done({success:this.safeCallback(this.onEntityRetrieved)})},_getRequiredFields:function(){return["id",this.propertyName]},onEntityRetrieved:function(t){var e=this.config?t[0].data[this.propertyName]||this.config.defaultText:"";this.fire("dataBind",{name:this.propertyName,text:e,output:e,placeholderText:this.placeholderText})}})});