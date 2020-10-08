import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tile from "../components/tile";
import GameSquare from "../components/gameSquare";

const GameInteractionSquare = ({
  levels,
  level,
  showPopup,
  isShownChosenSquares,
  chosenSquareList,
  showChosenSquares,
  showChosenEachSquares,
}) => {
  const REMEMBER_DELAY_TIME = 500;

  const renderLevels = () => {
    const tilesArray = [];

    for (let i = 0; i < levels[level - 1].tilesOverall; i++) {
      const getClassName = () => {
        if (isShownChosenSquares) {
          if (levels[level - 1].tilesChosen.indexOf(i + 1) !== -1) {
            return "chosen-square";
          } else {
            return "";
          }
        } else {
          if (chosenSquareList.indexOf(i + 1) !== -1) {
            return "chosen-square";
          } else {
            return "";
          }
        }
      };
      tilesArray.push(
        <Tile
          key={i}
          data-chosen={
            levels[level - 1].tilesChosen.indexOf(i + 1) !== -1 ? "chosen" : ""
          }
          data-id={i + 1}
          className={getClassName()}
          onClick={!isShownChosenSquares ? handleTileClick : null}
        />
      );
    }
    return tilesArray;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showChosenSquares();
    }, REMEMBER_DELAY_TIME);
    return () => clearTimeout(timer);
  }, [isShownChosenSquares]);

  const handleTileClick = (e) => {
    const datasetId = parseInt(e.target.dataset.id);

    if (chosenSquareList.indexOf(datasetId) !== -1) {
      return;
    }
    
    if (e.target.dataset.chosen) {
      showChosenEachSquares([...chosenSquareList, parseInt(datasetId)]);
    } else {
      showPopup("You lost this one. Try again with this level.", "Restart level");
    }
  };

  return <GameSquare className={`level${level}`}>{renderLevels()}</GameSquare>;
};

GameInteractionSquare.propTypes = {
  levels: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired,
};

export default GameInteractionSquare;
