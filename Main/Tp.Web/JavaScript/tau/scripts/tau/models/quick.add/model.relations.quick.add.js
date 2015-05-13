define(["Underscore","jQuery","tau/models/quick.add/model.board.general.quick.add","tau/core/termProcessor"],function(e,t,n,i){return n.extend({processAddButtonAction:function(t,n,i,o){t.addAction=e.findWhere(t.action.fixed.items,{type:"AddAction"});var s=this.getProcessedTypes(i,t.addAction.data.types),a=this.getDataItemTemplateParam(t),d={$set:e.extend(e.clone(a),{dataItemTypes:e.pluck(s,"name")})};n.dataTemplates(d).then(function(e){o.resolve({slice:n,types:s,dataTemplates:e.data,action:t.action,viewMode:this.getViewMode(),isGeneralAdd:!0})}.bind(this))},getDataTemplates:function(e,n,i){return t.Deferred().resolve({data:i.dataTemplates}).promise()},getProcessedTypes:function(t,n){var o=new i(t.context.getTerms());return e.map(n,function(e){return{name:e.name,title:o.resolve(e.name,e.title)}}.bind(this))},getTypes:function(){return e.without(this._super(),"user","team")},getViewMode:function(){return"board"},getDefinition:function(t){var n=e.extend(this._super(t),this._getXAxisDefinition());return n.global.acid=t,n.global.entityId=this.config.context.entity.id,n},getSingleCellSliceDefinition:function(t,n){return e.extend(this._super(t,n),this._getXAxisDefinition())},_getXAxisDefinition:function(){return{x:{types:[this._getAxisNameForDependencyType()]}}},_getAxisNameForDependencyType:function(){return"slave"==this.config.dependencyType?"inboundrelations":"outboundrelations"},doAdd:function(e,t,n){n.action.x=this.config.context.entity.id,n.viewMode=this.getViewMode(),this._super(e,t,n)},buildReadyToAddSlice:function(e,t){var n=this._super(e,t);return n.config.base64="false",n}})});