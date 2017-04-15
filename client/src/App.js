import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, browserHistory, Link } from 'react-router-dom';

//Layouts

//Pages
import Home from './pages/home';
import FoodLayout from './pages/food/food_layout';

/*
const App = () => (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="food" component={FoodLayout}>
        <IndexRoute component={FoodHome} />
        <Route path="recipes" >
          <IndexRoute component={RecipesHome} />
          <Route path="create" component={RecipesCreate} />
        </Route>
      </Route>

    </Route>
  </Router>
)*/

const App = () => (
  <Router>
    <div className="app">
      <header className="primary-header">
        <div className="main-logo">
          <p>Organize My Life</p>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/food">Food</Link></li>
        </ul>
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/food" component={FoodLayout} />
      </main>
    </div>
</Router>
)

export default App
