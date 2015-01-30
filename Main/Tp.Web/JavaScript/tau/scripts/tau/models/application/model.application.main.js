define(["Underscore","jQuery","tau/core/extension.base","tau/core/tau","tau/core/termProcessor","tau/models/dataprocessor/model.processor.context","Modernizr"],function(e,t,i,r,o,n,a){var s=r.Error;return i.extend({init:function(e){var t=e.context.configurator,i=t.getAppStateStore(),r=t.getApplicationContextService(),a=t.getFeaturesService(),s=(a.isEnabled("hide.noProject"),function(e){e.acid&&r.getApplicationContext({acid:e.acid},{success:function(a){var s=n({applicationContext:a}),c=a.appContext.projectContext,l=c&&c&&c.no,d=0===a.selectedProjectIdsAvailable.length||a.selectedProjectIdsAvailable.length===a.projectIdsAvailable.length;if(l&&!d&&-1===e.acid.indexOf("_wnp")){var u=e.acid+"_wnp";r.getApplicationContext({acid:u},{success:function(t){taus.track("acid redirect",{oldAcid:e.acid,newAcid:a.acid}),i.set({set:{acid:u,appContext:t.appContext}})}})}t.getTemplateFactory().setTermProcessor(new o(s.getTerms()))}})});i.bind({fields:["acid"],listener:this,callback:s}),i.get({fields:["acid"]}).then(s),this._super(e)},"bus initialize":function(t,i){var r=this._extractOptions(i,{applicationId:e.uniqueId("app"),turnOffLoadingIndicator:!1,integration:{showInPopup:!1,keepAlive:!1,appendTo:null},routing:{silent:!1,executeOnStart:!0},comet:{enabled:!1}}),o=i.context.configurator;this.fire("configurator.ready",o),this.fire("options.ready",r),this.checkCompatibility(o).done(e.bind(function(){this.fire("routing.enable")},this)).fail(e.bind(function(e){this.fire("routing.disable"),this.fire("routing.forward",{url:"error",args:{error:e}})},this))},"bus initialize + destroy":function(e,t){var i=t.context.configurator,r=i.getAppStateStore();r.unbind({listener:this})},"bus afterInit":function(){this.fire("dataBind",{})},getCompatibilityMessage:function(t){var i={ieDocMode:"Targetprocess 3 does not support Internet Explorer in %s document mode. Please, turn standards mode.",other:'Targetprocess 3 supports the two most recent versions of the following browsers:</p><div class="msg"><ul><li style=""><a href="http://www.google.com/chrome/">Google Chrome</a> (recommended)</li><li><a href="http://www.mozilla.com/firefox/">Mozilla Firefox</a></li><li><a href="http://www.microsoft.com/windows/Internet-explorer/">Internet Explorer</a></li><li><a href="http://www.apple.com/safari/download/">Safari</a></li></ul></div><p>'};
if(t){var o=e.all(["csscalc","flexbox","inlinesvg","svg"],function(e){return a[e]}),n=/PhantomJS/.test(navigator.userAgent);if(o||n)return null}else{var s=r.getIEVersion();if(s>=9){var c=9;if("BackCompat"===document.compatMode)return e.sprintf(i.ieDocMode,"Quirks");var l=document.documentMode||6;return c>l?c>s?i.other:e.sprintf(i.ieDocMode,"IE"+l):null}if(!s)return null}return i.other},checkCompatibility:function(e){var i=t.Deferred(),r=this.getCompatibilityMessage(e.isBoardEdition);return r?i.reject(new s("We're sorry, but this browser is not supported",r)):i.resolve(),i}})});