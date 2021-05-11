import React from "react";

import { BeforeGameWrapper, Text, Link } from "./style/beforeGame";

const BeforeGame = () => {
  return (
    <BeforeGameWrapper>
      <Text>
        In this game you have to remember shown squares and after they disapear
        click on them. There are 12 levels. Click for start when ready.
      </Text>
      <Link
        to="/games/memory/game"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start
      </Link>
    </BeforeGameWrapper>
  );
};

export default BeforeGame;
