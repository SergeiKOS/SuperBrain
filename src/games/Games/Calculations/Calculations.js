import React, { useState } from "react";

import * as S from "./CalculationsCss";
import InteractionWindow from "./components/InteractionWindow/InteractionWindow";

const Calculations = () => {
  const [startGame, setStartGame] = useState(false);

  const handleStartGame = (bool) => {
    setStartGame(bool);
  };

  return (
    <S.Calculations>
      <InteractionWindow startGame={startGame} onStartGame={handleStartGame} />
    </S.Calculations>
  );
};

export default Calculations;
