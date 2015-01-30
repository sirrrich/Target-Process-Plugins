define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/utils/utils.serverErrorTranslator"],function(r,e,t,n){return t.extend({init:function(r){this._super(r),this.config.context.configurator.getRestStorage().on("error",this.generalErrorHandler,this),this.store.on({eventName:"failure",listener:this},this.generalErrorHandler.bind(this))},generalErrorHandler:function(r){var e=r.data;if(e&&e.cmd&&e.cmd.config){var t=e.cmd.config.errorHandler;if(t){var s=t(e.data);if(s===!1)return}}var o=n.translateServerError.call(this,e);this.fire("error",o)},"bus slice.ready":function(r,e){e.slice.on("error",this.generalErrorHandler,this),e.base&&e.base.on("error",this.generalErrorHandler,this),e.lazy&&e.lazy.on("error",this.generalErrorHandler,this)},"bus report.error":function(r){this.generalErrorHandler(r)},"bus lookup.error":function(r){this.generalErrorHandler(r)},"bus dragndrop.error":function(r){this.generalErrorHandler(r)},"bus slice.ready:last + destroy":function(r,e){e.slice.removeAllListeners(this),e.base&&e.base.removeAllListeners(this),e.lazy&&e.lazy.removeAllListeners(this)},destroy:function(){this.config.context.configurator.getRestStorage().removeAllListeners(this),this.store.unbind(this),this._super()}})});