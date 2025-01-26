import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = ({ coin, handleReduceCoin, handleRefundCoin }) => {
  const [players, setPlayers] = useState([]);
  const [allPlayers, setAllPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data.players);
        setAllPlayers(data.players);
      });
  }, []);

  const handleSelectedPlayer = (player) => {
    if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
      toast.error("Player is already selected!");
      return;
    }

    if (coin < player.biddingPrice) {
      toast.error("You don't have enough coins to select this player!");
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.error("You cannot select more than 6 players!");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    handleReduceCoin(player.biddingPrice); // Deduct coins
    toast.success(`${player.name} has been added successfully!`);
  };

  const handleRemovePlayer = (id) => {
    const removedPlayer = selectedPlayers.find((p) => p.playerId === id);
    setSelectedPlayers(selectedPlayers.filter((p) => p.playerId !== id));
    if (removedPlayer) {
      handleRefundCoin(removedPlayer.biddingPrice); // Refund coins
    }
    toast.info("Player has been removed!");
  };

  const handleToggleView = (showSelectedPlayers) => {
    setShowSelected(showSelectedPlayers);
    if (!showSelectedPlayers) {
      setPlayers(allPlayers);
    }
  };

  // Function to show available players
  const handleShowAvailablePlayers = () => {
    setPlayers(allPlayers); // Show all available players
    setShowSelected(false); // Switch to available players view
  };

  return (
    <div className="p-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="join gap-4 mb-6 mx-96">
        <button
          onClick={() => handleToggleView(false)}
          className={`btn join-item ${
            !showSelected ? "bg-yellow-300 font-bold" : ""
          }`}
        >
          Available
        </button>
        <button
          onClick={() => handleToggleView(true)}
          className={`btn join-item ${
            showSelected ? "bg-yellow-300 font-bold" : ""
          }`}
        >
          Selected ({selectedPlayers.length})
        </button>
      </div>
      {showSelected ? (
        <SelectedPlayers
          // setPlayers={setPlayers} // Pass setPlayers to SelectedPlayers
          // allPlayers={allPlayers} // Pass allPlayers to SelectedPlayers
          handleShowAvailablePlayers={handleShowAvailablePlayers} // Pass the function to SelectedPlayers
          players={selectedPlayers}
          handleRemovePlayer={handleRemovePlayer}
        />
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {players.map((player) => (
            <Player
              key={player.playerId}
              player={player}
              handleSelectedPlayer={handleSelectedPlayer}
              selectedPlayers={selectedPlayers}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
