define({name:"User Stories Business Value vs. Effort",description:"User Stories by Business Value and Effort. Bubble size shows Cycle Time",type:"scatterplot",classNames:["scatterplot1-userstory","scatterplot1-stable"],tags:["Scrum"],reportSettings:{dataSource:{source:{filter:"?EntityState.IsFinal is true and EndDate >= Today - 182(days)",items:[{id:"UserStory"}]},dimensions:[{id:"effort",model:"effort"},{id:"businessValue",model:"businessValue"},{id:"cycleTime",model:"cycleTime"},{id:"entityType",model:"entityType"}]},report:{x:"businessValue",y:"effort",color:"entityType",size:"cycleTime"}}});