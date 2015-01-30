define(["require","jQuery","Underscore","libs/react/react-ex","tau/core/class","jsx!./property.teamEntityState.view"],function(t){var e=t("jQuery"),i=t("Underscore"),n=t("libs/react/react-ex"),o=t("tau/core/class"),s=t("jsx!./property.teamEntityState.view"),r={_eventName:"mousedown.teamEntityState",onDocumentClick:i.Callbacks(),start:function(){e(document).on(this._eventName,function(t){this.onDocumentClick.fire(t.target)}.bind(this))},stop:function(){e(document).off(this._eventName)}},a=o.extend({init:function(t,e){this._model=t,this._workflowData=e,this._view=null,this._container=null,this.initialDataRetrieved=this._model.getCurrentStates()},render:function(t,i){var o=this._getViewProps(i);this._container=t,this._view=n.renderClass(s,o,this._container),r.onDocumentClick.add(function(t){var i=e(t),n=i.closest(this._container).length>0,o=i.closest(".tau-bubble-tooltipArticle").length>0;n||o||this._closeSelector()},this)},destroy:function(){r.onDocumentClick.remove(this),r.stop(),n.unmountComponentAtNode(this._container),this._container=null,this._view=null},_getViewProps:function(t){return{currentStates:t,isLoading:!1,actions:{openDropDown:this._openSelector.bind(this),closeDropDown:this._closeSelector.bind(this),changeState:this._changeState.bind(this),changeTeamState:this._changeTeamState.bind(this)}}},_openSelector:function(){this._toggleLoader(!0),this._model.getCurrentWorkflow().then(function(t){r.start(),this._view.setProps({entityStateGroups:t,workflowData:this._workflowData})}.bind(this)).always(this._toggleLoader.bind(this,!1))},_closeSelector:function(){r.stop(),this._view.setProps({entityStateGroups:null,workflowData:null})},_toggleLoader:function(t){this._view.setProps({isLoading:t})},_refreshCurrentStates:function(){this._model&&(this._model.clearCache(),this._model.getCurrentStates().then(function(t){this._view&&this._view.setProps({currentStates:t})}.bind(this)))},_changeState:function(t){this._closeSelector(),this._model.updateParentState(t).always(this._refreshCurrentStates.bind(this))
},_changeTeamState:function(t,e){this._closeSelector(),this._model.updateTeamState(t,e).always(this._refreshCurrentStates.bind(this))}});return a});