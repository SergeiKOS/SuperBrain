import React, { useState, useEffect } from "react";
import {
  MemoryContainer,
  MemoryPopup,
  MemoryPopupWindow,
  MemoryPopupBtn,
} from "./MemoryCss";

import ProgressFields from "./containers/progressFields";
import GameInteractionSquare from "./containers/gameInteractionSquare";
import { makeRandomNumber } from "../../../utils/makeRandomNumber";

const Memory = () => {
  // нужно сделать что когда нажимаем на самоу игру выпадало окошко с правилами и кнопкой старта и там же кнопку с правилами сделть
  const [levels, setLevels] = useState([
    {
      level: 1,
      tiles: 1,
      tilesOverall: 4,
      tilesChosen: [],
    },
    {
      level: 2,
      tiles: 2,
      tilesOverall: 4,
      tilesChosen: [],
    },
    // {
    //   level: 3,
    //   tiles: 3,
    //   tilesOverall: 9,
    //   tilesChosen: [],
    // },
    // {
    //   level: 4,
    //   tiles: 4,
    //   tilesOverall: 16,
    //   tilesChosen: [],
    // },
    // {
    //   level: 5,
    //   tiles: 5,
    //   tilesOverall: 25,
    //   tilesChosen: [],
    // },
    // {
    //   level: 6,
    //   tiles: 6,
    //   tilesOverall: 25,
    //   tilesChosen: [],
    // },
    // {
    //   level: 7,
    //   tiles: 7,
    //   tilesOverall: 25,
    //   tilesChosen: [],
    // },
    // {
    //   level: 8,
    //   tiles: 8,
    //   tilesOverall: 36,
    //   tilesChosen: [],
    // },
    // {
    //   level: 9,
    //   tiles: 9,
    //   tilesOverall: 36,
    //   tilesChosen: [],
    // },
    // {
    //   level: 10,
    //   tiles: 10,
    //   tilesOverall: 36,
    //   tilesChosen: [],
    // },
    // {
    //   level: 11,
    //   tiles: 11,
    //   tilesOverall: 36,
    //   tilesChosen: [],
    // },
    // {
    //   level: 12,
    //   tiles: 12,
    //   tilesOverall: 36,
    //   tilesChosen: [],
    // },
  ]);

  const [level, setLevel] = useState(1);
  const [attempts, setAttempts] = useState(1);
  const [popupShowed, setPopupShowed] = useState(false);

  const [isShownChosenSquares, setIsShownChosenSquares] = useState(true);
  const [chosenSquareList, setChosenSquareList] = useState([]);

  const [attentionText, setAttentionText] = useState("");
  const [btnText, setBtnText] = useState("Restart level");

  useEffect(() => {
    // save chosen squares  to the state
    const squareNumbers = [];
    for (let i = 0; i < levels[level - 1].tiles; i++) {
      const num = makeRandomNumber(1, levels[level - 1].tilesOverall);
      if (squareNumbers.indexOf(num) === -1) {
        squareNumbers.push(num);
      } else {
        i--;
      }
    }
    const levelsCopy = [...levels];
    levelsCopy[level - 1].tilesChosen = squareNumbers;
    setLevels([...levelsCopy]);
  }, [popupShowed]);

  const showPopup = (attentionText, btnText) => {
    setPopupShowed(!popupShowed);
    setAttentionText(attentionText);
    setBtnText(btnText);
  };

  const prepareLevel = () => {
    showChosenEachSquares([]);
    setPopupShowed(!popupShowed);
    showChosenSquares();
    setIsShownChosenSquares(true);
  };

  const handleLevelStart = () => {
    const tryAgainIfLost = () => {
      prepareLevel();
      setAttempts(attempts + 1);
    };
    if (level !== levels.length) {
      tryAgainIfLost();
      if (chosenSquareList.length === levels[level - 1].tilesChosen.length) {
        setLevel(level + 1);
      }
    } else if (
      chosenSquareList.length === levels[level - 1].tilesChosen.length
    ) {
      prepareLevel();
      setAttempts(1);
      setLevel(1);
    } else {
      // if max level and lost
      tryAgainIfLost();
    }
  };

  const showChosenSquares = () => {
    setIsShownChosenSquares(false);
  };

  const showChosenEachSquares = (arr) => {
    setChosenSquareList(arr);
    if (arr.length === levels[level - 1].tilesChosen.length) {
      if (level === levels.length) {
        showPopup(
          "You won! There aren't any new levels for you but you can play again.",
          "Play again"
        );
      } else {
        showPopup("Good job! Click below for the next level.", "Next level");
      }
    }
  };

  return (
    <>
      <MemoryContainer>
        {popupShowed ? (
          <MemoryPopup>
            <MemoryPopupWindow>
              {attentionText ? attentionText : ""}
              <MemoryPopupBtn onClick={handleLevelStart}>
                {btnText}
              </MemoryPopupBtn>
            </MemoryPopupWindow>
          </MemoryPopup>
        ) : null}
        <ProgressFields levels={levels} level={level} attempts={attempts} />
        <GameInteractionSquare
          levels={levels}
          level={level}
          showPopup={showPopup}
          isShownChosenSquares={isShownChosenSquares}
          chosenSquareList={chosenSquareList}
          showChosenSquares={showChosenSquares}
          showChosenEachSquares={showChosenEachSquares}
        />
      </MemoryContainer>
    </>
  );
};

export default Memory;
