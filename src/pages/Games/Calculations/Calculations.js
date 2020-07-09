import React, { useState } from "react";
import { CalculationsCss } from "./CalculationsCss";
import { Btn } from "../../../elements/components/Button";
import InteractionWindow from "./components/InteractionWindow/InteractionWindow";

const Calculations = () => {
  const [startGame, setStartGame] = useState(true);

  const handleStartGame = () => {
    setStartGame(true);
  };
  return (
    <CalculationsCss>
      <h1>Calculations game</h1>
      {startGame ? (
        <InteractionWindow />
      ) : (
        <Btn onClick={handleStartGame}>Start</Btn>
      )}
    </CalculationsCss>
  );
};

export default Calculations;
