define(["require","Underscore"],function(t){var e=t("Underscore");return{afterInit:function(t){this.restStorage=t},_get:function(t){this.restStorage.get({fields:["items"],callback:function(e){t&&t(null,e.items||[])}})},_save:function(t,n){this.restStorage.set({set:{items:e.values(t)},callback:function(t){n&&n(null,t.items)}})},bind:function(t,e){this.restStorage.bind({listener:t,fields:["items"],callback:function(t){e&&e(null,t.items||[])}})},unbind:function(t){this.restStorage.unbind({listener:t})}}});