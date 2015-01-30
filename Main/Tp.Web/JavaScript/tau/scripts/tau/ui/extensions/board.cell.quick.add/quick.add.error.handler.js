define(["Underscore"],function(e){var t=function(t,s){for(var r=t;r.InnerException;)r=r.InnerException;return e.isUndefined(r)||"Tp.BusinessObjects.InvalidLicenseException"!==r.Type?!1:(a(r.Message,s),!0)},s=function(t,s,r,a){if(!(t.Details&&t.Details.ServerErrorCodes&&e.contains(t.Details.ServerErrorCodes,"ProjectNotAssignedToTeam")))return!1;var n=a.getStore(),i=$('<div class="tau-message tau-danger">'+t.Message+' <a class="i-role-assign-team-to-project" href="#">Assign</a></div>'),o=t.InnerException.Details.Suggest,d=e.findWhere(o,{id:"project"}).value,c=e.findWhere(o,{id:"team"}).value;return i.find("a").on("click",function(){n.save("teamProject",{$set:{project:{id:d},team:{id:c}},fields:["id","project","team"]}).done({success:function(e){var t=e[0].data.team.name,r=e[0].data.project.name,a=$('<div class="tau-message tau-success"> Success! The '+t+" team is now assigned to the "+r+" project.</div>");s.setText(a)}})}),s.setText(i),!0},r=function(t,s,r,a){if(!(t.Details&&t.Details.ServerErrorCodes&&e.contains(t.Details.ServerErrorCodes,"WorkflowHasNoResponsibleRolesBrokenRule")))return!1;var n=a.getUrlBuilder(),i=(a.getStore(),t.InnerException.Details.Suggest),o=e.findWhere(i,{id:"process"}).value,d=e.findWhere(i,{id:"entityKind"}).value,c=$('<div class="tau-message tau-danger">'+t.Message+' <a href="'+n.getWorkflowSetupPage(o,d.toLowerCase())+'" title="link will be opened in the same window">Workflow setup</a></div>');return s.setText(c),!0},a=function(e,t){var s=$('<div class="tau-message tau-danger">Error: '+e+"</div>");t.setText(s)};return{handle:function(e,n,i,o){t(e,i)||s(e,i,n,o)||r(e,i,n,o)||a(e.Message,i)}}});