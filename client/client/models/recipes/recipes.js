let Collection = require('ampersand-rest-collection');
let Recipe = require('./recipe');


module.exports = Collection.extend({
    model: Recipe,
    url: '/api/recipes'
});
