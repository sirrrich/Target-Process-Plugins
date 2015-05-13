define({name:"Effort vs Time Spent",description:"Correlation between Time Spent on User Stories and estimated Effort",type:"scatterplot",classNames:["scatterplot1-bug","scatterplot1-increase","scatterplot2-userstory","scatterplot2-increase"],tags:["Time"],reportSettings:{dataSource:{source:{filter:"?EntityState.IsFinal is true and EndDate >= Today - 182(days) and Effort > 0 and TimeSpent > 0",items:[{id:"UserStory"},{id:"Bug"}]},dimensions:[{id:"timeSpent",model:"timeSpent"},{id:"effort",model:"effort"},{id:"entityType",model:"entityType"}]},report:{x:"effort",y:"timeSpent",color:"entityType"}}});