import React from "react";
import Tile from "../components/tile";
import GameSquare from "../components/gameSquare";

const GameInteractionSquare = () => {
  return (
    <GameSquare>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </GameSquare>
  );
};

export default GameInteractionSquare;
