import React from "react";
import {Btn} from './styles/button'

function Button({children, ...restProps}) {
  return (
    <Btn {...restProps}>
      {children}
    </Btn>
  );
}

export default Button;
