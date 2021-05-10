import React from "react";

import PropTypes from "prop-types";

const Result = ({ result: { equation, yourAnswer, correctAnswer } }) => {
  const rightOrWrongAnswer = () => {
    if (yourAnswer === correctAnswer) {
      return "right";
    } else {
      return "wrong";
    }
  };
  return (
    <>
      <td className={rightOrWrongAnswer()}>{equation}</td>
      <td className={rightOrWrongAnswer()}>{yourAnswer}</td>
      <td className={rightOrWrongAnswer()}>{correctAnswer}</td>
      {/* <td className="timeout">Timeout</td> */}
    </>
  );
};

Result.propTypes = {
  result: PropTypes.shape({
    equation: PropTypes.string.isRequired,
    yourAnswer: PropTypes.number.isRequired,
    correctAnswer: PropTypes.number.isRequired,
  }),
};

export default Result;
