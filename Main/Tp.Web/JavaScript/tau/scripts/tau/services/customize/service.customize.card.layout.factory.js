define(["jQuery","Underscore","tau/core/class","tau/models/board.customize.units/board.customize.units.settings.default.repository","tau/models/board.customize.units/const.card.sizes"],function(t,e,n,i,r){return n.extend({name:"board",sizes:r,defaultSettings:i,init:function(t,e){this.configurator=t,this.boardSettings=e,this.unitProviders=[t.getUnitsRegistry(),t.getCustomFieldsUnitsFactory()]},getLayoutFactory:function(){return this.boardSettings.get({fields:["cells","cardSettings","zoomLevel"]}).then(e.bind(function(t){return this.createFactory(t)},this))},patch:function(t){return t=this.replaceUnits(t,"impediment",{assignments_big_2:"responsible_person"}),t=this.replaceUnits(t,"release",{project_icon:"project_icons_release",project_abbr:"project_abbrs_release"})},replaceUnits:function(t,n,i){return t&&t[n]&&e.each(t[n],function(t){e.each(t,function(t){e.each(t,function(t){i[t.id]&&(t.id=i[t.id])})})}),t},createFactory:function(t){var n=this.patch(t.cardSettings),i=this._zoomToSize(t.zoomLevel);return e.bind(function(t,e,n,i){return this.getLayout(t,n,i||e)},this,n,i)},getLayout:function(t,n,i){var r=e.chain(e.isArray(n)?n:[n]).compact().map(function(t){return t.toLowerCase()}).value(),o=this.findSettings(t,r,[i]),u=e.object(e.map(o,function(t,n){return[n,e.find(t,function(t,e){return e===i})||[]]}));return e.isArray(n)?u:u[r[0]]},getCardLayoutByType:function(t){return this.getCardLayoutByTypeAndSize(t)},getCardLayoutsByTypesAndSize:function(t,e){return this.getLayoutFactory().then(function(n){return n(t,e)})},getCardLayoutByTypeAndSize:function(t,e){return this.getCardLayoutsByTypesAndSize([t],e).then(function(e){return e[t]})},getSavedSetting:function(t,e,n,i,r){return t&&t[i]&&t[i][r]},findSettings:function(t,n,i){var r=this,o=this.defaultSettings;return e.object(e.map(n,function(u){return u=u.toLowerCase(),[u,e.object(e.map(i,function(s){var a=r.getSavedSetting(t,n,i,u,s),c=!1;return a||(a=o.get(s,u),c=!0),a=e.map(a,function(t){return t=e.map(t,function(t){return e.extend({unit:r.findUnitById(t.id)},t)
}),t=e.filter(t,function(t){return t.unit})}),a.isDefault=c,[s,a]}))]}))},_zoomToSize:function(t){return r.zoomToSize(t)},findUnitById:function(t){return e.chain(this.unitProviders).map(function(e){return e.getUnitById(t)}).compact().first().value()}})});