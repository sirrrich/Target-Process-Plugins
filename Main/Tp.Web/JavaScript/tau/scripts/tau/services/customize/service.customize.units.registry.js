define(["Underscore","tau/core/class","tau/models/board.customize.units/board.customize.units.simple","tau/models/board.customize.units/board.customize.units.oneToOne","tau/models/board.customize.units/board.customize.units.collections","tau/models/board.customize.units/board.customize.units.visualization","tau/services/customize/templateRegistrators/cardTemplateRegistrator","tau/services/customize/templateRegistrators/listTemplateRegistrator","tau/services/customize/service.customize.units.helper","tau/const/entityType.names"],function(t,e,s,i,n,u,o,r,c,a){return e.extend({init:function(e,a){this.unitsHelper=new c([new o,new r]),e=e||t.flatten([s,i,n,u]),e=this.mappingTypes(e),this.units=this.register(e,a)},_mappingAssignedUserOnUser:function(e){return t.contains(e,a.USER)?t.union(e,[a.ASSIGNED_USER]):e},mappingTypes:function(e){return t.each(e,function(e){t.each(e.settings,function(t){t.types=this._mappingAssignedUserOnUser(t.types)},this)},this),e},register:function(e,s){return t.object(t.map(e,t.bind(function(t){return this.unitsHelper.processCustomFunctions(t,s),this.unitsHelper.processTemplates(t),this.unitsHelper.processSettings(t),this.unitsHelper.processIsApplicable(t),[t.id,t]},this)))},getUnitById:function(t){return this.units[t]}})});