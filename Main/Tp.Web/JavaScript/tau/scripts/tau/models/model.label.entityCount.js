define(["require","Underscore","tau/models/model.label"],function(e){var t=e("Underscore"),i=e("tau/models/model.label");return i.extend({"bus beforeInit":function(e,i){var n=i.config,r={definition:{cells:{items:[{id:n.entityType}],filter:t.sprintf(n.filter,i.config.context.entity.id)}}};this.fire("comet.parameters.ready",r)}})});