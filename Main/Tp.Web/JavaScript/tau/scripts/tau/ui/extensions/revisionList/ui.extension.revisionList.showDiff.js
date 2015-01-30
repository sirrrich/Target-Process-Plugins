define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tp/plugins/pluginsRepository","tp/plugins/commandGateway","tp/plugins/vcs/viewDiff/sourcePopup","tp/plugins/vcs/viewDiff/diffPopup"],function(e,i,t,n,o,a,s){var r=["Subversion","Git","Mercurial","TFS"];return t.extend({plugins:[],"bus afterRender+dataBind":function(t,f,u){var c=this.plugins,d=e.pluck(u.items,"id"),p=this;e.each(r,function(t){var r={pluginName:t},u=new o(r),l={extension:this,pluginName:t,commandGateway:u,revisions:d,viewSourcePopup:new a({bus:p.bus}),viewDiffPopup:s,getImportedRevisions:function(){this.commandGateway.execute("GetImportedRevisions",this.revisions,e.bind(this.getImportedRevisionsSuccess,this))},getImportedRevisionsSuccess:function(e){if(0!==e.length){for(var t=f.element,n={},o=0;o<e.length;o++)n[e[o]]=!0;t.find(".ui-revisionList > tbody").each(function(e){var t=i(this),o=t.tmplItem().data;n.hasOwnProperty(o.id)&&e.attachViewDiffBehaviourForElement(t)},[this])}},attachViewDiffBehaviourForElement:function(e){var t=e.tmplItem().data,n=e.find(".files");n.each(function(e){var n=i(this),o=n.tmplItem().data,a=n.find(".vcsViewDisabled");if("Deleted"!=o.fileAction&&(a.attr("href","#").removeAttr("disabled").addClass("vcsView"),a.click(function(i){i.preventDefault(),e.showView(t.id,t.sourceControlId,o.fileName)}),a.removeClass("vcsViewDisabled")),"Modified"===o.fileAction){var s=n.parent().find(".diff");s.append(i('<a href="#" class="_diff button small">Diff</a>').click(function(i){i.preventDefault(),e.showDiff(t.id,t.sourceControlId,o.fileName)}))}},[this])},showView:function(e,i,t){var n=p.config;n.context.configurator.getKeyBoardManager().pushHandler({handleKeyDown:function(e){27==e.keyCode&&n.context.configurator.getKeyBoardManager().popHandler()}}),this.viewSourcePopup.loading();var o=this;this.commandGateway.execute("ViewSource",{TpRevisionId:e,Path:t},function(e){var n=e.Content||"File is empty";o.viewSourcePopup.view(i,n,t)},null,this.showError)},showDiff:function(e,i,t){var n=p.config;
n.context.configurator.getKeyBoardManager().pushHandler({handleKeyDown:function(e){27==e.keyCode&&n.context.configurator.getKeyBoardManager().popHandler()}}),this.viewDiffPopup.loading();var o=this;this.commandGateway.execute("ViewDiff",{TpRevisionId:e,Path:t},function(e){o.viewDiffPopup.view(i,e,t)},null,this.showError)},showError:function(e){i("<div />").html('<p class="p-15">'+e+"</p>").popup({title:"Error occurred",fitToWindow:!1})}};c[t]=l,n.pluginStartedAndHasAtLeastOneProfile(t,e.bind(l.getImportedRevisions,l))},this)}})});