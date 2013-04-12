define(["Underscore","jQuery","tests.async/testkit/testkit.component","tests/common/remoteConstants","tests.async/slice/client.slice"],function(_,$,TestKit,Constants,ClientSlice){var camelCase=function(str){var car=str.substr(0,1),cdr=str.substr(1);return car.toLowerCase()+cdr},ComponentTestKit=TestKit.extend({initializeComponent:function(test,next){var configuratorInstance=test.get("configurator");test.get("real")||configuratorInstance.setRequireLoader(function(){}),configuratorInstance.setLoggedUser({id:1,name:"Me",role:"Developer",isAdministrator:!0});var store=configuratorInstance.getStore(),testData=test.get("data"),projectID=testData.project.p_scrum.id;test.get("real")===!1&&sinon.stub(store.config.proxy.service,"get",function(command){if(command.type=="context")command.callbacks.success({id:command.config.id,acid:"345"});else if(!command.config.id){var collection=_.toArray(testData[command.type]);setTimeout(function(){command.callbacks.success(collection)},0)}}),store.get("context",{projectIds:[projectID],fields:["acid"]},{success:function(r){var acid=r.data[0].acid;configuratorInstance.getHashService().setHref("http://localhost/targetprocess/RestUI/board.aspx?acid="+acid+"#"),configuratorInstance.getClipboardManager().restStorage.sources.splice(0,1);var componentBus=test.get("componentBus"),componentConfig={context:{configurator:configuratorInstance}},boardSettings=configuratorInstance.getBoardSettingsFactory().createInstance(test.get("board.definition"));configuratorInstance.registerService("boardSettings",boardSettings),componentBus.initialize(componentConfig),componentBus.fire("boardSettings.ready",{boardSettings:boardSettings}),next()}}).done()},init:function(componentClass,definition,testDataCfg){this._super(componentClass),this.definition=definition||{},testDataCfg=testDataCfg||{},_.defaults(testDataCfg,{boardSize:4,cardsPerCell:4});var self=this;this.registerSetup("fixtures",function(test,next){var entityTypes={us:Constants.EntityTypes.USERSTORY,release:Constants.EntityTypes.RELEASE,feature:Constants.EntityTypes.FEATURE},projects={p_scrum:{name:"Project Scrum"+ +(new Date)}},releases={},features={};for(var r=0;r<testDataCfg.boardSize;r++){var releaseName="release"+r;releases[releaseName]={name:"Release_"+r+"_"+ +(new Date),entityType:"release",project:"p_scrum"};var featureName="feature"+r;features[featureName]={name:"Feature_"+r+"_"+ +(new Date),entityType:"feature",project:"p_scrum",release:releaseName}}var userStories={};_(releases).chain().keys().each(function(releaseId){_(features).chain().keys().each(function(featureId){for(var s=0;s<testDataCfg.cardsPerCell;s++){var userStoryName=["us",releaseId,featureId,s].join("_");userStories[userStoryName]={name:userStoryName,entityType:"us",project:"p_scrum",release:releaseId,feature:featureId}}})});var fixtures={entityTypes:entityTypes,projects:projects,releases:releases,features:features,userStories:userStories};test.set("fixtures",fixtures),next()}),this.registerSetup("board.definition",function(test,next){var definition=test.get("board.definition")||_.clone(self.definition);definition.groupName=definition.groupName||"testboardz"+ +(new Date),definition.name=definition.name||"test board",definition.hasOwnProperty("x")&&(definition.x=definition.x||{types:["release"]}),definition.hasOwnProperty("y")&&(definition.y=definition.y||{types:["feature"]}),definition.cells=definition.cells||{types:["UserStory"]},test.get("real")&&!definition.id?test.get("configurator").getRestStorage().data(definition.groupName,{userData:{name:definition.name}}).done(function(res){var data=res.data;definition.id=data.id||data.key,test.set("board.definition",definition),next()}):(definition.id=definition.id||_.uniqueId(),test.set("board.definition",definition),next())}),this.registerSetup("board.slice",function(test,next){var definition=test.get("board.definition"),configuratorInstance=test.get("configurator"),testData=test.get("data");if(test.get("real")===!1){var clientSliceConfig={};definition.x&&(clientSliceConfig.x=camelCase(definition.x.types[0])),definition.y&&(clientSliceConfig.y=camelCase(definition.y.types[0])),definition.cells&&(clientSliceConfig.cells=camelCase(definition.cells.types[0]));var clientSlice=new ClientSlice(clientSliceConfig);test.set("sliceClient",clientSlice);var sliceClient=test.get("sliceClient"),service=function(config){var deferred=$.Deferred(),url=decodeURI(config.url);if(url.indexOf("/cells")>0)return deferred.resolve(sliceClient.getCells(testData,config)),deferred;if(url.indexOf("/list")>0)return deferred.resolve(sliceClient.getList(testData,config)),deferred;if(url.indexOf("/xaxis")>0)return deferred.resolve(sliceClient.getXResponse(testData,config)),deferred;if(url.indexOf("/yaxis")>0)return deferred.resolve(sliceClient.getYResponse(testData,config)),deferred;if(url.indexOf("/space")>0)return deferred.resolve(sliceClient.getSpace(testData,config)),deferred;if(url.indexOf("/moveAndPrioritizeBatch")>0)return deferred.resolve(sliceClient.moveAndPrioritizeBatch(testData,config)),deferred;if(url.indexOf("/prioritizeBatch")>0)return deferred.resolve(sliceClient.prioritizeBatch(testData,config)),deferred;if(url.indexOf("/move")>0)return deferred.resolve(sliceClient.move(testData,config)),deferred;if(url.indexOf("/prioritize")>0)return deferred.resolve(sliceClient.prioritize(testData,config)),deferred;if(url.indexOf("/cellActions")>0)return deferred.resolve(sliceClient.cellActions(testData,config)),deferred};configuratorInstance.setSliceService(service)}var spy=sinon.spy(configuratorInstance.getSliceService());configuratorInstance.setSliceService(spy),next()}),this.registerSetup("restStorage",function(test,next){var configuratorInstance=test.get("configurator"),definition=test.get("board.definition");test.get("real")==0&&configuratorInstance.setRestStorageService(function(ajaxConfig){var $scope=ajaxConfig.$scope;if($scope.$group===definition.groupName){var resp={group:{name:definition.groupName,id:2},key:$scope.$key,ownerId:1,scope:"Public",publicData:{},userData:{zoomLevel:definition.zoomLevel||"2",name:definition.name},id:definition.id},deferred=$.Deferred();return deferred.resolve(resp),deferred}}),configuratorInstance.getRestStorage().on("error",function(evt){test.done("REST storage error "+evt.data.message)}),next()}),this.registerSetup("component.initialize",this.initializeComponent),this.setSetupsOrder(["options","configurator","fixtures","fixtures.load","store","board.definition","board.slice","restStorage","componentBus","listeners","component.initialize"])}});return ComponentTestKit})