define(["Underscore","tau/core/extension.base"],function(e,n){return n.extend({"bus configurator.ready:last + acid.ready:last + formData.changed":function(n,r,i,l){l.focus={x:[],y:[]},l.selectedMarks={x:[],y:[]};var s=this,t=$.Deferred(),o=r.service("boardSettings");this._getCurrent(o).done(function(n){if(e.isEqual(n.cells.types,l.cells.types)&&n.x&&e.isEqual(n.x.types,l.x.types)&&n.y&&e.isEqual(n.y.types,l.y.types))t.resolve(l);else{var s={global:{acid:i},x:l.x,y:l.y,cells:l.cells},o=r.getSliceFactory().create({definition:s});o.spaceV2().done(function(n){var r=n.data;if(l.cells.ordering&&-1==e.indexOf(e.pluck(r.cells.orderings.items,"name"),l.cells.ordering.name))if(r.cells.orderings.items.length){var i=r.cells.orderings.items[0];l.cells.ordering.name=i.name,l.cells.ordering.direction=i.direction}else l.cells.ordering.name=null,l.cells.ordering.direction=null;e.forEach(["x","y"],function(n){if(l[n].ordering){var i=e.find(r.axes.items,function(e){return e.id==l[n].types[0]});if(i){if(-1==e.indexOf(e.pluck(i.orderings,"name"),l[n].ordering.name))if(i.orderings.length){var s=i.orderings[0];l[n].ordering.name=s.name,l[n].ordering.direction=s.direction}else l[n].ordering.name=null,l[n].ordering.direction=null}else l[n].ordering.name=null,l[n].ordering.direction=null}}),t.resolve(l)})}}),t.done(function(e){o.set({set:e}).done(function(){s.fire("settings.changed",e)})})},_getCurrent:function(e){var n=$.Deferred();return e.get({fields:["cells","x","y"],callback:function(e){n.resolve(e)}}),n}})});