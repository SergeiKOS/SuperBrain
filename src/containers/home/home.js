import React, { useState } from "react";
import GameCard from "../../components/gameCard";
import {CardsWrapper} from "./homeStyles";

const Home = () => {
  const [gamesDescription] = useState([
    {
      id: "1",
      title: "Calculations",
      image: "",
      link: '/games/calculations'
    },
    {
      id: "2",
      title: "Trivia",
      image: "",
      link: '/games/trivia'
    },
    {
      id: "3",
      title: "HotOrCold",
      image: "",
      link: '/games/hotorcold'
    },
    {
      id: "4",
      title: "Memory",
      image: "",
      link: '/games/memory'
    },
  ]);
  return (
    <div className="container">
      <CardsWrapper>
        {gamesDescription.map((game) => (
          <GameCard key={game.id}>
            <GameCard.Title>{game.title}</GameCard.Title>
            <GameCard.Image src="https://via.placeholder.com/260"></GameCard.Image>
            <GameCard.Link to={game.link}>Start {game.title} game</GameCard.Link>
          </GameCard>
        ))}
      </CardsWrapper>
    </div>
  );
};

export default Home;
