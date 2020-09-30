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
        <InteractionWindow
          startGame={startGame}
          onStartGame={handleStartGame}
        />
      </div>
    </CalculationsCss>
  );
};

export default Calculations;
