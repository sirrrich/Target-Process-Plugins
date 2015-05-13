!function(t){if("function"==typeof define&&define.amd)define(["jquery"],t);else if("object"==typeof module&&module.exports){var e=require("jquery");module.exports=t(e)}else t(jQuery)}(function(t){if("undefined"==typeof t)throw new Error("jQuery.textcomplete requires jQuery");return+function(t){"use strict";var e=function(t){console.warn&&console.warn(t)};t.fn.textcomplete=function(i,n){var o=Array.prototype.slice.call(arguments);return this.each(function(){var s=t(this),r=s.data("textComplete");if(r||(r=new t.fn.textcomplete.Completer(this,n||{}),s.data("textComplete",r)),"string"==typeof i){if(!r)return;o.shift(),r[i].apply(r,o),"destroy"===i&&s.removeData("textComplete")}else t.each(i,function(i){t.each(["header","footer","placement","maxCount"],function(t){i[t]&&(r.option[t]=i[t],e(t+"as a strategy param is deprecated. Use option."),delete i[t])})}),r.register(t.fn.textcomplete.Strategy.parse(i))})}}(t),+function(t){"use strict";function e(i,n){if(this.$el=t(i),this.id="textcomplete"+s++,this.strategies=[],this.views=[],this.option=t.extend({},e._getDefaults(),n),!this.$el.is("input[type=text]")&&!this.$el.is("textarea")&&!i.isContentEditable&&"true"!=i.contentEditable)throw new Error("textcomplete must be called on a Textarea or a ContentEditable.");if(i===document.activeElement)this.initialize();else{var o=this;this.$el.one("focus."+this.id,function(){o.initialize()})}}var i=function(t){var e,i;return function(){var n=Array.prototype.slice.call(arguments);if(e)return void(i=n);e=!0;var o=this;n.unshift(function s(){if(i){var n=i;i=void 0,n.unshift(s),t.apply(o,n)}else e=!1}),t.apply(this,n)}},n=function(t){return"[object String]"===Object.prototype.toString.call(t)},o=function(t){return"[object Function]"===Object.prototype.toString.call(t)},s=0;e._getDefaults=function(){return e.DEFAULTS||(e.DEFAULTS={appendTo:t("body"),zIndex:"100"}),e.DEFAULTS},t.extend(e.prototype,{id:null,option:null,strategies:null,adapter:null,dropdown:null,$el:null,initialize:function(){var e=this.$el.get(0);
this.dropdown=new t.fn.textcomplete.Dropdown(e,this,this.option);var i,n;this.option.adapter?i=this.option.adapter:(n=this.$el.is("textarea")||this.$el.is("input[type=text]")?"number"==typeof e.selectionEnd?"Textarea":"IETextarea":"ContentEditable",i=t.fn.textcomplete[n]),this.adapter=new i(e,this,this.option)},destroy:function(){this.$el.off("."+this.id),this.adapter&&this.adapter.destroy(),this.dropdown&&this.dropdown.destroy(),this.$el=this.adapter=this.dropdown=null},trigger:function(t,e){this.dropdown||this.initialize(),null!=t||(t=this.adapter.getTextFromHeadToCaret());var i=this._extractSearchQuery(t);if(i.length){var n=i[1];if(e&&this._term===n)return;this._term=n,this._search.apply(this,i)}else this._term=null,this.dropdown.deactivate()},fire:function(t){var e=Array.prototype.slice.call(arguments,1);return this.$el.trigger(t,e),this},register:function(t){Array.prototype.push.apply(this.strategies,t)},select:function(t,e){this.adapter.select(t,e),this.fire("change").fire("textComplete:select",t,e),this.adapter.focus()},_clearAtNext:!0,_term:null,_extractSearchQuery:function(t){for(var e=0;e<this.strategies.length;e++){var i=this.strategies[e],s=i.context(t);if(s||""===s){var r=o(i.match)?i.match(t):i.match;n(s)&&(t=s);var a=t.match(r);if(a)return[i,a[i.index],a]}}return[]},_search:i(function(t,e,i,n){var o=this;e.search(i,function(i,n){o.dropdown.shown||(o.dropdown.activate(),o.dropdown.setPosition(o.adapter.getCaretPosition())),o._clearAtNext&&(o.dropdown.clear(),o._clearAtNext=!1),o.dropdown.render(o._zip(i,e)),n||(t(),o._clearAtNext=!0)},n)}),_zip:function(e,i){return t.map(e,function(t){return{value:t,strategy:i}})}}),t.fn.textcomplete.Completer=e}(t),+function(t){"use strict";function e(i,o,s){this.$el=e.findOrCreateElement(s),this.completer=o,this.id=o.id+"dropdown",this._data=[],this.$inputEl=t(i),this.option=s,s.listPosition&&(this.setPosition=s.listPosition),s.height&&this.$el.height(s.height);var r=this;t.each(["maxCount","placement","footer","header","className"],function(t,e){null!=s[e]&&(r[e]=s[e])
}),this._bindEvents(i),n[this.id]=this}var i=function(t,e){var i,n,o=e.strategy.idProperty;for(i=0;i<t.length;i++)if(n=t[i],n.strategy===e.strategy)if(o){if(n.value[o]===e.value[o])return!0}else if(n.value===e.value)return!0;return!1},n={};t(document).on("click",function(e){var i=e.originalEvent&&e.originalEvent.keepTextCompleteDropdown;t.each(n,function(t,e){t!==i&&e.deactivate()})}),t.extend(e,{findOrCreateElement:function(e){var i=e.appendTo;i instanceof t||(i=t(i));var n=i.children(".dropdown-menu");return n.length||(n=t('<ul class="dropdown-menu"></ul>').css({display:"none",left:0,position:"absolute",zIndex:e.zIndex}).appendTo(i)),n}}),t.extend(e.prototype,{$el:null,$inputEl:null,completer:null,footer:null,header:null,id:null,maxCount:10,placement:"",shown:!1,data:[],className:"",destroy:function(){this.deactivate(),this.$el.off("."+this.id),this.$inputEl.off("."+this.id),this.clear(),this.$el=this.$inputEl=this.completer=null,delete n[this.id]},render:function(e){var i=this._buildContents(e),n=t.map(this.data,function(t){return t.value});this.data.length?(this._renderHeader(n),this._renderFooter(n),i&&(this._renderContents(i),this._activateIndexedItem()),this._setScroll()):this.shown&&this.deactivate()},setPosition:function(e){this.$el.css(this._applyPlacement(e));var e="absolute";return this.$inputEl.add(this.$inputEl.parents()).each(function(){return"absolute"===t(this).css("position")?!1:"fixed"===t(this).css("position")?(e="fixed",!1):void 0}),this.$el.css({position:e}),this},clear:function(){this.$el.html(""),this.data=[],this._index=0,this._$header=this._$footer=null},activate:function(){return this.shown||(this.clear(),this.$el.show(),this.className&&this.$el.addClass(this.className),this.completer.fire("textComplete:show"),this.shown=!0),this},deactivate:function(){return this.shown&&(this.$el.hide(),this.className&&this.$el.removeClass(this.className),this.completer.fire("textComplete:hide"),this.shown=!1),this},isUp:function(t){return 38===t.keyCode||t.ctrlKey&&80===t.keyCode
},isDown:function(t){return 40===t.keyCode||t.ctrlKey&&78===t.keyCode},isEnter:function(t){var e=t.ctrlKey||t.altKey||t.metaKey||t.shiftKey;return!e&&(13===t.keyCode||9===t.keyCode||this.option.completeOnSpace===!0&&32===t.keyCode)},isPageup:function(t){return 33===t.keyCode},isPagedown:function(t){return 34===t.keyCode},isEscape:function(t){return 27===t.keyCode},_data:null,_index:null,_$header:null,_$footer:null,_bindEvents:function(){this.$el.on("mousedown."+this.id,".textcomplete-item",t.proxy(this._onClick,this)),this.$el.on("mouseover."+this.id,".textcomplete-item",t.proxy(this._onMouseover,this)),this.$inputEl.on("keydown."+this.id,t.proxy(this._onKeydown,this))},_onClick:function(e){var i=t(e.target);e.preventDefault(),e.originalEvent.keepTextCompleteDropdown=this.id,i.hasClass("textcomplete-item")||(i=i.closest(".textcomplete-item"));var n=this.data[parseInt(i.data("index"),10)];this.completer.select(n.value,n.strategy);var o=this;setTimeout(function(){o.deactivate()},0)},_onMouseover:function(e){var i=t(e.target);e.preventDefault(),i.hasClass("textcomplete-item")||(i=i.closest(".textcomplete-item")),this._index=parseInt(i.data("index"),10),this._activateIndexedItem()},_onKeydown:function(t){this.shown&&(this.isUp(t)?(t.preventDefault(),this._up()):this.isDown(t)?(t.preventDefault(),this._down()):this.isEnter(t)?(t.preventDefault(),this._enter()):this.isPageup(t)?(t.preventDefault(),this._pageup()):this.isPagedown(t)?(t.preventDefault(),this._pagedown()):this.isEscape(t)&&(t.preventDefault(),this.deactivate()))},_up:function(){0===this._index?this._index=this.data.length-1:this._index-=1,this._activateIndexedItem(),this._setScroll()},_down:function(){this._index===this.data.length-1?this._index=0:this._index+=1,this._activateIndexedItem(),this._setScroll()},_enter:function(){var t=this.data[parseInt(this._getActiveElement().data("index"),10)];this.completer.select(t.value,t.strategy),this.deactivate()},_pageup:function(){var e=0,i=this._getActiveElement().position().top-this.$el.innerHeight();
this.$el.children().each(function(n){return t(this).position().top+t(this).outerHeight()>i?(e=n,!1):void 0}),this._index=e,this._activateIndexedItem(),this._setScroll()},_pagedown:function(){var e=this.data.length-1,i=this._getActiveElement().position().top+this.$el.innerHeight();this.$el.children().each(function(n){return t(this).position().top>i?(e=n,!1):void 0}),this._index=e,this._activateIndexedItem(),this._setScroll()},_activateIndexedItem:function(){this.$el.find(".textcomplete-item.active").removeClass("active"),this._getActiveElement().addClass("active")},_getActiveElement:function(){return this.$el.children(".textcomplete-item:nth("+this._index+")")},_setScroll:function(){var t=this._getActiveElement(),e=t.position().top,i=t.outerHeight(),n=this.$el.innerHeight(),o=this.$el.scrollTop();0===this._index||this._index==this.data.length-1||0>e?this.$el.scrollTop(e+o):e+i>n&&this.$el.scrollTop(e+i+o-n)},_buildContents:function(t){var e,n,o,s="";for(n=0;n<t.length&&this.data.length!==this.maxCount;n++)e=t[n],i(this.data,e)||(o=this.data.length,this.data.push(e),s+='<li class="textcomplete-item" data-index="'+o+'"><a>',s+=e.strategy.template(e.value),s+="</a></li>");return s},_renderHeader:function(e){if(this.header){this._$header||(this._$header=t('<li class="textcomplete-header"></li>').prependTo(this.$el));var i=t.isFunction(this.header)?this.header(e):this.header;this._$header.html(i)}},_renderFooter:function(e){if(this.footer){this._$footer||(this._$footer=t('<li class="textcomplete-footer"></li>').appendTo(this.$el));var i=t.isFunction(this.footer)?this.footer(e):this.footer;this._$footer.html(i)}},_renderContents:function(t){this._$footer?this._$footer.before(t):this.$el.append(t)},_applyPlacement:function(t){return-1!==this.placement.indexOf("top")?t={top:"auto",bottom:this.$el.parent().height()-t.top+t.lineHeight,left:t.left}:(t.bottom="auto",delete t.lineHeight),-1!==this.placement.indexOf("absleft")?t.left=0:-1!==this.placement.indexOf("absright")&&(t.right=0,t.left="auto"),t
}}),t.fn.textcomplete.Dropdown=e}(t),+function(t){"use strict";function e(e){t.extend(this,e),this.cache&&(this.search=i(this.search))}var i=function(t){var e={};return function(i,n){e[i]?n(e[i]):t.call(this,i,function(t){e[i]=(e[i]||[]).concat(t),n.apply(null,arguments)})}};e.parse=function(i){return t.map(i,function(t){return new e(t)})},t.extend(e.prototype,{match:null,replace:null,search:null,cache:!1,context:function(){return!0},index:2,template:function(t){return t},idProperty:null}),t.fn.textcomplete.Strategy=e}(t),+function(t){"use strict";function e(){}var i=Date.now||function(){return(new Date).getTime()},n=function(t,e){var n,o,s,r,a,l=function(){var h=i()-r;e>h?n=setTimeout(l,e-h):(n=null,a=t.apply(s,o),s=o=null)};return function(){return s=this,o=arguments,r=i(),n||(n=setTimeout(l,e)),a}};t.extend(e.prototype,{id:null,completer:null,el:null,$el:null,option:null,initialize:function(e,i,o){this.el=e,this.$el=t(e),this.id=i.id+this.constructor.name,this.completer=i,this.option=o,this.option.debounce&&(this._onKeyup=n(this._onKeyup,this.option.debounce)),this._bindEvents()},destroy:function(){this.$el.off("."+this.id),this.$el=this.el=this.completer=null},select:function(){throw new Error("Not implemented")},getCaretPosition:function(){var t=this._getCaretRelativePosition(),e=this.$el.offset();return t.top+=e.top,t.left+=e.left,t},focus:function(){this.$el.focus()},_bindEvents:function(){this.$el.on("keyup."+this.id,t.proxy(this._onKeyup,this))},_onKeyup:function(t){this._skipSearch(t)||this.completer.trigger(this.getTextFromHeadToCaret(),!0)},_skipSearch:function(t){switch(t.keyCode){case 13:case 40:case 38:return!0}if(t.ctrlKey)switch(t.keyCode){case 78:case 80:return!0}}}),t.fn.textcomplete.Adapter=e}(t),+function(t){"use strict";function e(t,e,i){this.initialize(t,e,i)}e.DIV_PROPERTIES={left:-9999,position:"absolute",top:0,whiteSpace:"pre-wrap"},e.COPY_PROPERTIES=["border-width","font-family","font-size","font-style","font-variant","font-weight","height","letter-spacing","word-spacing","line-height","text-decoration","text-align","width","padding-top","padding-right","padding-bottom","padding-left","margin-top","margin-right","margin-bottom","margin-left","border-style","box-sizing","tab-size"],t.extend(e.prototype,t.fn.textcomplete.Adapter.prototype,{select:function(e,i){var n=this.getTextFromHeadToCaret(),o=this.el.value.substring(this.el.selectionEnd),s=i.replace(e);
t.isArray(s)&&(o=s[1]+o,s=s[0]),n=n.replace(i.match,s),this.$el.val(n+o),this.el.selectionStart=this.el.selectionEnd=n.length},_getCaretRelativePosition:function(){var e=t("<div></div>").css(this._copyCss()).text(this.getTextFromHeadToCaret()),i=t("<span></span>").text(".").appendTo(e);this.$el.before(e);var n=i.position();return n.top+=i.height()-this.$el.scrollTop(),n.lineHeight=i.height(),e.remove(),n},_copyCss:function(){return t.extend({overflow:this.el.scrollHeight>this.el.offsetHeight?"scroll":"auto"},e.DIV_PROPERTIES,this._getStyles())},_getStyles:function(t){var i=t("<div></div>").css(["color"]).color;return"undefined"!=typeof i?function(){return this.$el.css(e.COPY_PROPERTIES)}:function(){var i=this.$el,n={};return t.each(e.COPY_PROPERTIES,function(t,e){n[e]=i.css(e)}),n}}(t),getTextFromHeadToCaret:function(){return this.el.value.substring(0,this.el.selectionEnd)}}),t.fn.textcomplete.Textarea=e}(t),+function(t){"use strict";function e(e,n,o){this.initialize(e,n,o),t("<span>"+i+"</span>").css({position:"absolute",top:-9999,left:-9999}).insertBefore(e)}var i="吶";t.extend(e.prototype,t.fn.textcomplete.Textarea.prototype,{select:function(e,i){var n=this.getTextFromHeadToCaret(),o=this.el.value.substring(n.length),s=i.replace(e);t.isArray(s)&&(o=s[1]+o,s=s[0]),n=n.replace(i.match,s),this.$el.val(n+o),this.el.focus();var r=this.el.createTextRange();r.collapse(!0),r.moveEnd("character",n.length),r.moveStart("character",n.length),r.select()},getTextFromHeadToCaret:function(){this.el.focus();var t=document.selection.createRange();t.moveStart("character",-this.el.value.length);var e=t.text.split(i);return 1===e.length?e[0]:e[1]}}),t.fn.textcomplete.IETextarea=e}(t),+function(t){"use strict";function e(t,e,i){this.initialize(t,e,i)}t.extend(e.prototype,t.fn.textcomplete.Adapter.prototype,{select:function(e,i){var n=this.getTextFromHeadToCaret(),o=window.getSelection(),s=o.getRangeAt(0),r=s.cloneRange();r.selectNodeContents(s.startContainer);var a=r.toString(),l=a.substring(s.startOffset),h=i.replace(e);
t.isArray(h)&&(l=h[1]+l,h=h[0]),n=n.replace(i.match,h),s.selectNodeContents(s.startContainer),s.deleteContents();var c=document.createTextNode(n+l);s.insertNode(c),s.setStart(c,n.length),s.collapse(!0),o.removeAllRanges(),o.addRange(s)},_getCaretRelativePosition:function(){var e=window.getSelection().getRangeAt(0).cloneRange(),i=document.createElement("span");e.insertNode(i),e.selectNodeContents(i),e.deleteContents();var n=t(i),o=n.offset();o.left-=this.$el.offset().left,o.top+=n.height()-this.$el.offset().top,o.lineHeight=n.height(),n.remove();var s=this.$el.attr("dir")||this.$el.css("direction");return"rtl"===s&&(o.left-=this.listView.$el.width()),o},getTextFromHeadToCaret:function(){var t=window.getSelection().getRangeAt(0),e=t.cloneRange();return e.selectNodeContents(t.startContainer),e.toString().substring(0,t.startOffset)}}),t.fn.textcomplete.ContentEditable=e}(t),t});