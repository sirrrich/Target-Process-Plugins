define(["Underscore","tau/core/class","tau/components/board.changelog/templates/template.board.changelog"],function(t,i,s){return i.extend({init:function(){this._isShown=!1,this.onPopupClosed=t.Callbacks(),this._$popup=s.render(),this._$popup.find(".tau-changelog-prev").click(this._move.bind(this,function(t){return t+1})),this._$popup.find(".tau-changelog-next").click(this._move.bind(this,function(t){return t-1})),this._$popup.tauPopup({className:"tau-changelog-popup",hideOnEscape:!0,popupContent:this._$popup,hide:this.hidePopup.bind(this)}),this._widget=this._$popup.tauPopup("widget"),this._widget.tauProgressIndicator()},showPopup:function(){this._isShown||(this._isShown=!0,this._widget.tauProgressIndicator("show"),this._$popup.tauPopup("show"))},hidePopup:function(){this._isShown&&(this._isShown=!1,this._$popup.tauPopup("widget").find(".tau-changelog").hide(),this._$popup.tauPopup("hide"),this._versions=null,this.onPopupClosed.fire())},setPopupData:function(t){if(0===t.length)throw new Error("It should be at least 1 version");this._versions=t,this._showVersion(0)},_move:function(t){var i=t(this._$popup.tauPopup("widget").data("current"));if(0>i||i>=this._versions.length)throw new Error("Index is out of range");this._showVersion(i)},_processButton:function(t,i,s,o){i>=0&&i<this._versions.length?s.removeClass("disable").html(o(this._versions[i].version)):s.addClass("disable").html(this._versions[t].version)},_showVersion:function(t){this._widget.tauProgressIndicator("show"),this._processButton(t,t-1,this._widget.find(".tau-changelog-next"),function(t){return t+"&nbsp;&gt;"}),this._processButton(t,t+1,this._widget.find(".tau-changelog-prev"),function(t){return"&lt;&nbsp;"+t}),this._widget.find(".tau-changelog-version").text(this._versions[t].version),this._widget.find(".tau-changelog-iframe").hide().load(function(t){this._widget.find(".tau-changelog").show(),this._widget.tauProgressIndicator("hide"),$(t.target).show()}.bind(this)).attr({src:this._versions[t].url}),this._widget.find(".tau-changelog").show(),this._$popup.tauPopup("widget").data("current",t)}})});