import React from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Layouts

//Pages
import Home from "./components/views/home";
import FoodLayout from "./components/views/food/food-layout";

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/food" component={FoodLayout} />
      </Switch>
    </div>
</Router>
)

export default App
