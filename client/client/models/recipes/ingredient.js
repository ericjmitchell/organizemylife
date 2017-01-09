"use strict"

var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        amount: ['string', true, ''],
        item: ['string', true, ""]
    },
    derived: {
        ingredientString: {
            deps: ['amount', 'item'],
            fn: function() {
                return `${this.amount} ${this.item}`;
            }
        }
    }
});
