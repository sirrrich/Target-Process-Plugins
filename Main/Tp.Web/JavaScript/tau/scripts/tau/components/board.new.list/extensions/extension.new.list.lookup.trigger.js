define(["require","Underscore","tau/components/extensions/component.extension.base"],function(e){var t=e("Underscore"),i=e("tau/components/extensions/component.extension.base");return i.extend({finderModel:"linkItem","bus afterInit":function(e,t){this._config=t.config},"bus afterRender":function(e,t){this._$trigger=t.element,this._$trigger.on("click",this._showLookup.bind(this))},_showLookup:function(){this.fire("initBubble",this._getLookupBubbleSettings()),this._$trigger.tauBubble("show")},_getLookupBubbleSettings:function(){var e=function(e){this._$trigger.parent().toggleClass("tau-active",e),this._$trigger.toggleClass("tau-checked",e),e||t.defer(this._$trigger.tauBubble.bind(this._$trigger,"destroy"))}.bind(this);return{target:this._$trigger,className:"tau-bubble-lookup",applyBubbleClasses:!1,cleanupOnHide:!0,hideOnScroll:!0,hideOnScrollContainer:this._$trigger.closest(".tau-board-list-view__inner"),onShow:e.bind(this,!0),onHide:e.bind(this,!1),componentsConfig:{components:[{type:"finder.entity",entity:this._config.entity,parentBus:this.bus,treeCardPath:this._config.treeCardPath,immediateParentCard:this._config.immediateParentCard,immediateParentId:this._config.immediateParentId,allParentCards:this._config.allParentCards,allData:{model:this.finderModel},filter:{entityType:this._config.entityTypes}}]},zIndex:1e4}},"bus destroy":function(){this._$trigger&&this._$trigger.off("click")}})});