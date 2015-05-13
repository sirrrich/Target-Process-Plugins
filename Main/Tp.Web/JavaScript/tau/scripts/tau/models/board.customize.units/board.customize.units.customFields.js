define(["require","Underscore","tau/const/entityType.names","tau/models/board.customize.units/const.card.sizes","tau/models/board.customize.units/const.customField.types","tau/services/customize/service.customize.units.customField.sampleData","tau/models/board.customize.units/board.customize.units.base","tau/utils/utils.customFields","./board.customize.units.interaction"],function(t){var e=t("Underscore"),a=t("tau/const/entityType.names"),i=t("tau/models/board.customize.units/const.card.sizes"),s=t("tau/models/board.customize.units/const.customField.types"),u=t("tau/services/customize/service.customize.units.customField.sampleData"),o=t("tau/models/board.customize.units/board.customize.units.base"),n=t("tau/utils/utils.customFields"),c=t("./board.customize.units.interaction"),d=c.openUnitEditor.bind(c),l={};l[s.TEXT]="customField.text.editor",l[s.NUMBER]="customField.number.editor",l[s.MONEY]="customField.money.editor",l[s.DATE]="customField.date.editor",l[s.DROP_DOWN]="customField.dropdown.editor";var r=[i.XS,i.S,i.M,i.L,i.XL],m=r.concat(i.LIST),_={formatText:function(t,a,i,s){if(!a)return"";var u=i&&i.isDesignMode;return u?s?"Value for "+e.escape(a.value):e.escape(a.value):n.formatCustomField(a,t.getSystemInfo().culture,!0,function(t){return['<div class="tau-board-unit__value_type_day">',this.formatDayShort(t.value),"</div>",'<div class="tau-board-unit__value_type_month">',this.formatDate(t.value,"MMM"),"</div>",'<div class="tau-board-unit__value_type_year">',this.formatDate(t.value,"yyyy"),"</div>"].join("")}.bind(this))},formatTextForTitle:function(t,e){return!e||n.isNA(e.value)||null===e.value?"":n.formatCustomField(e,t.getSystemInfo().culture,!1,function(t){return[this.formatDayShort(t.value),this.formatDate(t.value,"MMM"),this.formatDate(t.value,"yyyy")].join(" ")}.bind(this))},type:function(t){var e=t.cf;return e&&e.value&&e.value.entityKind?e.value.entityKind.toLowerCase():"none"},getRelationsCount:function(t){return(t.cf.value||"").split(",").length}},f=function(t){var e=t.cf,a=e&&e.value&&e.value.entityKind&&e.value.entityKind.toLowerCase();
return"tau-board-unit_type_"+a},v=function(t){return t&&t.cf&&t.cf.value?"tau-board-unit_type_custom-checkbox-checked":"tau-board-unit_type_custom-checkbox"},p=[{id:"custom_field__long__{{name}}",classId:"tau-board-unit_type_custom_field_long",customFieldTypes:[s.TEXT,s.DATE,s.NUMBER,s.MONEY,s.MULTIPLE_LIST,s.DROP_DOWN],sizes:r,sections:1,template:{markup:['<div class="tau-board-unit__value">',"<%!fn.trim(this.data.cf.name,10)%>: ","<%=fn.formatText(this.configurator, this.data.cf, this.settings, true)%>","</div>"]}},{id:"custom_field__short__{{name}}",classId:"tau-board-unit_type_custom_field_short",sizes:r,customFieldTypes:[s.TEXT,s.DATE,s.NUMBER,s.MONEY,s.DROP_DOWN],template:{markup:['<div class="tau-board-unit__value">',"<%=fn.formatText(this.configurator, this.data.cf, this.settings)%>","</div>"]}},{id:"custom_field__100__{{name}}",sections:1,classId:"tau-board-unit_type_custom_field_100",customFieldTypes:[s.TEXT,s.DATE,s.NUMBER,s.MONEY,s.MULTIPLE_LIST,s.DROP_DOWN],listSettings:{title:"<%=fn.formatTextForTitle(this.configurator, this.data.cf)%>"},template:{markup:['<div class="tau-board-unit__value">',"<%=fn.formatText(this.configurator, this.data.cf, this.settings)%>","</div>"]},interactionConfig:{isEditable:function(t){var e=t.data.cf;return e&&e.type&&!!l[e.type.toLowerCase()]&&!e.calculationModel},handler:function(t,e){var a=l[t.cardDataForUnit.cf.type.toLowerCase()];return d(a,{})(t,e)}}},{id:"custom_field__entity_id__{{name}}",classId:function(t){return"tau-board-unit_type_custom-related-entity tau-board-unit_type_id "+f(t)+"-id"},customFieldTypes:[s.ENTITY],template:{markup:["<% if (this.data.cf && this.data.cf.value && this.data.cf.value.entityKind){ %>","<%= fn.generateEntityLink(this, this.data.cf.value, this.data.cf.value.entityKind) %>","<% } %>"]},listSettings:{title:'<%= this.data.cf && this.data.cf.value ? this.data.cf.value.name : ""%>'}},{id:"custom_field__url_short__{{name}}",classId:"tau-board-unit_type_custom-url",customFieldTypes:[s.URL],template:{markup:['<div class="tau-board-unit__value">',"<%=fn.buildLink(this, this.data, true)%>","</div>"]},listSettings:{title:'<%= this.data.cf && this.data.cf.value ? this.data.cf.value.label : ""%>'}},{id:"custom_field__url_line__{{name}}",classId:"tau-board-unit_type_custom-url",customFieldTypes:[s.URL],sections:1,sizes:r,template:{markup:['<div class="tau-board-unit__value">',"<%=fn.buildLink(this, this.data, false)%>","</div>"]}},{id:"custom_field__checkbox_short__{{name}}",classId:function(t){return"tau-board-unit_type_custom-checkbox-short "+v(t)
},customFieldTypes:[s.CHECK_BOX],template:{markup:[""]},hideIf:function(t){return!t||!t.cf||!t.cf.name}},{id:"custom_field__checkbox__{{name}}",classId:v,sizes:r,customFieldTypes:[s.CHECK_BOX],template:{markup:['<div class="tau-board-unit__value"><%!fn.trim(this.data.cf.name,15)%></div>']},hideIf:function(t){return!t||!t.cf||!t.cf.name}},{id:"custom_field__checkbox_long__{{name}}",classId:v,customFieldTypes:[s.CHECK_BOX],sections:1,sizes:r,template:{markup:['<div class="tau-board-unit__value"><%! this.data.cf.name %></div>']},hideIf:function(t){return!t||!t.cf||!t.cf.name}}];o.pushClones(p,{classId:function(t){return"tau-board-unit_type_custom-related-entity "+f(t)},customFieldTypes:[s.ENTITY],template:{markup:['<div class="tau-board-unit__value">',"<% if (this.data.cf && this.data.cf.value) { %>","<%!this.data.cf.value.name%>","<% } %>","</div>"]}},[{id:"custom_field__entity_long__{{name}}",sections:1,sizes:r},{id:"custom_field__entity_name__{{name}}",sizes:m}]);var y=function(t){return null===t.cf.value||void 0===t.cf.value||""===t.cf.value};return e.each(p,function(t){t=e.defaults(t,{category:"custom fields",priority:1,model:'cf:CustomValues.Get("{{name}}")',name:"{{name}}",types:[a.EPIC,a.FEATURE,a.STORY,a.TASK,a.BUG,a.REQUEST,a.TEST_CASE,a.IMPEDIMENT,a.ITERATION,a.TEAM_ITERATION,a.RELEASE,a.TEST_PLAN,a.TEST_PLAN_RUN,a.BUILD,a.PROJECT],sizes:m,hideIf:y}),t.template.customFunctions=_,t.sampleData||(t.sampleData={cf:{name:"{{name}}",type:t.customFieldTypes[0],value:u[t.customFieldTypes[0]]}}),t.hideIf=e.wrap(t.hideIf,function(e,a){return!a.cf||t.customFieldTypes.indexOf(a.cf.type.toLowerCase())<0||e(a)})}),p});