import React from "react";
// import { Link } from "react-router-dom";

import { LogoWrapper, Link } from "./styles/logo";

const Logo = ({ children, ...restProps }) => {
  return (
      <LogoWrapper {...restProps}>{children}</LogoWrapper>
  )
}

Logo.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
}

// const LogoContainer = () => {
//   return (
//     <Logo>
//       <Link to="/">SuperBrain</Link>
//     </Logo>
//   );
// };

export default Logo;  
