define(["jQuery","Underscore","tau/components/extensions/component.extension.base","libs.tests/nodeunit/nodeunit","libs/underscore/underscore.string","libs/parseUri","tau/configurator","tau/utils/utils.storage"],function($,_,ExtensionBase,nodeunit,ext,parseUri,globalConfigurator,storage){return ExtensionBase.extend({"bus afterInit":function(evt){$.fx.off=!0;var files=_.compact(evt.data.config.files),options=parseUri(document.location.href).queryKey;_.forEach(options,function(value,key){options[key]=decodeURIComponent(value)});var req=_.deepClone(options),defaults={file:"",filter:"",data:"local",view:"list",shuffle:!1,failOnFirst:!1,execution:"serial"};options.apply?(_.defaults(options,defaults),delete options.apply,storage.set("testrunner.nodeunit",options)):options.reset?(delete options.reset,options=defaults,storage.set("testrunner.nodeunit",options)):options.reset_filters&&(delete options.reset_filters,options.file="",options.filter="",storage.set("testrunner.nodeunit",options)),options=_.defaults(options,storage.get("testrunner.nodeunit")||defaults),req.file&&!req.filter&&(options.filter=""),options.filter=options.filter.replace(/\+/g," "),options.file=options.file.replace(/\+/g," "),globalConfigurator.setConfig("real",options.data=="remote"),options.bus=this.bus,options.file&&(files=_.filter(files,function(testFile){return testFile.search(options.file)==0}));var self=this;require(files,function(){var modules=_.compact(_.toArray(arguments));_.forEach(modules,function(module,key){files[key]?module.file=files[key]:module.file="",module.name||(module.name=_.camelCase(module.file)),module.id="module_"+_.uniqueId()});if(options.filter){var found=[];found=_.filter(modules,function(module){return module.name.search(options.filter)==0}),found.length==0&&(found=_.filter(modules,function(module){return options.filter.search(module.name)==0})),modules=found}self.fire("dataBind",{modules:modules,options:options,useragent:navigator.userAgent,href:window.location.href}),nodeunit.run(modules,options)})}})})