define(["jQuery","tau/core/extension.base.stateful"],function($,ExtensionBase){return ExtensionBase.extend({"bus boardSettings.ready:last + afterRender":function(evt){var configurator=this.config.context.configurator,boardSettings=evt["boardSettings.ready"].data.boardSettings,$el=evt.afterRender.data.element,$buttonRemove=$el.find("[role=action-remove]");$buttonRemove.tauConfirm({content:["<h3>"+$buttonRemove.data("confirmMessage")+"</h3>"].join(""),callbacks:{success:_.bind(function(){var storage=configurator.getRestStorage(),id=boardSettings.settings.id;storage.remove(boardSettings.getGroupName(),{$key:id}).done(function(){this.fire("remove.board",{board:{id:id}}),configurator.getHistory().exclude(id);var prev=configurator.getHistory().pop(),prevId="current";configurator.getRouting().redirect(configurator.getUrlBuilder().getRelativeBoardUrl(prevId))}.bind(this))},this)},zIndex:130})}})})