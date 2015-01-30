define(function(require) {
    var React = require('react');
    var Class = require('tau/core/class');
    var ModificationType = require('./modification.type');
    var ModificationFieldType = require('./modification.field.type');
    var DateUtils = require('tau/utils/utils.date');

    var hashCode = function(str) {
        var hash = 0;
        if (str.length === 0) {
            return hash;
        }
        for (var i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash &= hash;
        }
        return hash;
    };

    return Class.extend({
        init: function(configurator) {
            this._configurator = configurator;
            this._urlBuilder = configurator.getUrlBuilder();
        },

        getTemplate: function(modification, hideHeader) {
            var entityId = modification.general.id;
            var entityType = modification.general.type.toLowerCase().replace('tp.businessobjects.', '');
            var entityTitleClass = 'tau-text_type_' + entityType;

            return (
                <div className="notification__item notification__item--in-widget" key={this._getModificationKey(modification)}>
                    {hideHeader ? null :
                        <div className="follow-title">
                            <a href="#" className={entityTitleClass} onClick={this._openEntityView.bind(this, entityId, entityType)}>
                                {modification.general.name}
                            </a>
                        </div>
                        }
                    <div className="follow-content">
                        {this._getContainerTemplate(modification)}
                        {this._getByBlock(modification)}
                    </div>
                </div>
                );
        },

        _getModificationKey: function(modification) {
            return hashCode(modification.general.id + modification.field + modification.timestamp);
        },

        _getContainerTemplate: function(modification) {
            if (modification.fieldValue === null) {
                return modification.modificationFieldType == ModificationFieldType.ProjectSquad ?
                    this._getNoEntityContainer(modification) :
                    this._getSimpleContainer(modification);
            }

            switch (modification.modificationFieldType) {
                case ModificationFieldType.Comment:
                    return this._getCommentContainer(modification);
                case ModificationFieldType.Attachment:
                    return this._getAttachmentContainer(modification);
                case ModificationFieldType.Assignment:
                    return this._getAssignmentContainer(modification);
                case ModificationFieldType.State:
                    return this._getStateContainer(modification);
                case ModificationFieldType.ProjectSquad:
                    return this._getProjectSquadContainer(modification);
                case ModificationFieldType.GeneralEntity:
                    return this._getEntityPropertyContainer(modification);
                default :
                    if (modification.modificationType === ModificationType.ChildRemoved
                        || modification.modificationType === ModificationType.ChildUpdated
                        || modification.modificationType === ModificationType.ChildAdded) {
                        return this._getChildContainer(modification);
                    }

                    return this._getSimpleContainer(modification);
            }
        },

        _getSimpleContainer: function(modification) {
            if (modification.modificationType == ModificationType.Deleted) {
                return this._getDeletedTemplate(modification);
            }

            switch (modification.modificationFieldType) {
                case ModificationFieldType.EmptyField:
                case ModificationFieldType.EmptyCustomField:
                    return this._getEmptyFieldTemplate(modification);
                case ModificationFieldType.SimpleCustomField:
                    return this._getSimpleCustomTemplate(modification);
                case ModificationFieldType.UrlCustomField:
                    return this._getUrlCustomTemplate(modification);
                case ModificationFieldType.TemplatedUrlCustomField:
                    return this._getTemplatedUrlCustomTemplate(modification);
                case ModificationFieldType.DateCustomField:
                    return this._getDateCustomTemplate(modification);
                case ModificationFieldType.RichTextCustomField:
                    return this._getFieldChangedTemplate(modification);
                default :
                    return this._getSimpleContainerForField(modification);
            }
        },

        _getSimpleContainerForField: function(modification) {
            switch (modification.field) {
                case 'BuildDate':
                case 'StartDate':
                case 'EndDate':
                case 'PlannedStartDate':
                case 'PlannedEndDate':
                    return this._getDateTemplate(modification);
                case 'Effort':
                case 'Velocity':
                    return this._getDecimalWithUnitTemplate(modification);
                case 'EntityState':
                    return this._getEntityStateTemplate(modification);
                case 'LastStatus':
                    return this._getLastStatusTemplate(modification);
                case 'Name':
                    return this._getNameTemplate(modification);
                case 'Priority':
                case 'Severity':
                    return this._getEntityTemplate(modification);
                case 'Responsible':
                    return this._getResponsibleTemplate(modification);
                default:
                    return this._getFieldChangedTemplate(modification);
            }
        },

        _getDateTemplate: function(modification) {
            var dateObj = DateUtils.parse(DateUtils.convertToTimezone(modification.fieldValue));
            return <div className="follow-description">
            Changed {this._getFieldName(modification)} to&nbsp;
                <span className="follow-description__to-value">{DateUtils.formatAs(dateObj, 'MMMM dd, yyyy')}</span>
            </div>;
        },

        _getDecimalWithUnitTemplate: function(modification) {
            return <div className="follow-description">
            Changed {this._getFieldName(modification)} from {modification.oldFieldValue} to&nbsp;
                <span className="follow-description__to-value">{modification.fieldValue}</span>
            </div>;
        },

        _getEntityStateTemplate: function(modification) {
            return <div className="follow-description">
            Changed State from {modification.oldFieldValue}&nbsp;
                <span className="tau-icon-general tau-icon-l-arrow"></span>
            &nbsp;
                <span className="follow-description__state">{modification.fieldValue}</span>
            </div>;
        },

        _getLastStatusTemplate: function(modification) {
            return <div className="follow-description">
            Changed Last Status to&nbsp;
                <span className="follow-description__to-value">{modification.fieldValue ? 'Passed' : 'Failed'}</span>
            </div>;
        },

        _getNameTemplate: function(modification) {
            return <div className="follow-description">Renamed this item</div>;
        },

        _getDeletedTemplate: function(modification) {
            return <div className="follow-description">Removed this item</div>;
        },

        _getEmptyFieldTemplate: function(modification) {
            return <div className="follow-description">Set {this._getFieldName(modification)} to&nbsp;
                <span className="follow-description__to-value">none</span>
            </div>;
        },

        _getSimpleCustomTemplate: function(modification) {
            return <div className="follow-description">
            Changed {this._getFieldName(modification)} to&nbsp;
                <span className="follow-description__to-value">{modification.fieldValue.value}</span>
            </div>;
        },

        _getUrlCustomTemplate: function(modification) {
            return <div className="follow-description">Changed {this._getFieldName(modification)} to&nbsp;
                <a className="follow-description__to-value follow-description__link"
                href={modification.fieldValue.value} target="_blank">{modification.fieldValue.title}</a>
            </div>;
        },

        _getTemplatedUrlCustomTemplate: function(modification) {
            var urls = modification.fieldValue.value.split(',');
            var urlItems = _.map(urls, function(url, index) {
                return <a className="follow-description__to-value follow-description__link"
                key={index}
                href={modification.fieldValue.template.replace('{0}', url)} target="_blank">{url}</a>
            });

            return <div className="follow-description">
            Changed {this._getFieldName(modification)} to&nbsp;{urlItems}
            </div>;
        },

        _getDateCustomTemplate: function(modification) {
            var dateObj = DateUtils.parse(DateUtils.convertToTimezone(modification.fieldValue.value));
            return <div className="follow-description">
            Changed {this._getFieldName(modification)} to&nbsp;
                <span className="follow-description__to-value">{DateUtils.formatAs(dateObj, 'MMMM dd, yyyy')}</span>
            </div>;
        },

        _getNoEntityContainer: function(modification) {
            return (
                <div className="follow-description">
                Changed {this._getFieldName(modification)} to&nbsp;
                    <span className="follow-description__to-value">No {this._getFieldName(modification)}</span>
                </div>
                );
        },

        _getEntityTemplate: function(modification) {
            return <div className="follow-description">
            Changed {modification.fieldValue.type} to&nbsp;
                <span className="follow-description__to-value">{modification.fieldValue.name}</span>
            </div>;
        },

        _getResponsibleTemplate: function(modification) {
            return <div className="follow-description">
            Assigned&nbsp;
                <a className="follow-description__to-value" href="#" onClick={this._openEntityView.bind(this, modification.fieldValue.id, 'user')}>
                    <img className="tau-user-avatar" src={this._urlBuilder.getAvatarUrl(modification.fieldValue.id, 15)} />
                &nbsp;{modification.fieldValue.name}
                </a>
            &nbsp;as a {modification.fieldValue.type}
            </div>;
        },

        _getFieldChangedTemplate: function(modification) {
            return <div className="follow-description">
            Changed {this._getFieldName(modification)}
            </div>;
        },

        _getProjectSquadContainer: function(modification) {
            var entityId = modification.fieldValue.id;
            var entityType = modification.fieldValue.type.replace('Tp.BusinessObjects.', '').toLowerCase();

            return <div className="follow-description">
            Changed {modification.fieldValue.type} to&nbsp;
                <a className="follow-description__to-value" href="#" onClick={this._openEntityView.bind(this, entityId, entityType)}>
                    {modification.fieldValue.name}
                </a>
            </div>;
        },

        _getEntityPropertyContainer: function(modification) {
            var entityId = modification.fieldValue.id;
            var entityType = modification.fieldValue.type.replace('Tp.BusinessObjects.', '').toLowerCase();
            var entityIconClass = 'entity-card entity-card__' + entityType;

            return (
                <div className="notification__entity-wrap-container">
                    <div className="notification__text">
                    Set {this._getFieldName(modification)} to&nbsp;
                    </div>
                    <div className="notification__entity-wrap">
                        <a href="#" className={entityIconClass} onClick={this._openEntityView.bind(this, entityId, entityType)}>
                        {modification.fieldValue.name}
                        </a>
                    </div>
                </div>
                );
        },

        _getChildContainer: function(modification) {
            var entityId = modification.fieldValue.id;
            var entityType = modification.fieldValue.type.replace('Tp.BusinessObjects.', '').toLowerCase();
            var entityIconClass = 'entity-card entity-card__' + entityType;

            return (
                <div className="notification__entity-wrap-container">
                    <div className="notification__text">
                        {this._getAction(modification.modificationType)} related entity
                    </div>
                    <div className="notification__entity-wrap">
                        <a href="#" className={entityIconClass} onClick={this._openEntityView.bind(this, entityId, entityType)}>
                        {modification.fieldValue.name}
                        </a>
                    </div>
                </div>
                );
        },

        _getCommentContainer: function(modification) {
            return (
                <div className="notification__comment">
                    <div className="notification__comment__user">
                        {modification.fieldValue.name}
                    </div>
                </div>
                );
        },

        _getAttachmentContainer: function(modification) {
            var attachUrl = this._configurator.getApplicationPath() + '/Attachment.aspx?AttachmentID=' + modification.fieldValue.id;
            return (
                <ul className = "notification__attached-data">
                    <li className="notification__attached-data__item">
                        <a className="notification__attached-data__link" target="_blank" href={attachUrl}>
                        {modification.fieldValue.name}
                        </a>
                    </li>
                </ul>
                );
        },

        _getAssignmentContainer: function(modification) {
            return (
                <div className="follow-description">
                        {this._getAssignedAction(modification.modificationType)}&nbsp;
                    <a className="follow-description__to-value" href="#" onClick={this._openEntityView.bind(this, modification.fieldValue.id, 'user')}>
                        <img className="tau-user-avatar" src={this._urlBuilder.getAvatarUrl(modification.fieldValue.id, 15)} />
                    &nbsp;{modification.fieldValue.name}
                    </a>
                &nbsp;as a {modification.fieldValue.type}
                </div>
                );
        },

        _getStateContainer: function(modification) {
            var entityId = modification.fieldValue.target.id;
            var entityType = modification.field.replace('Tp.BusinessObjects.', '').toLowerCase();
            var entityIconClass = 'entity-card entity-card__' + entityType;

            return (
                <div className="notification__entity-wrap-container">
                    <div className="notification__text">
                        <span>Changed State from {modification.oldFieldValue.state.name}</span>
                    &nbsp;
                        <span className="tau-icon-general tau-icon-l-arrow"></span>
                    &nbsp;
                        <span className="follow-description__state">{modification.fieldValue.state.name}</span>
                    &nbsp;in
                    </div>
                    <div className="notification__entity-wrap">
                        <a href="#" className={entityIconClass} onClick={this._openEntityView.bind(this, entityId, entityType)}>
                        {modification.fieldValue.target.name}
                        </a>
                    </div>
                </div>
                );
        },

        _getByBlock: function(modification) {
            var dateObj = DateUtils.parse(modification.timestamp);
            var author = modification.author.firstName + ' ' + modification.author.lastName;
            return (
                <div className="notification__information">by&nbsp;
                    <a href="#" className="gray-link" onClick={this._openEntityView.bind(this, modification.author.iD, 'user')}>{author}</a>
                &nbsp;
                        {this._getModificationDateText(dateObj)}
                </div>
                );
        },

        _getModificationDateText: function(dateObj) {
            if (DateUtils.getDiffInDays(new Date(), dateObj) === 1) {
                var age = DateUtils.getAge(dateObj, new Date());
                if (age.unit === 'sec') {
                    return '1 min ago';
                }

                return age.toString();
            }

            return DateUtils.formatAs(dateObj, 'on MMM dd a\\t HH:mm');
        },

        _getAction: function(modificationType) {
            switch (modificationType) {
                case ModificationType.ChildAdded:
                    return 'Added';
                case ModificationType.ChildRemoved:
                    return 'Removed';
                case ModificationType.ChildUpdated:
                    return 'Changed';
                default:
                    return 'Set';
            }
        },

        _getAssignedAction: function(modificationType) {
            switch (modificationType) {
                case ModificationType.ChildAdded:
                    return 'Assigned';
                case ModificationType.ChildRemoved:
                    return 'Unassigned';
                default:
                    return 'Set';
            }
        },

        _openEntityView: function(entityId, entityType, event) {
            event.preventDefault();
            event.stopPropagation();
            this._configurator.getEntityViewService().showEntityView({
                entityId: entityId,
                entityType: entityType
            });
        },

        _getFieldName: function(modification) {
            return _.titleize(_.underscored(modification.field).replace(/_/g, ' '));
        }
    });
});