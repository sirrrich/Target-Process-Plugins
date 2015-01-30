define(["require","Underscore"],function(t){var i=t("Underscore");return{fixSortable:function(t){this._fixWidgetContainmentLogic(t),this._fixWidgetScrollLogic(t)},fixHelperScrollParent:function(t,s){t._createHelper=i.wrap(t._createHelper.bind(t),function(i,e){var o=i(e);return o.scrollParent=s.sortableScrollParent.bind(s,t,o),o}.bind(this))},_fixWidgetContainmentLogic:function(t){t._generatePosition=i.wrap(t._generatePosition.bind(t),function(t,i){if(this.containment){var s=this.containment[3]+this.offset.click.top-11;i.pageY>s&&(i.pageY=s)}return t(i)})},_fixWidgetScrollLogic:function(t){t.options.connectWith||(t._mouseDrag=function(t){var i,s,e,o,r=this.options,n=!1;if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll){var l=this.scrollParent[0];if(l!==document&&"HTML"!==l.tagName){if(this.overflowOffset.top+l.offsetHeight-t.pageY<r.scrollSensitivity){var c=this.items[this.items.length-1];c.item[0]===this.currentItem[0]&&(c=this.items[this.items.length-2]);var h=c?c.top+c.height:0,a=h-this.positionAbs.top;a>0&&(l.scrollTop=n=l.scrollTop+Math.min(r.scrollSpeed,a))}else t.pageY-this.overflowOffset.top<r.scrollSensitivity&&(l.scrollTop=n=l.scrollTop-r.scrollSpeed);this.overflowOffset.left+l.offsetWidth-t.pageX<r.scrollSensitivity?l.scrollLeft=n=l.scrollLeft+r.scrollSpeed:t.pageX-this.overflowOffset.left<r.scrollSensitivity&&(l.scrollLeft=n=l.scrollLeft-r.scrollSpeed)}else{var p=$(document);t.pageY-p.scrollTop()<r.scrollSensitivity?n=p.scrollTop(p.scrollTop()-r.scrollSpeed):$(window).height()-(t.pageY-p.scrollTop())<r.scrollSensitivity&&(n=p.scrollTop(p.scrollTop()+r.scrollSpeed)),t.pageX-p.scrollLeft()<r.scrollSensitivity?n=p.scrollLeft(p.scrollLeft()-r.scrollSpeed):$(window).width()-(t.pageX-p.scrollLeft())<r.scrollSensitivity&&(n=p.scrollLeft(p.scrollLeft()+r.scrollSpeed))}n!==!1&&$.ui.ddmanager&&!r.dropBehaviour&&$.ui.ddmanager.prepareOffsets(this,t),n!==!1&&this.refreshPositions(!0)
}for(this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],e=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&e!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==e&&!$.contains(this.placeholder[0],e)&&("semi-dynamic"===this.options.type?!$.contains(this.element[0],e):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),$.ui.ddmanager&&$.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1})}}});