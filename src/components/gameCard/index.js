import React from "react";
import { Card, Image, Title, Link } from "./styles/gameCard";


export default function GameCard ({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
}

GameCard.Title = function ({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

GameCard.Image = function ({children, ...restProps}) {
  return <Image {...restProps}>{children}</Image>
}

GameCard.Link = function ({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}
