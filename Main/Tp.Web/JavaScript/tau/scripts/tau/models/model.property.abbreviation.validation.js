define(["tau/models/model.property.text.validation","tau/utils/utils.jsonSchema"],function(a,b){var c=a.extend({category:"edit",schema:b.Schema.create({type:"string",optional:!0,empty:!0,maxLength:3,pre:["trim"],post:[function(a){return(a+"").toUpperCase()},function(a){var b=/^[\dа-яa-z]{1,3}$/i;return a.match(b)||new this.Error("Abbr","Should contain letters or digits"),a}]})});return c})