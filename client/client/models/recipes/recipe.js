"use strict"

var AmpersandModel = require('ampersand-model');
let Collection = require('ampersand-rest-collection');
let IngredientModel = require('./ingredient');
let InstructionModel = require('./instruction');
let TagModel = require('./tag');

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
        tags: ['array', true],
        ingredients: ['array', true],
        instructions: ['array', true]
    },
    session: {
        hidden: ['boolean', true, true]
    },
    derived: {
        prepTimeString: {
            deps: ['prepTime'],
            fn: function() {
                return timeFormat(this.prepTime);
            }

        },
        cookTimeString: {
            deps: ['cookTime'],
            fn: function() {
                return timeFormat(this.cookTime);
            }

        },
        editUrl: {
            deps: ['id'],
            fn: function () {
                return '/recipe/' + this.id;
            }
        },
        tagsList: {
            debs: ['tags'],
            fn: function () {
                let tagModel = this.tags.map((obj) => {return {tag: obj};});
                return new Collection(tagModel, {model: TagModel});
            }
        },
        ingredientsList: {
            deps: ['ingredients'],
            fn: function () {
                return new Collection(this.ingredients, {model: IngredientModel});

                //    return this.ingredients.map((obj) => {return `${obj.amount} ${obj.label}`;}).join('\n');
            }
        },
        instructionsList: {
            deps: ['instructions'],
            fn: function () {
                let instructModel = this.instructions.map((obj) => {return {instruction: obj};});
                return new Collection(instructModel, {model: InstructionModel});
            }
        }
    }
});
