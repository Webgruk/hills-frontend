// import React from "react";

// const Cryptostats = () => {
//   return <div>Cryptostats</div>;
// };

// export default Cryptostats;
// //

// import React, { useState, useEffect } from "react";
// import "./Crypto.css";
// import axios from "axios";
// import { CoinList } from "../config/api";

// const CryptoStatsSection = () => {
//   const [coinData, setCoinData] = useState([]);
//   const [stats] = useState({
//     userWallets: 154320,
//     monthlyTransactions: 873450,
//     yearlyTransactions: 10481400,
//     tradingVolume: 2385000000,
//     registeredInvestors: 98210,
//   });

//   const fetchAll = async () => {
//     await axios
//       .get(CoinList("USD"))
//       .then((response) => {
//         // Store response in state
//         setCoinData(response?.data);
//       })

//       .catch((error) => console.error("Error fetching data:", error));
//   };

//   // Simulate fetching coin data
//   useEffect(() => {
//     fetchAll();
//   }, []);

//   return (
//     <div className="crypto-stats-container">
//       {/* Top Border Decoration */}
//       <div className="border-top">
//         <div className="border-gradient"></div>
//       </div>

//       {/* Coin Slider Section */}
//       <div className="coin-slider">
//         <div className="coin-track">
//           {coinData.map((coin, index) => (
//             <div key={`${coin.id}-${index}`} className="coin-item">
//               <img src={coin.image} alt={coin.name} className="coin-logo" />
//               <div className="coin-info">
//                 <span className="coin-name">{coin.symbol}</span>
//                 <span className="coin-price">
//                   ${coin.current_price.toLocaleString()}
//                 </span>
//                 <span
//                   className={`coin-change ${
//                     coin.price_change_percentage_24h >= 0
//                       ? "positive"
//                       : "negative"
//                   }`}
//                 >
//                   {` ( ${coin.price_change_percentage_24h >= 0 ? "+" : ""}`}
//                   {`  ${coin.price_change_percentage_24h}%  )`}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Statistics Section */}
//       <div className="stats-section">
//         <div className="stats-grid">
//           <div className="stat-item">
//             <h3>{stats.userWallets.toLocaleString()}</h3>
//             <p>User Wallets</p>
//           </div>
//           <div className="stat-item">
//             <h3>{stats.monthlyTransactions.toLocaleString()}</h3>
//             <p>Monthly Transactions</p>
//           </div>
//           <div className="stat-item">
//             <h3>{stats.yearlyTransactions.toLocaleString()}</h3>
//             <p>Yearly Transactions</p>
//           </div>
//           <div className="stat-item">
//             <h3>${stats.tradingVolume.toLocaleString()}</h3>
//             <p>Trading Volume</p>
//           </div>
//           <div className="stat-item">
//             <h3>{stats.registeredInvestors.toLocaleString()}</h3>
//             <p>Registered Investors</p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Border Decoration */}
//       <div className="border-bottom">
//         <div className="border-gradient"></div>
//       </div>
//     </div>
//   );
// };

// export default CryptoStatsSection;
// import React from "react";

// const Cryptostats = () => {
//   return <div>Cryptostats</div>;
// };

// export default Cryptostats;
// //

import React, { useState, useEffect } from "react";
import "./Crypto.css";
import axios from "axios";
import { CoinList } from "../config/api";

const CryptoStatsSection = () => {
  const [coinData, setCoinData] = useState([]);

  // const [stats] = useState({
  //   userWallets: 154320,
  //   monthlyTransactions: 873450,
  //   yearlyTransactions: 10481400,
  //   tradingVolume: 2385000000,
  //   registeredInvestors: 98210,
  // });

  const stats = {
    userWallets: 154320,
    monthlyTransactions: 873450,
    yearlyTransactions: 10481400,
    tradingVolume: 2385000000,
    registeredInvestors: 98210,
  };

  const fetchAll = async () => {
    await axios
      .get(CoinList("USD"))
      .then((response) => {
        // Store response in state
        setCoinData(response?.data);
      })

      .catch((error) => console.error("Error fetching data:", error));
  };

  console.log(coinData);

  // Simulate fetching coin data
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="crypto-stats-container">
      {/* Top Border Decoration */}
      {/* <div className="border-top">
        <div className="border-gradient"></div>
      </div> */}

      {/* Coin Slider Section */}
      <div className="coin-slider">
        <div className="coin-track">
          {coinData.map((coin, index) => (
            <div key={`${coin.id}-${index}`} className="coin-item">
              <img src={coin.image} alt={coin.name} className="coin-logo" />
              <div className="coin-info">
                <span className="coin-name">{coin.symbol}</span>
                <span className="coin-price">
                  ${coin.current_price.toLocaleString()}
                </span>
                <span
                  className={`coin-change ${
                    coin.price_change_percentage_24h >= 0
                      ? "positive"
                      : "negative"
                  }`}
                >
                  {` ( ${coin.price_change_percentage_24h >= 0 ? "+" : ""}`}
                  {`  ${coin.price_change_percentage_24h}%  )`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border Decoration */}
      <div className="border-bottom">
        <div className="border-gradient"></div>
      </div>
    </div>
  );
};

export default CryptoStatsSection;
