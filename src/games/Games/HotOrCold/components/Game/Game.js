import React, { useState, useEffect } from "react";

import {GameWrapper} from './styles/Game'

import Hint from "../Hint";
import GameForm from "../GameForm/";
import ModalManual from "../ModalManual";
import History from "../History";
import { makeRandomNumber } from "../../../../../utils/makeRandomNumber";

function Game() {
  const [guessValue, setGuessValue] = useState("");
  const [hintForArrayNumber, setHintForArrayNumber] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [disableGame, setDisableGame] = useState(false);
  const [guessNumber, setGuessNumber] = useState(0);
  const [guessArray, setGuessArray] = useState([]);
  const [newGameCount, setNewGameCount] = useState(0);
  const [toggleRules, setToggleRules] = useState(false);
  const [victoryData, setVictoryData] = useState([]);

  const number = {
    from: 1,
    to: 100,
  };

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    setRandomNumber(makeRandomNumber(number.from, number.to));
  }, [newGameCount]);

  const handleGuessValueChange = (e) => {
    let { value } = e.target;
    if (value !== "") {
      value = +value;
      if (isNaN(value)) {
        return null;
      }
    }
    if (value < number.from - 1 || value > number.to) {
      return null;
    }
    setGuessValue(value);
  };

  const checkNumber = (guessValue) => {
    guessValue = +guessValue;
    const repetition = guessArray.find((number) => number === guessValue);
    if (repetition || guessValue === 0) {
      // show tooltip "You have already tried this number."

      return null;
    }
    setGuessNumber(guessNumber + 1);

    let result = randomNumber - guessValue;
    console.log(randomNumber);
    console.log(guessValue);
    result = Math.abs(result);
    setGuessArray([...guessArray, guessValue]);
    switch (true) {
      case result > 20:
        setHintForArrayNumber(0);
        break;
      case result > 10:
        setHintForArrayNumber(1);
        break;
      case result > 5:
        setHintForArrayNumber(2);
        break;
      case result > 0:
        setHintForArrayNumber(3);
        break;
      case result === 0:
        setHintForArrayNumber(4);
        setDisableGame(true);
        const newHistoryData = {
          victoryDate: `${new Date().getDate()} ${
            month[new Date().getMonth()]
          } ${new Date().getFullYear()}`,
          victoryNumber: guessNumber + 1,
        };
        setVictoryData([...victoryData, newHistoryData]);
        break;
      default:
    }
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    checkNumber(guessValue);

    setGuessValue("");
  };

  const handleReset = () => {
    setNewGameCount(newGameCount + 1);
    setHintForArrayNumber();
    setDisableGame(false);
    setGuessNumber(0);
    setGuessArray([]);
  };

  const handleShowRules = () => {
    setToggleRules(!toggleRules);
  };

  return (
    <GameWrapper>
      <Hint hintForArrayNumber={hintForArrayNumber} number={number} />
      <GameForm
        guessValue={guessValue}
        onGuessValueChange={handleGuessValueChange}
        onGuessSubmit={handleGuessSubmit}
        disableGame={disableGame}
        guessNumber={guessNumber}
        guessArray={guessArray}
        onReset={handleReset}
        onShowRules={handleShowRules}
      />
      <History victoryData={victoryData} />{" "}
      {toggleRules && <ModalManual onShowRules={handleShowRules} />}
    </GameWrapper>
  );
}

export default Game;
