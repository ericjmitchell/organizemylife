var View = require('ampersand-view');
var templates = require('../../templates');


module.exports = View.extend({
    template: templates.recipes.recipe,
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
        'model.viewUrl': {
            type: 'attribute',
            hook: 'name',
            name: 'href'
        },
        'model.ingredientsList': '[data-hook~=ingredients]',
        'model.instructionsList': '[data-hook~=instructions]'
    },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick'
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    }
});
