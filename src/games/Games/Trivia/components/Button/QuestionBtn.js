import React from "react";
import PropTypes from "prop-types";

import { QuestionBtnCss } from "./QuestionBtnCss";

function QuestionBtn({ text, onClick, disable, className, refProps }) {
  return (
    <QuestionBtnCss
      disabled={disable}
      onClick={onClick}
      className={className}
      ref={refProps}
    >
      {text}
    </QuestionBtnCss>
  );
}

QuestionBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
  className: PropTypes.string,
  refProps: PropTypes.object,
};

export default QuestionBtn;
