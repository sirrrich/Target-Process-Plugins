define(function(require) {
    var React = require('react');
    var _ = require('Underscore');
    var AccessDetails = require('jsx!./board.access.change.confirm.details.view');
    var accessLevel = require('../models/board.access.level.constants');
    var HeaderMixin = require('jsx!./board.access.change.confirm.header.mixin');

    return React.createClass({
        displayName: 'board.access.change.confirm.public',
        mixins: [HeaderMixin],
        propTypes: {
            newAccessDetails: React.PropTypes.object.isRequired
        },
        render() {
            var newAccessDetails = this.props.newAccessDetails;

            if (newAccessDetails.sharing === accessLevel.PRIVATE) {
                return (
                    <div>
                        {this._getPrivateHeader()}
                        <div>All users see this View so far.</div>
                    </div>
                );
            }
            if (newAccessDetails.sharing === accessLevel.CUSTOM) {
                return (
                    <div>
                        {this._getCustomHeader()}
                        <AccessDetails model={newAccessDetails} />
                    </div>
                );
            }

            return null;
        }
    });
});