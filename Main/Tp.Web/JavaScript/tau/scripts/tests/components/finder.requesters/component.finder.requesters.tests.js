define(["jQuery","tests/common/testkit","tau/configurator","tau/components/component.finder.requesters"],function($,ComponentTestKit,configurator,Component){var run=function(){var TestCase=new ComponentTestKit("[component.finder.requesters]",Component),requests={r1:"Evil Request"},generalUsers={u1:{id:777,firstName:"Ron",lastName:"Jeremy",kind:"User",isActive:!0},u2:{firstName:"Sasha",lastName:"Grey",kind:"User",isActive:!0,deleteDate:"12-Dec-2012"},u3:{firstName:"Max",lastName:"Hardcore",kind:"Requester",isActive:!1},u4:{firstName:"Bree",lastName:"Olson",kind:"User",isActive:!0},u5:{firstName:"Jenna",lastName:"Jameson",kind:"Requester",isActive:!0}},data=TestCase.loadFixtures({generalUsers:generalUsers,requests:requests});return TestCase.setData(data),TestCase.setEntity(data.request.r1),TestCase.selectDefaultProject(),TestCase.addTest({name:"should render valid markup",preSetup:function(){TestCase.getService().registerGetCommand({type:"company",config:{fields:["id","name"]},returnedData:[]}),TestCase.getService().registerFindCommand({type:"generalUser",config:{fields:["id","firstName","lastName","email","login"],$skip:0,$limit:15,$query:{isActive:!0,deleteDate:null},$orderByDesc:"id"},returnedData:_.values(data.generalUser)})},test:function(){var $el=this.$el,$options=$el.find("[role=option]");equal($options.length,3),TestCase.getService().verify()}}),TestCase.run()};return{run:run}})