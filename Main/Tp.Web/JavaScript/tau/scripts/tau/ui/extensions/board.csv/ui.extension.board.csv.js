define(["jQuery","Underscore","tau/components/extensions/component.extension.base","tau/libs/boardSettings/board.settings.to.definition.translator","tau/slice/url.resolver","tau/slice/slice.definition.transformations","tau/core/query"],function(e,t,r,i,n,o,a){return r.extend({"bus beforeInit":function(e,t){this.formSubmitter=t.config.formSubmitter||this.formSubmitterImpl,this.fire("dataBind",{})},"bus afterRender + boardSettings.ready:last + configurator.ready:last":function(r,a,d,s){var u=d.boardSettings,f=a.view.config.context.configurator.getAppStateStore(),c=a.element,m=new n({prefix:"matrix"}),l=m.resolveUrl("csv"),v=this;c.on("click",".i-role-export-to-csv",function(){var r=e(this);new i(u,f).getBoardDefinition().then(function(e){var i=o.createSliceDefinitionFromBoardSettings(e.definition),n=t.pick(s.service("currentBoard").sliceInfo,["x","y"]);i.where=v.createWhere(n),v.fire("ready.to.submit",{$el:r,definition:i,url:l,boardName:u.settings.name,viewMode:u.settings.viewMode})})})},"bus ready.to.submit":function(e,t){this.formSubmitter(t)},createWhere:function(e){var r=e||{},i=t.reduce(r,function(e,r,i){if(r.data.length){var n=t.pluck(r.data,"id"),o=t.every(n,function(e){return void 0==e});if(o){var a=t.pluck(r.data,i);n=a}e[i]={$in:n}}return e},{});return a.render(i)},formSubmitterImpl:function(t){var r=e('<form id="csvForm" action="'+t.url+'" method="POST" target="_blank"></form>'),i=e('<input type="hidden" name="parameters"/>'),n=e('<input type="hidden" name="boardName"/>'),o=e('<input type="hidden" name="where"/>'),a=e('<input type="hidden" name="viewMode"/>');i.val(JSON.stringify(t.definition)),n.val(t.boardName),o.val(t.definition.where),a.val(t.viewMode),t.$el.wrap(r),t.$el.after(i),t.$el.after(n),t.$el.after(o),t.$el.after(a),t.$el.parent().submit(),i.remove(),n.remove(),o.remove(),a.remove(),t.$el.unwrap()}})});