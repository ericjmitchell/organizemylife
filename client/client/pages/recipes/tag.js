var View = require('ampersand-view');
var templates = require('../../templates');


module.exports = View.extend({
    template: templates.recipes.tag,
    bindings: {
        'model.tag': '[data-hook~=tag]'
    }
});
