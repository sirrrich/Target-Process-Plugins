define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(_,$,ExtensionBase){var insert=function(where,what,at){return[where.slice(0,at),what,where.slice(at)].join("")},langFilterTranslator={isMatch:function(err){return/BadRequestException$/i.test(err.Type)&&_.isObject(err.InnerException)&&/NotWellFormedLangExpressionException$/i.test(err.InnerException.Type)},buildError:function(err){var details=err.InnerException.Details,message=err.Message,detailsMessage=details.Message;return{message:message,details:detailsMessage}}},somethingGoingWrongTranslator={isMatch:function(err){return/\.HttpException$/i.test(err.Type)&&_.isObject(err.InnerException)&&err.InnerException.Message},buildError:function(err){return{message:err.Message,details:err.InnerException.Message}}},defaultTranslator={isMatch:function(){return!0},buildError:function(err){var msg=err.message||"Looks like application is not available. Please check your connection or server availability";return msg=_.isObject(err)&&_.isString(err.Message)?err.Message:msg,{message:msg}}},generalErrorHandler=function(evt){var self=this,err=evt.data,errorData=translateServerError(err);self.fire("error",errorData)},translateServerError=function(err){var translators=[langFilterTranslator,somethingGoingWrongTranslator,defaultTranslator],translator=_.find(translators,function(translator){return translator.isMatch(err)});return translator.buildError(err)};return ExtensionBase.extend({init:function(){var self=this;self._super.apply(self,arguments),self.generalErrorHandler=_.bind(generalErrorHandler,self);var storage=self.config.context.configurator.getRestStorage();storage.on("error",self.generalErrorHandler)},subscribeSliceToError:function(sliceInstance){var o=this;sliceInstance.on("error",o.generalErrorHandler)},"bus slice.ready":function(evt){var self=this;self.subscribeSliceToError(evt.data.slice),self.subscribeSliceToError(evt.data.base),self.subscribeSliceToError(evt.data.lazy)}})})