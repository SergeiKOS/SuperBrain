import React, {forwardRef} from "react";

import PropTypes from "prop-types";

import { QuestionBtnCss } from "./styles/QuestionBtnCss";
  
const QuestionBtn = forwardRef(( props, ref ) => {
  return (
    <QuestionBtnCss ref={ref} {...props}>
      {props.children}
    </QuestionBtnCss>
  );
})

QuestionBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool,
  className: PropTypes.string,
  refProps: PropTypes.object,
};

export default QuestionBtn;
