import React, { useState } from "react";
import PropTypes from "prop-types";

import { SummaryCss } from "./SummaryCss";

import Trivia from "../../Trivia";
import QuestionBtn from "../Button";

const Summary = ({ userAnswers }) => {
  const [restartGame, setRestartGame] = useState(false);

  const handleRestartGame = () => {
    setRestartGame(true);
  };

  const summary = (rightAnswers, wrongAnswers) => {
    if (restartGame) {
      return <Trivia />;
    } else {
      return (
        <>
          <SummaryCss>
            <div>
              {userAnswers.map((answer, index) => (
                <div className="answer-wrapper" key={index}>
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
          <QuestionBtn onClick={handleRestartGame}>Play again</QuestionBtn>
        </>
      );
    }
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
