import React, {Component} from "react";
import { connect } from "react-redux";
import RecipesList from "../views/food/recipes-list";
import * as RecipesApi from "../../api/recipes-api";

class RecipesListContainer extends Component {

  componentDidMount() {
    RecipesApi.getRecipes();
  }

  render() {
    return (
      <RecipesList recipes={this.props.recipes} deleteRecipe={RecipesApi.deleteRecipe} />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    recipes: store.recipesState.recipes
  };
};

export default connect(mapStateToProps)(RecipesListContainer);