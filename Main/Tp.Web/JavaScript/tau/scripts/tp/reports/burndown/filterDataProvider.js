define(["jQuery","Underscore","tp/reports/burndown/dataProvider","tp/reports/burndown/filterStorage","tau/utils/utils.date"],function(t,e,n,r,a){function i(e){this.contextProvider=e.contextProvider;var n=a.getServerNow();this.allIterations=t.map(e.plannables,function(t){var e=a.convertToTimezone(t.startDate),r=a.convertToTimezone(t.endDate);return{startDate:e,endDate:r,id:t.id,name:t.name,entityType:t.entityType,current:a.between(n,e,r),isBugsAvailable:t.isBugsAvailable,isPointsAvailable:t.isPointsAvailable,isTimeTrackingAvailable:t.isTimeTrackingAvailable,parent:{id:t.parentId,name:t.parentName},parents:t.parents}}),this.allCurrentIterations=this.allIterations.filter(function(t){return t.current})}return i.prototype={getDefaultFilterData:function(t){var e=this.getDefaultType(),n=this.getDefaultPlannable(e);return n?{burnDownType:e,plannableId:n.id,startDate:n.startDate,includeWeekends:t?t.includeWeekends:!0,isInPoints:n.isPointsAvailable,showBugs:t?t.showBugs:!0,units:n.isPointsAvailable?"p":"h"}:this.getEmptyFilterData(e)},getEmptyFilterData:function(t){return{burnDownType:t||"",plannableId:-1}},getDefaultType:function(){return this.getPossibleTypes()[0]},getPossibleTypes:function(){function e(t){return function(e,n){return n.entityType.toLowerCase()==t.toLowerCase()}}var n=[];return this.isIterationsAvailable()&&n.push("iteration"),n.push("release"),this.areTeamIterationsAvailable()&&n.push("teamiteration"),t(n).filter(function(n,r){return t(this.allIterations).filter(e(r)).length>0}.bind(this))},isIterationsAvailable:function(){return this.contextProvider.isPracticeAvailable("Iterations")},areTeamIterationsAvailable:function(){return this.contextProvider.getTeamIds().length>0},getDefaultPlannable:function(e){var n=this.getPlannables(e),r=this.getDefaultIteration(e);if(!r){var a=t.grep(n,function(t){return t.current});a.length&&(r=a[0])}return r},getPlannables:function(t){return this.filterPlannablesByType(this.allIterations,t)},getCurrentPlannables:function(t){return this.filterPlannablesByType(this.allCurrentIterations,t)
},filterPlannablesByType:function(t,e){var n=e||this.getDefaultType();return t.filter(function(t){return t.entityType.toLowerCase()==n.toLowerCase()})},getDefaultIteration:function(t){var e=this.getPlannables(t)[0],n=this.getCurrentPlannables(t);return n.length&&(e=n[0]),e},getProjectsList:function(t){var n=[{}];return n[0].items=e.map(t,function(t){return{id:t.parentId,name:t.parentName}}),n[0].items.unshift({id:-1,name:"All Projects"}),n}},i});