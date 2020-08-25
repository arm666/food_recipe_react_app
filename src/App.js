import React, {  } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchC from "./components/SearchC";
import { Router, Switch, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import history from "./components/history";
import EachRecipe from "./components/EachRecipe";

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <SearchC />
        </Route>
        <Route path="/search/:name" component={Recipe}></Route>
        <Route path="/recipe/:name" component={EachRecipe}></Route>
      </Switch>
    </Router>
  );
}

export default App;
