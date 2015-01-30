define(["Underscore","tau/core/model-base"],function(t,e){var i=e.extend({onInit:function(){this.store.unbind(this),this.dataBind();var e=this.getCollectionFields();if(t.isArray(e)&&e.length>0){var i=this.config.context.entity.id,n=this.config.context.entity.entityType.name||"general",s=e.join("|");this.config.store.on({type:n,eventName:"afterSave",hasChanges:[s],filter:{id:i},listener:this},t.bind(this.entityChanged,this)),this._updateBadge()}},dataBind:function(){var t={text:this.config.text};this.config.cssClass&&(t.cssClass=this.config.cssClass),this.bus.fire("dataBind",t)},"bus entity.changed":function(){this.entityChanged()},_createCountFieldName:function(t){return t+"-count"},entityChanged:function(){var t=this.config.context.entity,e=t.entityType.name||"general";this.config.store.evictProperties(t.id,e,this.getCountFields()),this._updateBadge()},_updateBadge:function(){var t=this.config.context.entity,e=t.entityType.name,i=this.getCountFields(),n={id:t.id,fields:i};this.store.freeze(!0).done(this.safeCallback(function(t){this.store.get(e,n,this.safeCallback(this.badgeDataRetrieved)).done(),t.unfreeze()}))},badgeDataRetrieved:function(t){for(var e=t.data,i=this.getCountFields(),n=0,s=0;s<i.length;s++)n+=e[i[s]];this.fire("setBadgeData",n.toString())},getCollectionFields:function(){return t.reject(this.config.countFieldNames,function(t){return"id"==t})},getCountFields:function(){return t.map(this.getCollectionFields(),this._createCountFieldName)}});return i});