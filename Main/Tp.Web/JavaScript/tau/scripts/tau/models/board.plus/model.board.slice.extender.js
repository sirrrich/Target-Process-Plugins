define(["Underscore","jQuery","tau/core/class","tau/models/board.customize.units/const.card.sizes","tau/models/board.customize.units/board.customize.units.settings.default.repository","tau/models/board.plus/augmenter/board.plus.augmenter","tau/models/board.customize.units/board.customize.cards.builderSelector","tau/models/board.customize.units/board.customize.cards.builderSelector.base","tau/models/board.customize.units/board.customize.cards.builderSelector.lazy"],function(e,t,s,a,i,n,u,y,l){return s.extend({extend:function(s,a){var i=s.slice.config.definition,n=i.cells,u=n.types;return e.isArray(n)&&(u=n),t.when(a.getCardLayoutsByTypesAndSize(u),a.getCardLayoutsByTypesAndSize(i.x?i.x.types:[]),a.getCardLayoutsByTypesAndSize(i.y?i.y.types:[])).then(this._createTypes.bind(this)).then(this._extendSliceDataUsingTypes.bind(this,s))},_createTypes:function(e,t,s){return{cellTypes:this._createTypesFromLayouts(e),xTypes:this._createTypesFromLayouts(t),yTypes:this._createTypesFromLayouts(s)}},_createTypesFromLayouts:function(t){var s={fullTypes:new u,baseTypes:new y,lazyTypes:new l};return e.reduce(t,function(t,a,i){return e.each(t,function(e,t){e.push({type:i,data:s[t].build(i,a)})}),t},{fullTypes:[],baseTypes:[],lazyTypes:[]})},_augmentAxisData:function(t,s){if(t.data){var a=s.getCardDataByType(e.first(t.types));return t.data.substr(0,t.data.length-1)+","+a+"}"}return t.data},_augment:function(e,t,s){e.x&&(e.x=t.augmentAxisX(e.x),e.x.data=this._augmentAxisData(e.x,s)),e.y&&(e.y=t.augmentAxisY(e.y),e.y.data=this._augmentAxisData(e.y,s))},_extendSliceDataUsingTypes:function(e,t){var s=e.slice,a=e.slice.clone(),i=e.slice.clone(),y=s.config.definition,l=a.config.definition,r=i.config.definition;if(y.cells.types=t.cellTypes.fullTypes,l.cells.types=t.cellTypes.baseTypes,r.cells.types=t.cellTypes.lazyTypes,"newlist"===e.slice.config.definition.viewMode)y.x&&t.xTypes.fullTypes.length&&(y.x.data=t.xTypes.fullTypes[0].data),y.y&&t.yTypes.fullTypes.length&&(y.y.data=t.yTypes.fullTypes[0].data);
else{var o=new n,c=new u;this._augment(y,o,c),this._augment(l,o,c)}return e.slice=s,e.full=s,e.base=a,e.lazy=i,e}})});