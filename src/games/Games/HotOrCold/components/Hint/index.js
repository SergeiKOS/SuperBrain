import React from "react";

import PropTypes from 'prop-types'

import { HintCss } from "./styles/Hint";

function Hint({ hintForArrayNumber, number }) {
  const hints = [
    "Cold",
    "Warm",
    "Hot",
    "Extremely hot",
    "You Won! Reset the game to play again.",
    `You have already tried number.`
  ];

  return (
    <HintCss>
      {hints[hintForArrayNumber]
        ? hints[hintForArrayNumber]
        : `Guess the number from ${number.from} to ${number.to}.`}
    </HintCss>
  );
}

Hint.propTypes = {
  hintForArrayNumber: PropTypes.number,
  number: PropTypes.object.isRequired
}

export default Hint;
