define(["Underscore","tau/core/class","tau/utils/utils.date","libs/date.js/build/date","tau/utils/timeline/utils.timeline.date.position.calculator"],function(t,e,n,i,a){var s={isMonthFirstMonday:function(t){return t.getDate()<8},isJanuary:function(t){return 0===t.getMonth()},isMonthFirstDay:function(t){return 1===t.getDate()},isYearFirstDay:function(t){return this.isJanuary(t)&&this.isMonthFirstDay(t)},moveToBeginningOfDay:function(t){return t.setHours(0).setMinutes(0).setSeconds(0).setMilliseconds(0)}},r={year:function(t){return n.formatAs(t,"yyyy")},monthAndYear:function(t){return n.formatAs(t,"MMM yyyy")},month:function(t){return n.formatAs(t,"MMM")},fullDate:function(t){return n.formatAs(t,"d MMM yyyy")},shortDate:function(t){return n.formatAs(t,"d MMM")},date:function(t){return s.isYearFirstDay(t)?this.fullDate(t):this.shortDate(t)},monday:function(t){return s.isMonthFirstMonday(t)?s.isJanuary(t)?this.fullDate(t):this.shortDate(t):t.getDate().toString()},time:function(t){return n.formatAs(t,"H:mm")}},o=e.extend({_spaceBetweenLabels:20,init:function(t,e){this._dateRange=t,this._globalWidth=e},setFirstLabelFormat:function(t){this._firstLabelFormat=t},isFirstLabelSpaceAvailable:function(t,e,n,i,a){var s=this._globalWidth*t.originalWidth*(i-e)+this._globalWidth*t.width-a/2;return s>=n+this._spaceBetweenLabels},setSegmentFirstLabel:function(t,e,n,i,a){if(this.isFirstLabelSpaceAvailable(t,e,n,i,a)){t.label=void 0;var s=t.start<this._dateRange.startDate?this._dateRange.startDate:t.start;t.firstLabel=this._firstLabelFormat(s)}},checkFirstLabel:function(e,n){var i=t.find(e,function(e){return!t.isUndefined(e.firstLabel)});if(t.isUndefined(i)){var a;for(a=0;a<e.length;a++)if(e[a].label&&!e[a].partStart&&n(e[a])){e[a].label=this._firstLabelFormat(e[a].start);break}}},isPartContentAvailable:function(t,e){return this._globalWidth*t>=e}}),h=e.extend({init:function(t,e){this._dateRange=t,this._positionCalculator=a(t),this._firstLabelBuilder=e,this._firstLabelBuilder.setFirstLabelFormat(this._firstLabelFormat)},_minSegmentWidth:30,_minSegmentFirstLabelWidth:45,_minLabelWidth:24,_emptySegmentsCount:10,_firstLabelFormat:r.fullDate,getFirstLabelFormat:function(){return this._firstLabelFormat},isOkForWidth:function(t){return t/(this._dateRange.getDurationInDays()*this._segmentsInDay)>=this._minSegmentWidth},segments:function(){throw new Error("'segments' method not implemented")},_getRawSegments:function(t,e,n){for(var i=[],a=t.clone();e>a;a.add(n)){var s={start:a.clone(),end:a.clone().add(n)};s.start<this._dateRange.startDate?(s.width=this._getWidthForRange(this._dateRange.startDate,s.end),s.originalWidth=this._getWidthForRange(s.start,s.end),s.partStart=!0,s.left=0):(s.left=this._getWidthForRange(this._dateRange.startDate,s.start),s.end>this._dateRange.endDate?(s.width=this._getWidthForRange(s.start,this._dateRange.endDate),s.originalWidth=this._getWidthForRange(s.start,s.end)):(s.width=this._getWidthForRange(s.start,s.end),s.start.getTime()==this._dateRange.startDate.getTime()&&(s.originalWidth=s.width))),s.width>=0&&i.push(s)}return i},_getCurrentSegmentAndSegmentsCount:function(t,e,n){for(var i=t.start.clone(),a=0;!e(i);)i=i.addDays(-n),a++;var s=0;for(i=i.addDays(n);!e(i);)i=i.addDays(n),s++;return{emptySegmentsCount:s,currentSegmentIndex:a}},_getWidthForRange:function(t,e){return parseFloat((this._positionCalculator.getRelativeDatePosition(e)-this._positionCalculator.getRelativeDatePosition(t)).toFixed(12))}}),g=h.extend({_segmentsInDay:24,_emptySegmentsCount:23,_minLabelWidth:30,_minSegmentFirstLabelWidth:70,segments:function(){var e=s.moveToBeginningOfDay(this._dateRange.startDate.clone()),n=this._getRawSegments(e,this._dateRange.endDate,{hours:1});return t.each(n,function(t,e){var n=0===t.start.getHours(),i=t.start.getHours()%4!==0;i||(t.isPeriodStart=n,t.label=n?r.date(t.start):r.time(t.start)),0==e&&this._firstLabelBuilder.setSegmentFirstLabel(t,t.start.getHours(),this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth)}.bind(this)),this._firstLabelBuilder.checkFirstLabel(n,function(t){return 0===t.start.getHours()}),n}}),m=h.extend({_segmentsInDay:6,_minSegmentWidth:45,_emptySegmentsCount:5,_minLabelWidth:30,_minSegmentFirstLabelWidth:70,segments:function(){var e=s.moveToBeginningOfDay(this._dateRange.startDate.clone()),n=this._getRawSegments(e,this._dateRange.endDate,{hours:4});return t.each(n,function(t,e){var n=0===t.start.getHours();t.label=n?r.date(t.start):r.time(t.start),t.isPeriodStart=n,0==e&&this._firstLabelBuilder.setSegmentFirstLabel(t,t.start.getHours()/4,this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth)}.bind(this)),this._firstLabelBuilder.checkFirstLabel(n,function(t){return 0===t.start.getHours()}),n}}),d=h.extend({_minSegmentWidth:45,_minSegmentFirstLabelWidth:70,_segmentsInDay:3,_minLabelWidth:30,_emptySegmentsCount:2,segments:function(){var e=s.moveToBeginningOfDay(this._dateRange.startDate.clone()),n=this._getRawSegments(e,this._dateRange.endDate,{hours:8});return t.each(n,function(t,e){var n=0===t.start.getHours();t.label=n?r.date(t.start):r.time(t.start),t.isPeriodStart=n,0==e&&this._firstLabelBuilder.setSegmentFirstLabel(t,t.start.getHours()/8,this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth)}.bind(this)),this._firstLabelBuilder.checkFirstLabel(n,function(t){return 0===t.start.getHours()}),n}}),l=h.extend({_segmentsInDay:3,_minLabelWidth:30,_emptySegmentsCount:2,_minSegmentFirstLabelWidth:70,segments:function(){var e=s.moveToBeginningOfDay(this._dateRange.startDate.clone()),n=this._getRawSegments(e,this._dateRange.endDate,{hours:8});return t.each(n,function(t,e){var n=0!==t.start.getHours();n||(t.label=r.date(t.start),t.isPeriodStart=!0),0==e&&this._firstLabelBuilder.setSegmentFirstLabel(t,t.start.getHours()/8,this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth)}.bind(this)),this._firstLabelBuilder.checkFirstLabel(n,function(t){return 0===t.start.getHours()}),n}}),u=h.extend({_minSegmentWidth:45,_minSegmentFirstLabelWidth:55,_minLabelWidth:45,_segmentsInDay:1,_emptySegmentsCount:5,_firstLabelFormat:r.monthAndYear,segments:function(){var e=s.moveToBeginningOfDay(this._dateRange.startDate.clone()),n=this._getRawSegments(e,this._dateRange.endDate,{days:1});return t.each(n,function(t,e){var n=s.isMonthFirstDay(t.start);t.label=n?r.monthAndYear(t.start):"",t.content=t.start.getDate().toString(),t.isPeriodStart=n,0==e&&(this._emptySegmentsCount=t.start.getDaysInMonth()-1,this._firstLabelBuilder.setSegmentFirstLabel(t,t.start.getDate()-1,this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth))}.bind(this)),n}}),_=h.extend({_minSegmentWidth:150,_segmentsInDay:1/7,_minSegmentFirstLabelWidth:60,_minLabelWidth:54,_firstLabelFormat:r.monthAndYear,segments:function(){var e=s.moveToBeginningOfDay(this._dateRange.startDate.clone()),n=this._getRawSegments(e,this._dateRange.endDate,{days:1});return t.each(n,function(t,e){if(1==t.start.getDay()&&(t.label=r.monday(t.start),t.isPeriodStart=s.isMonthFirstMonday(t.start)),0==e){var n=this._getCurrentSegmentAndSegmentsCount(t,function(t){return 1==t.getDay()&&s.isMonthFirstMonday(t)},1),i=n.currentSegmentIndex;this._emptySegmentsCount=n.emptySegmentsCount,this._firstLabelBuilder.setSegmentFirstLabel(t,i,this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth)}}.bind(this)),this._firstLabelBuilder.checkFirstLabel(n,function(t){return s.isMonthFirstMonday(t.start)}),n}}),f=h.extend({_minSegmentWidth:50,_segmentsInDay:1/7,_minSegmentFirstLabelWidth:60,_minLabelWidth:54,_firstLabelFormat:r.monthAndYear,_moveBackToMonday:function(t){var e=0===t.getDay(),n=e?-6:1-t.getDay();return s.moveToBeginningOfDay(t.addDays(n))},segments:function(){var e=this._moveBackToMonday(this._dateRange.startDate.clone()),n=this._getRawSegments(e,this._dateRange.endDate,{days:7});return t.each(n,function(t,e){if(t.label=r.monday(t.start),t.isPeriodStart=s.isMonthFirstMonday(t.start),0==e){var n=this._getCurrentSegmentAndSegmentsCount(t,s.isMonthFirstMonday,7),i=n.currentSegmentIndex;this._emptySegmentsCount=n.emptySegmentsCount,this._firstLabelBuilder.setSegmentFirstLabel(t,i,this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth)}}.bind(this)),this._firstLabelBuilder.checkFirstLabel(n,function(t){return s.isMonthFirstMonday(t.start)}),n}}),b=h.extend({_segmentsInDay:1/30,_minSegmentWidth:45,_emptySegmentsCount:11,_firstLabelFormat:r.year,segments:function(){var e=s.moveToBeginningOfDay(this._dateRange.startDate.clone().moveToFirstDayOfMonth()),n=this._getRawSegments(e,this._dateRange.endDate,{months:1});return t.each(n,function(t,e){t.label=s.isJanuary(t.start)?r.year(t.start):void 0,t.content=r.month(t.start),t.isPeriodStart=s.isJanuary(t.start),0==e&&this._firstLabelBuilder.setSegmentFirstLabel(t,t.start.getMonth(),this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth)}.bind(this)),n}}),c=h.extend({_segmentsInDay:4/365,_minSegmentWidth:55,_emptySegmentsCount:11,_firstLabelFormat:r.year,segments:function(){var e=s.moveToBeginningOfDay(this._dateRange.startDate.clone().moveToFirstDayOfMonth()),n=this._getRawSegments(e,this._dateRange.endDate,{months:1});return t.each(n,function(t,e){var n=t.start.getMonth();n%4===0&&(t.label=s.isJanuary(t.start)?r.year(t.start):r.month(t.start),t.isPeriodStart=s.isJanuary(t.start)),0==e&&this._firstLabelBuilder.setSegmentFirstLabel(t,n,this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth)}.bind(this)),n}}),y=h.extend({_segmentsInDay:2/365,_minSegmentWidth:60,_emptySegmentsCount:1,_firstLabelFormat:r.year,_getFirstDayOfHalfYear:function(t){var e=t.getFullYear(),n=new i(e,0,1),a=new i(e,6,1);return t>=a?a:n},segments:function(){var e=this._getFirstDayOfHalfYear(this._dateRange.startDate),n=this._getRawSegments(e,this._dateRange.endDate,{months:6});return t.each(n,function(t,e){var n=t.start.getMonth(),i=0===n?0:1;0===n&&(t.label=r.year(t.start),t.isPeriodStart=!0),0==e&&this._firstLabelBuilder.setSegmentFirstLabel(t,i,this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth)}.bind(this)),n}}),S=h.extend({_segmentsInDay:1/365,_getFirstDayOfYear:function(t){return new i(t,0,1)},segments:function(){var e=this._getFirstDayOfYear(this._dateRange.startDate.getFullYear()),n=this._getRawSegments(e,this._dateRange.endDate,{years:1});return t.each(n,function(t){t.content=r.year(t.start),t.isPeriodStart=!0,t.partStart&&(t.displayPartContent=this._firstLabelBuilder.isPartContentAvailable(t.width,this._minSegmentWidth))}.bind(this)),n}}),L=h.extend({_segmentsInDay:10/365,_emptySegmentsCount:9,_firstLabelFormat:r.year,_getFirstDayOfYear:function(t){return new i(t,0,1)},segments:function(){var e=this._getFirstDayOfYear(this._dateRange.startDate.getFullYear()),n=this._getRawSegments(e,this._dateRange.endDate,{years:1});return t.each(n,function(t,e){var n=t.start,i=n.getYear()%10,a=0===i;t.label=a?r.year(n):"",t.isPeriodStart=a,0==e&&this._firstLabelBuilder.setSegmentFirstLabel(t,i,this._minSegmentFirstLabelWidth,this._emptySegmentsCount,this._minLabelWidth)}.bind(this)),n}}),F=[g,m,d,l,u,_,f,b,c,y,S,L];return{createFor:function(e,n){var i=new o(n,e),a=t.find(F,function(t){return new t(n,i).isOkForWidth(e)}.bind(this))||t.last(F);return new a(n,i)}}});