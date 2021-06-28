import React, { forwardRef } from "react";

import PropTypes from "prop-types";

import * as S from "./styles/QuestionBtnCss";

const QuestionBtn = forwardRef((props, ref) => {
  return (
    <S.QuestionBtn ref={ref} {...props}>
      {props.children}
    </S.QuestionBtn>
  );
});

QuestionBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool,
  className: PropTypes.string,
  refProps: PropTypes.object,
};

export default QuestionBtn;
