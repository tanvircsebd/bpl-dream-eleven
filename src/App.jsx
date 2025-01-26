import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  const [coin, setCoin] = useState(0);

  const [prevCoin, setPrevCoin] = useState(0);
  const handleAddCredit = () => {
    setCoin(prevCoin + 500);
    setPrevCoin(coin + 500);
  };

  const handleReduceCoin = (amount) => {
    setCoin((prevCoin) => prevCoin - amount);
  };

  const handleRefundCoin = (amount) => {
    amount = parseInt(amount);
    setCoin((prevCoin) => prevCoin + amount);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar coin={coin} />
      <Banner handleAddCredit={handleAddCredit} />
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
