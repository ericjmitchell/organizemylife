var PageView = require('../base');
var templates = require('../../templates');
var RecipeView = require('./recipe');


module.exports = PageView.extend({
    pageTitle: 'recipes',
    template: templates.recipes.recipes,
    events: {},
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, RecipeView, this.queryByHook('recipes-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});
