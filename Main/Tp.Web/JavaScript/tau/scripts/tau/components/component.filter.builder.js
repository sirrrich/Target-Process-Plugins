define(["require","Underscore","jQuery","./component.creator","template!tau/ui/templates/empty","tau/components/filter.builder/extensions/filter.builder.extension","tau/components/filter.builder/integration/entity.filter.builder.input.context","tau/components/filter.builder/integration/entity.filter.builder.integration","tau/components/filter.builder/meta/entity.filter.builder.meta.info"],function(e){var t=e("Underscore"),n=e("jQuery"),i=e("./component.creator"),r=e("template!tau/ui/templates/empty"),o=e("tau/components/filter.builder/extensions/filter.builder.extension"),u=e("tau/components/filter.builder/integration/entity.filter.builder.input.context"),l=e("tau/components/filter.builder/integration/entity.filter.builder.integration"),a=e("tau/components/filter.builder/meta/entity.filter.builder.meta.info");return{create:function(e){var t={extensions:[o],template:r};return i.create(t,e)},renderEntityFilterBuilderForInput:function(e){var i=e.input,r=e.entityTypes,o=new a(e.configurator,r);if(!o.areAllTypesSupported())return{destroy:t.noop};var d=n("<div></div>"),s=new l({htmlElement:i,builderContainerElement:d,createComponentInContainer:function(e){var t=this.create({builderDataContext:new u(i),builderMetaInfo:o,chooseDefaultFields:a.chooseDefaultFields});return t.on("afterRender",function(t,n){e.append(n.element)}),t.initialize({context:{}}),t}.bind(this)});return s.integrateWithInput(),{destroy:s.destroy.bind(s)}}}});