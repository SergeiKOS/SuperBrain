import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tile from "../components/tile";
import GameSquare from "../components/gameSquare";

import { makeRandomNumber } from "../../../../utils/makeRandomNumber";

const GameInteractionSquare = ({ levels, level, showChosenSquares, doChangeSquareVisibility }) => {
  const createChosenSquares = () => {
    const squareNumbers = [];
    for (let i = 0; i < levels[level - 1].tiles; i++) {
      const num = makeRandomNumber(1, levels[level - 1].tilesOverall);
      if (squareNumbers.indexOf(num) === -1) {
        squareNumbers.push(num);
      } else {
        i--;
      }
    }
    return squareNumbers;
  };
  const renderLevels = () => {
    const tilesArray = [];
    let tilesChosen = [];

    if (showChosenSquares) {
      tilesChosen = createChosenSquares();
    }

    for (let i = 0; i < levels[level - 1].tilesOverall; i++) {
      tilesArray.push(
        <Tile
          key={i}
          className={tilesChosen.indexOf(i + 1) !== -1 ? "chosen-square" : ""}
          onClick={handleTileClick}
        />
      );
    }
    return tilesArray;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      doChangeSquareVisibility()
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleTileClick = (e) => {
    console.log(e.target.dataset.chosen);
  }

  return <GameSquare className={`level${level}`}>{renderLevels()}</GameSquare>;
};

GameInteractionSquare.propTypes = {
  levels: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired,
};

export default GameInteractionSquare;
