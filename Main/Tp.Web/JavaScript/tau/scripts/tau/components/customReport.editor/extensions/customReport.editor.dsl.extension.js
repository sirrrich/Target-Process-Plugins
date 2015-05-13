define(["require","jQuery","tau/core/extension.base","libs/aceEditor/aceEditor","../customReport.builder"],function(t){var e=t("jQuery"),i=t("tau/core/extension.base"),r=t("libs/aceEditor/aceEditor"),n=t("../customReport.builder");return i.extend({init:function(t){this._super(t),this._lastTick=null},"bus beforeInit:last + boardSettings.ready:last + afterRender + configurator.ready:last":function(t,i,s,o,a){var d=s.boardSettings,u=e(o.element),c=a.getLoggedUser(),l=a.getBoardAccessService(),g=l.isEditable(d.settings,c),f=r.setEditor(u.find(".i-role-report-dataSource"),this.bus,{readOnly:!g}),p=r.setEditor(u.find(".i-role-report-definition"),this.bus,{readOnly:!g});e.when(f,p).then(function(t,e){this._onBoardSettingsChanged(d,t,e),u.find(".i-role-apply-chartSettings").click(function(){if(g){taus.track("customReport",{action:"applyFromDsl"}),this._lastTick=(new Date).getTime();var i=n.createFromRawData(d,t.getValue(),e.getValue(),this._lastTick);this._setAcidToBoardSettings(i.reportSettings,d,a),i.isReportGuessed&&e.setValue(JSON.stringify(i.reportSettings.report,null,4),1)}}.bind(this))}.bind(this))},"bus editors.updated + show":function(t,e){e.dataDefinitionEditor.resize(),e.reportDefinitionEditor.resize()},"bus boardSettings.ready:last + destroy":function(t,e){e.boardSettings.unbind(this)},_setAcidToBoardSettings:function(t,e,i){var r=t.dataSource.global&&t.dataSource.global.acid;if(e.set({set:{acid:r||""}}),r){var n=i.getAppStateStore();n.set({set:{acid:r}})}},_onBoardSettingsChanged:function(t,e,i){t.unbind({listener:this}),t.bind({listener:this,fields:["reportSettings"],callback:function(t){t.reportSettings.tick!==this._lastTick&&(e.setValue(JSON.stringify(t.reportSettings.dataSource,null,4),1),i.setValue(JSON.stringify(t.reportSettings.report,null,4),1),this.fire("editors.updated",{dataDefinitionEditor:e,reportDefinitionEditor:i}))}})},_parseDefinition:function(t){return JSON.parse(t)}})});