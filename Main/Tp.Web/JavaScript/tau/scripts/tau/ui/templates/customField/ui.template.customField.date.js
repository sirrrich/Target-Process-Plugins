define(["tau/core/templates-factory"],function(t){var e={name:"customField-date",engine:"jqote2",markup:['<div class="ui-customfield <% if (!this.output) { %>ui-customfield_empty_true<% } %>">',"   <table>","   <tbody>","   <tr>",'<td class="ui-customfield__label"><%=this.name%></td>','<td class="ui_custom_field_value_container" title="<%=this.tooltip || ""%>">','<div class="ui-customfield__value"><%=this.output%></div>',"</td>","   </tr>","   </tbody>","   </table>","</div>"]};return t.register(e)});