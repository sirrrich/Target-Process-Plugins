define(["Underscore","tau/components/component.list","tau/ui/templates/list_/grid.entity/ui.template.list.grid.entity","tau/ui/extensions/list/extension.list.editable.progress","tau/views/view.compositeControl"],function(e,t,r,p,i){return{create:function(o){return o=e(o).defaults({ViewType:i,template:o.template||r,extensions:[],dependencies:["title","property.severity","property.priority","property.relationType","property.entityState","assignmentsList","property.effort","progressBar.small","property.release","property.responsible","property.iteration","property.build","property.build.testPlanRun","property.lastRunStatus","property.lastRunDate.list","property.completeDate","property.endDate.list","property.role","property.role.modern","property.startDate.projectMember","property.endDate.projectMember","menu.testPlanRun","entity.quickAddTrigger","entity.menuTrigger","description","testStepList","testStepRunList"]}),o.extensions.push(p),t.create(o)}}});