define(["tau/core/templates-factory"],function(templates){var config={name:"board.editor.autocomplete.item",engine:"jqote2",markup:['<li class="tau-autocomplete__item">','<a class="tau-autocomplete__itemtrigger tau-autocomplete__itemtrigger-',"<%! this.SuggestionType.toLowerCase() %>",' drop-down-option">',"<%! this.Value %>","</a>","</li>"]};return templates.register(config)})