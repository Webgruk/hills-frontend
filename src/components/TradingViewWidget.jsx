// // TradingViewWidget.jsx
// import React, { useEffect, useRef, memo } from "react";

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
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "end",
//         background: "rgba(36, 36, 36, 0.95)",
//         position: "relative",
//         height: "80vh",
//         overflow: "hidden",
//         width: "100%",
//       }}
//     >
//       <div>
//         <h3>item</h3>
//       </div>
//       <div
//         className="tradingview-widget-container"
//         ref={container}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <div
//           className="tradingview-widget-container__widget"
//           style={{ height: "calc(100% - 32px)", width: "100%" }}
//         ></div>
//         <div className="tradingview-widget-copyright">
//           <a
//             href="https://www.tradingview.com/"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             <span className="blue-text">Track all markets on TradingView</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);

// TradingViewWidget.jsx

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";
import "./TradingViewWidget.css";

function TradingViewWidget() {
  const container = useRef();

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
    container.current.appendChild(script);
  }, []);

  return (
    <div className="trading-view-wrapper">
      <h2 className="chart-title">Personal Trading Chart</h2>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
