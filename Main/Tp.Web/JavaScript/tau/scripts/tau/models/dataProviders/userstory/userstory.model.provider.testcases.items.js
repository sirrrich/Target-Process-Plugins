define(["Underscore","tau/models/dataProviders/model.provider.items.base","tau/utils/utils.date"],function(t,e,r){return e.extend({fetch:function(t){this._fetch("testCases","testCase","priority",t)},_convertData:function(e){return e=this._super(e),t.sortBy(e,function(t){var e=t.numericPriority||0;return e})},_createDetailCommand:function(t){var e={};return e[t]=["id","name","tags","lastRunStatus","lastRunDate","description","numericPriority"],e},_convertItem:function(t){var e={id:t.id,__type:t.__type,name:t.name,tags:[],lastRunStatus:t.lastRunStatus,lastRunDate:r.format.datetime.short(r.convertToTimezone(t.lastRunDate)),description:t.description,numericPriority:t.numericPriority,url:this.config.context.configurator.getUrlBuilder().getNewViewUrl(t.id,t.__type,!0)};return e}})});