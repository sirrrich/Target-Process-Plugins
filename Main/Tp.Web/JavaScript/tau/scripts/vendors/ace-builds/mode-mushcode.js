ace.define("ace/mode/mushcode_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){"use strict";var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,a=function(){var e="@if|@ifelse|@switch|@halt|@dolist|@create|@scent|@sound|@touch|@ataste|@osound|@ahear|@aahear|@amhear|@otouch|@otaste|@drop|@odrop|@adrop|@dropfail|@odropfail|@smell|@oemit|@emit|@pemit|@parent|@clone|@taste|whisper|page|say|pose|semipose|teach|touch|taste|smell|listen|look|move|go|home|follow|unfollow|desert|dismiss|@tel",t="=#0",r="default|edefault|eval|get_eval|get|grep|grepi|hasattr|hasattrp|hasattrval|hasattrpval|lattr|nattr|poss|udefault|ufun|u|v|uldefault|xget|zfun|band|bnand|bnot|bor|bxor|shl|shr|and|cand|cor|eq|gt|gte|lt|lte|nand|neq|nor|not|or|t|xor|con|entrances|exit|followers|home|lcon|lexits|loc|locate|lparent|lsearch|next|num|owner|parent|pmatch|rloc|rnum|room|where|zone|worn|held|carried|acos|asin|atan|ceil|cos|e|exp|fdiv|fmod|floor|log|ln|pi|power|round|sin|sqrt|tan|aposs|andflags|conn|commandssent|controls|doing|elock|findable|flags|fullname|hasflag|haspower|hastype|hidden|idle|isbaker|lock|lstats|money|who|name|nearby|obj|objflags|photo|poll|powers|pendingtext|receivedtext|restarts|restarttime|subj|shortestpath|tmoney|type|visible|cat|element|elements|extract|filter|filterbool|first|foreach|fold|grab|graball|index|insert|itemize|items|iter|last|ldelete|map|match|matchall|member|mix|munge|pick|remove|replace|rest|revwords|setdiff|setinter|setunion|shuffle|sort|sortby|splice|step|wordpos|words|add|lmath|max|mean|median|min|mul|percent|sign|stddev|sub|val|bound|abs|inc|dec|dist2d|dist3d|div|floordiv|mod|modulo|remainder|vadd|vdim|vdot|vmag|vmax|vmin|vmul|vsub|vunit|regedit|regeditall|regeditalli|regediti|regmatch|regmatchi|regrab|regraball|regraballi|regrabi|regrep|regrepi|after|alphamin|alphamax|art|before|brackets|capstr|case|caseall|center|containsfansi|comp|decompose|decrypt|delete|edit|encrypt|escape|if|ifelse|lcstr|left|lit|ljust|merge|mid|ostrlen|pos|repeat|reverse|right|rjust|scramble|secure|space|spellnum|squish|strcat|strmatch|strinsert|stripansi|stripfansi|strlen|switch|switchall|table|tr|trim|ucstr|unsafe|wrap|ctitle|cwho|channels|clock|cflags|ilev|itext|inum|convsecs|convutcsecs|convtime|ctime|etimefmt|isdaylight|mtime|secs|msecs|starttime|time|timefmt|timestring|utctime|atrlock|clone|create|cook|dig|emit|lemit|link|oemit|open|pemit|remit|set|tel|wipe|zemit|fbcreate|fbdestroy|fbwrite|fbclear|fbcopy|fbcopyto|fbclip|fbdump|fbflush|fbhset|fblist|fbstats|qentries|qentry|play|ansi|break|c|asc|die|isdbref|isint|isnum|isletters|linecoords|localize|lnum|nameshort|null|objeval|r|rand|s|setq|setr|soundex|soundslike|valid|vchart|vchart2|vlabel|@@|bakerdays|bodybuild|box|capall|catalog|children|ctrailer|darttime|debt|detailbar|exploredroom|fansitoansi|fansitoxansi|fullbar|halfbar|isdarted|isnewbie|isword|lambda|lobjects|lplayers|lthings|lvexits|lvobjects|lvplayers|lvthings|newswrap|numsuffix|playerson|playersthisweek|randomad|randword|realrandword|replacechr|second|splitamount|strlenall|text|third|tofansi|totalac|unique|getaddressroom|listpropertycomm|listpropertyres|lotowner|lotrating|lotratingcount|lotvalue|boughtproduct|companyabb|companyicon|companylist|companyname|companyowners|companyvalue|employees|invested|productlist|productname|productowners|productrating|productratingcount|productsoldat|producttype|ratedproduct|soldproduct|topproducts|totalspentonproduct|totalstock|transfermoney|uniquebuyercount|uniqueproductsbought|validcompany|deletepicture|fbsave|getpicturesecurity|haspicture|listpictures|picturesize|replacecolor|rgbtocolor|savepicture|setpicturesecurity|showpicture|piechart|piechartlabel|createmaze|drawmaze|drawwireframe",o=this.createKeywordMapper({"invalid.deprecated":"debugger","support.function":r,"constant.language":t,keyword:e},"identifier"),a="(?:(?:[1-9]\\d*)|(?:0))",i="(?:0[oO]?[0-7]+)",n="(?:0[xX][\\dA-Fa-f]+)",s="(?:0[bB][01]+)",l="(?:"+a+"|"+i+"|"+n+"|"+s+")",c="(?:[eE][+-]?\\d+)",d="(?:\\.\\d+)",u="(?:\\d+)",p="(?:(?:"+u+"?"+d+")|(?:"+u+"\\.))",m="(?:(?:"+p+"|"+u+")"+c+")",h="(?:"+m+"|"+p+")";
this.$rules={start:[{token:"variable",regex:"%[0-9]{1}"},{token:"variable",regex:"%q[0-9A-Za-z]{1}"},{token:"variable",regex:"%[a-zA-Z]{1}"},{token:"variable.language",regex:"%[a-z0-9-_]+"},{token:"constant.numeric",regex:"(?:"+h+"|\\d+)[jJ]\\b"},{token:"constant.numeric",regex:h},{token:"constant.numeric",regex:l+"[lL]\\b"},{token:"constant.numeric",regex:l+"\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|#|%|<<|>>|\\||\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:"text",regex:"\\s+"}]}};r.inherits(a,o),t.MushCodeRules=a}),ace.define("ace/mode/folding/pythonic",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],function(e,t){"use strict";var r=e("../../lib/oop"),o=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){this.foldingStartMarker=new RegExp("([\\[{])(?:\\s*)$|("+e+")(?:\\s*)(?:#.*)?$")};r.inherits(a,o),function(){this.getFoldWidgetRange=function(e,t,r){var o=e.getLine(r),a=o.match(this.foldingStartMarker);return a?a[1]?this.openingBracketBlock(e,a[1],r,a.index):a[2]?this.indentationBlock(e,r,a.index+a[2].length):this.indentationBlock(e,r):void 0}}.call(a.prototype)}),ace.define("ace/mode/mushcode",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/mushcode_highlight_rules","ace/mode/folding/pythonic","ace/range"],function(e,t){"use strict";var r=e("../lib/oop"),o=e("./text").Mode,a=e("./mushcode_highlight_rules").MushCodeRules,i=e("./folding/pythonic").FoldMode,n=e("../range").Range,s=function(){this.HighlightRules=a,this.foldingRules=new i("\\:")};r.inherits(s,o),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,r){var o=this.$getIndent(t),a=this.getTokenizer().getLineTokens(t,e),i=a.tokens;if(i.length&&"comment"==i[i.length-1].type)return o;if("start"==e){var n=t.match(/^.*[\{\(\[\:]\s*$/);n&&(o+=r)}return o};var e={pass:1,"return":1,raise:1,"break":1,"continue":1};
this.checkOutdent=function(t,r,o){if("\r\n"!==o&&"\r"!==o&&"\n"!==o)return!1;var a=this.getTokenizer().getLineTokens(r.trim(),t).tokens;if(!a)return!1;do var i=a.pop();while(i&&("comment"==i.type||"text"==i.type&&i.value.match(/^\s+$/)));return i?"keyword"==i.type&&e[i.value]:!1},this.autoOutdent=function(e,t,r){r+=1;var o=this.$getIndent(t.getLine(r)),a=t.getTabString();o.slice(-a.length)==a&&t.remove(new n(r,o.length-a.length,r,o.length))},this.$id="ace/mode/mushcode"}.call(s.prototype),t.Mode=s});