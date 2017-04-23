import axios from "axios";
import store from "../store";
import { getRecipesSuccess, deleteRecipeSuccess, saveRecipeSuccess, recipeSuccess } from "../store/actions/recipes-actions";
import * as settings from "./settings-api";

/**
 * Get all recipes
 */

export function getRecipes() {
  //Temp
  /*
  let recipes = [
    { id: 1, name: "Recipe 1" },
    { id: 2, name: "Recipe 2" }
  ];
  store.dispatch(getRecipesSuccess(recipes));
  return null;
*/


  return axios.get(`${settings.API_BASE_URL}/food/recipes`)
    .then(response => {
      store.dispatch(getRecipesSuccess(response.data));
      return response;
    })
    .catch(err => {
      console.log(err);
    });
}

export function deleteRecipe(recipeId) {
  return axios.delete(`${settings.API_BASE_URL}/food/recipes/${recipeId}`)
    .then(response => {
      store.dispatch(deleteRecipeSuccess(recipeId));
      return response;
    })
    .catch(err => {
      console.log(err);
    });
}

export function saveRecipe(recipe) {
  return axios.post(`${settings.API_BASE_URL}/food/recipes`, recipe)
    .then(response => {
      store.dispatch(saveRecipeSuccess(recipe));
      return response;
    })
    .catch(err => {
      console.log(err);
    });
}