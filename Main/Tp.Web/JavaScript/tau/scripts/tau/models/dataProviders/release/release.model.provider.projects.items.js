define(["jQuery","Underscore","tau/models/dataProviders/model.provider.items.base"],function(t,e,r){var n=r.extend({fetch:function(t){this._fetch("projects","project",!1,t)},_fetch:function(t,e,r,n){var o=this.config.context.entity,i=this.config.context.configurator.getStore();i.getDef(o.entityType.name,{id:o.id,fields:["id",{projects:["id","name","color"]}]}).then(this._convertData.bind(this)).then(n)},_convertData:function(t){return t=this._super(t.projects),e.sortBy(t,this._sortOrder)},_sortOrder:function(t){return t.name.toUpperCase()},_convertItem:function(t){return e.extend(t,{appPath:this.config.context.configurator.getApplicationPath(),uri:this.config.context.configurator.getUrlBuilder().getNewViewUrl(t.id,"project",!0)})}});return n});