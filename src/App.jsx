import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  const [coin, setCoin] = useState(0); // State to manage coin count

  const [prevCoin, setPrevCoin] = useState(0);
  // let prevCoin = 0;
  // Function to handle adding credit
  const handleAddCredit = () => {
    // setCoin(() => prevCoin + 500000); // Add credit to coin
    setCoin(prevCoin + 500);
    setPrevCoin(coin + 500);
    // console.log(prevCoin);
  };

  // Function to reduce coin when a player is selected
  const handleReduceCoin = (amount) => {
    setCoin((prevCoin) => prevCoin - amount);
  };

  // Function to refund coin when a player is removed
  const handleRefundCoin = (amount) => {
    // console.log(coin);
    // console.log(typeof prevCoin, typeof amount);
    amount = parseInt(amount);
    setCoin((prevCoin) => prevCoin + amount);
    // console.log(coin);
    // console.log("prevCoin", prevCoin, "amount", amount);
    // console.log("coin", coin, "amount", amount);
    // const newCoin = coin + amount;
    // setCoin((prevCoin) => prevCoin + amount);
    // setCoin(newCoin);
    // setPrevCoin()
    // setCoin(coin + amount);
    // setPrevCoin(coin + amount);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar coin={coin} /> {/* Pass the coin state */}
      <Banner handleAddCredit={handleAddCredit} /> {/* Pass the handler */}
      <Main
        coin={coin}
        handleReduceCoin={handleReduceCoin}
        handleRefundCoin={handleRefundCoin}
      />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Banner from "./components/Banner/Banner";
// import Main from "./components/Main/Main";
// import Newsletter from "./components/Newsletter/Newsletter";
// import Footer from "./components/Footer/Footer";

// function App() {
//   const [coin, setCoin] = useState(0); // State to manage coin count

//   // Function to handle adding credit
//   const handleAddCredit = () => {
//     setCoin((prevCoin) => prevCoin + 500000); // Increase coin by 10 (or any value you choose)
//   };

//   return (
//     <>
//       <Navbar coin={coin} /> {/* Pass the coin state */}
//       <Banner handleAddCredit={handleAddCredit} /> {/* Pass the handler */}
//       <Main />
//       <Newsletter />
//       <Footer />
//     </>
//   );
// }

// export default App;

// import Banner from "./components/Banner/Banner";
// import Footer from "./components/Footer/Footer";
// import Main from "./components/Main/Main";
// import Navbar from "./components/Navbar/Navbar";
// import Newsletter from "./components/Newsletter/Newsletter";

// function App() {
//   return (
//     <>
//       <Navbar></Navbar>
//       <Banner></Banner>
//       <Main></Main>
//       <Newsletter></Newsletter>
//       <Footer></Footer>
//     </>
//   );
// }

// export default App;
