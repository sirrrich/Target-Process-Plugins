define(["require","tau/components/component.factory","tau/components/workflow.selector/extensions/ui.extension.teams.workflow.selector"],function(e){var o=e("tau/components/component.factory"),t=e("tau/components/workflow.selector/extensions/ui.extension.teams.workflow.selector");return o.define(function(e){var e={name:e.allData&&e.allData.name||"workflow.selector",extensions:[t],template:{engine:"jqote2",markup:['<div class="i-role-workflow-selector tau-workflow-selector"></div>']}};return e})});