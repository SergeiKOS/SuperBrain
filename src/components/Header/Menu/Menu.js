import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { MenuCss } from "./MenuCss";

const Menu = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMenuChange = () => {
    setIsMenuShown(!isMenuShown);
  };

  const handleMenuLeave = () => {
    setIsMenuShown(!isMenuShown);
  };

  return (
    <MenuCss isMenuShown={isMenuShown}>
      <button
        className={`menu-button menu-button-${isMenuShown ? "hide" : "open"}`}
        onClick={handleMenuChange}
        onMouseOver={handleMenuChange}
        type="button"
      >
        Open menu
      </button>
      <ul onMouseLeave={handleMenuLeave}>
        <li className="menu-item">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/games/calculations">Calculations</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/games/trivia">Trivia</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/games/game3">Game 3</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/games/game4">Game 4</NavLink>
        </li>
      </ul>
    </MenuCss>
  );
};

export default Menu;
