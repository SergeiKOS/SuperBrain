import React from "react";
import { MemoryContainer } from "./MemoryCss";

import ProgressFields from "./containers/progressFields";
import GameInteractionSquare from "./containers/gameSquare";

const Memory = () => {
  return (
    <MemoryContainer>
      <ProgressFields />
      <GameInteractionSquare />
      {/* component with pause */}
    </MemoryContainer>
  );
};

export default Memory;
