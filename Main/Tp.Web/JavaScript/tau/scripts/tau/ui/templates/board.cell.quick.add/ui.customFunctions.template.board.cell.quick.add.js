define([],function(){var e=["project","team"],r=function(e){var r="";return e.length&&(r='"'+e.join('","')+'"'),"["+r+"]"},t={"default":{getRules:function(e,t,u){return t=t||[],e.required!==!1&&t.push(u||"required"),r(t)}},DDL:{getRules:function(t,u){return u=u||[],_.contains(e,t.id)?u.push("required-team-project"):t.required&&u.push("required-ddl"),r(u)}},ProjectMultiSelect:{getRules:function(e,t){return e.required&&t.push("required-projectmultiselect"),r(t)}}},u=function(e,r,u){var n=e.type,i=t[n],d=i||t["default"],l=d.getRules(e,r,u);return l};return{getValidationRules:u}});