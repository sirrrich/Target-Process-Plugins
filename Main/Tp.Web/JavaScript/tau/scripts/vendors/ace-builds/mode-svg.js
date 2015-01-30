ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){"use strict";var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.xml-decl.xml","keyword.xml-decl.xml"],regex:"(<\\?)(xml)(?=[\\s])",next:"xml_decl",caseInsensitive:!0},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)([-_a-zA-Z0-9]+)",next:"processing_instruction"},{token:"comment.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],xml_decl:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:"(?:[-_a-zA-Z0-9]+:)?[-_a-zA-Z0-9]+"},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],processing_instruction:[{token:"punctuation.instruction.xml",regex:"\\?>",next:"start"},{defaultToken:"instruction.xml"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)([-_a-zA-Z0-9]+)",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.xml",regex:"-->",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:[-_a-zA-Z0-9]+:)?[-_a-zA-Z0-9]+)",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:"(?:[-_a-zA-Z0-9]+:)?[-_a-zA-Z0-9]+"},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===o&&this.normalizeRules()
};(function(){this.embedTagRules=function(e,t,n){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+n+".tag-name.xml"],regex:"(<)("+n+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:t+"start"}]}),this.$rules[n+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(e,t,n){return n.splice(0),this.token}}],this.embedRules(e,t,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+n+".tag-name.xml"],regex:"(</)("+n+"(?=\\s|>|$))",next:n+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(r.prototype),n.inherits(o,r),t.XmlHighlightRules=o}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator"],function(e,t){"use strict";function n(e,t){return e.type.lastIndexOf(t+".xml")>-1}var r=e("../../lib/oop"),o=e("../behaviour").Behaviour,a=e("../../token_iterator").TokenIterator,i=function(){this.add("string_dquotes","insertion",function(e,t,r,o,i){if('"'==i||"'"==i){var s=i,l=o.doc.getTextRange(r.getSelectionRange());if(""!==l&&"'"!==l&&'"'!=l&&r.getWrapBehavioursEnabled())return{text:s+l+s,selection:!1};var u=r.getCursorPosition(),c=o.doc.getLine(u.row),g=c.substring(u.column,u.column+1),d=new a(o,u.row,u.column),m=d.getCurrentToken();if(g==s&&(n(m,"attribute-value")||n(m,"string")))return{text:"",selection:[1,1]};if(m||(m=d.stepBackward()),!m)return;for(;n(m,"tag-whitespace")||n(m,"whitespace");)m=d.stepBackward();var h=!g||g.match(/\s/);if(n(m,"attribute-equals")&&(h||">"==g)||n(m,"decl-attribute-equals")&&(h||"?"==g))return{text:s+s,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(e,t,n,r,o){var a=r.doc.getTextRange(o);if(!o.isMultiLine()&&('"'==a||"'"==a)){var i=r.doc.getLine(o.start.row),s=i.substring(o.start.column+1,o.start.column+2);if(s==a)return o.end.column++,o}}),this.add("autoclosing","insertion",function(e,t,r,o,i){if(">"==i){var s=r.getCursorPosition(),l=new a(o,s.row,s.column),u=l.getCurrentToken()||l.stepBackward();
if(!u||!(n(u,"tag-name")||n(u,"tag-whitespace")||n(u,"attribute-name")||n(u,"attribute-equals")||n(u,"attribute-value")))return;if(n(u,"reference.attribute-value"))return;if(n(u,"attribute-value")){var c=u.value.charAt(0);if('"'==c||"'"==c){var g=u.value.charAt(u.value.length-1),d=l.getCurrentTokenColumn()+u.value.length;if(d>s.column||d==s.column&&c!=g)return}}for(;!n(u,"tag-name");)u=l.stepBackward();var m=l.getCurrentTokenRow(),h=l.getCurrentTokenColumn();if(n(l.stepBackward(),"end-tag-open"))return;var x=u.value;if(m==s.row&&(x=x.substring(0,s.column-h)),this.voidElements.hasOwnProperty(x.toLowerCase()))return;return{text:"></"+x+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(e,t,n,r,o){if("\n"==o){var a=n.getCursorPosition(),i=r.getLine(a.row),s=i.substring(a.column,a.column+2);if("</"==s){var l=this.$getIndent(i),u=l+r.getTabString();return{text:"\n"+u+"\n"+l,selection:[1,u.length,1,u.length]}}}})};r.inherits(i,o),t.XmlBehaviour=i}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"],function(e,t){"use strict";function n(e,t){return e.type.lastIndexOf(t+".xml")>-1}var r=e("../../lib/oop"),o=(e("../../lib/lang"),e("../../range").Range),a=e("./fold_mode").FoldMode,i=e("../../token_iterator").TokenIterator,s=t.FoldMode=function(e,t){a.call(this),this.voidElements=e||{},this.optionalEndTags=r.mixin({},this.voidElements),t&&r.mixin(this.optionalEndTags,t)};r.inherits(s,a);var l=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};(function(){this.getFoldWidget=function(e,t,n){var r=this._getFirstTagInLine(e,n);return r?r.closing||!r.tagName&&r.selfClosing?"markbeginend"==t?"end":"":!r.tagName||r.selfClosing||this.voidElements.hasOwnProperty(r.tagName.toLowerCase())?"":this._findEndTagInLine(e,n,r.tagName,r.end.column)?"":"start":""},this._getFirstTagInLine=function(e,t){for(var r=e.getTokens(t),o=new l,a=0;a<r.length;a++){var i=r[a];
if(n(i,"tag-open")){if(o.end.column=o.start.column+i.value.length,o.closing=n(i,"end-tag-open"),i=r[++a],!i)return null;for(o.tagName=i.value,o.end.column+=i.value.length,a++;a<r.length;a++)if(i=r[a],o.end.column+=i.value.length,n(i,"tag-close")){o.selfClosing="/>"==i.value;break}return o}if(n(i,"tag-close"))return o.selfClosing="/>"==i.value,o;o.start.column+=i.value.length}return null},this._findEndTagInLine=function(e,t,r,o){for(var a=e.getTokens(t),i=0,s=0;s<a.length;s++){var l=a[s];if(i+=l.value.length,!(o>i)&&n(l,"end-tag-open")&&(l=a[s+1],l&&l.value==r))return!0}return!1},this._readTagForward=function(e){var t=e.getCurrentToken();if(!t)return null;var r=new l;do if(n(t,"tag-open"))r.closing=n(t,"end-tag-open"),r.start.row=e.getCurrentTokenRow(),r.start.column=e.getCurrentTokenColumn();else if(n(t,"tag-name"))r.tagName=t.value;else if(n(t,"tag-close"))return r.selfClosing="/>"==t.value,r.end.row=e.getCurrentTokenRow(),r.end.column=e.getCurrentTokenColumn()+t.value.length,e.stepForward(),r;while(t=e.stepForward());return null},this._readTagBackward=function(e){var t=e.getCurrentToken();if(!t)return null;var r=new l;do{if(n(t,"tag-open"))return r.closing=n(t,"end-tag-open"),r.start.row=e.getCurrentTokenRow(),r.start.column=e.getCurrentTokenColumn(),e.stepBackward(),r;n(t,"tag-name")?r.tagName=t.value:n(t,"tag-close")&&(r.selfClosing="/>"==t.value,r.end.row=e.getCurrentTokenRow(),r.end.column=e.getCurrentTokenColumn()+t.value.length)}while(t=e.stepBackward());return null},this._pop=function(e,t){for(;e.length;){var n=e[e.length-1];if(!t||n.tagName==t.tagName)return e.pop();if(this.optionalEndTags.hasOwnProperty(t.tagName))return;{if(!this.optionalEndTags.hasOwnProperty(n.tagName))return null;e.pop()}}},this.getFoldWidgetRange=function(e,t,n){var r=this._getFirstTagInLine(e,n);if(!r)return null;var a,s=r.closing||r.selfClosing,l=[];if(s){for(var u=new i(e,n,r.end.column),c={row:n,column:r.start.column};a=this._readTagBackward(u);)if(a.selfClosing){if(!l.length)return a.start.column+=a.tagName.length+2,a.end.column-=2,o.fromPoints(a.start,a.end)
}else if(a.closing)l.push(a);else if(this._pop(l,a),0==l.length)return a.start.column+=a.tagName.length+2,o.fromPoints(a.start,c)}else for(var u=new i(e,n,r.start.column),g={row:n,column:r.start.column+r.tagName.length+2};a=this._readTagForward(u);)if(a.selfClosing){if(!l.length)return a.start.column+=a.tagName.length+2,a.end.column-=2,o.fromPoints(a.start,a.end)}else if(a.closing){if(this._pop(l,a),0==l.length)return o.fromPoints(g,a.start)}else l.push(a)}}).call(s.prototype)}),ace.define("ace/mode/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/xml_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/xml"],function(e,t){"use strict";var n=e("../lib/oop"),r=e("../lib/lang"),o=e("./text").Mode,a=e("./xml_highlight_rules").XmlHighlightRules,i=e("./behaviour/xml").XmlBehaviour,s=e("./folding/xml").FoldMode,l=function(){this.HighlightRules=a,this.$behaviour=new i,this.foldingRules=new s};n.inherits(l,o),function(){this.voidElements=r.arrayToMap([]),this.blockComment={start:"<!--",end:"-->"},this.$id="ace/mode/xml"}.call(l.prototype),t.Mode=l}),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){"use strict";var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc.tag",regex:"\\bTODO\\b"},{defaultToken:"comment.doc"}]}};n.inherits(o,r),o.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},o.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=o}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t){"use strict";var n=e("../lib/oop"),r=e("./doc_comment_highlight_rules").DocCommentHighlightRules,o=e("./text_highlight_rules").TextHighlightRules,a=function(e){var t=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),n="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",o="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*\\b",a="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)";
this.$rules={no_regex:[{token:"comment",regex:"\\/\\/",next:"line_comment"},r.getStartRule("doc-start"),{token:"comment",regex:/\/\*/,next:"comment"},{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0[xX][0-9a-fA-F]+\b/},{token:"constant.numeric",regex:/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+o+")(\\.)(prototype)(\\.)("+o+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+o+")(\\.)("+o+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+o+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+o+")(\\.)("+o+")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function)(\\s+)("+o+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+o+")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:"(?:"+n+")\\b",next:"start"},{token:["punctuation.operator","support.function"],regex:/(\.)(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:["punctuation.operator","support.function.dom"],regex:/(\.)(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:["punctuation.operator","support.constant"],regex:/(\.)(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:["support.constant"],regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:t,regex:o},{token:"keyword.operator",regex:/--|\+\+|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?\:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],start:[r.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment_regex_allowed"},{token:"comment",regex:"\\/\\/",next:"line_comment_regex_allowed"},{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],function_arguments:[{token:"variable.parameter",regex:o},{token:"punctuation.operator",regex:"[, ]+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],comment_regex_allowed:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],comment:[{token:"comment",regex:"\\*\\/",next:"no_regex"},{defaultToken:"comment"}],line_comment_regex_allowed:[{token:"comment",regex:"$|^",next:"start"},{defaultToken:"comment"}],line_comment:[{token:"comment",regex:"$|^",next:"no_regex"},{defaultToken:"comment"}],qqstring:[{token:"constant.language.escape",regex:a},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:a},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!e||!e.noES6)&&this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(e,t,n){return this.next="{"==e?this.nextState:"","{"==e&&n.length?(n.unshift("start",t),"paren"):"}"==e&&n.length&&(n.shift(),this.next=n.shift(),-1!=this.next.indexOf("string"))?"paren.quasi.end":"{"==e?"paren.lparen":"paren.rparen"
},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:a},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]}),this.embedRules(r,"doc-",[r.getEndRule("no_regex")]),this.normalizeRules()};n.inherits(a,o),t.JavaScriptHighlightRules=a}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t){"use strict";var n=e("../range").Range,r=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var r=e.getLine(t),o=r.match(/^(\s*\})/);if(!o)return 0;var a=o[1].length,i=e.findMatchingBracket({row:t,column:a});if(!i||i.row==t)return 0;var s=this.$getIndent(e.getLine(i.row));e.replace(new n(t,0,t,a-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(r.prototype),t.MatchingBraceOutdent=r}),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t){"use strict";var n,r=e("../../lib/oop"),o=e("../behaviour").Behaviour,a=e("../../token_iterator").TokenIterator,i=e("../../lib/lang"),s=["text","paren.rparen","punctuation.operator"],l=["text","paren.rparen","punctuation.operator","comment"],u={},c=function(e){var t=-1;return e.multiSelect&&(t=e.selection.id,u.rangeCount!=e.multiSelect.rangeCount&&(u={rangeCount:e.multiSelect.rangeCount})),u[t]?n=u[t]:void(n=u[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""})},g=function(){this.add("braces","insertion",function(e,t,r,o,a){var s=r.getCursorPosition(),l=o.doc.getLine(s.row);if("{"==a){c(r);var u=r.getSelectionRange(),d=o.doc.getTextRange(u);if(""!==d&&"{"!==d&&r.getWrapBehavioursEnabled())return{text:"{"+d+"}",selection:!1};if(g.isSaneInsertion(r,o))return/[\]\}\)]/.test(l[s.column])||r.inMultiSelectMode?(g.recordAutoInsert(r,o,"}"),{text:"{}",selection:[1,1]}):(g.recordMaybeInsert(r,o,"{"),{text:"{",selection:[1,1]})
}else if("}"==a){c(r);var m=l.substring(s.column,s.column+1);if("}"==m){var h=o.$findOpeningBracket("}",{column:s.column+1,row:s.row});if(null!==h&&g.isAutoInsertedClosing(s,l,a))return g.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else{if("\n"==a||"\r\n"==a){c(r);var x="";g.isMaybeInsertedClosing(s,l)&&(x=i.stringRepeat("}",n.maybeInsertedBrackets),g.clearMaybeInsertedClosing());var m=l.substring(s.column,s.column+1);if("}"===m){var p=o.findMatchingBracket({row:s.row,column:s.column+1},"}");if(!p)return null;var f=this.$getIndent(o.getLine(p.row))}else{if(!x)return void g.clearMaybeInsertedClosing();var f=this.$getIndent(l)}var k=f+o.getTabString();return{text:"\n"+k+"\n"+f+x,selection:[1,k.length,1,k.length]}}g.clearMaybeInsertedClosing()}}),this.add("braces","deletion",function(e,t,r,o,a){var i=o.doc.getTextRange(a);if(!a.isMultiLine()&&"{"==i){c(r);var s=o.doc.getLine(a.start.row),l=s.substring(a.end.column,a.end.column+1);if("}"==l)return a.end.column++,a;n.maybeInsertedBrackets--}}),this.add("parens","insertion",function(e,t,n,r,o){if("("==o){c(n);var a=n.getSelectionRange(),i=r.doc.getTextRange(a);if(""!==i&&n.getWrapBehavioursEnabled())return{text:"("+i+")",selection:!1};if(g.isSaneInsertion(n,r))return g.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(")"==o){c(n);var s=n.getCursorPosition(),l=r.doc.getLine(s.row),u=l.substring(s.column,s.column+1);if(")"==u){var d=r.$findOpeningBracket(")",{column:s.column+1,row:s.row});if(null!==d&&g.isAutoInsertedClosing(s,l,o))return g.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,r,o){var a=r.doc.getTextRange(o);if(!o.isMultiLine()&&"("==a){c(n);var i=r.doc.getLine(o.start.row),s=i.substring(o.start.column+1,o.start.column+2);if(")"==s)return o.end.column++,o}}),this.add("brackets","insertion",function(e,t,n,r,o){if("["==o){c(n);var a=n.getSelectionRange(),i=r.doc.getTextRange(a);if(""!==i&&n.getWrapBehavioursEnabled())return{text:"["+i+"]",selection:!1};
if(g.isSaneInsertion(n,r))return g.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if("]"==o){c(n);var s=n.getCursorPosition(),l=r.doc.getLine(s.row),u=l.substring(s.column,s.column+1);if("]"==u){var d=r.$findOpeningBracket("]",{column:s.column+1,row:s.row});if(null!==d&&g.isAutoInsertedClosing(s,l,o))return g.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,r,o){var a=r.doc.getTextRange(o);if(!o.isMultiLine()&&"["==a){c(n);var i=r.doc.getLine(o.start.row),s=i.substring(o.start.column+1,o.start.column+2);if("]"==s)return o.end.column++,o}}),this.add("string_dquotes","insertion",function(e,t,n,r,o){if('"'==o||"'"==o){c(n);var a=o,i=n.getSelectionRange(),s=r.doc.getTextRange(i);if(""!==s&&"'"!==s&&'"'!=s&&n.getWrapBehavioursEnabled())return{text:a+s+a,selection:!1};var l=n.getCursorPosition(),u=r.doc.getLine(l.row),d=u.substring(l.column-1,l.column);if("\\"==d)return null;for(var m,h=r.getTokens(i.start.row),x=0,p=-1,f=0;f<h.length&&(m=h[f],"string"==m.type?p=-1:0>p&&(p=m.value.indexOf(a)),!(m.value.length+x>i.start.column));f++)x+=h[f].value.length;if(!m||0>p&&"comment"!==m.type&&("string"!==m.type||i.start.column!==m.value.length+x-1&&m.value.lastIndexOf(a)===m.value.length-1)){if(!g.isSaneInsertion(n,r))return;return{text:a+a,selection:[1,1]}}if(m&&"string"===m.type){var k=u.substring(l.column,l.column+1);if(k==a)return{text:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,r,o){var a=r.doc.getTextRange(o);if(!o.isMultiLine()&&('"'==a||"'"==a)){c(n);var i=r.doc.getLine(o.start.row),s=i.substring(o.start.column+1,o.start.column+2);if(s==a)return o.end.column++,o}})};g.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new a(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",s)){var o=new a(t,n.row,n.column+1);if(!this.$matchTokenType(o.getCurrentToken()||"text",s))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",l)
},g.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},g.recordAutoInsert=function(e,t,r){var o=e.getCursorPosition(),a=t.doc.getLine(o.row);this.isAutoInsertedClosing(o,a,n.autoInsertedLineEnd[0])||(n.autoInsertedBrackets=0),n.autoInsertedRow=o.row,n.autoInsertedLineEnd=r+a.substr(o.column),n.autoInsertedBrackets++},g.recordMaybeInsert=function(e,t,r){var o=e.getCursorPosition(),a=t.doc.getLine(o.row);this.isMaybeInsertedClosing(o,a)||(n.maybeInsertedBrackets=0),n.maybeInsertedRow=o.row,n.maybeInsertedLineStart=a.substr(0,o.column)+r,n.maybeInsertedLineEnd=a.substr(o.column),n.maybeInsertedBrackets++},g.isAutoInsertedClosing=function(e,t,r){return n.autoInsertedBrackets>0&&e.row===n.autoInsertedRow&&r===n.autoInsertedLineEnd[0]&&t.substr(e.column)===n.autoInsertedLineEnd},g.isMaybeInsertedClosing=function(e,t){return n.maybeInsertedBrackets>0&&e.row===n.maybeInsertedRow&&t.substr(e.column)===n.maybeInsertedLineEnd&&t.substr(0,e.column)==n.maybeInsertedLineStart},g.popAutoInsertedClosing=function(){n.autoInsertedLineEnd=n.autoInsertedLineEnd.substr(1),n.autoInsertedBrackets--},g.clearMaybeInsertedClosing=function(){n&&(n.maybeInsertedBrackets=0,n.maybeInsertedRow=-1)},r.inherits(g,o),t.CstyleBehaviour=g}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t){"use strict";var n=e("../../lib/oop"),r=e("../../range").Range,o=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(a,o),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n,r){var o=e.getLine(n),a=o.match(this.foldingStartMarker);if(a){var i=a.index;if(a[1])return this.openingBracketBlock(e,a[1],n,i);var s=e.getCommentFoldRange(n,i+a[0].length,1);
return s&&!s.isMultiLine()&&(r?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t){var a=o.match(this.foldingStopMarker);if(a){var i=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],n,i):e.getCommentFoldRange(n,i,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),o=n.search(/\S/),a=t,i=n.length;t+=1;for(var s=t,l=e.getLength();++t<l;){n=e.getLine(t);var u=n.search(/\S/);if(-1!==u){if(o>u)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=a)break;if(c.isMultiLine())t=c.end.row;else if(o==u)break}s=t}}return new r(a,i,s,e.getLine(s).length)}}.call(a.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,t){"use strict";var n=e("../lib/oop"),r=e("./text").Mode,o=e("./javascript_highlight_rules").JavaScriptHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,i=(e("../range").Range,e("../worker/worker_client").WorkerClient),s=e("./behaviour/cstyle").CstyleBehaviour,l=e("./folding/cstyle").FoldMode,u=function(){this.HighlightRules=o,this.$outdent=new a,this.$behaviour=new s,this.foldingRules=new l};n.inherits(u,r),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),o=this.getTokenizer().getLineTokens(t,e),a=o.tokens,i=o.state;if(a.length&&"comment"==a[a.length-1].type)return r;if("start"==e||"no_regex"==e){var s=t.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/);s&&(r+=n)}else if("doc-start"==e){if("start"==i||"no_regex"==i)return"";var s=t.match(/^\s*(\/?)\*/);s&&(s[1]&&(r+=" "),r+="* ")}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new i(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");
return t.attachToDocument(e.getDocument()),t.on("jslint",function(t){e.setAnnotations(t.data)}),t.on("terminate",function(){e.clearAnnotations()}),t},this.$id="ace/mode/javascript"}.call(u.prototype),t.Mode=u}),ace.define("ace/mode/svg_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules"],function(e,t){"use strict";var n=e("../lib/oop"),r=e("./javascript_highlight_rules").JavaScriptHighlightRules,o=e("./xml_highlight_rules").XmlHighlightRules,a=function(){o.call(this),this.embedTagRules(r,"js-","script"),this.normalizeRules()};n.inherits(a,o),t.SvgHighlightRules=a}),ace.define("ace/mode/folding/mixed",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],function(e,t){"use strict";var n=e("../../lib/oop"),r=e("./fold_mode").FoldMode,o=t.FoldMode=function(e,t){this.defaultMode=e,this.subModes=t};n.inherits(o,r),function(){this.$getMode=function(e){"string"!=typeof e&&(e=e[0]);for(var t in this.subModes)if(0===e.indexOf(t))return this.subModes[t];return null},this.$tryMode=function(e,t,n,r){var o=this.$getMode(e);return o?o.getFoldWidget(t,n,r):""},this.getFoldWidget=function(e,t,n){return this.$tryMode(e.getState(n-1),e,t,n)||this.$tryMode(e.getState(n),e,t,n)||this.defaultMode.getFoldWidget(e,t,n)},this.getFoldWidgetRange=function(e,t,n){var r=this.$getMode(e.getState(n-1));return r&&r.getFoldWidget(e,t,n)||(r=this.$getMode(e.getState(n))),r&&r.getFoldWidget(e,t,n)||(r=this.defaultMode),r.getFoldWidgetRange(e,t,n)}}.call(o.prototype)}),ace.define("ace/mode/svg",["require","exports","module","ace/lib/oop","ace/mode/xml","ace/mode/javascript","ace/mode/svg_highlight_rules","ace/mode/folding/mixed","ace/mode/folding/xml","ace/mode/folding/cstyle"],function(e,t){"use strict";var n=e("../lib/oop"),r=e("./xml").Mode,o=e("./javascript").Mode,a=e("./svg_highlight_rules").SvgHighlightRules,i=e("./folding/mixed").FoldMode,s=e("./folding/xml").FoldMode,l=e("./folding/cstyle").FoldMode,u=function(){r.call(this),this.HighlightRules=a,this.createModeDelegates({"js-":o}),this.foldingRules=new i(new s,{"js-":new l})
};n.inherits(u,r),function(){this.getNextLineIndent=function(e,t){return this.$getIndent(t)},this.$id="ace/mode/svg"}.call(u.prototype),t.Mode=u});