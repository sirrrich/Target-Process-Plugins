define(["require","Underscore"],function(n){function e(n,e){return u.map(n,e).join(" or ")}function r(){return[]}function t(n){return n.isObject?n.value:"'"+n.value+"'"}var u=n("Underscore");return{text:{parse:r,combine:function(n,r){return e(r,function(e){return n.name+" is '"+e+"'"})}},number:{parse:r,combine:function(n,r){return e(r,function(e){return n.name+" is "+e})}},"boolean":{parse:r,combine:function(n,r){return e(r,function(e){return n.name+" is "+(e?"True":"False")})}},object:{parse:r,combine:function(n,r){return e(r,function(e){return n.name+" is "+t(e)})}},collection:{parse:r,combine:function(n,r){if(!r.length)return"";var u=e(r,function(n){return"It is "+t(n)});return n.name+".Where("+u+")"}}}});