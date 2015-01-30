define(["Underscore","jQuery"],function(t,e){return{CLASS_MAP:{CARD_SELECTED:"tau-selected",CARD_COUNTER:"tau-selection-counter",ROLE_CARD:"i-role-card",ROLE_ACTION_CLEAR:"i-role-action-clear",ROLE_TOGGLE_ACTIONS:"i-role-toggle-actions",ROLE_COUNTER_BLOCK:"i-role-counter-block",ROLE_COLLAPSER:"i-role-collapser"},getCardsData:function(n){return t.map(n,function(t){var n=e(t),o=n.data();return o.isSelected=n.hasClass(this.CLASS_MAP.CARD_SELECTED),o}.bind(this))},getAllCards:function(t){return this.getHolderCard(t).find("."+this.CLASS_MAP.ROLE_CARD)},getHolderCard:function(t){return t.find("[role=holder]")},updateCounter:function(t,e){e=e||this.getSelectedCards(t).length,t.find("."+this.CLASS_MAP.CARD_COUNTER).toggleClass(this.CLASS_MAP.CARD_SELECTED,!!e).text(e),e?this.appendClearButton(t):this.removeClearButton(t)},removeClearButton:function(t){return this.getCounterBlock(t).find("."+this.CLASS_MAP.ROLE_ACTION_CLEAR).remove()},appendClearButton:function(t){var n=this.getCounterBlock(t),o=n.find("."+this.CLASS_MAP.ROLE_ACTION_CLEAR);return o.length||(o=e('<button class="tau-btn tau-btn-small tau-clear-selection '+this.CLASS_MAP.ROLE_ACTION_CLEAR+'"></button>').appendTo(n)),o},getActionsButton:function(t){return t.find("."+this.CLASS_MAP.ROLE_TOGGLE_ACTIONS)},toggleActionsButton:function(t,e){return this.getActionsButton(t).toggleClass("tau-boardclipboard__toggle-button_enabled",!!e)},getCounterBlock:function(t){return t.find("."+this.CLASS_MAP.ROLE_COUNTER_BLOCK)},getSelectedCards:function(t){return this.getHolderCard(t).find("."+this.CLASS_MAP.CARD_SELECTED)},getCollapseButton:function(t){return t.find("."+this.CLASS_MAP.ROLE_COLLAPSER)}}});