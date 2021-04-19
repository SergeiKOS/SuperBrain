import React, { useState, useContext, createContext } from "react";

import { MenuWrapper, List, Item, Link, Btn } from "./styles/menu";

const menuToggleContext = createContext();

export default function Menu({ children, ...restProps }) {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMenuToggle = (isMenuShownParam) => {
    setIsMenuShown(isMenuShownParam);
  };

  const handleMenuClose = (e, isMenuShownParam) => {
    const ESC_KEY = 27;
    if (e.keyCode === ESC_KEY && isMenuShown) {
      setIsMenuShown(isMenuShownParam);
    }
  };

  return (
    <menuToggleContext.Provider
      value={{ isMenuShown, handleMenuToggle, handleMenuClose }}
    >
      <MenuWrapper {...restProps}>{children}</MenuWrapper>
    </menuToggleContext.Provider>
  );
}
Menu.Btn = function MenuBtn({ children, ...restProps }) {
  const { isMenuShown, handleMenuToggle, handleMenuClose } = useContext(
    menuToggleContext
  );

  return (
    <Btn
      className={`menu-button-${isMenuShown ? "hide" : "open"}`}
      onClick={() => handleMenuToggle(!isMenuShown)}
      onKeyUp={(e) => handleMenuClose(e, !isMenuShown)}
      type="button"
      aria-haspopup="true"
      aria-controls="menuNav"
      {...restProps}
    >
      {children}
    </Btn>
  );
};
Menu.List = function MenuList({ children, ...restProps }) {
  const { isMenuShown, handleMenuToggle } = useContext(menuToggleContext);
  return (
    <List
      isMenuShown={isMenuShown}
      onMouseLeave={() => handleMenuToggle(false)}
      id="menuNav"
      {...restProps}
    >
      {children}
    </List>
  );
};
Menu.Item = function MenuItem({ children, ...restProps }) {
  const { handleMenuToggle, isMenuShown, handleMenuClose } = useContext(
    menuToggleContext
  );
  return (
    <Item
      {...restProps}
      onClick={() => handleMenuToggle(false)}
      onKeyUp={(e) => handleMenuClose(e, !isMenuShown)}
    >
      {children}
    </Item>
  );
};
Menu.Link = function MenuLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
