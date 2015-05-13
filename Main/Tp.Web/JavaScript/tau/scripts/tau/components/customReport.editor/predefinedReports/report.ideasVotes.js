define({name:"Ideas Votes",description:"Ideas by Business Value and Votes count",type:"scatterplot",classNames:["scatterplot2-request","scatterplot2-stable"],tags:["Help Desk"],reportSettings:{dataSource:{source:{items:[{id:"request"}],filter:"?RequestType is 'Idea'"},dimensions:[{id:"count",model:"Requesters.Count()"},{id:"businessValue",model:"BusinessValue"},{id:"entityType",model:"entityType"}],global:{}},report:{color:"entityType",x:["count"],y:["businessValue"]}}});