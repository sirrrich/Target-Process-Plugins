define(["jQuery"],function(r){return{checkForScriptErrors:function(e){var n=r('<iframe src="about:blank"></iframe>').appendTo("body"),o=n[0].contentWindow,t=o.document;t.open(),t.write("<script>window.scriptError = null;try {eval("+JSON.stringify(e)+")} catch (e) {window.scriptError = { name: e.name, message: e.message };}</script>"),t.close();var i=o.scriptError;return n.remove(),o=null,t=null,i}}});