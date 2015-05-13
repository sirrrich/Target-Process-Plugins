define(["require","Underscore","jQuery","tau/core/class","tau/models/board.plus/model.board.slice.extender","tau/services/customize/service.customize.card.layout.factory","tau/components/dashboard/widget.templates/todo.list/todo.widget.entity.layouts","tau/models/board.customize.units/const.card.sizes","tau/utils/utils.date"],function(t){var e=t("Underscore"),i=t("jQuery"),s=t("tau/core/class"),a=t("tau/models/board.plus/model.board.slice.extender"),n=t("tau/services/customize/service.customize.card.layout.factory"),r=t("tau/components/dashboard/widget.templates/todo.list/todo.widget.entity.layouts"),o=t("tau/models/board.customize.units/const.card.sizes"),c=t("tau/utils/utils.date"),d=6,u=o.zoomToSize(d);return s.extend({SHOW_MAX_CARDS:100,CARD_SETTINGS:null,LAYOUTS:null,cardsRetrieving:null,cardsRetrieved:null,_acid:null,_configurator:null,_entityTypes:e.keys(r),_cometSubscription:null,init:function(t,i,s){this._configurator=i,this._updateSettings(s),this._cards=[],this.cardsRetrieving=e.Callbacks(),this.cardsRetrieved=e.Callbacks();var a=this.CARD_SETTINGS=e.reduce(r,function(t,e,i){return t[i]={},t[i][u]=e,t},{}),o=new n(this._configurator);this.LAYOUTS=e.reduce(a,function(t,e,i){return t[i]=o.getLayout(a,i,u),t},{}),this.updateContext(t)},updateContext:function(t){this._acid=t.acid,this._createSliceAndLoadToDoList()},update:function(t){this._updateSettings(t),this._createSliceAndLoadToDoList()},getCardDataByEntityId:function(t){var i=e.findWhere(this._cards,{id:t});return i?i.data:null},_updateSettings:function(t){this._entityTypes=t.entities,this._highlight=t.highlight},_createSliceAndLoadToDoList:function(){this.cardsRetrieving.fire(),this._stopCometListener(),i.when(this._createSlice()).then(function(){this._startCometListener(),this._loadToDoList()}.bind(this))},_loadToDoList:function(){i.when(this.slice.list({$skip:0,$take:this.SHOW_MAX_CARDS+1})).then(function(t){var e=t.data.items,i=e.length>0?e[0].dynamic:{};return this._loadAdditionalCardData(i.items||[])
}.bind(this)).then(this._storeLoadedCards.bind(this))},_loadAdditionalCardData:function(t){if(!t.length)return t;var i=e.map(t,function(t){return t.data.cardData.id});return this._configurator.getStore().getDef("assignable",{fields:["id","lastStateChangeDate"],$query:{id:{$in:i}}}).then(function(i){return e.each(t,function(t){var s=e.findWhere(i,{id:t.data.cardData.id});t.lastStateChangeDate=s&&s.lastStateChangeDate?c.parseTimestampToDate(s.lastStateChangeDate):null})})},_storeLoadedCards:function(t){this._cards=t.slice(0,this.SHOW_MAX_CARDS),this.cardsRetrieved.fire({cards:this._cards,hasMore:t.length>this.SHOW_MAX_CARDS,layouts:this.LAYOUTS,highlight:this._highlight})},_createSlice:function(){var t=this._configurator.getSliceFactory().create(this._createSliceParameters()),e=new a;return e.extend({slice:t},this._createLayoutFactory()).then(function(t){return this.slice=t.slice,this.slice}.bind(this))},_createSliceParameters:function(){var t={definition:this._createDefinition()};return t.definition.global={acid:this._acid},t},_createLayoutFactory:function(){var t=this._createDefinition(),e={get:function(){return i.Deferred().resolve(t)}};return new n(this._configurator,e)},_startCometListener:function(){var t=this.slice.getCometParameters();this._stopCometListener(),this._cometSubscription=this._configurator.getComet().subscribe("slice",{parameters:t,batchCallback:function(){this._loadToDoList()}.bind(this)})},_stopCometListener:function(){this._cometSubscription&&(this._cometSubscription.stop(),this._cometSubscription=null)},_createDefinition:function(){return{cells:{filter:"? Responsible is Me and AssignedUser.Contains(Me) and EntityState.IsFinal is False",ordering:{name:"Rank",direction:"Desc"},types:this._entityTypes,useFilter:!0},cardSettings:this.CARD_SETTINGS,zoomLevel:d}},destroy:function(){this._stopCometListener()}})});