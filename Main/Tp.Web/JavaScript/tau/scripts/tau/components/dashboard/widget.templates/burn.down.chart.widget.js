define(["jQuery","react","tau/components/component.burn.down.report","tau/components/component.burn.down.filter","jsx!tau/components/dashboard/widget.templates/shared/status.view"],function(e,t,n,r,a){return function(i){return{id:"burnDownChart",name:"Burn Down Chart",previewSrc:"../img/widgets/reports-burndown.png",description:"The Burn Down chart is a graphical representation of work left to do versus time",tags:["Reports"],insert:function(r,o){var s={context:{configurator:i},placeholder:r,name:"burnDownChart",template:["<div></div>"],defaultSettings:o,axes:{x:{labelSlope:"slope"}},emptyTemplate:a.renderToDOM({containerClassName:"tau-dashboard-widget-placeholder--burn-down-chart"},["Not enough data to build this beautiful chart",t.createElement("br",null),"Add Release or Iteration and complete some user stories"]),loaderTemplate:'<div class="tau-dashboard-widget-placeholder tau-loading--centered" />'},d=n.create(s);return d.fire("initialize",s),d.fire("settings.changed",o),{update:function(e){d.fire("settings.changed",e)},updateContext:function(e){d.fire("acid.changed",e.acid)},resize:function(){d.fire("resize",{width:e(r).width()})}}},insertSettings:function(t,n){var a={settings:n,findPlannableFilter:function(e){e(this.settings)},savePlannableFilter:function(e){this.settings=e}},o=e(t),s={context:{configurator:i},name:"burnDownChartFilter",template:["<div></div>"],storage:a};o.addClass("tau-widget-settings--burn-down");var d=r.create(s),u=e.Deferred(),l=e.Deferred(),c=e.Deferred();return d.on("afterRender",function(e,t){l.resolve(t.element)}),d.on("filter.afterRender",function(){c.resolve()}),e.when(l,c).then(function(e){o.append(e),u.resolve(function(){return a.settings})}),d.fire("initialize",s),u}}}});