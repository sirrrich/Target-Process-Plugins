define(["require","tau/core/extension.base"],function(e){var t=e("tau/core/extension.base");return t.extend({"bus boardSettings.ready:last + destroy":function(e,t){t.boardSettings.unbind({listener:this})},"bus beforeInit:last + boardSettings.ready:last + afterRender":function(e,t,n,i){var s=n.boardSettings,r=i.element,a=t.config.context.configurator.getRouting(),o=function(e){r.toggleClass("tau-settings-active",e||!1)};s.unbind({listener:this}),s.bind({fields:["edit"],listener:this,callback:function(e){o(e.edit)}}),o(s.settings.edit);var d=a.getUrl().url;if(d.indexOf("&openSetup=")>-1){s.set({set:{edit:!0}});var u=d.replace("&openSetup=","");a.setUrl(u)}}})});