import React from "react";
import Page from "../page";

const RecipesCreate = ({handleRecipeSubmit, _onChange}) => {
  return (
    <Page title="Create Recipe" body={
      <form onSubmit={handleRecipeSubmit}>
        <label>
          Recipe
          <input type="text" name="name" onChange={_onChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    } />
  );
}

export default RecipesCreate;