define(["tau/core/templates-factory"],function(a){var b={name:"list-item-assignments-user",markup:['<b class="assigned-user">${name}</b>',"{{if $data !== $item.last}}&nbsp;|&nbsp;{{/if}}"].join("")};return a.register(b)})