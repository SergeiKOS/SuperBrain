import React from "react";
import { useParams } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Game1 from "../pages/games/Game1";
import Game2 from "../pages/games/Game2";
import Game3 from "../pages/games/Game3";
import Game4 from "../pages/games/Game4";

const Game = () => {
  let { gameName } = useParams();

  const renderGame = () => {
    switch (gameName) {
      case "game1":
        return <Game1 />;
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

  return <div className="container">{renderGame()}</div>;
};

export default Game;
