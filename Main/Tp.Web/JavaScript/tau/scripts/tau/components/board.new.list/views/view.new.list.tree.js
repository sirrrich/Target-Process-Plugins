define(["Underscore","jQuery","tau/core/class","tau/ui/extensions/board.plus/ui.board.plus.dom.utils","tau/ui/extensions/board.plus/ui.board.plus.utils","tau/components/board.new.list/templates/template.new.list.header","tau/components/board.new.list/templates/template.new.list.card.customized","tau/components/board.new.list/templates/template.new.list.subtree","tau/ui/templates/board.plus/ui.template.board.plus.emptyMessage","./editors/view.new.list.editor","tau/components/board.new.list/views/units/unit","tau/components/board.new.list/views/units/nameUnit","tau/components/board.new.list/views/view.new.list.tree.quickAdd","tau/components/board.new.list/views/view.new.list.tree.counts"],function(e,t,i,r,n,a,d,s,o,l,h,u,c,p){return i.extend({_cardTypes:[],treeIsRendered:!1,init:function(t,i,r,n){this.skeleton=n,this.configurator=n.configurator,this.eventAggregator=n.eventAggregator,this.parentView=r,this.treeModel=t,this.level=this.treeModel.level,this.$el=i,this.$treeContainer=this.$el.find(".i-role-cardsholder").first(),this.expansionStateToggled=e.Callbacks(),this.collapseAllClicked=e.Callbacks(),this.openCardDetailsClicked=e.Callbacks(),this.treeRendered=e.Callbacks(),this.subViews=[],this.$dirtyDOMCards=[]},renderTree:function(){return this._renderTreeNode(this.treeModel).done(this._updateEmptyLevelState.bind(this)).done(this._treeRendered.bind(this))},_renderTreeNode:function(e){if(this._cardTypes=e.getCardTypes(),!e.items.length&&!this._cardTypes.length)return t.Deferred().resolve().promise();this._attachCardBehaviors();var i=this.$treeContainer;return t.when(this.renderHeader()).then(this.appendHeader.bind(this)).then(this.updateHeaderExpansionState.bind(this)).then(this.renderCards.bind(this,e.items)).then(this.insertCards.bind(this,i)).promise()},_treeRendered:function(){this.treeIsRendered=!0,this.treeRendered.fire()},getListLayout:function(){var i=e.pluck(this._cardTypes,"typeId");return t.when(this.skeleton.cardLayoutFactory.getLayoutFactory()).then(this._createLayout.bind(this,i))
},_createLayout:function(t,i){var r=e.chain(i(t)).toArray().flatten().uniq(e.property("id")).value();return n.orderListUnits(r)},renderHeader:function(){return t.when(this.getListLayout()).then(function(e){var t={layout:e,configurator:this.configurator,cardTypes:this._cardTypes,enable:!0,level:this.level,levelKey:this.treeModel.getLevelKey(),renderSortingHeaders:!this.treeModel.hierarchyMetaInfo.isInnerCollectionsLevel,renderCollapser:this.treeModel.canExpandCard(),isCollapserEnabled:!0,parentEntityType:this.treeModel.hierarchyMetaInfo.parentEntityType,ordering:this.treeModel.hierarchyMetaInfo.ordering,renderDetailsTrigger:!this.treeModel.isShowDetailsDisabled()};return a.render(t)}.bind(this))},renderCards:function(i){return t.when(this.getListLayout()).then(function(r){return t.when.all(e.map(i,function(e){return this.renderCard(e.card,r)},this))}.bind(this)).then(function(e){return e.join("")})},renderCard:function(t,i){var r=e.extend({},t,{levelKey:this.treeModel.getLevelKey(),renderCollapser:this.treeModel.canExpandCard(),isCollapserEnabled:this.treeModel.canExpandCard(t.type),renderDetailsTrigger:!this.treeModel.isShowDetailsDisabled(t.type)});return d.renderToString(n.getCardRenderData(r,i,this.configurator))},_updateEmptyLevelState:function(){this.$el.toggleClass("tau-list-level-empty",!this.treeModel.items.length)},findHeaderHolder:function(){var e=".i-role-headerholder";return this.$treeContainer.siblings(e)},_findHeaderCollapser:function(){return this.findHeaderHolder().find(".i-role-header-collapser")},appendHeader:function(e){var t=this.findHeaderHolder();t.append(e)},insertCards:function(e,t){e.append(t)},_attachCardBehaviors:function(){this.$el.off("click.newlist"),this.$el.on("click.newlist",".i-role-card-collapser:not(.disabled)",function(e){var i=t(e.target),r=i.closest(".tau-list-entity"),n=r.data("id").toString();this.expansionStateToggled.fire(n),e.stopPropagation()}.bind(this)),this.$el.on("click.newlist",".i-role-header-collapser",function(e){this.collapseAllClicked.fire(),e.stopPropagation()
}.bind(this)),this.$treeContainer.off("click.newlist"),this.$treeContainer.on("click.newlist",".i-role-details-trigger",function(e){var i=t(e.target),r=i.closest(".tau-list-entity");this.openCardDetailsClicked.fire({cardData:r.data(),$card:r}),e.stopPropagation()}.bind(this))},appendNodes:function(e){return this.renderCards(e).then(function(e){return this.$treeContainer.append(e)}.bind(this))},updateHeaderExpansionState:function(){var t=e.any(this.treeModel.items,function(e){return e.getIsExpanded()});this._findHeaderCollapser().toggleClass("tau-v-collapser-expanded",t)},calculateColumnWidths:function(){this.skeleton.calculateColumnWidthsForLevel(this.treeModel.level)},createTreeView:function(e){var t=s.render(e),i=this._getParentNodeByCardId(e.cardId);i.after(t);var r=this._getViewConstructor(),n=new r(e,t,this,this.skeleton);return this.subViews.push(n),this.skeleton.treeViewCreated.fire(n),n},findView:function(t){if(0===t.length)return this;var i=e.find(this.subViews,function(e){return e.treeModel.cardId===t[0]});return i?i.findView(e.rest(t)):null},_getViewConstructor:function(){return null},setExpandedStateForCardId:function(e){var t=this._getParentNodeByCardId(e);t.addClass("tau-list-entity-open")},removeChildTreeNodeView:function(t){var i=this._getParentNodeByCardId(t);i.removeClass("tau-list-entity-open");var r=this._getSubNodesForCard(t);r.remove();var n=e.findIndex(this.subViews,function(e){return e.treeModel.cardId===t});n>=0&&(this.subViews[n].destroy(),this.subViews.splice(n,1))},_getParentNodeByCardId:function(e){var t='> .tau-list-entity[data-id="'+e+'"]';return this.$treeContainer.find(t).eq(0)},updateCard:function(t){var i=this.findDirtyDOMCardById(t.card.id);i&&(i.remove(),this.removeDirtyDOMCard(i)),e.each(t.properties,function(e,i){this.updateCardUnit(t.card,i,e)}.bind(this)),this.updateCardFinalState(t.card.id,t.card.entity.isFinal||t.card.entity.isInPast)},updateCardUnit:function(t,i,r){var n=this._findUnit(t.id,i);if(e.contains(["orderingValue","cardData","__objectId"],i))return void n.$card.data(i,r);
var a=n.$cell,d=this.skeleton.cardLayoutFactory.findUnitById(i);if(a.length&&d){var s=this.configurator.getTemplateFactory().get(d.getTemplateName("list")).bind({},{type:t.type.toLowerCase(),configurator:this.configurator,settings:{},data:r,unit:d,first:a.is(":has(.i-role-name)")||d.isNameUnit,renderDetailsTrigger:!this.treeModel.isShowDetailsDisabled(t.type)});s.html()!=a.html()&&(a.children().remove(),a.append(s.children())),a.toggleClass("tau-board-unit_updating",!1)}},_findUnit:function(e,t){var i=this.findChildCardById(e),r=i.find(".tau-board-unit[data-id="+t+"]"),n=r.closest(".tau-elems-cell");return{$card:i,$unit:r,$cell:n}},moveCard:function(e,t){var i=this.findChildCardById(e.id),n=this._getSubNodesForCard(e.id);i.detach(),n.detach();var a=null!==t;a&&this.insertCard(this.$treeContainer,i,n,t),r.animated(i,"tau-operation_card_updated")},_getSubNodesForCard:function(e){return this.$treeContainer.children('div[data-list-parent-id="'+e+'"]')},removeCardsSilent:function(t){e.each(t,function(e){this.removeCard(e.card,!0)},this)},removeCard:function(e,i){var n=this.findChildCardById(e.id);return n.removeClass("i-role-card"),t.when(i?!0:r.animated(n,"tau-operation_card_deleted")).then(function(){n.remove(),this.removeChildTreeNodeView(e.id)}.bind(this)).then(this._updateEmptyLevelState.bind(this))},addCard:function(e,i,n){return t.when(this.getListLayout()).then(this.renderCard.bind(this,i)).then(function(e){var i=t(e);this.insertCard(this.$treeContainer,i,null,n),r.animated(i,"tau-operation_card_added")}.bind(this)).then(this._updateEmptyLevelState.bind(this))},insertCard:function(e,t,i,r){var n=this.findDirtyDOMCardById(t.data("id"));n?(n.replaceWith(t),this.removeDirtyDOMCard(n)):this._insertCardByIndex(e,t,r),i&&t.after(i)},_insertCardByIndex:function(e,t,i){if(i>=0){var r=e.children(".i-role-card").eq(i);r.length?r.before(t):e.append(t)}else e.append(t)},createEditorView:function(){return new l(this.$treeContainer)},createCountsView:function(e){var t=this._getCountsViewConstructor();
this.countsView=new t(this,e,this.treeModel)},createQuickAddView:function(e){this.quickAddView=new c(this,e)},_getCountsViewConstructor:function(){return p},toggleNodeExpansionProgress:function(e,t){var i=this.findChildCardById(e),r=i.find(".i-role-card-collapser");r.toggleClass("tau-loading disabled",t)},highlightCard:function(e){var t=this.findChildCardById(e);r.animated(t,"tau-operation_card_added")},findChildCardById:function(e){return this.$treeContainer.children('.i-role-card[data-id="'+e+'"]')},updateCardFinalState:function(e,t){var i=this.findChildCardById(e);i.toggleClass(d.get().config.customFunctions.getFinalStateClass(),!!t)},findDirtyDOMCardById:function(t){return e.find(this.$dirtyDOMCards,function(e){return e.data("id")===t})},addDirtyDOMCard:function(e){this.$dirtyDOMCards.push(e)},removeDirtyDOMCard:function(t){this.$dirtyDOMCards=e.without(this.$dirtyDOMCards,t)},destroy:function(){this.quickAddView&&this.quickAddView.destroy(),this.countsView&&this.countsView.destroy()}})});