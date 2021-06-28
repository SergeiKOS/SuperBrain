import React from "react";

import * as S from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return (
    <S.Footer {...restProps}>
      {children}
    </S.Footer>
  );
}
