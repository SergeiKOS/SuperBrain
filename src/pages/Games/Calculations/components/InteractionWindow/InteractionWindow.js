import React, { useState } from "react";
import { InteractionWindowCss } from "./InteractionWindowCss";

import Question from "./Question";

const InteractionWindow = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState();
  const [focusAdded, setFocusAdded] = useState(false);
  const [
    triggerNewQuestionBySwitching,
    setTriggerNewQuestionBySwitching,
  ] = useState(false);
  const [gameEquationsQuantity, setGameEquationsQuantity] = useState(3);
  const [gameFinished, setGameFinished] = useState(false);

  const handleFocus = () => {
    setFocusAdded(true);
  };
  const handleBlur = () => {
    if (userAnswer === "") {
      setFocusAdded(false);
    }
  };

  const handleUserAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const submitAnswer = (e) => {
    e.preventDefault();
    setSubmittedAnswer(parseInt(userAnswer));
    console.log(submittedAnswer);
    console.log(userAnswer);
    setUserAnswer("");
    setGameEquationsQuantity(gameEquationsQuantity - 1);
    if (gameEquationsQuantity <= 1) {
      setGameFinished(true);
      setTriggerNewQuestionBySwitching(!triggerNewQuestionBySwitching);
      return;
    }
    setTriggerNewQuestionBySwitching(!triggerNewQuestionBySwitching);
  };

  return (
    <InteractionWindowCss>
      <Question
        renderQuestion={triggerNewQuestionBySwitching}
        submittedAnswer={submittedAnswer}
        gameFinished={gameFinished}
      />

      {gameFinished ? null : (
        <form onSubmit={submitAnswer}>
          <div className={`answer-wrapper ${focusAdded ? "focused" : ""}`}>
            <label htmlFor="answer">Type your answer</label>
            <input
              id="answer"
              type="number"
              value={userAnswer}
              onChange={handleUserAnswerChange}
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </form>
      )}
    </InteractionWindowCss>
  );
};

export default InteractionWindow;
