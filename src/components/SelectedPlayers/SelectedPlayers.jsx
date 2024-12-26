import React from "react";

const SelectedPlayers = ({ players, handleRemovePlayer }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Selected Players ({players.length}/6)
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {players.map((player) => (
          <div
            key={player.playerId}
            className="flex items-center justify-between border p-4 rounded-lg bg-white shadow-md"
          >
            {/* Player Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-bold text-lg">{player.name}</h3>
                <p className="text-gray-500">{player.specialty}</p>
              </div>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => handleRemovePlayer(player.playerId)}
              className="text-red-500 hover:text-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Add More Player Button */}
      <div className="mt-6">
        <button
          className="btn btn-primary bg-yellow-300 text-black font-bold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-400"
          onClick={() => {
            // Optional: Scroll to available players section or navigate
          }}
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;

// import React from "react";

// const SelectedPlayers = ({ players, handleRemovePlayer }) => {
//   return (
//     <div className="grid grid-cols-3 gap-6">
//       {players.map((player) => (
//         <div
//           key={player.playerId}
//           className="border rounded-lg p-4 bg-white shadow-md"
//         >
//           <h3 className="font-bold text-lg mb-2">{player.name}</h3>
//           <p className="text-gray-500">{player.country}</p>
//           <button
//             onClick={() => handleRemovePlayer(player.playerId)}
//             className="btn btn-error w-full mt-4"
//           >
//             Remove Player
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SelectedPlayers;

// import React from "react";

// const SelectedPlayers = ({ players, handleRemovePlayer }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">
//         Selected Players ({players.length}/6)
//       </h2>
//       <div className="flex flex-col gap-4">
//         {players.map((player) => (
//           <div
//             key={player.playerId}
//             className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
//           >
//             <div>
//               <h3 className="font-bold">{player.name}</h3>
//               <p className="text-gray-600">{player.type}</p>
//             </div>
//             <button
//               onClick={() => handleRemovePlayer(player.playerId)}
//               className="text-red-500 hover:text-red-700"
//             >
//               🗑️
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SelectedPlayers;
