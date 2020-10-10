import React from "react";
import { HintCss } from "./styles/hint";

function Hint({ hintForArrayNumber, number }) {
  const hints = [
    "Cold",
    "Warm",
    "Hot",
    "Exremely hot",
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

export default Hint;
