import React from "react";
import { useParams } from "react-router-dom";

import { GameCss } from "./GameCss";

import NotFound from "../NotFound";
import Calculations from "../Games/Calculations/Calculations";
import Game2 from "../Games/Game2";
import Game3 from "../Games/Game3";
import Game4 from "../Games/Game4";

const Game = () => {
  let { gameName } = useParams();

  const renderGame = () => {
    switch (gameName) {
      case "calculations":
        return <Calculations />;
      case "game2":
        return <Game2 />;
      case "game3":
        return <Game3 />;
      case "game4":
        return <Game4 />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="container">
      <GameCss>{renderGame()}</GameCss>
    </div>
  );
};

export default Game;
