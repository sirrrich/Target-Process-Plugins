define(["Underscore","tau/store/types"],function(e,t){function n(n){return e.isUndefined(n)||e.isNull(n)?null:(n.checkPractice=x,n.isPracticeAvailable=x,n.getTimeTrackingPolicies=i,n.getEffortPoint=s,n.getTerms=u,n.getCustomFields=l,n.getPractices=p,n.getEdition=h,n.hasEdition=d,n.getTeam=g,n.getTeamId=T,n.getProject=f,n.getProjectId=P,n.getProcess=m,n.getLoggedUser=v,n.getProcessId=C,n.hoursOnlyEntityTypes=e.chain(t.getDictionary()).filter(e.matches({effortInHours:!0})).map(function(e){return e.name.toLowerCase()}).uniq().value(),n)}var r=function(e,t){for(var n=null,r=e.processes[0].practices,i=0;i<r.length;i++)r[i].name.toLowerCase()===t.toLowerCase()&&(n=r[i]);return n},i=function(){var e=r(this.applicationContext,"Time Tracking"),t=!e;return{disableSpentRemain:t}},s=function(t){t=t?t:this.entity.entityType.name.toLowerCase();var n=r(this.applicationContext,"Planning")||{},i=e.contains(this.hoursOnlyEntityTypes,t)?"Hour":n.effortPoints;if(i){var s="point"===i.toLowerCase()?"pt":"h";return{name:i,shortName:s}}return{}},o=function(t){return e.find(t,function(e){return e.isDefault})},c=function(t){return e.reduce(t,function(e,t){return t.name<e.name?t:e})},a=function(e){return 1===e.length?e[0]:o(e)||c(e)},u=function(){var e=this.applicationContext;if(e&&e.processes&&e.processes.length>0){var t=a(e.processes);return t.terms}return[]},l=function(){var e=this.applicationContext;return e&&e.processes&&e.processes.length>0?e.processes[0].customFields:[]},p=function(){var e=this.applicationContext;return e&&e.processes&&e.processes.length>0?e.processes[0].practices:[]},f=function(){var e=this.applicationContext;return e&&e.selectedProjects&&e.selectedProjects.length>0?e.selectedProjects[0]:null},g=function(){var e=this.applicationContext;return e&&e.selectedTeams&&e.selectedTeams.length>0?e.selectedTeams[0]:null},h=function(){var t=this.applicationContext,n=t&&t.edition?t.edition:[];return e.isArray(n)?n:[n]},d=function(t){return e.indexOf(this.getEdition(),t)>=0},m=function(){var e=this.applicationContext;
return e&&e.processes&&e.processes.length>0?e.processes[0]:null},v=function(){var e=this.applicationContext;return e&&e.loggedUser?e.loggedUser:null},C=function(){var e=this.getProcess();return e?e.id:null},P=function(){var e=this.getProject();return e?e.id:null},T=function(){var e=this.getTeam();return e?e.id:null},x=function(e){return null!==r(this.applicationContext,e)};return n});