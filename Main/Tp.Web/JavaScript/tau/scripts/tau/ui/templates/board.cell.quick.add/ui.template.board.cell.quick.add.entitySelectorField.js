define(["Underscore","tau/core/templates-factory","tau/ui/templates/board.cell.quick.add/ui.customFunctions.template.board.cell.quick.add"],function(e,t,a){var i={name:"board.cell.item.quick.add.field.EntitySelector",engine:"jqote2",customFunctions:e.defaults(a,{entity:{TestPlanSelector:{uniqueName:"testplanselector",type:"testplan",placeholder:"Test Plan",transformFilter:function(e){return e}},UserStorySelector:{uniqueName:"userstories",type:"userstory",placeholder:"User Story",transformFilter:function(e){return e}},ReleaseSelector:{uniqueName:"releaseselector",type:"release",placeholder:"Release",transformFilter:function(e,t){return e.project&&t.isFeatureEnabled("release.crossproject")&&(e.init_dsl="projects.count() < 2"),e}},UserSelector:{uniqueName:"usersselector",type:"user",placeholder:"User",model:"user",transformFilter:function(e){return e}}}}),markup:['<div class="tau-field tau-field_entity tau-related-add-present">',"   <% var field = this.field; %>","   <% var entity = fn.entity[field.type]; %>","   <% var filter = entity.transformFilter(field.options.filter, fn); %>",'   <div tabindex="0" class="tau-userStorySelector releaseSelector">',"       <input type=\"hidden\" data-entityuniquename='<%=entity.uniqueName%>' ",'               data-validate=\'{"caption":"<%=field.caption%>","rules":<%=fn.getValidationRules(field, [], \'entityRequired\')%>}\' ','               name="<%=field.id%>" class="tau-required-field-editor <%=field.id%>" placeholder="<%=field.caption%>" data-fieldname="<%=field.id%>" ',"               data-filter='<%=JSON.stringify(filter)%>' data-fieldtype=\"<%=field.type%>\">",'           <span class="userStorySelector ui-link">','               <em class="tau-entity-icon tau-entity-icon--userstory tau-linkentity__icon" style="display: none;"></em>','               <span class="tau-linkentity__inner tau-linkentity__inner_placeholder"><%=this.caption || entity.placeholder%></span>',"           </span>","   </div>","   <div class=\"tau-userStorySelector__control\" data-name='<%=entity.uniqueName%>'>","       <span runas=\"finder.entity\" data-context:general='' data-name='<%=entity.uniqueName%>' ","               data-entity-type='<%=entity.type%>' data-filterenabled='true'","               data-is-add-possible='true' data-field-caption='<%=field.caption%>'","               data-filter='<%=JSON.stringify(filter)%>' data-model='<%=entity.model%>'></span>","   </div>",'   <button type="button" class="tau-btn tau-success btn-plus tau-related-quick-add i-role-related-quick-add"></button>',"</div>"]};
return t.register(i)});