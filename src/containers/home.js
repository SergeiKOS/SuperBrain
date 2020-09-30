import React from "react";
import GameCard from "../components/gameCard";

const Home = () => {
  return (
    <>
      <div className="container">
        <GameCard>
          <GameCard.Title>Game title</GameCard.Title>
          <GameCard.Image src="https://via.placeholder.com/150"></GameCard.Image>
          <GameCard.Btn>Start this game</GameCard.Btn>
        </GameCard>
      </div>
    </>
  );
};

export default Home;
