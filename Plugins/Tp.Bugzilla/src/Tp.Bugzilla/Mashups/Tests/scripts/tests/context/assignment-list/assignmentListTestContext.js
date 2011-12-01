define(["tau/core/tau","tests/context/assignment-list/assignmentsModelEvents","tests/common/expector/expector","tau/models/model.assignmentsList"],function(a,b,c,d){function e(){this.eventsArguments={},this.mockControl=new MockControl}e.prototype={initData:function(){var a={id:"devRoleId",name:"DevRoleName",isPair:!0},b={id:"scRoleId",name:"qaRoleName",isPair:!1},c={id:"smRoleId",name:"smRoleName",isPair:!1},d={id:1,name:"ToDo",entityType:{name:"Bug",id:1},role:a},e={id:1,name:"InProgress",entityType:{name:"Bug",id:1},role:a},f={id:1,name:"Coded",entityType:{name:"Bug",id:1},role:a},g={id:1,name:"Testing",entityType:{name:"Bug",id:1},role:b},h=[d,e,f,g],i={id:"ownerId",firstName:"ownerFirstName",lastName:"ownerLastName",role:a},j={id:"userId1",firstName:"fn1",lastName:"fn1",role:a,avatar:"avatar1"},k={id:"userId2",firstName:"fn2",lastName:"fn2",role:a,avatar:"avatar2"},l={id:"userId3",firstName:"fn3",lastName:"fn3",role:c,avatar:"avatar3"},m={id:"userId4",firstName:"fn4",lastName:"fn4",role:b,avatar:"avatar4"},n={id:"userId5",firstName:"fn5",lastName:"fn5",role:a,avatar:"avatar5"},o=[j,k,l,m,n,i],p={effort:20,effortToDo:15,role:a},q={effort:15,effortToDo:8,role:b},r=[{id:1,role:a,user:j},{id:2,role:a,user:k},{id:3,role:b,user:m}];this.assignable={id:15,owner:i,assignments:r,roleEfforts:[p,q]},this.context={entityType:{name:"Bug",id:2},process:{id:"processId"},assignable:{id:this.assignable.id},loggedUser:{id:"loggedUserId",firstName:"LoggedUser First Name",lastName:"LoggedUser Last Name",role:{id:"roleId",name:"rolename"},avatar:"logged user avatar"}},this.data={assignable:this.assignable,context:this.context,assignments:r,users:o,states:h,ownerUser:i,devRole:a,qaRole:b,smRole:c}},initMockControls:function(){this[this.context.entityType.id]=this.Bug=this.mockControl.createMock({update:a.empty,find:a.empty,findOne:a.empty}),this.states=this.mockControl.createMock({find:a.empty}),this.assignments=this.mockControl.createMock({save:a.empty,find:a.empty,update:a.empty,remove:a.empty}),this.store=this.mockControl.createMock({done:a.empty}),this.store[this.context.entityType.id]=this.Bug,this.store.assignments=this.assignments,this.store.states=this.states},createModel:function(){this.model=new d(this.store,this.context)},initialize:function(){this.initData(),this.initMockControls(),this.createModel()},initializeForGetInitialData:function(){var a=this.data.assignable,b=this.data.context.process,c=this.data.states;this.expects().bug().findOne({id:a.id},a),this.expects().state().find({process:{id:b.id}},c),this.expects().store().done(Object),this.model.initialize(),this.mockControl.verify(),this.mockControl.reset()},expects:function(){this._expects||(this._expects=new c(this));return this._expects},events:function(){this._events||(this._events=new b(this));return this._events},verify:function(){this.events().verify(),this.mockControl.verify()},destroy:function(){}};return e})