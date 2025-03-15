// import React, { useEffect, useRef, memo } from "react";
// import "./TradingViewWidget.css";

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//         {
//           "autosize": true,
//           "symbol": "BINANCE:BTCUSDT",
//           "interval": "D",
//           "timezone": "Etc/UTC",
//           "theme": "dark",
//           "style": "1",
//           "locale": "en",
//           "hide_side_toolbar": false,
//           "allow_symbol_change": true,
//           "calendar": false,
//           "support_host": "https://www.tradingview.com"
//         }`;
//     container.current.appendChild(script);
//   }, []);

//   return (
//     <div className="trading-view-wrap1">
//       <h2 className="chart-title">Personal Trading Chart</h2>
//       <div className="tradingview-widget-container" ref={container}>
//         <div className="tradingview-widget-container__widget"></div>
//         <div className="tradingview-widget-copyright">
//           <a
//             href="https://www.tradingview.com/"
//             rel="noopener noreferrer"
//             // target="_blank"
//           >
//             <div className="blue-text"></div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);

import React, { useEffect, useRef, useState, memo } from "react";
import { Skeleton } from "@mui/material";
import "./TradingViewWidget.css";

function TradingViewWidget() {
  const container = useRef();
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

    // Handle script load
    script.onload = () => {
      setIsLoading(false); // Set loading to false when script loads
    };
    script.onerror = () => {
      console.error("Error loading TradingView script");
      setIsLoading(false); // Optionally handle error case
    };

    container.current.appendChild(script);

    // Cleanup to avoid memory leaks
    return () => {
      if (container.current && script.parentNode === container.current) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="trading-view-wrap1">
      <h2 className="chart-title">Personal Trading Chart</h2>
      <div className="tradingview-widget-container" ref={container}>
        {isLoading ? (
          // Skeleton while loading
          <Skeleton
            variant="rectangular"
            width="100%"
            height={500} // Adjust height to match chart size
            animation="wave"
            sx={{ bgcolor: "#444" }} // Match dark theme
          />
        ) : (
          // Chart content when loaded
          <>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/"
                rel="noopener noreferrer"
                // target="_blank"
              >
                <div className="blue-text"></div>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
