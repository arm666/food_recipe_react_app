import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NotFounds from "./components/NotFound";
import Navbar from "./components/Navbar";
import SearchC from "./components/SearchC";
import Recipe from "./components/Recipe";
import history from "./components/history";
import EachRecipe from "./components/EachRecipe";

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/food_recipe_react_app">
          <SearchC />
        </Route>
        <Route path="/food_recipe_react_app/search/:name" component={Recipe}></Route>
        <Route path="/food_recipe_react_app/recipe/:name" component={EachRecipe}></Route>
        <Route path="*" component={NotFounds}></Route>
      </Switch>
    </Router>
  );
}

export default App;
