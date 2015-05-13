define(["Underscore"],function(n){var r={},e=new RegExp(/(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i);return r={numHex:function(n){var r=n.toString(16);return r.length%2>0&&(r="0"+r),r},combineColors:function(n,r,e){return{r:Math.floor((1-e)*n.r+e*r.r),g:Math.floor((1-e)*n.g+e*r.g),b:Math.floor((1-e)*n.b+e*r.b)}},colorToString:function(n){return this.numHex(n.r)+this.numHex(n.g)+this.numHex(n.b)},stringToColor:function(n){return 6==n.length?{r:parseInt(n[0]+n[1],16),g:parseInt(n[2]+n[3],16),b:parseInt(n[4]+n[5],16)}:{r:17*parseInt(n[0],16),g:17*parseInt(n[1],16),b:17*parseInt(n[2],16)}},generateGradient:function(r,e,t){if(e=n.isUndefined(e)?-5:e,t=n.isUndefined(t)?1:t,0===r.length)return"";if(1===r.length)return r[0];var i=[],o=100/r.length;return r.forEach(function(n,r){i.push(n+" "+(o*r+t)+"%"),i.push(n+" "+(o*(r+1)-t)+"%")}),"linear-gradient("+e+"deg, "+i.join(", ")+")"},isValidHexColor:function(n){return e.test(n.replace("#",""))}}});