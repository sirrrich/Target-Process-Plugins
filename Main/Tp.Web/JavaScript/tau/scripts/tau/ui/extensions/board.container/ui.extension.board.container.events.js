define(["tau/components/extensions/component.extension.base"],function(BaseExtension){return BaseExtension.extend({"bus boardSettings.ready > refresh":function(e,boardSettings){this.fire("boardSettings.ready",boardSettings)},"bus boardSettings.ready > initialize":function(e,boardSettings){this.fire("boardSettings.ready",boardSettings)},"bus componentsCreated:last + boardSettings.ready":function(e,components,boardSettings){for(var i=0,len=components.length;i<len;i++){var c=components[i].component;c.fire("boardSettings.ready",boardSettings)}},"bus view.dom.ready > refresh":function(e,domReady){this.fire("view.dom.ready",domReady)},"bus componentsCreated:last + view.dom.ready":function(e,components,domReady){for(var i=0,len=components.length;i<len;i++){var c=components[i].component;c.on("afterRender",function(){this.fire("view.dom.ready",domReady)},c),c.fire("view.dom.ready",domReady)}}})})