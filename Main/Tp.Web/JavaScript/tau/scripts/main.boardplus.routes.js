define(["require","jQuery","Underscore","app.path","tp/reports/service.chart.size","tau/services/boards/view.types"],function(e){function t(e,t){return e+"/"+t}function a(e,t){var a=o.Deferred(),r=null,n=!1,i={fields:["acid"],callback:function(a){r=a.acid,n=!1,taus.context({"@":"--app-context-core",host:s.get(),version:e.getSystemInfo().version,path:t,user:e.getLoggedUser(),acid:a.acid})}};return e.getAppStateStore().get({fields:i.fields,callback:function(e){i.callback(e),a.resolve()}}),e.getApplicationContextService().onApplicationContextRetrieved.add(function(e){e.acid!==r||n||(n=!0,taus.track("appContext",{"@":"--app-context-teams-projects",projects:e.selectedProjectIds,teams:e.selectedTeamIds}))},!0),a}function r(e,r){var o=this.configurator,n=o.getBoardDefinitionFactory();o.getRestStorage()._cache={};var s={id:t(e,r),type:e,args:r};a(o,s).then(function(){return n.getById(r)}).done(function(t){taus.track("views",{"@":"open-view-action",view:t}),this.resolve({id:t.id,entity:e})}.bind(this)).fail(function(){o.getRouting().redirect(o.getUrlBuilder().getDefaultViewUrl())})}var o=e("jQuery"),n=e("Underscore"),s=e("app.path"),i=e("tp/reports/service.chart.size"),p=e("tau/services/boards/view.types");return{createApplicationRoutes:function(){return[{pattern:/start/,host:{name:"board_startScreen_h",type:"board.startScreen"},type:{name:"board_startScreen",type:"board.startScreen"}},{name:"process-setup-workflow",pattern:/process-setup\/(\d+)\/workflows\/([a-z]+)/,adapter:function(e,t){this.resolve({processId:parseInt(e,10),optionGroupId:"workflows",entityType:t})},host:{name:"board_host",type:"master.board"},type:{name:"setup workflow",type:"setup.workflow"}},{name:"process-setup-terms",pattern:/process-setup\/(\d+)\/terms/,host:{name:"board_host",type:"master.board"},adapter:function(e){this.resolve({processId:parseInt(e,10),optionGroupId:"terms"})},type:{name:"terms",type:"terms"}},{name:"process-setup-general",pattern:/process-setup\/(\d+)\/([a-z\-]+)/,adapter:function(e,t){this.resolve({processId:parseInt(e,10),optionGroupId:t})
},host:{name:"board_host",type:"master.board"},type:{name:"setup process",type:"setup.process"}},{pattern:/invite/,adapter:function(){var e=this.configurator,t=e.getHelpScenarioService(),a=t.getAvailableFlows().scratch;t.setCurrentFlow(a.id),t.setState(t.stateTypes.ToBeStarted),e.getRouting().redirect(e.getUrlBuilder().getDefaultViewUrl())},host:{name:"board_host",type:"master.board"},type:{name:"board_page",type:"page.board"}},{pattern:/\bcustomreport\/(\d+)/,adapter:n.partial(r,p.REPORT),host:{name:"board_host",type:"master.board"},type:{name:"customReport_page",type:"page.customReport"}},{pattern:/report\/(\d+)/,adapter:function(e){var t=this.configurator;t.registerService("chart.size",new i),this.resolve({id:e,entity:"report"})},host:{name:"board_host",type:"master.board"},type:{name:"report_page",type:"page.report"}},{pattern:/\bdashboard\/(\d+)/,adapter:n.partial(r,p.DASHBOARD),host:{name:"board_host",type:"master.board"},type:{name:"dashboard_page",type:"page.dashboard"}},{pattern:/\b(?:view|board)\/last/,adapter:function(){var e=this.configurator,a=e.getUrlBuilder(),r=o.Deferred(),n=null,s=e.getRouting().restoreReferer();if(s){var i=/(?:board|dashboard)\/(.+)/.exec(s)||[];n=i[1]}if(n){var p=e.getBoardDefinitionFactory();p.findLast(n).done(function(e){var o;if(e){var n=e.itemType||"board";o=a.getRelativeBoardPageUrl(t(n,e.id),e.acid||void 0)}else o=a.getDefaultViewUrl();r.resolve(o)})}else r.resolve(a.getDefaultViewUrl());o.when(r).then(function(t){e.getRouting().redirect(t)})},host:{name:"board_host",type:"master.board"},type:{name:"board_page",type:"page.board"}},{pattern:/\b(?:view|board)\/current/,adapter:function(){var e=this.configurator;e.getGlobalBus().fire("applicationStart");var a=e.getAppStateStore().settings.acid||void 0,r=e.getBoardDefinitionFactory();r.findDefault().then(function(e){var t=o.Deferred();return e?t.resolve(e):r.createBoard().done(function(e){t.resolve(e)}),t}).then(function(r){var o=e.getUrlBuilder(),n=r.itemType||"board",s=o.getRelativeBoardPageUrl(t(n,r.key),r.acid||a);
e.getRouting().redirect(s)})},host:{name:"board_host",type:"master.board"},type:{name:"board_page",type:"page.board"}},{pattern:/\bboard\/([^&]+)/,adapter:n.partial(r,p.BOARD),host:{name:"board_host",type:"master.board"},type:{name:"board_page",type:"page.board"}},{pattern:/finish-(\w+)\/(\d+)/,adapter:function(e,t){this.resolve({entity:{id:parseInt(t,10),type:e}})},host:{name:"board_host",type:"master.board"},type:{name:"entity component",type:"page.finish-iteration"}},{pattern:/(\w+)\/(\d+)\b/,adapter:function(e,r){var o=this,n=this.configurator,s=taus.start("statistics_view",{"@":["--add-last-view-entity-context",function(e){var t="@timing";return e.loadTime=e[t],delete e[t],e}],entity:{id:r,type:e.toLowerCase()}}),i={id:t(e,r),type:e,args:r};a(n,i).then(function(){taus.track({"@":["--save-last-view-entity-context"],action:"view entity",name:"view "+e+" #"+r,tags:["view entity"],type:e,id:r})}).then(function(){o.resolve({entity:{id:parseInt(r,10),type:e},action:"show",cssClass:"tau-app tau-page-single tau-page-entity i-role-bubble-holder",handlers:{onPageLoaded:function(){s.stop()}}})})},host:{name:"board_host",type:"master.board"},type:{name:"entity component",type:"page.entity",comet:{enabled:!0}}},{pattern:/(\w+)\/(\d+)\/(\w+).*/,adapter:function(e,t,a){this.resolve({entity:{id:parseInt(t,10),type:e},action:a,cssClass:"tau-app tau-page-single tau-page-entity i-role-bubble-holder"})},host:{name:"board_host",type:"master.board"},type:{name:"entity component",type:"page.entity"}}]}}});