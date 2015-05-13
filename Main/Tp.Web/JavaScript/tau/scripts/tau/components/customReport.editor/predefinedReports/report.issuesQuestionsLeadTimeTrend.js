define({name:"Issues resolution time trend",description:"How quickly Issues and Questions are resolved",type:"line",classNames:["line2-request","line2-decrease"],tags:["Help Desk"],reportSettings:{dataSource:{source:{filter:'?(RequestType is "Issue" or RequestType is "Question") and CreateDate > Today - 182(days)',items:[{id:"Request"}]},dimensions:[{model:"Week(EndDate)",id:"endDate"},{model:"Avg(LeadTime)",id:"leadTime"},{model:"entityType",id:"entityType"}],global:{},user:{}},report:{x:"endDate",y:"leadTime",color:"entityType"}}});