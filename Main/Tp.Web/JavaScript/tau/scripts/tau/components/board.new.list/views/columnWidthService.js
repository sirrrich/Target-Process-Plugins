define(["Underscore","jQuery","tau/core/class","tau/utils/debug/utils.debug","tau/components/board.new.list/views/units/unit","tau/components/board.new.list/views/units/nameUnit"],function(t,e,n,i,s,a){return n.extend({COLUMN_WIDTHS_STYLE_ID:"-list-columns-level-",SETTING_NAME:"listUserSettings",init:function(t,e){this.resetCache(),this._boardSettings=t,this._widthOptions=e||{}},resetCache:function(){this.layout={items:{}}},setElementScope:function(t){this.$boardBody=t,this.boardBodyId=t.attr("id"),i.assertError(!!this.boardBodyId,"board body id should be set")},calculateColumnWidths:function(n,i){var s=taus.start("statistics_newlist_columnWidths",this._createStatsDataFromRequests(n)),a=t.chain(n).groupBy(function(t){return t.levelKey}).map(function(n,s){var a=e(t.map(n,function(t){return t.levelContainer})),r="0"===s?this._calculateRootLevel(a):this._calculateNestedLevel(s,a,i);return e.when(r).then(function(t){return{levelKey:s,cssRules:t}})}.bind(this)).value();return e.when.all(a).then(function(e){var n=t.filter(e,function(t){return!!t.cssRules});this._createColumnWidthStyles(n),s.stop()}.bind(this))},_calculateRootLevel:function(t){return e.when(this.layout.name?this.layout:this._getColumnSizeSettings()).then(function(e){this.layout.name=e.name,this._calculateUnitWidths("0",t);var n=this._generateCssRules("0"),i=this._getForLevel("0");return this.layout.name=i&&i.name&&i.name.calculated,n}.bind(this))},_calculateNestedLevel:function(t,e,n){return this._shouldSkipCalculationFor(t,e,n)?void 0:(this._calculateUnitWidths(t,e),this._generateCssRules(t))},_calculateUnitWidths:function(e,n){var i=".tau-elems-table-level-"+e,a=n.eq(0).find(".i-role-headerholder "+i);if(!a.length)return console.warn("_calculateUnitWidths: empty level "+e),void this._setForLevel(e,null);this._removeColumnWidthsStyle(e),this.layout.dragHandler=this.layout.dragHandler||a.find(".tau-drag-handler-cell").width();var r=this.layout.dragHandler,u={},l=a.find(".tau-elems-cell"),o=t.tail(l);t.each(o,function(t){var i=new s(t,e,n,{minWidth:this._widthOptions.minUnitWidth}),a=i.calculateWidth();
u[i.unitId]=a,u.hasItems=u.hasItems||i.hasItems,r+=a.calculated},this);var h=this._createNameUnit(l[0],e,n);if(this.layout.name)u.name=h.setupForcedWidth(this.layout.name);else{var c=this.$boardBody.closest(".tau-board-list-view__inner");u.name=h.setupWidth(c,r)}this._setForLevel(e,u)},_generateCssRule:function(t){return"#"+this.boardBodyId+" "+t.selector+" { width: "+t.calculated+"px; }"},_generateCssRules:function(e){var n=[],i=this._getForLevel(e);return i?(t.each(i,function(t,e){t.hasItems&&"name"!==e&&n.push(this._generateCssRule(t))},this),n.push(this._generateCssRule(i.name)),n):(console.warn("_generateCssRules: empty level "+e),n)},resize:function(){},setNameWidth:function(e,n){return this._setColumnSizeSettings({name:e}).then(function(){this.layout.name=e;var i=n.closest(".i-role-board-body");t.each(this.layout.items,function(t,e){var n=this._createNameUnit(null,e,i);t.name.calculated=n.setupForcedWidth(this.layout.name).calculated;var s=this._generateCssRules(e);this._createColumnWidthStyles([{levelKey:e,cssRules:s}])},this)}.bind(this))},getMinNameUnitWidth:function(){return this._widthOptions.minNameUnitWidth||a.prototype.MIN_UNIT_WIDTH},_getColumnSizeSettings:function(){return this._getListUserSettings().then(function(t){return t.columnSizes||{}}.bind(this))},_setColumnSizeSettings:function(t){return this._setListUserSettings({columnSizes:t})},_getListUserSettings:function(){return this._boardSettings.get([this.SETTING_NAME]).then(function(t){return t[this.SETTING_NAME]||{}}.bind(this))},_setListUserSettings:function(e){return this._getListUserSettings().then(function(n){t.extend(n,e);var i={};return i[this.SETTING_NAME]=n,i}.bind(this)).then(function(t){return this._boardSettings.set({set:t})}.bind(this))},_getForLevel:function(t){return this.layout.items[t]},_setForLevel:function(t,e){this.layout.items[t]=e},_createColumnWidthStyles:function(n){t.each(n,function(t){this._removeColumnWidthsStyle(t.levelKey)},this);var i=t.map(n,function(t){var e=this._createColumnWidthStyleId(t.levelKey);
return'<style id="'+e+'">'+t.cssRules.join("\n")+"</style>"},this).join("\n");e(i).appendTo(this.$boardBody)},_removeColumnWidthsStyle:function(t){e("#"+this._createColumnWidthStyleId(t)).remove()},_createColumnWidthStyleId:function(t){return this.boardBodyId+this.COLUMN_WIDTHS_STYLE_ID+t},_shouldSkipCalculationFor:function(t,e,n){var i=this._getForLevel(t);if(!i)return!1;if(n){if(i.hasItems)return!0;if(i.hasItems===!1&&!e.find(".i-role-card:first-child").length)return!0}return!1},_createStatsDataFromRequests:function(e){return t.chain(e).groupBy(function(t){return t.levelKey}).reduce(function(t,e,n){return t[n]=e.length,t},{}).value()},_createNameUnit:function(t,e,n){return new a(t,e,n,{minWidth:this._widthOptions.minNameUnitWidth})}})});