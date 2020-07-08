import React from "react";

import { HeaderCss } from "./HeaderCss";
import { HeaderWrapperCss } from "./HeaderWrapperCss";

import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <HeaderCss>
      <HeaderWrapperCss className="container">
        <Menu />
        <Logo />
        Profile
      </HeaderWrapperCss>
    </HeaderCss>
  );
};

export default Header;
