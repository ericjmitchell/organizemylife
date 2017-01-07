"use strict"

var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        amount: ['string', true, ''],
        label: ['string', true, ""]
    },
    derived: {
        ingredientString: {
            deps: ['amount', 'label'],
            fn: function() {
                return `${this.amount} ${this.label}`;
            }
        }
    }
});
