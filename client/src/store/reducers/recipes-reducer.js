import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  recipes: [],
  recipe: {
  }
};

const RecipesReducer = (state = initialState, action) => {

  switch(action.type) {

    case types.GET_RECIPES_SUCCESS:
      return Object.assign({}, state, { recipes: action.recipes });

    case types.DELETE_RECIPE_SUCCESS:
      // Use lodash to create a new recipes array without the recipe we want to remove
      let deleteRecipes = _.filter(state.recipes, recipe => recipe.id !== action.recipeId);
      return Object.assign({}, state, { recipes: deleteRecipes });

    case types.SAVE_RECIPE_SUCCESS:
      // Use lodash to create a new recipes array with the new recipe we want to add
      let saveRecipes = _.concat(state.recipes, action.recipe);
      return Object.assign({}, state, { recipes: saveRecipes });

    case types.RECIPE_SUCCESS:
      return Object.assign({}, state, { recipe: action.recipe });

    default:
      return state;

  }
}

export default RecipesReducer;