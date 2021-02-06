import React, { useState, useEffect } from "react";

import { GameWrapper } from "./HotOrColdCss";

import Hint from "./components/Hint";
import GameForm from "./components/GameForm";
import ModalManual from "./components/ModalManual";
import History from "./components/History";
import { makeRandomNumber } from "../../../utils/makeRandomNumber";

function HotOrCold() {
  const [guessValue, setGuessValue] = useState('');
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
  }, [newGameCount]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleGuessValueChange = (e) => {
    let { value } = e.target;
    if (value !== "") {
      value = +value;
      if (isNaN(value)) {
        return;
      }
    }
    if (value !== "") {
      if (value < number.from || value > number.to) {
        return;
      }
    }
    setGuessValue(value); 
  };

  const checkNumber = (guessValue) => {
    guessValue = +guessValue;
    const repetition = guessArray.find((number) => number === guessValue);
    if (repetition) {
      setHintForArrayNumber(5);
      return;
    }
    setGuessNumber(guessNumber + 1);

    let result = randomNumber - guessValue;
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

    if (guessValue === 0 || !guessValue) {
      return;
    }

    checkNumber(guessValue);
    setGuessValue('');
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
        number={number}
      />
      <History victoryData={victoryData} />
      {toggleRules && <ModalManual onShowRules={handleShowRules} />}
    </GameWrapper>
  );
}

export default HotOrCold;
