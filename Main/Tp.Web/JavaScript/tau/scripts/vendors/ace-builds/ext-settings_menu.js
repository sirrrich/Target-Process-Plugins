ace.define("ace/ext/menu_tools/element_generator",["require","exports","module"],function(e,t,r){"use strict";r.exports.createOption=function(e){var t,r=document.createElement("option");for(t in e)e.hasOwnProperty(t)&&("selected"===t?r.setAttribute(t,e[t]):r[t]=e[t]);return r},r.exports.createCheckbox=function(e,t,r){var o=document.createElement("input");return o.setAttribute("type","checkbox"),o.setAttribute("id",e),o.setAttribute("name",e),o.setAttribute("value",t),o.setAttribute("class",r),t&&o.setAttribute("checked","checked"),o},r.exports.createInput=function(e,t,r){var o=document.createElement("input");return o.setAttribute("type","text"),o.setAttribute("id",e),o.setAttribute("name",e),o.setAttribute("value",t),o.setAttribute("class",r),o},r.exports.createLabel=function(e,t){var r=document.createElement("label");return r.setAttribute("for",t),r.textContent=e,r},r.exports.createSelection=function(e,t,o){var a=document.createElement("select");return a.setAttribute("id",e),a.setAttribute("name",e),a.setAttribute("class",o),t.forEach(function(e){a.appendChild(r.exports.createOption(e))}),a}}),ace.define("ace/ext/modelist",["require","exports","module"],function(e,t,r){"use strict";function o(e){for(var t=c.text,r=e.split(/[\/\\]/).pop(),o=0;o<a.length;o++)if(a[o].supportsFile(r)){t=a[o];break}return t}var a=[],n=function(e,t,r){if(this.name=e,this.caption=t,this.mode="ace/mode/"+e,this.extensions=r,/\^/.test(r))var o=r.replace(/\|(\^)?/g,function(e,t){return"$|"+(t?"^":"^.*\\.")})+"$";else var o="^.*\\.("+r+")$";this.extRe=new RegExp(o,"gi")};n.prototype.supportsFile=function(e){return e.match(this.extRe)};var i={ABAP:["abap"],ActionScript:["as"],ADA:["ada|adb"],Apache_Conf:["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],AsciiDoc:["asciidoc"],Assembly_x86:["asm"],AutoHotKey:["ahk"],BatchFile:["bat|cmd"],C9Search:["c9search_results"],C_Cpp:["cpp|c|cc|cxx|h|hh|hpp"],Cirru:["cirru|cr"],Clojure:["clj|cljs"],Cobol:["CBL|COB"],coffee:["coffee|cf|cson|^Cakefile"],ColdFusion:["cfm"],CSharp:["cs"],CSS:["css"],Curly:["curly"],D:["d|di"],Dart:["dart"],Diff:["diff|patch"],Dockerfile:["^Dockerfile"],Dot:["dot"],Eiffel:["e"],EJS:["ejs"],Erlang:["erl|hrl"],Forth:["frt|fs|ldr"],FTL:["ftl"],Gcode:["gcode"],Gherkin:["feature"],Gitignore:["^.gitignore"],Glsl:["glsl|frag|vert"],golang:["go"],Groovy:["groovy"],HAML:["haml"],Handlebars:["hbs|handlebars|tpl|mustache"],Haskell:["hs"],haXe:["hx"],HTML:["html|htm|xhtml"],HTML_Ruby:["erb|rhtml|html.erb"],INI:["ini|conf|cfg|prefs"],Io:["io"],Jack:["jack"],Jade:["jade"],Java:["java"],JavaScript:["js|jsm"],JSON:["json"],JSONiq:["jq"],JSP:["jsp"],JSX:["jsx"],Julia:["jl"],LaTeX:["tex|latex|ltx|bib"],LESS:["less"],Liquid:["liquid"],Lisp:["lisp"],LiveScript:["ls"],LogiQL:["logic|lql"],LSL:["lsl"],Lua:["lua"],LuaPage:["lp"],Lucene:["lucene"],Makefile:["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],Markdown:["md|markdown"],MATLAB:["matlab"],MEL:["mel"],MUSHCode:["mc|mush"],MySQL:["mysql"],Nix:["nix"],ObjectiveC:["m|mm"],OCaml:["ml|mli"],Pascal:["pas|p"],Perl:["pl|pm"],pgSQL:["pgsql"],PHP:["php|phtml"],Powershell:["ps1"],Praat:["praat|praatscript|psc|proc"],Prolog:["plg|prolog"],Properties:["properties"],Protobuf:["proto"],Python:["py"],R:["r"],RDoc:["Rd"],RHTML:["Rhtml"],Ruby:["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],Rust:["rs"],SASS:["sass"],SCAD:["scad"],Scala:["scala"],Scheme:["scm|rkt"],SCSS:["scss"],SH:["sh|bash|^.bashrc"],SJS:["sjs"],Smarty:["smarty|tpl"],snippets:["snippets"],Soy_Template:["soy"],Space:["space"],SQL:["sql"],Stylus:["styl|stylus"],SVG:["svg"],Tcl:["tcl"],Tex:["tex"],Text:["txt"],Textile:["textile"],Toml:["toml"],Twig:["twig"],Typescript:["ts|typescript|str"],Vala:["vala"],VBScript:["vbs|vb"],Velocity:["vm"],Verilog:["v|vh|sv|svh"],VHDL:["vhd|vhdl"],XML:["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl"],XQuery:["xq"],YAML:["yaml|yml"]},s={ObjectiveC:"Objective-C",CSharp:"C#",golang:"Go",C_Cpp:"C and C++",coffee:"CoffeeScript",HTML_Ruby:"HTML (Ruby)",FTL:"FreeMarker"},c={};
for(var l in i){var u=i[l],d=(s[l]||l).replace(/_/g," "),m=l.toLowerCase(),p=new n(m,d,u[0]);c[m]=p,a.push(p)}r.exports={getModeForPath:o,modes:a,modesByName:c}}),ace.define("ace/ext/themelist",["require","exports","module","ace/lib/fixoldbrowsers"],function(e,t){"use strict";e("ace/lib/fixoldbrowsers");var r=[["Chrome"],["Clouds"],["Crimson Editor"],["Dawn"],["Dreamweaver"],["Eclipse"],["GitHub"],["Solarized Light"],["TextMate"],["Tomorrow"],["XCode"],["Kuroir"],["KatzenMilch"],["Ambiance","ambiance","dark"],["Chaos","chaos","dark"],["Clouds Midnight","clouds_midnight","dark"],["Cobalt","cobalt","dark"],["idle Fingers","idle_fingers","dark"],["krTheme","kr_theme","dark"],["Merbivore","merbivore","dark"],["Merbivore Soft","merbivore_soft","dark"],["Mono Industrial","mono_industrial","dark"],["Monokai","monokai","dark"],["Pastel on dark","pastel_on_dark","dark"],["Solarized Dark","solarized_dark","dark"],["Terminal","terminal","dark"],["Tomorrow Night","tomorrow_night","dark"],["Tomorrow Night Blue","tomorrow_night_blue","dark"],["Tomorrow Night Bright","tomorrow_night_bright","dark"],["Tomorrow Night 80s","tomorrow_night_eighties","dark"],["Twilight","twilight","dark"],["Vibrant Ink","vibrant_ink","dark"]];t.themesByName={},t.themes=r.map(function(e){var r=e[1]||e[0].replace(/ /g,"_").toLowerCase(),o={caption:e[0],theme:"ace/theme/"+r,isDark:"dark"==e[2],name:r};return t.themesByName[r]=o,o})}),ace.define("ace/ext/menu_tools/add_editor_menu_options",["require","exports","module","ace/ext/modelist","ace/ext/themelist"],function(e,t,r){"use strict";r.exports.addEditorMenuOptions=function(t){var r=e("../modelist"),o=e("../themelist");t.menuOptions={setNewLineMode:[{textContent:"unix",value:"unix"},{textContent:"windows",value:"windows"},{textContent:"auto",value:"auto"}],setTheme:[],setMode:[],setKeyboardHandler:[{textContent:"ace",value:""},{textContent:"vim",value:"ace/keyboard/vim"},{textContent:"emacs",value:"ace/keyboard/emacs"},{textContent:"textarea",value:"ace/keyboard/textarea"},{textContent:"sublime",value:"ace/keyboard/sublime"}]},t.menuOptions.setTheme=o.themes.map(function(e){return{textContent:e.caption,value:e.theme}
}),t.menuOptions.setMode=r.modes.map(function(e){return{textContent:e.name,value:e.mode}})}}),ace.define("ace/ext/menu_tools/get_set_functions",["require","exports","module"],function(e,t,r){"use strict";r.exports.getSetFunctions=function(e){var t=[],r={editor:e,session:e.session,renderer:e.renderer},o=[],a=["setOption","setUndoManager","setDocument","setValue","setBreakpoints","setScrollTop","setScrollLeft","setSelectionStyle","setWrapLimitRange"];return["renderer","session","editor"].forEach(function(e){var n=r[e],i=e;for(var s in n)-1===a.indexOf(s)&&/^set/.test(s)&&-1===o.indexOf(s)&&(o.push(s),t.push({functionName:s,parentObj:n,parentName:i}))}),t}}),ace.define("ace/ext/menu_tools/generate_settings_menu",["require","exports","module","ace/ext/menu_tools/element_generator","ace/ext/menu_tools/add_editor_menu_options","ace/ext/menu_tools/get_set_functions"],function(e,t,r){"use strict";var o=e("./element_generator"),a=e("./add_editor_menu_options").addEditorMenuOptions,n=e("./get_set_functions").getSetFunctions;r.exports.generateSettingsMenu=function(e){function t(){l.sort(function(e,t){var r=e.getAttribute("contains"),o=t.getAttribute("contains");return r.localeCompare(o)})}function r(){var e=document.createElement("div");return e.setAttribute("id","ace_settingsmenu"),l.forEach(function(t){e.appendChild(t)}),e}function i(t,r,a,n){var i,s=document.createElement("div");return s.setAttribute("contains",a),s.setAttribute("class","ace_optionsMenuEntry"),s.setAttribute("style","clear: both;"),s.appendChild(o.createLabel(a.replace(/^set/,"").replace(/([A-Z])/g," $1").trim(),a)),Array.isArray(n)?(i=o.createSelection(a,n,r),i.addEventListener("change",function(r){try{e.menuOptions[r.target.id].forEach(function(e){e.textContent!==r.target.textContent&&delete e.selected}),t[r.target.id](r.target.value)}catch(o){throw new Error(o)}})):"boolean"==typeof n?(i=o.createCheckbox(a,n,r),i.addEventListener("change",function(e){try{t[e.target.id](!!e.target.checked)}catch(r){throw new Error(r)
}})):(i=o.createInput(a,n,r),i.addEventListener("change",function(e){try{t[e.target.id]("true"===e.target.value?!0:"false"===e.target.value?!1:e.target.value)}catch(r){throw new Error(r)}})),i.style.cssText="float:right;",s.appendChild(i),s}function s(t,r,o,a){var n=e.menuOptions[t],s=r[a]();return"object"==typeof s&&(s=s.$id),n.forEach(function(e){e.value===s&&(e.selected="selected")}),i(r,o,t,n)}function c(t){var r,o=t.functionName,a=t.parentObj,n=t.parentName,c=o.replace(/^set/,"get");if(void 0!==e.menuOptions[o])l.push(s(o,a,n,c));else if("function"==typeof a[c])try{r=a[c](),"object"==typeof r&&(r=r.$id),l.push(i(a,n,o,r))}catch(u){}}var l=[];return a(e),n(e).forEach(function(e){c(e)}),t(),r()}}),ace.define("ace/ext/menu_tools/overlay_page",["require","exports","module","ace/lib/dom"],function(e,t,r){"use strict";var o=e("../../lib/dom"),a="#ace_settingsmenu, #kbshortcutmenu {background-color: #F7F7F7;color: black;box-shadow: -5px 4px 5px rgba(126, 126, 126, 0.55);padding: 1em 0.5em 2em 1em;overflow: auto;position: absolute;margin: 0;bottom: 0;right: 0;top: 0;z-index: 9991;cursor: default;}.ace_dark #ace_settingsmenu, .ace_dark #kbshortcutmenu {box-shadow: -20px 10px 25px rgba(126, 126, 126, 0.25);background-color: rgba(255, 255, 255, 0.6);color: black;}.ace_optionsMenuEntry:hover {background-color: rgba(100, 100, 100, 0.1);-webkit-transition: all 0.5s;transition: all 0.3s}.ace_closeButton {background: rgba(245, 146, 146, 0.5);border: 1px solid #F48A8A;border-radius: 50%;padding: 7px;position: absolute;right: -8px;top: -8px;z-index: 1000;}.ace_closeButton{background: rgba(245, 146, 146, 0.9);}.ace_optionsMenuKey {color: darkslateblue;font-weight: bold;}.ace_optionsMenuCommand {color: darkcyan;font-weight: normal;}";o.importCssString(a),r.exports.overlayPage=function(e,t,r,a,n,i){function s(e){27===e.keyCode&&c.click()}r=r?"top: "+r+";":"",n=n?"bottom: "+n+";":"",a=a?"right: "+a+";":"",i=i?"left: "+i+";":"";var c=document.createElement("div"),l=document.createElement("div");
c.style.cssText="margin: 0; padding: 0; position: fixed; top:0; bottom:0; left:0; right:0;z-index: 9990; background-color: rgba(0, 0, 0, 0.3);",c.addEventListener("click",function(){document.removeEventListener("keydown",s),c.parentNode.removeChild(c),e.focus(),c=null}),document.addEventListener("keydown",s),l.style.cssText=r+a+n+i,l.addEventListener("click",function(e){e.stopPropagation()});var u=o.createElement("div");u.style.position="relative";var d=o.createElement("div");d.className="ace_closeButton",d.addEventListener("click",function(){c.click()}),u.appendChild(d),l.appendChild(u),l.appendChild(t),c.appendChild(l),document.body.appendChild(c),e.blur()}}),ace.define("ace/ext/settings_menu",["require","exports","module","ace/ext/menu_tools/generate_settings_menu","ace/ext/menu_tools/overlay_page","ace/editor"],function(e,t,r){"use strict";function o(e){var t=document.getElementById("ace_settingsmenu");t||n(e,a(e),"0","0","0")}var a=e("./menu_tools/generate_settings_menu").generateSettingsMenu,n=e("./menu_tools/overlay_page").overlayPage;r.exports.init=function(){var t=e("ace/editor").Editor;t.prototype.showSettingsMenu=function(){o(this)}}}),function(){ace.require(["ace/ext/settings_menu"],function(){})}();