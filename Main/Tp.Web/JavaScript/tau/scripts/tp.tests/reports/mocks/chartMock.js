function ChartMock(){this.xArray=[],this.yArray=[]}ChartMock.prototype={x:function(x){return this.xArray.push(x),x},y:function(y){return this.yArray.push(y),y},createGroup:function(){return d3.select("body").append("svg").append("group")},xAxis:{max:3}}