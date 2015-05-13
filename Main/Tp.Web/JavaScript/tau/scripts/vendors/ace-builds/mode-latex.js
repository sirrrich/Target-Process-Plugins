ace.define("ace/mode/latex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){"use strict";var r=e("../lib/oop"),n=e("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:"comment",regex:"%.*$"},{token:["keyword","lparen","variable.parameter","rparen","lparen","storage.type","rparen"],regex:"(\\\\(?:documentclass|usepackage|input))(?:(\\[)([^\\]]*)(\\]))?({)([^}]*)(})"},{token:["keyword","lparen","variable.parameter","rparen"],regex:"(\\\\label)(?:({)([^}]*)(}))?"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\(?:begin|end))({)(\\w*)(})"},{token:"storage.type",regex:"\\\\[a-zA-Z]+"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"constant.character.escape",regex:"\\\\[^a-zA-Z]?"},{token:"string",regex:"\\${1,2}",next:"equation"}],equation:[{token:"comment",regex:"%.*$"},{token:"string",regex:"\\${1,2}",next:"start"},{token:"constant.character.escape",regex:"\\\\(?:[^a-zA-Z]|[a-zA-Z]+)"},{token:"error",regex:"^\\s*$",next:"start"},{defaultToken:"string"}]}};r.inherits(a,n),t.LatexHighlightRules=a}),ace.define("ace/mode/folding/latex",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],function(e,t){"use strict";var r=e("../../lib/oop"),n=e("./fold_mode").FoldMode,a=e("../../range").Range,o=e("../../token_iterator").TokenIterator,i=t.FoldMode=function(){};r.inherits(i,n),function(){this.foldingStartMarker=/^\s*\\(begin)|(section|subsection|paragraph)\b|{\s*$/,this.foldingStopMarker=/^\s*\\(end)\b|^\s*}/,this.getFoldWidgetRange=function(e,t,r){var n=e.doc.getLine(r),a=this.foldingStartMarker.exec(n);if(a)return a[1]?this.latexBlock(e,r,a[0].length-1):a[2]?this.latexSection(e,r,a[0].length-1):this.openingBracketBlock(e,"{",r,a.index);var a=this.foldingStopMarker.exec(n);return a?a[1]?this.latexBlock(e,r,a[0].length-1):this.closingBracketBlock(e,"}",r,a.index+a[0].length):void 0},this.latexBlock=function(e,t,r){var n={"\\begin":1,"\\end":-1},i=new o(e,t,r),l=i.getCurrentToken();
if(l&&("storage.type"==l.type||"constant.character.escape"==l.type)){var s=l.value,g=n[s],c=function(){var e=i.stepForward(),t="lparen"==e.type?i.stepForward().value:"";return-1===g&&(i.stepBackward(),t&&i.stepBackward()),t},p=[c()],h=-1===g?i.getCurrentTokenColumn():e.getLine(t).length,d=t;for(i.step=-1===g?i.stepBackward:i.stepForward;l=i.step();)if(l&&("storage.type"==l.type||"constant.character.escape"==l.type)){var u=n[l.value];if(u){var f=c();if(u===g)p.unshift(f);else if(p.shift()!==f||!p.length)break}}if(!p.length){var t=i.getCurrentTokenRow();return-1===g?new a(t,e.getLine(t).length,d,h):(i.stepBackward(),new a(d,h,t,i.getCurrentTokenColumn()))}}},this.latexSection=function(e,t,r){var n=["\\subsection","\\section","\\begin","\\end","\\paragraph"],i=new o(e,t,r),l=i.getCurrentToken();if(l&&"storage.type"==l.type){for(var s=n.indexOf(l.value),g=0,c=t;l=i.stepForward();)if("storage.type"===l.type){var p=n.indexOf(l.value);if(p>=2){if(g||(c=i.getCurrentTokenRow()-1),g+=2==p?1:-1,0>g)break}else if(p>=s)break}for(g||(c=i.getCurrentTokenRow()-1);c>t&&!/\S/.test(e.getLine(c));)c--;return new a(t,e.getLine(t).length,c,e.getLine(c).length)}}}.call(i.prototype)}),ace.define("ace/mode/latex",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/latex_highlight_rules","ace/mode/folding/latex","ace/range"],function(e,t){"use strict";var r=e("../lib/oop"),n=e("./text").Mode,a=e("./latex_highlight_rules").LatexHighlightRules,o=e("./folding/latex").FoldMode,i=(e("../range").Range,function(){this.HighlightRules=a,this.foldingRules=new o});r.inherits(i,n),function(){this.type="text",this.lineCommentStart="%",this.$id="ace/mode/latex"}.call(i.prototype),t.Mode=i});