import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { NotFounds, NotFound3 } from "./components/NotFound";
import Navbar from "./components/Navbar";
import SearchC from "./components/SearchC";
import Recipe from "./components/Recipe";
import history from "./components/history";
import EachRecipe from "./components/EachRecipe";



function App() {
  return (
    <Router history={history}>
      <Navbar />
      <NotFound3 />
      <Switch>
        <Route exact path="/">
          <SearchC />
        </Route>
        <Route path="/search/:name" component={Recipe}></Route>
        <Route path="/recipe/:name" component={EachRecipe}></Route>
        <Route path="*" component={NotFounds}></Route>
      </Switch>
    </Router>
  );
}

export default App;
