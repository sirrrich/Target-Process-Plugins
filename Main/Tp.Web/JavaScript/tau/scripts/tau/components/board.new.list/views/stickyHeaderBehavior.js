define(["jQuery","Underscore","tau/core/class","tau/components/board.new.list/templates/template.new.list.stickyHeader","tau/components/board.new.list/views/units/nameUnit"],function(t,e,i,s,n){return i.extend({CLASS_MAP:{headerHolder:"i-role-headerholder",stickyHeader:"tau-board-list-sticky-header"},_$currentLevel:null,init:function(t,e,i,s){this._headerHolderSelector="."+this.CLASS_MAP.headerHolder,this._eventAggregator=t,this._skeletonView=e,this._boardSettings=i,this._$el=e.$el,this._$container=this._$el.find(".tau-board-list-view__inner"),this._containerId=this._$el.attr("id"),this._styleId="stickyListStyles-"+this._containerId,this._currentOffsets={innerContainer:{},container:{}},s.getGlobalBus().on("tab.activate.completed",this._adjustStickyHeader,this)},_appendStyle:function(t){this._$el.append(s.render(t))},_removeStyle:function(){this._$el.find("#"+this._styleId).remove()},_findHeaderHolders:function(t){return t=t||this._$el,t.find(this._headerHolderSelector)},_unStickHeader:function(){this._$currentLevel=null,this._findHeaderHolders().removeClass(this.CLASS_MAP.stickyHeader).css("visibility","")},_stickHeader:function(e){var i=e||this._currentOffsets.container,s=i.left+this._pointFirstCard.left,n=i.top+this._pointFirstCard.top,r=document.elementFromPoint(Math.ceil(s),Math.ceil(n)),o=t(r);if(!o.closest(this._headerHolderSelector).length){var d=o.closest(".tau-list-level");d!==this._$currentLevel&&(this._unStickHeader(),this._$currentLevel=d,this._findHeaderHolders(d).eq(0).addClass(this.CLASS_MAP.stickyHeader).css("visibility",""),this._currentOffsets.container.top!==i.top&&(this._currentOffsets.container=i,this._removeStyle(),this._appendStyle({id:this._styleId,containerId:this._containerId,top:this._currentOffsets.innerContainer.top})))}},_toggleStickHeader:function(){this._$container[0].scrollTop&&0===this._$container[0].scrollLeft?this._stickHeader():this._unStickHeader()},_attachStickyHeader:function(){var t=this._findHeaderHolders().find(".tau-name-cell")[0];if(t){var i=t.getBoundingClientRect();this._pointFirstCard={top:i.bottom-this._$el.offset().top+10,left:i.left+n.prototype.MIN_UNIT_WIDTH-20},this._setupOffset();var s=this._toggleStickHeader.bind(this);this._skeletonView.treeViewCreated.add(function(){e.defer(s)}.bind(this)),this._boardSettings.unbind(this),this._boardSettings.bind({fields:["edit"],listener:this,callback:this._adjustStickyHeader.bind(this)}),this._$container.on("scroll",e.throttle(s,100))}},_adjustStickyHeader:function(){this._findHeaderHolders().filter("."+this.CLASS_MAP.stickyHeader).css("visibility","hidden"),e.delay(this._setupOffset.bind(this),300)},_setupOffset:function(){this._currentOffsets.innerContainer=this._$container.offset(),this._stickHeader(this._$el.offset()),this._toggleStickHeader()},attach:function(){this._eventAggregator.treeRendered.once(this._attachStickyHeader,this)},destroy:function(){this._boardSettings.unbind(this),this._removeStyle()}})});