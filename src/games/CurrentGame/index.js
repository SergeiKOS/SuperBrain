import React from "react";
import { useParams } from "react-router-dom";

import { GameCss } from "./GameCss";

import NotFound from "../../pages/NotFound";
import Calculations from "../Games/Calculations/Calculations";
import Trivia from "../Games/Trivia/Trivia";
import HotOrCold from "../Games/HotOrCold";
import Memory from "../Games/Memory";

const CurrentGame = () => {
  const { gameName } = useParams();

  const gamesList = {
    calculations: <Calculations />,
    trivia: <Trivia />,
    hotorcold: <HotOrCold />,
    memory: <Memory />,
  };

  return (
      <GameCss className="container">
        {gameName === 'hotorcold' ? <h2>HotOrCold</h2> : <h2>{gameName.charAt(0).toUpperCase() + gameName.slice(1)}</h2>}
        {gamesList[gameName] || <NotFound/>}
      </GameCss>
  );
};

export default CurrentGame;
