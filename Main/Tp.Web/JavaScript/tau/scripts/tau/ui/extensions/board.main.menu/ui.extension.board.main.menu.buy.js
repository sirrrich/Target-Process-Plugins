define(["jQuery","tau/core/extension.base"],function(e,t){return t.extend({"bus afterRender":function(t,u){u.element.find(".tau-btn-buy").click(function(){e(this).tauIFramePopup({url:"https://secure.shareit.com/shareit/checkout.html?PRODUCT[300582212]=10"}),e(this).tauIFramePopup("show")})}})});