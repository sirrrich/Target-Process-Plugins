define(["tau/components/component.creator","jQuery"],function(e,t){return{create:function(n){var u={name:"board.tp-buy",engine:"jqote2",markup:["<% if (this.visible) { %>",'<div class="tau-menu-item tau-buy">','   <span class="tau-btn-buy i-taus" tauspref="buy" taustype="header-menu-click">Buy</span>',"</div>","<% } %>"]},a={template:u},i=e.create(a,n);return i.fire("dataBind",{visible:!window.tauSystemInfo.isLicensed||window.tauSystemInfo.isTrial||window.tauSystemInfo.isFree}),i.on("afterRender",function(e,n){n.element.find(".tau-btn-buy").click(function(){t(this).tauIFramePopup({url:window.tauSystemInfo.checkoutUrl}),t(this).tauIFramePopup("show")})}),i}}});