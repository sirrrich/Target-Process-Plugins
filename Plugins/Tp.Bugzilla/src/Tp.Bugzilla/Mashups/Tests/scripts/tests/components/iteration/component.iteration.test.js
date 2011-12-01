define(["jQuery","tau/components/component.property.iteration","tests/components/component.specs","tests/common/testData.Generator","tests/common/service.mock","tau/configurator","tests/components/common/common.setup"],function(a,b,c,d,e,f,g){var h=function(){var h=new d;h.initDefaultData();var i=h.getData(),j=h.getProjects(),k=h.getBugs()[0],l=h.getIterations(),m={manualContext:!0,context:{entity:{entityType:{name:k.__type},id:k.id},applicationContext:{selectedProjects:[j[0]],culture:{name:"en-US",timePattern:"g:i A",shortDateFormat:"M/d/yyyy",longDateFormat:"dddd, MMMM dd, yyyy",decimalSeparator:".",__type:"culture"},processes:h.getProcesses()}}},n=k.iteration,o=l[3],p=g.create("[component.iteration]",i,b,m),q=[{name:"should render valid markup",test:function(){var a=this.$el;equal(a.find(".property-text").text(),n.name,"Release name"),equal(a.find(".external-view").attr("href"),["/TP/View.aspx?id=",n.id].join(""),"Release name")}},{name:"should change iteration",preSetup:function(){var a=this.service=new e;f.setService(a)},test:function(){var b=this.$el,c=b;c.click();var d=a(".tau-bubble");equal(d.size(),1,"Count of bubbles");var e=d.eq(0).find('.drop-down-option:contains("'+o.name+'")');this.service.registerSaveCommand({config:{$set:{iteration:{id:o.id}},fields:["id",{release:["id","name"]}],id:k.id},returnedData:{id:k.id,iteration:{id:o.id,name:o.name}}}),equal(d.find(".action-link.clear").text(),"backlog","Backlog button is  available"),e.click(),equal(this.$el.find(".property-text").text(),o.name,"Release was changed")}}];c.create(p,m).viewShouldFollowBasicComponentLifeCycle().viewShouldPassTests(q).done();var r=h.getBugs()[1],s={manualContext:!0,context:{entity:{entityType:{name:r.__type},id:r.id},applicationContext:{selectedProjects:[j[0]],culture:{name:"en-US",timePattern:"g:i A",shortDateFormat:"M/d/yyyy",longDateFormat:"dddd, MMMM dd, yyyy",decimalSeparator:".",__type:"culture"},processes:h.getProcesses()}}},t=g.create("[component.iteration] empty",i,b,s);c.create(t,s).viewShouldFollowBasicComponentLifeCycle().viewShouldPassTests([{name:"should render valid markup for empty release",test:function(){var b=this.$el;equal(b.find(".property-text").text(),"","Iteration name"),b.click();var c=a(".tau-bubble");equal(c.find(".action-link.clear").size(),0,"Backlog button is not available")}}]).done(),h.clear(),h.initDefaultData(),h.removeReleases(),h.removeIterations();var i=h.getData(),u=g.create("[component.iteration] not iterations",i,b,s);c.create(u,s).viewShouldFollowBasicComponentLifeCycle().viewShouldPassTests([{name:"should show no releases found",test:function(){var b=this.$el;b.click();var c=a(".tau-bubble");equal(c.find(".empty-message").text(),"No iterations found","Empty message is valid")}}]).done()};return{run:h}})