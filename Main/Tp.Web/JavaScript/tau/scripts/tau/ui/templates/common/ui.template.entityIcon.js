define(["tau/core/templates-factory","tau/ui/tags/ui.tag.term"],function(a,b){var c={tags:[b],name:"entity-icon",markup:['<em class="ui-type-icon ui-type-icon-${__type.toLowerCase()}">{{term(__type) "iconBig"}}</em>'],dependencies:[]};return a.register(c)})