define(["require","./editor.adapter.full.context"],function(e){var t=e("./editor.adapter.full.context");return t.extend({adaptEditorData:function(e,t){var a=this._super(e,t);return a.cf},_initEditor:function(e,t){this._super(e,t,{savingEvent:"beforeSave",savedEvent:"afterSave",saveFailedEvent:"saveFailed",finishedEvent:"afterSave"})}})});