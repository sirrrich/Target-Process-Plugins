define(["Underscore","tau/models/dataProviders/model.provider.items.base"],function(_,BaseProvider){return BaseProvider.extend({fetch:function(fnCallback){this._fetch("teamMembers","teamMember",null,fnCallback)},_createDetailCommand:function(collectionType){var detailCommand={};return detailCommand[collectionType]=["id",{team:["id","name","icon"]},{role:["id","name"]}],detailCommand},_convertData:function(data){var result=this._super(data);return _.sortBy(result,function(v){return v.team.name.toLowerCase()})},_convertItem:function(data){var item={id:data.id,__type:"teamMember",team:data.team,role:data.role,uri:this.config.context.configurator.getUrlBuilder().getNewViewUrl(data.team.id,"team",!0)};return item}})})