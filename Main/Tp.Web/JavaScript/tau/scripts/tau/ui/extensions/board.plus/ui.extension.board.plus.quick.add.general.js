define(["require","Underscore","tau/components/extensions/component.extension.base","tau/models/quick.add/model.board.general.quick.add.singleQuery"],function(e){var t=e("Underscore"),i=e("tau/components/extensions/component.extension.base"),n=e("tau/models/quick.add/model.board.general.quick.add.singleQuery");return i.extend({resetLifecycle:!0,onInit:function(e){this._configurator=e.context.configurator,this._generalQuickAddModel=new n(this),this._prefetchData=t.debounce(this.safeCallback(this._prefetchData),1e3),this._isDataPrefetchEnabled=this._configurator.getFeaturesService().isEnabled("general.quick.add.data.prefetch"),this._isDataPrefetchEnabled&&(this._globalBus=this._configurator.getGlobalBus(),this._globalBus.on("context.ready",this._prefetchData,this))},"bus afterRender:last + boardSettings.ready":function(e,t,i){var n=t.element,s=i.boardSettings;this._$quickAddButton=n.find("[role=action-quick-add]"),this._types=[];var a=function(e){this._types=e.cells&&e.cells.types||[],this._appendQuickAddPopup(this._$quickAddButton,this._types),this._isDataPrefetchEnabled&&this._prefetchData()}.bind(this);s.get({fields:["cells"]}).done(a),s.unbind(this),s.bind({fields:["cells"],listener:this,callback:a})},"bus boardSettings.ready:last + destroy":function(e,t){this._isDataPrefetchEnabled&&this._globalBus.removeAllListeners(this),t.boardSettings.unbind(this)},_prefetchData:function(){if(!this._isPopupVisible()){var e=this._generalQuickAddModel.resolveSliceAddData(this.config);this._appendQuickAddPopup(this._$quickAddButton,this._types,e)}},_isPopupVisible:function(){return this._$quickAddButton&&this._$quickAddButton.tauBubble("isVisible")},_appendQuickAddPopup:function(e,t,s){var a={target:e,destroyExistingBubble:!0,applyBubbleClasses:!1,cleanupOnHide:!0,stackName:"quickAddGeneral",showArrow:!0,showOnCreation:!1,zIndex:1e4,onShow:function(){e.removeClass("tau-quick-add-collapse")},onHide:function(){e.addClass("tau-quick-add-collapse")},className:"tau-quick-add-dialog-general",onPositionConfig:function(){return{of:e,collision:"none none",my:"left top",at:"left-12 bottom+1"}
},dontCloseSelectors:["#ui-datepicker-div"],componentsConfig:{components:[{name:"board plus quick add general",type:"board.cell.quick.add",extensions:[i.extend({"bus beforeInit:last + afterRender":function(e,t,i){var n=i.element,s=i.data;if(s.isEmpty){var a=t.config.context.configurator.getGlobalBus();a.fire("general.quick.add.empty"),n.find(".i-role-select-context-link").on("click",function(){a.fire("select.context.link.click"),this.fire("close")}.bind(this)).addClass("ui-link")}}})],QuickAddModel:n,defaultType:t[0]}]}};s&&(a.componentsConfig.components[0].dataDeferred=s),this.fire("initBubble",a)}})});