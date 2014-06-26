define(["Underscore","jQuery","tp/jquery.utils","tau/core/class","tau/components/board.timeline/views/timeline.card-placement-strategy","tau/components/board.timeline/views/timeline.track-view-creation-strategies"],function(t,e,a,n,i,r){var s=n.extend({init:function(e){this.onTracksCountChanged=t.Callbacks(),this._cardPlacementStrategy=new i(e),this._tracks=r.InMemory(),this._cards={}},_onCardCleared:function(t){this.removeCard(t.id),this.updateCardCascade()},addCard:function(e,a){e.onEditStarted.add(this._cardPlacementStrategy.lockCard.bind(this._cardPlacementStrategy)),e.onEditStopped.add(this._cardPlacementStrategy.unlockCard.bind(this._cardPlacementStrategy)),e.onCleared.add(this._onCardCleared.bind(this));var n=this._cardPlacementStrategy.addCard(e._model,a.track);this._storeTracksCount(),this._setCardPosition(e,n),this._cards[e.id]=e,t.isUndefined(a.track)||(this._updatePositions(),a.forceUnlock&&this._cardPlacementStrategy.unlockCard(e._model)),this._checkTracksCountChanged()},unlockAllCards:function(){this._cardPlacementStrategy.unlockAllCards()},_setCardPosition:function(t,e){t.insertAt(this._tracks.get(e.track),e.index)},removeCard:function(t){this._cardPlacementStrategy.removeCard(t),this._cards[t]&&(this._cards[t].remove(),delete this._cards[t])},updateCardCascade:function(){this._storeTracksCount(),this._updatePositions(),this._checkTracksCountChanged()},setContainer:function(t){this._tracks=r.InDom(t)},$content:function(){return this._tracks.$content()},_updatePositions:function(){var e=this._cardPlacementStrategy.updatePositions();t.each(e,function(t){t.position?this._setCardPosition(this._cards[t.cardId],t.position):this.removeCard(t.cardId)},this),this.$content().filter(":empty").remove()},_storeTracksCount:function(){this._storedTracksCount=this.$content().length},_checkTracksCountChanged:function(){this.$content().length!=this._storedTracksCount&&this.onTracksCountChanged.fire()}});return s});