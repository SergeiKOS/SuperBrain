import React from "react";

import {Btn} from './styles/Button'

function Button({children, ...restProps}) {
  return (
    <Btn {...restProps}>
      {children}
    </Btn>
  );
}

export default Button;
