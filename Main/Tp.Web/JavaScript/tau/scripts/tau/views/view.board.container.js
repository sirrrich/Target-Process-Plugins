define(["Underscore","jQuery","tau/views/view.container"],function(_,$,ViewBase){return ViewBase.extend({"bus initialize":function(evt){},"bus initialize+boardSettings.ready":function(evt){this.startLifeCycle(_.values(evt)[0],_.values(evt)[1].data.boardSettings)},"bus append.child.element":function(evt){},"bus refresh":function(){this.destroyChildren(),this.startLifeCycle()},startLifeCycle:function(evt,boardSettings){boardSettings=boardSettings||this.boardSettings;var self=this;self.setDefaultConfig(),_.extend(self.config,(evt||{}).data),self.boardSettings=boardSettings;var children=self.config.children;self.children=[],boardSettings.get({fields:["viewMode"],callback:function(r){var viewMode=r.viewMode,strategy={board:{componentType:"board.plus"},list:{componentType:"board.plus.list"},newlist:{componentType:"board.plus.newlist"},timeline:{componentType:"board.plus.timeline"}};_.forEach(self.config.children,function(v,k){v.name=="board_plus"&&(self.config.children[k].type=strategy[viewMode].componentType)}),self.fire("beforeInit",{config:self.config});var loadDependencies=_.isArray(children)&&_.size(children)>0&&self.config.visible;if(loadDependencies){var components=self.config.children,context=self.config.context||{};self.fire("createComponents",{components:components,context:context})}else self.completeInitializationWithoutChildren()}})}})})