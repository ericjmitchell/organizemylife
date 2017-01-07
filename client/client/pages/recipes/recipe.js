var View = require('ampersand-view');
var templates = require('../../templates');
var dom = require('ampersand-dom');
let IngredientView = require('./ingredient');
let InstructionView = require('./instruction');
let TagView = require('./tag');


module.exports = View.extend({
    template: templates.recipes.recipe,
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.model.tagsList, TagView, this.queryByHook('tags-list'));
        this.renderCollection(this.model.instructionsList, InstructionView, this.queryByHook('instructions-list'));
        this.renderCollection(this.model.ingredientsList, IngredientView, this.queryByHook('ingredients-list'));
    },
    bindings: {
        'model.name': '[data-hook~=name]',
        'model.prepTimeString': '[data-hook~=prepTime]',
        'model.cookTimeString': '[data-hook~=cookTime]',
        'model.thumbnail': {
            type: 'attribute',
            hook: 'thumbnail',
            name: 'src'
        },
        'model.editUrl': {
            type: 'attribute',
            hook: 'action-edit',
            name: 'href'
        },
        'model.hidden': {
            type: 'booleanClass',
            hook: 'extendedData',
            name: 'hidden'
        }
    },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick',
        'click [data-hook~=name]': function() {
            this.model.hidden = !this.model.hidden;
        }
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    }
});
