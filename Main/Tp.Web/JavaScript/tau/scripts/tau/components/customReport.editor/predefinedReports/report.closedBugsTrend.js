define({name:"Closed Bugs trend",description:"Bugs fixed in Projects by week",type:"line",classNames:["facet-line","facet-bug"],tags:["QA"],reportSettings:{dataSource:{source:{filter:"?EndDate  >= Today - 182(days)",items:[{id:"Bug"}]},dimensions:[{id:"endDate",model:"Week(endDate)"},{id:"project",model:"project"},{id:"count",model:"Count()"},{id:"entityType",model:"entityType"}]},report:{x:"endDate",y:["project","count"],color:"entityType"}}});