define(["jQuery"],function(t){return t.widget("ui.dropDown",{options:{value:null,quickData:[],data:[],select:t.noop},_template:'<div class="_dropDown">\n    <div class="_items">\n        {{each groups}}\n        <div data-id="${id}" class="parents">${name}</div>\n        <ul>\n            {{each items}}\n            <li data-id="${id}" class="_item">${name}</li>\n            {{/each}}\n        </ul>\n        {{/each}}\n    </div>\n    {{if hasMore && showMore}}\n    <div class="more">\n        <a href="#" class="_more">more&hellip;</a>\n    </div>\n    {{/if}}\n</div>',_create:function(){this.element.after('<span class="add-on _opener"></span>'),this._opener=this.element.next(),this.element.tauBubble({hideOnScrollContainer:this.element.scrollParent(),className:"tau-summaryPopup iteration-bubble",onPositionConfig:function(t){t.my="left top",t.collision="flipfit flipfit"},onBeforeShow:this._onBeforeShow.bind(this)}),this._opener.click(function(t){t.stopPropagation(),this.element.click()}.bind(this)),this._setValue(this._getDataItem(this.options.value)),this.options.data&&this.options.data.length||this.options.quickData&&this.options.quickData.length||(this.element.addClass("caret-disabled"),this._opener.addClass("caret-disabled")),this.key="dropDown"+(new Date).getTime()},_getData:function(t){return{groups:t,hasMore:t!=this.options.data,showMore:this.options.data&&this.options.data.length>0}},_onItemClick:function(){var e=this;return function(){var i=t(this);e.element.data("id",i.data("id")),e.element.text(i.text()),e.element.tauBubble("hide"),e._setValue(e._getSelectedItem()),e.options.select()}},_onMoreClick:function(){var t=this;return function(e){e.preventDefault(),e.stopPropagation();var i=t.element.data("ui-tauBubble").$popup;i.find("._item").unbind(),i.find("._more").unbind(),t.element.tauBubble("option","content",t._getContent(t.options.data)),i.find("._item").click(t._onItemClick())}},_getContent:function(e){return t.tmpl(this._template,this._getData(e))},_getSelectedItem:function(){var t=this.element.data("id");
return this._getItem(t)},_getQuickDataItem:function(t){return this.options.quickData.length?this._getItemFromDataSource(this.options.quickData,t):this._getItem(t)},_getDataItem:function(t){var e=this._getQuickDataItem(t);return"undefined"==typeof e?this._getItemFromDataSource(this.options.data,t):e},_getItem:function(t){return this._getItemFromDataSource(this.options.data,t)},_getItemFromDataSource:function(e,i){var n=t.map(e,function(e){return t.grep(e.items,function(t){return t.id==i})});return n?n[0]:null},option:function(t,e){return"undefined"==typeof e?this.options[t]:("data"==t&&this._disable(!e||!e.length),"value"==t&&this._setValue(this._getQuickDataItem(e)),void(this.options[t]=e))},_disable:function(t){t=!!t,this.element.toggleClass("caret-disabled",t),this._opener.toggleClass("caret-disabled",t),this.options.disabled=t},_onBeforeShow:function(){if(this.element.is(".caret-disabled"))return!1;var t=this.options.quickData.length?this.options.quickData:this.options.data;if(t.length){var e=this._getContent(t);this.element.tauBubble("option","content",e),e.find("._item").click(this._onItemClick()),e.find("._more").click(this._onMoreClick())}},value:function(t){return"undefined"!=typeof t?(this._setValue(this._getItem(t)),void this.options.select()):this.options.disabled?"":this.element.data("id")||""},values:function(){var e=[];return t.merge(e,this.options.data),t.merge(e,this.options.quickData),t.map(e,function(t){return t.id})},_setValue:function(t){t&&(this.element.data("id",t.id),this.element.text(t.name))},destroy:function(){this._opener.remove(),this.bubble&&(this.bubble.bubblePopup("content").find("._item").unbind(),this.bubble.bubblePopup("content").find("._more").unbind(),this.bubble.bubblePopup("destroy"))}}),t});