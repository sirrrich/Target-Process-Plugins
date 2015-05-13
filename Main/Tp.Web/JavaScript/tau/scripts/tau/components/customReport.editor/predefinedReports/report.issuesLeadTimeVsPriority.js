define({name:"Issues Lead Time vs Business Value",description:"How Issues Business Value correlates with Lead Time",type:"scatterplot",classNames:["scatterplot1-request","scatterplot1-increase"],tags:["Help Desk"],reportSettings:{dataSource:{source:{filter:"?EndDate > TODAY - 30(days) and (RequestType is 'Issue' or RequestType is 'Question')",items:[{id:"Request"}]},dimensions:[{model:"entityType",id:"entityType"},{model:"LeadTime",id:"leadTime"},{model:"BusinessValue",id:"businessValue"}],global:{},user:{}},report:{x:"businessValue",y:"leadTime",color:"entityType"}}});