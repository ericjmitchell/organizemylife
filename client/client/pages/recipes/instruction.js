var View = require('ampersand-view');
var templates = require('../../templates');


module.exports = View.extend({
    template: templates.recipes.instruction,
    bindings: {
        'model.instruction': '[data-hook~=instruction]'
    }
});
