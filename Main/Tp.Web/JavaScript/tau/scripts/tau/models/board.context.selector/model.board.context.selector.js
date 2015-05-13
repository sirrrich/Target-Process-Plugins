define(["Underscore","tau/models/board.context.selector/model.board.context.selector.base"],function(t,e){var r=function(t){return t.program},s=function(t){return function(e){return e.program.id==t.id}},o=e.extend({getData:function(e,o,i,n){var c=this._super(e,o,n),a=t.filter(c.projects,r),g=t.difference(c.projects,a),u=t.map(i,function(e){return this._getProgramListItem(e,t.filter(a,s(e)))},this);return c.projects=this._sort(t.concat([g,u])),c},getProgram:function(e,r){var s=t.map(e.projects,this._getProjectListItem.bind(this,this._getSelectedOnViewProjectIds(r)));return this._getProgramListItem(e,s)},_getProjectListItem:function(e,r){return t.extend(this._getListItem(r,"Project"),{selected:t.contains(e,r.id)})},_getProgramListItem:function(e,r){var s=this._getListItem(e,"Program");return s.projects=r,s.selected=r.length>0&&t.all(r,t.matches({selected:!0})),s},_getListItem:function(t,e){var r=this._super(t,e);return this._isProject(e)&&(r.program=t.program),this._isProject(e)&&(r.process=t.process),r.type=e,r},_getModelData:function(t,e,r){return{acid:t.acid,teams:e.list,projects:r.list,loggedUser:t.loggedUser}}});return o});