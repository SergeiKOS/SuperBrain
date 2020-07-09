import React, { useState, useEffect } from "react";
import { makeRandomNumber } from "../../../../../utils/makeRandomNumber";
import { makeRandomOperator } from "../../utils/makeRandomOperator";
import { calculateEquation } from "../../utils/calculateEquation";

import Table from "./Table";

const Question = ({ renderQuestion, submittedAnswer, gameFinished }) => {
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

  return (
    <div className="question">
      {gameFinished ? (
        <Table result={result} />
      ) : (
        ` Calculate: ${randomEquation.firstNumber} ${randomEquation.operator}
        ${randomEquation.secondNumber}`
      )}
    </div>
  );
  // return (
  //   function mathOp(num) {
  //     if (op == "+") {
  //       result = x + y;
  //     } else if (op == "-") {
  //       result = x - y;
  //     } else if (op == "*") {
  //       result = x * y;
  //     }
  //     return result;
  //   }
  //   function start() {
  //     var code,
  //       answer,
  //       userNum,
  //       right = 0,
  //       wrong = 0,
  //       rightAnswer,
  //       wrongAnswer,
  //       tableRightAnswer,
  //       tableWrongAnswer,
  //       results,
  //       pNew;
  //     results = document.querySelector(".results");
  //     do {
  //       userNum = +prompt("Сколько раз Вы хотите решить примеры?", "");
  //     } while (isNaN(userNum));
  //     for (var i = 0; i < userNum; i++) {
  //       x = randomInt(1, 10);
  //       y = randomInt(1, 10);
  //       code = randomInt(0, 2);
  //       op = variants[code];
  //       result = mathOp(op);
  //       answer = prompt("Сколько будет " + x + " " + op + " " + y + "?", "");
  //       if (answer == null) {
  //         break;
  //       } else if (isNaN(answer) || answer == " " || answer == "") {
  //         alert("Вы ввели не число!");
  //         i--;
  //       } else if (result == answer) {
  //         rightAnswer =
  //           "Правильно. " + x + " " + op + " " + y + " = " + answer;
  //         pNew = document.createElement("p");
  //         pNew.className = "table-right-answer";
  //         pNew.innerHTML = rightAnswer;
  //         results.appendChild(pNew);
  //         right++;
  //       } else {
  //         wrongAnswer =
  //           "Неправильно. " +
  //           x +
  //           " " +
  //           op +
  //           " " +
  //           y +
  //           " не равно " +
  //           answer +
  //           ", а равно " +
  //           result;
  //         pNew = document.createElement("p");
  //         pNew.className = "table-wrong-answer";
  //         pNew.innerHTML = wrongAnswer;
  //         results.appendChild(pNew);
  //         wrong++;
  //       }
  //     }
  //     pNew = document.createElement("p");
  //     pNew.className = "stat";
  //     pNew.innerHTML =
  //       "Вы ответили " +
  //       declension(right) +
  //       " правильно и " +
  //       declension(wrong) +
  //       " неправильно.";
  //     results.appendChild(pNew);
  //   }
  //   var x, y, op, result, btnStart, numberName;
  //   var variants = ["+", "-", "*"];
  //   btnStart = document.querySelector(".btn");
  //   btnStart.addEventListener("click", function(event) {
  //     event.preventDefault;
  //     start();
  //   });
  // )
};

export default Question;
