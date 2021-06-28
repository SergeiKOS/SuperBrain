import React from "react";

import PropTypes from "prop-types";

import * as S from "./styles/Hint";

function Hint({ hintForArrayNumber, number }) {
  const hints = [
    "Cold",
    "Warm",
    "Hot",
    "Extremely hot",
    "You Won! Reset the game to play again.",
    `You have already tried number.`,
  ];

  return (
    <S.Hint>
      {hints[hintForArrayNumber]
        ? hints[hintForArrayNumber]
        : `Guess the number from ${number.from} to ${number.to}.`}
    </S.Hint>
  );
}

Hint.propTypes = {
  hintForArrayNumber: PropTypes.number,
  number: PropTypes.object.isRequired,
};

export default Hint;
