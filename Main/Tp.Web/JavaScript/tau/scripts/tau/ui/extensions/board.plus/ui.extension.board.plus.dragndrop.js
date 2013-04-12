define(["Underscore","jQuery","tau/core/extension.base","tau/ui/behaviour/common/ui.behaviour.progressIndicator"],function(_,$,ExtensionBase,ProgressIndicator){return ExtensionBase.extend({resetLifecycle:!0,"bus $el.ready":function(ev,$el){var $headerX=$el.find(".i-role-header[data-dimension=x]"),$headerY=$el.find(".i-role-header[data-dimension=y]");this.fire("$headerX.ready",$headerX),this.fire("$headerY.ready",$headerY);var fire=_.bind(this.fire,this);fire("shift.isPressed",!1),$(document).on("keydown",function(e){e.which==$.ui.keyCode.SHIFT&&fire("shift.isPressed",!0)}),$(document).on("keyup",function(e){e.which==$.ui.keyCode.SHIFT&&fire("shift.isPressed",!1)})},"bus $selectable.ready":function(e,$selectable){this._$selectable=$selectable},"bus $el.ready:last + $grid.ready:last + $selectable.ready:last + viewMode.ready:last + dndOptions.ready":function(ev,$el,$grid,$selectable,viewMode,dndOptions){var self=this,$body=$el.find(".i-role-board-body"),$containment,$sortable;viewMode==="list"?($containment=$grid.find(".i-role-cellholder"),$sortable=$body):($containment=$grid.find("table"),$sortable=$grid),$sortable.data("tauSortable")&&($sortable.tauSortable("destroy"),$sortable.unbind("tausortablestart.board"),$sortable.unbind("tausortablechanged.board"),$sortable.unbind("tausortablegroupentered.board"),$sortable.unbind("tausortablegroupleft.board"),$sortable.unbind("tausortablestop.board"));if(!dndOptions.enable)return;var isPrioritizable=dndOptions.isPrioritizable;$sortable.tauSortable({groups:".i-role-grid .i-role-cellholder",items:".i-role-card",appendTo:$grid,containment:$containment,addClasses:!1,useSelectable:$selectable,moveInGroup:isPrioritizable,processToGroup:function($item,$fromGroup,$toGroup){var $targetPlace=$toGroup;$toGroup.is(".i-role-cellholder")&&($targetPlace=$toGroup.children(".i-role-cell")),$targetPlace.data("isempty",!0);if($fromGroup.is($targetPlace))return;$item.appendTo($targetPlace),self.cellHasCards($targetPlace)&&$targetPlace.data("isempty",!1)}}),self.fire("$sortable.ready",$sortable),$sortable.bind("tausortablestart.board",function(event,ui){ui.helper&&ui.helper.find(".i-role-card").removeClass("i-role-card"),ui.items.removeClass("i-role-card"),self.fire("sort.started",[event,ui])}),$sortable.bind("tausortablechanged.board",function(event,ui){self.fire("sort.changed",[event,ui])}),$sortable.bind("tausortablegroupentered.board",function(event,ui){self.fire("sort.groupentered",[event,ui])}),$sortable.bind("tausortablegroupleft.board",function(event,ui){self.fire("sort.groupleft",[event,ui])}),$sortable.bind("tausortablestop.board",function(event,ui){ui.items.addClass("i-role-card"),self.fire("sort.stopped",[event,ui])})},"bus options.ready:last+sort.started":function(ev,o,sortData){if(o.dragndrop.containmentRefreshTimeout){var ui=sortData[1],$dragged=$(ui.item);_.delay(function($dragged){$dragged&&$dragged.data("draggable")&&$dragged.data("draggable")._setContainment()},o.dragndrop.containmentRefreshTimeout,$dragged)}},"bus $sortable.ready:last+sort.changed":function(){this.fire("view.card.drag.changed")},"bus $sortable.ready:last+$headerX.ready:last+$headerY.ready:last+sort.groupentered":function(ev,$sortable,$headerX,$headerY,sortData){var ui=sortData[1];ui&&ui.group&&this.highlightTarget($sortable,ui.group,$headerX,$headerY),this.fire("view.card.drag.changed")},"bus $sortable.ready:last+$headerX.ready:last+$headerY.ready:last+sort.groupleft":function(ev,$sortable,$headerX,$headerY,sortData){var ui=sortData[1];ui&&ui.group&&this.unhighlightTarget($sortable,ui.group,$headerX,$headerY),this.fire("view.card.drag.changed")},"bus $sortable.ready:last+$headerX.ready:last+$headerY.ready:last+sort.stopped":function(ev,$sortable,$headerX,$headerY,sortData){var ui=sortData[1];ui&&ui.group&&this.unhighlightTarget($sortable,ui.group,$headerX,$headerY)},"bus sort.stopped":function(ev,sortData){var ui=sortData[1];if(!ui.item)return;var items=_.map(ui.items,function(card){return $.data(card,"boardDnd")});items=_.sortBy(items,function(item){return item.order}),this.fire("view.card.batch.move",items)},"bus configurator.ready:last + domWrapper.ready:last + dndOptions.ready:last + view.card.batch.move.after":function(e,configurator,domWrapper,dndOptions,moveResponse){var self=this,groups=self.unpackMovementResponse(moveResponse,domWrapper),targetCellCoordinates={x:moveResponse[0].targetX,y:moveResponse[0].targetY},$errorCards=$();_.forEach(groups.error,function(r){$errorCards=$errorCards.add(r.$card),domWrapper.animateWithClass(r.$card,"tau-card_failed"),self.fire("error",{message:r.error})}),self.restoreErrorCardsPositions($errorCards).pipe(_.bind(function(){return this.processCardsPositions(groups,targetCellCoordinates,domWrapper,configurator)},this)).pipe(_.bind(function(dr){var limit=configurator.getSliceFactoryOptions().options.DnDTurnOffCometWhenItemsCountExceed,cards=dr.cards||[];return cards.length>limit&&_.forEach(cards,function($node){domWrapper.animateWithClass($node,"tau-card_highlighted")}),_.forEach(dr.$affectedCells,_.bind(function(cell){var $cell=$(cell);$cell.data("isempty")&&domWrapper.expandCell(this,$cell.data("x"),$cell.data("y"))},this)),dr},this)).pipe(_.bind(function(dr){if(!dndOptions.sortAfter)_.forEach(dr.cards,function($card){var $ch=$card.parents(".i-role-cell:first"),$c=domWrapper.getUnsortedCardsHolder($ch);$c.length||($c=$ch),!$card.prev(".i-role-card").length&&!$card.next(".i-role-card").length&&$c.append($card)});else{var comp=function(a,b){return dndOptions.sortAfterDir=="desc"?a>b:a<b};_.forEach(dr.cards,function($card){var ov=parseFloat($card.data("orderingValue")),$ch=$card.parents(".i-role-cell:first"),$other=$ch.children(".i-role-card").not($card),$last=$other.last();if(!comp(parseFloat($last.data("orderingValue")),ov)){var $o=$other.filter(function(k,c){return comp(parseFloat($(c).data("orderingValue")),ov)});$o.length?$o.last().after($card):$card.prependTo($ch)}else if($other.length){var $c=domWrapper.getUnsortedCardsHolder($ch);$c.length||($ch.find(".i-role-cell-paging-stack").length?$c=domWrapper.createUnsortedCardsHolder().appendTo($ch):$c=$ch),$c.append($card)}})}return dr.cards||[]},this)).done(_.bind(function(cards){this.completeEventsProtocol(cards),this.fire("view.card.batch.move.finished",{})},this))},"bus view.skeleton.built:last + view.card.batch.move":function(e,skeleton){ProgressIndicator.get(skeleton.element).show({hover:!0,delay:2e3})},"bus view.skeleton.built:last + view.card.batch.move.after":function(e,skeleton){ProgressIndicator.get(skeleton.element).hide()},"bus configurator.ready:last + view.card.batch.move.$successCards":function(e,configurator,cards){var limit=configurator.getSliceFactoryOptions().options.DnDTurnOffCometWhenItemsCountExceed;cards.length>limit&&this.fire("refresh")},processCardsPositions:function(groups,targetCellCoordinates,domWrapper,configurator){var def=$.Deferred(),limit=configurator.getSliceFactoryOptions().options.DnDTurnOffCometWhenItemsCountExceed,successMoveResponse=groups.success,len=successMoveResponse.length;if(!len)def.resolve({});else{var updates=this.extractBatchesUpdates(successMoveResponse);domWrapper.applyCardsBatchMove({targetCellCoordinates:targetCellCoordinates,options:{suspendAnimation:len>limit},items:updates}).done(function(dr){def.resolve(dr)})}return def},extractBatchesUpdates:function(successMoveResponse){var r=[];for(var i=0,len=successMoveResponse.length;i<len;i++){var cardData=successMoveResponse[i],adapted=_(cardData.moves).map(function(move){return{x:move.x,y:move.y,data:move.dataItem}});adapted.length&&adapted[0].data.data&&r.push(adapted)}return r},completeEventsProtocol:function($successCardsArray){this.fire("view.card.batch.move.$successCards",$successCardsArray),this.fire("view.card.batch.move.completed",$successCardsArray),$successCardsArray.length&&this.fire("selection.reapply",{})},restoreErrorCardsPositions:function($errorCards){var def=$.Deferred(),self=this,errorCards=_.sortBy($errorCards.toArray(),function(card){var prevData=$(card).data("boardDnd").source||{};return prevData.index}),fs=_.map(errorCards,function(card){return function(next){var $card=$(card),prevData=$card.data("boardDnd").source||{},$cell=$("#"+prevData.cellElementId);if(prevData.beforeElementId){var $beforeEl=$cell.find("#"+prevData.beforeElementId);$beforeEl.length?$card.insertAfter($beforeEl):$card.prependTo($cell)}else $card.prependTo($cell);self._$selectable.tauSelectable("select",$card),errorCards.length==1&&self._$selectable.tauSelectable("raiseChanged",$card,!0,!0),next()}});return fs=_.map(fs,function(f){return function(next){f(next)}}),_.series(fs,function(){def.resolve()}),def},toggleTarget:function($grid,$cell,$headerX,$headerY,toggle){var targetClassName="tau-cellholder_dndtarget_true",className="tau-cellholder_dndcrossing_true";if(!$grid.find($cell).length)return;var xIndex=$cell.index()+1,$col=$grid.find("tr > .i-role-cellholder:nth-child("+xIndex+")").not($cell),$row=$cell.siblings();$row.length>0&&($col.toggleClass(className,toggle),$headerX.length&&$headerX.find(".i-role-cellholder:nth-child("+xIndex+")").toggleClass(className,toggle)),$col.length>0&&($row.toggleClass(className,toggle),$headerY.length&&$headerY.find(".i-role-cellholder[data-y="+$cell.data("y")+"]").toggleClass(className,toggle));var rl=$row.length>0,cl=$col.length>0;rl&&cl?$cell.toggleClass(targetClassName,toggle):(rl||cl)&&$cell.toggleClass(className,toggle)},cellHasCards:function(cell){var children=$(cell).children(".i-role-card");return children.size()>0},highlightTarget:function($grid,$cell,$headerX,$headerY){this.toggleTarget($grid,$cell,$headerX,$headerY,!0)},unhighlightTarget:function($grid,$cell,$headerX,$headerY){this.toggleTarget($grid,$cell,$headerX,$headerY,!1)},assignResponseItemUID:function(rItem){var responseItemUID=rItem.uid;return _.forEach(rItem.commands,function(cmd){cmd.result=_.map(cmd.result,function(move){return move.uid=responseItemUID,move})}),rItem},unpackMovementResponse:function(response,domWrapper){var self=this,$cards=domWrapper.getCards(),groups={error:[],success:[]};for(var i=0,len=response.length;i<len;i++){var rItem=response[i];rItem=self.assignResponseItemUID(rItem);var commands=_.chain(_.values(rItem.commands));rItem.error=commands.pluck("error").compact().value().join(" ")||null,rItem.moves=commands.pluck("result").concat().compact().value()||[];var prop=rItem.error?"error":"success";rItem.$card=$cards.filter("#"+rItem.elementId),groups[prop].push(rItem)}return groups}})})