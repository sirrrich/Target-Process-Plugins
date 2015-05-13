define(["Underscore","jQuery","tau/core/extension.base"],function(t,e,o){e.widget("ui.tauBubbleArticle",e.ui.tauBubble,{});var r="http://guide.targetprocess.com/teams-and-projects.html#visibility",i=function(t,e){return'<a target="_blank" href="'+t+'">'+e+"</a>"},a=t.map([{id:"project.formAdd.selectProcess",html:"<p>You can use our default process or create your own with custom workflows and practices.</p>",url:r},{id:"project.formAdd.selectProgram",html:"<p>You can group related projects under the same program to manage your portfolio.</p>",url:!1},{id:"project.formAdd.assignPeople",html:"<p>People can be included into both teams and projects so that you can vary work visibility.</p>",url:r},{id:"project.formAdd.assignTeams",html:"<p>You can have one team that works on several projects or one large project with several teams. Any mix of teams and projects, no matter how crazy, is supported.</p>",url:r},{id:"team.formAdd.assignPeople",html:"<p>People can be included into both teams and projects so that you can vary work visibility.</p>",url:r},{id:"team.formAdd.assignProjects",html:"<p>You can have one team that works on several projects or one large project with several teams. Any mix of teams and projects, no matter how crazy, is supported.</p>",url:r},{id:"board.templates",html:"<p>Easily create Views from predefined templates.</p>",url:"http://guide.targetprocess.com/boards/templates.html"},{id:"board.editor",html:"<p>On a View you can see different data as cards, organize your selected cards by common properties, and apply filters to cards and lanes.</p>",url:"http://guide.targetprocess.com/boards/boards-how-to.html",linkText:"See how to setup a View"},{id:"board.editor.access",html:"<p>Anyone can create Views that are private or shared with their team/project, but only administrators can create public Views.</p>",url:"http://guide.targetprocess.com/boards/access.html"},{id:"dashboard.editor.access",html:"<p>Anyone can create Dashboards that are private or shared with their team/project, but only administrators can create public Dashboards.</p>",url:"http://guide.targetprocess.com/boards/access.html"},{id:"customreport.editor.templates",html:"<p>Easily create Reports from predefined templates.</p>",url:"https://guide.targetprocess.com/reports/reports-templates.html"},{id:"customreport.editor.access",html:"<p>Anyone can create Reports that are private or shared with their team/project, but only administrators can create public Reports.</p>",url:"http://guide.targetprocess.com/boards/access.html"},{id:"customreport.error.facet.size",html:"<p>Faceted charts are not fast when there are many values in both axes. Current restriction in Targetprocess is 100 facets in a single chart. It means you can have 10 values in X axis and 10 values in Y axis. Or 50 values in X axis and 2 values in Y axis.</p><p>We recommend to use filters to have less values. For example, if you have Project axis, you can include just several projects you need.</p>",url:!1},{id:"board.editor.prioritization",html:"<p>By default you should hold the Shift key to prioritize cards. While holding Shift, simply drag a card and move it into the desired position.</p><p>Remember that you can always change the prioritization mode for the View.</p>",url:"http://guide.targetprocess.com/boards/sort.html"},{id:"board.editor.selectCards",html:"<p>You can display various entities on Views. Entities with common properties can be displayed at the same time.</p>",url:"http://guide.targetprocess.com/boards/cards.html"},{id:"customreport.editor.selectCards",html:"<p>Select entities for the report. You can filter them to narrow down data.</p>",url:!1},{id:"board.editor.selectLanes",html:"<p>Organize your selected items by common properties. You can use different properties (even custom fields) as your horizontal and vertical lanes.</p>",url:"http://guide.targetprocess.com/boards/lanes.html",linkText:"View the full list"},{id:"board.editor.selectListLevels",html:"<p>Organize your selected items by common properties. You can use different properties (even custom fields) as your 1st and 2nd levels.</p>",url:"http://guide.targetprocess.com/boards/lists.html"},{id:"board.editor.selectListCards",html:"<p>You can display various entities on Views. Entities with common properties can be displayed at the same time.</p>",url:"http://guide.targetprocess.com/boards/lists.html"},{id:"timeline.options.plannedInPast",html:"<p>This checkbox shows/hides planned dates for Done cards.</p>",url:"https://guide.targetprocess.com/boards/getting-started-with-the-timeline-view.html#planned-time"},{id:"timeline.options.showForecast",html:"<p>This checkbox shows/hides Forecast for cards.</p>",url:"https://guide.targetprocess.com/boards/getting-started-with-the-timeline-view.html#forecast-time"},{id:"timeline.options.showMilestones",html:"<p>Milestones are used to represent important events and can relate to one or several projects.</p>",url:"http://guide.targetprocess.com/working-with-entities/milestones.html"},{id:"board.editor.filter",html:["<p>","<strong>Basic mode.</strong> Just type keywords and filter cards by name. You can filter lanes (columns and rows) this way, as well.","</p>","<p>",'<strong>Advanced mode.</strong> These filters are much more powerful. Start off with "?" and from there you can create a complex query to use as a filter.',"</p>"].join(""),url:"http://guide.targetprocess.com/filters.html"},{id:"board.editor.saveContext",html:'<p>Specify a Projects-Teams context for&nbsp;this&nbsp;View, or go with "not specified" context.</p>',url:"https://guide.targetprocess.com/boards/context.html"},{id:"board.editor.visualEncoding",html:"<p>You can set custom highlighting for the cards on this View. A card can have up to three colors applied at one time.</p>",url:"https://guide.targetprocess.com/boards/visual-encoding.html"},{id:"board.context.noProject.warning",html:"<p>All work will belong to some project in the future. All work without project will be moved to some artificial project.</p>",url:"http://tp3.uservoice.com/forums/174654-we-will-rock-you/suggestions/6326570-don-t-remove-no-project-option-across-the-system",linkText:"Share your opinion"},{id:"state.settings.transitions",template:'<p><%- entityTypes %> can be moved <%- from ? "from" : "to" %> the selected below states <%- from ? "to" : "from" %> the current one.</p><p>Transitions do not affect the states order on a board.</p>',getContent:function(e){return t.template(this.template)(e.data())
}},{id:"state.settings.isPlanned",template:"<p>Marking a state as planned means that this is the state just before taking <%- entityType %> into progress. The Cycle Time will start when <%- entityType %> leaves this state. Please note, there can be only one planned state in the workflow.</p>",getContent:function(e){return t.template(this.template)(e.data())}},{id:"entity.noLeadTime",template:"Lead Time can’t be calculated for <%- entityType %> because its start date is less than the creation date.",getContent:function(e){return t.template(this.template)(e.data())}},{id:"entityState.noTransition.user",html:"<p>The transition is forbidden. Contact your administrator to update the workflow.</p>",url:!1},{id:"entityState.noTransition.admin.with-no-link",html:"<p>The transition is forbidden. Update the workflow to allow it.</p>",url:!1},{id:"entityState.noTransition.admin",template:'<p>The transition is forbidden. <a class="i-role-workflow-link" href="#">Update the workflow</a> to allow it.</p>',getContent:function(o,r){var i=e(t.template(this.template)());return i.find(".i-role-workflow-link").on("click",function(){r.context.configurator.getRouting().redirect(o.data("url"))}),i}},{id:"teamWorkflow.add",html:"<p>Every entity state in Team Workflow should be mapped to a corresponding entity state in Project Workflow.</p>",url:"//guide.targetprocess.com/settings/team-workflow.html",linkText:"Read more about Team Workflow"},{id:"workflow.is.customizable",html:["<p>You can customize Workflow.</p>",'<p>Teams can use their custom <a class="i-role-workflow-link" href="#">Team Workflow</a> if it differs from the default one.</p>',i("//guide.targetprocess.com/settings/team-workflow.html","Read more&hellip;")].join(""),getContent:function(o,r){var i=t.template(this.html)(),a=e(i);return a.find(".i-role-workflow-link").on("click",function(){r.context.configurator.getRouting().redirect(o.data("url"))}),a}},{id:"workflow.is.customizable.with-no-link",html:["<p>You can customize Workflow.</p>","<p>Teams can use their custom Team Workflow if it differs from the default one.</p>"].join(""),url:"//guide.targetprocess.com/settings/team-workflow.html"},{id:"workflow.can.be.created",html:['<p><a class="i-role-workflow-link" href="#">Create a custom Team Workflow</a> if it differs from the default one.</p>',i("//guide.targetprocess.com/settings/team-workflow.html","Read more&hellip;")].join(""),getContent:function(o,r){var i=t.template(this.html)(),a=e(i);
return a.find(".i-role-workflow-link").on("click",function(){r.context.configurator.getRouting().redirect(o.data("url"))}),a}},{id:"customReport.dsl.editor",html:"<p>1. Select entities you want to see on a report and filter them</p><p>2. Specify axes like: EndDate, COUNT, etc.</p>",url:"https://guide.targetprocess.com/reports/setup.html"},{id:"customReport.dsl.source",html:"<p>Describe entities to include into report, filter, specify type of data fields.</p>",url:"https://guide.targetprocess.com/reports/custom-graphical-reports-advanced-topics.html#dsl"},{id:"customReport.dsl.chart",html:"<p>Map data source dimensions to axes, enhance visual representation.</p>",url:"https://guide.targetprocess.com/reports/custom-graphical-reports-advanced-topics.html#dsl_chart"},{id:"sso.options.disable-form-authentication",html:"<p>Disallow logging in using login and password. Users will be automatically redirected to SSO login.</p>",url:"https://guide.targetprocess.com/settings/single-sign-on-in-targetprocess.html"},{id:"sso.options.user-provisioning",html:"<p>The first time a person logs in, a new TP user is created with an email provided by identity provider. If an account with this email exists but was deleted or deactivated, we will restore and activate this user.</p>",url:"https://guide.targetprocess.com/settings/single-sign-on-in-targetprocess.html"},{id:"tableau.report.widget.url",html:["<p>","<div>To get the proper report URL:</div>",'<ol class="tau-tableau-report-widget-settings__url-steps">',"<li>Open your Tableau report</li>",'<li>Click the "Share" button at the bottom of the page</li>','<li>Copy text from the "Link" input</li>',"<li>Paste it here</li>","</ol>","</p>","<p>Please note that we recommend using reports with Automatic sizes</p>"].join(""),url:!1}],function(e){return t.defaults(e,{url:"http://guide.targetprocess.com",linkText:"Read more&hellip;"})});return o.extend({init:function(t){this._super(t),this._config=t},"bus afterRender":function(){var o=t.bind(function(t){var o=e(t.currentTarget);
o.data("ui-tauBubbleArticle")||this._initTooltip(o)},this);e(document).on("mouseenter.tooltipArticle",".i-role-tooltipArticle",o),this.on("destroy",function(){e(document).off("mouseenter.tooltipArticle",".i-role-tooltipArticle",o)})},_initTooltip:function(o){var r=o.data("articleId"),i=t.findWhere(a,{id:r});i&&o.tauBubbleArticle({appendTo:e("body"),ignoreOverlap:!0,content:i.getContent?i.getContent(o,this._config):this._getContent(i),zIndex:99999,template:['<div class="tau-bubble-board">','<div class="tau-bubble-board__arrow" role="arrow"></div>','<div class="tau-bubble-board__inner tau-container" role="content"></div>',"</div>"].join(""),className:"tau-bubble-tooltipArticle",showEvent:"click",hideEvent:"click",stackName:"tooltipArticle",delay:100,showOnCreation:!1,onShow:function(){this.$target.toggleClass("tau-help_state_active",!0)},onHide:function(){this.$target.toggleClass("tau-help_state_active",!1)},onPositionConfig:this._tooltipPositionConfigTop,onArrowPositionConfig:this._tooltipArrowPositionConfigTop})},_getContent:function(t){var e=t.html;if(t.url){var o=this._applyStatisticQuery(t.url,t.id);e+=i(o,t.linkText)}return e},_tooltipPositionConfigTop:function(t){t.at="left-8 top",t.my="left-50 bottom"},_tooltipArrowPositionConfigTop:function(t){return"center top"==t.at?t.at="left+10 top":"center bottom"==t.at&&(t.at="left+10 bottom"),t},_applyStatisticQuery:function(t,o){var r,i,a=taus&&taus.adaptersScope&&taus.adaptersScope.cntx;return a?(r="?"+e.param({host:a.host&&a.host.id,userId:(a.user&&a.user.id).match(/(\d+)(?!.*\d)/).pop(),sid:taus.sid,origin:"Tooltip bubble "+o}),t.indexOf("#")>0?(i=t.split("#"),i[0]+r+"#"+i[1]):t+r):t}})});