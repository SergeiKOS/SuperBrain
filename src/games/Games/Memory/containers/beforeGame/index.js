import React from "react";

import * as S from "./style/beforeGame";

const BeforeGame = () => {
  return (
    <S.BeforeGameWrapper>
      <S.Text>
        In this game you have to remember shown squares and after they disapear
        click on them. There are 12 levels. Click for start when ready.
      </S.Text>
      <S.Link
        to="/games/memory/game"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start
      </S.Link>
    </S.BeforeGameWrapper>
  );
};

export default BeforeGame;
