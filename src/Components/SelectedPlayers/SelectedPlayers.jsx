import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";
const SelectedPlayers = ({ purchasedPlayers, removePlayer, setToggle }) => {
  return (
    <div className="max-w-300 mx-auto w-11/12">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          key={player.name}
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}

      <div>
        <button
          onClick={() => setToggle(true)}
          className="btn rounded-2xl bg-[#E7FE29] mt-10"
        >
          Add more players
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
