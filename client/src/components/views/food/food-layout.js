import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "../sidebar"
import FoodHome from "./food-home";
import RecipesListContainer from "../../containers/recipes-list-container";
import RecipesCreateContainer from "../../containers/recipes-create-container";

const FoodLayout = ({ match }) => (
  <div className="layout">
    <Sidebar items={[
      { name: "Recipes", url: `${match.url}/recipes` }
    ]} />
    <Switch>
      <Route exact path={match.url} component={FoodHome} />
      <Route exact path={`${match.url}/recipes`} component={RecipesListContainer} />
      <Route path={`${match.url}/recipes/create`} component={RecipesCreateContainer} />
    </Switch>
  </div>
)

export default FoodLayout;