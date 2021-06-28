import React, { useState } from "react";

import PropTypes from "prop-types";

import {
  customAlert,
  NotificationComponent,
} from "../../../../../utils/customNotification";
import * as S from "./InteractionWindowCss";
import { Btn } from "../../global/Button";
import Question from "../Question/Question";

const InteractionWindow = ({ startGame, onStartGame }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState();
  const [focusAdded, setFocusAdded] = useState(false);
  const [triggerNewQuestionBySwitching, setTriggerNewQuestionBySwitching] =
    useState(false);
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

    if (userAnswer === "") {
      customAlert("Type an answer.");
      return;
    }

    setSubmittedAnswer(parseInt(userAnswer));

    setUserAnswer("");
    setGameEquationsQuantity(gameEquationsQuantity - 1);
    if (gameEquationsQuantity <= 1) {
      setGameFinished(true);
      setTriggerNewQuestionBySwitching(!triggerNewQuestionBySwitching);
      return;
    }
    setTriggerNewQuestionBySwitching(!triggerNewQuestionBySwitching);
  };

  const submitQuantityAnswer = (e) => {
    e.preventDefault();
    if (userAnswer < 1) {
      customAlert("The number can't be less then 1.");
      return;
    }

    setUserAnswer("");
    setGameEquationsQuantity(userAnswer);
    onStartGame(true);
  };

  const handleStartGameAgain = () => {
    setGameFinished(false);
    setSubmittedAnswer();
    onStartGame(false);
  };

  const renderGame = () => {
    if (startGame) {
      return (
        <>
          <S.InteractionWindow>
            <Question
              renderQuestion={triggerNewQuestionBySwitching}
              submittedAnswer={submittedAnswer}
              gameFinished={gameFinished}
              onStartGameAgain={handleStartGameAgain}
            />

            {gameFinished ? null : (
              <form onSubmit={submitAnswer}>
                <div
                  className={`answer-wrapper ${focusAdded ? "focused" : ""}`}
                >
                  <label htmlFor="answer">Type your answer</label>
                  <input
                    id="answer"
                    type="number"
                    value={userAnswer}
                    onChange={handleUserAnswerChange}
                    autoComplete="off"
                    autoFocus={true}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <Btn
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </Btn>
              </form>
            )}
            <NotificationComponent />
          </S.InteractionWindow>
        </>
      );
    } else {
      return (
        <S.InteractionWindow>
          <form onSubmit={submitQuantityAnswer}>
            <div className={`answer-wrapper focused`}>
              <label htmlFor="equations-amount">
                How many random equations do you want to train?
              </label>
              <input
                id="equations-amount"
                type="number"
                value={userAnswer}
                onChange={handleUserAnswerChange}
                autoComplete="off"
                autoFocus={true}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <Btn
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start
            </Btn>
          </form>
          <NotificationComponent />
        </S.InteractionWindow>
      );
    }
  };

  return renderGame();
};

InteractionWindow.propTypes = {
  startGame: PropTypes.bool.isRequired,
  onStartGame: PropTypes.func.isRequired,
};

export default InteractionWindow;
