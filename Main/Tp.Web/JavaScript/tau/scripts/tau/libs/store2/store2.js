define(["Underscore","jQuery","tau/core/class"],function(_,$,Class){var store2=Class.extend({init:function(configurator){this.path=configurator.getApplicationPath()+"/api/v2/",this.service=$.ajax},escapeExpressionArgument:function(arg){return encodeURIComponent(this._jsEscape(_.asString(arg)))},getTeamsProjectsAvailable:_.memoize(function(userId){var o=this,query="User?select={AvailableProjects() as projects, AvailableTeams() as teams}&where=(id == "+userId+")",targetUrl=o.path+query;return o.service({url:targetUrl}).pipe(function(r){var defaultTeamsProjects={projects:[],teams:[]};return r.items.length===1?_.defaults(r.items[0],defaultTeamsProjects):defaultTeamsProjects})}),findAll:function(query){return this.service({url:this.path+query}).pipe(function(responseData){return responseData.items})},_jsEscape:function(content){return content.replace(/(["'\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")}});return store2.prototype.arg=store2.prototype.escapeExpressionArgument,store2})