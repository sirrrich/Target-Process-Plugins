!function(){window.jsErrors=[],require(["require.config","jQuery","Underscore","tau/core/tau","tests/integration/specs"],function(e,n,a,r,s){var t=function(e){return e.replace(/ /g,"_")};s.on("progress",function(e){var a=e.data;n(".progress-bar>span").width(a.percent+"%"),a.failed>0&&n(".progress-bar").removeClass("green").addClass("orange")}),s.on("executing",function(e){var a=e.data;n("#"+t(a.name)).removeClass("notRun").addClass("executing")});var o=[];s.on("completed",function(){window.allTestsCompleted=!0,a.each(o,function(e){window.jsErrors.push("Scenario ["+e.name+"] failed")})}),s.on("success",function(e){var a=e.data;n("#"+t(a.name)).removeClass("executing").removeClass("notRun").addClass("passed")}),s.on("failure",function(e){var a=e.data;n("#"+t(a.name)).removeClass("executing").removeClass("notRun").addClass("failed"),o.push(a)}),a.each(a(s.scenarios).keys(),function(e){n('<div class="test notRun" id="'+t(e)+'"></div>').text(e).appendTo(".tests-panel").click(function(){var n=document.location.href.split("?")[0]+"?filter="+encodeURI(e);document.location.href=n})});var i={filter:decodeURI(r.getValueFromQueryString("filter"))};s.executeStepByStep(i)})}();