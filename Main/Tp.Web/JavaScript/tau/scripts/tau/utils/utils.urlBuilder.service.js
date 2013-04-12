define(["Underscore","jQuery","tau/core/class","tau/storage/app.state.store.seriailzer","tau/services/service.hash"],function(_,$,Class,AppStateStoreSerializer,ServiceHash){return Class.extend({init:function(configurator){this.applicationPath=configurator.getApplicationPath(),this.currentAcid=configurator.getCurrentAcid(),this.configurator=configurator,this.stateManager=configurator.getStateManager(),this.stateManager.get({id:"appConfig",fields:["acid"],callback:_.bind(function(res){res.acid&&(this.currentAcid=res.acid)},this)}),this.stateManager.bind({paramId:"appConfig",fieldName:"acid",listener:this,callback:_.bind(function(res){res.value&&(this.currentAcid=res.value)},this)}),this.pages={view:"/RestUI/TpView.aspx"}},getApplicationPath:function(){return this.applicationPath},getCurrentAcid:function(){return this.currentAcid},hash:function(){var localExternal=new ServiceHash(this.configurator),w={location:{hash:"",replace:function(value){w.location.hash=value}}};return localExternal.setWindow(w),{append:function(keyVal){return _.forEach(keyVal,function(val,key){localExternal.setHashParam(key,val)}),this},build:function(){return"#"+localExternal.getHash()}}},getViewUrl:function(id){return this.getApplicationPath()+"/View.aspx?noRedirect=1&id="+id},getAddImpedimentUrl:function(entityId){return this.getApplicationPath()+"/Project/Tracking/Impediment/Edit.aspx?AssignableID="+entityId},getAddTimeUrl:function(entityId){return this.getApplicationPath()+"/Project/Tracking/Time/Edit.aspx?AssignableID="+entityId},getAddTaskForUserStoryUrl:function(entityId){return this.getApplicationPath()+"/Project/Planning/Task/Edit.aspx?UserStoryID="+entityId},getAddTaskForRequestUrl:function(entityId){return this.getApplicationPath()+"/Project/Planning/Task/Edit.aspx?RequestID="+entityId},getSplitForUserStoryUrl:function(entityId,splittedStoryId){return this.getApplicationPath()+"/Project/Planning/UserStory/Split.aspx?UserStoryID="+entityId+"&SplittedStoryID="+splittedStoryId},getAddBugForUserStoryUrl:function(entityId){return this.getApplicationPath()+"/Project/QA/Bug/Edit.aspx?UserStoryID="+entityId},getAddBugForRequestUrl:function(entityId){return this.getApplicationPath()+"/Project/QA/Bug/Edit.aspx?RequestID="+entityId},getAddTestCaseForUserStoryUrl:function(entityId){return this.getApplicationPath()+"/Project/QA/TestCase/Edit.aspx?UserStoryID="+entityId},getAssignTestCasesForTestPlanUrl:function(entityId){return this.getApplicationPath()+"/Project/QA/TestPlan/AssignTestCases.aspx?TestPlanID="+entityId},getAddTestRunForTestPlanUrl:function(entityId){return this.getApplicationPath()+"/Project/QA/TestPlanRun/Edit.aspx?TestPlanID="+entityId},getAddUserStoryForRequestUrl:function(entityId){return this.getApplicationPath()+"/Project/Planning/UserStory/Edit.aspx?RequestID="+entityId},getAddUserStoryForFeatureUrl:function(entityId){return this.getApplicationPath()+"/Project/Planning/UserStory/Edit.aspx?FeatureID="+entityId},getAddUserStoryForIterationUrl:function(entityId){return this.getApplicationPath()+"/Project/Planning/UserStory/Edit.aspx?IterationID="+entityId},getAddUserStoryForTeamIterationUrl:function(entityId){return this.getApplicationPath()+"/Project/Planning/UserStory/Edit.aspx?TeamIterationID="+entityId},getAddFeatureForRequestUrl:function(entityId){return this.getApplicationPath()+"/Project/Planning/Feature/Edit.aspx?RequestID="+entityId},getAddTestCaseForTestPlanRunUrl:function(entityId){return this.getApplicationPath()+"/Project/QA/TestPlan/AssignTestCases.aspx?TestPlanID="+entityId},getAddIterationForReleaseUrl:function(entityId){return this.getApplicationPath()+"/Project/Planning/Iteration/Edit.aspx?ReleaseID="+entityId},getBoardPageRelativePath:function(){return"restui/board.aspx"},getPrintUrl:function(entityId,entityTypeName){return this.getApplicationPath()+"/RestUI/Print.aspx?id="+entityId+"&type=Tp.BusinessObjects."+entityTypeName},getPrintUrlRelative:function(entityId,entityTypeName){return"RestUI/Print.aspx?acid="+this.getCurrentAcid()+"#"+entityTypeName.toLowerCase()+"/"+entityId+"/print"},getNewViewUrl:function(entityId,entityTypeName,acid){var url={path:this.getApplicationPath()+this.pages.view,params:{},hash:""},acidArg=acid===!0?this.getCurrentAcid():acid;return acidArg&&(url.params.acid=acidArg),url.hash=entityTypeName.toLowerCase()+"/"+entityId,this._build(url)},getEditUrl:function(entityId,entityTypeName){var editUrl=this.getApplicationPath()+"/",name=entityTypeName.toLowerCase();return name=="project"?editUrl+="EditProject.aspx?ProjectID="+entityId:(editUrl+="Project/",_.indexOf(["bug","testplan","testcase","testplanrun"],name)>-1?editUrl+="QA/":_.indexOf(["impediment"],name)>-1?editUrl+="Tracking/":_.indexOf(["request"],name)>-1?editUrl+="HelpDesk/":name==="time"?editUrl+="Tracking/":editUrl+="Planning/",editUrl+=entityTypeName+"/Edit.aspx?"+entityTypeName+"ID="+entityId),editUrl},getAvatarUrl:function(userId,size){return this.getApplicationPath()+"/Avatar.ashx?UserId="+userId+"&size="+size},getDashboardUrl:function(){return this.getApplicationPath()+"/default.aspx"},getLogoutUrl:function(){return this.getApplicationPath()+"/login.aspx?logout=true"},getUserUrl:function(id,kind){var path="/User/View.aspx?UserID=";return kind&&kind=="Requester"&&(path="/User/Requester/View.aspx?RequesterID="),[this.getApplicationPath(),path,id].join("")},getRelativeBoardUrl:function(boardId,acidData){if(_.isUndefined(acidData))acidData=this.configurator.getAppStateStore().settings;else if(_.isString(acidData)){var acidDataConf=this.configurator.getAppStateStore().settings;acidDataConf.acid=acidData,acidData=acidDataConf}var boardUrlBuilder=this.hash();boardUrlBuilder.append({page:"board/"+boardId}),boardUrlBuilder.append(AppStateStoreSerializer.extractSharedState(acidData));var href=boardUrlBuilder.build();return href},getAdminWorkflowEdit:function(processId){return this.getApplicationPath()+"/Admin/Workflow.aspx?acid="+this.getCurrentAcid()+"&ProcessID="+processId+"&rmnav=1"},_build:function(schema){var url="";url=schema.path;var params=$.param(schema.params);return params&&(url=url+"?"+params),schema.hash&&(url=url+"#"+schema.hash),url},destroy:function(){this.stateManager.unbind(this)}})})