require(["jQuery"],function(e){require(["tau/services/service.activity"],function(i){e("body").append("<div>Try moving mouse, pressing keys or switching to another tab. Inactivity timeout is 3s.</div>");var t=3e3,n=function(){e("body").append("<div>"+(new Date).toLocaleString()+". Active</div>"),document.title="Active",i.inactive(t).done(function(){e("body").append("<div>"+(new Date).toLocaleString()+". Inactive</div>"),document.title="Inactive",i.active().done(n)})};i.active().done(n)})});