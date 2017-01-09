var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var ArrayInputView = require('ampersand-array-input-view');
var myArrayInputView = require('../../lib/ampersand-array-multifield-view/ampersand-array-multifield-view');
var templates = require('../templates');
var IngredientsView = require('./ingredient');

var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});
var ExtendedArrayInput = ArrayInputView.extend({
    initialize: function () {
        if (!this.label) this.label = this.name;
        this.fields = [];
        // calculate default value if not provided
        var defaultVal = [];
        // make sure there's at least one
        var num = this.minLength || 1;
        while (num--) {
            defaultVal.push('');
        }
        if (!this.value.length) this.value = defaultVal;
        this.on('change:valid change:value', this.updateParent, this);
        //this.render();
    }
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
                template: templates.includes.arrayFormInput(),
                fieldTemplate: templates.includes.arrayFormField(),
                minLength: 0,
                maxLength: 100,
                autoRender: false,
                parent: this
            }),
            new myArrayInputView({
                label: 'Ingredients',
                name: 'ingredients',
                value: (this.model && this.model.ingredients) || [],
                template: templates.includes.arrayFormInput(),
                fieldTemplate: templates.includes.arrayFormField(),
                minLength: 0,
                maxLength: 100,
                parent: this,
                multiFields: [
                    {name: 'amount', label: 'Amount', placeholder: 'Amount'},
                    {name: 'item', label: 'Item', placeholder: 'Item'}
                ]
            }),
            new ExtendedArrayInput({
                label: 'Instructions',
                name: 'instructions',
                value: (this.model && this.model.instructions) || [],
                template: templates.includes.arrayFormInput(),
                fieldTemplate: templates.includes.arrayFormField(),
                minLength: 0,
                maxLength: 100,
                parent: this
            })
        ];
    }
});