import React, { Component } from "react";
import { connect } from "react-redux";
import RecipesCreate from "../views/food/recipes-create";
import * as RecipesApi from "../../api/recipes-api";
import { recipeSuccess } from "../../store/actions/recipes-actions";

class RecipesCreateContainer extends Component {

  componentDidMount() {
    let recipe = {name: ""}
    recipeSuccess(recipe);
  }

  render() {
    return (
      <RecipesCreate handleRecipeSubmit={this.handleSubmit} _onChange={this._onChange} />
    );
  }

  handleSubmit = (e) => {
    console.log("Handle event: ", e);
    e.preventDefault();

    RecipesApi.saveRecipe(this.props.recipe);

    this.props.history.push('/food/recipes');
  }

  _onChange = (e) => {
    console.log("Change event: ", e);
    if (e.target.name === "name") {
      this.props.recipe.name = e.target.value;
    }

    recipeSuccess(this.props.recipe);
  }
}

const mapStateToProps = (store) => {
  return {
    recipe: store.recipesState.recipe
  };
};

export default connect(mapStateToProps)(RecipesCreateContainer);