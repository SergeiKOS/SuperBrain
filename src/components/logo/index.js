import React from "react";

import { LogoWrapper, Link } from "./styles/logo";

const Logo = ({ children, ...restProps }) => {
  return (
    <LogoWrapper {...restProps}>{children}</LogoWrapper>
  )
}

Logo.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
}

export default Logo;  
