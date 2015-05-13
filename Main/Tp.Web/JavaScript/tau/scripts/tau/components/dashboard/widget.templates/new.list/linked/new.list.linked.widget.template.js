define(["require","Underscore","react","../../linked.view.base/linked.view.widget.factory","jsx!./settings.view","./selector.view","./selector.model","../list.component.renderer","tau/models/board.plus/nodata/nodata-checker"],function(e){function i(e,i,n,r){return c.isListConfigured(r)?d.insertListComponent({placeholder:e,configurator:n,listDefinition:t(r,i)}):s.insertError(e,u.MSG_LIST_IS_NOT_CONFIGURED)}function t(e,i){return e=n.deepClone(e),i=n.pick(i,"pageSize"),u.mergeWidgetSettingsIntoListDefinition(e,i),e}var n=e("Underscore"),r=e("react"),s=e("../../linked.view.base/linked.view.widget.factory"),o=e("jsx!./settings.view"),a=e("./selector.view"),l=e("./selector.model"),d=e("../list.component.renderer"),c=e("tau/models/board.plus/nodata/nodata-checker"),g=30,u=function(e){return{id:u.TEMPLATE_ID,name:"Any List View",description:"Add any existing list view to a dashboard",previewSrc:"../img/widgets/lists-any.png",tags:["Lists"],defaultSettings:{pageSize:10},insert:function(t,n,r){return s.insert({placeholder:t,settings:n,environment:r,configurator:e,SelectorModel:l,SelectorView:a,insertView:i.bind(null,t,n,e)})},insertSettings:function(i,t,n){var s=t.selectedViewId;return new l(e.getViewsMenuService()).getAllViews(s).then(function(a){var l=r.createElement(o,{views:a,viewUrl:e.getUrlBuilder().getRelativeBoardUrl(s,n.context.acid),initialSelectedViewId:s,initialPageSize:t.pageSize}),d=r.render(l,i);return function(){return d.getSelectedSettings()}})}}};return u.MSG_LIST_IS_NOT_CONFIGURED="List view is not configured. Open a linked List view and specify its lanes and cards",u.mergeWidgetSettingsIntoListDefinition=function(e,i){n.defaults(e,{cellPaging:{},cells:{}}),e.cellPaging.onPage=Math.min(i.pageSize||g,g)},u.TEMPLATE_ID="new.list.linked",u});