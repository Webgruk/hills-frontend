import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AccountBalanceWallet,
  SyncAlt,
  Timeline,
  MonetizationOn,
  Group,
} from "@mui/icons-material";
import "./stat.css";

const StatSection = () => {
  const stats = {
    userWallets: 154320,
    monthlyTransactions: 873450,
    yearlyTransactions: 10481400,
    tradingVolume: 2385000000,
    registeredInvestors: 98210,
  };

  // Number animation hook
  const useNumberAnimation = (target) => {
    const [displayNumber, setDisplayNumber] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60 FPS

      const animate = () => {
        start += increment;
        if (start >= target) {
          setDisplayNumber(target);
          return;
        }
        setDisplayNumber(Math.floor(start));
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, [target]);

    return displayNumber;
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.05, boxShadow: "0 0 20px rgba(251, 192, 45, 0.5)" },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statItems = [
    {
      title: "User Wallets",
      value: useNumberAnimation(stats.userWallets),
      icon: <AccountBalanceWallet sx={{ fontSize: 40, color: "#A47E3B" }} />,
    },
    {
      title: "Monthly Transactions",
      value: useNumberAnimation(stats.monthlyTransactions),
      icon: <SyncAlt sx={{ fontSize: 40, color: "#A47E3B" }} />,
    },
    {
      title: "Yearly Transactions",
      value: useNumberAnimation(stats.yearlyTransactions),
      icon: <Timeline sx={{ fontSize: 40, color: "#A47E3B" }} />,
    },
    {
      title: "Trading Volume",
      value: useNumberAnimation(stats.tradingVolume),
      prefix: "$",
      icon: <MonetizationOn sx={{ fontSize: 40, color: "#A47E3B" }} />,
    },
    {
      title: "Registered Investors",
      value: useNumberAnimation(stats.registeredInvestors),
      icon: <Group sx={{ fontSize: 40, color: "#A47E3B" }} />,
    },
  ];

  return (
    <motion.div
      className="stats-section"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <div className="stats-grid">
        {statItems.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            variants={cardVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={iconVariants} className="stat-icon">
              {item.icon}
            </motion.div>
            <motion.h3
              animate={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                },
              }}
            >
              {item.prefix || ""}
              {item.value.toLocaleString()}
            </motion.h3>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatSection;
