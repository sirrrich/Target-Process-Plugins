define(["jQuery","tau/components/component.creator","tp/reports/extension.context","./burn.down.report/extensions/extension.burn.down.report","tp/reports/extension.navigator","tau/components/extensions/error/extension.errorBar"],function(e,t,r,n,o,a){return{create:function(e){var i={extensions:[r,o,n,a],template:{engine:"jqote2",name:"reports-template",markup:['<div class="tau-chart tp2-chart i-role-burnDown">','<div class="burnDownReport _burnDownReport">','<div class="tau-chart-plot report-chart"></div>',"</div>","</div>"]}},s=t.create(i,e);return s.fire("dataBind",{}),s}}});