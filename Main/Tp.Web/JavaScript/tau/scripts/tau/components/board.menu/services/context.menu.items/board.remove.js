define(["require","Underscore","tau/core/injector","tau/services/boards/view.types"],function(e){var r=e("Underscore"),o=e("tau/core/injector"),t=e("tau/services/boards/view.types");return o.defineModule(["boardsOperationsService","boardMenuModel"],function(e,o){return{shouldRender:function(e){return e.isEditable},getMenuItemClassName:r.constant("i-role-menu-action-remove drop-down-option-danger"),getContent:r.constant("Remove"),getTooltipText:r.constant("Remove this View"),whenRendered:function(e,r){var o=t.getViewTypeName(e.board.itemType);r.tauConfirm({content:"<h3>Do you really want to remove this "+o+"?</h3>",callbacks:{success:function(){taus.track({action:"remove view from menu",tags:["viewsMenu"]}),this._removeBoard(e),e.destroyBubble()}.bind(this)},zIndex:1e3})},_removeBoard:function(r){var n=r.board.boardId,a=r.board.acid,i=r.isCurrentBoard;if(i){var d=o.findBoardDataToReplaceDeleted(r.board.boardId),s=d?d.key:null,u=d?d.acid:null,c=d?d.itemType:t.BOARD;return e.removeViewAndRedirect(n,a,c,s,u)}return e.removeView(n,a)}}})});