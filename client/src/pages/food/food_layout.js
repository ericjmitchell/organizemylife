import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import FoodHome from './food_home';
import RecipesHome from './recipes/recipes_home';
import RecipesCreate from './recipes/recipes_create';

const FoodLayout = ({match}) => (
  <div className="page">
    <asside className="food-asside">
      <ul>
        <li><Link to={`${match.url}/recipes`}>Recipes</Link></li>
      </ul>
    </asside>
    <main>
      <Switch>
        <Route exact path={match.url} component={FoodHome} />
        <Route exact path={`${match.url}/recipes`} component={RecipesHome} />
        <Route path={`${match.url}/recipes/create`} component={RecipesCreate} />
      </Switch>
    </main>  
  </div>
)

export default FoodLayout;