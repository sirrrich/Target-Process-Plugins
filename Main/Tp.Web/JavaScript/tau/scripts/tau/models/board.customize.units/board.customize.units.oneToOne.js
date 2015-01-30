define(["Underscore","tau/models/board.customize.units/const.entity.types.names","tau/models/board.customize.units/const.card.sizes","tau/models/board.customize.units/const.sorting.applying","app.path","tau/models/board.customize.units/board.customize.units.base","tau/services/service.features"],function(e,t,a,i,s,r,n){var o=[a.XS,a.S,a.M,a.L,a.XL],d=[a.XS,a.S,a.M,a.L,a.XL,a.LIST],l={type:"choice",expandable:!0,filter:!0,filterPosition:"top",showEmptyDataMessage:!0,hideDefaultValue:!0,allowToReset:!0,fullModeLabel:"show old&hellip;",emptyDataMessage:"No items found",maxHeight:300},m=function(t,a){return t&&e.find(t.items,function(e){return e.name===a})},u=[{id:"team_name_short",sizes:[a.M,a.L,a.XL,a.LIST],types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.TEAM_ITERATION,t.TEST_PLAN_RUN,t.TEST_PLAN],classId:"tau-board-unit_type_team-name",hideIf:function(e){return!e.team||!e.team.name},name:"Team name",header:"Team",template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.team.name,15)%></div>'],sampleData:{team:{name:"Customize cards team"}}},{id:"team_name_long",sizes:d,sections:1,types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.TEAM_ITERATION,t.TEST_PLAN_RUN,t.TEST_PLAN],classId:"tau-board-unit_type_team-name",hideIf:function(e){return!e.team||!e.team.name},name:"Team name",header:"Team",sortConfig:{field:"team.name"},template:['<div class="tau-board-unit__value"><%!this.data.team.name%></div>'],sampleData:{team:{name:"Customize cards team"}},model:"team:{name:team.name},id:team.id"},{id:"team_name_long_editable",sizes:[a.LIST],types:[t.BUG],classId:"tau-board-unit_type_team-name",hideIf:function(e){return!e.team||!e.team.name},name:"Team name",header:"Team",sortConfig:{field:"team.name"},template:['<div class="tau-board-unit__value"><%!this.data.team.name%></div>'],sampleData:{team:{name:"Customize cards team"}},model:"team:{name:team.name},id:team.id",editorConfig:e.extend({},l,{listType:"team",emptyDataMessage:"No teams found",templateOption:"state.team.option"})},{id:"state_short",classId:"tau-board-unit_type_state",name:"State",types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.IMPEDIMENT,t.TEST_PLAN_RUN,t.TEST_PLAN],sizes:[a.M,a.L,a.XL,a.LIST],template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.entityState.name,19)%></div>'],sampleData:{entityState:{name:"Ready for release"}},editorConfig:{type:"choice.entityState"}},{id:"state_full_length",classId:"tau-board-unit_type_state",name:"State",types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.IMPEDIMENT,t.TEST_PLAN_RUN,t.TEST_PLAN],sizes:o,sections:1,sortConfig:{field:"entityState.name"},template:['<div class="tau-board-unit__value"><%!this.data.entityState.name%></div>'],sampleData:{entityState:{name:"Ready for release"}},editorConfig:{type:"choice.entityState"}},{id:"release_id",classId:"tau-board-unit_type_id tau-board-unit_type_release-id",hideIf:function(e){return!e.release||!e.release.id
},name:"${Release,capital} id",header:"${Release,camel} Id",types:[t.FEATURE,t.STORY,t.BUG,t.ITERATION,t.TEST_PLAN_RUN,t.BUILD,t.TASK],sizes:d,sortConfig:{field:"release.id"},template:['<%= fn.generateEntityLink(this, this.data.release, "release") %>'],term:"release",sampleData:{release:{id:120188,name:"Release #1 (Minimal wow effect)"}},listSettings:{title:["<%! this.data.release && this.data.release.name %>"]}},{id:"release_short",classId:"tau-board-unit_type_release",hideIf:function(e){return!e.release||!e.release.name},name:"${Release,capital}",header:"${Release,camel}",types:[t.FEATURE,t.STORY,t.TASK,t.BUG,t.ITERATION,t.TEST_PLAN_RUN,t.BUILD],sizes:[a.M,a.L,a.XL,a.LIST],template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.release.name,19)%></div>'],term:"release",sampleData:{release:{name:"Release #1 (Minimal wow effect)"}}},{id:"release_long",classId:"tau-board-unit_type_release",name:"${Release,capital}",header:"${Release,camel}",hideIf:function(e){return!e.release||!e.release.name},types:[t.FEATURE,t.STORY,t.TASK,t.BUG,t.ITERATION,t.TEST_PLAN_RUN,t.BUILD],sizes:o,sections:1,sortConfig:{field:"release.name"},template:['<div class="tau-board-unit__value"><%!this.data.release.name%></div>'],term:"release",sampleData:{release:{name:"Release #1 (Minimal wow effect)"}},model:"release:{name:release.name},id:release.id",editorConfig:e.extend({},l,{listType:"release",emptyDataMessage:"No ${release,lower,names} found",isEditable:function(e){return"task"!==e.type},clearValueLabel:"(no ${release,lower,names})"})},{id:"iteration_id",classId:"tau-board-unit_type_id tau-board-unit_type_iteration-id",hideIf:function(e){return!e.iteration||!e.iteration.id},name:"${Iteration,capital} id",header:"${Iteration,camel} Id",types:[t.STORY,t.BUG,t.TEST_PLAN_RUN,t.BUILD,t.TASK],sizes:d,sortConfig:{field:"iteration.id"},template:['<%= fn.generateEntityLink(this, this.data.iteration, "iteration") %>'],term:"iteration",sampleData:{iteration:{id:130387,name:"Iteration #1.2 (Research/Concept)"}},listSettings:{title:["<%! this.data.iteration && this.data.iteration.name %>"]}},{id:"iteration_short",classId:"tau-board-unit_type_iteration",hideIf:function(e){return!e.iteration||!e.iteration.name
},name:"${Iteration,capital}",header:"${Iteration,camel}",types:[t.STORY,t.TASK,t.BUG,t.TEST_PLAN_RUN,t.BUILD],sizes:[a.M,a.L,a.XL,a.LIST],template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.iteration.name,19)%></div>'],term:"iteration",sampleData:{iteration:{name:" Iteration #1.2 (Research/Concept)"}}},{id:"iteration_long",classId:"tau-board-unit_type_iteration",hideIf:function(e){return!e.iteration||!e.iteration.name},name:"${Iteration,capital}",header:"${Iteration,camel}",types:[t.STORY,t.TASK,t.BUG,t.TEST_PLAN_RUN,t.BUILD],sizes:o,sections:1,sortConfig:{field:"iteration.name"},template:['<div class="tau-board-unit__value"><%!this.data.iteration.name%></div>'],term:"iteration",sampleData:{iteration:{name:" Iteration #1.2 (Research/Concept)"}},model:"iteration:{name:iteration.name},id:iteration.id,practices:project.process.practices",editorConfig:e.extend({},l,{listType:"iteration",emptyDataMessage:"No ${iteration,lower,names} found",isEditable:function(e){return"task"!==e.type&&m(e.data.practices,"Iterations")},clearValueLabel:"(no ${iteration,lower})"})},{id:"feature_id",classId:"tau-board-unit_type_id tau-board-unit_type_feature-id",hideIf:function(e){return!e.feature||!e.feature.id},name:"${Feature,capital} id",header:"${Feature,camel} Id",settings:[{types:[t.STORY,t.BUG],sizes:d,model:"feature:{feature.id,feature.name}",sortConfig:{field:"feature.id"}},{types:[t.TASK],sizes:d,model:"feature:{userStory.feature.id,userStory.feature.name}",sortConfig:{field:"userStory.feature.id"}}],template:['<%= fn.generateEntityLink(this, this.data.feature, "feature") %>'],term:"feature",sampleData:{feature:{id:91283,name:"Reports: High Level Report"}},listSettings:{title:["<%! this.data.feature && this.data.feature.name %>"]}},{id:"feature_short",classId:"tau-board-unit_type_feature",hideIf:function(e){return!e.feature||!e.feature.name},name:"${Feature,capital}",header:"${Feature,camel}",sortConfig:{field:"feature.name"},settings:[{types:[t.STORY,t.BUG],sizes:[a.M,a.L,a.XL,a.LIST],model:"feature:{feature.name}"},{types:[t.TASK],sizes:[a.M,a.L,a.XL,a.LIST],model:"feature:{userStory.feature.name}"}],term:"feature",template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.feature.name,19)%></div>'],sampleData:{feature:{name:"Reports: High Level Report"}}},{id:"feature_long",classId:"tau-board-unit_type_feature",hideIf:function(e){return!e.feature||!e.feature.name
},name:"${Feature,capital}",header:"${Feature,camel}",term:"feature",settings:[{types:[t.STORY,t.BUG],sizes:o,model:"feature:{feature.name},id:feature.id,practices:project.process.practices",sortConfig:{field:"feature.name"}},{types:[t.TASK],sizes:o,model:"feature:{userStory.feature.name}",sortConfig:{field:"userStory.feature.name,practices:project.process.practices"}}],sections:1,template:['<div class="tau-board-unit__value"><%!this.data.feature.name%></div>'],sampleData:{feature:{name:"Reports: High Level Report"}},model:"feature:{feature.name},id:feature.id",editorConfig:{type:"finder.entity",propertyName:"feature",isEditable:function(e){var t=e.type;return("userstory"==t||"bug"==t)&&m(e.data.practices,"Requirements")},allowToReset:!0,clearValueLabel:"(no ${feature,lower})"}},{id:"project_icon",classId:"tau-board-unit_type_icon",hideIf:function(e){return!e.project||!e.project.id},name:"Project color",header:"Project Color",settings:[{types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.TEST_CASE,t.IMPEDIMENT,t.ITERATION,t.TEST_PLAN,t.TEST_PLAN_RUN,t.BUILD],sizes:d},{types:[t.PROJECT_MEMBER],sizes:d}],template:['<i class="tau-icon tau-icon_type_color" style="background-color: <%= this.data.project.color || "transparent"%>;"></i>'],sampleData:{project:{id:1,color:"#f9d9d1",name:"CodeGuard 3"}},listSettings:{title:"<%= this.data.project.name %>"}},{id:"project_abbr",classId:"tau-board-unit_type_project_abbr",hideIf:function(e){return!e.project||!e.project.abbreviation},name:"Project abbreviation",header:"Project",sortConfig:{field:"project.abbreviation"},settings:[{types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.TEST_CASE,t.IMPEDIMENT,t.ITERATION,t.TEST_PLAN,t.TEST_PLAN_RUN,t.BUILD],sizes:d},{types:[t.PROJECT_MEMBER],sizes:[a.S,a.M,a.L,a.XL,a.LIST]},{types:[t.GENERAL,t.INBOUND_RELATIONS,t.OUTBOUND_RELATIONS],sizes:[a.LIST]}],template:['<div class="tau-board-unit__value_type_abbr"',' style="background-color: <%=this.data.project.color||"transparent"%>;">',"<%!this.data.project.abbreviation%>","</div>"],sampleData:{project:{color:"#f9d9d1",abbreviation:"CGR",name:"CodeGuard 3"}},listSettings:{title:"<%= this.data.project.name %>"}},{id:"project_short",classId:"tau-board-unit_type_project",hideIf:function(e){return!e.project||!e.project.name
},name:"Project name",header:"Project",sortConfig:{field:"project.name"},settings:[{types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.TEST_CASE,t.IMPEDIMENT,t.ITERATION,t.TEST_PLAN,t.TEST_PLAN_RUN,t.BUILD],sizes:[a.M,a.L,a.XL,a.LIST]},{types:[t.PROJECT_MEMBER],sizes:[a.M,a.L,a.XL,a.LIST]}],template:['<div class="tau-board-unit__value" style="background-color: <%= this.data.project.color || "transparent"%>;">',"<%! fn.trim(this.data.project.name, 15) %>","</div>"],sampleData:{project:{name:"Custom Graphic Reports",color:"#f9d9d1"}}},{id:"project_long",classId:"tau-board-unit_type_project",hideIf:function(e){return!e.project||!e.project.name},name:"Project name",header:"Project",sortConfig:{field:"project.name"},settings:[{types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.TEST_CASE,t.IMPEDIMENT,t.ITERATION,t.TEST_PLAN,t.TEST_PLAN_RUN,t.BUILD],sizes:d},{types:[t.PROJECT_MEMBER],sizes:[a.S,a.M,a.L,a.XL]}],sections:1,template:['<div class="tau-board-unit__value" style="background-color: <%= this.data.project.color || "transparent"%>;">',"<%! this.data.project.name %>","</div>"],sampleData:{project:{name:"Custom Graphic Reports",color:"#f9d9d1"}},model:"project:{name:project.name,color:project.color},id:project.id"},{id:"project_long_editable",classId:"tau-board-unit_type_project",hideIf:function(e){return!e.project||!e.project.name},name:"Project name",header:"Project",sortConfig:{field:"project.name"},types:[t.BUG],sizes:[a.LIST],template:['<div class="tau-board-unit__value" style="background-color: <%= this.data.project.color || "transparent"%>;">',"<%! this.data.project.name %>","</div>"],sampleData:{project:{name:"Custom Graphic Reports",color:"#f9d9d1"}},model:"project:{name:project.name,color:project.color},id:project.id",editorConfig:e.extend({},l,{listType:"project",emptyDataMessage:"No projects found",templateOption:"state.project.option"})},{id:"program_name",classId:"tau-board-unit_type_program",hideIf:function(e){return!e.program||!e.program.name
},name:"Program name",header:"Program",settings:[{types:[t.PROJECT],sizes:d}],template:['<div class="tau-board-unit__value">',"<%! this.data.program.name %>","</div>"],sampleData:{program:{name:"Marketing"}}},{id:"severity_icon",classId:"",hideIf:function(e){return e.severity.importance>=2},name:"Top Severity",header:"",types:[t.BUG],sizes:d,model:"severity:{name:severity.name,importance:severity.importance},id:severity.id",sampleData:{severity:{name:"Will appear for top severity bugs",importance:1}},template:['<div title="<%! fn.cond(this.data.severity.importance < 2, this.data.severity.name) %>"',' class="tau-board-unit__value tau-board-unit__value-severity-top"></div>'],listSettings:{title:"<%! fn.cond(this.data.severity.importance < 2, this.data.severity.name) %>",maxWidth:32}},{id:"severity_short",classId:"tau-board-unit_type_severity",name:"Severity",types:[t.BUG],sizes:[a.M,a.L,a.XL,a.LIST],template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.severity.name,15)%></div>'],sampleData:{severity:{name:"Annoyance & Frustration - Easy workaround"}}},{id:"severity_long",classId:"tau-board-unit_type_severity",name:"Severity",types:[t.BUG],sizes:d,sections:1,sortConfig:{field:"severity.importance"},template:['<div class="tau-board-unit__value"><%!this.data.severity.name%></div>'],sampleData:{severity:{name:"Annoyance & Frustration - Easy workaround",importance:3}},model:"severity:{name:severity.name,importance:severity.importance},id:severity.id",editorConfig:{type:"choice",listType:"severity"},listSettings:{minWidth:110}},{id:"business_value_short",classId:"tau-board-unit_type_business-value",name:"Business value",header:"Business Value",settings:[{types:[t.EPIC,t.FEATURE,t.STORY,t.BUG,t.TEST_CASE,t.REQUEST],sizes:[a.M,a.L,a.XL,a.LIST]},{types:[t.TEST_CASE_RUN],sizes:[a.M,a.L,a.XL,a.LIST],model:"testCase.priority"}],sortConfig:{field:"priority.importance",inverseOrder:!0},template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.priority.name,15)%></div>'],sampleData:{priority:{name:"Nice to have"}}},{id:"business_value_long",classId:"tau-board-unit_type_business-value",name:"Business value",header:"Business Value",settings:[{types:[t.EPIC,t.FEATURE,t.STORY,t.BUG,t.REQUEST,t.TEST_CASE,t.TEST_CASE_RUN],sizes:d,model:"priority:{name:priority.name},id:priority.id"}],sortConfig:{field:"priority.importance",inverseOrder:!0},sections:1,template:['<div class="tau-board-unit__value"><%!this.data.priority.name%></div>'],sampleData:{priority:{name:"Nice to have"}},editorConfig:{type:"choice",listType:"priority",isEditable:function(e){return"testcaserun"!==e.type
}}},{id:"priority_short",classId:"tau-board-unit_type_priority",name:"Priority",header:"Priority",types:[t.IMPEDIMENT],sizes:[a.M,a.L,a.XL,a.LIST],sortConfig:{field:"priority.importance",inverseOrder:!0},template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.priority.name,15)%></div>'],sampleData:{priority:{name:"Critical"}}},{id:"priority_long",classId:"tau-board-unit_type_priority",name:"Priority",header:"Priority",types:[t.IMPEDIMENT],sizes:o,sortConfig:{field:"priority.importance",inverseOrder:!0},sections:1,template:['<div class="tau-board-unit__value"><%!this.data.priority.name%></div>'],sampleData:{priority:{name:"Critical"}},model:"priority:{name:priority.name},id:priority.id",editorConfig:{type:"choice",listType:"priority"}},{id:"team",classId:"tau-board-unit_type_icon",hideIf:function(e){return!e.team||!e.team.id},name:"Team icon",header:"Team",types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.TEAM_ITERATION,t.TEST_PLAN_RUN],sizes:d,template:['<i class="tau-icon tau-icon_type_svg tau-icon_name_<%= this.data.team.icon||"trihead" %>"></i>'],sampleData:{team:{id:1,icon:"ufo",name:"Ufo team"}},listSettings:{title:'<%= this.data.team.name || "" %>'}},{id:"owner",classId:"tau-board-unit_type_avatar",name:"Owner",sortConfig:{field:"owner.fullName"},types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.TEST_CASE,t.IMPEDIMENT,t.TEAM,t.PROJECT,t.ITERATION,t.TEAM_ITERATION,t.RELEASE,t.TEST_PLAN,t.TEST_PLAN_RUN,t.BUILD],sizes:d,template:['<div class="tau-avatar tau-owner-avatar">',"<% var owner = this.data.owner; %>",'<img src="<%= owner.avatarUri %>20" <% if (!this.settings.isDesignMode) { %>title="<%! _.trim(owner.fullName) || owner.email %>"<% } %>>',"</div>"],model:"owner:{owner.avatarUri,owner.fullName,owner.email}",sampleData:{owner:{avatarUri:r.url("/Javascript/tau/css/images/icons/user.png?size="),fullName:"Owner's Full Name"}}},{id:"teamiteration_id",classId:"tau-board-unit_type_id tau-board-unit_type_teamiteration-id",hideIf:function(e){return!e.teamIteration||!e.teamIteration.id
},name:"${Team iteration,capital} id",header:"${Team Iteration,camel} Id",sortConfig:{field:"teamIteration.id"},types:[t.STORY,t.BUG,t.TEST_PLAN_RUN,t.TASK],sizes:d,template:['<%= fn.generateEntityLink(this, this.data.teamIteration, "teamiteration") %>'],term:"teamiteration",sampleData:{teamIteration:{id:270707,name:"Team iteration #1.1 (Research/Concept)"}},listSettings:{title:["<%! this.data.teamIteration && this.data.teamIteration.name %>"]}},{id:"team_iteration_short",classId:"tau-board-unit_type_teamiteration",hideIf:function(e){return!e.teamIteration||!e.teamIteration.name},name:"${Team iteration,capital}",header:"${Team Iteration,camel}",types:[t.STORY,t.BUG,t.TEST_PLAN_RUN,t.TASK],sizes:[a.M,a.L,a.XL,a.LIST],template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.teamIteration.name,19)%></div>'],term:"teamiteration",sampleData:{teamIteration:{name:"Team iteration #1.1 (Research/Concept)"}}},{id:"team_iteration_long",classId:"tau-board-unit_type_teamiteration",name:"${Team iteration,capital}",header:"${Team Iteration,camel}",hideIf:function(e){return!e.teamIteration||!e.teamIteration.name},types:[t.STORY,t.BUG,t.TEST_PLAN_RUN,t.TASK],sizes:o,sections:1,sortConfig:{field:"teamIteration.name"},template:['<div class="tau-board-unit__value"><%!this.data.teamIteration.name%></div>'],term:"teamiteration",sampleData:{teamIteration:{name:"Team iteration #1.1 (Research/Concept)"}},model:"teamIteration:{name:teamIteration.name},id:teamIteration.id",editorConfig:e.extend({},l,{listType:"teamIteration",emptyDataMessage:"No ${team iteration,lower,names} found",isEditable:function(e){return"task"!==e.type},clearValueLabel:"(no ${team iteration,lower})"})},{id:"last_commented_user_icon",classId:"tau-board-unit_type_avatar",hideIf:function(e){return!e.lastCommentedUser||!e.lastCommentedUser.avatarUri},name:"Last commented user",header:"Last Commented User",types:[t.EPIC,t.FEATURE,t.STORY,t.TASK,t.BUG,t.REQUEST,t.TEST_CASE,t.IMPEDIMENT,t.ITERATION,t.TEAM_ITERATION,t.RELEASE,t.TEST_PLAN,t.TEST_PLAN_RUN,t.BUILD],sizes:d,sortConfig:{field:"lastCommentedUser.fullName"},template:['<div class="tau-avatar tau-last-commented-user-avatar">','<img <% if (this.data.lastCommentedUser.avatarUri) { %> src="<%= this.data.lastCommentedUser.avatarUri %>" <% } %> >',"</div>"],listSettings:{title:["<% var user = this.data.lastCommentedUser, title = user.fullName || user.email; %>",'<%= fn.cond(title, title, "") %>']},sampleData:{lastCommentedUser:{avatarUri:r.url("/Javascript/tau/css/images/icons/user.png"),fullName:"Johnny Depp",email:"j.depp@email.com"}}},{id:"user_total_allocation",classId:"tau-board-unit_type_allocation",name:"Total user allocation",header:"User Allocation",types:[t.PROJECT_MEMBER],sizes:[a.S,a.M,a.L,a.XL,a.LIST],sortConfig:{field:"user.currentAllocation"},template:['<div class="tau-board-unit__value"><%= fn.precise_round(this.data.user.currentAllocation, 0) %></div>'],listSettings:{title:"<%= fn.precise_round(this.data.user.currentAllocation, 0) %>%"},sampleData:{user:{currentAllocation:150}}},{id:"build_id",classId:"tau-board-unit_type_id tau-board-unit_type_build-id",name:"${Build,capital} id",header:"${Build,camel} Id",hideIf:function(e){return!e.build||!e.build.id
},types:[t.BUG,t.TEST_PLAN_RUN],sizes:d,template:['<%= fn.generateEntityLink(this, this.data.build, "build") %>'],term:"build",sampleData:{build:{id:314159,name:"Build 2.21.9 acceptance testing"}},listSettings:{title:["<%! this.data.build && this.data.build.name %>"]}},{id:"build_short",classId:"tau-board-unit_type_build",name:"${Build,capital}",header:"${Build,camel}",hideIf:function(e){return!e.build||!e.build.name},types:[t.BUG,t.TEST_PLAN_RUN],sizes:[a.M,a.L,a.XL,a.LIST],template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.build.name,19)%></div>'],term:"build",sampleData:{build:{name:"Build 2.21.9 acceptance testing"}}},{id:"build_long",classId:"tau-board-unit_type_build",hideIf:function(e){return!e.build||!e.build.name},name:"${Build,capital}",header:"${Build,camel}",types:[t.BUG,t.TEST_PLAN_RUN],sizes:o,sections:1,template:['<div class="tau-board-unit__value"><%!this.data.build.name%></div>'],term:"build",sampleData:{build:{name:"Build 2.21.9 acceptance testing"}}},{id:"userstory_id",classId:"tau-board-unit_type_id tau-board-unit_type_userstory-id",hideIf:function(e){return!e.userStory||!e.userStory.id},name:"${User story,capital} id",header:"${User Story,camel} Id",types:[t.TASK,t.BUG,t.TEST_CASE],sizes:d,sortConfig:{field:"userStory.id"},template:['<%= fn.generateEntityLink(this, this.data.userStory, "userstory") %>'],term:"userstory",sampleData:{userStory:{id:240685,name:"Add audit history for Team and Team Iteration"}},listSettings:{title:["<%!this.data.userStory && this.data.userStory.name %>"]}},{id:"us_name_short",classId:"tau-board-unit_type_userstory",hideIf:function(e){return!e.userStory||!e.userStory.name},name:"${User story,capital}",header:"${User Story,camel}",types:[t.TASK,t.BUG,t.TEST_CASE],sizes:[a.M,a.L,a.XL,a.LIST],template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.userStory.name,19)%></div>'],term:"userstory",sampleData:{userStory:{name:"Add audit history for Team and Team Iteration"}}},{id:"us_name_long",classId:"tau-board-unit_type_userstory",hideIf:function(e){return!e.userStory||!e.userStory.name
},name:"${User story,capital}",header:"${User Story,camel}",types:[t.TASK,t.BUG,t.TEST_CASE],sizes:o,sections:1,sortConfig:{allowed:i.SINGLE,field:"userStory.name"},template:['<div class="tau-board-unit__value"><%!this.data.userStory.name%></div>'],term:"userstory",sampleData:{userStory:{name:"Add audit history for Team and Team Iteration"}},model:"userStory:{userStory.name},id:userStory.id",editorConfig:{type:"finder.entity",propertyName:"userstory",isEditable:function(e){var t=e.type;return"bug"==t||"task"==t||"testcase"==t},allowToReset:function(e){return"task"!==e.type.toLowerCase()},clearValueLabel:"(no ${user story,lower})"}},{id:"role_short",classId:"tau-board-unit_type_role",name:"Role",settings:[{types:[t.USER],sizes:[a.S,a.M,a.L,a.XL,a.LIST],model:"roleName:role.name"},{types:[t.PROJECT_MEMBER],sizes:[a.S,a.M,a.L,a.XL,a.LIST],model:"roleName:role.name"}],template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.roleName,19)%></div>'],sampleData:{roleName:"Product Owner / Scrum Master"}},{id:"role_long",classId:"tau-board-unit_type_role",name:"Role",settings:[{types:[t.USER,t.ASSIGNED_USER],sizes:[a.S,a.M,a.L,a.XL],model:"roleName:role.name"},{types:[t.PROJECT_MEMBER],sizes:[a.S,a.M,a.L,a.XL],model:"roleName:role.name"}],sections:1,sortConfig:{field:"role.name"},template:['<div class="tau-board-unit__value"><%!this.data.roleName%></div>'],sampleData:{roleName:"Product Owner / Scrum Master"}},{id:"request_question",classId:"tau-board-unit_type_icon",name:"Request type (issue, idea or question)",header:"Req. Type",types:[t.REQUEST],sizes:d,template:{customFunctions:{typeToIcon:function(e){var t=e.data.requestType.name.toLowerCase();switch(t){case"issue":return"warning";case"idea":return"lightbulb";case"question":return"question";default:return"undefined"}}},markup:['<i class="tau-icon tau-icon_type_svg tau-icon_name_<%= fn.typeToIcon(this)%>" title="<%= this.data.requestType.name%>"></i>']},sampleData:{requestType:{name:"Issue"}},listSettings:{title:["<%!this.data.requestType.name%>"]}},{id:"testcase_id",classId:"tau-board-unit_type_id tau-board-unit_type_testcase-id",hideIf:function(e){return!e.testCase||!e.testCase.id
},name:"${TestCase,capital} id",header:"${TestCase,default,iconSmall} Id",types:[t.TEST_CASE_RUN],sizes:d,model:"testCase:{testCase.id, testCase.name}",sortConfig:{field:"testCase.id"},template:['<%= fn.generateEntityLink(this, this.data.testCase, "testcase") %>'],sampleData:{testCase:{id:271828,name:"Smoke test: email integration"}},listSettings:{title:["<%! this.data.testCase && this.data.testCase.name %>"]}},{id:"testplan_id",classId:"tau-board-unit_type_id tau-board-unit_type_testplan-id",hideIf:function(e){return!e.testPlan||!e.testPlan.id},name:"Test plan id",header:"Test Plan Id",types:[t.TEST_PLAN_RUN],sizes:d,sortConfig:{field:"testPlan.id"},template:['<%= fn.generateEntityLink(this, this.data.testPlan, "testplan") %>'],term:"testplan",sampleData:{testPlan:{id:271828,name:"Smoke test: email integration"}},listSettings:{title:["<%! this.data.testPlan && this.data.testPlan.name %>"]}},{id:"test_plan_short",classId:"tau-board-unit_type_testplan",hideIf:function(e){return!e.testPlan||!e.testPlan.name},name:"Test plan",header:"Test Plan",types:[t.TEST_PLAN_RUN],sizes:[a.M,a.L,a.XL,a.LIST],template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.testPlan.name,19)%></div>'],term:"testplan",sampleData:{testPlan:{name:"Smoke test: email integration"}}},{id:"test_plan_long",classId:"tau-board-unit_type_testplan",hideIf:function(e){return!e.testPlan||!e.testPlan.name},name:"Test plan",types:[t.TEST_PLAN_RUN],sizes:o,sections:1,template:['<div class="tau-board-unit__value"><%!this.data.testPlan.name%></div>'],term:"testplan",sampleData:{testPlan:{name:"Smoke test: email integration"}}},{id:"related_entity_short",classId:function(e){return"tau-board-unit_type_"+(e&&e.assignable.entityType.name||"").toLowerCase()},hideIf:function(e){return!e.assignable||!e.assignable.name},name:"Related entity",header:"Related Entity",types:[t.IMPEDIMENT],sizes:[a.M,a.L,a.XL,a.LIST],template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.assignable.name,19)%></div>'],sampleData:{assignable:{name:"Custom Reports: Inline editor should work",entityType:{name:"UserStory"}}}},{id:"related_entity_long",classId:function(e){return"tau-board-unit_type_"+(e&&e.assignable.entityType.name||"").toLowerCase()
},hideIf:function(e){return!e.assignable||!e.assignable.name},name:"Related entity",header:"Related Entity",types:[t.IMPEDIMENT],sizes:o,sections:1,template:['<div class="tau-board-unit__value"><%!this.data.assignable.name%></div>'],sampleData:{assignable:{name:"Custom Reports: Inline editor should work",entityType:{name:"UserStory"}}}},{id:"pm_big_details",classId:"tau-board-unit_type_user-info",name:"Large avatar with some details (name, role, project)",types:[t.PROJECT_MEMBER],sizes:[a.S,a.M,a.L,a.XL],sections:2,template:['<img class="tau-board-unit_type_user-info__avatar" src="<%= this.data.user.avatarUri %>">','<div class="tau-board-unit_type_user-info__name"><%! _.trim(this.data.user.fullName) || this.data.user.email %></div>','<div class="tau-board-unit_type_user-info__role"><%! this.data.role.name %> in <%! this.data.project.abbreviation || this.data.project.name %></div>'],sampleData:{role:{name:"Writer"},project:{abbreviation:"CGR",name:"Custom Graphic Reports"},user:{fullName:"Uladzimir Karatkievich",email:"u.karatkievich@writer.com",avatarUri:r.url("/Javascript/tau/css/images/icons/user.png")}}},{id:"pm_big_details_role",classId:"tau-board-unit_type_user-info",name:"Large avatar with some details (name, role)",types:[t.PROJECT_MEMBER],sizes:[a.S,a.M,a.L,a.XL],sections:2,template:['<img class="tau-board-unit_type_user-info__avatar" src="<%= this.data.user.avatarUri %>">','<div class="tau-board-unit_type_user-info__name"><%! _.trim(this.data.user.fullName) || this.data.user.email %></div>','<div class="tau-board-unit_type_user-info__role"><%! this.data.role.name %></div>'],sampleData:{role:{name:"Writer"},user:{fullName:"Uladzimir Karatkievich",email:"u.karatkievich@writer.com",avatarUri:r.url("/Javascript/tau/css/images/icons/user.png")}}},{id:"pm_big_details_project",classId:"tau-board-unit_type_user-info",name:"Large avatar with some details (name, project)",types:[t.PROJECT_MEMBER],sizes:[a.S,a.M,a.L,a.XL],sections:2,template:['<img class="tau-board-unit_type_user-info__avatar" src="<%= this.data.user.avatarUri %>">','<div class="tau-board-unit_type_user-info__name"><%! _.trim(this.data.user.fullName) || this.data.user.email %></div>','<div class="tau-board-unit_type_user-info__role">in <%! this.data.project.abbreviation || this.data.project.name %></div>'],sampleData:{project:{abbreviation:"CGR",name:"Custom Graphic Reports"},user:{fullName:"Uladzimir Karatkievich",email:"u.karatkievich@writer.com",avatarUri:r.url("/Javascript/tau/css/images/icons/user.png")}}},{id:"responsible_person",classId:"tau-board-responsible-person",name:"Responsible person",header:"Responsible",types:[t.IMPEDIMENT],sizes:d,model:"user:{responsible.id,responsible.avatarUri,responsible.fullName,responsible.email}",template:['<div class="tau-avatar">','<img src="<%=this.data.user.avatarUri%>20"',"<% if (!this.settings.isDesignMode) { %>",'title="<%=_.escape(_.trim(this.data.user.fullName) || this.data.user.email) %>"',"<% } %>",'">',"</div>"],sampleData:{user:{id:1,fullName:"Uladzimir Karatkievich",email:"u.karatkievich@writer.com",avatarUri:r.url("/Javascript/tau/css/images/icons/users/karat.png?size=")}},listSettings:{title:["<%! _.escape(_.trim(this.data.user.fullName) || this.data.user.email) %>"]}},{id:"process_short",classId:"tau-board-unit_type_process",name:"Process",types:[t.PROJECT],sizes:[a.M,a.L,a.XL,a.LIST],template:["<%if (this.configurator.loggedUser.isAdministrator || this.data.process.isProcessAdmin) {%>",'<%= fn.generateEntityLink(this, this.data.process, "process", { text: this.data.process.name, maxTextLength: 15, title: "", href: "" }) %>',"<%} else {%>",'<div class="tau-board-unit__value"><%!fn.trim(this.data.process.name,15)%></div>',"<% } %>"],model:"process:{isProcessAdmin:Process.ProcessAdmins.Where(id=3).Count(),name:Process.Name, id:Process.ID}",sampleData:{process:{id:"",name:"Scrum",isProcessAdmin:!1}},listSettings:{title:["<%! _.escape(_.trim(this.data.process.name)) %>"]}},{id:"process_long",classId:"tau-board-unit_type_process",name:"Process",types:[t.PROJECT],sizes:o,sections:1,template:["<%if (this.configurator.loggedUser.isAdministrator || this.data.process.isProcessAdmin) {%>",'<%= fn.generateEntityLink(this, this.data.process, "process", { text: this.data.process.name, title: "", href: "" }) %>',"<%} else {%>",'<div class="tau-board-unit__value"><%!this.data.process.name%></div>',"<% } %>"],model:"process:{isProcessAdmin:Process.ProcessAdmins.Where(id=3).Count(),name:Process.Name, id:Process.ID}",sampleData:{process:{id:"",name:"Scrum",isProcessAdmin:!1}},listSettings:{title:["<%! _.escape(_.trim(this.data.process.name)) %>"]}},{id:"t_work_on",classId:function(e){return"tau-board-unit_type_"+(e&&e.assignable.entityType.name||"").toLowerCase()
},name:"Work on",header:"Work On",types:[t.TIME],sizes:[a.LIST],sections:1,template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.assignable.name,30)%></div>'],listSettings:{title:["<%= this.data.assignable.name %>"]},sampleData:{assignable:{name:"Task #1 Design for mobile application",entityType:{name:"Task"}}}}],p=new n;return p.isEnabled("entity.epics")&&u.push([{id:"epic_id",classId:"tau-board-unit_type_id tau-board-unit_type_epic-id",hideIf:function(e){return!e.epic||!e.epic.id},name:"${Epic,capital} id",header:"${Epic,camel} Id",settings:[{types:[t.FEATURE],sizes:d,model:"epic:{epic.id,epic.name}",sortConfig:{field:"epic.id"}}],template:['<%= fn.generateEntityLink(this, this.data.epic, "epic") %>'],term:"epic",sampleData:{epic:{id:91283,name:"Custom Reports"}},listSettings:{title:["<%! this.data.epic && this.data.epic.name %>"]}},{id:"epic_short",classId:"tau-board-unit_type_epic",hideIf:function(e){return!e.epic||!e.epic.name},name:"${Epic,capital}",header:"${Epic,camel}",sortConfig:{field:"epic.name"},settings:[{types:[t.FEATURE],sizes:[a.M,a.L,a.XL,a.LIST],model:"epic:{epic.name}"}],term:"epic",template:['<div class="tau-board-unit__value"><%!fn.trim(this.data.epic.name,19)%></div>'],sampleData:{epic:{name:"Custom Reports"}}},{id:"epic_long",classId:"tau-board-unit_type_epic",hideIf:function(e){return!e.epic||!e.epic.name},name:"${Epic,capital}",header:"${Epic,camel}",term:"epic",settings:[{types:[t.FEATURE],sizes:o,model:"epic:{epic.name},id:epic.id,practices:project.process.practices",sortConfig:{field:"epic.name"}}],sections:1,template:['<div class="tau-board-unit__value"><%!this.data.epic.name%></div>'],sampleData:{epic:{name:"Custom Reports"}},model:"epic:{epic.name},id:epic.id",editorConfig:{type:"finder.entity",propertyName:"epic",isEditable:function(e){var t=e.type;return"feature"==t&&m(e.data.practices,"Requirements")},allowToReset:!0,clearValueLabel:"(no ${epic,lower})"}}]),e.each(u,function(e){e.category="one to one"}),u});