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
      <div className="calculations-wrapper">
        <h1>Calculations game</h1>
        <InteractionWindow
          startGame={startGame}
          onStartGame={handleStartGame}
        />
      </div>
    </CalculationsCss>
  );
};

export default Calculations;
