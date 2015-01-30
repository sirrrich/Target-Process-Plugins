define({name:"Bugs per User Story and Project",description:"How many Bugs each User Story has",type:"horizontalBar",classNames:["horizontalBar","horizontalBar-bug"],tags:["QA"],reportSettings:{dataSource:{source:{filter:"?UserStory is not none",items:[{id:"Bug"}]},dimensions:[{id:"project",model:"UserStory.project.name"},{id:"userStory",model:"userStory.name"},{id:"count",model:"Count()"},{id:"entityType",model:"entityType.name"}]},report:{x:"count",y:["project","userStory"],guide:[{y:{label:"Project"}},{x:{label:"Count"},y:{label:"User Story"}}],color:"entityType",dimensions:{userStory:{type:"category",scale:"ordinal"},project:{type:"category",scale:"ordinal"},entityType:{type:"category",scale:"ordinal"},count:{type:"measure",scale:"linear"}}}}});