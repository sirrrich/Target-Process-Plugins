define(["tau/core/templates-factory"],function(e){var t={name:"list.team.projects",engine:"jqote2",markup:['<div class="tau-team-control">',"<% if (this.items.length){ %>",'<table class="tau-team-info">',"<colgroup>",'<col class="tau-team">','<col class="tau-us-progress">','<col class="tau-us-total">','<col class="tau-bug-progress">','<col class="tau-bug-total">','<col class="tau-assign-info">','<col class="tau-assign-actions">',"</colgroup>","<thead>","<tr>","<th>Project</th>",'<th><i class="tau-entity-icon tau-entity-icon--userstory"><%=fn.term("userStory", "iconSmall")%></i><%=fn.term("userStory", "names")%></th>',"<th>Done / Open</th>",'<th><i class="tau-entity-icon tau-entity-icon--bug"><%=fn.term("bug", "iconSmall")%></i><%=fn.term("bug", "names")%></th>',"<th>Done / Open</th>","<th>Assigned People</th>",'<th class="tau-assign-actions"></th>',"</tr>","</thead>","<tbody>","<% _.forEach(this.items, function(item){ %>",'<tr class="i-role-item" role="item" data-entity-id="<%= item.id %>">',"<td>",'<div class="tau-project-name">',"<h3>",'<a href="<%= item.uri %>">','<i <% if (item.project.color) { %>style="background-color: <%= item.project.color %>;"<% } %> class="tau-icon tau-icon_type_color"></i>',"<%! item.project.name %>","</a>","</h3>","</div>","</td>",'<td title="User Stories sparkline provides an overview of progress over the last 16 weeks. The numbers shown are: a maximum of user stories done/added at any given week out of those 16, and done/added in the current calendar week (on the right).">',"<svg class=\"tau-sparkline i-role-sparkline\" data-source='<%= JSON.stringify(item.userStoriesSparkline) %>'></svg>","</td>","<td>",'<div class="tau-fraction tau-userstory">','<span title="done"><%= item.project.closedUsCount %></span><br>','<b title="open"><%= item.project.openUsCount %></b>',"</div>","</td>",'<td title="Bugs sparkline provides an overview of progress over the last 16 weeks. The numbers shown are: a maximum of bugs fixed/added at any given week out of those 16, and fixed/added in the current calendar week (on the right).">',"<svg class=\"tau-sparkline tau-sparkline-bugs i-role-sparkline\" data-source='<%= JSON.stringify(item.bugsSparkline) %>'></svg>","</td>","<td>",'<div class="tau-fraction tau-bug" >','<span title="done"><%= item.project.closedBugsCount %></span><br>','<b title="open"><%= item.project.openBugsCount %></b>',"</div>","</td>",'<td class="tau-assign-info">','<div class="tau-count" title="<%if (item.teamMembersInProjectCount === 0){%>No<%}%><% else {%><%= item.teamMembersInProjectCount%><%}%><% if (item.teamMembersInProjectCount !== 1){%> people<%}%><% else {%> person<%}%> in this Team assigned to Project"><%= item.teamMembersInProjectCount %> of <%= item.teamMembersCount %>','<a href="" class="i-role-item" role="assign-all" title="All people in the Team will be assigned to this Project" <% if (item.teamMembersInProjectCount === item.teamMembersCount) { %>style="display: none;"<% } %> data-confirm-message="Are you sure you want to assign all people from team to project \'<%! item.project.name %>\'?">Assign all</a>',"</div>",'<div class="tau-auto-assign">','<label class="tau-checkbox" title="Any new person in the Team will be auto-assigned to this Project">','<input type="checkbox" class="i-role-item" role="auto-assign" <% if (item.isProjectAccessed) { %> checked<% } %>><i class="tau-checkbox__icon"></i><span>Auto-assign new people</span>',"</label>","</div>","</td>",'<td class="tau-assign-actions">',"<% if (item.canCustomizeTeamProject) { %>",'<span class="tau-icon-general <% if (item.isTeamWorkflowChanged) {%>tau-icon-settings-small-blue<% } else {%>tau-icon-settings-small-dark<% }%> i-role-team-customize" title="Customize Team Workflow"></span>',"<% } %>",'<span class="tau-unassign i-role-unassign" title="Unassign project from this team?" ',"data-confirm-message=\"Are you sure you want to remove project '<%! item.project.name %>' from this team?\"></span>","</td>","</tr>","<% }); %>","</tbody>","</table>","<% }else{ %>",'<div class="tau-message">This team has no projects</div>',"<% } %>","</div>"]};
return e.register(t)});