import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tile from "../components/tile";
import GameSquare from "../components/gameSquare";

const GameInteractionSquare = ({
  levels,
  level,
  doPopup,
  showChosenSquares,
  showChosenEachSquares,
  doShowChosenSquares,
  doShowChosenEachSquares,
}) => {  
  const REMEMBER_DELAY_TIME = 2000;

  const renderLevels = () => {
    const tilesArray = [];

    for (let i = 0; i < levels[level - 1].tilesOverall; i++) {
      const getClassName = () => {
        if (showChosenSquares) {
          if (levels[level - 1].tilesChosen.indexOf(i + 1) !== -1) {
            return "chosen-square";
          } else {
            return "";
          }
        } else {
          if (showChosenEachSquares.indexOf(i + 1) !== -1) {
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
          onClick={!showChosenSquares ? handleTileClick : null}
        />
      );
    }
    return tilesArray;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      doShowChosenSquares();
    }, REMEMBER_DELAY_TIME);
    return () => clearTimeout(timer);
  }, [showChosenSquares]);

  const handleTileClick = (e) => {
    if (e.target.dataset.chosen) {
      doShowChosenEachSquares([
        ...showChosenEachSquares,
        parseInt(e.target.dataset.id),
      ]);
    } else {
      console.log("You lose try again with this level.");
      doPopup('Restart level');
    }
  };

  return <GameSquare className={`level${level}`}>{renderLevels()}</GameSquare>;
};

GameInteractionSquare.propTypes = {
  levels: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired,
};

export default GameInteractionSquare;
