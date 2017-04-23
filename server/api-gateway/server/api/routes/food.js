//import Router from ("koa-router");
//import { getRecipes, deleteRecipe, saveRecipe } from "oml-food-service";
import rdb from "rethinkdbdash";

let r = rdb({
  servers: [
    {host: "192.168.0.2", port: 28015}
  ],
  db: "oml_food"
});

let recipesTable = r.table("recipes");

let getRecipes = () => {
  return recipesTable.run().then((result) => {
    //console.log("Result: ",result);
    return result;
  }).catch((err) => {
    console.log("Result: ", err);
    return [];
  });
};

let deleteRecipe = (id) => {
  return recipesTable.get(id).delete().run();
};

let saveRecipe = (recipe) => {
  return recipesTable.insert(recipe, {conflict: "update"}).run()
          .then((result) => {
            console.log("Save Success: ", result);
            return result.generated_keys;
          });
};

export default (router) => {
  router
    .get("/food/recipes", async ctx => {
      try {
        //Read from db
        let recipes = await getRecipes();
        //console.log("Recipes: ", recipes);
        ctx.body = recipes;
      } catch (err) {
        console.log("Get Recipes Error: ", err);
        ctx.throw(500, err);
      }
    })

    .delete("/food/recipes/:id", async ctx => {
      try {
        await deleteRecipe(ctx.params.id);
        ctx.status = 204;
      } catch (err) {
        ctx.throw(500, err.error.detail);
      }
    })

    .post("/food/recipes", async ctx => {
      try {
        let keys = await saveRecipe(ctx.request.body);
        ctx.body = keys;
      } catch (err) {
        ctx.throw(500, err.error.detail);
      }
    })
};