define(["jQuery","tau/core/extension.base"],function($,ExtensionBase){return ExtensionBase.extend({"bus $el.ready+$grid.ready":function(evt,$el,$grid){var self=this,$headerHorizontal=$el.find(".i-role-header[data-dimension=x]"),$headerHorizontalList=$headerHorizontal.find("ul"),$headerVertical=$el.find(".i-role-header[data-dimension=y]"),$headerVerticalList=$headerVertical.find("ul"),syncScroll=function(){return self.syncScroll($grid,$headerHorizontalList,$headerVerticalList)};$grid.bind({scroll:syncScroll});var speed=60,evtMap={mousewheel:function(evt,offset){var s=-$grid.scrollTop()+Math.round(offset*speed);$grid.scrollTop(-s),syncScroll()}};$headerVertical.bind(evtMap),$headerHorizontal.bind(evtMap),self.fire("syncScroll.ready",syncScroll),$grid.pscroller()},"bus syncScroll.ready:last + view.dom.ready":function(evt,syncScroll){syncScroll()},"bus syncScroll.ready:last + view.axis.collapser.executed.after":function(evt,syncScroll){syncScroll()},"bus $el.ready:last + $grid.ready:last + view.axis.collapser.executed.before":function(evt,$el,$grid){var $of,gridRect=$grid[0].getBoundingClientRect(),$firstVisible,$cells=$grid.find(".tau-cell");$cells.each(function(){var $cell=$(this),cellRect=this.getBoundingClientRect();cellRect.left=cellRect.left-1;if(cellRect.top>=gridRect.top&&cellRect.top<=gridRect.bottom&&cellRect.left>=gridRect.left&&cellRect.left<=gridRect.right)return $firstVisible=$cell,!1}),$firstVisible||$cells.each(function(){var $cell=$(this),cellRect=this.getBoundingClientRect();cellRect.left=cellRect.left-1;if(cellRect.top<=gridRect.top&&cellRect.bottom>=gridRect.top&&cellRect.left>=gridRect.left&&cellRect.left<=gridRect.right)return $firstVisible=$cell,!1}),$firstVisible||$cells.each(function(){var $cell=$(this),cellRect=this.getBoundingClientRect();cellRect.left=cellRect.left-1;if(cellRect.top>=gridRect.top&&cellRect.top<=gridRect.bottom&&cellRect.left<=gridRect.left&&cellRect.right>=gridRect.left)return $firstVisible=$cell,!1}),$firstVisible||$cells.each(function(){var $cell=$(this),cellRect=this.getBoundingClientRect();cellRect.left=cellRect.left-1;if(cellRect.top<=gridRect.top&&cellRect.bottom>=gridRect.top&&cellRect.left<=gridRect.left&&cellRect.right>=gridRect.left)return $firstVisible=$cell,!1}),$of=$firstVisible;if(!$of||!$of.length)return;var fromGrid=$of.position();fromGrid.top<0&&(fromGrid.top=0),fromGrid.left<0&&(fromGrid.left=0);var self=this,propScroll=_.bind(self.propScroll,self,$grid,$of,fromGrid);self.fire("propScroll.ready",propScroll)},"bus syncScroll.ready:last + resize.completed":function(evt,syncScroll){syncScroll()},"bus propScroll.ready > view.axis.collapser.executed.after > resize.completed":function(evt,propScroll){propScroll()},syncScroll:function($grid,$horizontal,$vertical){var offset={x:$grid.scrollLeft(),y:$grid.scrollTop()};$horizontal.length&&$horizontal.css("margin-left",-1*offset.x);if($vertical.length){var mt=-1*offset.y;$vertical.css("margin-top",mt)}},propScroll:function($grid,$of,fromGrid){var ofRect=$of[0].getBoundingClientRect(),tableRect=$grid.find("table:first")[0].getBoundingClientRect(),fromTable={top:ofRect.top-tableRect.top,left:ofRect.left-tableRect.left},s=0;$grid.parents(".i-browser_engine_ie").length&&(s=-1),$grid.parents(".i-browser_engine_webkit").length!=0;var offset={top:Math.round(fromTable.top)-Math.round(fromGrid.top)+s,left:Math.round(fromTable.left)-Math.round(fromGrid.left)};$grid.scrollTo(offset)}})})