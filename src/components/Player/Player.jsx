import React from "react";

const Player = ({ player, handleSelectedPlayer, selectedPlayers }) => {
  const {
    playerId,
    name,
    country,
    image,
    role,
    battingBowlingType,
    biddingPrice,
  } = player;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>role</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleSelectedPlayer(player)}
            className="btn btn-primary"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
