define(["jQuery","tests.async/testkit/testkit.component","tau/components/component.customField.entity","tests/common/remoteConstants"],function($,TestKit,Component,Constants){var testKit=new TestKit(Component);testKit.registerSetup("fixtures",function(test,next){var entityTypes={us:{id:Constants.EntityTypes.USERSTORY.id,name:"userStory"}},practices={planning:{id:Constants.Practices.PLANNING.id}},customFields={},processes={scrum:{name:"scream"+parseInt(Math.random()*1e11),practices:["planning"],customFields:[{name:"Related",fieldType:"Entity",entityType:{id:Constants.EntityTypes.USERSTORY.id}},{name:"Other Lnk",fieldType:"URL",entityType:{id:Constants.EntityTypes.USERSTORY.id}},{name:"NumberOfGod",fieldType:"Number",entityType:{id:Constants.EntityTypes.USERSTORY.id}}]}},projects={p_scrum:{name:"Project Scrum"+(new Date).getTime(),process:"scrum"}},userStories={usx:{name:"USX",entityType:"us",project:"p_scrum"},us0:{name:"US0",entityType:"us",project:"p_scrum"},us1:{name:"US1",entityType:"us",project:"p_scrum",customFields:[{name:"Related",type:"Entity",value:null},{name:"Other Lnk",type:"URL",value:null},{name:"NumberOfGod",type:"Number",value:null}]}},fixtures={practices:practices,entityTypes:entityTypes,processes:processes,projects:projects,customFields:customFields,userStories:userStories};test.set("fixtures",fixtures),next()}),testKit.registerSetup("component.initialize",function(test,next){var testData=test.get("data"),componentBus=test.get("componentBus");componentBus.initialize({store:test.get("configurator").getStore(),customField:{name:"Related",type:"Entity",value:testData.entityType.us.id.toString()},context:{entity:testData.userStory.us1,applicationContext:{processes:[testData.process.scrum],selectedProjects:[testData.project.p_scrum]},getCustomFields:function(){return[{name:"Related",type:"Entity",value:testData.entityType.us.id.toString()},{name:"Lnk",type:"URL"},{name:"NumberOfGod",type:"Number"}]}}}),next()});var testcase={name:"component.customField.entity"};return testcase["should render valid markup and allow to edit"]=testKit.test(function(test){var bus=test.get("bus"),targetEntityText=null;bus.on("afterRender[0]",function(evt){var $el=evt.data.element;test.equals($el.find(".ui-customfield__label").text().trim(),"Related","initial name is valid"),test.equals($el.find(".ui-customfield__value").text().trim(),"","initial value is valid"),test.get("real")==0&&sinon.stub(test.get("configurator").getStore().config.proxy.service,"find",function(command){var testData=test.get("data");setTimeout(function(){command.callbacks.success([testData.userStory.usx,testData.userStory.us0])},10)});var $addControl=$el.find("tr");test.ok($addControl.data().tauBubble,"entity can be edited"),bus.on("childComponentCreated",function(evt){evt.data.on("dataRendered",function(){var $widget=$addControl.tauBubble("widget"),$resultEntityList=$widget.find(".tau-result-list-row td[class=id]");test.ok($resultEntityList.length>1,"entities to attach were rendered");var renderedEntityTypes=_.uniq(_.map($resultEntityList,function(resultEntity){return $(resultEntity).tmplItem().data.__type.toLowerCase()}));test.ok(renderedEntityTypes.length==1&&renderedEntityTypes[0]==Constants.EntityTypes.USERSTORY.name,"entities to attach were filtered by type");var $targetEntity=$widget.find(".tau-result-list-row td:eq(1)");targetEntityText=$targetEntity.text(),$targetEntity.click()})}),$addControl.click()}),bus.on("afterRender[1]",function(evt){var $el=evt.data.element;test.equals($el.find(".ui-customfield__label").text().trim(),"Related","modified name is valid"),test.equals($el.find(".ui-customfield__value .tau-linkentity__inner").text().trim(),targetEntityText,"modified value is valid"),test.ok($el.find("a").attr("href"),"modified value is link"),test.done()})}),testcase})