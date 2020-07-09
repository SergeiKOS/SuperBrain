import React from "react";

const Result = ({ result: { equation, yourAnswer, correctAnswer } }) => {
  return (
    <>
      <td>{equation}</td>
      <td>{yourAnswer}</td>
      <td>{correctAnswer}</td>
    </>
  );
};

export default Result;
