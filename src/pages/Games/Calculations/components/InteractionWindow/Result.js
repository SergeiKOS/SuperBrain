import React from "react";

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

export default Result;
