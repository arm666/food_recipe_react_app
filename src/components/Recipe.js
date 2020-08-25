import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
function Recipe(match) {
  const [recipeData, setRecipeData] = useState(match.location.state.recipeArr);

  return (
    <>
      <div className="searchedText">
        <div className="title">Searched Recipe : {match.match.params.name}</div>
      </div>
      <div className="recipeSearched">
        {recipeData.map((data, index) => (
          <Tippy
            key={index + "recipe"}
            content={
              <ul className="ingredient_toolTip">
                {data.recipe.ingredientLines.map((data, index) => (
                  <li key={index + "ingredient"}>{data}</li>
                ))}
              </ul>
            }
            interactive={true}
            interactiveBorder={20}
            delay={100}
            appendTo="parent"
            animation="fade"
            hideOnClick={"toggle"}
            placement="right"
          >
            <div className="eachRecipe">
              <div className="img">
                <img src={data.recipe.image} />
              </div>
              <div>
                <div className="title">{data.recipe.label}</div>
              </div>
            </div>
          </Tippy>
        ))}
      </div>
    </>
  );
}

export default Recipe;
