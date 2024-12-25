import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const Main = () => {
  const [players, setPlayers] = useState([]); // All available players
  const [allPlayers, setAllPlayers] = useState([]); // Stores the original list of players
  const [selectedPlayers, setSelectedPlayers] = useState([]); // Selected players

  // Handle selecting a player
  const handleSelectedPlayer = (player) => {
    if (!selectedPlayers.find((p) => p.playerId === player.playerId)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  // Fetch players data on initial render
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data.players);
        setAllPlayers(data.players); // Keep a backup of all players
      });
  }, []);

  // Display all available players
  const handleAvailablePlayers = () => {
    setPlayers(allPlayers);
  };

  // Display only selected players
  const handleSelectedPlayers = () => {
    setPlayers(selectedPlayers);
  };

  return (
    <div>
      <div className="join flex justify-end">
        <button onClick={handleAvailablePlayers} className="btn join-item">
          Available
        </button>
        <button onClick={handleSelectedPlayers} className="btn join-item">
          Selected ({selectedPlayers.length})
        </button>
      </div>
      <div className="flex flex-wrap">
        {players.map((player) => (
          <Player
            key={player.playerId}
            player={player}
            handleSelectedPlayer={handleSelectedPlayer}
            selectedPlayers={selectedPlayers}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;

// import React, { useEffect, useState } from "react";
// import Player from "../Player/Player";

// const Main = () => {
//   const [players, setPlayers] = useState([]);
//   const [selectedPlayers, setSelectedPlayers] = useState([]);

//   const handleSelectedPlayer = (player) => {
//     console.log(player);
//     const selectedPlayers = [...setSelectedPlayers, player];
//     setSelectedPlayers(selectedPlayers);
//   };

//   useEffect(() => {
//     fetch("players.json")
//       .then((res) => res.json())
//       .then((data) => setPlayers(data.players));
//   }, []);

//   const handleAvailablePlayers = () => {
//     useEffect(() => {
//       fetch("players.json")
//         .then((res) => res.json())
//         .then((data) => setPlayers(data.players));
//     }, []);
//   };

//   const handleSelectedPlayers = () => {
//     setPlayers(selectedPlayers);
//   };
//   return (
//     <div>
//       <div className="join flex justify-end">
//         <button onClick={handleAvailablePlayers} className="btn join-item">
//           Available
//         </button>
//         <button onClick={handleSelectedPlayers} className="btn join-item">
//           Selected (0)
//         </button>
//       </div>
//       <div className="flex flex-wrap">
//         {players.map((player) => (
//           <Player
//             key={player.playerId}
//             player={player}
//             handleSelectedPlayer={handleSelectedPlayer}
//             selectedPlayers={selectedPlayers}
//           ></Player>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Main;
