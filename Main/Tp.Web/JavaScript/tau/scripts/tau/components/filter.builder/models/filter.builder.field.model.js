define(["require","Underscore","tau/core/class","./filter.builder.filter.model"],function(e){var i=e("Underscore"),t=e("tau/core/class"),r=e("./filter.builder.filter.model");return t.extend({init:function(e){this._onChanged=e.onChanged,this._deleteField=e.deleteField,this.fieldDefinition=e.fieldDefinition,this.getEditor=this.fieldDefinition.getEditor,this.fieldName=this.fieldDefinition.name,this.fieldLabel=this.fieldDefinition.label||this.fieldDefinition.name,this.fieldModelId=i.uniqueId(),this._filters=i.map(e.filterValues,this._createFilterModel,this)},getFilterModels:function(){return i.toArray(this._filters)},getCanAddNewFilter:function(){return this.fieldDefinition.canAddFilter(this.getCurrentFilterValues.bind(this))},addFilter:function(e){this._filters.push(this._createFilterModel(e)),this._onChanged()},removeFilter:function(e){var t=this._filters.length;this._filters=i.without(this._filters,e);var r=this._filters.length;return t===r?void console.error("Filter list did not contain the specified filter model, so it was not deleted",e):void this._removeFieldIfRequiredOrFireChanged()},removeAllFilters:function(){this._filters=[],this._removeFieldIfRequiredOrFireChanged()},_removeFieldIfRequiredOrFireChanged:function(){var e=this.fieldDefinition.getDefaultValue&&!this._filters.length;e?this._deleteField(this):this._onChanged()},hasFilters:function(){return this._filters.length>0},getCurrentFilterValues:function(){return i.map(this._filters,function(e){return e.getCurrentValue()})},_createFilterModel:function(e){return new r(e,this.fieldDefinition,this._onChanged)}})});