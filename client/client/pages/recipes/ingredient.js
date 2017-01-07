var View = require('ampersand-view');
var templates = require('../../templates');


module.exports = View.extend({
    template: templates.recipes.ingredient,
    bindings: {
        'model.ingredientString': '[data-hook~=ingredient]'
    }
});
