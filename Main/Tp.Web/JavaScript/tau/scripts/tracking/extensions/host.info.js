define(["jQuery","app.path","libs/json2"],function(e,t){var a=null;return{get:function(){if(a)return a;var r=localStorage.getItem("host_info");if(r)try{r=e.parseJSON(r);var n=new Date-new Date(r.date),o=Math.floor(n/36e5);if(24>o)return a=e.Deferred().resolve(r.data)}catch(i){}return a=e.ajax({url:t.get()+"/info.ashx",dataType:"json"}).done(function(e){var t={date:(new Date).getTime(),data:e};localStorage.setItem("host_info",JSON.stringify(t))})}}});