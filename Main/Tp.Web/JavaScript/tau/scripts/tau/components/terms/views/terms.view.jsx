define(function(require) {
    var React = require('libs/react/react-ex'),
        _ = require('Underscore');

    return React.defineClass([
        'termsListItem',
        'termsBus'
    ], function(TermsListItem, termsBus) {

        return {
            displayName: 'Terms',

            getInitialState: function() {
                return {
                    terms: [],
                    process: {},
                    isLoading: true,
                    isChanged: false
                };
            },
            resetToDefault: function() {
                termsBus.fire('terms.resetToDefault');
            },
            saveTerms: function() {
                termsBus.fire('saveTerms');
            },
            render: function() {
                if (this.state.isLoading) {
                    return <div className="tau-loader"></div>;
                }

                var items = _.map(this.state.terms, function(item) {
                    return <TermsListItem key={item.entityKind} term={item} isValidCollection={this.state.isValid} />;
                }, this);

                return (
                    <div>
                        <div className="tau-table-forms__wrapper">
                            <div className="ui-title ui-title_type_main">
                                {this.state.processName} &rarr; Terms
                                <button type='button' disabled={this.state.isDefault} onClick={this.resetToDefault}
                                    className="tau-btn i-role-reset">Reset to default</button>
                            </div>
                        </div>
                        <div className="tau-table-forms__wrap">
                            <table className="tau-table-forms">
                                <tbody>
                                    {items}
                                </tbody>
                            </table>
                        </div>
                        <div className="tau-table-forms__wrapper">
                            <button disabled={!this.state.isChanged || !this.state.isValid} type='button'
                                onClick={this.saveTerms} className="tau-btn tau-primary tau-btn-big">Save changes</button>
                            <span dangerouslySetInnerHTML={{__html: this.state.errorMessage || ''}} className="tau-message-error">
                            </span>
                            <span className="tau-message-success">
                                {this.state.successMessage}
                            </span>
                        </div>
                    </div>
                );
            }
        }
    });
});
