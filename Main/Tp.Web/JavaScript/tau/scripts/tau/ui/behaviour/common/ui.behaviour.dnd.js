define(["require","jQuery","Underscore"],function(e){var r=e("jQuery"),n=e("Underscore"),o=Boolean(window.FileReader);if(o){var a=".i-role-uploader-area",t=function(){return r(a)},d=function(e){return function(r){return n.contains(r.originalEvent.dataTransfer.types,"Files")?e.call(this,r):void 0}},i=r("body");i.on("dragover.uploader",a,d(function(e){return e.originalEvent.dataTransfer.dropEffect="copy",!1})),i.on("dragenter.uploader",a,d(function(){r(this).addClass("hover")})),i.on("dragleave.uploader",d(function(e){var r=this.getBoundingClientRect(),n=e.originalEvent,o=n.clientX-r.left,a=n.clientY-r.top,d=0>=o||0>=a||o>=r.width||a>=r.height;d&&t().removeClass("dragged-over hover")})),i.on("dragenter.uploader",d(function(){t().addClass("dragged-over")})),i.on("drop.uploader",d(function(){t().removeClass("dragged-over hover")})),i.on("dragover.uploader",".cke",d(function(){return!1})),i.on("dragover.uploader",d(function(e){e.originalEvent.dataTransfer.dropEffect="none",t().removeClass("hover"),e.preventDefault()}))}});