define([],function(){return{create:function(c){var navigator=c.navigator;return{click:function(r){var d=r.data;navigator.to(d.type+"/"+d.id)}}}}})