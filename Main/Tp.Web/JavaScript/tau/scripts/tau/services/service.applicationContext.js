define(["Underscore","jQuery","tau/core/class","tau/core/event","tau/libs/store2/store2"],function(_,$,Class,EventEmitter,Store2){var Service=Class.extend({init:function(configurator){this.configurator=configurator,this.store=configurator.getStore()},refreshChoice:function(){this.fire("refreshChoice.after")},setCurrentAcid:function(acid,callbacks){this.store.save("context",{acid:acid}).done(callbacks)},getTeamsProjectsAvailable:function(userId){var store=new Store2(this.configurator);return store.getTeamsProjectsAvailable(userId)},getApplicationContext:function(config,callbacks){var self=this,query={fields:["id","acid","culture","edition","appContext",{loggedUser:["id","email","isAdministrator"]},{processes:["id","name","terms","practices","customFields"]},{selectedProjects:["id","name",{process:["id","name"]}]},{selectedTeams:["id","name"]}]};config.hasOwnProperty("acid")?query.acid=config.acid:config.hasOwnProperty("ids")&&(query.ids=config.ids);if(config.hasOwnProperty("projectIds")||config.hasOwnProperty("projectId"))query.projectIds=config.projectIds||config.projectId;if(config.hasOwnProperty("teamIds")||config.hasOwnProperty("teamId"))query.teamIds=config.teamIds||config.teamId;query.id=config.id||config.acid;var commandName=config.id||config.acid?"get":"turboGet",store=this.store;store[commandName]("context",query).done({success:function(result){var appCtx=result[0].data;_.isArray(appCtx)&&(appCtx=appCtx[0]);var editions=appCtx.edition?[appCtx.edition]:[];self.isBoardEdition&&(editions.push("board"),editions.push("hasTeams")),appCtx.edition=editions;var settings=appCtx.appContext||{};_.defaults(settings,{projectContext:{no:!1},teamContext:{no:!1}});var defProjects=settings.projectContext.no?["null"]:[],defTeams=settings.teamContext.no?["null"]:[];appCtx.selectedProjectIds=_.union(defProjects,_.pluck(appCtx.selectedProjects,"id")),appCtx.selectedTeamIds=_.union(defTeams,_.pluck(appCtx.selectedTeams,"id")),self.getTeamsProjectsAvailable(appCtx.loggedUser.id).done(function(d){var availableTeams=_(d.teams).pluck("id"),availableProjs=_(d.projects).pluck("id");appCtx.selectedTeamIdsAvailable=_.intersection(appCtx.selectedTeamIds,availableTeams),appCtx.selectedProjectIdsAvailable=_.intersection(appCtx.selectedProjectIds,availableProjs),callbacks.success.apply(null,[appCtx])})},failure:function(){callbacks.failure&&callbacks.failure.apply(null,[arguments[0][0].data.response.Message])}})}});return EventEmitter.implementOn(Service.prototype),Service})