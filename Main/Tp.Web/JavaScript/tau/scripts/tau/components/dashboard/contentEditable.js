define([],function(){return{getDefaultProps:function(){return{contentEditable:!1}},componentDidUpdate:function(){var t=this.getDOMNode();this.props.contentEditable?(t.focus(),window.getSelection().collapse(t,0)):(t.scrollLeft=0,t.scrollTop=0)},contentEditableStart:function(){this.props.contentEditable||this.props.onEditStart&&this.props.onEditStart()},contentEditableDone:function(){var t=this.getDOMNode().textContent.trim();t&&t!==this.props.name?this.props.onEditDone&&this.props.onEditDone(t):this.contentEditableCancel()},contentEditableCancel:function(){this.getDOMNode().textContent=this.props.name,this.props.onEditCancel&&this.props.onEditCancel()},contentEditableKeyDown:function(t){13===t.keyCode?this.contentEditableDone():27===t.keyCode&&this.contentEditableCancel()}}});