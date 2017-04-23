import React from "react";
import Page from "../page";
import { Link } from "react-router-dom";

const RecipesList = ({ recipes, deleteRecipe }) => {
  return (
    <Page title="Recipes" body={
      <div>
        <Link to="/food/recipes/create">Create Recipe</Link>
        <ul>
          {
            recipes.map(recipe => {
              return (
                <li key={recipe.id}>{recipe.name}
                  <button onClick={deleteRecipe.bind(null,recipe.id)}>Delete</button>
                </li>
              )
            })}
        </ul>
      </div>
    } />
  );
}

export default RecipesList;