define(["jQuery","tau/core/class","tau/components/react/mixins/sortable.axis.x"],function(t,e,r){var o=e.mixin(r,{getDefaultSortableOptions:function(){return{sortableRootSelector:".i-role-views-workflow-container",sortableItemSelector:"div[data-sortable=true]",sortableHandleSelector:null,onReorderStart:null,onReorderEnd:null,onReorder:null}},_getSortableText:function(){return this.sortState.$element.find(".tau-in-text").text()},sortStart:function(t){this._super(t),t.defaultPrevented||this.sortableOptions.onReorderStart(this.sortState.key)},_overElementChanged:function(t){this._super(t);var e=this.sortState.key,r=this._getSortableKey(t);e!==r&&this.sortableOptions.onReorder(e,r,this.sortState.placeAfter)},sortEnd:function(){this.sortableOptions.onReorderEnd(this.sortState.key,this._isDropFinished),this._super()},_sortItems:t.noop});return o});