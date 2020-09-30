import React from "react";
import PropTypes from "prop-types";

import { SummaryCss } from "./SummaryCss";

const Summary = ({ userAnswers }) => {
  const summary = (rightAnswers, wrongAnswers) => {
    return (
      <SummaryCss>
        <div>
          {userAnswers.map((answer) => (
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
    userAnswers.forEach((answer) => {
      answer.wrongAnswer ? wrongAnswers++ : rightAnswers++;
    });
    return summary(rightAnswers, wrongAnswers);
  };

  return countAnswers();
};

Summary.propTypes = {
  userAnswers: PropTypes.array.isRequired,
};

export default Summary;
