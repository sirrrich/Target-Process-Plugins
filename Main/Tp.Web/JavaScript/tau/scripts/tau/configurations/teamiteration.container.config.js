define(["tau/configurations/baseContainable.container.config","tau/models/model.extensions","tau/models/dataProviders/iteration/iteration.model.provider.user_stories_bugs.items","tau/models/dataProviders/iteration/iteration.model.provider.user_stories_bugs.groups","tau/ui/extensions/list/external.refresh.extension","tau/models/dataProviders/release/release.model.provider.bugs.items","tau/models/dataProviders/release/release.model.provider.user_stories.items","tau/ui/extensions/list/request/extension.list.entityState"],function(BaseConfig,modelExtensions,UserStoriesBugsItemsDataProvider,UserStoriesBugsGroupsDataProvider,ExtRefresh,BugsItemsDataProvider,UserStoriesItemsDataProvider,EntityStateListExtension){var Config=BaseConfig.extend({init:function(appConfig){BaseConfig.prototype.init.call(this,appConfig);var entity=appConfig.context.entity,urlBuilder=appConfig.context.configurator.getUrlBuilder();this.registerPanel("Progress Bar",{type:"teamiteration.progressBar"});var self=this;this.registerTab("User Stories",{label:"userStories",header:[{type:"label",text:self.getNames("userStory"),countFieldNames:["userStories"]}],items:[{type:"quick.add",printable:!1,property:"teamiteration",entityType:"userStory",evictProperties:["userStories","userStories-count"],label:"Add "+self.getNames("UserStory")},{type:"list.editable",externalRefreshEvents:["userStory.items.added"],itemsDataProvider:UserStoriesItemsDataProvider,views:[{type:"grid.entity"}],extensions:[EntityStateListExtension]}]}),this.registerTab("Bugs",{practices:["Bug Tracking"],label:"bugs",header:[{type:"label",text:self.getNames("bug"),countFieldNames:["bugs"]}],items:[{type:"quick.add",printable:!1,property:"teamiteration",entityType:"bug",practices:["Bug Tracking"],evictProperties:["bugs","bugs-count"],label:"Add "+self.getNames("Bug")},{type:"list.editable",practices:["Bug Tracking"],itemsDataProvider:BugsItemsDataProvider,views:[{type:"grid.entity"}],externalRefreshEvents:["bug.items.added"],extensions:[EntityStateListExtension]}]})},getPanelsAliases:function(){return["Look Switcher","Diagnostic","Progress Bar","Additional Info"]},getActionsAliases:function(){return["Print","-----","Delete"]},getTabsAliases:function(){return["Description","User Stories","Bugs","Relations"]},getEntityQuickAddOptions:function(){return{items:[{entityType:"userstory",relationName:"userstories"},{entityType:"bug",relationName:"bugs",practices:["Bug Tracking"]}]}},getAdditionalInfoAliases:function(){return["Team","StartDate","FinishDate","Velocity","Assigned Effort"]}});return Config})