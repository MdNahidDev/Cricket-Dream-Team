import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";
const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  return (
    <div className="max-w-300 mx-auto w-11/12">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
