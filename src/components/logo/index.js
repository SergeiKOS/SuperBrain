import React from "react";

import * as S from "./styles/logo";

const Logo = ({ children, ...restProps }) => {
  return <S.LogoWrapper {...restProps}>{children}</S.LogoWrapper>;
};

Logo.Link = ({ children, ...restProps }) => {
  return <S.Link {...restProps}>{children}</S.Link>;
};

export default Logo;
