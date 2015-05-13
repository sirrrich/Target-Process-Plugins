ace.define("ace/snippets",["require","exports","module","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/anchor","ace/keyboard/hash_handler","ace/tokenizer","ace/lib/dom","ace/editor"],function(e,t){"use strict";var n=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,o=e("./lib/lang"),r=e("./range").Range,s=e("./anchor").Anchor,a=e("./keyboard/hash_handler").HashHandler,c=e("./tokenizer").Tokenizer,h=r.comparePoints,l=function(){this.snippetMap={},this.snippetNameMap={}};(function(){n.implement(this,i),this.getTokenizer=function(){function e(e,t,n){return e=e.substr(1),/^\d+$/.test(e)&&!n.inFormatString?[{tabstopId:parseInt(e,10)}]:[{text:e}]}function t(e){return"(?:[^\\\\"+e+"]|\\\\.)"}return l.$tokenizer=new c({start:[{regex:/:/,onMatch:function(e,t,n){return n.length&&n[0].expectIf?(n[0].expectIf=!1,n[0].elseBranch=n[0],[n[0]]):":"}},{regex:/\\./,onMatch:function(e,t,n){var i=e[1];return"}"==i&&n.length?e=i:-1!="`$\\".indexOf(i)?e=i:n.inFormatString&&("n"==i?e="\n":"t"==i?e="\n":-1!="ulULE".indexOf(i)&&(e={changeCase:i,local:i>"a"})),[e]}},{regex:/}/,onMatch:function(e,t,n){return[n.length?n.shift():e]}},{regex:/\$(?:\d+|\w+)/,onMatch:e},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(t,n,i){var o=e(t.substr(1),n,i);return i.unshift(o[0]),o},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+t("\\|")+"*\\|",onMatch:function(e,t,n){n[0].choices=e.slice(1,-1).split(",")},next:"start"},{regex:"/("+t("/")+"+)/(?:("+t("/")+"*)/)(\\w*):?",onMatch:function(e,t,n){var i=n[0];return i.fmtString=e,e=this.splitRegex.exec(e),i.guard=e[1],i.fmt=e[2],i.flag=e[3],""},next:"start"},{regex:"`"+t("`")+"*`",onMatch:function(e,t,n){return n[0].code=e.splice(1,-1),""},next:"start"},{regex:"\\?",onMatch:function(e,t,n){n[0]&&(n[0].expectIf=!0)},next:"start"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:"/("+t("/")+"+)/",token:"regex"},{regex:"",onMatch:function(e,t,n){n.inFormatString=!0},next:"start"}]}),l.prototype.getTokenizer=function(){return l.$tokenizer
},l.$tokenizer},this.tokenizeTmSnippet=function(e,t){return this.getTokenizer().getLineTokens(e,t).tokens.map(function(e){return e.value||e})},this.$getDefaultValue=function(e,t){if(/^[A-Z]\d+$/.test(t)){var n=t.substr(1);return(this.variables[t[0]+"__"]||{})[n]}if(/^\d+$/.test(t))return(this.variables.__||{})[t];if(t=t.replace(/^TM_/,""),e){var i=e.session;switch(t){case"CURRENT_WORD":var o=i.getWordRange();case"SELECTION":case"SELECTED_TEXT":return i.getTextRange(o);case"CURRENT_LINE":return i.getLine(e.getCursorPosition().row);case"PREV_LINE":return i.getLine(e.getCursorPosition().row-1);case"LINE_INDEX":return e.getCursorPosition().column;case"LINE_NUMBER":return e.getCursorPosition().row+1;case"SOFT_TABS":return i.getUseSoftTabs()?"YES":"NO";case"TAB_SIZE":return i.getTabSize();case"FILENAME":case"FILEPATH":return"";case"FULLNAME":return"Ace"}}},this.variables={},this.getVariableValue=function(e,t){return this.variables.hasOwnProperty(t)?this.variables[t](e,t)||"":this.$getDefaultValue(e,t)||""},this.tmStrFormat=function(e,t,n){var i=t.flag||"",o=t.guard;o=new RegExp(o,i.replace(/[^gi]/,""));var r=this.tokenizeTmSnippet(t.fmt,"formatString"),s=this,a=e.replace(o,function(){s.variables.__=arguments;for(var e=s.resolveVariables(r,n),t="E",i=0;i<e.length;i++){var o=e[i];if("object"==typeof o)if(e[i]="",o.changeCase&&o.local){var a=e[i+1];a&&"string"==typeof a&&(e[i]="u"==o.changeCase?a[0].toUpperCase():a[0].toLowerCase(),e[i+1]=a.substr(1))}else o.changeCase&&(t=o.changeCase);else"U"==t?e[i]=o.toUpperCase():"L"==t&&(e[i]=o.toLowerCase())}return e.join("")});return this.variables.__=null,a},this.resolveVariables=function(e,t){function n(t){var n=e.indexOf(t,o+1);-1!=n&&(o=n)}for(var i=[],o=0;o<e.length;o++){var r=e[o];if("string"==typeof r)i.push(r);else{if("object"!=typeof r)continue;if(r.skip)n(r);else{if(r.processed<o)continue;if(r.text){var s=this.getVariableValue(t,r.text);s&&r.fmtString&&(s=this.tmStrFormat(s,r)),r.processed=o,null==r.expectIf?s&&(i.push(s),n(r)):s?r.skip=r.elseBranch:n(r)
}else null!=r.tabstopId?i.push(r):null!=r.changeCase&&i.push(r)}}}return i},this.insertSnippetForSelection=function(e,t){function n(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];if("object"==typeof i){if(h[i.tabstopId])continue;var o=e.lastIndexOf(i,n-1);i=t[o]||{tabstopId:i.tabstopId}}t[n]=i}return t}var i=e.getCursorPosition(),o=e.session.getLine(i.row),r=e.session.getTabString(),s=o.match(/^\s*/)[0];i.column<s.length&&(s=s.slice(0,i.column));var a=this.tokenizeTmSnippet(t);a=this.resolveVariables(a,e),a=a.map(function(e){return"\n"==e?e+s:"string"==typeof e?e.replace(/\t/g,r):e});var c=[];a.forEach(function(e,t){if("object"==typeof e){var n=e.tabstopId,i=c[n];if(i||(i=c[n]=[],i.index=n,i.value=""),-1===i.indexOf(e)){i.push(e);var o=a.indexOf(e,t+1);if(-1!==o){var r=a.slice(t+1,o),s=r.some(function(e){return"object"==typeof e});s&&!i.value?i.value=r:r.length&&(!i.value||"string"!=typeof i.value)&&(i.value=r.join(""))}}}}),c.forEach(function(e){e.length=0});for(var h={},l=0;l<a.length;l++){var u=a[l];if("object"==typeof u){var d=u.tabstopId,g=a.indexOf(u,l+1);if(h[d])h[d]===u&&(h[d]=null);else{var f=c[d],m="string"==typeof f.value?[f.value]:n(f.value);m.unshift(l+1,Math.max(0,g-l)),m.push(u),h[d]=u,a.splice.apply(a,m),-1===f.indexOf(u)&&f.push(u)}}}var v=0,b=0,x="";a.forEach(function(e){"string"==typeof e?("\n"===e[0]?(b=e.length-1,v++):b+=e.length,x+=e):e.start?e.end={row:v,column:b}:e.start={row:v,column:b}});var w=e.getSelectionRange(),S=e.session.replace(w,x),y=new p(e),C=e.inVirtualSelectionMode&&e.selection.index;y.addTabstops(c,w.start,S,C)},this.insertSnippet=function(e,t){var n=this;return e.inVirtualSelectionMode?n.insertSnippetForSelection(e,t):(e.forEachSelection(function(){n.insertSnippetForSelection(e,t)},null,{keepOrder:!0}),void(e.tabstopManager&&e.tabstopManager.tabNext()))},this.$getScope=function(e){var t=e.session.$mode.$id||"";if(t=t.split("/").pop(),"html"===t||"php"===t){"php"===t&&!e.session.$mode.inlinePhp&&(t="html");var n=e.getCursorPosition(),i=e.session.getState(n.row);
"object"==typeof i&&(i=i[0]),i.substring&&("js-"==i.substring(0,3)?t="javascript":"css-"==i.substring(0,4)?t="css":"php-"==i.substring(0,4)&&(t="php"))}return t},this.getActiveScopes=function(e){var t=this.$getScope(e),n=[t],i=this.snippetMap;return i[t]&&i[t].includeScopes&&n.push.apply(n,i[t].includeScopes),n.push("_"),n},this.expandWithTab=function(e,t){var n=this,i=e.forEachSelection(function(){return n.expandSnippetForSelection(e,t)},null,{keepOrder:!0});return i&&e.tabstopManager&&e.tabstopManager.tabNext(),i},this.expandSnippetForSelection=function(e,t){var n,i=e.getCursorPosition(),o=e.session.getLine(i.row),r=o.substring(0,i.column),s=o.substr(i.column),a=this.snippetMap;return this.getActiveScopes(e).some(function(e){var t=a[e];return t&&(n=this.findMatchingSnippet(t,r,s)),!!n},this),n?t&&t.dryRun?!0:(e.session.doc.removeInLine(i.row,i.column-n.replaceBefore.length,i.column+n.replaceAfter.length),this.variables.M__=n.matchBefore,this.variables.T__=n.matchAfter,this.insertSnippetForSelection(e,n.content),this.variables.M__=this.variables.T__=null,!0):!1},this.findMatchingSnippet=function(e,t,n){for(var i=e.length;i--;){var o=e[i];if(!(o.startRe&&!o.startRe.test(t)||o.endRe&&!o.endRe.test(n)||!o.startRe&&!o.endRe))return o.matchBefore=o.startRe?o.startRe.exec(t):[""],o.matchAfter=o.endRe?o.endRe.exec(n):[""],o.replaceBefore=o.triggerRe?o.triggerRe.exec(t)[0]:"",o.replaceAfter=o.endTriggerRe?o.endTriggerRe.exec(n)[0]:"",o}},this.snippetMap={},this.snippetNameMap={},this.register=function(e,t){function n(e){return e&&!/^\^?\(.*\)\$?$|^\\b$/.test(e)&&(e="(?:"+e+")"),e||""}function i(e,t,i){return e=n(e),t=n(t),i?(e=t+e,e&&"$"!=e[e.length-1]&&(e+="$")):(e+=t,e&&"^"!=e[0]&&(e="^"+e)),new RegExp(e)}function r(e){e.scope||(e.scope=t||"_"),t=e.scope,s[t]||(s[t]=[],a[t]={});var n=a[t];if(e.name){var r=n[e.name];r&&c.unregister(r),n[e.name]=e}s[t].push(e),e.tabTrigger&&!e.trigger&&(!e.guard&&/^\w/.test(e.tabTrigger)&&(e.guard="\\b"),e.trigger=o.escapeRegExp(e.tabTrigger)),e.startRe=i(e.trigger,e.guard,!0),e.triggerRe=new RegExp(e.trigger,"",!0),e.endRe=i(e.endTrigger,e.endGuard,!0),e.endTriggerRe=new RegExp(e.endTrigger,"",!0)
}var s=this.snippetMap,a=this.snippetNameMap,c=this;e||(e=[]),e&&e.content?r(e):Array.isArray(e)&&e.forEach(r),this._signal("registerSnippets",{scope:t})},this.unregister=function(e,t){function n(e){var n=o[e.scope||t];if(n&&n[e.name]){delete n[e.name];var r=i[e.scope||t],s=r&&r.indexOf(e);s>=0&&r.splice(s,1)}}var i=this.snippetMap,o=this.snippetNameMap;e.content?n(e):Array.isArray(e)&&e.forEach(n)},this.parseSnippetFile=function(e){e=e.replace(/\r/g,"");for(var t,n=[],i={},o=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm;t=o.exec(e);){if(t[1])try{i=JSON.parse(t[1]),n.push(i)}catch(r){}if(t[4])i.content=t[4].replace(/^\t/gm,""),n.push(i),i={};else{var s=t[2],a=t[3];if("regex"==s){var c=/\/((?:[^\/\\]|\\.)*)|$/g;i.guard=c.exec(a)[1],i.trigger=c.exec(a)[1],i.endTrigger=c.exec(a)[1],i.endGuard=c.exec(a)[1]}else"snippet"==s?(i.tabTrigger=a.match(/^\S*/)[0],i.name||(i.name=a)):i[s]=a}}return n},this.getSnippetByName=function(e,t){var n,i=this.snippetNameMap;return this.getActiveScopes(t).some(function(t){var o=i[t];return o&&(n=o[e]),!!n},this),n}}).call(l.prototype);var p=function(e){return e.tabstopManager?e.tabstopManager:(e.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=o.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(e),void 0)};(function(){this.attach=function(e){this.index=0,this.ranges=[],this.tabstops=[],this.$openTabstops=null,this.selectedTabstop=null,this.editor=e,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges=null,this.tabstops=null,this.selectedTabstop=null,this.editor.removeListener("change",this.$onChange),this.editor.removeListener("changeSelection",this.$onChangeSelection),this.editor.removeListener("changeSession",this.$onChangeSession),this.editor.commands.removeListener("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.editor=null
},this.onChange=function(e){var t=e.data.range,n="r"==e.data.action[0],i=t.start,o=t.end,r=i.row,s=o.row,a=s-r,c=o.column-i.column;if(n&&(a=-a,c=-c),!this.$inChange&&n){var l=this.selectedTabstop,p=l&&!l.some(function(e){return h(e.start,i)<=0&&h(e.end,o)>=0});if(p)return this.detach()}for(var u=this.ranges,d=0;d<u.length;d++){var g=u[d];g.end.row<i.row||(n&&h(i,g.start)<0&&h(o,g.end)>0?(this.removeRange(g),d--):(g.start.row==r&&g.start.column>i.column&&(g.start.column+=c),g.end.row==r&&g.end.column>=i.column&&(g.end.column+=c),g.start.row>=r&&(g.start.row+=a),g.end.row>=r&&(g.end.row+=a),h(g.start,g.end)>0&&this.removeRange(g)))}u.length||this.detach()},this.updateLinkedFields=function(){var e=this.selectedTabstop;if(e&&e.hasLinkedRanges){this.$inChange=!0;for(var n=this.editor.session,i=n.getTextRange(e.firstNonLinked),o=e.length;o--;){var r=e[o];if(r.linked){var s=t.snippetManager.tmStrFormat(i,r.original);n.replace(r,s)}}this.$inChange=!1}},this.onAfterExec=function(e){e.command&&!e.command.readOnly&&this.updateLinkedFields()},this.onChangeSelection=function(){if(this.editor){for(var e=this.editor.selection.lead,t=this.editor.selection.anchor,n=this.editor.selection.isEmpty(),i=this.ranges.length;i--;)if(!this.ranges[i].linked){var o=this.ranges[i].contains(e.row,e.column),r=n||this.ranges[i].contains(t.row,t.column);if(o&&r)return}this.detach()}},this.onChangeSession=function(){this.detach()},this.tabNext=function(e){var t=this.tabstops.length,n=this.index+(e||1);n=Math.min(Math.max(n,1),t),n==t&&(n=0),this.selectTabstop(n),0===n&&this.detach()},this.selectTabstop=function(e){this.$openTabstops=null;var t=this.tabstops[this.index];if(t&&this.addTabstopMarkers(t),this.index=e,t=this.tabstops[this.index],t&&t.length){if(this.selectedTabstop=t,this.editor.inVirtualSelectionMode)this.editor.selection.setRange(t.firstNonLinked);else{var n=this.editor.multiSelect;n.toSingleRange(t.firstNonLinked.clone());for(var i=t.length;i--;)t.hasLinkedRanges&&t[i].linked||n.addRange(t[i].clone(),!0);
n.ranges[0]&&n.addRange(n.ranges[0].clone())}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)}},this.addTabstops=function(e,t,n){if(this.$openTabstops||(this.$openTabstops=[]),!e[0]){var i=r.fromPoints(n,n);g(i.start,t),g(i.end,t),e[0]=[i],e[0].index=0}var o=this.index,s=[o+1,0],a=this.ranges;e.forEach(function(e,n){for(var i=this.$openTabstops[n]||e,o=e.length;o--;){var c=e[o],h=r.fromPoints(c.start,c.end||c.start);d(h.start,t),d(h.end,t),h.original=c,h.tabstop=i,a.push(h),i!=e?i.unshift(h):i[o]=h,c.fmtString?(h.linked=!0,i.hasLinkedRanges=!0):i.firstNonLinked||(i.firstNonLinked=h)}i.firstNonLinked||(i.hasLinkedRanges=!1),i===e&&(s.push(i),this.$openTabstops[n]=i),this.addTabstopMarkers(i)},this),s.length>2&&(this.tabstops.length&&s.push(s.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,s))},this.addTabstopMarkers=function(e){var t=this.editor.session;e.forEach(function(e){e.markerId||(e.markerId=t.addMarker(e,"ace_snippet-marker","text"))})},this.removeTabstopMarkers=function(e){var t=this.editor.session;e.forEach(function(e){t.removeMarker(e.markerId),e.markerId=null})},this.removeRange=function(e){var t=e.tabstop.indexOf(e);e.tabstop.splice(t,1),t=this.ranges.indexOf(e),this.ranges.splice(t,1),this.editor.session.removeMarker(e.markerId),e.tabstop.length||(t=this.tabstops.indexOf(e.tabstop),-1!=t&&this.tabstops.splice(t,1),this.tabstops.length||this.detach())},this.keyboardHandler=new a,this.keyboardHandler.bindKeys({Tab:function(e){t.snippetManager&&t.snippetManager.expandWithTab(e)||e.tabstopManager.tabNext(1)},"Shift-Tab":function(e){e.tabstopManager.tabNext(-1)},Esc:function(e){e.tabstopManager.detach()},Return:function(){return!1}})}).call(p.prototype);var u={};u.onChange=s.prototype.onChange,u.setPosition=function(e,t){this.pos.row=e,this.pos.column=t},u.update=function(e,t,n){this.$insertRight=n,this.pos=e,this.onChange(t)};var d=function(e,t){0==e.row&&(e.column+=t.column),e.row+=t.row},g=function(e,t){e.row==t.row&&(e.column-=t.column),e.row-=t.row
};e("./lib/dom").importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"),t.snippetManager=new l;var f=e("./editor").Editor;(function(){this.insertSnippet=function(e,n){return t.snippetManager.insertSnippet(this,e,n)},this.expandSnippet=function(e){return t.snippetManager.expandWithTab(this,e)}}).call(f.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/edit_session","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom"],function(e,t){"use strict";var n=(e("../edit_session").EditSession,e("../virtual_renderer").VirtualRenderer),i=e("../editor").Editor,o=e("../range").Range,r=e("../lib/event"),s=e("../lib/lang"),a=e("../lib/dom"),c=function(e){var t=new n(e);t.$maxLines=4;var o=new i(t);return o.setHighlightActiveLine(!1),o.setShowPrintMargin(!1),o.renderer.setShowGutter(!1),o.renderer.setHighlightGutterLine(!1),o.$mouseHandler.$focusWaitTimout=0,o.$highlightTagPending=!0,o},h=function(e){var t=a.createElement("div"),n=new c(t);e&&e.appendChild(t),t.style.display="none",n.renderer.content.style.cursor="default",n.renderer.setStyle("ace_autocomplete"),n.setOption("displayIndentGuides",!1),n.setOption("dragDelay",150);var i=function(){};n.focus=i,n.$isFocused=!0,n.renderer.$cursorLayer.restartTimer=i,n.renderer.$cursorLayer.element.style.opacity=0,n.renderer.$maxLines=8,n.renderer.$keepTextAreaAtCursor=!1,n.setHighlightActiveLine(!1),n.session.highlight(""),n.session.$searchHighlight.clazz="ace_highlight-marker",n.on("mousedown",function(e){var t=e.getDocumentPosition();n.selection.moveToPosition(t),p.start.row=p.end.row=t.row,e.stop()});var h,l=new o(-1,0,-1,1/0),p=new o(-1,0,-1,1/0);p.id=n.session.addMarker(p,"ace_active-line","fullLine"),n.setSelectOnHover=function(e){e?l.id&&(n.session.removeMarker(l.id),l.id=null):l.id=n.session.addMarker(l,"ace_line-hover","fullLine")
},n.setSelectOnHover(!1),n.on("mousemove",function(e){if(!h)return void(h=e);if(h.x!=e.x||h.y!=e.y){h=e,h.scrollTop=n.renderer.scrollTop;var t=h.getDocumentPosition().row;l.start.row!=t&&(l.id||n.setRow(t),d(t))}}),n.renderer.on("beforeRender",function(){if(h&&-1!=l.start.row){h.$pos=null;var e=h.getDocumentPosition().row;l.id||n.setRow(e),d(e,!0)}}),n.renderer.on("afterRender",function(){var e=n.getRow(),t=n.renderer.$textLayer,i=t.element.childNodes[e-t.config.firstRow];i!=t.selectedNode&&(t.selectedNode&&a.removeCssClass(t.selectedNode,"ace_selected"),t.selectedNode=i,i&&a.addCssClass(i,"ace_selected"))});var u=function(){d(-1)},d=function(e,t){e!==l.start.row&&(l.start.row=l.end.row=e,t||n.session._emit("changeBackMarker"),n._emit("changeHoverMarker"))};n.getHoveredRow=function(){return l.start.row},r.addListener(n.container,"mouseout",u),n.on("hide",u),n.on("changeSelection",u),n.session.doc.getLength=function(){return n.data.length},n.session.doc.getLine=function(e){var t=n.data[e];return"string"==typeof t?t:t&&t.value||""};var g=n.session.bgTokenizer;return g.$tokenizeRow=function(e){var t=n.data[e],i=[];if(!t)return i;"string"==typeof t&&(t={value:t}),t.caption||(t.caption=t.value||t.name);for(var o,r,s=-1,a=0;a<t.caption.length;a++)r=t.caption[a],o=t.matchMask&1<<a?1:0,s!==o?(i.push({type:t.className||""+(o?"completion-highlight":""),value:r}),s=o):i[i.length-1].value+=r;if(t.meta){var c=n.renderer.$size.scrollerWidth/n.renderer.layerConfig.characterWidth;t.meta.length+t.caption.length<c-2&&i.push({type:"rightAlignedText",value:t.meta})}return i},g.$updateOnChange=i,g.start=i,n.session.$computeWidth=function(){return this.screenWidth=0},n.isOpen=!1,n.isTopdown=!1,n.data=[],n.setData=function(e){n.data=e||[],n.setValue(s.stringRepeat("\n",e.length),-1),n.setRow(0)},n.getData=function(e){return n.data[e]},n.getRow=function(){return p.start.row},n.setRow=function(e){e=Math.max(-1,Math.min(this.data.length,e)),p.start.row!=e&&(n.selection.clearSelection(),p.start.row=p.end.row=e||0,n.session._emit("changeBackMarker"),n.moveCursorTo(e||0,0),n.isOpen&&n._signal("select"))
},n.on("changeSelection",function(){n.isOpen&&n.setRow(n.selection.lead.row)}),n.hide=function(){this.container.style.display="none",this._signal("hide"),n.isOpen=!1},n.show=function(e,t,i){var o=this.container,r=window.innerHeight,s=window.innerWidth,a=this.renderer,c=a.$maxLines*t*1.4,l=e.top+this.$borderSize;l+c>r-t&&!i?(o.style.top="",o.style.bottom=r-l+"px",n.isTopdown=!1):(l+=t,o.style.top=l+"px",o.style.bottom="",n.isTopdown=!0),o.style.display="",this.renderer.$textLayer.checkForSizeChanges();var p=e.left;p+o.offsetWidth>s&&(p=s-o.offsetWidth),o.style.left=p+"px",this._signal("show"),h=null,n.isOpen=!0},n.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},n.$imageSize=0,n.$borderSize=1,n};a.importCssString(".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);}.ace_editor.ace_autocomplete .ace_line-hover {    position: absolute;    z-index: 2;}.ace_editor.ace_autocomplete .ace_scroller {   background: none;   border: none;   box-shadow: none;}.ace_rightAlignedText {    color: gray;    display: inline-block;    position: absolute;    right: 4px;    text-align: right;    z-index: -1;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #000;    text-shadow: 0 0 0.01em;}.ace_editor.ace_autocomplete {    width: 280px;    z-index: 200000;    background: #fbfbfb;    color: #444;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;}"),t.AcePopup=h}),ace.define("ace/autocomplete/util",["require","exports","module"],function(e,t){"use strict";t.parForEach=function(e,t,n){var i=0,o=e.length;0===o&&n();for(var r=0;o>r;r++)t(e[r],function(e,t){i++,i===o&&n(e,t)})};var n=/[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;t.retrievePrecedingIdentifier=function(e,t,i){i=i||n;for(var o=[],r=t-1;r>=0&&i.test(e[r]);r--)o.push(e[r]);
return o.reverse().join("")},t.retrieveFollowingIdentifier=function(e,t,i){i=i||n;for(var o=[],r=t;r<e.length&&i.test(e[r]);r++)o.push(e[r]);return o}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/event","ace/lib/lang","ace/snippets"],function(e,t){"use strict";var n=e("./keyboard/hash_handler").HashHandler,i=e("./autocomplete/popup").AcePopup,o=e("./autocomplete/util"),r=(e("./lib/event"),e("./lib/lang")),s=e("./snippets").snippetManager,a=function(){this.autoInsert=!0,this.autoSelect=!0,this.keyboardHandler=new n,this.keyboardHandler.bindKeys(this.commands),this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.changeTimer=r.delayedCall(function(){this.updateCompletions(!0)}.bind(this))};(function(){this.gatherCompletionsId=0,this.$init=function(){this.popup=new i(document.body||document.documentElement),this.popup.on("click",function(e){this.insertMatch(),e.stop()}.bind(this)),this.popup.focus=this.editor.focus.bind(this.editor)},this.openPopup=function(e,t,n){this.popup||this.$init(),this.popup.setData(this.completions.filtered);var i=e.renderer;if(this.popup.setRow(this.autoSelect?0:-1),n)n&&!t&&this.detach();else{this.popup.setTheme(e.getTheme()),this.popup.setFontSize(e.getFontSize());var o=i.layerConfig.lineHeight,r=i.$cursorLayer.getPixelPosition(this.base,!0);r.left-=this.popup.getTextLeftOffset();var s=e.container.getBoundingClientRect();r.top+=s.top-i.layerConfig.offset,r.left+=s.left-e.renderer.scrollLeft,r.left+=i.$gutterLayer.gutterWidth,this.popup.show(r,o)}},this.detach=function(){this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener),this.changeTimer.cancel(),this.popup&&this.popup.isOpen&&(this.gatherCompletionsId+=1,this.popup.hide()),this.base&&this.base.detach(),this.activated=!1,this.completions=this.base=null
},this.changeListener=function(){var e=this.editor.selection.lead;(e.row!=this.base.row||e.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},this.blurListener=function(){var e=document.activeElement;e!=this.editor.textInput.getElement()&&e.parentNode!=this.popup.container&&this.detach()},this.mousedownListener=function(){this.detach()},this.mousewheelListener=function(){this.detach()},this.goTo=function(e){var t=this.popup.getRow(),n=this.popup.session.getLength()-1;switch(e){case"up":t=0>=t?n:t-1;break;case"down":t=t>=n?-1:t+1;break;case"start":t=0;break;case"end":t=n}this.popup.setRow(t)},this.insertMatch=function(e){if(e||(e=this.popup.getData(this.popup.getRow())),!e)return!1;if(e.completer&&e.completer.insertMatch)e.completer.insertMatch(this.editor);else{if(this.completions.filterText)for(var t,n=this.editor.selection.getAllRanges(),i=0;t=n[i];i++)t.start.column-=this.completions.filterText.length,this.editor.session.remove(t);e.snippet?s.insertSnippet(this.editor,e.snippet):this.editor.execCommand("insertstring",e.value||e)}this.detach()},this.commands={Up:function(e){e.completer.goTo("up")},Down:function(e){e.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(e){e.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(e){e.completer.goTo("end")},Esc:function(e){e.completer.detach()},Space:function(e){e.completer.detach(),e.insert(" ")},Return:function(e){return e.completer.insertMatch()},"Shift-Return":function(e){e.completer.insertMatch(!0)},Tab:function(e){var t=e.completer.insertMatch();return t||e.tabstopManager?t:void e.completer.goTo("down")},PageUp:function(e){e.completer.popup.gotoPageUp()},PageDown:function(e){e.completer.popup.gotoPageDown()}},this.gatherCompletions=function(e,t){var n=e.getSession(),i=e.getCursorPosition(),r=n.getLine(i.row),s=o.retrievePrecedingIdentifier(r,i.column);this.base=n.doc.createAnchor(i.row,i.column-s.length),this.base.$insertRight=!0;var a=[],c=e.completers.length;return e.completers.forEach(function(r){r.getCompletions(e,n,i,s,function(i,r){i||(a=a.concat(r));
var s=e.getCursorPosition(),h=n.getLine(s.row);t(null,{prefix:o.retrievePrecedingIdentifier(h,s.column,r[0]&&r[0].identifierRegex),matches:a,finished:0===--c})})}),!0},this.showPopup=function(e){this.editor&&this.detach(),this.activated=!0,this.editor=e,e.completer!=this&&(e.completer&&e.completer.detach(),e.completer=this),e.keyBinding.addKeyboardHandler(this.keyboardHandler),e.on("changeSelection",this.changeListener),e.on("blur",this.blurListener),e.on("mousedown",this.mousedownListener),e.on("mousewheel",this.mousewheelListener),this.updateCompletions()},this.updateCompletions=function(e){if(e&&this.base&&this.completions){var t=this.editor.getCursorPosition(),n=this.editor.session.getTextRange({start:this.base,end:t});if(n==this.completions.filterText)return;return this.completions.setFilter(n),this.completions.filtered.length&&(1!=this.completions.filtered.length||this.completions.filtered[0].value!=n||this.completions.filtered[0].snippet)?void this.openPopup(this.editor,n,e):this.detach()}var i=this.gatherCompletionsId;this.gatherCompletions(this.editor,function(t,n){var o=function(){return n.finished?this.detach():void 0}.bind(this),r=n.prefix,s=n&&n.matches;if(!s||!s.length)return o();if(0===r.indexOf(n.prefix)&&i==this.gatherCompletionsId){this.completions=new c(s),this.completions.setFilter(r);var a=this.completions.filtered;return a.length&&(1!=a.length||a[0].value!=r||a[0].snippet)?this.autoInsert&&1==a.length&&n.finished?this.insertMatch(a[0]):void this.openPopup(this.editor,r,e):o()}}.bind(this))},this.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()}}).call(a.prototype),a.startCommand={name:"startAutocomplete",exec:function(e){e.completer||(e.completer=new a),e.completer.autoInsert=e.completer.autoSelect=!0,e.completer.showPopup(e),e.completer.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var c=function(e,t){this.all=e,this.filtered=e,this.filterText=t||""};(function(){this.setFilter=function(e){if(e.length>this.filterText&&0===e.lastIndexOf(this.filterText,0))var t=this.filtered;
else var t=this.all;this.filterText=e,t=this.filterCompletions(t,this.filterText),t=t.sort(function(e,t){return t.exactMatch-e.exactMatch||t.score-e.score});var n=null;t=t.filter(function(e){var t=e.snippet||e.caption||e.value;return t===n?!1:(n=t,!0)}),this.filtered=t},this.filterCompletions=function(e,t){var n=[],i=t.toUpperCase(),o=t.toLowerCase();e:for(var r,s=0;r=e[s];s++){var a=r.value||r.caption||r.snippet;if(a){for(var c,h,l=-1,p=0,u=0,d=0;d<t.length;d++){var g=a.indexOf(o[d],l+1),f=a.indexOf(i[d],l+1);if(c=g>=0&&(0>f||f>g)?g:f,0>c)continue e;h=c-l-1,h>0&&(-1===l&&(u+=10),u+=h),p|=1<<c,l=c}r.matchMask=p,r.exactMatch=u?0:1,r.score=(r.score||0)-u,n.push(r)}}return n}}).call(c.prototype),t.Autocomplete=a,t.FilteredList=c}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(e,t){function n(e,t){var n=e.getTextRange(o.fromPoints({row:0,column:0},t));return n.split(r).length-1}function i(e,t){var i=n(e,t),o=e.getValue().split(r),s=Object.create(null),a=o[i];return o.forEach(function(e,t){if(e&&e!==a){var n=Math.abs(i-t),r=o.length-n;s[e]=s[e]?Math.max(r,s[e]):r}}),s}var o=e("../range").Range,r=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;t.getCompletions=function(e,t,n,o,r){var s=i(t,n,o),a=Object.keys(s);r(null,a.map(function(e){return{caption:e,value:e,score:s[e],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],function(e,t){"use strict";function n(e){var t=e.getCursorPosition(),n=e.session.getLine(t.row),i=s.retrievePrecedingIdentifier(n,t.column);return e.completers.forEach(function(e){e.identifierRegexps&&e.identifierRegexps.forEach(function(e){!i&&e&&(i=s.retrievePrecedingIdentifier(n,t.column,e))})}),i}var i=e("../snippets").snippetManager,o=e("../autocomplete").Autocomplete,r=e("../config"),s=e("../autocomplete/util"),a=e("../autocomplete/text_completer"),c={getCompletions:function(e,t,n,i,o){var r=e.session.getState(n.row),s=t.$mode.getCompletions(r,t,n,i);
o(null,s)}},h={getCompletions:function(e,t,n,o,r){var s=i.snippetMap,a=[];i.getActiveScopes(e).forEach(function(e){for(var t=s[e]||[],n=t.length;n--;){var i=t[n],o=i.name||i.tabTrigger;o&&a.push({caption:o,snippet:i.content,meta:i.tabTrigger&&!i.name?i.tabTrigger+"⇥ ":"snippet"})}},this),r(null,a)}},l=[h,a,c];t.addCompleter=function(e){l.push(e)},t.textCompleter=a,t.keyWordCompleter=c,t.snippetCompleter=h;var p={name:"expandSnippet",exec:function(e){var t=i.expandWithTab(e);t||e.execCommand("indent")},bindKey:"Tab"},u=function(e,t){d(t.session.$mode)},d=function(e){var t=e.$id;i.files||(i.files={}),g(t),e.modes&&e.modes.forEach(d)},g=function(e){if(e&&!i.files[e]){var t=e.replace("mode","snippets");i.files[e]={},r.loadModule(t,function(t){t&&(i.files[e]=t,!t.snippets&&t.snippetText&&(t.snippets=i.parseSnippetFile(t.snippetText)),i.register(t.snippets||[],t.scope),t.includeScopes&&(i.snippetMap[t.scope].includeScopes=t.includeScopes,t.includeScopes.forEach(function(e){g("ace/mode/"+e)})))})}},f=function(e){var t=e.editor,i=(e.args||"",t.completer&&t.completer.activated);if("backspace"===e.command.name)i&&!n(t)&&t.completer.detach();else if("insertstring"===e.command.name){var r=n(t);r&&!i&&(t.completer||(t.completer=new o),t.completer.autoSelect=!1,t.completer.autoInsert=!1,t.completer.showPopup(t))}},m=e("../editor").Editor;e("../config").defineOptions(m.prototype,"editor",{enableBasicAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:l),this.commands.addCommand(o.startCommand)):this.commands.removeCommand(o.startCommand)},value:!1},enableLiveAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:l),this.commands.on("afterExec",f)):this.commands.removeListener("afterExec",f)},value:!1},enableSnippets:{set:function(e){e?(this.commands.addCommand(p),this.on("changeMode",u),u(null,this)):(this.commands.removeCommand(p),this.off("changeMode",u))},value:!1}})}),function(){ace.require(["ace/ext/language_tools"],function(){})
}();