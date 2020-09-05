import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="item title">
        <NavLink to="/food_recipe_react_app">
          <div className="title">Food Recipe</div>
        </NavLink>
        <div className="desc">know your food?</div>
      </div>
      {/* <div className="items">
        <button>Login</button>
      </div> */}
      <div className="developer">- developed by alpha</div>
    </div>
  );
}

export default Navbar;
