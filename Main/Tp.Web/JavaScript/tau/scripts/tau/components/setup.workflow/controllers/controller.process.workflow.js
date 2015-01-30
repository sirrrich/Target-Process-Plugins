define(["require","Underscore","tau/core/class","libs/react/react-ex","jsx!../views/view.process.workflow"],function(e){"use strict";var t=e("Underscore"),s=e("tau/core/class"),i=e("libs/react/react-ex"),o=e("jsx!../views/view.process.workflow");return s.extend({init:function(e){t.partial(t.bindAll,e).apply(t,t.functions(e)),this._model=e,this.rendered=t.Callbacks()},render:function(e,s){s=t.defaults(s||{},{canAddTeamWorkflow:!1}),this._container=e;var a={entityType:this._model.getEntityType(),processId:this._model.getProcessId(),stateSettings:{get:this._model.getStateSettings,save:this._model.saveStateSettings,getAffectedEntitiesCount:this._model.getAffectedEntitiesCount,getRoleAssignmentsCount:this._model.getRoleAssignmentsCount,migrate:this._model.migrateEntityState,performDelete:this._model.deleteEntityState},renameStateAction:this._model.renameState,reorderStateAction:this._model.reorderState,addStateAction:this._model.addState,canAddTeamWorkflow:s.canAddTeamWorkflow,addTeamWorkflowAction:this._model.addTeamWorkflow,deleteTeamWorkflowAction:this._model.deleteTeamWorkflow};return this._view=i.renderClass(o,a,e),this._model.statesChanged.add(this._updateStates.bind(this)),this._model.updateProgress.add(this._updateProgress.bind(this)),this._model.refresh()},_updateStates:function(e){this._view&&this._view.setProps({states:e.states,entityTerms:e.entityTerms,teamWorkflows:e.teamWorkflows,process:e.process})},_updateProgress:function(e){this._view&&this._view.setProps({updatingStateId:e.updatingStateId,allowEditing:e.allowEditing})},destroy:function(){i.unmountComponentAtNode(this._container),this._model=null,this._view=null}})});