import React from "react";
import { NavLink } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./Header.module.css";


const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <div className="Nav">
      <nav>
        <NavLink to="">
          <button>Home</button>
          </NavLink>
          <NavLink to="/newRecipe">
          <button>Add Recipe</button>
        </NavLink>
      </nav>
      </div>
    </header>
  );
};

export default Header;
