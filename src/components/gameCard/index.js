import React from "react";
import { Card, Image, Title, Btn } from "./styles/gameCard";


export default function GameCard ({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
}

GameCard.Title = function ({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

GameCard.Image = function ({children, ...restProps}) {
  return <Image {...restProps}>{children}</Image>
}

GameCard.Btn = function ({children, ...restProps}) {
  return <Btn {...restProps}>{children}</Btn>
}
