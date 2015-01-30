define(["jQuery","Underscore","tau/components/extensions/component.extension.base","tau/models/quick.add/model.board.general.quick.add.singleQuery"],function(e,t,i,n){return i.extend({resetLifecycle:!0,onInit:function(e){this._scopeObj={},this._configurator=e.context.configurator,this._globalBus=this._configurator.getGlobalBus(),this._generalQuickAddModel=new n(this),this._prefetchData=t.throttle(this._prefetchData.bind(this),600,{leading:!1}),this._onContextReady=this._onContextReady.bind(this),this._configurator.getFeaturesService().isEnabled("general.quick.add.data.prefetch")&&this._globalBus.on("context.ready",this._onContextReady)},"bus afterRender:last + boardSettings.ready":function(e,t,i){var n=t.element,o=i.boardSettings;this._$quickAddButton=n.find("[role=action-quick-add]"),this._types=[];var s=function(e){this._types=e.cells&&e.cells.types||[],this._appendQuickAddPopup(this._$quickAddButton,this._types)}.bind(this);o.get({fields:["cells"]}).done(s),o.unbind(this),o.bind({fields:["cells"],listener:this,callback:s})},"bus destroy":function(){this._globalBus.removeListener("context.ready",this._onContextReady,this._scopeObj)},"bus boardSettings.ready:last + destroy":function(e,t){t.boardSettings.unbind(this)},_prefetchData:function(){var e=this._generalQuickAddModel.resolveSliceAddData(this.config);this._isPopupVisible()||this._appendQuickAddPopup(this._$quickAddButton,this._types,e)},_onContextReady:function(){this._isPopupVisible()||this._appendQuickAddPopup(this._$quickAddButton,this._types),this._prefetchData()},_isPopupVisible:function(){return this._$quickAddButton.tauBubble("isVisible")},_appendQuickAddPopup:function(e,t,o){var s={target:e,applyBubbleClasses:!1,cleanupOnHide:!0,stackName:"quickAddGeneral",showArrow:!0,showOnCreation:!1,zIndex:1e4,onShow:function(){e.removeClass("tau-quick-add-collapse")},onHide:function(){e.addClass("tau-quick-add-collapse")},className:"tau-quick-add-dialog-general",onPositionConfig:function(){return{of:e,collision:"none none",my:"left top",at:"left-12 bottom+1"}
},dontCloseSelectors:["#ui-datepicker-div"],componentsConfig:{components:[{name:"board plus quick add general",type:"board.cell.quick.add",extensions:i.extend({"bus beforeInit:last + afterRender":function(e,t,i){var n=i.element,o=i.data;if(o.isEmpty){var s=t.config.context.configurator.getGlobalBus();s.fire("general.quick.add.empty"),n.find(".i-role-select-context-link").on("click",function(){s.fire("select.context.link.click"),this.fire("close")}.bind(this)).addClass("ui-link")}}}),QuickAddModel:n,defaultType:t[0]}]}};o&&(s.componentsConfig.components[0].dataDeferred=o),this.fire("initBubble",s)}})});