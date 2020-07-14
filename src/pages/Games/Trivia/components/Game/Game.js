import React, { useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import Summary from "../Summary/Summary";

function Game({ formData }) {
  const [userAnswer, setUserAnswer] = useState([]);
  const [cardNumber, setCardNumber] = useState(0);

  const updateUserAnswer = (answer) => {
    setCardNumber(cardNumber + 1);
    setUserAnswer([...userAnswer, answer]);
  };

  return (
    <div>
      {formData.length ? (
        formData.length !== userAnswer.length ? (
          <QuestionCard
            gameData={formData[cardNumber]}
            cardNumber={cardNumber}
            updateUserAnswer={updateUserAnswer}
          />
        ) : (
          <Summary userAnswer={userAnswer} />
        )
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Game;
