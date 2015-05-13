define(["require","tau/core/class","Underscore","jQuery","tau/components/panel.testPlan.run/helper/testPlan.run.helper"],function(t){var n=t("tau/core/class"),e=t("Underscore"),i=t("jQuery"),s=t("tau/components/panel.testPlan.run/helper/testPlan.run.helper");return n.extend({_runAction:i.noop,_entityType:null,_testPlanTabName:"testPlan",_testPlanTestsTabName:"testCases",_testPlanRunsTabName:"testPlanRuns",init:function(t,n,i,a,o,u,r){this._entityId=t,this._entityType=n,this._boardSettingsFactory=r,this._store=i,this._store2=a,this.isOnTestPlanRunsTab=!1,this._testPlanRunHelper=new s(o,u),this.changed=e.Callbacks(),this._retrieveData()},onBtnClickHandler:function(){return this._runActionHandler()},_createRunAndNavigate:function(){return this._testPlanRunHelper.createRunAndNavigate(this._linkedTestPlan.id,this._store)},_startRun:function(t){return this._testPlanRunHelper.startRun(t)},openTestPlanTab:function(){this._testPlanRunHelper.navigateToViewTab(this._linkedTestPlan,this._testPlanTestsTabName,this._boardSettingsFactory)},openTestPlanRunsTab:function(){this._testPlanRunHelper.navigateToViewTab(this._linkedTestPlan,this._testPlanRunsTabName,this._boardSettingsFactory)},_setData:function(t){if(this._linkedTestPlan=t.linkedTestPlan,this.results=t.results,this.openedRunCount=t.openedRunCount,0==t.openedRunCount)this.runAction="Create run",this._runActionHandler=this._createRunAndNavigate.bind(this),this.isCreateRunAction=!0;else{if(1==t.openedRunCount){var n=t.firstActiveRun,e=0!=(n.passedCount|n.failedCount)&&0==(n.notRunCount|n.onHoldCount|n.blockedCount);if(e)this._setGoToRunsAction();else{var i=0!=(n.passedCount|n.failedCount|n.onHoldCount|n.blockedCount);this.runAction=n.startDate&&i?"Continue":"Start run",this._runActionHandler=this._startRun.bind(this,n.id)}}else this._setGoToRunsAction();this.isCreateRunAction=!1}this._notifyChanged()},_setGoToRunsAction:function(){this.runAction="Go to runs",this._runActionHandler=this.openTestPlanRunsTab.bind(this)},_retrieveData:function(){i.when.all([this._store2.findAll(this._retrieveDataSpecification()),this._store2.findAll(this._retrieveCountsDataSpecification())]).then(function(t){var n={};
e.reduce(t,function(t,n){return e.extend(t,e.first(n))},n),this._setData(n)}.bind(this))},_retrieveDataSpecification:function(){return e.sprintf(["testPlan","?where=(linkedGeneral.id == %d)&select={","linkedTestPlan:{id: id, entityType: {name: entityType.name}},","openedRunCount:testPlanRuns.Count(entityState.isFinal != true),","firstActiveRun:testPlanRuns.Where(entityState.isFinal != true).","Select({id,startDate,passedCount,failedCount,notRunCount,onHoldCount,blockedCount}).First()","}"].join(""),this._entityId)},_retrieveCountsDataSpecification:function(){return e.sprintf(["testPlan","?where=(linkedGeneral.id == %d)&select={","results:{","passed:lastStartedTestPlanRun.passedCount,","failed:lastStartedTestPlanRun.failedCount,","notrun:lastStartedTestPlanRun.notRunCount,","onhold:lastStartedTestPlanRun.onHoldCount,","blocked:lastStartedTestPlanRun.blockedCount","}","}"].join(""),this._entityId)},_notifyChanged:function(){this.changed.fire()},destroy:function(){this.changed.removeAll()}})});