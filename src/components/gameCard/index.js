import React from "react";

import { Card, Image, Title } from "./styles/gameCard";

export default function GameCard({ index, children, ...restProps }) {
  const SHOW_CARD_DELAY = 0.2;
  return (
    <Card
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: `${index * SHOW_CARD_DELAY}` }}
      {...restProps}
    >
      {children}
    </Card>
  );
}

GameCard.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

GameCard.Image = function ({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
