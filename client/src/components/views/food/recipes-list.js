import React from "react";
import Page from "../page";

const RecipesList = ({recipes}) => {
  return (
    <Page title="Recipes" body={
      <ul>
        {
          recipes.map(recipe => {
            return (
              <li key={recipe.id}>{recipe.name}</li>
            )
          })}
      </ul>
    } />
  );
}

export default RecipesList;