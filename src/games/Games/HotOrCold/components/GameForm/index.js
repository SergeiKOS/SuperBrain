import React from "react";
import PropTypes from 'prop-types'

import Button from "../Button";

import { LabelInputWrapper, Label, Input, GuessesNumber, GuessesStats  } from "./styles/GameForm";

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
        <Button disabled={disableGame} onClick={onGuessSubmit} type="submit">
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

GameForm.propTypes = {
  guessValue: PropTypes.any,
  onGuessValueChange: PropTypes.func.isRequired,
  onGuessSubmit: PropTypes.func.isRequired,
  disableGame: PropTypes.bool.isRequired,
  guessNumber: PropTypes.number.isRequired,
  guessArray: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired,
  onShowRules: PropTypes.func.isRequired,
  number : PropTypes.object.isRequired,
}

export default GameForm;
