var AmpersandModel = require('ampersand-model');

let timeFormat = (totalSeconds) => {
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return ('0'+hours).slice(-2) +':'+ ('0'+minutes).slice(-2) +':'+ ('0'+seconds).slice(-2);
}

module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        name: ['string', true, ''],
        thumbnail: ['string', true, ""],
        prepTime: ['number', true, 0],
        cookTime: ['number', true, 0],
        tags: 'array',
        ingredients: 'array',
        instructions: 'array'
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        prepTimeString: {
            deps: ['prepTime'],
            fn: function() {
                return timeFormat(prepTime);
            }

        },
        cookTimeString: {
            deps: ['cookTime'],
            fn: function() {
                return timeFormat(cookTime);
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
        },
        ingredientsList: {
            deps: ["ingredients"],
            fn: () => {
                this.ingredients.map((obj) => {return `${obj.amount} ${obj.label}`;}).join('\n');
            }
        },
        instructionsList: {
            deps: ["instructions"],
            fn: () => {
                this.instructions.join('\n');
            }
        }
    }
});
