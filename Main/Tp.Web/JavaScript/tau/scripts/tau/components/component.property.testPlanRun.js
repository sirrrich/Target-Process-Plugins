define(["tau/components/component.property"],function(e){return{create:function(t){t=t||{};var n=t.context.entity.entityType.name.toLowerCase();return t.propertyName="testplanrun"===n?"parentTestPlanRun":"testPlanRun",t.showUrl=!0,t.editable=!1,e.create(t)}}});