import React, { useState, useContext, createContext, useEffect } from "react";

import * as S from "./styles/menu";

const menuToggleContext = createContext();

export default function Menu({ children, ...restProps }) {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMenuToggle = (e, isMenuShownParam) => {
    setIsMenuShown(isMenuShownParam);

    if (e.target.classList.contains("menu-button-open")) {
      setIsMenuShown(true);
      return;
    }

    if (e.target.classList.contains("active")) {
      setIsMenuShown(true);
    }
  };

  const handleMenuClose = (e, isMenuShownParam) => {
    if (e.key === "Escape" && isMenuShown) {
      setIsMenuShown(isMenuShownParam);
    }
  };

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (!e.target.attributes.href) {
        handleMenuToggle(e, !isMenuShown);
      }
    };

    if (isMenuShown) {
      document.addEventListener("mousedown", clickOutsideHandler);
    }
    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, [isMenuShown]);

  return (
    <menuToggleContext.Provider
      value={{ isMenuShown, handleMenuToggle, handleMenuClose }}
    >
      <S.MenuWrapper {...restProps}>{children}</S.MenuWrapper>
    </menuToggleContext.Provider>
  );
}
Menu.Btn = function MenuBtn({ children, ...restProps }) {
  const { isMenuShown, handleMenuToggle, handleMenuClose } =
    useContext(menuToggleContext);

  return (
    <S.Btn
      className={`menu-button-${isMenuShown ? "hide" : "open"}`}
      onClick={(e) => handleMenuToggle(e, !isMenuShown)}
      onKeyUp={(e) => handleMenuClose(e, !isMenuShown)}
      type="button"
      aria-haspopup="true"
      aria-controls="menuNav"
      {...restProps}
    >
      {children}
    </S.Btn>
  );
};
Menu.List = function MenuList({ children, ...restProps }) {
  const { isMenuShown } = useContext(menuToggleContext);
  return (
    <S.List isMenuShown={isMenuShown} id="menuNav" {...restProps}>
      {children}
    </S.List>
  );
};
Menu.Item = function MenuItem({ children, ...restProps }) {
  const { handleMenuToggle, isMenuShown, handleMenuClose } =
    useContext(menuToggleContext);
  return (
    <S.Item
      {...restProps}
      onClick={(e) => handleMenuToggle(e, false)}
      onKeyUp={(e) => handleMenuClose(e, !isMenuShown)}
    >
      {children}
    </S.Item>
  );
};
Menu.Link = function MenuLink({ children, ...restProps }) {
  return <S.Link {...restProps}>{children}</S.Link>;
};
