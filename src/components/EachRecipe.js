import React, { useState } from "react";
function EachRecipe({
  location: {
    state: {
      data: { recipe },
    },
  },
}) {
  window.scrollTo(0, 0);

  const [totalNutrient, settotalNutrient] = useState(
    Object.keys(recipe.totalNutrients).sort()
  );
  console.log(recipe.totalNutrients);
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
              <li className="ingredientLines" key={index + "ingredientLines"}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="IL">
        <div className="title">Ingredient Detail's</div>
        <p>These are the ingredients used to make this recipe.</p>
        <div className="desc">
          {recipe.ingredients.map((data, index) => (
            <div className="eachIngredientsList" key={index + "eachIL"}>
              <div className="ingredient">
                <div>
                  <img src={data.image} />
                </div>

                <div className="titleAndWeight">
                  <div className="text">{data.text}</div>
                  <div className="weight">{parseInt(data.weight)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="totalNutrients">
        <div className="title">Total Nutrients</div>
        <div className="ListtotalNutrients">
          <table>
           <tr>
           <th>SN</th>
           <th>CODE</th>
           <th>NAME OF NUTRIENT</th>
           <th>QUANTITY</th>
           </tr>
            {totalNutrient.map((val, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{val}</td>
                <td>{recipe.totalNutrients[val].label}</td>
                <td>
                  {parseFloat(recipe.totalNutrients[val].quantity).toFixed(2)}{" "}
                  {recipe.totalNutrients[val].unit}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default EachRecipe;
