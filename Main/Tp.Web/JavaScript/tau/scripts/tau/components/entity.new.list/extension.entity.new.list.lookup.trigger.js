define(["require","jQuery","Underscore","tau/components/extensions/component.extension.base"],function(e){var t=(e("jQuery"),e("Underscore")),n=e("tau/components/extensions/component.extension.base");return n.extend({"bus afterInit":function(e,t){this.config=t.config},"bus afterRender":function(e,t){var n=t.element;n.on("click",this._showLookup.bind(this,n))},"bus afterRender > destroy":function(e,t){var n=t.element;n.off("click")},_initLookupBubble:function(e){var n=function(e,n){e.parent().toggleClass("tau-active",n),e.toggleClass("tau-checked",n),n||t.defer(e.tauBubble.bind(e,"destroy"))};return{target:e,className:"tau-bubble-lookup",applyBubbleClasses:!1,cleanupOnHide:!0,onShow:n.bind(this,e,!0),onHide:n.bind(this,e,!1),componentsConfig:{components:[{type:"finder.entity",entity:this.config.entity,parentBus:this.bus,treeCardPath:this.config.treeCardPath,immediateParentId:this.config.immediateParentId,allParentCards:this.config.allParentCards,allData:{model:"linkItem"},filter:{entityType:this.config.entityTypes}}]},zIndex:1e4}},_showLookup:function(e){this.fire("initBubble",this._initLookupBubble(e)),e.tauBubble("show")}})});