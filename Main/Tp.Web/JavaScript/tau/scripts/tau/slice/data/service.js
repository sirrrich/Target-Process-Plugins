define(["jQuery"],function($){var sliceQuery=window.location.href.split("?")[1],restPoint="../slice/v1";return{getDeferred:function(method,filter){return filter=filter||"",$.ajax({url:restPoint+"/"+method+"?take=999&innerTake=999&"+sliceQuery+"&"+filter,dataType:"json"})},getData:function(fn){$.when(this.getDeferred("xaxis"),this.getDeferred("yaxis"),this.getDeferred("cells","where=((x!=null) and (y!=null))")).done(function(x,y,cells){fn({x:x[0],y:y[0],cells:cells[0]})})},move:function(data,fnSuccess,fnFailure){var urlMove=restPoint+"/move?"+sliceQuery+"&x="+data.x+"&y="+data.y+"&itemId="+data.id;$.ajax({url:urlMove,dataType:"json"}).success(fnSuccess).error(fnFailure)}}})