define(["tau/core/templates-factory","tau/ui/templates/common/ui.template.attributeValue"],function(e){var s={name:"iteration-progress-bar",markup:['<div class="entity-progress-box">','   <div class="ui-progressbar__data">','      <span class="ui-label-completed">Completed&nbsp;<b class="value">${effortCompleted}${point}</b></span>','      <span class="ui-label-todo">ToDo&nbsp;<b class="value">${effortToDo}${point}</b></span>',"   </div>",'   <div class="ui-progress-bar-progress ui-progressbar__progress">',"{{if percentCompleted !== 0 }}",'      <span class="ui-progress-progress ui-progressbar__progress__indicator" style="width:${ Math.round(percentCompleted) < 15 ? 15 : Math.round(percentCompleted) }%;">','         <span class="ui-label ui-progressbar__progress__label"><b class="value">${ Math.round(percentCompleted) }%</b></span>',"      </span>","{{/if}}","   </div>","</div>"],dependencies:["common-attributeValue"]};return e.register(s)});