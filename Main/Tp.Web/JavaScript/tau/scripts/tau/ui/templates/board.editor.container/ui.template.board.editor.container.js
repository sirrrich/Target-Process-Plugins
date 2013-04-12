define(["tau/core/templates-factory","tau/nls/translator"],function(templates,T){var config={name:"board.editor.container",engine:"jqote2",markup:["<% var features = this.context.configurator.getFeaturesService(); %>",'<div class="tau-board-settings">','<div class="tau-board-settings-header i-role-tabheaders" role="toolbar">','<ul class="tau-board-settings-groups-tags i-role-tabheaders" >','<% if (features.isEnabled("boardTemplates")){ %>','<li class="i-role-tabheader" data-label="templates">Templates</li>',"<% } %>",'<li class="tau-active i-role-tabheader" data-label="setup">Setup</li>','<li class="i-role-tabheader" data-label="access">Access</li>','<li class="tau-extension-board-tooltip tau-disabled tau-extension-board-tooltip i-role-tabheader"','data-label="limits" data-collapsed-selector=".i-role-tabheader:not(.tau-active)" data-expanded-selector=".i-role-tabheader.tau-disabled"','data-title-expanded="'+T("You need to add the States axis to be able to set limits to WIP")+'"','data-title-collapsed="'+T("Set limits to work in progress")+'"',">Limits</li>",'<% if (features.isEnabled("boardEditorPrioritization")){ %>','<li class="i-role-tabheader" data-label="prioritization">Prioritize</li>',"<% } %>",'<li class="i-role-tabheader" data-label="customize">Customize Cards</li>','<li class="i-role-tabheader" data-label="encoding">Visual Encoding</li>',"</ul>","</div>",'<div class="i-role-tab tau-board-settings-group tau-active" role="editor" data-label="setup"></div>','<% if (features.isEnabled("boardTemplates")){ %>','<div class="i-role-tab tau-board-settings-group" role="templates"  data-label="templates"></div>',"<% } %>",'<div class="i-role-tab tau-board-settings-group" role="access"  data-label="access"></div>','<div class="i-role-tab tau-board-settings-group" role="limits"  data-label="limits"></div>','<div class="i-role-tab tau-board-settings-group" role="prioritization"  data-label="prioritization"></div>','<div class="i-role-tab tau-board-settings-group" role="customize"  data-label="customize"></div>','<div class="i-role-tab tau-board-settings-group" role="encoding"  data-label="encoding"></div>',"</div>"]};return templates.register(config)})