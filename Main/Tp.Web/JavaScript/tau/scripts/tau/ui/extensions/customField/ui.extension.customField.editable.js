define(["tau/components/extensions/component.extension.base","tau/ui/behaviour/overlay/ui.behaviour.overlay"],function(e){return e.extend({"bus afterRender":function(e){this.element=e.data.element},_markElementAsUpdate:function(){this.element.tauOverlay(),this.fire("markElementToBeUpdated",{element:this.element})},"bus preRefreshRow":function(){this._markElementAsUpdate()},_refreshElement:function(){this.element.parents(".tmpl-container-list:first").tauOverlay("hide"),this.on("afterRender",function(e){e.removeListener(),this.fire("updateElement",{element:this.element})}.bind(this)),this.fire("refresh")},"bus refreshRow":function(){this._refreshRow()},_refreshRow:function(){this._refreshElement()}})});