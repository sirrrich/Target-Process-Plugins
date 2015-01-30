define(["require","Underscore","react","./list.component.renderer","./linked/new.list.linked.widget.template","jsx!../shared/settings.container.view","jsx!./page.size.selector.view","jsx!./dsl.filter.view"],function(e){var i=e("Underscore"),t=e("react"),n=e("./list.component.renderer"),r=e("./linked/new.list.linked.widget.template"),s=e("jsx!../shared/settings.container.view"),l=e("jsx!./page.size.selector.view"),o=e("jsx!./dsl.filter.view"),c=t.createClass({displayName:"GenericListSettingsView",render:function(){return t.createElement(s,null,t.createElement(o,{ref:"dslFilter",configurator:this.props.configurator,listDefinition:this.props.listDefinition}),t.createElement(l,{ref:"pageSizeSelector",initialPageSize:this.props.listDefinition.cellPaging.onPage}))}});return{create:function(e,r){var s=this,l=i.deepClone(r.listDefinition);return{id:r.id,name:r.name,description:r.description,previewSrc:r.previewSrc||"../img/widgets/lists-list.png",tags:r.tags,defaultSettings:{pageSize:l.cellPaging.onPage,filter:l.cells.filter},insert:function(i,t){return n.insertListComponent({placeholder:i,listDefinition:s._constructDefinition(l,t),configurator:e})},insertSettings:function(i,n){var r=t.render(t.createElement(c,{configurator:e,listDefinition:s._constructDefinition(l,n)}),i);return function(){return{pageSize:r.refs.pageSizeSelector.getSelectedPageSize(),filter:r.refs.dslFilter.getFilter()}}}}},_constructDefinition:function(e,t){return e=i.deepClone(e),t=i.pick(t,"pageSize","filter"),r.mergeWidgetSettingsIntoListDefinition(e,t),t.filter&&(e.cells.useFilter=!0,e.cells.filter=t.filter),e}}});