define(["Underscore","jQuery","tau/libs/boardSettings/model.settings.storage"],function(e,o,i){return i.extend({_onBeforeRetrieve:function(o){if(o&&o.zoomLevel){if(!e.isObject(o.zoomLevel))throw Error("Invalid type of zoomLevel");var i=o.viewMode||this.settings.viewMode;if(!e.isString(i))throw Error("viewMode is not defined");for(var r=o.zoomLevel[i],t=e.keys(o.zoomLevel).sort(),n=0;n<t.length&&!e.isNumber(r);n++)r=o.zoomLevel[t[n]];e.isNumber(r)||(r=3),o.zoomLevel=r}},_onBeforeSave:function(o){if(o&&!e.isUndefined(o.zoomLevel)&&!e.isNull(o.zoomLevel)){if(!e.isNumber(o.zoomLevel))throw Error("Invalid type of zoomLevel");var i=o.viewMode||this.settings.viewMode;if(!e.isString(i))throw Error("viewMode is not defined");var r=o.zoomLevel;o.zoomLevel=e.clone(this.settings.zoomLevel)||{},o.zoomLevel[i]=r}}})});