define(["require","Underscore","jQuery","tau/core/class","tau/storage/app.state.store.seriailzer","tau/services/service.hash","tau/configurations/const.page.entity.actions","tau/services/boards/view.types"],function(t){var e=t("Underscore"),i=t("jQuery"),r=t("tau/core/class"),n=t("tau/storage/app.state.store.seriailzer"),a=t("tau/services/service.hash"),s=t("tau/configurations/const.page.entity.actions"),o=t("tau/services/boards/view.types");return r.extend({init:function(t){this.applicationPath=t.getApplicationPath(),this.currentAcid=t.getCurrentAcid(),this.configurator=t,this.stateManager=t.getStateManager(),this.stateManager.get({id:"appConfig",fields:["acid"],callback:e.bind(function(t){t.acid&&(this.currentAcid=t.acid)},this)}),this.stateManager.bind({paramId:"appConfig",fieldName:"acid",listener:this,callback:e.bind(function(t){t.value&&(this.currentAcid=t.value)},this)}),this.pages={view:"/RestUI/TpView.aspx"}},getApplicationPath:function(){return this.applicationPath},getCurrentAcid:function(){return this.currentAcid},getHashBuilder:function(){var t=new a;return t.setFakeWindow(),{append:function(i){return e.forEach(i,function(e,i){t.setHashParam(i,e)}),this},build:function(){var e="#"+t.getHash();return t.destroy(),e}}},getAddImpedimentUrl:function(t){return this.getApplicationPath()+"/Project/Tracking/Impediment/Edit.aspx?AssignableID="+t},getAddTimeUrl:function(t){return this.getApplicationPath()+"/Project/Tracking/Time/Edit.aspx?AssignableID="+t},getAddTaskForUserStoryUrl:function(t){return this.getApplicationPath()+"/Project/Planning/Task/Edit.aspx?UserStoryID="+t},getAddTaskForRequestUrl:function(t){return this.getApplicationPath()+"/Project/Planning/Task/Edit.aspx?RequestID="+t},getSplitForUserStoryUrl:function(t,e){return this.getApplicationPath()+"/Project/Planning/UserStory/Split.aspx?UserStoryID="+t+"&SplittedStoryID="+e},getAddBugForUserStoryUrl:function(t){return this.getApplicationPath()+"/Project/QA/Bug/Edit.aspx?UserStoryID="+t},getAddBugForRequestUrl:function(t){return this.getApplicationPath()+"/Project/QA/Bug/Edit.aspx?RequestID="+t
},getAddTestCaseForUserStoryUrl:function(t){return this.getApplicationPath()+"/Project/QA/TestCase/Edit.aspx?UserStoryID="+t},getAssignTestCasesForTestPlanUrl:function(t){return this.getApplicationPath()+"/Project/QA/TestPlan/AssignTestCases.aspx?TestPlanID="+t},getAddTestRunForTestPlanUrl:function(t){return this.getApplicationPath()+"/Project/QA/TestPlanRun/Edit.aspx?TestPlanID="+t},getAddUserStoryForRequestUrl:function(t){return this.getApplicationPath()+"/Project/Planning/UserStory/Edit.aspx?RequestID="+t},getAddUserStoryForFeatureUrl:function(t){return this.getApplicationPath()+"/Project/Planning/UserStory/Edit.aspx?FeatureID="+t},getAddUserStoryForIterationUrl:function(t){return this.getApplicationPath()+"/Project/Planning/UserStory/Edit.aspx?IterationID="+t},getAddFeatureForRequestUrl:function(t){return this.getApplicationPath()+"/Project/Planning/Feature/Edit.aspx?RequestID="+t},getAddTestCaseForTestPlanRunUrl:function(t){return this.getApplicationPath()+"/Project/QA/TestPlan/AssignTestCases.aspx?TestPlanID="+t},getAddIterationForReleaseUrl:function(t){return this.getApplicationPath()+"/Project/Planning/Iteration/Edit.aspx?ReleaseID="+t},getBoardPageRelativePath:function(){return"restui/board.aspx"},getPrintUrlRelative:function(t,e){return"RestUI/Print.aspx?acid="+this.getCurrentAcid()+"#"+e.toLowerCase()+"/"+t+"/"+s.PRINT},getNewViewUrl:function(t,e,i){return this.getRelativeViewUrl(t,e.toLowerCase(),i===!0?void 0:i)},getNewViewUrlWithAction:function(t,e,i,r){return this.getRelativeViewUrl(t+"/"+r,e.toLowerCase(),i===!0?void 0:i)},getDefaultViewUrl:function(t){return this.getRelativeBoardPageUrl("view/current",t)},getDashboardUrl:function(){return this.getDefaultViewUrl()},getShortViewUrl:function(t){return this.getApplicationPath()+"/entity/"+t.id},getEditUrl:function(t,i){var r=this.getApplicationPath()+"/",n=i.toLowerCase();return"project"==n?r+="EditProject.aspx?ProjectID="+t:"program"==n?r+="EditProgram.aspx?ProgramID="+t:(r+="Project/",r+=e.indexOf(["bug","testplan","testcase","testplanrun"],n)>-1?"QA/":e.indexOf(["impediment"],n)>-1?"Tracking/":e.indexOf(["request"],n)>-1?"HelpDesk/":"time"===n?"Tracking/":"Planning/",r+=i+"/Edit.aspx?"+i+"ID="+t),r
},getAvatarUrl:function(t,e){return this.getApplicationPath()+"/Avatar.ashx?UserId="+t+"&size="+e},getLogoutUrl:function(){return this.getApplicationPath()+"/login.aspx?logout=true"},getUserUrl:function(t,e){var i="/User/View.aspx?UserID=";return e&&"Requester"==e&&(i="/User/Requester/View.aspx?RequesterID="),[this.getApplicationPath(),i,t].join("")},getRelativeBoardPageUrl:function(t,i){var r=e.clone(this.configurator.getAppStateStore().settings);null==i?i=r:e.isString(i)&&(r.acid=i,i=r);var a=this.getHashBuilder();return a.append({page:t}),a.append(n.extractSharedState(i)),a.build()},getRelativeViewUrl:function(t,e,i){return this.getRelativeBoardPageUrl(e+"/"+t,i)},getRelativeBoardUrl:function(t,e){return this.getRelativeViewUrl(t,o.BOARD,e)},getRelativeLastBoardUrl:function(t){return this.getRelativeBoardUrl("last",t)},getAdminProcessEdit:function(t){return this.getApplicationPath()+"/Admin/EditProcess.aspx?acid="+this.getCurrentAcid()+"&ProcessID="+t+"&rmnav=1"},getAdminPracticesEdit:function(t){return this.getAdminProcessEdit(t)+"&hideleftmenu=1&nomashups"},getAdminAdminDelegateEdit:function(t){return this.getApplicationPath()+"/Admin/AdminDelegate.aspx?acid="+this.getCurrentAcid()+"&ProcessID="+t+"&rmnav=1&hideleftmenu=1&nomashups"},getAdminCustomFieldsEdit:function(t){return this.getApplicationPath()+"/Admin/CustomFields.aspx?acid="+this.getCurrentAcid()+"&ProcessID="+t+"&rmnav=1&hideleftmenu=1&nomashups"},getAdminWorkflowEdit:function(t){return this.getApplicationPath()+"/Admin/Workflow.aspx?acid="+this.getCurrentAcid()+"&ProcessID="+t+"&rmnav=1&hideleftmenu=1&nomashups"},getProcessSetupPage:function(t,e){return this.getRelativeBoardPageUrl("process-setup/"+t+"/"+e)},getWorkflowSetupPage:function(t,e){return this.getRelativeBoardPageUrl("process-setup/"+t+"/workflows/"+e)},_build:function(t){var e=t.path,r=i.param(t.params);return r&&(e=e+"?"+r),t.hash&&(e=e+"#"+t.hash),e},destroy:function(){this.stateManager.unbind(this)}})});