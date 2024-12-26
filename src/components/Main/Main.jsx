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

  return (
    <div className="p-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="join flex gap-4 mb-6">
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

// import React, { useEffect, useState } from "react";
// import Player from "../Player/Player";
// import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Main = () => {
//   const [players, setPlayers] = useState([]); // All available players
//   const [allPlayers, setAllPlayers] = useState([]); // Original list of players
//   const [selectedPlayers, setSelectedPlayers] = useState([]); // Selected players
//   const [showSelected, setShowSelected] = useState(false); // Toggle between available and selected players
//   const [coin, setCoin] = useState(0); // Initial coin balance

//   const FREE_CREDIT = 500000; // Amount credited when claiming free credit

//   // Handle selecting a player
//   const handleSelectedPlayer = (player) => {
//     // Check if the player is already selected
//     if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
//       toast.error("Player is already selected!");
//       return;
//     }

//     // Check if the user has enough coins
//     if (coin < player.biddingPrice) {
//       toast.error("You don't have enough coins to select this player!");
//       return;
//     }

//     // Check if the limit of 6 players is reached
//     if (selectedPlayers.length >= 6) {
//       toast.error("You cannot select more than 6 players!");
//       return;
//     }

//     // Deduct coins and add the player to the selected list
//     setSelectedPlayers([...selectedPlayers, player]);
//     setCoin((prevCoin) => prevCoin - player.biddingPrice);

//     toast.success(`${player.name} has been added successfully!`);
//   };

//   // Claim free credit
//   const claimFreeCredit = () => {
//     setCoin((prevCoin) => prevCoin + FREE_CREDIT);
//     toast.success(`You have received ${FREE_CREDIT} coins!`);
//   };

//   // Fetch players data on initial render
//   useEffect(() => {
//     fetch("players.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setPlayers(data.players);
//         setAllPlayers(data.players); // Backup of all players
//       });
//   }, []);

//   // Toggle view between available and selected players
//   const handleToggleView = (showSelectedPlayers) => {
//     setShowSelected(showSelectedPlayers);
//     if (!showSelectedPlayers) {
//       setPlayers(allPlayers); // Show all available players
//     }
//   };

//   // Remove player from the selected list
//   const handleRemovePlayer = (id) => {
//     const removedPlayer = selectedPlayers.find((p) => p.playerId === id);
//     const updatedList = selectedPlayers.filter((p) => p.playerId !== id);
//     setSelectedPlayers(updatedList);

//     // Refund coins for the removed player
//     if (removedPlayer) {
//       setCoin((prevCoin) => prevCoin + removedPlayer.biddingPrice);
//     }

//     toast.info("Player has been removed!");
//   };

//   return (
//     <div className="p-8">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Coin Balance and Claim Free Credit */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-xl font-bold">Coins: {coin}</h2>
//         </div>
//         <div>
//           <button
//             onClick={claimFreeCredit}
//             className="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-lg shadow-md"
//           >
//             Claim Free Credit
//           </button>
//         </div>
//       </div>

//       {/* Toggle Buttons */}
//       <div className="join flex gap-4 mb-6">
//         <button
//           onClick={() => handleToggleView(false)}
//           className={`btn join-item ${
//             !showSelected ? "bg-yellow-300 font-bold" : ""
//           }`}
//         >
//           Available
//         </button>
//         <button
//           onClick={() => handleToggleView(true)}
//           className={`btn join-item ${
//             showSelected ? "bg-yellow-300 font-bold" : ""
//           }`}
//         >
//           Selected ({selectedPlayers.length})
//         </button>
//       </div>

//       {/* Available or Selected Players Section */}
//       {showSelected ? (
//         <SelectedPlayers
//           players={selectedPlayers}
//           handleRemovePlayer={handleRemovePlayer}
//         />
//       ) : (
//         <div className="grid grid-cols-3 gap-6">
//           {players.map((player) => (
//             <Player
//               key={player.playerId}
//               player={player}
//               handleSelectedPlayer={handleSelectedPlayer}
//               selectedPlayers={selectedPlayers}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;

// import React, { useEffect, useState } from "react";
// import Player from "../Player/Player";
// import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Main = () => {
//   const [players, setPlayers] = useState([]); // All available players
//   const [allPlayers, setAllPlayers] = useState([]); // Original list of players
//   const [selectedPlayers, setSelectedPlayers] = useState([]); // Selected players
//   const [showSelected, setShowSelected] = useState(false); // Toggle between available and selected players
//   const [coin, setCoin] = useState(100); // Initial coin balance

//   // Handle selecting a player
//   const handleSelectedPlayer = (player) => {
//     // Check if player is already selected
//     if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
//       toast.error("Player is already selected!");
//       return;
//     }

//     // Check if the limit of 6 players is reached
//     if (selectedPlayers.length >= 6) {
//       toast.error("You cannot select more than 6 players!");
//       return;
//     }

//     // Check if the user has enough coins
//     if (coin < player.price) {
//       toast.error("You don't have enough coins to select this player!");
//       return;
//     }

//     // Deduct coins and add the player to the selected list
//     setSelectedPlayers([...selectedPlayers, player]);
//     setCoin((prevCoin) => prevCoin - player.price);
//     toast.success(`${player.name} has been added successfully!`);
//   };

//   // Fetch players data on initial render
//   useEffect(() => {
//     fetch("players.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setPlayers(data.players);
//         setAllPlayers(data.players); // Backup of all players
//       });
//   }, []);

//   // Toggle view between available and selected players
//   const handleToggleView = (showSelectedPlayers) => {
//     setShowSelected(showSelectedPlayers);
//     if (!showSelectedPlayers) {
//       setPlayers(allPlayers); // Show all available players
//     }
//   };

//   // Remove player from the selected list
//   const handleRemovePlayer = (id) => {
//     const removedPlayer = selectedPlayers.find((p) => p.playerId === id);
//     const updatedList = selectedPlayers.filter((p) => p.playerId !== id);
//     setSelectedPlayers(updatedList);

//     // Refund coins for the removed player
//     if (removedPlayer) {
//       setCoin((prevCoin) => prevCoin + removedPlayer.price);
//     }

//     toast.info("Player has been removed!");
//   };

//   return (
//     <div className="p-8">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Coin Balance and Toggle Buttons */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-xl font-bold">Coins: {coin}</h2>
//         </div>
//         <div className="join flex gap-4">
//           <button
//             onClick={() => handleToggleView(false)}
//             className={`btn join-item ${
//               !showSelected ? "bg-yellow-300 font-bold" : ""
//             }`}
//           >
//             Available
//           </button>
//           <button
//             onClick={() => handleToggleView(true)}
//             className={`btn join-item ${
//               showSelected ? "bg-yellow-300 font-bold" : ""
//             }`}
//           >
//             Selected ({selectedPlayers.length})
//           </button>
//         </div>
//       </div>

//       {/* Available or Selected Players Section */}
//       {showSelected ? (
//         <SelectedPlayers
//           players={selectedPlayers}
//           handleRemovePlayer={handleRemovePlayer}
//         />
//       ) : (
//         <div className="grid grid-cols-3 gap-6">
//           {players.map((player) => (
//             <Player
//               key={player.playerId}
//               player={player}
//               handleSelectedPlayer={handleSelectedPlayer}
//               selectedPlayers={selectedPlayers}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;

// import React, { useEffect, useState } from "react";
// import Player from "../Player/Player";
// import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Main = () => {
//   const [players, setPlayers] = useState([]); // All available players
//   const [allPlayers, setAllPlayers] = useState([]); // Original list of players
//   const [selectedPlayers, setSelectedPlayers] = useState([]); // Selected players
//   const [showSelected, setShowSelected] = useState(false); // Toggle between available and selected players

//   // Handle selecting a player
//   const handleSelectedPlayer = (player) => {
//     // Check if player is already selected
//     if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
//       toast.error("Player is already selected!");
//       return;
//     }
//     // Check if the limit of 6 players is reached
//     if (selectedPlayers.length >= 6) {
//       toast.error("You cannot select more than 6 players!");
//       return;
//     }

//     // Add the player to the selectedPlayers list
//     setSelectedPlayers([...selectedPlayers, player]);
//     toast.success(`${player.name} has been added successfully!`);
//   };

//   // Fetch players data on initial render
//   useEffect(() => {
//     fetch("players.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setPlayers(data.players);
//         setAllPlayers(data.players); // Backup of all players
//       });
//   }, []);

//   // Toggle view between available and selected players
//   const handleToggleView = (showSelectedPlayers) => {
//     setShowSelected(showSelectedPlayers);
//     if (!showSelectedPlayers) {
//       setPlayers(allPlayers); // Show all available players
//     }
//   };

//   // Remove player from selected list
//   const handleRemovePlayer = (id) => {
//     const updatedList = selectedPlayers.filter((p) => p.playerId !== id);
//     setSelectedPlayers(updatedList);
//     toast.info("Player has been removed!");
//   };

//   return (
//     <div className="p-8">
//       <ToastContainer position="top-right" autoClose={3000} />

//       <div className="join flex justify-end gap-4 mb-6">
//         <button
//           onClick={() => handleToggleView(false)}
//           className={`btn join-item ${
//             !showSelected ? "bg-yellow-300 font-bold" : ""
//           }`}
//         >
//           Available
//         </button>
//         <button
//           onClick={() => handleToggleView(true)}
//           className={`btn join-item ${
//             showSelected ? "bg-yellow-300 font-bold" : ""
//           }`}
//         >
//           Selected ({selectedPlayers.length})
//         </button>
//       </div>

//       {showSelected ? (
//         <SelectedPlayers
//           players={selectedPlayers}
//           handleRemovePlayer={handleRemovePlayer}
//         />
//       ) : (
//         <div className="grid grid-cols-3 gap-6">
//           {players.map((player) => (
//             <Player
//               key={player.playerId}
//               player={player}
//               handleSelectedPlayer={handleSelectedPlayer}
//               selectedPlayers={selectedPlayers}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;

// import React, { useEffect, useState } from "react";
// import Player from "../Player/Player";
// import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

// const Main = () => {
//   const [players, setPlayers] = useState([]); // All available players
//   const [allPlayers, setAllPlayers] = useState([]); // Original list of players
//   const [selectedPlayers, setSelectedPlayers] = useState([]); // Selected players
//   const [showSelected, setShowSelected] = useState(false); // Toggle between available and selected players

//   // Handle selecting a player
//   const handleSelectedPlayer = (player) => {
//     if (!selectedPlayers.find((p) => p.playerId === player.playerId)) {
//       setSelectedPlayers([...selectedPlayers, player]);
//     }
//   };

//   // Fetch players data on initial render
//   useEffect(() => {
//     fetch("players.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setPlayers(data.players);
//         setAllPlayers(data.players); // Backup of all players
//       });
//   }, []);

//   // Toggle view between available and selected players
//   const handleToggleView = (showSelectedPlayers) => {
//     setShowSelected(showSelectedPlayers);
//     if (!showSelectedPlayers) {
//       setPlayers(allPlayers); // Show all available players
//     }
//   };

//   return (
//     <div className="p-8">
//       <div className="join flex justify-end gap-4 mb-6">
//         <button
//           onClick={() => handleToggleView(false)}
//           className={`btn join-item ${
//             !showSelected ? "bg-yellow-300 font-bold" : ""
//           }`}
//         >
//           Available
//         </button>
//         <button
//           onClick={() => handleToggleView(true)}
//           className={`btn join-item ${
//             showSelected ? "bg-yellow-300 font-bold" : ""
//           }`}
//         >
//           Selected ({selectedPlayers.length})
//         </button>
//       </div>

//       {showSelected ? (
//         <SelectedPlayers
//           players={selectedPlayers}
//           handleRemovePlayer={(id) =>
//             setSelectedPlayers(selectedPlayers.filter((p) => p.playerId !== id))
//           }
//         />
//       ) : (
//         <div className="grid grid-cols-3 gap-6">
//           {players.map((player) => (
//             <Player
//               key={player.playerId}
//               player={player}
//               handleSelectedPlayer={handleSelectedPlayer}
//               selectedPlayers={selectedPlayers}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;

// import React, { useEffect, useState } from "react";
// import Player from "../Player/Player";

// const Main = () => {
//   const [players, setPlayers] = useState([]); // All available players
//   const [allPlayers, setAllPlayers] = useState([]); // Stores the original list of players
//   const [selectedPlayers, setSelectedPlayers] = useState([]); // Selected players

//   // Handle selecting a player
//   const handleSelectedPlayer = (player) => {
//     if (!selectedPlayers.find((p) => p.playerId === player.playerId)) {
//       setSelectedPlayers([...selectedPlayers, player]);
//     }
//   };

//   // Fetch players data on initial render
//   useEffect(() => {
//     fetch("players.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setPlayers(data.players);
//         setAllPlayers(data.players); // Keep a backup of all players
//       });
//   }, []);

//   // Display all available players
//   const handleAvailablePlayers = () => {
//     setPlayers(allPlayers);
//   };

//   // Display only selected players
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
//           Selected ({selectedPlayers.length})
//         </button>
//       </div>
//       <div className="flex flex-wrap">
//         {players.map((player) => (
//           <Player
//             key={player.playerId}
//             player={player}
//             handleSelectedPlayer={handleSelectedPlayer}
//             selectedPlayers={selectedPlayers}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Main;

// // import React, { useEffect, useState } from "react";
// // import Player from "../Player/Player";

// // const Main = () => {
// //   const [players, setPlayers] = useState([]);
// //   const [selectedPlayers, setSelectedPlayers] = useState([]);

// //   const handleSelectedPlayer = (player) => {
// //     console.log(player);
// //     const selectedPlayers = [...setSelectedPlayers, player];
// //     setSelectedPlayers(selectedPlayers);
// //   };

// //   useEffect(() => {
// //     fetch("players.json")
// //       .then((res) => res.json())
// //       .then((data) => setPlayers(data.players));
// //   }, []);

// //   const handleAvailablePlayers = () => {
// //     useEffect(() => {
// //       fetch("players.json")
// //         .then((res) => res.json())
// //         .then((data) => setPlayers(data.players));
// //     }, []);
// //   };

// //   const handleSelectedPlayers = () => {
// //     setPlayers(selectedPlayers);
// //   };
// //   return (
// //     <div>
// //       <div className="join flex justify-end">
// //         <button onClick={handleAvailablePlayers} className="btn join-item">
// //           Available
// //         </button>
// //         <button onClick={handleSelectedPlayers} className="btn join-item">
// //           Selected (0)
// //         </button>
// //       </div>
// //       <div className="flex flex-wrap">
// //         {players.map((player) => (
// //           <Player
// //             key={player.playerId}
// //             player={player}
// //             handleSelectedPlayer={handleSelectedPlayer}
// //             selectedPlayers={selectedPlayers}
// //           ></Player>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Main;
