import React from "react";
import Button from "../Button";

import { LabelInputWrapper, Label, Input, GuessiesStats  } from "./styles/GameForm";

function GameForm({
  guessValue,
  onGuessValueChange,
  onGuessSubmit,
  disableGame,
  guessNumber,
  guessArray,
  onReset,
  onShowRules,
}) {
  return (
    <>
      <form onSubmit={onGuessSubmit} autoComplete="off">
        <LabelInputWrapper>
          <Label htmlFor="guess">Enter your guess:</Label>
          <Input
            id="guess"
            label="Number"
            variant="outlined"
            value={guessValue}
            onChange={onGuessValueChange}
            disabled={disableGame}
          />
        </LabelInputWrapper>
        <Button disabled={disableGame} onClick={onGuessSubmit}>
          Guess
        </Button>
      </form>

      <GuessiesStats>Guess # {guessNumber}</GuessiesStats>
      <div>
        {guessArray.map((guess) => (
          <span key={guess}>{guess} </span>
        ))}
      </div>
      <Button className='small' onClick={onReset} disabled={false} >
        Reset game
      </Button>
      <Button className='small small-right' onClick={onShowRules} disabled={false}>
        How to play
      </Button>
    </>
  );
}

export default GameForm;
