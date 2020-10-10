import React from "react";
import Button from "../Button";

import { LabelInputWrapper, Label, Input, GuessesNumber, GuessesStats  } from "./styles/gameForm";

function GameForm({
  guessValue,
  onGuessValueChange,
  onGuessSubmit,
  disableGame,
  guessNumber,
  guessArray,
  onReset,
  onShowRules,
  number
}) {
  return (
    <>
      <form onSubmit={onGuessSubmit} autoComplete="off">
        <LabelInputWrapper>
          <Label htmlFor="guess">Enter your guess:</Label>
          <Input
            id="guess"
            value={guessValue}
            onChange={onGuessValueChange}
            disabled={disableGame}
            type="number"
            min={number.from}
            max={number.to}
          />
        </LabelInputWrapper>
        <Button disabled={disableGame} onClick={onGuessSubmit}>
          Guess
        </Button>
      </form>

      <GuessesNumber>Guess amounts: {guessNumber}</GuessesNumber>
      <GuessesStats> 
        Attempts made: {guessArray.map((guess) => (
          <span key={guess}>{guess} </span>
        ))}
      </GuessesStats>
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
