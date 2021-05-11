import React from "react";

import { Btn } from "./styles/Button";

function Button({ children, ...restProps }) {
  return (
    <Btn {...restProps} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </Btn>
  );
}

export default Button;
