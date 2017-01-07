"use strict"

var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        instruction: ['string', true, '']
    }
});
