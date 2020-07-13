import React, { useState, useEffect } from "react";
import { makeRandomNumber } from "../../../../../utils/makeRandomNumber";
import { makeRandomOperator } from "../../utils/makeRandomOperator";
import { calculateEquation } from "../../utils/calculateEquation";
import { Btn } from "../../../../../elements/components/Button";

import Table from "./Table";

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
  }, [renderQuestion]);

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

export default Question;
