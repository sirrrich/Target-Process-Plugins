define(["Underscore","tau/models/board.editor.customize/model.board.editor.customize.editor","tau/ui/ui.templateFactory","tau/ui/extensions/board.plus/ui.board.plus.utils","tau/utils/utils.customFields.list"],function(e,t,i,a,r){return t.extend({refreshLayout:function(t,s){s.configurator=t;var n=i.getTermProcessor(),o=a.orderListUnits(s.cardLayout);s.cardLayout=e.map(o,function(t){var i=e.clone(t.unit),a=e.intersection(s.types,e.chain(i.settings).pluck("types").flatten().value()),o=r.getListHeader(void 0!==i.header?i.header:i.name);return i.settings={classes:["dnd_source","maximized","list"],isDesignMode:!0,metaData:{id:t.id,rank:t.rank,title:i.name,header:o,alignment:t.alignment,typesNames:e.map(a,function(e){return{"long":n.getTerm(e,"names"),"short":n.getTerm(e,"iconSmall"),typeId:e}}),showTypes:s.types.length>a.length}},t.unit=i,t}),this.fire("refreshData",s)}})});