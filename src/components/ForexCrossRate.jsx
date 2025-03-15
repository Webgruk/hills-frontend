// // ForexCrossRate.jsx
// import React, { useEffect, useRef } from "react";
// import "./ForexCrossRate.css"; // Optional: if you want to separate styles

// const ForexCrossRate = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Create script element
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       height: 475,
//       currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
//       isTransparent: false,
//       colorTheme: "dark",
//       locale: "en",
//       backgroundColor: "#000000",
//     });

//     // Append script to the container
//     if (containerRef.current) {
//       containerRef.current.appendChild(script);
//     }

//     // Cleanup function to remove script when component unmounts
//     return () => {
//       if (containerRef.current && script.parentNode) {
//         containerRef.current.removeChild(script);
//       }
//     };
//   }, []);

//   return (
//     <div className="tradingview-widget-wrapper">
//       <h2 className="widget-title">Forex Fundamental Data</h2>
//       <div className="tradingview-widget-container" ref={containerRef}>
//         <div className="tradingview-widget-container__widget"></div>
//         <div className="tradingview-widget-copyright">
//           <a
//             href="https://www.tradingview.com/"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             <div className="blue-text"></div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForexCrossRate;

// ForexCrossRate.jsx
import React, { useEffect, useRef, useState } from "react";
import { Skeleton } from "@mui/material";
import "./ForexCrossRate.css"; // Optional: if you want to separate styles

const ForexCrossRate = () => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      height: 475,
      currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
      backgroundColor: "#000000",
    });

    // Handle script load
    script.onload = () => {
      setIsLoading(false); // Set loading to false when script loads
    };
    script.onerror = () => {
      console.error("Error loading Forex Cross Rates script");
      setIsLoading(false); // Handle error case
    };

    // Append script to the container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-wrapper">
      <h2 className="widget-title">Forex Fundamental Data</h2>
      <div className="tradingview-widget-container" ref={containerRef}>
        {isLoading ? (
          // Skeleton while loading
          <Skeleton
            variant="rectangular"
            width="100%"
            height={475} // Match the widget's specified height
            animation="wave"
            sx={{ bgcolor: "#444" }} // Dark theme to match backgroundColor
          />
        ) : (
          // Widget content when loaded
          <>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="blue-text"></div>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForexCrossRate;
