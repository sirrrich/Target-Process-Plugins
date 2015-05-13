define({name:"Time Spent by Person",description:"How many hours spent by every person every month for the last year",type:"bar",classNames:["facet-bar"],tags:["Time","People"],reportSettings:{dataSource:{source:{filter:"?CreateDate > TODAY - 365(days)",items:[{id:"Time"}]},dimensions:[{model:"MONTH(CreateDate)",id:"createDate"},{model:"SUM(Spent)",id:"spent"},{model:"User",id:"user"}],global:{},user:{}},report:{type:"bar",x:"createDate",y:["user","spent"]}}});