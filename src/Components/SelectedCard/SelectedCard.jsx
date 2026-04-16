import React from "react";
import delImg from "../../assets/Images/image.png";

const SelectedCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="mt-3 border-2 border-gray-500 rounded-2xl flex justify-between items-center">
      <div className="flex items-center gap-4 p-2">
        <img
          className="h-12.5 w-12.5 rounded-xl ml-4"
          src={player.image}
          alt={player.image_alt}
        />
        <div>
          <h1 className="text-2xl font-bold">{player.name}</h1>
          <p className="text-gray-400 text-xs">{player.battingStyle}</p>
        </div>
      </div>
      <div onClick={handleRemove}>
        <img src={delImg} alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
