import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchC from "./components/SearchC";
import { Router, Switch, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import history from "./components/history";

export const recipeContext = React.createContext("");
function App() {
  const [recipeVal, setrecipeVal] = useState("");
  return (
    <Router history={history}>
      <Switch>
        <recipeContext.Provider value={recipeVal}>
          <Navbar />
          <Route exact path="/">
            <SearchC recipeChange={setrecipeVal} />
          </Route>
          <Route exact path="/search/:name" component={Recipe}></Route>
        </recipeContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
