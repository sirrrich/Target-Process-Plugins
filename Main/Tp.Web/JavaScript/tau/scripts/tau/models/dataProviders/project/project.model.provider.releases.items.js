define(["Underscore","tau/models/dataProviders/model.provider.items.base","tau/utils/utils.date"],function(a,b,c){return b.extend({fetch:function(a){this._fetch("iterations","iteration",!1,a)},_createDetailCommand:function(a){var b={};return b[a]=["id","name","tags","startDate","endDate",{release:["id","name"]},{userStories:["effortToDo","effortCompleted"]},{bugs:["effortToDo","effortCompleted"]}],b},_convertItem:function(a){var b={id:a.id,name:a.name,__type:a.__type,tags:this._processTags(a),release:a.release,assignedEffort:this._getAssignedEffort(a),startDate:c.format.date.short(a.startDate),endDate:c.format.date.short(a.endDate)};return b},_convertData:function(a){return a=this._super(a),this._sortByStartDate(a)},_sortByStartDate:function(b){return a.sortBy(b,function(a){return-1*a.startDate})}})})