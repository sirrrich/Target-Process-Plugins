define(["require","jQuery"],function(t){var n=t("jQuery"),e=".todo_list_open_card_view_mixin";return{componentDidMount:function(){n(this.getDOMNode()).parent().on("click"+e,".tau-id",function(t){var e=n(t.target);this.props.openEntityView({entityId:e.data("entityId"),entityType:e.data("entityType")}),t.preventDefault()}.bind(this))},componentWillUnmount:function(){n(this.getDOMNode()).parent().off(e)}}});