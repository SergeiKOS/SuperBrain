import React from "react";

import * as S from "./styles/gameCard";

export default function GameCard({ index, children, ...restProps }) {
  const SHOW_CARD_DELAY = 0.2;
  return (
    <S.Card
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: `${index * SHOW_CARD_DELAY}` }}
      {...restProps}
    >
      {children}
    </S.Card>
  );
}

GameCard.Title = function ({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

GameCard.Image = function ({ children, ...restProps }) {
  return <S.Image {...restProps}>{children}</S.Image>;
};
