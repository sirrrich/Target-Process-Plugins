define({name:"Team Iterations velocity trend",description:"How Team Iterations Velocity changes over time",type:"bar",classNames:["bar1-userstory","bar1-increase"],tags:["Velocity","Scrum"],reportSettings:{dataSource:{source:{filter:"?EntityState.IsFinal is true and EndDate >= Today - 182(days) and TeamIteration is not none",items:[{id:"UserStory"}]},dimensions:[{id:"teamIteration",model:"teamIteration"},{id:"effort",model:"Sum(effort)"},{id:"entityType",model:"entityType"}]},report:{x:"teamIteration",y:"effort",color:"entityType"}}});