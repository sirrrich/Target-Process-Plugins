define([],function(){return{componentWillMount:function(){this._highlightedMilestone=this.isHighlighted?this.props.id:null},_handleMouseOver:function(){this._triggerHighlightedMilestone(this.props.id)},_handleMouseOut:function(){this._triggerHighlightedMilestone(null)},_triggerHighlightedMilestone:function(i){this._highlightedMilestone!==i&&(this._highlightedMilestone=i,this.props.onSetHighlightedMilestone(i))}}});