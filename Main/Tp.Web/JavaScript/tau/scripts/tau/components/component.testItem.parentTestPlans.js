define(["require","Underscore","tau/components/component.entity.new.list","tau/components/board.new.list/views/sortingBehavior","tau/components/board.new.list/views/resizableBehavior","tau/components/board.new.list/storeListenerBehavior","tau/components/board.new.list/views/contextMenuBehavior","tau/components/board.new.list/views/unitEditorBehavior","tau/components/entity.new.list/card-context-menu/menu-action-item-unlink"],function(e){var t=e("Underscore"),n=e("tau/components/component.entity.new.list"),i=e("tau/components/board.new.list/views/sortingBehavior"),o=e("tau/components/board.new.list/views/resizableBehavior"),s=e("tau/components/board.new.list/storeListenerBehavior"),r=e("tau/components/board.new.list/views/contextMenuBehavior"),a=e("tau/components/board.new.list/views/unitEditorBehavior"),d=e("tau/components/entity.new.list/card-context-menu/menu-action-item-unlink");return{create:function(e){return e.definition=t.extend({cells:{types:["testplan"]},cardSettings:{list_testplan:{list:[[{id:"list_name_unit",order:0},{id:"general_entity_id",order:1},{id:"project_long",order:2},{id:"team_name_long",order:3}]]}}},e.definition||{}),e=t.extend(e,{behaviors:[i,o,s,r,a],listOptions:{disableDetailsViewForTypes:["testplan"],quickAddOptions:{disabled:!0},contextMenu:{showSelectors:[".tau-board-list-view__inner .i-role-card"],skipShowSelectors:[".tau-id",".tau-bubble *"],items:[d]}}}),n.create(e)}}});