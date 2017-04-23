import rdb from "rethinkdbdash";
let r = rdb({
  servers: [
    {host: "192.168.0.2", port: 28015}
  ]
});

let recipesTable = r.table("recipes");

let getRecipes = () => {
  recipesTable.run().then((result) => {
    return result;
  });
};

let deleteRecipe = (id) => {
  recipesTable.get(id).delete().run();
};

let saveRecipe = (recipe) => {
  recipesTable.insert(recipe, {conflict: "update"}).run();
};

module.export = {
  getRecipes: getRecipes,
  deleteRecipe: deleteRecipe,
  saveRecipe: saveRecipe
}