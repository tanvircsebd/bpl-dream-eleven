import React from "react";

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
        <span className="material-icons text-gray-600 mr-2">person</span>
        {player.name}
      </h3>

      {/* Player Country */}
      <p className="text-gray-500 flex items-center mb-2">
        <span className="material-icons text-gray-600 mr-2">flag</span>
        {player.country}
      </p>

      {/* Player Role */}
      <p className="badge bg-gray-200 text-gray-700 py-1 px-3 rounded-md mb-4">
        {player.role}
      </p>

      {/* Player Batting/Bowling Type */}
      <div className="text-sm text-gray-500 mb-2">
        <p>
          <strong>Batting/Bowling:</strong> {player.battingBowlingType}
        </p>
        <p>
          <strong>Bidding Price:</strong> ${player.biddingPrice}
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

// import React from "react";

// const Player = ({ player, handleSelectedPlayer, selectedPlayers }) => {
//   const isSelected = selectedPlayers.some(
//     (p) => p.playerId === player.playerId
//   );

//   return (
//     <div className="border rounded-lg p-4 w-72 bg-white shadow-md">
//       {/* Player Image */}
//       <div className="h-36 bg-gray-200 rounded-lg overflow-hidden mb-4">
//         {player.image ? (
//           <img
//             src={player.image}
//             alt={player.name}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center text-gray-400">
//             No Image
//           </div>
//         )}
//       </div>

//       {/* Player Name */}
//       <h3 className="font-bold text-lg flex items-center mb-2">
//         <span className="material-icons text-gray-600 mr-2">person</span>
//         {player.name}
//       </h3>

//       {/* Player Country */}
//       <p className="text-gray-500 flex items-center mb-2">
//         <span className="material-icons text-gray-600 mr-2">flag</span>
//         {player.country}
//       </p>

//       {/* Player Role */}
//       <p className="badge bg-gray-200 text-gray-700 py-1 px-3 rounded-md mb-4">
//         {player.role}
//       </p>

//       {/* Player Batting/Bowling Type */}
//       <div className="text-sm text-gray-500 mb-2">
//         <p>
//           <strong>Batting/Bowling:</strong> {player.battingBowlingType}
//         </p>
//         <p>
//           <strong>Bidding Price:</strong> ${player.biddingPrice}
//         </p>
//       </div>

//       {/* Choose Player Button */}
//       <button
//         onClick={() => handleSelectedPlayer(player)}
//         disabled={isSelected}
//         className={`btn btn-primary w-full ${isSelected ? "btn-disabled" : ""}`}
//       >
//         {isSelected ? "Selected" : "Choose Player"}
//       </button>
//     </div>
//   );
// };

// export default Player;

// import React from "react";

// const Player = ({ player, handleSelectedPlayer, selectedPlayers }) => {
//   const isSelected = selectedPlayers.some(
//     (p) => p.playerId === player.playerId
//   );

//   return (
//     <div className="border rounded-lg p-4 w-72 bg-white shadow-md">
//       <div className="h-36 bg-gray-200 rounded-lg overflow-hidden mb-4">
//         {player.image ? (
//           <img
//             src={player.image}
//             alt={player.name}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center text-gray-400">
//             No Image
//           </div>
//         )}
//       </div>
//       <h3 className="font-bold text-lg flex items-center mb-2">
//         <span className="material-icons text-gray-600 mr-2">person</span>
//         {player.name}
//       </h3>
//       <p className="text-gray-500 flex items-center mb-2">
//         <span className="material-icons text-gray-600 mr-2">flag</span>
//         {player.country}
//       </p>
//       <p className="badge bg-gray-200 text-gray-700 py-1 px-3 rounded-md mb-4">
//         {player.role}
//       </p>
//       <div className="text-sm text-gray-500 mb-2">
//         <p>
//           <strong>Rating:</strong> {player.rating}
//         </p>
//         <p>
//           <strong>Price:</strong> ${player.price}
//         </p>
//       </div>
//       <button
//         onClick={() => handleSelectedPlayer(player)}
//         disabled={isSelected}
//         className={`btn btn-primary w-full ${isSelected ? "btn-disabled" : ""}`}
//       >
//         {isSelected ? "Selected" : "Choose Player"}
//       </button>
//     </div>
//   );
// };

// export default Player;

// import React from "react";

// const Player = ({ player, handleSelectedPlayer, selectedPlayers }) => {
//   const {
//     playerId,
//     name,
//     country,
//     image,
//     role,
//     battingBowlingType,
//     biddingPrice,
//   } = player;
//   return (
//     <div className="card card-compact bg-base-100 w-96 shadow-xl">
//       <figure>
//         <img src={image} alt="Shoes" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{name}</h2>
//         <p>role</p>
//         <div className="card-actions justify-end">
//           <button
//             onClick={() => handleSelectedPlayer(player)}
//             className="btn btn-primary"
//           >
//             Choose Player
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Player;
