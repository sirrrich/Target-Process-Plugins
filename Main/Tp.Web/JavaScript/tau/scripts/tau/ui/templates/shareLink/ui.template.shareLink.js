define(["tau/core/templates-factory"],function(t){var e={name:"shareLink",engine:"jqote2",markup:['<div class="tau-sharelink">','<button type="button" class="i-role-trigger tau-button-link">',"Share link","</button>",'<div class="i-role-content">','<textarea class="tau-sharelink__link" readonly><%= this.url %></textarea>',"</div>","</div>"]};return t.register(e)});