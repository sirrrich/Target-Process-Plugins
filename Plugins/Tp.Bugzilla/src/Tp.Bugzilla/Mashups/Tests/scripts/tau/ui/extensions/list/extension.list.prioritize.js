define(["tau/components/extensions/component.extension.base"],function(a,b){return a.extend({"bus afterRender":function(a){var b=a.data.element;b.find("[role=list-inner]").sortable({connectWith:"[role=list-inner]",items:"[role=item]",dropOnEmpty:!0}).disableSelection()}})})