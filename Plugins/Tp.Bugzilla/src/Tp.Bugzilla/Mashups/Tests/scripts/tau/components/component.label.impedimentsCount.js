define(["Underscore","tau/components/component.label","tau/components/extensions/impedimentList/extension.impedimentList.count.label.setter","tau/models/model.impedimentsCountCalculator","tau/models/model.extensions","tau/models/assignmentsList/extension.model.store.operations","tau/core/termProcessor"],function(a,b,c,d,e,f,g){return{create:function(e){var h=e.context.applicationContext.processes[0].terms,i=new g(h);return e=e||{},a.extend(e,{text:i.getTerms("Impediment").names,quantityCssClass:e.quantityCssClass||"ui-red-quantity",extensions:[c,d,f]}),b.create(e)}}})