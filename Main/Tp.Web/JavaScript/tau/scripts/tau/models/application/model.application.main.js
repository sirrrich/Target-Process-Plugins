define(["Underscore","tau/core/extension.base"],function(_,ExtensionBase){return ExtensionBase.extend({"bus initialize":function(evt,initConfig){var options=this._extractOptions(initConfig,{applicationId:_.uniqueId("app"),turnOffLoadingIndicator:!1,integration:{showInPopup:!1,keepAlive:!1,appendTo:null},routing:{silent:!1,executeOnStart:!0},comet:{enabled:!1}}),configurator=initConfig.context.configurator;this.fire("configurator.ready",configurator),this.fire("options.ready",options)},"bus afterInit":function(evt){this.fire("dataBind",{})}})})