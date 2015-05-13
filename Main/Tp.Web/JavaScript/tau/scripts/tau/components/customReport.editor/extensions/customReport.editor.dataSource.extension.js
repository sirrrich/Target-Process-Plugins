define(["require","jQuery","Underscore","tau/core/extension.base","../elements/customReport.elements","../customReport.builder","../customReport.settings.parser","libs/jquery/jquery.toggleFilter","libs/jquery/jquery.tau.resetableInput"],function(t){var e=t("jQuery"),i=t("Underscore"),n=t("tau/core/extension.base"),s=t("../elements/customReport.elements"),r=t("../customReport.builder"),o=t("../customReport.settings.parser");return t("libs/jquery/jquery.toggleFilter"),t("libs/jquery/jquery.tau.resetableInput"),n.extend({init:function(t){this._super(t),this._lastTick=null},"bus afterRender":function(t,i){var n=e(i.element);n.find(".i-role-filter-control").toggleFilter()},"bus afterRender:last + configurator.ready:last + show":function(t,i,n){this._refreshForm(n,e(i.element))},"bus afterRender:last + reportSettings.updated":function(t,i){var n=e(i.element);n.is(":visible")||(this._needToRebind=!0,this.fire("refresh"))},"bus afterRender:last + acid.ready + space.ready + configurator.ready:last + boardSettings.ready":function(t,i,n,s,r,o){var a=e(i.element);this._rebind(a,r,o.boardSettings,n,s)},"bus afterRender:last + editableState:last + form.components.bind":function(t,i,n){var s=e(i.element);n.isEditable||(s.find("input").prop("disabled",!0),s.find("button").prop("disabled",!0))},"bus boardSettings.ready:last + destroy":function(t,e){e.boardSettings.unbind(this)},_refreshForm:function(t,e){var i=t.service("boardSettings");i.get({fields:["acid","reportSettings"]}).then(function(n){var s=new o({reportSettings:i.settings.reportSettings}),r=s.canParse();e.find(".i-role-cant-parse").toggleClass("tau-hide",r),e.find(".i-role-can-parse").toggleClass("tau-hide",!r),r&&(this._needToRebind===!0?(this._needToRebind=!1,this._rebind(e,t,i,n,null)):this._bindForm(e,t,i,n,null))}.bind(this))},_rebind:function(t,e,i,n,s){this._setEntities(t),this._bindForm(t,e,i,n,s).then(function(){this.fire("$form.ready",t)}.bind(this)),this._bindActions(t,e,i,n,s)},_bindForm:function(t,i,n,s,r){return this._onBoardSettingsChanged(t,i,n),e.when(this._entities.dataSource.set(r,i,n,s),this._entities.chartType.set(n),this._entities.dimensions.set(n)).then(function(){this.fire("form.components.bind")
}.bind(this))},_bindActions:function(t,e,i,n,s){this._entities.dataSource.bindActions(s,e,i,n),this._entities.chartType.bindActions(i),this._entities.dimensions.bindActions(i),t.find(".i-role-apply-changes").click(function(){this._entities.dataSource.highlightIfEmpty(),this._entities.dimensions.highlightIfEmpty(),this._entities.dataSource.isEmpty()||this._entities.dimensions.isEmpty()||this._save(e,i)}.bind(this))},_setEntities:function(t){this._entities=new s({$el:t})},_save:function(t,e){var n=this._entities.dimensions.get(),s=function(t){var e=i.find(n,function(e){return i.contains(e.axes,t)});return e?e.id:null},o={type:this._entities.chartType.get(),color:s("color"),size:s("size"),x:i.compact([s("x1"),s("x2")]),y:i.compact([s("y1"),s("y2")])};e.get({fields:["acid"]}).done(function(t){var i=this._getDataSource(t.acid,n);i.global={acid:t.acid?t.acid:""},this._lastTick=(new Date).getTime(),r.createFromDefinition(e,i,o,this._lastTick)}.bind(this))},_getDataSource:function(t,e){return{source:this._entities.dataSource.get(),dimensions:i.map(e,function(t){return{id:t.id,model:t.model,filter:t.filter}}),global:{acid:t}}},_onBoardSettingsChanged:function(t,e,i){i.unbind({listener:this}),i.bind({listener:this,fields:["reportSettings"],callback:function(t){t.reportSettings.tick!==this._lastTick&&this.fire("reportSettings.updated")}}),i.bind({fields:["acid"],listener:this,callback:function(){t.is(":visible")&&this._save(e,i)}.bind(this)})}})});