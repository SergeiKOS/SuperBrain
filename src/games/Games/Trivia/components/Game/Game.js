import React, { useState } from "react";

import PropTypes from "prop-types";

import QuestionCard from "../QuestionCard/QuestionCard";
import Summary from "../Summary/Summary";

function Game({ formData, error }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [cardNumber, setCardNumber] = useState(0);

  const updateUserAnswer = (answer) => {
    setCardNumber(cardNumber + 1);
    setUserAnswers([...userAnswers, answer]);
  };

  return (
    <div>
      {formData.length ? (
        formData.length !== userAnswers.length ? (
          <QuestionCard
            gameData={formData[cardNumber]}
            cardNumber={cardNumber}
            updateUserAnswer={updateUserAnswer}
          />
        ) : (
          <Summary userAnswers={userAnswers} />
        )
      ) : error ? (
        <span>{error}</span>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

Game.propTypes = {
  formData: PropTypes.array.isRequired,
  error: PropTypes.string,
};

export default Game;
