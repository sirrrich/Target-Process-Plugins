define(["jQuery","tau/core/extension.base","tau/libs/working-queue","tau/libs/sparklines/sparklines"],function($,ExtensionBase,WorkingQueue,Sparklines){var LOADING_CLASS="tau-sparkline-loading";return ExtensionBase.extend({init:function(){this.sparklineDrawQueue=new WorkingQueue({interval:150,iterator:function(node){var conf={width:100,height:50,letterWidth:9,letterHeight:9},sparklines=new Sparklines(conf);sparklines.draw(null,node),$(node).parent().removeClass(LOADING_CLASS)}}),this._super.apply(this,arguments)},"bus card.is.augmented":function(e){var $sp=e.data.element.find(".i-role-sparkline");this._pushToDrawingQueue($sp)},"bus overview.board.ready:last + operation.execute.done":function(evt,renderData,operation){var $el=renderData.element,$sp=this._extractEmptySparkline($el);this._pushToDrawingQueue($sp)},"bus overview.board.ready:last + view.card.batch.move.finished":function(evt,renderData,operation){var $el=renderData.element,$sp=this._extractEmptySparkline($el);this._pushToDrawingQueue($sp)},_extractEmptySparkline:function($el){return $el.find(".i-role-card .i-role-sparkline:empty")},_pushToDrawingQueue:function($sp){var o=this;$sp.parent().addClass(LOADING_CLASS),$sp.each(function(){o.sparklineDrawQueue.push(this)})}})})