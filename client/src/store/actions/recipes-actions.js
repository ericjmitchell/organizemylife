import * as types from './action-types';

export function getRecipesSuccess(recipes) {
  return {
    type: types.GET_RECIPES_SUCCESS,
    recipes
  };
}

export function deleteRecipeSuccess(recipeId) {
  return {
    type: types.DELETE_RECIPE_SUCCESS,
    recipeId
  };
}

export function saveRecipeSuccess(recipe) {
  return {
    type: types.SAVE_RECIPE_SUCCESS,
    recipe
  };
}

export function recipeSuccess(recipe) {
  return {
    type: types.RECIPE_SUCCESS,
    recipe
  };
}