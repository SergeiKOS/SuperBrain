import React from "react";
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

export default QuestionBtn;
