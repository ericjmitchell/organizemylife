/*global alert*/
var app = require('ampersand-app');
var PageView = require('../base');
var templates = require('../../templates');
var RecipeForm = require('../../forms/recipe');
var RecipeModel = require('../../models/recipes/recipe');


module.exports = PageView.extend({
    pageTitle: 'recipe',
    template: templates.recipes.recipeEdit,
    initialize: function (spec) {
        let self = this;
        app.recipes.getOrFetch(spec.id, {all: true}, function (err, model) {
            if (err) {
                self.model = new RecipeModel();
            }
            self.model = model;
        });
    },
    subviews: {
        form: {
            // this is the css selector that will be the `el` in the
            // prepareView function.
            container: 'form',
            // this says we'll wait for `this.model` to be truthy
            waitFor: 'model',
            prepareView: function (el) {
                var model = this.model;
                return new RecipeForm({
                    el: el,
                    model: this.model,
                    submitCallback: function (data) {
                        if (model.id === 0) {
                            app.recipes.create(data, {
                                wait: true,
                                success: function () {
                                    app.navigate('/recipes');
                                    app.recipes.fetch();
                                }
                            });
                        }
                        else {
                            model.save(data, {
                                wait: true,
                                success: function () {
                                    app.navigate('/recipes');
                                }
                            });
                        }
                    }
                });
            }
        }
    }
});
