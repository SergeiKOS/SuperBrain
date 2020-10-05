import React, { useState } from "react";
import { CalculationsCss } from "./CalculationsCss";

import InteractionWindow from "./components/InteractionWindow/InteractionWindow";

const Calculations = () => {
  const [startGame, setStartGame] = useState(false);

  const handleStartGame = (bool) => {
    setStartGame(bool);
  };

  return (
    <CalculationsCss>
      <InteractionWindow startGame={startGame}  onStartGame={handleStartGame} />
    </CalculationsCss>
  );
};

export default Calculations;
