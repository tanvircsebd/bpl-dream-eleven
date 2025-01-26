import React from "react";
import { FaRegFlag } from "react-icons/fa";

const Player = ({ player, handleSelectedPlayer, selectedPlayers }) => {
  const isSelected = selectedPlayers.some(
    (p) => p.playerId === player.playerId
  );

  return (
    <div className="border rounded-lg p-4 w-72 bg-white shadow-md">
      {/* Player Image */}
      <div className="h-36 bg-gray-200 rounded-lg overflow-hidden mb-4">
        {player.image ? (
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Player Name */}
      <h3 className="font-bold text-lg flex items-center mb-2">
        {player.name}
      </h3>

      {/* Player Country */}
      <p className="text-gray-500 flex items-center mb-2">
        <span className="material-icons text-gray-600 mr-2">
          <FaRegFlag />
        </span>
        {player.country}
      </p>

      {/* Player Role */}
      <p className="badge bg-gray-200 text-gray-700 py-1 px-3 rounded-md mb-4">
        {player.role}
      </p>

      {/* Player Batting/Bowling Type */}
      <div className="text-sm text-gray-500 mb-2">
        <p>
          <strong>Role:</strong> {player.battingBowlingType}
        </p>
        <p>
          <strong>Bidding Price:</strong> ${player.biddingPrice}k
        </p>
      </div>

      {/* Choose Player Button */}
      <button
        onClick={() => handleSelectedPlayer(player)}
        disabled={isSelected}
        className={`btn btn-primary w-full ${isSelected ? "btn-disabled" : ""}`}
      >
        {isSelected ? "Selected" : "Choose Player"}
      </button>
    </div>
  );
};

export default Player;
