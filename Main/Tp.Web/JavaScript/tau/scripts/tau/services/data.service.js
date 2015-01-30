define(["require","Underscore","jQuery","tau/core/class","tau/utils/utils.serverErrorTranslator"],function(e){"use strict";var r=e("Underscore"),t=e("jQuery"),n=e("tau/core/class"),i=e("tau/utils/utils.serverErrorTranslator"),s={MAX_REST_COUNT:1e3,where:function(e){return r.map(e,function(e,r){return e.is?r+" "+e.is:r+"="+e}).join(" and ")},build:function(e,t){return e+"?"+r.compact([t.select?"select={"+t.select.join(",")+"}":null,t.where?"where=("+this.where(t.where)+")":null,"take="+(t.take?t.take:this.MAX_REST_COUNT)]).join("&")}},o=n.extend({init:function(e,r,t){this._store=e,this._store2=r,this._errorBar=t,this._query=s},_findOne:function(e,t,n){return this._executeFind(e,r.extend({take:1},t)).then(this._returnSingleOrDefault.bind(this,e,n)).fail(this._handleStoreErrorResponse.bind(this))},_returnSingleOrDefault:function(e,n,i){var s=t.Deferred();return i.length?s.resolve(r.first(i)):r.isUndefined(n)?s.reject({message:r.capitalize(e)+" not found"}):s.resolve(n),s},_find:function(e,r){return this._executeFind(e,r).fail(this._handleStoreErrorResponse.bind(this))},_executeFind:function(e,r){return this._store2.findAll(this._query.build(e,r))},_handleStoreErrorResponse:function(e){var r=i.translateServerError(e);r&&r.message&&(r.message=r.message.replace(/\r\n/g,"<br/>")),this._handleError(r)},_handleXhrErrorResponse:function(e){this._handleError(i.translateXhrError(e))},_handleError:function(e){this._errorBar.fire("error",e)}});return o});