import React from "react";

import PropTypes from "prop-types";

import Button from "../Button";
import * as S from "./styles/GameForm";

function GameForm({
  guessValue,
  onGuessValueChange,
  onGuessSubmit,
  disableGame,
  guessNumber,
  guessArray,
  onReset,
  onShowRules,
  number,
}) {
  return (
    <>
      <form onSubmit={onGuessSubmit} autoComplete="off">
        <S.LabelInputWrapper>
          <S.Label htmlFor="guess">Enter your guess:</S.Label>
          <S.Input
            id="guess"
            value={guessValue}
            onChange={onGuessValueChange}
            disabled={disableGame}
            type="number"
            min={number.from}
            max={number.to}
          />
        </S.LabelInputWrapper>
        <Button disabled={disableGame} onClick={onGuessSubmit} type="submit">
          Guess
        </Button>
      </form>

      <S.GuessesNumber>Guess amounts: {guessNumber}</S.GuessesNumber>
      <S.GuessesStats>
        Attempts made:{" "}
        {guessArray.map((guess) => (
          <span key={guess}>{guess} </span>
        ))}
      </S.GuessesStats>
      <Button className="small" onClick={onReset} disabled={false}>
        Reset game
      </Button>
      <Button
        className="small small-right"
        onClick={onShowRules}
        disabled={false}
      >
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
  number: PropTypes.object.isRequired,
};

export default GameForm;
