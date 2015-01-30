define(["require","Underscore","./predefinedReports/report.featureCycleTimeTrend","./predefinedReports/report.cycleTimeTrend","./predefinedReports/report.effortVsCycleTime","./predefinedReports/report.storiesDoneByProject","./predefinedReports/report.effortVsTimeSpent","./predefinedReports/report.storiesDoneByTeam","./predefinedReports/report.priorityAndEffort","./predefinedReports/report.iterationVelocityTrend","./predefinedReports/report.teamIterationVelocityTrend","./predefinedReports/report.newBugsTrend","./predefinedReports/report.closedBugsTrend","./predefinedReports/report.bugsPerFeaturePerProject","./predefinedReports/report.problematicFeatures","./predefinedReports/report.newRequests","./predefinedReports/report.ideasVotes","./predefinedReports/report.bugsByState","./predefinedReports/report.issuesQuestionsLeadTimeTrend","./predefinedReports/report.closedRequestsTrend","./predefinedReports/report.issuesLeadTimeVsPriority","./predefinedReports/report.projectsCompletion","./predefinedReports/report.releaseEffortVsTimeSpent","./predefinedReports/report.iterationEffortVsTimeSpent","./predefinedReports/report.timeSpentByPerson"],function(e){var r=e("Underscore"),t=[e("./predefinedReports/report.featureCycleTimeTrend"),e("./predefinedReports/report.cycleTimeTrend"),e("./predefinedReports/report.effortVsCycleTime"),e("./predefinedReports/report.storiesDoneByProject"),e("./predefinedReports/report.effortVsTimeSpent"),e("./predefinedReports/report.storiesDoneByTeam"),e("./predefinedReports/report.priorityAndEffort"),e("./predefinedReports/report.iterationVelocityTrend"),e("./predefinedReports/report.teamIterationVelocityTrend"),e("./predefinedReports/report.newBugsTrend"),e("./predefinedReports/report.closedBugsTrend"),e("./predefinedReports/report.bugsPerFeaturePerProject"),e("./predefinedReports/report.problematicFeatures"),e("./predefinedReports/report.newRequests"),e("./predefinedReports/report.ideasVotes"),e("./predefinedReports/report.bugsByState"),e("./predefinedReports/report.issuesQuestionsLeadTimeTrend"),e("./predefinedReports/report.closedRequestsTrend"),e("./predefinedReports/report.issuesLeadTimeVsPriority"),e("./predefinedReports/report.projectsCompletion"),e("./predefinedReports/report.releaseEffortVsTimeSpent"),e("./predefinedReports/report.iterationEffortVsTimeSpent"),e("./predefinedReports/report.timeSpentByPerson")];
return r.each(t,function(e,r){e.reportSettings.report.type=e.type,e.id="report"+r}),{items:t}});