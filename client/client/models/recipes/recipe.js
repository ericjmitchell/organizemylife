var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        name: ['string', true, ''],
        thumbnail: ['string', true, ""],
        prepTime: ['number', true, 0],
        cookTime: ['number', true, 0],
        tags: ['array', true, []],
        ingredients: ['array', true, []],
        instructions: ['array', true, []]
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        prepTimeString: {
            deps: ['prepTime'],
            fn: function() {
                
            }

        },
        cookTimeString: {
            deps: ['prepTime'],
            fn: function() {
                
            }

        },
        editUrl: {
            deps: ['id'],
            fn: function () {
                return '/recipes/' + this.id + '/edit';
            }
        },
        viewUrl: {
            deps: ['id'],
            fn: function () {
                return '/recipes/' + this.id;
            }
        }
    }
});
