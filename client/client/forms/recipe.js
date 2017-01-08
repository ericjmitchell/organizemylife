var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var ArrayInputView = require('ampersand-array-input-view');
var templates = require('../templates');
var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});
var ExtendedArrayInput = ArrayInputView.extend({
    template: templates.includes.arrayFormInput()
});


module.exports = FormView.extend({
    fields: function () {
        return [
            new ExtendedInput({
                label: 'Name',
                name: 'name',
                value: this.model && this.model.name,
                required: false,
                placeholder: 'Name',
                parent: this
            }),
            new ExtendedInput({
                label: 'Thumbnail',
                name: 'thumbnail',
                value: this.model && this.model.thumbnail,
                required: false,
                placeholder: 'Thumbnail',
                parent: this
            }),
            new ExtendedInput({
                label: 'Prep Time',
                name: 'prepTime',
                value: this.model && this.model.prepTime,
                required: false,
                placeholder: 'Prep Time',
                parent: this
            }),
            new ExtendedInput({
                label: 'Cook Time',
                name: 'cookTime',
                value: this.model && this.model.cookTime,
                required: false,
                placeholder: 'Cook Time',
                parent: this
            }),
            new ExtendedArrayInput({
                label: 'Tags',
                name: 'tags',
                value: (this.model && this.model.tags) || [],
                minLength: 0,
                parent: this
            }),
            new ExtendedArrayInput({
                label: 'Ingredients',
                name: 'ingredients',
                value: (this.model && this.model.ingredients) || [],
                minLength: 0,
                parent: this
            }),
            new ExtendedArrayInput({
                label: 'Instructions',
                name: 'instructions',
                value: (this.model && this.model.instructions) || [],
                minLength: 0,
                parent: this
            })
        ];
    }
});