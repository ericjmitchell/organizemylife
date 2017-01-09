"use strict"

var InputView = require('ampersand-input-view');
var MultiFieldView = require('ampersand-multifield-view');
var assign = require('lodash/assign');

module.exports = MultiFieldView.extend({
    bindings: assign({
        'removable': {
            type: 'toggle',
            hook: 'remove-field'
        }
    }, InputView.prototype.bindings),
    props: {
        removable: 'boolean',
        template: ['string']
    },
    events: {
        'click [data-hook~=remove-field]': 'handleRemoveClick'
    },
    handleRemoveClick: function () {
        this.parent.removeField(this);
    }
});
