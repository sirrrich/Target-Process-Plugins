define(["tau/core/templates-factory"],function(t){var e={engine:"jqote2",name:"test-step-run-status",customFunctions:{getStatus:function(t,e){return e&&t?"passed":e&&!t?"failed":"notrun"},getStatusLabel:function(t,e,s){var n=this.getStatus(t,e);return"notrun"==n&&(n="not run"),s?this.capitaliseFirstLetter(n):n},capitaliseFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},markup:['<button onclick="return false;" class="tau-btn tau-btn-big i-role-status tau-<%= fn.getStatus(this.passed, this.runned) %>" data-result="<%= fn.getStatus(this.passed, this.runned) %>">',"<%= fn.getStatusLabel(this.passed, this.runned, true) %>","</button>"].join("")};return t.register(e)});