define(["tau/components/component.page.base","tau/views/view.page.search"],function(BaseCreator,ViewType){return{create:function(componentContext){var componentConfig={name:"search page component",turnOffErrorEmiter:!0,extensions:[],ViewType:ViewType};return componentContext["queue.bus"]=!0,BaseCreator.create(componentConfig,componentContext)}}})