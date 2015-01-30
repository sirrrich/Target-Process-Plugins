define({name:"Closed Requests trend",description:"How many Requests closed every day last month",type:"bar",classNames:["bar1-request","bar1-increase"],tags:["Help desk"],reportSettings:{dataSource:{source:{filter:"?EndDate > TODAY - 60(days)",items:[{id:"Request"}]},dimensions:[{model:"DAY(EndDate)",id:"date"},{model:"entityType.name",id:"entityType"},{model:"COUNT()",id:"count"}],global:{},user:{}},report:{x:"date",y:"count",color:"entityType",dimensions:{date:{type:"order",scale:"period"},entityType:{type:"order",scale:"ordinal"},count:{type:"measure",scale:"linear"}},guide:[{y:{label:"Count of Requests"},x:{label:"End Date by Day",tickPeriod:"day"}}]}}});