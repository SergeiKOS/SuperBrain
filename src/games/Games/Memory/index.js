import React, { useState } from "react";
import { MemoryContainer } from "./MemoryCss";

import ProgressFields from "./containers/progressFields";
import GameInteractionSquare from "./containers/gameInteractionSquare";
import ControlButton from "./components/controlButton";

const Memory = () => {
  const [levels, setLevels] = useState([
    {
      level: 1,
      tiles: 1,
      tilesOverall: 4,
      attempts: 1,
    },
    {
      level: 2,
      tiles: 2,
      tilesOverall: 4,
      attempts: null,
    },
    {
      level: 3,
      tiles: 3,
      tilesOverall: 9,
      attempts: null,
    },
    {
      level: 4,
      tiles: 4,
      tilesOverall: 16,
      attempts: null,
    },
    {
      level: 5,
      tiles: 5,
      tilesOverall: 25,
      attempts: null,
    },
    {
      level: 6,
      tiles: 6,
      tilesOverall: 25,
      attempts: null,
    },
    {
      level: 7,
      tiles: 7,
      tilesOverall: 25,
      attempts: null,
    },
    {
      level: 8,
      tiles: 8,
      tilesOverall: 36,
      attempts: null,
    },
    {
      level: 9,
      tiles: 9,
      tilesOverall: 36,
      attempts: null,
    },
    {
      level: 10,
      tiles: 10,
      tilesOverall: 36,
      attempts: null,
    },
    {
      level: 11,
      tiles: 11,
      tilesOverall: 36,
      attempts: null,
    },
    {
      level: 12,
      tiles: 12,
      tilesOverall: 36,
      attempts: null,
    },
  ]);

  const [level, setLevel] = useState(1);
  const [showChosenSquares, setShowChosenSquares] = useState(true);
  

  const handleChangeSquareVisibility = () => {
    setShowChosenSquares(!showChosenSquares)
  };

  return (
    <MemoryContainer>
      <ProgressFields levels={levels} level={level} />
      <GameInteractionSquare
        levels={levels}
        level={level}
        showChosenSquares={showChosenSquares}
        doChangeSquareVisibility={handleChangeSquareVisibility}
      />
      <ControlButton className="pause" />
      <ControlButton className="play" />
    </MemoryContainer>
  );
};

export default Memory;
