define(["Underscore","tau/core/extension.base","tau/models/tags/tagsProcessor"],function(e,t,i){return t.extend({fieldsToClone:["cells","x","y","colorSettings","zoomLevel","viewMode","cardSettings","timelineSettings"],"bus beforeInit":function(t,o){var r=o.config.context.configurator;this.fire("configurator.ready",r),this.fire("dataBind",{}),this.fire("tagsProcessor.ready",new i);var a=e.defaults(o.config.options||{},{groupName:"boardTemplates"});this.fire("options.ready",a)},"bus boardSettings.ready:last + form.submitted":function(t,i){var o=i.boardSettings;o.get({fields:this.fieldsToClone,callback:e.bind(function(e){this.fire("boardData.ready",e)},this)})},"bus options.ready:last + configurator.ready:last + tagsProcessor.ready:last + boardData.ready + form.submitted":function(t,i,o,r,a,s){var n=o.getRestStorage(),d={name:e.asString(s.name).trim().slice(0,50),description:e.asString(s.description).trim().slice(0,255),tags:r.asArray(r.asArray(s.tags).concat(["custom"])),definition:e.pick(a,this.fieldsToClone),numericPriority:(new Date).getTime()};d.name.length?n.data(i.groupName,void 0,{scope:"Public",publicData:d}).done(e.bind(function(e){this.fire("form.processed",e)},this)):this.fire("form.failed",{name:"Should not be empty"})}})});