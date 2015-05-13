define(["require","Underscore","accounting","tau/utils/utils.date","tau/models/board.customize.units/const.customField.types"],function(e){var t=e("Underscore"),r=e("accounting"),n=e("tau/utils/utils.date"),i=e("tau/models/board.customize.units/const.customField.types");return{isNA:function(e){return null===e?!1:t.isNaN(e)?!0:"NaN"===e?!0:t.isNumber(e)&&-7.922816251426434e28==e?!0:t.isString(e)&&"n/a "==e?!0:(t.isString(e)||t.isDate(e))&&n.isMinimalDate(e)?!0:!1},getUnits:function(e){return e.units?e.units:""},formatMoney:function(e,n){if(this._isNullOrEmpty(e))return"";var i=t.isNumber(e)?parseFloat(e):this.moneyToNumber(e,n);return r.formatMoney(i,"",n.currencyDecimalDigits,n.currencyGroupSeparator,n.currencyDecimalSeparator)},moneyToNumberString:function(e,t){if(this._isNullOrEmpty(e))return"";var r=new RegExp(t.currencyGroupSeparator,"g");return e.replace(r,"")},moneyToNumber:function(e,t){var r=".",n=t.currencyDecimalSeparator,i=this.moneyToNumberString(e,t);return parseFloat(n===r?i:i.replace(new RegExp(n,"g"),r))},getMoneyMask:function(e){return["^[0-9]*([",e.currencyDecimalSeparator,"][0-9]{0,",e.currencyDecimalDigits,"})?$"].join("")},formatCustomField:function(e,r,n,u){if(this._isNullOrEmpty(e.value))return"";if(this.isNA(e.value))return"n/a";var o=n?" "+this.getUnits(e):"";switch(e.type.toLowerCase()){case i.MONEY:return this.formatMoney(e.value,r)+o;case i.NUMBER:return Math.round(100*e.value)/100+o;case i.DATE:return u(e);default:return t.escape(e.value)}},getMoneyEditWidgetConfig:function(e,t,r,n){return{mask:this.getMoneyMask(r),restoreText:!1,onSave:function(i){var u=this.moneyToNumber(i,r),o=this.moneyToNumber(e.value,r);n(o,u)&&t.fire("save",{customFields:[{name:e.name,type:e.type,value:isNaN(u)?"":u}]})}.bind(this)}},bindMoneyWidget:function(e,t){e.focus(function(){e.text(this.moneyToNumberString(e.text(),t))}.bind(this)),e.focusout(function(){e.text(this.formatMoney(e.text(),t))}.bind(this))},_isNullOrEmpty:function(e){return null===e||""===e}}});
