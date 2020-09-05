import React, { useState } from "react";
import { BrowserRouter as Router, NavLink, withRouter } from "react-router-dom";
import history from "./history";
function Recipe({ match, location }) {
  // reciving data from history location
  const [recipeData, setRecipeData] = useState(location.state.recipeArr);
  const changePath = (data) => {
    history.push("/food_recipe_react_app/recipe/" + data.recipe.label, {
      data,
    });
  };
  return (
    <div>
      <div className="searchedText">
        <div className="title">Searched Recipe : {match.params.name}</div>
      </div>
      <div className="recipeSearched">
        {recipeData.map((data, index) => (
          <div
            className="eachRecipe"
            key={index + "recipe"}
            onClick={() => changePath(data)}
          >
            <div className="img">
              <img src={data.recipe.image} alt="Recipe" />
            </div>
            <div>
              <div className="title">{data.recipe.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withRouter(Recipe);
