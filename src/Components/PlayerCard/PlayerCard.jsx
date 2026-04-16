import React, { useState } from "react";
import userImg from "../../assets/Images/user 1.png";
import flagImg from "../../assets/Images/Group.png";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = playerData.price;
    if (availableBalance < playerPrice) {
      toast("Not enough coin");
      return;
    }

    setIsSelected(true);
    setAvailableBalance(availableBalance - playerData.price);
    setPurchasedPlayers([...purchasedPlayers, playerData]);
  };

  return (
    <div className="card bg-base-100 shadow-sm p-5">
      <figure>
        <img
          className="w-full h-75 object-cover"
          src={player.image}
          alt={player.image_alt}
        />
      </figure>
      <div className="mt-4">
        <div className="flex ml-2">
          <img src={userImg} alt="" />
          <h2 className="card-title">{player.name}</h2>
        </div>
        <div className="flex justify-between mt-4 border-gray-300 border-b-2 pb-2">
          <div className="flex items-center ml-2">
            <img className="w-5 h-5" src={flagImg} alt="" />
            <span className="ml-2">{player.country}</span>
          </div>
          <button className="btn">{player.role}</button>
        </div>

        <div className="flex justify-between">
          <span className="ml-2 font-bold">Rating</span>
          <span>{player.rating}</span>
        </div>

        <div className="flex justify-between mt-4">
          <span className="ml-2 font-bold">{player.battingStyle}</span>
          <span className="text-gray-500">{player.battingStyle}</span>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="ml-2 font-bold">Price: ${player.price}</p>
          <button
            disabled={isSelected}
            onClick={() => handleSelected(player)}
            className="btn"
          >
            {isSelected ? "Selected" : "Choose a player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
