import React from "react";
function EachRecipe({
  location: {
    state: {
      data: { recipe },
    },
  },
}) {
  console.log(recipe.ingredients);
window.scrollTo(0, 0);

  return (
    <div className="eachRecipePage">
      <div className="imageAndInfo">
        <div className="imageAndLabel">
          <div className="img">
            <img src={recipe.image} />
          </div>
          <div className="label">{recipe.label}</div>
          <div className="status">
            <div className="pos">
              <div className="title"> Positive</div>
              {recipe.healthLabels.map((data, index) => (
                <div className="healthLabels" key={index + "healthLabels"}>
                  {data}
                </div>
              ))}
            </div>
            <div className="neg">
              <div className="title">Caution</div>
              {recipe.cautions.map((data, index) => (
                <div className="cautions" key={index + "cautions"}>
                  {data}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="info">
          <div className="title">Ingredients :</div>
          <ul>
            {recipe.ingredientLines.map((data, index) => (
              <li key={index + "ingredientLines"}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="IL">
        <div className="title">Ingredient Detail's</div>
        <div className="desc">
          {recipe.ingredients.map((data, index) => (
            <div className="eachIngredientsList" key={index + "eachIL"}>
              <div className="ingredient">
                <div>
                  <img src={data.image} />
                </div>

                <div className="titleAndWeight">
                  <div className="text">{data.text}</div>
                  <div className="weight">{data.weight}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EachRecipe;
