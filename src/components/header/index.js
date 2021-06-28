import React from "react";

import * as S from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <S.Header {...restProps}>{children}</S.Header>;
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <S.Wrapper {...restProps}>{children}</S.Wrapper>;
};
