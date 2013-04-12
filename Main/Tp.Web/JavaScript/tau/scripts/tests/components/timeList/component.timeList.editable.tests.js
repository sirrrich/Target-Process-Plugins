define(["tau/core/tau","tau/configurator","tau/components/component.timeList","tests/common/testData.Generator","tests/common/testCase","tests/common/componentConfigCreator"],function(tau,configurator,timeListComponent,TestDataGenerator,TestCase,ComponentConfigCreator){var innerRun=function(){var testDataGenerator=new TestDataGenerator;testDataGenerator.initDefaultData();var data=testDataGenerator.getData(),bugData=testDataGenerator.getBugs()[0],configCreator=new ComponentConfigCreator;configCreator.setEntity({id:bugData.id,entityType:{name:bugData.__type}}),configCreator.setSelectedProjects([data.selectByType("project")[0]]);var process=data.selectByType("process");configCreator.setProcesses(process);var deletedTime=testDataGenerator.getTimes()[2],config=configCreator.getConfig(),testCase=new TestCase("[component.timeList]");data.find(function(entity){entity.__type=="time"&&(entity.assignable={id:bugData.id})}),testCase.initModule({componentConfig:config,data:data},timeListComponent),testCase.test("should remove time",function(){this.serviceMock.registerRemoveCommand({config:{id:deletedTime.id,fields:["id"]},returneddata:{id:deletedTime.id,iserror:!1}}),this.element.find(".delete-time button").eq(0).click();var $rows=this.element.find(".ui-table tbody tr");equal($rows.length,2,"count of rows is valid")})};return{run:innerRun}})