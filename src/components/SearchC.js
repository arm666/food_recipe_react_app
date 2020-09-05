import React, { useState } from "react";
import history from "./history";
import { withRouter } from "react-router-dom";

function SearchC() {
  const [recipeName, setrecipeName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchLoading, setsearchLoading] = useState("");

  // on submit ... click on search button
  const pageToRecipe = (e) => {
    e.preventDefault();
    if (recipeName.length > 2) {
      document.querySelector(".error").style.display = "none";
      getData();
    } else {
      setIsLoading(false);
      document.querySelector(".error").style.display = "block";
    }
  };

  // fetching the data for variable
  const getData = async () => {
    setsearchLoading("Searching : ");
    let appId = "35415686";
    let appKey = "a67a3e31295996b90f996df842ad1b3d";
    let url =
      "https://api.edamam.com/search?q=" +
      recipeName +
      "&app_id=" +
      appId +
      "&app_key=" +
      appKey;
    console.log(url);

    //api call
    let data = await fetch(url)
      .then((res) => res.json())
      .then((d) => {
        if (d.hits.length !== 0) {
          history.push("food_recipe_react_app/search/" + recipeName, {
            recipeArr: d.hits,
          });
        } else {
          setIsLoading(false);
          document.querySelector(".error").style.display = "block";
        }
      })
      .catch((e) => {
        setIsLoading(false);
        document.querySelector(".error").style.display = "block";
      });
  };

  //input change for search recipe
  const inputChange = (e) => {
    document.querySelector(".error").style.display = "none";
    setrecipeName(e.target.value);
    e.target.addEventListener("keydown", (e) => {
      if (e.keyCode === 8) {
        document.querySelector(".error").style.display = "none";
      }
    });
    if (document.querySelector("#search").value.length > 2) {
      setIsLoading(true);
      setsearchLoading("Recipe Name : ");
    } else {
      setIsLoading(false);
      setsearchLoading("");
      document.querySelector(".error").style.display = "none";
    }
  };

  //return
  return (
    <form onSubmit={pageToRecipe}>
      <div className="searchBox">
        <input
          id="search"
          type="text"
          onChange={inputChange}
          placeholder="Seach Recipe.... "
          autoComplete="off"
        />

        <button type="submit">Search</button>

        <div className="error">
          <div className="title">Error</div>
          <div className="desc">- Please search valid Recipe name.</div>
          <div className="desc">- Please search atleast 3 characters.</div>
          <div className="desc">- Should not include any symbols.</div>
          <div className="desc">- Check your internet access.</div>
        </div>
        {isLoading && (
          <div className="isLoading">
            {searchLoading} {recipeName} <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        )}
      </div>
    </form>
  );
}

export default withRouter(SearchC);
