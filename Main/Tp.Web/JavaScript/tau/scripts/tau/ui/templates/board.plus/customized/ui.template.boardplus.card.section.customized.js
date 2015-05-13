define(["Underscore","tau/core/templates-factory","tau/ui/extensions/board.plus/ui.board.plus.utils"],function(t,e,i){var n={name:"boardplus.card.section.customized",engine:"jqote2",customFunctions:{getSectionAdditionalClass:i.getClassForCustomizeSection,isLazy:function(t,e){return t===!1?!1:e.unit.lazy},getData:function(t,e,i){return e.unit.lazy&&t!==!1?e.unit.sampleData:i[e.unit.id]},renderSingleUnit:function(t,e,i){var n=[{settings:{metaData:{alignment:e.alignment,id:e.id}},data:i[e.id],type:i.cardData.type.toLowerCase(),configurator:t}];return this.sub(e.unit.getTemplateName("card"),n)}},markup:["<% var data = this.data, configurator = this.configurator; %>",'<div class="tau-card-v2__section <%=fn.getSectionAdditionalClass(this.section)%>">',"<%this.section.forEach(function(item){%>","    <%= fn.renderSingleUnit(configurator, item, data) %>","<%});%>","</div>"],dependencies:[]};return e.register(n)});