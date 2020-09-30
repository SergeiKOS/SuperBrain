import React from "react";
import { useParams } from "react-router-dom";

import { GameCss } from "./GameCss";

import NotFound from "../../pages/NotFound";
import Calculations from "../Games/Calculations/Calculations";
import Trivia from "../Games/Trivia/Trivia";
import Game3 from "../Games/Game3";
import Game4 from "../Games/Game4";

const CurrentGame = () => {
  let { gameName } = useParams();

  const gamesList = {
    calculations: <Calculations />,
    trivia: <Trivia />,
    game3: <Game3 />,
    game4: <Game4 />,
  };

  return (
      <GameCss className="container">
        <h2>{gameName.charAt(0).toUpperCase() + gameName.slice(1)}</h2>
        {gamesList[gameName] || <NotFound/>}
      </GameCss>
  );
};

export default CurrentGame;
