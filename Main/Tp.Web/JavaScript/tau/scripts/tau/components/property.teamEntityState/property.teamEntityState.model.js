define(["require","Underscore","tau/core/extension.base.stateful"],function(t){var e=t("Underscore"),n=t("tau/core/extension.base.stateful"),i=n.extend({init:function(t,e){this._service=t,this._assignableId=e.id,this._entityType=e.entityType.name,this.clearCache()},clearCache:function(){this._assignableCache=null},getCurrentStates:function(){return this._getAssignable().then(this._extractCurrentStates.bind(this)).promise()},_extractCurrentStates:function(t){var n=t.entityState,i=e.first(t.teamStates),a=i&&i.entityState;return{parentState:e.pick(n,"id","name"),teamState:a?{team:e.pick(i.team,"id","name","icon"),state:e.pick(i.entityState,"id","name")}:null}},getCurrentWorkflow:function(){return this._getAssignable().then(function(t){return this._collectTeamWorkflowIds(t).then(this._retrieveTeamWorkflows.bind(this,t.entityState))}.bind(this)).promise()},updateParentState:function(t){return this._service.updateAssignableState(this._entityType,this._assignableId,t)},updateTeamState:function(t,n){return this._getAssignable().then(function(i){var a=e.find(i.teamStates,function(e){return e.team.id===t});return this._service.updateAssignableTeamState(a.id,n)}.bind(this))},_getAssignable:function(){return this._assignableCache?this._assignableCache:(this._assignableCache=this._service.getAssignableWithCurrentStates(this._assignableId),this._assignableCache)},_collectTeamWorkflowIds:function(t){var n=this._extractTeam(t),i=t.project,a=this._service.getTeamWorkflowIds(n,i,this._entityType);return a.then(function(i){return e.chain(i).map(function(t){return{workflowId:t,team:n}}).union({workflowId:t.entityState.workflowId,team:null}).uniq(!1,e.property("workflowId")).value()})},_extractTeam:function(t){return e.size(t.teamStates)?e.first(t.teamStates).team:null},_retrieveTeamWorkflows:function(t,n){var i=e.pluck(t.nextStates.items,"id");return this._service.getWorkflowsByIds(e.pluck(n,"workflowId")).then(function(t){var a=e.filter(t,function(t){return e.has(t,"parentEntityState")
}),r=e.difference(t,a);return e.chain(r).map(this._getEntityStateDetails.bind(this,a,i)).reduce(this._groupByTeamWorkflow.bind(this,n),{prevWorkflowId:null,groups:[]}).value().groups}.bind(this))},_getEntityStateDetails:function(t,n,i){var a=e.filter(t,function(t){return t.parentEntityState.id===i.id});return{id:i.id,name:i.name,isTransitionAllowed:e.any(n,function(t){return t===i.id}),subStates:a,subWorkflowId:e.first(e.pluck(a,"workflowId"))}},_groupByTeamWorkflow:function(t,n,i){var a=i.subWorkflowId;if(!e.size(n.groups)||n.prevWorkflowId!==a){var r=e.findWhere(t,{workflowId:a});n.groups.push({team:r&&r.team,entityStates:[],hasSubStates:!1})}var s=e.last(n.groups);return s.entityStates.push(i),s.hasSubStates=s.hasSubStates||i.subStates.length>0,n.prevWorkflowId=a,n}});return i});