define(["Underscore","tau/models/board.plus/model.board.cell"],function(e,t){return t.extend({onGetCellContent:function(e,t){var a=this,i=t.from,n=t.to-t.from+1,s={$take:a.generateExcessTake(n),$skip:i},d=function(e){e.data.items=0===e.data.items.length?[{}]:e.data.items;var i=a.preProcessCellResponse(e.data.items[0],t);e.data.items[0]=i.dataItem,a.fire("model.cells.content.loaded",e),a.fireCellBasicInfoRetrieved(i),a.fireCardsDataReady(i.dataItem.dynamic.items)};e.list(s).done(d).fail(function(){d({data:{items:[]}})})},preProcessCellResponse:function(t,a){var i=this._super(t,a);return i.dataItem.dynamic.items=e.unique(i.dataItem.dynamic.items,e.property("id")),i}})});