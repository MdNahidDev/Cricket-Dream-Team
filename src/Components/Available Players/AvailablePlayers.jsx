import React, { use } from "react";
import userImg from "../../assets/Images/user 1.png";
import flagImg from "../../assets/Images/Group.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);

  return (
    <div className="w-11/12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {playerData.map((player) => (
        <div className="card bg-base-100 shadow-sm p-5">
          <figure>
            <img
              className="w-full h-[300px] object-cover"
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
                <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
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
              <button className="btn">Choose player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
