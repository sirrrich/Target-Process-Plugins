ace.define("ace/occur",["require","exports","module","ace/lib/oop","ace/range","ace/search","ace/edit_session","ace/search_highlight","ace/lib/dom"],function(e,n){"use strict";function t(){}var a=e("./lib/oop"),r=(e("./range").Range,e("./search").Search),o=e("./edit_session").EditSession,i=e("./search_highlight").SearchHighlight;a.inherits(t,r),function(){this.enter=function(e,n){if(!n.needle)return!1;var t=e.getCursorPosition();this.displayOccurContent(e,n);var a=this.originalToOccurPosition(e.session,t);return e.moveCursorToPosition(a),!0},this.exit=function(e,n){var t=n.translatePosition&&e.getCursorPosition(),a=t&&this.occurToOriginalPosition(e.session,t);return this.displayOriginalContent(e),a&&e.moveCursorToPosition(a),!0},this.highlight=function(e,n){var t=e.$occurHighlight=e.$occurHighlight||e.addDynamicMarker(new i(null,"ace_occur-highlight","text"));t.setRegexp(n),e._emit("changeBackMarker")},this.displayOccurContent=function(e,n){this.$originalSession=e.session;var t=this.matchingLines(e.session,n),a=t.map(function(e){return e.content}),r=new o(a.join("\n"));r.$occur=this,r.$occurMatchingLines=t,e.setSession(r),this.$useEmacsStyleLineStart=this.$originalSession.$useEmacsStyleLineStart,r.$useEmacsStyleLineStart=this.$useEmacsStyleLineStart,this.highlight(r,n.re),r._emit("changeBackMarker")},this.displayOriginalContent=function(e){e.setSession(this.$originalSession),this.$originalSession.$useEmacsStyleLineStart=this.$useEmacsStyleLineStart},this.originalToOccurPosition=function(e,n){var t=e.$occurMatchingLines,a={row:0,column:0};if(!t)return a;for(var r=0;r<t.length;r++)if(t[r].row===n.row)return{row:r,column:n.column};return a},this.occurToOriginalPosition=function(e,n){var t=e.$occurMatchingLines;return t&&t[n.row]?{row:t[n.row].row,column:n.column}:n},this.matchingLines=function(e,n){if(n=a.mixin({},n),!e||!n.needle)return[];var t=new r;return t.set(n),t.findAll(e).reduce(function(n,t){var a=t.start.row,r=n[n.length-1];return r&&r.row===a?n:n.concat({row:a,content:e.getLine(a)})
},[])}}.call(t.prototype);var s=e("./lib/dom");s.importCssString(".ace_occur-highlight {\n    border-radius: 4px;\n    background-color: rgba(87, 255, 8, 0.25);\n    position: absolute;\n    z-index: 4;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    box-shadow: 0 0 4px rgb(91, 255, 50);\n}\n.ace_dark .ace_occur-highlight {\n    background-color: rgb(80, 140, 85);\n    box-shadow: 0 0 4px rgb(60, 120, 70);\n}\n","incremental-occur-highlighting"),n.Occur=t}),ace.define("ace/commands/occur_commands",["require","exports","module","ace/config","ace/occur","ace/keyboard/hash_handler","ace/lib/oop"],function(e,n){function t(){}var a=(e("../config"),e("../occur").Occur),r={name:"occur",exec:function(e,n){var r=!!e.session.$occur,o=(new a).enter(e,n);o&&!r&&t.installIn(e)},readOnly:!0},o=[{name:"occurexit",bindKey:"esc|Ctrl-G",exec:function(e){var n=e.session.$occur;n&&(n.exit(e,{}),e.session.$occur||t.uninstallFrom(e))},readOnly:!0},{name:"occuraccept",bindKey:"enter",exec:function(e){var n=e.session.$occur;n&&(n.exit(e,{translatePosition:!0}),e.session.$occur||t.uninstallFrom(e))},readOnly:!0}],i=e("../keyboard/hash_handler").HashHandler,s=e("../lib/oop");s.inherits(t,i),function(){this.isOccurHandler=!0,this.attach=function(e){i.call(this,o,e.commands.platform),this.$editor=e};var e=this.handleKeyboard;this.handleKeyboard=function(n,t,a,r){var o=e.call(this,n,t,a,r);return o&&o.command?o:void 0}}.call(t.prototype),t.installIn=function(e){var n=new this;e.keyBinding.addKeyboardHandler(n),e.commands.addCommands(o)},t.uninstallFrom=function(e){e.commands.removeCommands(o);var n=e.getKeyboardHandler();n.isOccurHandler&&e.keyBinding.removeKeyboardHandler(n)},n.occurStartCommand=r}),ace.define("ace/commands/incremental_search_commands",["require","exports","module","ace/config","ace/lib/oop","ace/keyboard/hash_handler","ace/commands/occur_commands"],function(e,n){function t(e){this.$iSearch=e}var a=e("../config"),r=e("../lib/oop"),o=e("../keyboard/hash_handler").HashHandler,i=e("./occur_commands").occurStartCommand;
n.iSearchStartCommands=[{name:"iSearch",bindKey:{win:"Ctrl-F",mac:"Command-F"},exec:function(e,n){a.loadModule(["core","ace/incremental_search"],function(t){var a=t.iSearch=t.iSearch||new t.IncrementalSearch;a.activate(e,n.backwards),n.jumpToFirstMatch&&a.next(n)})},readOnly:!0},{name:"iSearchBackwards",exec:function(e){e.execCommand("iSearch",{backwards:!0})},readOnly:!0},{name:"iSearchAndGo",bindKey:{win:"Ctrl-K",mac:"Command-G"},exec:function(e){e.execCommand("iSearch",{jumpToFirstMatch:!0,useCurrentOrPrevSearch:!0})},readOnly:!0},{name:"iSearchBackwardsAndGo",bindKey:{win:"Ctrl-Shift-K",mac:"Command-Shift-G"},exec:function(e){e.execCommand("iSearch",{jumpToFirstMatch:!0,backwards:!0,useCurrentOrPrevSearch:!0})},readOnly:!0}],n.iSearchCommands=[{name:"restartSearch",bindKey:{win:"Ctrl-F",mac:"Command-F"},exec:function(e){e.cancelSearch(!0)},readOnly:!0,isIncrementalSearchCommand:!0},{name:"searchForward",bindKey:{win:"Ctrl-S|Ctrl-K",mac:"Ctrl-S|Command-G"},exec:function(e,n){n.useCurrentOrPrevSearch=!0,e.next(n)},readOnly:!0,isIncrementalSearchCommand:!0},{name:"searchBackward",bindKey:{win:"Ctrl-R|Ctrl-Shift-K",mac:"Ctrl-R|Command-Shift-G"},exec:function(e,n){n.useCurrentOrPrevSearch=!0,n.backwards=!0,e.next(n)},readOnly:!0,isIncrementalSearchCommand:!0},{name:"extendSearchTerm",exec:function(e,n){e.addString(n)},readOnly:!0,isIncrementalSearchCommand:!0},{name:"extendSearchTermSpace",bindKey:"space",exec:function(e){e.addString(" ")},readOnly:!0,isIncrementalSearchCommand:!0},{name:"shrinkSearchTerm",bindKey:"backspace",exec:function(e){e.removeChar()},readOnly:!0,isIncrementalSearchCommand:!0},{name:"confirmSearch",bindKey:"return",exec:function(e){e.deactivate()},readOnly:!0,isIncrementalSearchCommand:!0},{name:"cancelSearch",bindKey:"esc|Ctrl-G",exec:function(e){e.deactivate(!0)},readOnly:!0,isIncrementalSearchCommand:!0},{name:"occurisearch",bindKey:"Ctrl-O",exec:function(e){var n=r.mixin({},e.$options);e.deactivate(),i.exec(e.$editor,n)},readOnly:!0,isIncrementalSearchCommand:!0},{name:"yankNextWord",bindKey:"Ctrl-w",exec:function(e){var n=e.$editor,t=n.selection.getRangeOfMovements(function(e){e.moveCursorWordRight()
}),a=n.session.getTextRange(t);e.addString(a)},readOnly:!0,isIncrementalSearchCommand:!0},{name:"yankNextChar",bindKey:"Ctrl-Alt-y",exec:function(e){var n=e.$editor,t=n.selection.getRangeOfMovements(function(e){e.moveCursorRight()}),a=n.session.getTextRange(t);e.addString(a)},readOnly:!0,isIncrementalSearchCommand:!0},{name:"recenterTopBottom",bindKey:"Ctrl-l",exec:function(e){e.$editor.execCommand("recenterTopBottom")},readOnly:!0,isIncrementalSearchCommand:!0}],r.inherits(t,o),function(){this.attach=function(e){var t=this.$iSearch;o.call(this,n.iSearchCommands,e.commands.platform),this.$commandExecHandler=e.commands.addEventListener("exec",function(e){return e.command.isIncrementalSearchCommand?(e.stopPropagation(),e.preventDefault(),e.command.exec(t,e.args||{})):void 0})},this.detach=function(e){this.$commandExecHandler&&(e.commands.removeEventListener("exec",this.$commandExecHandler),delete this.$commandExecHandler)};var e=this.handleKeyboard;this.handleKeyboard=function(n,t,a,r){if((1===t||8===t)&&"v"===a||1===t&&"y"===a)return null;var o=e.call(this,n,t,a,r);if(o.command)return o;if(-1==t){var i=this.commands.extendSearchTerm;if(i)return{command:i,args:a}}return{command:"null",passEvent:0==t||4==t}}}.call(t.prototype),n.IncrementalSearchKeyboardHandler=t}),ace.define("ace/incremental_search",["require","exports","module","ace/lib/oop","ace/range","ace/search","ace/search_highlight","ace/commands/incremental_search_commands","ace/lib/dom","ace/commands/command_manager","ace/editor","ace/config"],function(e,n){"use strict";function t(){this.$options={wrap:!1,skipCurrent:!1},this.$keyboardHandler=new c(this)}var a=e("./lib/oop"),r=e("./range").Range,o=e("./search").Search,i=e("./search_highlight").SearchHighlight,s=e("./commands/incremental_search_commands"),c=s.IncrementalSearchKeyboardHandler;a.inherits(t,o),function(){this.activate=function(e,n){this.$editor=e,this.$startPos=this.$currentPos=e.getCursorPosition(),this.$options.needle="",this.$options.backwards=n,e.keyBinding.addKeyboardHandler(this.$keyboardHandler),this.$originalEditorOnPaste=e.onPaste,e.onPaste=this.onPaste.bind(this),this.$mousedownHandler=e.addEventListener("mousedown",this.onMouseDown.bind(this)),this.selectionFix(e),this.statusMessage(!0)
},this.deactivate=function(e){this.cancelSearch(e);var n=this.$editor;n.keyBinding.removeKeyboardHandler(this.$keyboardHandler),this.$mousedownHandler&&(n.removeEventListener("mousedown",this.$mousedownHandler),delete this.$mousedownHandler),n.onPaste=this.$originalEditorOnPaste,this.message("")},this.selectionFix=function(e){e.selection.isEmpty()&&!e.session.$emacsMark&&e.clearSelection()},this.highlight=function(e){var n=this.$editor.session,t=n.$isearchHighlight=n.$isearchHighlight||n.addDynamicMarker(new i(null,"ace_isearch-result","text"));t.setRegexp(e),n._emit("changeBackMarker")},this.cancelSearch=function(e){var n=this.$editor;return this.$prevNeedle=this.$options.needle,this.$options.needle="",e?(n.moveCursorToPosition(this.$startPos),this.$currentPos=this.$startPos):n.pushEmacsMark&&n.pushEmacsMark(this.$startPos,!1),this.highlight(null),r.fromPoints(this.$currentPos,this.$currentPos)},this.highlightAndFindWithNeedle=function(e,n){if(!this.$editor)return null;var t=this.$options;if(n&&(t.needle=n.call(this,t.needle||"")||""),0===t.needle.length)return this.statusMessage(!0),this.cancelSearch(!0);t.start=this.$currentPos;var a=this.$editor.session,o=this.find(a);return o&&(t.backwards&&(o=r.fromPoints(o.end,o.start)),this.$editor.moveCursorToPosition(o.end),e&&(this.$currentPos=o.end),this.highlight(t.re)),this.statusMessage(o),o},this.addString=function(e){return this.highlightAndFindWithNeedle(!1,function(n){return n+e})},this.removeChar=function(){return this.highlightAndFindWithNeedle(!1,function(e){return e.length>0?e.substring(0,e.length-1):e})},this.next=function(e){return e=e||{},this.$options.backwards=!!e.backwards,this.$currentPos=this.$editor.getCursorPosition(),this.highlightAndFindWithNeedle(!0,function(n){return e.useCurrentOrPrevSearch&&0===n.length?this.$prevNeedle||"":n})},this.onMouseDown=function(){return this.deactivate(),!0},this.onPaste=function(e){this.addString(e)},this.statusMessage=function(e){var n=this.$options,t="";t+=n.backwards?"reverse-":"",t+="isearch: "+n.needle,t+=e?"":" (not found)",this.message(t)
},this.message=function(e){this.$editor.showCommandLine?(this.$editor.showCommandLine(e),this.$editor.focus()):console.log(e)}}.call(t.prototype),n.IncrementalSearch=t;var l=e("./lib/dom");l.importCssString&&l.importCssString(".ace_marker-layer .ace_isearch-result {  position: absolute;  z-index: 6;  -moz-box-sizing: border-box;  -webkit-box-sizing: border-box;  box-sizing: border-box;}div.ace_isearch-result {  border-radius: 4px;  background-color: rgba(255, 200, 0, 0.5);  box-shadow: 0 0 4px rgb(255, 200, 0);}.ace_dark div.ace_isearch-result {  background-color: rgb(100, 110, 160);  box-shadow: 0 0 4px rgb(80, 90, 140);}","incremental-search-highlighting");var d=e("./commands/command_manager");(function(){this.setupIncrementalSearch=function(e,n){if(this.usesIncrementalSearch!=n){this.usesIncrementalSearch=n;var t=s.iSearchStartCommands,a=n?"addCommands":"removeCommands";this[a](t)}}}).call(d.CommandManager.prototype);var m=e("./editor").Editor;e("./config").defineOptions(m.prototype,"editor",{useIncrementalSearch:{set:function(e){this.keyBinding.$handlers.forEach(function(n){n.setupIncrementalSearch&&n.setupIncrementalSearch(this,e)}),this._emit("incrementalSearchSettingChanged",{isEnabled:e})}}})}),ace.define("ace/keyboard/emacs",["require","exports","module","ace/lib/dom","ace/incremental_search","ace/commands/incremental_search_commands","ace/keyboard/hash_handler","ace/lib/keys"],function(e,n){"use strict";var t=e("../lib/dom");e("../incremental_search");var a=e("../commands/incremental_search_commands"),r=function(e,n){var t=this.scroller.getBoundingClientRect(),a=Math.floor((e+this.scrollLeft-t.left-this.$padding)/this.characterWidth),r=Math.floor((n+this.scrollTop-t.top)/this.lineHeight);return this.session.screenToDocumentPosition(r,a)},o=e("./hash_handler").HashHandler;n.handler=new o,n.handler.isEmacs=!0,n.handler.$id="ace/keyboard/emacs";var i,s,c=!1;n.handler.attach=function(e){c||(c=!0,t.importCssString("            .emacs-mode .ace_cursor{                border: 2px rgba(50,250,50,0.8) solid!important;                -moz-box-sizing: border-box!important;                -webkit-box-sizing: border-box!important;                box-sizing: border-box!important;                background-color: rgba(0,250,0,0.9);                opacity: 0.5;            }            .emacs-mode .ace_hidden-cursors .ace_cursor{                opacity: 1;                background-color: transparent;            }            .emacs-mode .ace_overwrite-cursors .ace_cursor {                opacity: 1;                background-color: transparent;                border-width: 0 0 2px 2px !important;            }            .emacs-mode .ace_text-layer {                z-index: 4            }            .emacs-mode .ace_cursor-layer {                z-index: 2            }","emacsMode")),i=e.session.$selectLongWords,e.session.$selectLongWords=!0,s=e.session.$useEmacsStyleLineStart,e.session.$useEmacsStyleLineStart=!0,e.session.$emacsMark=null,e.session.$emacsMarkRing=e.session.$emacsMarkRing||[],e.emacsMark=function(){return this.session.$emacsMark
},e.setEmacsMark=function(e){this.session.$emacsMark=e},e.pushEmacsMark=function(e,n){var t=this.session.$emacsMark;t&&this.session.$emacsMarkRing.push(t),!e||n?this.setEmacsMark(e):this.session.$emacsMarkRing.push(e)},e.popEmacsMark=function(){var e=this.emacsMark();return e?(this.setEmacsMark(null),e):this.session.$emacsMarkRing.pop()},e.getLastEmacsMark=function(){return this.session.$emacsMark||this.session.$emacsMarkRing.slice(-1)[0]},e.on("click",d),e.on("changeSession",l),e.renderer.screenToTextCoordinates=r,e.setStyle("emacs-mode"),e.commands.addCommands(g),n.handler.platform=e.commands.platform,e.$emacsModeHandler=this,e.addEventListener("copy",this.onCopy),e.addEventListener("paste",this.onPaste)},n.handler.detach=function(e){delete e.renderer.screenToTextCoordinates,e.session.$selectLongWords=i,e.session.$useEmacsStyleLineStart=s,e.removeEventListener("click",d),e.removeEventListener("changeSession",l),e.unsetStyle("emacs-mode"),e.commands.removeCommands(g),e.removeEventListener("copy",this.onCopy),e.removeEventListener("paste",this.onPaste)};var l=function(e){e.oldSession&&(e.oldSession.$selectLongWords=i,e.oldSession.$useEmacsStyleLineStart=s),i=e.session.$selectLongWords,e.session.$selectLongWords=!0,s=e.session.$useEmacsStyleLineStart,e.session.$useEmacsStyleLineStart=!0,e.session.hasOwnProperty("$emacsMark")||(e.session.$emacsMark=null),e.session.hasOwnProperty("$emacsMarkRing")||(e.session.$emacsMarkRing=[])},d=function(e){e.editor.session.$emacsMark=null},m=e("../lib/keys").KEY_MODS,h={C:"ctrl",S:"shift",M:"alt",CMD:"command"},u=["C-S-M-CMD","S-M-CMD","C-M-CMD","C-S-CMD","C-S-M","M-CMD","S-CMD","S-M","C-CMD","C-M","C-S","CMD","M","S","C"];u.forEach(function(e){var n=0;e.split("-").forEach(function(e){n|=m[h[e]]}),h[n]=e.toLowerCase()+"-"}),n.handler.onCopy=function(e,t){t.$handlesEmacsOnCopy||(t.$handlesEmacsOnCopy=!0,n.handler.commands.killRingSave.exec(t),delete t.$handlesEmacsOnCopy)},n.handler.onPaste=function(e,n){n.pushEmacsMark(n.getCursorPosition())
},n.handler.bindKey=function(e,n){if(e){var t=this.commandKeyBinding;e.split("|").forEach(function(e){e=e.toLowerCase(),t[e]=n;var a=e.split(" ").slice(0,-1);a.reduce(function(e,n,t){var a=e[t-1]?e[t-1]+" ":"";return e.concat([a+n])},[]).forEach(function(e){t[e]||(t[e]="null")})},this)}},n.handler.handleKeyboard=function(e,n,t,a){if(-1===a)return void 0;var r=e.editor;if(-1==n&&(r.pushEmacsMark(),e.count)){var o=new Array(e.count+1).join(t);return e.count=null,{command:"insertstring",args:o}}if("\x00"==t)return void 0;var i=h[n];if("c-"==i||e.universalArgument){var s=String(e.count||0),c=parseInt(t[t.length-1]);if("number"==typeof c&&!isNaN(c))return e.count=parseInt(s+c),{command:"null"};e.universalArgument&&(e.count=4)}e.universalArgument=!1,i&&(t=i+t),e.keyChain&&(t=e.keyChain+=" "+t);var l=this.commandKeyBinding[t];if(e.keyChain="null"==l?t:"",!l)return void 0;if("null"===l)return{command:"null"};if("universalArgument"===l)return e.universalArgument=!0,{command:"null"};var d;if("string"!=typeof l&&(d=l.args,l.command&&(l=l.command),"goorselect"===l&&(l=r.emacsMark()?d[1]:d[0],d=null)),"string"==typeof l&&(("insertstring"===l||"splitline"===l||"togglecomment"===l)&&r.pushEmacsMark(),l=this.commands[l]||r.commands.commands[l],!l))return void 0;if(!l.readOnly&&!l.isYank&&(e.lastCommand=null),!l.readOnly&&r.emacsMark()&&r.setEmacsMark(null),e.count){var c=e.count;if(e.count=0,!l||!l.handlesCount)return{args:d,command:{exec:function(e,n){for(var t=0;c>t;t++)l.exec(e,n)}}};d||(d={}),"object"==typeof d&&(d.count=c)}return{command:l,args:d}},n.emacsKeys={"Up|C-p":{command:"goorselect",args:["golineup","selectup"]},"Down|C-n":{command:"goorselect",args:["golinedown","selectdown"]},"Left|C-b":{command:"goorselect",args:["gotoleft","selectleft"]},"Right|C-f":{command:"goorselect",args:["gotoright","selectright"]},"C-Left|M-b":{command:"goorselect",args:["gotowordleft","selectwordleft"]},"C-Right|M-f":{command:"goorselect",args:["gotowordright","selectwordright"]},"Home|C-a":{command:"goorselect",args:["gotolinestart","selecttolinestart"]},"End|C-e":{command:"goorselect",args:["gotolineend","selecttolineend"]},"C-Home|S-M-,":{command:"goorselect",args:["gotostart","selecttostart"]},"C-End|S-M-.":{command:"goorselect",args:["gotoend","selecttoend"]},"S-Up|S-C-p":"selectup","S-Down|S-C-n":"selectdown","S-Left|S-C-b":"selectleft","S-Right|S-C-f":"selectright","S-C-Left|S-M-b":"selectwordleft","S-C-Right|S-M-f":"selectwordright","S-Home|S-C-a":"selecttolinestart","S-End|S-C-e":"selecttolineend","S-C-Home":"selecttostart","S-C-End":"selecttoend","C-l":"recenterTopBottom","M-s":"centerselection","M-g":"gotoline","C-x C-p":"selectall","C-Down":{command:"goorselect",args:["gotopagedown","selectpagedown"]},"C-Up":{command:"goorselect",args:["gotopageup","selectpageup"]},"PageDown|C-v":{command:"goorselect",args:["gotopagedown","selectpagedown"]},"PageUp|M-v":{command:"goorselect",args:["gotopageup","selectpageup"]},"S-C-Down":"selectpagedown","S-C-Up":"selectpageup","C-s":"iSearch","C-r":"iSearchBackwards","M-C-s":"findnext","M-C-r":"findprevious","S-M-5":"replace",Backspace:"backspace","Delete|C-d":"del","Return|C-m":{command:"insertstring",args:"\n"},"C-o":"splitline","M-d|C-Delete":{command:"killWord",args:"right"},"C-Backspace|M-Backspace|M-Delete":{command:"killWord",args:"left"},"C-k":"killLine","C-y|S-Delete":"yank","M-y":"yankRotate","C-g":"keyboardQuit","C-w|C-S-W":"killRegion","M-w":"killRingSave","C-Space":"setMark","C-x C-x":"exchangePointAndMark","C-t":"transposeletters","M-u":"touppercase","M-l":"tolowercase","M-/":"autocomplete","C-u":"universalArgument","M-;":"togglecomment","C-/|C-x u|S-C--|C-z":"undo","S-C-/|S-C-x u|C--|S-C-z":"redo","C-x r":"selectRectangularRegion","M-x":{command:"focusCommandLine",args:"M-x "}},n.handler.bindKeys(n.emacsKeys),n.handler.addCommands({recenterTopBottom:function(e){var n=e.renderer,t=n.$cursorLayer.getPixelPosition(),a=n.$size.scrollerHeight-n.lineHeight,r=n.scrollTop;
r=Math.abs(t.top-r)<2?t.top-a:Math.abs(t.top-r-.5*a)<2?t.top:t.top-.5*a,e.session.setScrollTop(r)},selectRectangularRegion:function(e){e.multiSelect.toggleBlockSelection()},setMark:{exec:function(e,n){if(n&&n.count){var t=e.popEmacsMark();return void(t&&e.selection.moveCursorToPosition(t))}var t=e.emacsMark(),a=!0;if(a&&(t||!e.selection.isEmpty()))return e.pushEmacsMark(),void e.clearSelection();if(t){var r=e.getCursorPosition();if(e.selection.isEmpty()&&t.row==r.row&&t.column==r.column)return void e.pushEmacsMark()}t=e.getCursorPosition(),e.setEmacsMark(t),e.selection.setSelectionAnchor(t.row,t.column)},readOnly:!0,handlesCount:!0,multiSelectAction:"forEach"},exchangePointAndMark:{exec:function(e,n){var t=e.selection;if(n.count){var a=e.getCursorPosition();return t.clearSelection(),t.moveCursorToPosition(e.popEmacsMark()),e.pushEmacsMark(a),void 0}var r=e.getLastEmacsMark(),o=t.getRange();return o.isEmpty()?void t.selectToPosition(r):void t.setSelectionRange(o,!t.isBackwards())},readOnly:!0,handlesCount:!0,multiSelectAction:"forEach"},killWord:{exec:function(e,t){e.clearSelection(),"left"==t?e.selection.selectWordLeft():e.selection.selectWordRight();var a=e.getSelectionRange(),r=e.session.getTextRange(a);n.killRing.add(r),e.session.remove(a),e.clearSelection()},multiSelectAction:"forEach"},killLine:function(e){e.pushEmacsMark(null);var t=e.getCursorPosition();0===t.column&&0===e.session.doc.getLine(t.row).length?e.selection.selectLine():(e.clearSelection(),e.selection.selectLineEnd());var a=e.getSelectionRange(),r=e.session.getTextRange(a);n.killRing.add(r),e.session.remove(a),e.clearSelection()},yank:function(e){e.onPaste(n.killRing.get()||""),e.keyBinding.$data.lastCommand="yank"},yankRotate:function(e){"yank"==e.keyBinding.$data.lastCommand&&(e.undo(),e.onPaste(n.killRing.rotate()),e.keyBinding.$data.lastCommand="yank")},killRegion:{exec:function(e){n.killRing.add(e.getCopyText()),e.commands.byName.cut.exec(e)},readOnly:!0,multiSelectAction:"forEach"},killRingSave:{exec:function(e){n.killRing.add(e.getCopyText()),setTimeout(function(){var n=e.selection,t=n.getRange();
e.pushEmacsMark(n.isBackwards()?t.end:t.start),n.clearSelection()},0)},readOnly:!0},keyboardQuit:function(e){e.selection.clearSelection(),e.setEmacsMark(null)},focusCommandLine:function(e,n){e.showCommandLine&&e.showCommandLine(n)}}),n.handler.addCommands(a.iSearchStartCommands);var g=n.handler.commands;g.yank.isYank=!0,g.yankRotate.isYank=!0,n.killRing={$data:[],add:function(e){e&&this.$data.push(e),this.$data.length>30&&this.$data.shift()},get:function(e){return e=e||1,this.$data.slice(this.$data.length-e,this.$data.length).reverse().join("\n")},pop:function(){return this.$data.length>1&&this.$data.pop(),this.get()},rotate:function(){return this.$data.unshift(this.$data.pop()),this.get()}}});