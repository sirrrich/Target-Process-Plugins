var items=[{name:"Blank",description:"Just an empty board",definition:{}},{name:"My Work",description:"Everything assigned to you",tags:["scrum","kanban","my"],definition:{cells:{types:["feature","userstory","bug","task"],filter:"?AssignedUser.Where(it is Me)"},x:{types:["entitystate"]},zoomLevel:5}},{name:"Iteration Plan",description:"Shows backlog and two next iterations",tags:["scrum","iteration"],definition:{cells:{types:["userstory","bug"]},x:{types:["iteration"],filter:"?it is Current or it is Future(2)"},zoomLevel:6}},{name:"Kanban Board",description:"User stories by states",tags:["kanban"],definition:{cells:{types:["userstory"]},x:{types:["entitystate"]},zoomLevel:5}},{name:"Task Board",description:"Tasks by states of user stories from current iteration",tags:["scrum","task"],definition:{cells:{types:["task"]},x:{types:["entitystate"]},y:{types:["userstory"],filter:"?Iteration is Current"},zoomLevel:4}},{name:"Story Map Backlog",description:"User stories by features not assigned to any release",tags:["scrum","backlog"],definition:{cells:{types:["userstory"],filter:"?Release is None"},y:{types:["feature"]},zoomLevel:3}},{name:"Story Map Releases",description:"User stories by features and two next releases",tags:["scrum","backlog"],definition:{cells:{types:["userstory"]},x:{types:["release"],filter:"?it is future(2)"},y:{types:["feature"]},zoomLevel:3}},{name:"Projects by Teams",description:"High level view on projects",tags:["scrum","kanban","project","team"],definition:{cells:{types:["project"]},y:{types:["team"]},zoomLevel:6}},{name:"Recently Added Work",description:"All work added last week",tags:["scrum","kanban"],definition:{cells:{types:["feature","userstory","task","bug"],filter:"?CreateDate > today - 7(days)"},zoomLevel:6}},{name:"Impediments",description:"All blockers by state",tags:["scrum","impediment"],definition:{cells:{types:["impediment"]},x:{types:["entitystate"]},zoomLevel:5}},{name:"Issues Queue",description:"Recent issues created last month",tags:["help desc"],definition:{cells:{types:["request"],filter:"?(RequestType is 'Issue' or RequestType is 'Question') and EntityState.IsFinal != true and CreateDate > today - 30(days)",ordering:{name:"Created Date",isDescending:!0}},x:{types:["priority"]},zoomLevel:5}},{name:"Ideas Queue",description:"Recent ideas created last month",tags:["help desc"],definition:{cells:{types:["request"],filter:"?RequestType is 'Idea' and EntityState.IsFinal != true and CreateDate > today - 30(days)",ordering:{name:"Created Date",isDescending:!0}},x:{types:["priority"]},zoomLevel:4,viewMode:"list"}},{name:"Work by Person",description:"Stories, Bugs and Tasks by Person",tags:["scrum","people","kanban"],definition:{cells:{types:["bug","task","userstory"]},x:{types:["entitystate"]},y:{types:["assigneduser"]},zoomLevel:3}},{name:"Work by Projects",description:"Features, Stories, Bugs by Project",tags:["scrum","project","kanban"],definition:{cells:{types:["bug","feature","userstory"]},x:{types:["entitystate"]},y:{types:["project"]},zoomLevel:3}},{name:"Work by Teams",description:"Features, Stories, Bugs by Teams",tags:["team"],definition:{cells:{types:["bug","feature","userstory"]},x:{types:["entitystate"]},y:{types:["team"]},zoomLevel:3}},{name:"Team Iterations Plan",description:"Iteration plan for Team. Allow work from several projects.",tags:["team","iteration"],definition:{cells:{types:["bug","userstory"]},x:{types:["teamiteration"],filter:"?it is current or it is future(2)"},zoomLevel:6}},{name:"Test Cases in Current Iteration",description:"Test Cases by User Stories in current iteration",tags:["qa","scrum"],definition:{cells:{types:["testcase"]},y:{types:["userstory"],filter:"?iteration is current"},zoomLevel:3}},{name:"Test Cases by Stories",description:"User Stories with Test Cases",tags:["qa"],definition:{cells:{types:["testcase"]},y:{types:["userstory"],filter:"?TestCases.Count > 0"},zoomLevel:4}},{name:"Test Plans",description:"Test Cases by Test Plans",tags:["qa"],definition:{cells:{types:["testcase"]},y:{types:["testplan"]},zoomLevel:4}},{name:"People by Teams",description:"Active users in Teams",tags:["people","team"],definition:{cells:{types:["user"],filter:"?IsActive is True"},y:{types:["team"]},zoomLevel:3}},{name:"People by Projects",description:"Active users in Projects",tags:["people","project","scrum","kanban"],definition:{cells:{types:["user"],filter:"?IsActive is True"},y:{types:["project"]},zoomLevel:3}},{name:"Estimation",description:"Stories and Bugs by Effort",tags:["scrum"],definition:{cells:{types:["userstory","bug"]},x:{types:["effort"]},zoomLevel:4}},{name:"Tags",description:"Entities with tags",tags:["kanban"],definition:{cells:{types:["feature","userstory","bug","request"]},y:{types:["tag"],filter:"?Generals.Count > 0"},zoomLevel:2}},{name:"Bugs by Severity",description:"Open bugs by severity",tags:["qa","scrum","kanban"],definition:{cells:{types:["bug"],filter:"?EntityState.IsFinal != true"},y:{types:["severity"]},zoomLevel:4}},{name:"Bugs in Current Release",description:"Open bugs in current release",tags:["qa","scrum"],definition:{cells:{types:["bug"],filter:"?EntityState.IsFinal != true and Release is Current"},y:{types:["priority"]},zoomLevel:4}},{name:"User Stories",description:"List of all user stories",tags:["scrum"],definition:{cells:{types:["userstory"]},viewMode:"list",zoomLevel:6}},{name:"Personal Kanban",description:"Your personal Kanban board with cards assigned to you",tags:["kanban"],definition:{cells:{types:["userstory","bug","task"],filter:"?AssignedUser.Where(it is Me)",ordering:{name:"Rank",isDescending:!0}},x:{types:["entityState"]},zoomLevel:4}},{name:"People by Role",description:"All people grouped by default role",tags:["people"],definition:{cells:{types:["user"]},y:{types:["role"]},zoomLevel:4}},{name:"Release Plan",description:"Show backlog and two next releases",tags:["scrum"],definition:{cells:{types:["userstory","feature","bug"]},x:{types:["release"],filter:"?it is Current or it is Future(2)"},zoomLevel:6}},{name:"Scrum Board",description:"Track user stories and bugs progress in current sprint",tags:["scrum"],definition:{cells:{types:["userstory","bug"],filter:"?Iteration is Current",ordering:{name:"Rank",isDescending:!0}},x:{types:["entityState"]},zoomLevel:4}}],groups=[{name:"kanban",items:["Kanban Board","Personal Kanban","Work by Person","Impediments","Recently Added Work","Work by Projects","Projects by Teams","People by Role"]},{name:"scrum",items:["My Work","Story Map Backlog","Estimation","Release Plan","Iteration Plan","Task Board","Scrum Board","Work by Person","Recently Added Work"]}],q="            INSERT INTO [ClientStorage]([StorageGroupId], [Key], [OwnerId], [Scope])        \n                          VALUES(                                                                     \n                              @boardTemplatesGroupID                                                  \n                              ,'%s'    \n                     ,@userID                                                                \n                              ,'Public')                                                              \n                                                                                                      \n                      SET @storageID = @@IDENTITY                                                     \n                                                                                                      \n                                                                                                       \n                   INSERT INTO [ClientStorageData] ([StorageId], [Value], [Key])                    \n                       SELECT       @storageID, '%s', 'name'                                        \n                       UNION SELECT @storageID, '%s', 'description'                                 \n                       UNION SELECT @storageID, '%s', 'definition'                                  \n                       UNION SELECT @storageID, '%s', 'numericPriority'                             \n                       UNION SELECT @storageID, '%s', 'previewName'                                \n                       UNION SELECT @storageID, '%s', 'type'                                     \n                       UNION SELECT @storageID, '%s', 'tags'",e=JSON.stringify,qs=_.map(items,function(v,k){return v.id=_.uniqueId("boardtemplate"),_.sprintf(q,v.id,e(v.name),e(v.description),e(v.definition).replace(/(['])/g,"''"),e(k),e(k)+".png",e("system"),e(v.tags||[]))}),qGroup="                        INSERT INTO [ClientStorage]([StorageGroupId], [Key], [OwnerId], [Scope])        \n                                      VALUES(                                                                     \n                                          @boardTemplateGroupsGroupID                                                  \n                                          ,REPLACE(CAST(NEWID() AS NVARCHAR(255)), '-', '')                       \n                                          ,@userID                                                                \n                                          ,'Public')                                                              \n                                                                                                                  \n                                  SET @storageID = @@IDENTITY                                                     \n                                                                                                                  \n                                                                                                                   \n                               INSERT INTO [ClientStorageData] ([StorageId], [Value], [Key])                    \n                                   SELECT       @storageID, '%s', 'name'                                        \n                                   UNION SELECT @storageID, '%s', 'boardTemplateIds'                                 \n                                   UNION SELECT @storageID, '%s', 'type'",qsGroup=_.map(groups,function(v,k){var ids=_.pluck(_.map(v.items,function(item){return _.find(items,function(it){return it.name==item})}),"id");if(ids<v.items)throw Error("bad");return _.sprintf(qGroup,e(v.name),e(ids),e("system"))});console.log(qs.join("\n\n\n")+qsGroup.join("\n\n\n"))