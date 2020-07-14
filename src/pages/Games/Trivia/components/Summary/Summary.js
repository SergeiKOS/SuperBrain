import React from "react";
import { SummaryCss } from "./SummaryCss";

const Summary = ({ userAnswer }) => {
  const summary = (rightAnswers, wrongAnswers) => {
    return (
      <SummaryCss>
        <div>
          {userAnswer.map((answer) => (
            <div className="answer-wrapper" key={answer.question}>
              <div>Question: {answer.question}</div>
              <div className="right-answer">
                Right answer: {answer.rightAnswer}
              </div>
              {answer.wrongAnswer ? (
                <div className="wrong-answer">
                  Your answer: {answer.wrongAnswer}
                </div>
              ) : (
                ""
              )}
              <hr />
            </div>
          ))}
        </div>

        <div className="summary right-answer">
          Right answers: {rightAnswers}
        </div>
        <div className="summary wrong-answer">
          Wrong answers: {wrongAnswers}
        </div>
      </SummaryCss>
    );
  };

  const countAnswers = () => {
    let rightAnswers = 0;
    let wrongAnswers = 0;
    userAnswer.forEach((answer) => {
      answer.wrongAnswer ? wrongAnswers++ : rightAnswers++;
    });
    return summary(rightAnswers, wrongAnswers);
  };

  return countAnswers();
};

export default Summary;
