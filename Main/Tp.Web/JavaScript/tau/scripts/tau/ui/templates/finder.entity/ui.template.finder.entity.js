define(["tau/core/templates-factory","tau/ui/templates/finder.entity/ui.template.finder.entity.list","template!tau/ui/templates/board.editor/ui.template.board.editor.filter"],function(e){var t={name:"finder.entity",engine:"jqote2",markup:['<div class="tau-lookup-block" tabindex="1" >','<form class="i-role-form">','<div class="tau-lookup-header">','<%= fn.sub("board.editor.filter", {name: "user_dsl", placeholder: "ID, Name or type ? for advanced filter"}) %>',"</div>",'<%= fn.sub("finder.entity.list", this) %>',"</form>","</div>"]};return e.register(t)});