import React, { useState, useContext, createContext } from "react";

import { MenuWrapper, List, Item, Link, Btn } from "./styles/menu";

const menuToggleContext = createContext();

export default function Menu({ children, ...restProps }) {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMenuChange = () => {
    setIsMenuShown(!isMenuShown);
  };

  return (
    <menuToggleContext.Provider value={{ isMenuShown, handleMenuChange }}>
      <MenuWrapper {...restProps}>{children}</MenuWrapper>
    </menuToggleContext.Provider>
  );
}
Menu.Btn = function MenuBtn({ children, ...restProps }) {
  const { isMenuShown, handleMenuChange } = useContext(menuToggleContext);

  return (
    <Btn
      className={`menu-button-${isMenuShown ? "hide" : "open"}`}
      onClick={handleMenuChange}
      type="button"
      {...restProps}
    >
      {children}
    </Btn>
  );
};
Menu.List = function MenuList({ children, ...restProps }) {
  const { isMenuShown, handleMenuChange } = useContext(menuToggleContext);
  return <List isMenuShown={isMenuShown} onMouseLeave={handleMenuChange} {...restProps}>{children}</List>;
};
Menu.Item = function MenuItem({ children, ...restProps }) {
  return (
    <Item  {...restProps}>
      {children}
    </Item>
  );
};
Menu.Link = function MenuLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
