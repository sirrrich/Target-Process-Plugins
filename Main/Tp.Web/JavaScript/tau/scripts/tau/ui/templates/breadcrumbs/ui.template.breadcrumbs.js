define(["tau/core/templates-factory"],function(e){return e.register({name:"breadcrumbs",engine:"jqote2",markup:["<% if (this.items.length){ %>",'<ul class="ui-breadcrumbs">',"<% _.forEach(this.items, function(item){ %>",'<li class="ui-breadcrumbs__item"><a href="<%= item.url %>"><span class="tau-icon-general tau-icon-l-arrow-big"></span><%! item.title %></a></li>',"<% }); %>","</ul>","<% } %>"]})});