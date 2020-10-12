import React, { useState } from "react";
import GameCard from "../../components/gameCard";
import {CardsWrapper} from "./homeStyles";

import calculationImg from '../../img/calculation.png'
import triviaImg from '../../img/trivia.png'
import hotorcoldImg from '../../img/hotorcold.png'
import memoryImg from '../../img/memory.png'

const Home = () => {
  const [gamesDescription] = useState([
    {
      id: "1",
      title: "Calculations",
      image: calculationImg,
      link: '/games/calculations',
      alt: 'Screen sample from calculation game'
    },
    {
      id: "2",
      title: "Trivia",
      image: triviaImg,
      link: '/games/trivia',
      alt: 'Screen sample from trivia game'
    },
    {
      id: "3",
      title: "HotOrCold",
      image: hotorcoldImg,
      link: '/games/hotorcold',
      alt: 'Screen sample from hot or cold game'
    },
    {
      id: "4",
      title: "Memory",
      image: memoryImg,
      link: '/games/memory',
      alt: 'Screen sample from memory game'
    },
  ]);
  return (
    <div className="container">
      <CardsWrapper>
        {gamesDescription.map((game) => (
          <GameCard to={game.link} key={game.id}>
            <GameCard.Title>{game.title}</GameCard.Title>
            <GameCard.Image src={game.image} alt={game.alt} width='260' height='260'></GameCard.Image>
          </GameCard>
        ))}
      </CardsWrapper>
    </div>
  );
};

export default Home;
