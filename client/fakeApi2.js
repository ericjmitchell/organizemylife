var _ = require('lodash');

        //id: 'any',
        //name: ['string', true, ''],
        //thumbnail: ['string', true, ""],
        //prepTime: ['number', true, 0],
        //cookTime: ['number', true, 0],
        //tags: 'array',
        //ingredients: 'array',
        //instructions: 'array'

var recipes = [
    {
        id: 1,
        name: 'Test Recipe 1',
        thumbnail: '',
        prepTime: 1800,
        cookTime: 1800,
        tags: ["bread", "honey"],
        ingredients: [{amount: "1 cup", label: "honey"}, {amount: "1 slice", label: "bread"}],
        instructions: ["Pour honey on bread", "Eat the bread"]
    },
    {
        id: 2,
        name: 'Test Recipe 2',
        thumbnail: '',
        prepTime: 1800,
        cookTime: 1800,
        tags: ["bread", "honey"],
        ingredients: [{amount: "1 cup", label: "honey"}, {amount: "1 slice", label: "bread"}],
        instructions: ["Pour honey on bread", "Eat the bread"]
    },
    {
        id: 3,
        name: 'Test Recipe 3',
        thumbnail: '',
        prepTime: 1800,
        cookTime: 1800,
        tags: ["bread", "honey"],
        ingredients: [{amount: "1 cup", label: "honey"}, {amount: "1 slice", label: "bread"}],
        instructions: ["Pour honey on bread", "Eat the bread"]
    },
    {
        id: 4,
        name: 'Test Recipe 4',
        thumbnail: '',
        prepTime: 1800,
        cookTime: 1800,
        tags: ["bread", "honey"],
        ingredients: [{amount: "1 cup", label: "honey"}, {amount: "1 slice", label: "bread"}],
        instructions: ["Pour honey on bread", "Eat the bread"]
    }
];
var id = 5;

function get(id) {
    return _.findWhere(recipes, {id: parseInt(id + '', 10)});
}

exports.list = function (req, res) {
    res.send(people);
};

exports.add = function (req, res) {
    var recipe = req.body;
    recipe.id = id++;
    recipes.push(recipe);
    res.status(201).send(recipe);
};

exports.get = function (req, res) {
    var found = get(req.params.id);
    res.status(found ? 200 : 404);
    res.send(found);
};

exports.delete = function (req, res) {
    var found = get(req.params.id);
    if (found) recipes = _.without(recipes, found);
    res.status(found ? 200 : 404);
    res.send(found);
};

exports.update = function (req, res) {
    var found = get(req.params.id);
    if (found) _.extend(found, req.body);
    res.status(found ? 200 : 404);
    res.send(found);
};
