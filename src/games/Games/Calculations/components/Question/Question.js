import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import { makeRandomNumber } from "../../../../../utils/makeRandomNumber";
import { makeRandomOperator } from "../../utils/makeRandomOperator";
import { calculateEquation } from "../../utils/calculateEquation";
import { Btn } from "../../global/Button";
import Table from "../Table/Table";

const Question = ({
  renderQuestion,
  submittedAnswer,
  gameFinished,
  onStartGameAgain,
}) => {
  const [randomEquation, setRandomEquation] = useState({});
  const [calculatedEquation, setCalculatedEquation] = useState({});
  const [result, setResult] = useState([]);

  useEffect(() => {
    setRandomEquation({
      firstNumber: makeRandomNumber(1, 10),
      secondNumber: makeRandomNumber(1, 10),
      operator: makeRandomOperator(),
    });

    if (Number.isInteger(submittedAnswer)) {
      setResult([
        ...result,
        {
          id: Math.random(),
          equation: `${randomEquation.firstNumber} ${randomEquation.operator}
          ${randomEquation.secondNumber}`,
          yourAnswer: submittedAnswer,
          correctAnswer: calculatedEquation.calculated,
        },
      ]);
    }
  }, [renderQuestion]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setCalculatedEquation({
      calculated: calculateEquation(
        randomEquation.firstNumber,
        randomEquation.operator,
        randomEquation.secondNumber
      ),
    });
  }, [randomEquation]);

  const handleResultReset = () => {
    setResult([]);
    onStartGameAgain();
  };

  return (
    <div className="question">
      {gameFinished ? (
        <>
          <Table result={result} />
          <Btn onClick={handleResultReset}>Again</Btn>
        </>
      ) : (
        randomEquation.firstNumber &&
        ` Calculate: ${randomEquation.firstNumber} ${randomEquation.operator}
        ${randomEquation.secondNumber}`
      )}
    </div>
  );
};

Question.propTypes = {
  renderQuestion: PropTypes.bool.isRequired,
  submittedAnswer: PropTypes.number,
  gameFinished: PropTypes.bool.isRequired,
  onStartGameAgain: PropTypes.func.isRequired,
};

export default Question;
