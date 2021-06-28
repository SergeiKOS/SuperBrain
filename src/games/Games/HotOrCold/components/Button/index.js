import React from "react";

import * as S from "./styles/Button";

function Button({ children, ...restProps }) {
  return (
    <S.Button
      {...restProps}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </S.Button>
  );
}

export default Button;
